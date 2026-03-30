import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageMeta from '@/components/PageMeta';

const Terms = () => (
  <>
    <PageMeta title="Terms and Conditions | Spearfish Brewing Company" description="Terms and conditions for the Spearfish Brewing Company website." />
    <Header />
    <section className="section-dark pt-32 pb-12 md:pt-40 md:pb-16">
      <div className="container-narrow text-center">
        <h1 className="text-3xl md:text-4xl font-black">Terms and Conditions</h1>
      </div>
    </section>
    <section className="section-padding">
      <div className="container-narrow prose prose-neutral max-w-3xl mx-auto">
        <p>Welcome to the Spearfish Brewing Company website. By accessing and using this website, you accept and agree to be bound by the following terms and conditions.</p>
        <h2>Use of Website</h2>
        <p>The content on this website is for general information and use only. It is subject to change without notice. This website uses cookies to monitor browsing preferences.</p>
        <h2>Intellectual Property</h2>
        <p>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, graphics, and beer/food imagery. Reproduction is prohibited other than in accordance with the copyright notice.</p>
        <h2>Age Requirement</h2>
        <p>You must be 21 years of age or older to purchase or consume alcoholic beverages. By using this website, you confirm that you are of legal drinking age in your jurisdiction.</p>
        <h2>Limitation of Liability</h2>
        <p>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</p>
        <h2>Governing Law</h2>
        <p>Your use of this website and any dispute arising out of such use is subject to the laws of the State of South Dakota, United States of America.</p>
        <h2>Contact</h2>
        <p>If you have questions about these terms, please contact us at <a href="mailto:hailey@spearfishbrewing.com">hailey@spearfishbrewing.com</a> or call <a href="tel:605-717-6999">605-717-6999</a>.</p>
      </div>
    </section>
    <Footer />
  </>
);

export default Terms;
