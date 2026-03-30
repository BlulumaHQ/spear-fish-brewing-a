import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import PageMeta from '@/components/PageMeta';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out! We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <PageMeta title="Contact Us | Spearfish Brewing Company" description="Get in touch with Spearfish Brewing Company. Visit our taproom at 741 N Main St Suite 130, Spearfish, SD 57783 or call 605-717-6999." />
      <Header />

      {/* Hero */}
      <section className="section-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-narrow text-center">
          <FadeIn>
            <Mail className="w-12 h-12 mx-auto mb-6 gold-accent" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">Contact Us</h1>
            <p className="section-muted text-lg max-w-2xl mx-auto">
              We'd love to hear from you. Stop by the taproom, give us a call, or send us a message.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    required
                    placeholder="How can we help?"
                    rows={5}
                  />
                </div>
                <Button type="submit" variant="default" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </FadeIn>

            {/* Info */}
            <FadeIn delay={0.2}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit the Taproom</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="gold-accent mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Address</div>
                    <p className="text-muted-foreground text-sm">741 N Main St Suite 130<br />Spearfish, SD 57783</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={20} className="gold-accent mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href="tel:605-717-6999" className="text-muted-foreground text-sm hover:text-foreground transition-colors">605-717-6999</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={20} className="gold-accent mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:hailey@spearfishbrewing.com" className="text-muted-foreground text-sm hover:text-foreground transition-colors">hailey@spearfishbrewing.com</a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-lg overflow-hidden border border-border aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2816.0!2d-103.8593!3d44.4908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x533273c9c7b4f8e7%3A0x0!2s741+N+Main+St+Suite+130%2C+Spearfish%2C+SD+57783!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Spearfish Brewing Company location"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
