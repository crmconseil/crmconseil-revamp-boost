import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Target, Award, Handshake, Leaf, TrendingUp, Calendar } from "lucide-react";
import evolutionImage from "@/assets/evolution-histoire.png";

const AboutEN = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="About - CRM Conseil | Commercial Performance & CSR Experts"
        description="Discover CRM Conseil, your partner for commercial performance and CSR. Expert team supporting SMEs in South-East France for sustainable transformation."
        keywords="CRM Conseil team, commercial consultant, CSR expert, sustainable development, Nice Monaco consultant, business transformation"
        canonical="/en/a-propos"
      />
      <StructuredData type="organization" />
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 text-sm font-medium">
                <Users className="mr-2 h-4 w-4" />
                About Us
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
                Your Partner for <span className="text-primary">Sustainable Performance</span>
              </h1>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12 font-medium">
                CRM Conseil supports SMEs in South-East France in their commercial transformation 
                while integrating sustainable development challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Our Story
                  </h2>
                  <p className="text-lg text-foreground/80 mb-6">
                    Founded with the conviction that commercial performance and environmental responsibility 
                    are not contradictory but complementary, CRM Conseil was born from the desire to 
                    support companies in their sustainable transformation.
                  </p>
                  <p className="text-lg text-foreground/80 mb-6">
                    With over 10 years of experience in commercial consulting and a growing expertise 
                    in CSR, we help SMEs in South-East France develop winning strategies that respect 
                    both their economic objectives and environmental challenges.
                  </p>
                  <p className="text-lg text-foreground/80 mb-8">
                    Our approach is based on deep understanding of local markets and the specific 
                    challenges facing companies in our region.
                  </p>
                  <Button 
                    size="lg" 
                    className="group"
                    onClick={() => window.location.href = '/en/book-appointment'}
                  >
                    Meet our team
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className="lg:order-last">
                  <img 
                    src={evolutionImage} 
                    alt="Evolution and history of CRM Conseil" 
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Values
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Values that guide our daily actions and our relationship with clients
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center border-0 bg-gradient-to-br from-background to-background/50">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl w-fit">
                    <Handshake className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">Trust</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">
                    We build lasting relationships based on transparency, honesty and mutual respect.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-gradient-to-br from-background to-background/50">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-2xl w-fit">
                    <Leaf className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">Sustainability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">
                    We integrate environmental and social responsibility into all our recommendations.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-gradient-to-br from-background to-background/50">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-2xl w-fit">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">
                    We strive for excellence in every mission, with personalized and quality support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Expertise
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Recognized skills in commercial performance and sustainable development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl w-fit">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Commercial Strategy</h3>
                <p className="text-foreground/70">Development of winning commercial strategies</p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-2xl w-fit">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">CSR & Carbon Footprint</h3>
                <p className="text-foreground/70">Support in sustainable development</p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-2xl w-fit">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Team Coaching</h3>
                <p className="text-foreground/70">Training and support for your teams</p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-orange-500/20 to-orange-500/10 rounded-2xl w-fit">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Certifications</h3>
                <p className="text-foreground/70">Support for quality certifications</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
                Contact us for a free consultation and discover how we can 
                support your company in its sustainable transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="group"
                  onClick={() => window.location.href = '/en/book-appointment'}
                >
                  Book a consultation
                  <Calendar className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.location.href = '/en/contact'}
                >
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutEN;