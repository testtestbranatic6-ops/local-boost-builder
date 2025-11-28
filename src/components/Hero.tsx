import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-business-owner.jpg";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-background -z-10" />
      
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Content */}
          <div className="animate-slide-up">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20 mb-6">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">US-Based Support • 3 Free NGO Websites Available</span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
              Websites & SEO that put your phone ringing
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Affordable websites, local SEO, and logos for small service businesses — built to convert.
            </p>

            {/* Benefits bullets */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium">More Calls</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium">Local SEO</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium">Fast Turnaround</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Book Free Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/pricing">See Packages</Link>
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex items-center gap-6 mt-10 pt-10 border-t border-border">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-2xl font-bold text-foreground">48hrs</span>
                </div>
                <span className="text-sm text-muted-foreground">Avg. Launch Time</span>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-2xl font-bold text-foreground mb-1">$299</div>
                <span className="text-sm text-muted-foreground">Starting Price</span>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-2xl font-bold text-foreground mb-1">100+</div>
                <span className="text-sm text-muted-foreground">Sites Built</span>
              </div>
            </div>
          </div>

          {/* Right column: Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={heroImage}
                alt="Successful small business owner standing proudly in front of their service van"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-strong p-6 max-w-xs hidden lg:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="font-bold text-lg text-foreground">30% More Calls</div>
                  <div className="text-sm text-muted-foreground">Average Client Result</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
