import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Raj Patel",
    business: "Power Clean Co.",
    location: "Austin, TX",
    quote: "Lovable Digital built us a new website and optimized our GMB — we got 30% more calls in 2 months. Best investment we made this year.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    business: "Bright Spark Electric",
    location: "Denver, CO",
    quote: "Fast turnaround, honest pricing, and they actually understand what electricians need. Our bookings went up 35% after launch.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    business: "Hope Foundation",
    location: "Boston, MA",
    quote: "They gave us a free website as an NGO and it exceeded our expectations. Online donations increased by 150%. Highly recommend!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what local business owners have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-6 w-12 h-12 rounded-full gradient-secondary flex items-center justify-center shadow-medium">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-heading font-bold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.business}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video testimonial CTA */}
        <div className="max-w-2xl mx-auto bg-card rounded-xl p-8 shadow-soft text-center border border-border">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
            See Video Testimonials
          </h3>
          <p className="text-muted-foreground mb-6">
            Watch real business owners share their experience working with us (20-40 second clips).
          </p>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-muted-foreground">Video testimonials coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
