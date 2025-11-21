import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  company?: string;
  subject?: string;
  message: string;
  language?: string;
}

// HTML escape function to prevent XSS attacks
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

// Validate input lengths and content
function validateInput(data: ContactEmailRequest): { valid: boolean; error?: string } {
  if (!data.name || data.name.trim().length === 0) {
    return { valid: false, error: "Name is required" };
  }
  if (data.name.length > 100) {
    return { valid: false, error: "Name must be less than 100 characters" };
  }
  
  if (!data.email || data.email.trim().length === 0) {
    return { valid: false, error: "Email is required" };
  }
  if (data.email.length > 255) {
    return { valid: false, error: "Email must be less than 255 characters" };
  }
  
  if (data.company && data.company.length > 200) {
    return { valid: false, error: "Company name must be less than 200 characters" };
  }
  
  if (data.subject && data.subject.length > 200) {
    return { valid: false, error: "Subject must be less than 200 characters" };
  }
  
  if (!data.message || data.message.trim().length === 0) {
    return { valid: false, error: "Message is required" };
  }
  if (data.message.length > 5000) {
    return { valid: false, error: "Message must be less than 5000 characters" };
  }
  
  return { valid: true };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, subject, message, language = 'fr' }: ContactEmailRequest = await req.json();

    console.log("Processing contact form submission:", { name, email, company, language });

    // Validate input data
    const validation = validateInput({ name, email, company, subject, message, language });
    if (!validation.valid) {
      return new Response(
        JSON.stringify({ error: validation.error }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Sanitize all inputs to prevent XSS
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeCompany = company ? escapeHtml(company.trim()) : undefined;
    const safeSubject = subject ? escapeHtml(subject.trim()) : undefined;
    const safeMessage = escapeHtml(message.trim());

    // Send notification email to CRM Conseil
    const notificationEmail = await resend.emails.send({
      from: "CRM Conseil Contact <onboarding@resend.dev>",
      to: ["contact@crmconseil.com"],
      subject: `Nouveau message de ${safeName}${safeCompany ? ` (${safeCompany})` : ''}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        ${safeCompany ? `<p><strong>Entreprise:</strong> ${safeCompany}</p>` : ''}
        ${safeSubject ? `<p><strong>Sujet:</strong> ${safeSubject}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${safeMessage.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log("Notification email sent:", notificationEmail);

    // Send confirmation email to user
    const confirmationText = language === 'en' 
      ? {
          subject: "We received your message!",
          title: `Thank you for contacting us, ${safeName}!`,
          body: "We have received your message and will get back to you as soon as possible.",
          signature: "Best regards,<br>The CRM Conseil Team"
        }
      : {
          subject: "Nous avons reçu votre message !",
          title: `Merci de nous avoir contactés, ${safeName} !`,
          body: "Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.",
          signature: "Cordialement,<br>L'équipe CRM Conseil"
        };

    const confirmationEmail = await resend.emails.send({
      from: "CRM Conseil <onboarding@resend.dev>",
      to: [safeEmail],
      subject: confirmationText.subject,
      html: `
        <h1>${confirmationText.title}</h1>
        <p>${confirmationText.body}</p>
        <p>${confirmationText.signature}</p>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmail);

    return new Response(
      JSON.stringify({ 
        success: true,
        notificationId: notificationEmail.data?.id,
        confirmationId: confirmationEmail.data?.id
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
