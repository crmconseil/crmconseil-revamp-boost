import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  User,
  MessageSquare,
  Leaf,
  TrendingUp
} from "lucide-react";
import { useState } from "react";
import contactBackground from "@/assets/contact-background-light.jpg";
import logoImage from "@/assets/crm-conseil-logo.jpg";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-12 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactBackground})` }}
      >
        <div className="absolute inset-0 bg-background/93"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contactez-nous
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-medium">
            Parlons de votre projet et découvrons comment allier performance commerciale et développement durable
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="text-center">
              <img 
                src={logoImage} 
                alt="CRM Conseil Logo" 
                className="h-20 w-auto mx-auto mb-6"
              />
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-light p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a 
                      href="mailto:contact@crmconseil.com" 
                      className="text-primary hover:underline"
                    >
                      contact@crmconseil.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group">
                <div className="flex items-center space-x-4">
                  <div className="bg-sustainable-light p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Phone className="text-sustainable" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Téléphone</h4>
                    <a 
                      href="tel:+33622953137" 
                      className="text-sustainable hover:underline"
                    >
                      +33 6 22 95 31 37
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group">
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

              <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group">
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom"
                    className="w-full"
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
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                    className="w-full"
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
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Nom de votre entreprise"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service d'intérêt
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
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
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Décrivez brièvement votre projet ou vos besoins..."
                  rows={4}
                  className="w-full"
                />
              </div>

              <Button type="submit" variant="sustainable" size="lg" className="w-full group">
                <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                Envoyer le message
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                * Champs obligatoires. Vos données sont traitées de manière confidentielle.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};