import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Elco Development",
  description: "Privacy Policy for Elco Development - Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="container mx-auto max-w-4xl px-6 md:px-8 py-16 md:py-24">
          <div className="mb-8">
            <Link 
              href="/" 
              className="text-primary-600 hover:text-primary-700 transition-colors inline-flex items-center gap-2"
            >
              ← Back to Home
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 26, 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Welcome to Elco Development ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Identity Data:</strong> includes first name, last name, and title.</li>
                <li><strong>Contact Data:</strong> includes email address, telephone number, and company name.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
                <li><strong>Marketing and Communications Data:</strong> includes your preferences in receiving marketing from us and your communication preferences.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>To respond to your inquiries and provide you with information about our services</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To analyze website usage and optimize user experience</li>
                <li>To comply with legal obligations</li>
                <li>To protect our business interests and legal rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Contact Forms and Communications</h2>
              <p className="text-gray-700 mb-4">
                When you submit a contact form on our website, we collect the information you provide including your name, email address, phone number, company name, and any message content. This information is used solely to respond to your inquiry and provide you with the services you requested.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                Our website may use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                We may use third-party services to help us operate our business and provide services to you, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Analytics Services:</strong> We may use analytics services to understand how visitors interact with our website.</li>
                <li><strong>Email Services:</strong> We use email service providers to send communications.</li>
                <li><strong>Hosting Services:</strong> Our website is hosted on secure servers.</li>
              </ul>
              <p className="text-gray-700 mb-4">
                These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Your Legal Rights</h2>
              <p className="text-gray-700 mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. International Transfers</h2>
              <p className="text-gray-700 mb-4">
                We may transfer your personal data outside of your country of residence. Whenever we transfer your personal data out of your jurisdiction, we ensure a similar degree of protection is afforded to it by ensuring appropriate safeguards are in place.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal data from children. If you are a parent or guardian and believe we have collected information from your child, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date at the top of this privacy policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Elco Development</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Email: <a href="mailto:austin@elcodev.com" className="text-primary-600 hover:text-primary-700">austin@elcodev.com</a>
                </p>
                <p className="text-gray-700">
                  Phone: <a href="tel:+16155879346" className="text-primary-600 hover:text-primary-700">(615) 587-9346</a>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">14. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                This privacy policy and any dispute or claim arising out of or in connection with it or its subject matter shall be governed by and construed in accordance with the laws of the United States and the State in which we operate.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
