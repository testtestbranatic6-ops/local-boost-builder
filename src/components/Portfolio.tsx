import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import portfolioPowerwash from "@/assets/portfolio-powerwash.jpg";
import portfolioElectrician from "@/assets/portfolio-electrician.jpg";
import portfolioNGO from "@/assets/portfolio-ngo.jpg";

const projects = [
  {
    title: "Power Clean Co.",
    category: "Power Washing",
    location: "Austin, TX",
    result: "+40% more calls in 60 days",
    image: portfolioPowerwash,
  },
  {
    title: "Bright Spark Electric",
    category: "Electrician",
    location: "Denver, CO",
    result: "+35% increase in bookings",
    image: portfolioElectrician,
  },
  {
    title: "Hope Foundation",
    category: "NGO",
    location: "Boston, MA",
    result: "+150% online donations",
    image: portfolioNGO,
  },
];

const Portfolio = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Real Results for Real Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've helped electricians, power washers, and NGOs grow their businesses online.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={`${project.title} website - ${project.category} in ${project.location}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 text-white">
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm font-medium">View Case Study</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-secondary uppercase tracking-wide">
                    {project.category}
                  </span>
                  <span className="text-xs text-muted-foreground">• {project.location}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-medium text-accent">{project.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/portfolio">
              View All Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
