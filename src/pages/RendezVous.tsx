import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import contactBackground from "@/assets/contact-background-light.jpg";

const RendezVous = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
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
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Prenez rendez-vous avec nos experts
              </h1>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-medium">
                Planifiez votre consultation gratuite de 30 minutes pour discuter de vos besoins 
                et découvrir comment CRM Conseil peut accompagner votre entreprise vers plus de performance et de durabilité.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-background p-8 rounded-lg shadow-lg">
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