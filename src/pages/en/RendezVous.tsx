import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import contactBackground from "@/assets/contact-background-light.jpg";

const RendezVousEN = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Book Appointment - CRM Conseil | Schedule Your Free Consultation"
        description="Book an appointment with our commercial performance and CSR experts. Free consultation for your commercial support project. Available in Nice, Monaco, Cannes."
        keywords="book appointment CRM conseil, free consultation, commercial CSR expert, contact booking, personalized support"
        canonical="/en/book-appointment"
      />
      <StructuredData type="service" />
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
            <div className="max-w-4xl mx-auto bg-background p-8 rounded-lg shadow-lg">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Book an appointment with our experts
                </h1>
                <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-medium">
                  Schedule your free 30-minute consultation to discuss your needs 
                  and discover how CRM Conseil can support your company towards more performance and sustainability.
                </p>
              </div>
              
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3F0CJ0zkLvTIQtA5yGzsNzKBO3Hkl9Mu2dYsubLvh5wIqr7q9dInq68yTahLwT8lnp32eyxG9a?gv=true" 
                style={{ border: 0 }} 
                width="100%" 
                height="600" 
                frameBorder="0"
                title="Appointment booking calendar"
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

export default RendezVousEN;