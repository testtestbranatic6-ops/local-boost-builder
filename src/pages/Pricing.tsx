import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, X, Gift } from "lucide-react";

const websitePackages = [
  {
    name: "Basic",
    price: "$299",
    description: "Perfect for getting your business online quickly",
    bestFor: "New businesses or single-service providers",
    features: [
      { text: "5-page website", included: true },
      { text: "Mobile responsive design", included: true },
      { text: "Contact form", included: true },
      { text: "Basic SEO setup", included: true },
      { text: "Google Analytics integration", included: true },
      { text: "1 round of revisions", included: true },
      { text: "1 month post-launch support", included: true },
      { text: "Logo design", included: false },
      { text: "Advanced forms", included: false },
      { text: "Blog setup", included: false },
    ],
    deliverables: "Launch within 3-5 business days",
  },
  {
    name: "Standard",
    price: "$499",
    popular: true,
    description: "Our most popular package for growing businesses",
    bestFor: "Established businesses ready to dominate locally",
    features: [
      { text: "10-page website", included: true },
      { text: "Mobile responsive design", included: true },
      { text: "Contact & quote request forms", included: true },
      { text: "Advanced SEO optimization", included: true },
      { text: "Google Analytics & Search Console", included: true },
      { text: "Logo design included", included: true },
      { text: "Service area pages", included: true },
      { text: "2 rounds of revisions", included: true },
      { text: "3 months post-launch support", included: true },
      { text: "Blog setup", included: false },
    ],
    deliverables: "Launch within 5-7 business days",
  },
  {
    name: "Premium",
    price: "$799",
    description: "Complete digital presence solution",
    bestFor: "Businesses serious about online growth",
    features: [
      { text: "15-page website", included: true },
      { text: "Mobile responsive design", included: true },
      { text: "Advanced forms & online booking", included: true },
      { text: "Complete SEO package", included: true },
      { text: "Google Analytics & Search Console", included: true },
      { text: "Logo & complete branding kit", included: true },
      { text: "Service area pages", included: true },
      { text: "Blog setup with 3 starter posts", included: true },
      { text: "3 rounds of revisions", included: true },
      { text: "6 months priority support", included: true },
    ],
    deliverables: "Launch within 7-10 business days",
  },
];

const seoPackages = [
  {
    name: "Basic SEO",
    price: "$199",
    period: "per month",
    description: "Essential local SEO to get found",
    features: [
      "GMB optimization & management",
      "Monthly local citations",
      "Basic keyword research",
      "Monthly progress reports",
      "Review management",
    ],
    commitment: "3-month minimum",
  },
  {
    name: "Advanced SEO",
    price: "$399",
    period: "per month",
    description: "Aggressive local SEO for maximum visibility",
    features: [
      "Everything in Basic SEO",
      "Content creation (2 blog posts/month)",
      "Advanced keyword targeting",
      "Competitor analysis",
      "Link building campaign",
      "Weekly ranking reports",
      "Priority support",
    ],
    commitment: "3-month minimum",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-muted via-background to-background">
          <div className="section-container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              No hidden fees. No long-term contracts for websites. Pay once for your website, and choose optional monthly SEO services.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <Gift className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-accent">
                Special: 3 free NGO websites available for testimonials
              </span>
            </div>
          </div>
        </section>

        {/* Website Packages */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Website Packages
              </h2>
              <p className="text-lg text-muted-foreground">
                One-time payment. Own your website forever.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {websitePackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`bg-card rounded-xl shadow-soft border relative ${
                    pkg.popular
                      ? "border-accent shadow-strong scale-105"
                      : "border-border"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 gradient-accent rounded-full">
                      <span className="text-sm font-bold text-white">Most Popular</span>
                    </div>
                  )}

                  <div className="p-8">
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                      {pkg.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-foreground">{pkg.price}</span>
                      <span className="text-muted-foreground ml-2">one-time</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{pkg.description}</p>
                    <div className="bg-muted/50 rounded-lg p-3 mb-6">
                      <p className="text-sm font-medium text-foreground">Best for:</p>
                      <p className="text-sm text-muted-foreground">{pkg.bestFor}</p>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          )}
                          <span
                            className={`text-sm ${
                              feature.included ? "text-foreground" : "text-muted-foreground"
                            }`}
                          >
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-border pt-4 mb-6">
                      <p className="text-sm font-medium text-foreground mb-1">Timeline:</p>
                      <p className="text-sm text-muted-foreground">{pkg.deliverables}</p>
                    </div>

                    <Button
                      variant={pkg.popular ? "hero" : "outline"}
                      size="lg"
                      className="w-full"
                      asChild
                    >
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Packages */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Optional Monthly SEO Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Keep growing with ongoing local SEO. Cancel anytime after 3 months.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {seoPackages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 shadow-soft border border-border"
                >
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                    <span className="text-muted-foreground ml-2">{pkg.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{pkg.description}</p>

                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-muted/50 rounded-lg p-3 mb-6">
                    <p className="text-sm text-muted-foreground">{pkg.commitment}</p>
                  </div>

                  <Button variant="secondary" size="lg" className="w-full" asChild>
                    <Link to="/contact">Add SEO Services</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NGO Offer */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-accent via-accent to-accent/90 rounded-2xl p-8 md:p-12 shadow-strong text-white">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-4">
                  <Gift className="w-5 h-5" />
                  <span className="text-sm font-medium">Special Startup Offer</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Free Websites for NGOs
                </h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto mb-6">
                  We're offering 2-3 completely free websites to NGOs and non-profit organizations. In exchange, we ask for a testimonial and a link from your website.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-8">
                <h3 className="font-heading font-bold text-xl mb-4">What's included:</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">10-page professional website</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Mobile responsive design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Donation forms integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Basic SEO setup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">6 months support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Logo design included</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <Button variant="default" size="xl" className="bg-white text-accent hover:bg-white/90" asChild>
                  <Link to="/contact">Apply for Free NGO Website</Link>
                </Button>
                <p className="text-sm text-white/70 mt-4">Limited to 2-3 projects. First come, first served.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-12">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {[
                  {
                    q: "How long does it take to build my website?",
                    a: "Basic websites launch in 3-5 business days, Standard in 5-7 days, and Premium in 7-10 days. Rush options available for an additional fee.",
                  },
                  {
                    q: "Do I own the website after I pay?",
                    a: "Yes! Once you pay, the website is 100% yours. No recurring fees unless you choose optional SEO services.",
                  },
                  {
                    q: "How many revisions do I get?",
                    a: "Basic gets 1 round, Standard gets 2 rounds, and Premium gets 3 rounds of revisions. Additional revisions can be purchased if needed.",
                  },
                  {
                    q: "What if I'm not happy with the website?",
                    a: "We offer a satisfaction guarantee. If you're not happy after your included revisions, we'll refund 100% of your payment.",
                  },
                  {
                    q: "Can I cancel SEO services anytime?",
                    a: "Yes, after the initial 3-month commitment, you can cancel anytime with 30 days notice.",
                  },
                  {
                    q: "Do you offer payment plans?",
                    a: "Yes! We offer payment plans for packages over $499. Contact us for details.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-6 shadow-soft border border-border"
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

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free call to discuss your project and get a custom homepage mockup.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Book Your Free Call</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
