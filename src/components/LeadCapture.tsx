import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";

const LeadCapture = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Request Received!",
      description: "We'll send your free homepage mockup within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-secondary via-secondary to-secondary/90 rounded-2xl p-8 md:p-12 shadow-strong text-white">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-4">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">No Obligation. No Pressure.</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Get a Free Homepage Mockup
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                See what your new website could look like. We'll create a custom homepage design just for you — completely free.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <Label htmlFor="business" className="text-white mb-2 block">
                    Business Name *
                  </Label>
                  <Input
                    id="business"
                    name="business"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
                    placeholder="Your Business LLC"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="text-white mb-2 block">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
                    placeholder="you@business.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="website" className="text-white mb-2 block">
                    Current Website (if any)
                  </Label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
                    placeholder="https://yoursite.com"
                  />
                </div>
                <div>
                  <Label htmlFor="industry" className="text-white mb-2 block">
                    Industry *
                  </Label>
                  <Select name="industry" required>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-white">
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

              <div className="pt-4">
                <Button
                  type="submit"
                  variant="accent"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Get My Free Mockup"}
                </Button>
                <p className="text-sm text-white/70 text-center mt-4">
                  We'll email you within 24 hours with your custom homepage design.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
