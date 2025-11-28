import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$299",
    description: "Perfect for getting started online",
    features: [
      "5-page website",
      "Mobile responsive",
      "Contact form",
      "Basic SEO setup",
      "1 month support",
    ],
  },
  {
    name: "Standard",
    price: "$499",
    popular: true,
    description: "Best for growing businesses",
    features: [
      "10-page website",
      "Mobile responsive",
      "Contact & quote forms",
      "Advanced SEO",
      "Logo design included",
      "3 months support",
    ],
  },
  {
    name: "Premium",
    price: "$799",
    description: "Complete digital presence",
    features: [
      "15-page website",
      "Mobile responsive",
      "Advanced forms & booking",
      "Complete SEO package",
      "Logo & branding kit",
      "6 months support",
      "Priority updates",
    ],
  },
];

const PricingSnapshot = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Simple, Honest Pricing
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-2">
            No hidden fees. No monthly contracts for websites. Just pick your package.
          </p>
          <p className="text-sm text-white/70">
            Optional SEO services: $199/mo (Basic) or $399/mo (Advanced)
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-strong relative ${
                plan.popular ? "ring-4 ring-accent scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 gradient-accent rounded-full">
                  <span className="text-sm font-bold text-white">Most Popular</span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="accent" size="xl" asChild>
            <Link to="/pricing">View Full Pricing Details</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSnapshot;
