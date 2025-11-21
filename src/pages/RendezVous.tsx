import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import contactBackground from "@/assets/appointment-background-professional.jpg";

const RendezVous = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Rendez-vous Monaco Nice Cannes - Consultation Expert Commercial RSE PACA"
        description="Réservez consultation gratuite à Monaco, Nice, Cannes, Menton, Grasse, Toulon avec experts développement commercial et RSE région PACA. Accompagnement personnalisé startups PME Côte d'Azur pour optimiser performance commerciale et transition durable."
        keywords="rendez-vous consultation Monaco, expert commercial Nice, conseil RSE Cannes, consultation gratuite PACA, accompagnement startup Monaco Nice, développement commercial Côte d'Azur, transition durable Alpes-Maritimes, bilan carbone région PACA, RDV conseil Menton Grasse Toulon"
        canonical="/book-appointment"
      />
      <StructuredData type="service" />
      <Header />
      <main role="main" className="pt-24">
        <section className="relative py-12 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${contactBackground})` }}
          >
            <div className="absolute inset-0 bg-background/93"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-background p-8 rounded-lg shadow-lg">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Prenez rendez-vous avec nos experts
                </h1>
                <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-medium">
                  Planifiez votre consultation gratuite de 30 minutes pour discuter de vos besoins 
                  et découvrir comment CRM Conseil peut accompagner votre entreprise vers plus de performance et de durabilité.
                </p>
              </div>
              
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3F0CJ0zkLvTIQtA5yGzsNzKBO3Hkl9Mu2dYsubLvh5wIqr7q9dInq68yTahLwT8lnp32eyxG9a?gv=true" 
                style={{ border: 0 }} 
                width="100%" 
                height="600" 
                frameBorder="0"
                title="Calendrier de prise de rendez-vous"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RendezVous;