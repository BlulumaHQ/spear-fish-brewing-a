import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageMeta from '@/components/PageMeta';

const Privacy = () => (
  <>
    <PageMeta title="Privacy Policy | Spearfish Brewing Company" description="Privacy policy for the Spearfish Brewing Company website." />
    <Header />
    <section className="section-dark pt-32 pb-12 md:pt-40 md:pb-16">
      <div className="container-narrow text-center">
        <h1 className="text-3xl md:text-4xl font-black">Privacy Policy</h1>
      </div>
    </section>
    <section className="section-padding">
      <div className="container-narrow prose prose-neutral max-w-3xl mx-auto">
        <p>Spearfish Brewing Company ("we", "our", "us") respects your privacy and is committed to protecting your personal information.</p>
        <h2>Information We Collect</h2>
        <p>We may collect personal information when you contact us through our website, including your name, email address, and phone number. We also collect anonymous browsing data through cookies and analytics tools.</p>
        <h2>How We Use Your Information</h2>
        <p>We use your information to respond to inquiries, improve our website, send occasional promotional materials if you have opted in, and comply with legal requirements.</p>
        <h2>Cookies</h2>
        <p>Our website uses cookies to enhance your browsing experience. You can choose to accept or decline cookies through your browser settings.</p>
        <h2>Third-Party Services</h2>
        <p>We may use third-party services such as Google Analytics and social media platforms. These services have their own privacy policies governing their use of your information.</p>
        <h2>Data Security</h2>
        <p>We take reasonable measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
        <h2>Contact</h2>
        <p>For questions about this privacy policy, contact us at <a href="mailto:hailey@spearfishbrewing.com">hailey@spearfishbrewing.com</a> or call <a href="tel:605-717-6999">605-717-6999</a>.</p>
      </div>
    </section>
    <Footer />
  </>
);

export default Privacy;
