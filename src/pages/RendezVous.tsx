import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const RendezVous = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Prenez rendez-vous avec nos experts
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Planifiez votre consultation gratuite de 30 minutes pour discuter de vos besoins 
              et découvrir comment CRM Conseil peut accompagner votre entreprise vers plus de performance et de durabilité.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3F0CJ0zkLvTIQtA5yGzsNzKBO3Hkl9Mu2dYsubLvh5wIqr7q9dInq68yTahLwT8lnp32eyxG9a?gv=true" 
                style={{ border: 0 }} 
                width="100%" 
                height="600" 
                frameBorder="0"
                title="Calendrier de prise de rendez-vous"
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