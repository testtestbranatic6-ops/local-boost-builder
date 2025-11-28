import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Calendar, MessageSquare } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Received!",
      description: "We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-muted via-background to-background">
          <div className="section-container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Let's Talk About Your Business
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Book a free consultation call or send us a message. We'll get back to you within 24 hours.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 text-center">
                <div className="w-14 h-14 rounded-xl gradient-secondary flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  Call Us
                </h3>
                <p className="text-muted-foreground mb-4">
                  Speak with our US-based account manager
                </p>
                <a
                  href="tel:+1234567890"
                  className="text-secondary font-medium hover:text-secondary/80 transition-colors"
                >
                  (123) 456-7890
                </a>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 text-center">
                <div className="w-14 h-14 rounded-xl gradient-secondary flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  Email Us
                </h3>
                <p className="text-muted-foreground mb-4">
                  We'll respond within 24 hours
                </p>
                <a
                  href="mailto:hello@lovabledigital.com"
                  className="text-secondary font-medium hover:text-secondary/80 transition-colors"
                >
                  hello@lovabledigital.com
                </a>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 text-center">
                <div className="w-14 h-14 rounded-xl gradient-secondary flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  WhatsApp
                </h3>
                <p className="text-muted-foreground mb-4">
                  Quick chat for urgent questions
                </p>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary font-medium hover:text-secondary/80 transition-colors"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours with a free homepage mockup.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="mb-2 block">
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <Label htmlFor="business" className="mb-2 block">
                        Business Name *
                      </Label>
                      <Input
                        id="business"
                        name="business"
                        required
                        placeholder="Your Business LLC"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="mb-2 block">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@business.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="website" className="mb-2 block">
                        Current Website (if any)
                      </Label>
                      <Input
                        id="website"
                        name="website"
                        type="url"
                        placeholder="https://yoursite.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="industry" className="mb-2 block">
                        Industry *
                      </Label>
                      <Select name="industry" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="power-washing">Power Washing</SelectItem>
                          <SelectItem value="electrician">Electrician</SelectItem>
                          <SelectItem value="plumbing">Plumbing</SelectItem>
                          <SelectItem value="hvac">HVAC</SelectItem>
                          <SelectItem value="landscaping">Landscaping</SelectItem>
                          <SelectItem value="ngo">NGO / Non-Profit</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="mb-2 block">
                      Tell Us About Your Project *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="What are your goals? What services are you interested in?"
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="mockup"
                      name="mockup"
                      className="mt-1"
                    />
                    <label htmlFor="mockup" className="text-sm text-muted-foreground">
                      Yes, I'd like a free homepage mockup (usually delivered within 24 hours)
                    </label>
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We'll respond within 24 hours on business days.
                  </p>
                </form>
              </div>

              {/* Calendar Booking */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                    Book a Free Call
                  </h2>
                  <p className="text-muted-foreground">
                    Schedule a 15-minute call with our US-based account manager to discuss your project.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-soft border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-lg text-foreground">
                        15-Minute Consultation
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Free, no obligation
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-foreground">US-Based Support</div>
                        <div className="text-sm text-muted-foreground">
                          Speak with James Wilson in Austin, TX
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-foreground">Phone or Video</div>
                        <div className="text-sm text-muted-foreground">
                          Your choice - we'll send you a calendar link
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Calendar placeholder */}
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-6">
                    <div className="text-center">
                      <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <span className="text-muted-foreground">
                        Calendly integration placeholder
                      </span>
                    </div>
                  </div>

                  <Button variant="secondary" size="lg" className="w-full">
                    View Available Times
                  </Button>
                </div>

                {/* Additional info */}
                <div className="mt-6 bg-muted/50 rounded-xl p-6">
                  <h3 className="font-heading font-bold text-foreground mb-3">
                    What to expect on the call:
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-0.5">•</span>
                      <span>Quick discussion of your business goals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-0.5">•</span>
                      <span>Review of your current online presence (if any)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-0.5">•</span>
                      <span>Recommendation on best package for your needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-0.5">•</span>
                      <span>Timeline and next steps</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
                Before You Contact Us
              </h2>

              <div className="space-y-6">
                {[
                  {
                    q: "How quickly can you start on my project?",
                    a: "We can typically start within 1-2 business days after our initial call and receiving your content/photos.",
                  },
                  {
                    q: "What information do you need from me?",
                    a: "We'll need your business details, services offered, service areas, photos (or we can help source them), and any specific design preferences.",
                  },
                  {
                    q: "Do I need to pay upfront?",
                    a: "We typically require 50% upfront and 50% before launch. Payment plans are available for packages over $499.",
                  },
                  {
                    q: "What if I'm not happy with the website?",
                    a: "We include multiple rounds of revisions (depending on your package) and offer a satisfaction guarantee. If you're not happy, we'll make it right or refund your payment.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-6 shadow-soft"
                  >
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
