import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const MentionsLegalesEN = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Legal Notice - CRM Conseil | Legal Information"
        description="Legal notice of CRM Conseil. Information about the publisher, hosting, data collection and GDPR-compliant cookie policy."
        keywords="legal notice CRM conseil, legal information, cookie policy, GDPR, data protection"
        canonical="/en/mentions-legales"
        noindex={true}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Legal{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary">
                Notice
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Legal information and terms of use of the CRM Conseil website
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-background rounded-2xl p-8 md:p-12 shadow-lg border border-primary/10">
              <p className="text-sm text-muted-foreground mb-8 text-center font-medium">
                In effect as of September 14, 2025
              </p>

              <div className="space-y-10 text-foreground leading-relaxed">
                <div className="space-y-4">
                  <p>
                    In accordance with the provisions of Law No. 2004-575 of June 21, 2004 for Trust in the Digital Economy, users and visitors, hereinafter the "User", of the website www.crmconseil.com, hereinafter the "Site", are hereby informed of these legal notices.
                  </p>
                  <p>
                    Connection and navigation on the Site by the User implies full and unreserved acceptance of these legal notices.
                  </p>
                  <p>
                    These are accessible on the Site under the "Legal Notice" section.
                  </p>
                </div>

                <div className="border-l-4 border-primary/30 pl-6">
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-6">
                    SITE PUBLISHING
                  </h2>
                  <p className="mb-4">
                    The publishing of the Site is provided by CRM Conseil company, whose manager is Sabrina Broggini, registered in the Monaco Trade and Companies Register under number RCI 20P09690, whose registered office is located at 12 BOULEVARD PRINCESSE CHARLOTTE, 98000 MONACO.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4 mb-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Phone number: +33622953137</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Email address: contact@crmconseil.com</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>EU VAT number: FR87000153576</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Publication director: Sabrina Broggini</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground">hereinafter the "Publisher".</p>
                </div>

                <div className="border-l-4 border-primary/30 pl-6">
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-6">
                    HOSTING
                  </h2>
                  <p>
                    The Site host is CRM Conseil company, whose registered office is located at 12 boulevard princesse charlotte 98000 Monaco. The host's phone number is 33622953137.
                  </p>
                </div>

                <div className="border-l-4 border-primary/30 pl-6">
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-6">
                    SITE ACCESS
                  </h2>
                  <p>
                    The Site is normally accessible at all times to the User. However, the Publisher may, at any time, suspend, limit or interrupt the Site in order to carry out updates or modifications to its content. The Publisher cannot under any circumstances be held responsible for the possible consequences of this unavailability on the User's activities.
                  </p>
                </div>

                <div className="border-l-4 border-primary/30 pl-6">
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-6">
                    DATA COLLECTION
                  </h2>
                  <p className="mb-4">
                    The Site ensures the User the collection and processing of personal data in respect of privacy in accordance with Law No. 78-17 of January 6, 1978 relating to computers, files and freedoms and in compliance with the applicable regulations regarding the processing of personal data in accordance with Regulation (EU) 2016/679 of the European Parliament and of the Council of April 27, 2016 (hereinafter, together, the "Applicable Regulation regarding the protection of Personal Data").
                  </p>
                  <p className="mb-4">
                    Under the Applicable Regulation regarding the protection of Personal Data, the User has the right to access, rectify, delete and oppose their personal data. The User can exercise this right:
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4 mb-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>by email at contact@crmconseil.com</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>from the contact form</li>
                    </ul>
                  </div>
                  <p>
                    Any use, reproduction, distribution, commercialization, modification of all or part of the Site, without express authorization from the Publisher is prohibited and may result in legal actions and proceedings as provided for by current regulations.
                  </p>
                </div>

                <div className="border-l-4 border-primary/30 pl-6">
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sustainable to-primary mb-6">
                    COOKIE MANAGEMENT POLICY
                  </h2>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">What is a cookie?</h3>
                  <p className="mb-4">
                    A cookie is a small data file stored on your computer, tablet or smartphone when you visit a website. Cookies allow the site to remember your actions and preferences (such as language, font size and other display settings) for a given period.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-4">Types of cookies used</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <h4 className="font-semibold text-primary mb-2">🔒 Necessary Cookies</h4>
                      <p className="text-sm text-foreground/80 mb-2">
                        These cookies are essential for the site to function and cannot be disabled in our systems.
                      </p>
                      <ul className="text-sm text-foreground/70 space-y-1">
                        <li>• User session management</li>
                        <li>• Cookie consent storage</li>
                        <li>• Security and fraud prevention</li>
                        <li>• Contact form functionality</li>
                      </ul>
                      <p className="text-xs text-primary mt-2 font-medium">Retention period: Session or 12 months maximum</p>
                    </div>

                    <div className="bg-sustainable/5 border border-sustainable/20 rounded-lg p-4">
                      <h4 className="font-semibold text-sustainable mb-2">📊 Analytics Cookies</h4>
                      <p className="text-sm text-foreground/80 mb-2">
                        These cookies allow us to count visits and traffic sources to improve our site's performance.
                      </p>
                      <ul className="text-sm text-foreground/70 space-y-1">
                        <li>• Audience measurement and visit statistics</li>
                        <li>• User behavior analysis</li>
                        <li>• User experience optimization</li>
                        <li>• Popular page identification</li>
                      </ul>
                      <p className="text-xs text-sustainable mt-2 font-medium">Retention period: 24 months maximum</p>
                    </div>

                    <div className="bg-commercial/5 border border-commercial/20 rounded-lg p-4">
                      <h4 className="font-semibold text-commercial mb-2">🎯 Marketing Cookies</h4>
                      <p className="text-sm text-foreground/80 mb-2">
                        These cookies may be set by our advertising partners to personalize ads.
                      </p>
                      <ul className="text-sm text-foreground/70 space-y-1">
                        <li>• Advertisement personalization</li>
                        <li>• Campaign effectiveness measurement</li>
                        <li>• Remarketing and advertising retargeting</li>
                        <li>• Social media sharing</li>
                      </ul>
                      <p className="text-xs text-commercial mt-2 font-medium">Retention period: 12 months maximum</p>
                    </div>

                    <div className="bg-muted/30 border border-input rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">⚙️ Functional Cookies</h4>
                      <p className="text-sm text-foreground/80 mb-2">
                        These cookies improve the site's functionality and personalization.
                      </p>
                      <ul className="text-sm text-foreground/70 space-y-1">
                        <li>• User preference storage</li>
                        <li>• Third-party widget integration (maps, chat)</li>
                        <li>• Navigation improvement</li>
                        <li>• Advanced site features</li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-2 font-medium">Retention period: 12 months maximum</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-4">Managing your preferences</h3>
                  <p className="mb-4">
                    In accordance with current regulations, you have the possibility to manage your preferences regarding cookies:
                  </p>
                  
                  <div className="bg-muted/50 rounded-lg p-4 mb-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span><strong>Consent banner:</strong> During your first visit, a banner allows you to accept or refuse optional cookies</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span><strong>Detailed settings:</strong> You can customize your choices by cookie category</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span><strong>Modification:</strong> You can modify your preferences at any time by deleting cookies from your browser</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span><strong>Browser:</strong> You can also configure your browser to refuse cookies</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-4">Browser configuration</h3>
                  <p className="mb-4">
                    You can configure your browser to manage cookies according to your preferences:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-muted/30 rounded-lg p-3">
                      <h5 className="font-semibold text-sm mb-2">Google Chrome</h5>
                      <p className="text-xs text-muted-foreground">Settings → Privacy and security → Cookies and other data</p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-3">
                      <h5 className="font-semibold text-sm mb-2">Mozilla Firefox</h5>
                      <p className="text-xs text-muted-foreground">Preferences → Privacy and security → Cookies and data</p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-3">
                      <h5 className="font-semibold text-sm mb-2">Safari</h5>
                      <p className="text-xs text-muted-foreground">Preferences → Privacy → Cookies and data</p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-3">
                      <h5 className="font-semibold text-sm mb-2">Microsoft Edge</h5>
                      <p className="text-xs text-muted-foreground">Settings → Cookies and site permissions</p>
                    </div>
                  </div>

                  <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-primary mb-2">⚠️ Important</h4>
                    <p className="text-sm text-foreground/80">
                      Disabling certain cookies may affect the proper functioning of the site and reduce the quality of your browsing experience. Necessary cookies cannot be disabled as they are essential for the site's operation.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-4">Contact</h3>
                  <p className="mb-4">
                    For any questions regarding our cookie policy or to exercise your rights, you can contact us:
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4 mb-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Email: contact@crmconseil.com</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Contact form on the site</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Mail: CRM Conseil, 12 Boulevard Princesse Charlotte, 98000 Monaco</li>
                    </ul>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Last update of this policy: December 17, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MentionsLegalesEN;