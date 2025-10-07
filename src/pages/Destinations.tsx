import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/CTAButton";
import { GraduationCap, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const destinations = [
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    path: "/uk",
    description: "World-class universities, rich cultural heritage, and excellent post-study work opportunities.",
    highlights: ["Top-ranked universities", "Post-study work visa", "Cultural diversity"],
  },
  {
    country: "China",
    flag: "🇨🇳",
    path: "/china",
    description: "Affordable MBBS/BDS programs with international recognition and scholarship opportunities.",
    highlights: ["MBBS/BDS programs", "Scholarships available", "Modern facilities"],
  },
  {
    country: "Kyrgyzstan",
    flag: "🇰🇬",
    path: "/kyrgyzstan",
    description: "Quality medical education at affordable costs with English-medium instruction.",
    highlights: ["Low tuition fees", "English medium", "Recognized degrees"],
  },
];

export default function Destinations() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section py-32 text-center text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Study <span className="text-accent">Destinations</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore world-class education opportunities across the globe
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 card-hover h-full flex flex-col">
                  <div className="text-6xl mb-4 text-center">{destination.flag}</div>
                  <h3 className="text-2xl font-bold mb-4 text-center">{destination.country}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{destination.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {destination.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <CTAButton
                    variant="primary"
                    to={destination.path}
                    icon={MapPin}
                    className="w-full"
                  >
                    Learn More
                  </CTAButton>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get personalized guidance from our expert consultants
            </p>
            <CTAButton variant="primary" to="/contact">
              Get Free Consultation
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
