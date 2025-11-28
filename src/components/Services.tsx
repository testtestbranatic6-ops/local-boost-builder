import { Globe, Search, Palette, MapPin } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design",
    description: "Fast, mobile-friendly websites built to convert visitors into customers.",
  },
  {
    icon: Search,
    title: "Local SEO",
    description: "Get found by local customers searching for your services on Google.",
  },
  {
    icon: Palette,
    title: "Logos & Branding",
    description: "Professional logos and brand identity that make you stand out.",
  },
  {
    icon: MapPin,
    title: "GMB Optimization",
    description: "Optimize your Google Business Profile to dominate local search results.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Everything You Need to Get More Customers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, effective digital marketing for local service businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-xl gradient-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
