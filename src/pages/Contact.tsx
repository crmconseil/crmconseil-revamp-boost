import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Leaf,
  TrendingUp
} from "lucide-react";
import contactBackground from "@/assets/contact-background-professional.jpg";
import logoImage from "@/assets/crm-conseil-logo.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<{[key: string]: boolean}>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (formData: FormData): boolean => {
    const errors: {[key: string]: boolean} = {};
    const requiredFields = ['name', 'email', 'company', 'message'];
    
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
        title: "Champs obligatoires manquants",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { supabase } = await import("@/integrations/supabase/client");
      
      const response = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.get('name'),
          email: formData.get('email'),
          company: formData.get('company'),
          message: formData.get('message'),
          language: 'fr'
        }
      });

      if (response.error) {
        throw response.error;
      }

      toast({
        title: "Message envoyé avec succès !",
        description: "Merci pour votre message. Nous vous répondrons dans les plus brefs délais.",
        variant: "default",
      });
      (e.target as HTMLFormElement).reset();
      setFormErrors({});
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending contact form:', error);
      toast({
        title: "Erreur d'envoi",
        description: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer ou nous contacter directement.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Contact CRM Conseil | Développement Commercial & RSE | Conseil Business Durable"
        description="Contactez CRM Conseil pour votre projet de développement commercial et RSE. Consultation gratuite en optimisation commerciale, CRM, business development, bilan carbone et transition durable. Experts en conseil durabilité et écologie pour startups et PME."
        keywords="contact CRM conseil, développement commercial, optimisation commerciale, conseil CRM, business development, RSE, bilan carbone, transition durable, conseil durabilité, écologie entreprise"
        canonical="/contact"
      />
      <StructuredData type="service" />
      <Header />
      
      <main role="main">
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${contactBackground})` }}
          role="img"
          aria-label="Arrière-plan contact - Environnement professionnel et durable"
        >
          <div className="absolute inset-0 bg-background/93"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          {/* Section Header */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-medium">
              Parlons de votre projet et découvrons comment allier performance commerciale et développement durable
            </p>
          </header>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Logo */}
              <div className="text-center">
                <img 
                  src={logoImage} 
                  alt="CRM Conseil - Développement commercial durable et stratégie RSE pour entreprises innovantes" 
                  className="h-20 w-auto mx-auto mb-6"
                  width="80"
                  height="80"
                  loading="lazy"
                />
              </div>

              {/* Contact Details */}
              <div className="space-y-6" role="list" aria-label="Informations de contact">
                <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group" role="listitem">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-light p-3 rounded-lg group-hover:scale-110 transition-transform">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <a 
                        href="mailto:contact@crmconseil.com" 
                        className="text-primary hover:underline"
                        aria-label="Envoyer un email à CRM Conseil"
                      >
                        contact@crmconseil.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group" role="listitem">
                  <div className="flex items-center space-x-4">
                    <div className="bg-sustainable-light p-3 rounded-lg group-hover:scale-110 transition-transform">
                      <Phone className="text-sustainable" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Téléphone</h4>
                      <a 
                        href="tel:+33622953137" 
                        className="text-sustainable hover:underline"
                        aria-label="Appeler CRM Conseil au +33 6 22 95 31 37"
                      >
                        +33 6 22 95 31 37
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group" role="listitem">
                  <div className="flex items-center space-x-4">
                    <div className="bg-commercial-light p-3 rounded-lg group-hover:scale-110 transition-transform">
                      <MapPin className="text-commercial" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Adresse</h4>
                      <p className="text-muted-foreground">Monaco</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group" role="listitem">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-light p-3 rounded-lg group-hover:scale-110 transition-transform">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Zone d'intervention</h4>
                      <p className="text-muted-foreground">
                        Monaco • France • Europe • International
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Services Summary */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center bg-gradient-primary text-primary-foreground">
                  <TrendingUp className="mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm">Commercial</h4>
                  <p className="text-xs opacity-90">Performance & Croissance</p>
                </Card>
                <Card className="p-4 text-center bg-gradient-sustainable text-sustainable-foreground">
                  <Leaf className="mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-sm">RSE / Durabilité</h4>
                  <p className="text-xs opacity-90">Impact & Mesure</p>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 shadow-card-sustainable">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-gradient-sustainable rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-sustainable-foreground" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Merci, votre message a bien été envoyé.
                  </h3>
                  <p className="text-muted-foreground">
                    Nous reviendrons vers vous sous peu.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mt-6"
                  >
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <form 
                  name="contact-fr" 
                  method="POST" 
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-6" 
                  aria-label="Formulaire de contact"
                >
                  <input type="hidden" name="form-name" value="contact-fr" />
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nom complet *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Votre nom"
                        className={`w-full ${formErrors.name ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                        aria-describedby="name-required"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="votre@email.com"
                        className={`w-full ${formErrors.email ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                        aria-describedby="email-required"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Entreprise *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      required
                      placeholder="Nom de votre entreprise"
                      className={`w-full ${formErrors.company ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                      aria-describedby="company-required"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service d'intérêt
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      aria-label="Sélectionnez le service qui vous intéresse"
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="commercial">Accompagnement Commercial</option>
                      <option value="rse-scope1">Bilan RSE - Scope 1</option>
                      <option value="rse-complet">Bilan RSE Complet - Scope 1,2,3</option>
                      <option value="biodiversite">Bilan Impact Biodiversité</option>
                      <option value="autre">Autre / Conseil personnalisé</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Décrivez brièvement votre projet ou vos besoins..."
                      rows={4}
                      className={`w-full ${formErrors.message ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                      aria-describedby="message-required"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="sustainable" 
                    size="lg" 
                    className="w-full group"
                    disabled={isSubmitting}
                    aria-label="Envoyer votre message de contact"
                  >
                    <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Champs obligatoires. Vos données sont traitées de manière confidentielle.
                  </p>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;