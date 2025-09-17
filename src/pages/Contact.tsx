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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });

      if (response.ok) {
        toast({
          title: "Message envoyé avec succès !",
          description: "Merci pour votre message. Nous vous répondrons dans les plus brefs délais.",
          variant: "default",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
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
        title="Contact - CRM Conseil | Demandez votre consultation gratuite"
        description="Contactez CRM Conseil pour votre projet d'accompagnement commercial et RSE. Consultation gratuite pour startups et PME à Nice, Cannes, Monaco. Experts en performance durable."
        keywords="contact CRM conseil, consultation gratuite, accompagnement commercial Nice, conseil RSE Monaco, expert développement durable Cannes"
        canonical="/contact"
      />
      <StructuredData type="service" />
      <Header />
      
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
                      className="w-full"
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
                      className="w-full"
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
                    className="w-full"
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
                    className="w-full"
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
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;