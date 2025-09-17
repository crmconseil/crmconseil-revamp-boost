import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Users, Briefcase, Target, Settings, TrendingUp, CheckCircle, Globe, Handshake, Award, ArrowRight, Rocket, Clock, Calendar, BarChart3, Zap, Sparkles } from "lucide-react";
import servicesBackground from "@/assets/services-background.jpg";

const ServicesEN = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Our Services - CRM Conseil | Commercial Consulting & CSR Support"
        description="Discover our commercial consulting services, CSR support, carbon footprint for SMEs. Personalized support for sustainable commercial development in Nice, Monaco, Cannes."
        keywords="commercial consulting services, SME carbon footprint, CSR support, commercial strategy, sustainable business development, Nice Monaco consultant"
        canonical="/en/nos-services"
      />
      <StructuredData type="service" />
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${servicesBackground})` }}
          >
            <div className="absolute inset-0 bg-background/95"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 text-sm font-medium">
                <Sparkles className="mr-2 h-4 w-4" />
                Our Services
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
                Commercial Performance & <span className="text-primary">CSR Consulting</span>
              </h1>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12 font-medium">
                We support SMEs in South-East France in their commercial transformation by integrating 
                sustainable development challenges. Personalized expertise for lasting performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="group"
                  onClick={() => window.location.href = '/en/book-appointment'}
                >
                  Book a free consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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

        {/* Main Services */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Expertise Areas
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Three complementary pillars for your sustainable commercial transformation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Commercial Performance */}
              <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-background/50">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">Commercial Performance</CardTitle>
                  <CardDescription className="text-base text-foreground/70">
                    Optimize your commercial processes and boost your revenue
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-foreground/80">Commercial strategy and action plan</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-foreground/80">Sales team structuring</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-foreground/80">CRM tools optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-foreground/80">Key performance indicators</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CSR & Sustainability */}
              <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-background/50">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <Leaf className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">CSR & Sustainability</CardTitle>
                  <CardDescription className="text-base text-foreground/70">
                    Integrate sustainable development into your strategy
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                      <span className="text-foreground/80">Carbon footprint and GHG assessment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                      <span className="text-foreground/80">CSR strategy development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                      <span className="text-foreground/80">Environmental compliance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                      <span className="text-foreground/80">Impact measurement</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support & Coaching */}
              <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-background/50">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">Support & Coaching</CardTitle>
                  <CardDescription className="text-base text-foreground/70">
                    Personalized support for your teams
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <span className="text-foreground/80">Team coaching and training</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <span className="text-foreground/80">Change management</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <span className="text-foreground/80">Process optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <span className="text-foreground/80">Regular monitoring</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Proven Method
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                A structured approach for concrete and lasting results
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center group">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">1. Diagnosis</h3>
                <p className="text-foreground/70">
                  Complete analysis of your current situation and identification of improvement areas
                </p>
              </div>

              <div className="text-center group">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                  <Settings className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">2. Strategy</h3>
                <p className="text-foreground/70">
                  Development of a personalized action plan adapted to your challenges
                </p>
              </div>

              <div className="text-center group">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">3. Implementation</h3>
                <p className="text-foreground/70">
                  Concrete execution of solutions with continuous support
                </p>
              </div>

              <div className="text-center group">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-orange-500/20 to-orange-500/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">4. Monitoring</h3>
                <p className="text-foreground/70">
                  Regular tracking of results and continuous adjustment
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose CRM Conseil?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl w-fit">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Proven Expertise</h3>
                <p className="text-foreground/70">
                  Over 10 years of experience supporting SMEs in their commercial and sustainable transformation
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-2xl w-fit">
                  <Handshake className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Personalized Approach</h3>
                <p className="text-foreground/70">
                  Each support is unique and adapted to your sector, size and specific challenges
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-2xl w-fit">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Local Presence</h3>
                <p className="text-foreground/70">
                  Based in South-East France, we understand the specificities of your regional market
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
                Book your free 30-minute consultation to discuss your needs and discover 
                how we can support your company.
              </p>
              <Button 
                size="lg" 
                className="group"
                onClick={() => window.location.href = '/en/book-appointment'}
              >
                Book my free consultation
                <Calendar className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesEN;