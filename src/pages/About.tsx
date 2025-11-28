import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Zap, Target, Users, Globe, Award } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Speed & Efficiency",
    description: "We launch websites in days, not months. Your business can't wait, and neither should you.",
  },
  {
    icon: Heart,
    title: "Honest Pricing",
    description: "No hidden fees, no surprise charges. What you see is what you pay. Simple and fair.",
  },
  {
    icon: Target,
    title: "Real Results",
    description: "We measure success by your success. More calls, more bookings, more revenue.",
  },
  {
    icon: Users,
    title: "Personal Support",
    description: "US-based account manager for calls and contracts. Real humans, real help.",
  },
];

const team = [
  {
    name: "Priya Sharma",
    role: "Founder & Lead Developer",
    description: "Multi-skilled builder with 8+ years experience creating websites and SEO strategies for small businesses.",
  },
  {
    name: "James Wilson",
    role: "US Account Manager",
    description: "Your main point of contact. Based in Austin, TX. Handles all client calls, contracts, and support.",
  },
  {
    name: "Ravi Kumar",
    role: "Senior Designer",
    description: "Creates beautiful, conversion-focused designs that make your business stand out online.",
  },
  {
    name: "Lisa Martinez",
    role: "SEO Specialist",
    description: "Local SEO expert who helps businesses dominate their local search results.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-muted via-background to-background">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                We Help Local Businesses Get Found Online
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Founded by a passionate builder and a trusted US partner, we're a small remote team dedicated to helping electricians, power washers, and NGOs grow their businesses online.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
                  <Globe className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium">Remote Team</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
                  <Users className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium">US-Based Support</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
                  <Award className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium">100+ Sites Built</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Our Story
              </h2>
              
              <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
                <p>
                  Lovable Digital started with a simple observation: small service businesses were getting ripped off by expensive agencies or stuck with terrible DIY websites.
                </p>
                
                <p>
                  As a developer with years of experience building websites, I (Priya) saw how powerful a good website and local SEO could be for local businesses. But most agencies charged thousands of dollars and took months to deliver.
                </p>
                
                <p>
                  I partnered with James, a friend in the US who understood the American market and could provide local support to our clients. Together, we built Lovable Digital to offer fast, affordable, high-quality websites specifically for local service businesses.
                </p>
                
                <p>
                  We work with a small remote team of designers, developers, and SEO specialists. Everyone on our team has worked on dozens of local business websites. We know what works and what doesn't.
                </p>
                
                <p>
                  We're proud to say we've helped over 100 businesses get online and grow. And we're just getting started.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These are the principles that guide everything we do.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl gradient-secondary flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Meet the Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A small, dedicated team focused on your success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 text-center"
                >
                  <div className="w-24 h-24 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <div className="text-sm text-secondary font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-white">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Let's talk about your business and how we can help you grow online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">Book Free Call</Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white hover:text-secondary"
                asChild
              >
                <Link to="/portfolio">See Our Work</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
