import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Cookie, Shield, Settings } from "lucide-react";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Toujours accepté
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
    
    // Ici vous pouvez charger les scripts tiers (Google Analytics, etc.)
    loadOptionalScripts(consent);
  };

  const handleRejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
    
    // Charger les scripts selon les préférences
    loadOptionalScripts(consent);
  };

  const loadOptionalScripts = (consent: any) => {
    // Exemple : charger Google Analytics si accepté
    if (consent.analytics) {
      // Charger GA4 ici si nécessaire
      console.log('Analytics cookies accepted');
    }
    
    if (consent.marketing) {
      // Charger pixels marketing ici si nécessaire
      console.log('Marketing cookies accepted');
    }
    
    if (consent.functional) {
      // Charger widgets tiers ici si nécessaire
      console.log('Functional cookies accepted');
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
        <Card className="max-w-4xl mx-auto shadow-2xl border-primary/20">
          <div className="p-6">
            {!showSettings ? (
              // Vue principale
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Cookie className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground">
                        Gestion des cookies
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Nous respectons votre vie privée
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsVisible(false)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
                  Ce site utilise des cookies pour améliorer votre expérience de navigation, 
                  analyser le trafic et personnaliser le contenu. Les cookies nécessaires sont 
                  indispensables au bon fonctionnement du site. Vous pouvez accepter tous les 
                  cookies ou personnaliser vos préférences.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={handleAcceptAll}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    Accepter tous les cookies
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={handleRejectAll}
                    className="border-primary/30 text-foreground hover:bg-primary/10"
                  >
                    Refuser les cookies optionnels
                  </Button>
                  <Button 
                    variant="ghost"
                    onClick={() => setShowSettings(true)}
                    className="text-foreground hover:bg-primary/10"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Personnaliser
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground mt-4">
                  En continuant à naviguer, vous acceptez notre{" "}
                  <a href="/mentions-legales" className="text-primary hover:underline">
                    politique de confidentialité
                  </a>
                </p>
              </div>
            ) : (
              // Vue personnalisation
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-sustainable/10 p-2 rounded-lg">
                      <Shield className="w-6 h-6 text-sustainable" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">
                      Préférences de cookies
                    </h3>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowSettings(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                <div className="space-y-4">
                  {/* Cookies nécessaires */}
                  <div className="border border-primary/20 rounded-lg p-4 bg-primary/5">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Cookies nécessaires</h4>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                        Obligatoire
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés.
                    </p>
                  </div>

                  {/* Cookies analytiques */}
                  <div className="border border-input rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Cookies analytiques</h4>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={preferences.analytics}
                          onChange={(e) => setPreferences(prev => ({
                            ...prev,
                            analytics: e.target.checked
                          }))}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ces cookies nous aident à comprendre comment vous utilisez notre site pour l'améliorer.
                    </p>
                  </div>

                  {/* Cookies marketing */}
                  <div className="border border-input rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Cookies marketing</h4>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={preferences.marketing}
                          onChange={(e) => setPreferences(prev => ({
                            ...prev,
                            marketing: e.target.checked
                          }))}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ces cookies permettent de personnaliser les publicités et mesurer l'efficacité des campagnes.
                    </p>
                  </div>

                  {/* Cookies fonctionnels */}
                  <div className="border border-input rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Cookies fonctionnels</h4>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={preferences.functional}
                          onChange={(e) => setPreferences(prev => ({
                            ...prev,
                            functional: e.target.checked
                          }))}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ces cookies activent des fonctionnalités avancées comme les chats en ligne ou les cartes interactives.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Button 
                    onClick={handleSavePreferences}
                    className="bg-sustainable hover:bg-sustainable/90 text-white"
                  >
                    Sauvegarder mes préférences
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setShowSettings(false)}
                    className="border-primary/30 text-foreground hover:bg-primary/10"
                  >
                    Retour
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </>
  );
};