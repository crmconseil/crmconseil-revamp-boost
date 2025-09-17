import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
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
import contactBackground from "@/assets/contact-background-professional.jpg";
import logoImage from "@/assets/crm-conseil-logo.jpg";

export const ContactSection = () => {
  const { t } = useLanguage();
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
          title: t('contact.success_toast_title'),
          description: t('contact.success_toast_description'),
          variant: "default",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      toast({
        title: t('contact.error_toast_title'),
        description: t('contact.error_toast_description'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            {t('contact.title')}
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-medium">
            {t('contact.subtitle')}
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
                    <h4 className="font-semibold">{t('contact.phone_label')}</h4>
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
                    <h4 className="font-semibold">{t('contact.address_label')}</h4>
                    <p className="text-muted-foreground">{t('contact.address_value')}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-card-sustainable transition-all duration-300 group">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-light p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t('contact.service_area')}</h4>
                    <p className="text-muted-foreground">
                      {t('contact.service_area_value')}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Services Summary */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center bg-gradient-primary text-primary-foreground">
                <TrendingUp className="mx-auto mb-2" size={24} />
                <h4 className="font-semibold text-sm">{t('contact.commercial_card')}</h4>
                <p className="text-xs opacity-90">{t('contact.commercial_desc')}</p>
              </Card>
              <Card className="p-4 text-center bg-gradient-sustainable text-sustainable-foreground">
                <Leaf className="mx-auto mb-2" size={24} />
                <h4 className="font-semibold text-sm">{t('contact.rse_card')}</h4>
                <p className="text-xs opacity-90">{t('contact.rse_desc')}</p>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 shadow-card-sustainable">
            <form 
              name="contact-homepage" 
              method="POST" 
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact-homepage" />
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form_full_name')}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder={t('contact.form_name_placeholder')}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form_email')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={t('contact.form_email_placeholder')}
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form_company')}
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  required
                  placeholder={t('contact.form_company_placeholder')}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form_service')}
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">{t('contact.form_service_select')}</option>
                  <option value="commercial">{t('contact.form_service_commercial')}</option>
                  <option value="rse-scope1">{t('contact.form_service_scope1')}</option>
                  <option value="rse-complet">{t('contact.form_service_complete')}</option>
                  <option value="biodiversite">{t('contact.form_service_biodiversity')}</option>
                  <option value="autre">{t('contact.form_service_other')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form_message')}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder={t('contact.form_message_placeholder')}
                  rows={4}
                  className="w-full"
                />
              </div>

              <Button 
                type="submit" 
                variant="sustainable" 
                size="lg" 
                className="w-full group"
                disabled={isSubmitting}
              >
                <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                {isSubmitting ? t('contact.sending') : t('contact.form_send')}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                {t('contact.form_required')}
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};