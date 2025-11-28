import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, DollarSign } from "lucide-react";
import portfolioPowerwash from "@/assets/portfolio-powerwash.jpg";
import portfolioElectrician from "@/assets/portfolio-electrician.jpg";
import portfolioNGO from "@/assets/portfolio-ngo.jpg";

const caseStudies = [
  {
    title: "Power Clean Co.",
    industry: "Power Washing",
    location: "Austin, TX",
    image: portfolioPowerwash,
    challenge: "Power Clean Co. had an outdated website that didn't show up in Google searches. Most of their business came from word-of-mouth, but they wanted to grow beyond their existing customer base.",
    solution: "We built a modern, mobile-responsive website with before/after photo galleries and service area pages. We optimized their Google Business Profile and created local citations across 50+ directories.",
    results: [
      { icon: TrendingUp, label: "Web Traffic", value: "+120%" },
      { icon: Users, label: "More Calls", value: "+40%" },
      { icon: DollarSign, label: "Revenue", value: "+35%" },
    ],
    testimonial: {
      quote: "Lovable Digital completely transformed our online presence. We're getting calls from customers who found us on Google, and our bookings are up 40%. Best investment we made this year.",
      author: "Raj Patel",
      role: "Owner, Power Clean Co.",
    },
    timeline: "Launched in 5 days, results within 60 days",
  },
  {
    title: "Bright Spark Electric",
    industry: "Electrician",
    location: "Denver, CO",
    image: portfolioElectrician,
    challenge: "Bright Spark had a basic website but struggled to rank for local searches. They were losing business to competitors who appeared higher in Google results.",
    solution: "We redesigned their website with a focus on local SEO, created dedicated service pages for each area they serve, and implemented a review collection system. We also created a blog with helpful electrical safety tips.",
    results: [
      { icon: TrendingUp, label: "Local Rankings", value: "Top 3" },
      { icon: Users, label: "Bookings", value: "+35%" },
      { icon: DollarSign, label: "Revenue", value: "+42%" },
    ],
    testimonial: {
      quote: "We went from page 3 to the top of Google for 'electrician Denver.' Our phone hasn't stopped ringing. Fast turnaround, honest pricing, and they actually understand what electricians need.",
      author: "Sarah Mitchell",
      role: "Co-Owner, Bright Spark Electric",
    },
    timeline: "Launched in 6 days, top 3 rankings within 90 days",
  },
  {
    title: "Hope Foundation",
    industry: "NGO",
    location: "Boston, MA",
    image: portfolioNGO,
    challenge: "Hope Foundation needed a professional website to increase online donations and volunteer sign-ups. They had limited budget and technical expertise.",
    solution: "As part of our NGO program, we provided a free website with donation forms, volunteer sign-up, and impact stories. We optimized for search engines and set up Google for Nonprofits.",
    results: [
      { icon: TrendingUp, label: "Traffic", value: "+200%" },
      { icon: Users, label: "Volunteers", value: "+85%" },
      { icon: DollarSign, label: "Donations", value: "+150%" },
    ],
    testimonial: {
      quote: "We're a small NGO and couldn't afford a professional website. Lovable Digital gave us an amazing site for free. Online donations are up 150% and we're reaching more people than ever.",
      author: "Michael Chen",
      role: "Director, Hope Foundation",
    },
    timeline: "Launched in 7 days, immediate impact on donations",
  },
  {
    title: "Crystal Clear Windows",
    industry: "Window Cleaning",
    location: "Seattle, WA",
    image: portfolioPowerwash,
    challenge: "Crystal Clear had no online presence and relied entirely on referrals. They wanted to expand to commercial clients but didn't have a professional website to showcase their work.",
    solution: "We created a sleek website highlighting their residential and commercial services, with separate landing pages for each. Added online booking and integrated with their scheduling software.",
    results: [
      { icon: TrendingUp, label: "Online Leads", value: "+90%" },
      { icon: Users, label: "Commercial Jobs", value: "+60%" },
      { icon: DollarSign, label: "Revenue", value: "+50%" },
    ],
    testimonial: {
      quote: "The website paid for itself in the first month. We're now landing commercial contracts we never would have gotten before. The online booking feature is a game-changer.",
      author: "Tom Anderson",
      role: "Owner, Crystal Clear Windows",
    },
    timeline: "Launched in 4 days, ROI within 30 days",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-muted via-background to-background">
          <div className="section-container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Real Results for Real Businesses
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we've helped local service businesses grow with professional websites and local SEO.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="space-y-24">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-strong group">
                      <img
                        src={study.image}
                        alt={`${study.title} website case study - ${study.industry} in ${study.location}`}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm font-medium text-secondary uppercase tracking-wide">
                        {study.industry}
                      </span>
                      <span className="text-sm text-muted-foreground">• {study.location}</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                      {study.title}
                    </h2>

                    <div className="space-y-6 mb-8">
                      <div>
                        <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                          The Challenge
                        </h3>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                          Our Solution
                        </h3>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {study.results.map((result, i) => (
                        <div
                          key={i}
                          className="bg-card rounded-xl p-4 shadow-soft border border-border text-center"
                        >
                          <result.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                          <div className="text-2xl font-bold text-foreground mb-1">
                            {result.value}
                          </div>
                          <div className="text-xs text-muted-foreground">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-muted/50 rounded-xl p-6 border-l-4 border-secondary mb-6">
                      <p className="text-foreground italic mb-4">"{study.testimonial.quote}"</p>
                      <div>
                        <div className="font-heading font-bold text-foreground">
                          {study.testimonial.author}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {study.testimonial.role}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-muted-foreground mb-6">
                      <strong>Timeline:</strong> {study.timeline}
                    </div>

                    <Button variant="outline" size="lg" asChild>
                      <Link to="/contact">
                        Get Similar Results
                        <ExternalLink className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-white">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Get Results Like These?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Join dozens of local businesses that have grown with our websites and SEO services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">Book Free Call</Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link to="/pricing">See Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
