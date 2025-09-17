import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";

const MentionsLegalesEN = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Legal Notice - CRM Conseil | Terms and Privacy Policy"
        description="Legal notice, terms of use and privacy policy of CRM Conseil. Information about data collection, cookies and user rights."
        keywords="legal notice, privacy policy, terms of use, GDPR, personal data, cookies"
        canonical="/en/mentions-legales"
      />
      <StructuredData type="organization" />
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Legal Notice</h1>
            
            <div className="prose max-w-none text-foreground/80 space-y-8">
              
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Site Publisher</h2>
                <p className="mb-4">
                  This website is published by:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Company:</strong> CRM Conseil</li>
                  <li><strong>Legal form:</strong> Individual company</li>
                  <li><strong>Address:</strong> South-East France</li>
                  <li><strong>Email:</strong> contact@crmconseil.com</li>
                  <li><strong>Website:</strong> https://crmconseil.com</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Hosting</h2>
                <p className="mb-4">
                  This website is hosted by:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Host:</strong> Netlify, Inc.</li>
                  <li><strong>Address:</strong> 2325 3rd Street, Suite 296, San Francisco, California 94107</li>
                  <li><strong>Website:</strong> https://www.netlify.com</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Intellectual Property</h2>
                <p className="mb-4">
                  All content on this website (texts, images, graphics, logo, icons, sounds, software) 
                  is the exclusive property of CRM Conseil, unless otherwise specified.
                </p>
                <p className="mb-4">
                  Any reproduction, representation, modification, publication, transmission, 
                  denaturation, total or partial, of the website or its content, by any means 
                  and on any medium whatsoever, is prohibited without prior written authorization 
                  from CRM Conseil.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Personal Data Protection</h2>
                <p className="mb-4">
                  In accordance with the General Data Protection Regulation (GDPR) and 
                  the French Data Protection Act, you have the right to access, rectify, 
                  delete and port your personal data.
                </p>
                <p className="mb-4">
                  Personal data collected on this website is used exclusively for the purposes 
                  for which it was collected (contact, appointment booking, newsletter) 
                  and is not transmitted to third parties.
                </p>
                <p className="mb-4">
                  To exercise your rights, you can contact us at: contact@crmconseil.com
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookies</h2>
                <p className="mb-4">
                  This website uses cookies to improve your browsing experience and provide 
                  personalized services.
                </p>
                
                <h3 className="text-xl font-bold text-foreground mb-3">What is a cookie?</h3>
                <p className="mb-4">
                  A cookie is a small text file stored on your computer, tablet or smartphone 
                  when you visit a website. It allows the website to remember your actions 
                  and preferences over time.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-3">Types of cookies used</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Necessary cookies:</strong> Essential for the website to function properly (navigation, security)</li>
                  <li><strong>Analytics cookies:</strong> Help us understand how visitors use our website (Google Analytics)</li>
                  <li><strong>Marketing cookies:</strong> Used to track visitors across websites to display relevant advertising</li>
                  <li><strong>Functional cookies:</strong> Enable enhanced functionality and personalization (language preferences)</li>
                </ul>

                <h3 className="text-xl font-bold text-foreground mb-3">Retention period</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Necessary cookies: Session or up to 1 year</li>
                  <li>Analytics cookies: Up to 2 years</li>
                  <li>Marketing cookies: Up to 1 year</li>
                  <li>Functional cookies: Up to 1 year</li>
                </ul>

                <h3 className="text-xl font-bold text-foreground mb-3">Managing your preferences</h3>
                <p className="mb-4">
                  You can manage your cookie preferences at any time through the banner 
                  that appears when you first visit our website, or by configuring your browser.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-3">Browser configuration</h3>
                <p className="mb-2">You can configure your browser to accept or reject cookies:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Chrome:</strong> Settings &gt; Advanced &gt; Privacy and security &gt; Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and website data</li>
                  <li><strong>Edge:</strong> Settings &gt; Site permissions &gt; Cookies and site data</li>
                </ul>

                <p className="mb-4">
                  For more information about cookies and how to manage them, 
                  visit: <a href="https://www.allaboutcookies.org" className="text-primary hover:underline">www.allaboutcookies.org</a>
                </p>

                <p className="mb-4">
                  For any questions about our use of cookies, contact us at: contact@crmconseil.com
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Liability</h2>
                <p className="mb-4">
                  CRM Conseil strives to provide accurate and up-to-date information on this website. 
                  However, it cannot guarantee the accuracy, completeness or timeliness of the information provided.
                </p>
                <p className="mb-4">
                  CRM Conseil declines all responsibility for any damages that may result 
                  from access to or use of this website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Applicable Law</h2>
                <p className="mb-4">
                  These legal notices are governed by French law. Any dispute relating to 
                  the use of this website will be subject to the exclusive jurisdiction 
                  of French courts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact</h2>
                <p className="mb-4">
                  For any questions regarding these legal notices, you can contact us at:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Email:</strong> contact@crmconseil.com</li>
                  <li><strong>Website:</strong> https://crmconseil.com</li>
                </ul>
              </section>

              <div className="mt-12 pt-8 border-t border-muted">
                <p className="text-sm text-foreground/60">
                  Last updated: December 17, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegalesEN;