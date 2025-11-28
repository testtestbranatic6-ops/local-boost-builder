import { ClipboardCheck, Layout, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Free Audit",
    description: "We analyze your current online presence and identify opportunities to get you more customers.",
  },
  {
    icon: Layout,
    title: "Sample Homepage",
    description: "See a mockup of your new website before you commit. No obligation, no pressure.",
  },
  {
    icon: Rocket,
    title: "Build & Launch",
    description: "We build your website and optimize it for search engines. Typically launches within 48 hours.",
  },
  {
    icon: TrendingUp,
    title: "Ongoing Support",
    description: "Optional SEO and website maintenance to keep growing your business month after month.",
  },
];

const HowWeWork = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple 4-step process to get your business online and attracting more customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full gradient-accent flex items-center justify-center shadow-medium z-10">
                <span className="text-white font-bold text-xl">{index + 1}</span>
              </div>

              {/* Card */}
              <div className="bg-card rounded-xl p-6 pt-8 shadow-soft h-full border border-border hover:shadow-medium transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (hidden on last item and on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-accent to-transparent -z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
