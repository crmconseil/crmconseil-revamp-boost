import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import contactBackground from "@/assets/contact-background-professional.jpg";

const ContactEN = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<{[key: string]: boolean}>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (formData: FormData): boolean => {
    const errors: {[key: string]: boolean} = {};
    const requiredFields = ['firstName', 'lastName', 'email', 'company', 'subject', 'message'];
    
    requiredFields.forEach(field => {
      const value = formData.get(field) as string;
      if (!value || value.trim() === '') {
        errors[field] = true;
      }
    });
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    
    if (!validateForm(formData)) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { supabase } = await import("@/integrations/supabase/client");
      
      const name = `${formData.get('firstName')} ${formData.get('lastName')}`;
      
      const response = await supabase.functions.invoke('send-contact-email', {
        body: {
          name,
          email: formData.get('email'),
          company: formData.get('company'),
          subject: formData.get('subject'),
          message: formData.get('message'),
          language: 'en'
        }
      });

      if (response.error) {
        throw response.error;
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. We will respond to you as soon as possible.",
        variant: "default",
      });
      (e.target as HTMLFormElement).reset();
      setFormErrors({});
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending contact form:', error);
      toast({
        title: "Submission error",
        description: "An error occurred while sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Contact - CRM Conseil | Get in Touch with Our Experts"
        description="Contact CRM Conseil for your commercial performance and CSR projects. Free consultation, personalized support in Nice, Monaco, Cannes. Phone, email, appointment."
        keywords="contact CRM Conseil, commercial consultant Nice, CSR expert contact, free consultation, business support contact"
        canonical="/en/contact"
      />
      <StructuredData type="organization" />
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${contactBackground})` }}
          >
            <div className="absolute inset-0 bg-background/90"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 text-sm font-medium">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Us
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
                Let's Discuss Your <span className="text-primary">Project</span>
              </h1>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12 font-medium">
                Contact us for a free consultation and discover how CRM Conseil can 
                support your company in its commercial and sustainable transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-6">
                      Get in Touch
                    </h2>
                    <p className="text-lg text-foreground/70 mb-8">
                      We are here to support you in your commercial performance and CSR projects. 
                      Contact us for personalized advice.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <Card className="border-0 bg-gradient-to-br from-background to-background/50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl">
                            <Phone className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-foreground mb-2">Phone</h3>
                            <p className="text-foreground/70">+33 6 22 95 31 37</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 bg-gradient-to-br from-background to-background/50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-2xl">
                            <Mail className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-foreground mb-2">Email</h3>
                            <p className="text-foreground/70">contact@crmconseil.com</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 bg-gradient-to-br from-background to-background/50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-2xl">
                            <MapPin className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-foreground mb-2">Service Area</h3>
                            <p className="text-foreground/70">Monaco • France • Europe • International</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <Card className="border-0 bg-gradient-to-br from-background to-background/50 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-foreground">
                        Send us a Message
                      </CardTitle>
                      <CardDescription className="text-base text-foreground/70">
                        Describe your project and we will get back to you quickly
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {isSubmitted ? (
                        <div className="text-center py-12 space-y-4">
                          <div className="w-16 h-16 bg-gradient-sustainable rounded-full flex items-center justify-center mx-auto mb-4">
                            <Send className="text-sustainable-foreground" size={32} />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">
                            Thank you, your message has been sent.
                          </h3>
                          <p className="text-muted-foreground">
                            We will get back to you shortly.
                          </p>
                          <Button 
                            onClick={() => setIsSubmitted(false)}
                            variant="outline"
                            className="mt-6"
                          >
                            Send another message
                          </Button>
                        </div>
                      ) : (
                        <form 
                          name="contact-en" 
                          method="POST" 
                          data-netlify="true"
                          onSubmit={handleSubmit}
                          className="space-y-6"
                        >
                          <input type="hidden" name="form-name" value="contact-en" />
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="firstName">First Name *</Label>
                              <Input 
                                id="firstName"
                                name="firstName"
                                placeholder="Your first name"
                                required
                                className={formErrors.firstName ? 'border-destructive focus-visible:ring-destructive' : ''}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="lastName">Last Name *</Label>
                              <Input 
                                id="lastName"
                                name="lastName"
                                placeholder="Your last name"
                                required
                                className={formErrors.lastName ? 'border-destructive focus-visible:ring-destructive' : ''}
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input 
                              id="email"
                              name="email"
                              type="email" 
                              placeholder="your.email@example.com"
                              required
                              className={formErrors.email ? 'border-destructive focus-visible:ring-destructive' : ''}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="company">Company *</Label>
                            <Input 
                              id="company"
                              name="company"
                              placeholder="Your company name"
                              required
                              className={formErrors.company ? 'border-destructive focus-visible:ring-destructive' : ''}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="subject">Subject *</Label>
                            <Input 
                              id="subject"
                              name="subject"
                              placeholder="Subject of your message"
                              required
                              className={formErrors.subject ? 'border-destructive focus-visible:ring-destructive' : ''}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="message">Message *</Label>
                            <Textarea 
                              id="message"
                              name="message"
                              placeholder="Describe your project, your needs, your challenges..."
                              rows={6}
                              required
                              className={formErrors.message ? 'border-destructive focus-visible:ring-destructive' : ''}
                            />
                          </div>
                          
                          <Button 
                            type="submit" 
                            size="lg" 
                            disabled={isSubmitting}
                            className="w-full group"
                          >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send className="ml-2 h-5 w-5" />
                          </Button>
                        </form>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Prefer to Talk Directly?
              </h2>
              <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
                Book a free 30-minute consultation to discuss your needs 
                and discover our solutions for your business.
              </p>
              <Button 
                size="lg" 
                className="group"
                onClick={() => window.location.href = '/en/book-appointment'}
              >
                Book a Free Consultation
                <Phone className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactEN;