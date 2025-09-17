import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookieBanner } from "@/components/CookieBanner";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";
import RendezVous from "./pages/RendezVous";
// English pages
import IndexEN from "./pages/en/Index";
import ServicesEN from "./pages/en/Services";
import AboutEN from "./pages/en/About";
import ContactEN from "./pages/en/Contact";
import RendezVousEN from "./pages/en/RendezVous";
import MentionsLegalesEN from "./pages/en/MentionsLegales";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
          <CookieBanner />
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
