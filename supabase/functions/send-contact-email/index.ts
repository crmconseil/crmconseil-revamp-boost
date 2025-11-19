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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, subject, message, language = 'fr' }: ContactEmailRequest = await req.json();

    console.log("Processing contact form submission:", { name, email, company, language });

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
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

    // Send notification email to CRM Conseil
    const notificationEmail = await resend.emails.send({
      from: "CRM Conseil Contact <onboarding@resend.dev>",
      to: ["contact@crmconseil.com"],
      subject: `Nouveau message de ${name}${company ? ` (${company})` : ''}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Entreprise:</strong> ${company}</p>` : ''}
        ${subject ? `<p><strong>Sujet:</strong> ${subject}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log("Notification email sent:", notificationEmail);

    // Send confirmation email to user
    const confirmationText = language === 'en' 
      ? {
          subject: "We received your message!",
          title: `Thank you for contacting us, ${name}!`,
          body: "We have received your message and will get back to you as soon as possible.",
          signature: "Best regards,<br>The CRM Conseil Team"
        }
      : {
          subject: "Nous avons reçu votre message !",
          title: `Merci de nous avoir contactés, ${name} !`,
          body: "Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.",
          signature: "Cordialement,<br>L'équipe CRM Conseil"
        };

    const confirmationEmail = await resend.emails.send({
      from: "CRM Conseil <onboarding@resend.dev>",
      to: [email],
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
