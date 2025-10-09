import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookieBanner } from "@/components/CookieBanner";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { lazy, Suspense } from "react";

// Lazy load pages for better performance and carbon footprint
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const NotFound = lazy(() => import("./pages/NotFound"));
const RendezVous = lazy(() => import("./pages/RendezVous"));

// English pages
const IndexEN = lazy(() => import("./pages/en/Index"));
const ServicesEN = lazy(() => import("./pages/en/Services"));
const AboutEN = lazy(() => import("./pages/en/About"));
const ContactEN = lazy(() => import("./pages/en/Contact"));
const RendezVousEN = lazy(() => import("./pages/en/RendezVous"));
const MentionsLegalesEN = lazy(() => import("./pages/en/MentionsLegales"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-background">
              <div className="animate-pulse text-primary font-medium">Chargement...</div>
            </div>
          }>
            <Routes>
              {/* French routes */}
              <Route path="/" element={<Index />} />
              <Route path="/nos-services" element={<Services />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book-appointment" element={<RendezVous />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              
              {/* English routes */}
              <Route path="/en" element={<IndexEN />} />
              <Route path="/en/nos-services" element={<ServicesEN />} />
              <Route path="/en/a-propos" element={<AboutEN />} />
              <Route path="/en/contact" element={<ContactEN />} />
              <Route path="/en/book-appointment" element={<RendezVousEN />} />
              <Route path="/en/mentions-legales" element={<MentionsLegalesEN />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <CookieBanner />
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
