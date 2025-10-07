import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/CTAButton";
import { BookOpen, Award, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const testPrograms = [
  {
    name: "IELTS Preparation",
    path: "/ielts",
    description: "Comprehensive IELTS preparation with expert instructors and proven strategies.",
    features: ["All 4 modules covered", "Mock tests included", "Personalized feedback"],
  },
  {
    name: "PTE Academic",
    path: "/pte",
    description: "Complete PTE preparation course with computer-based practice sessions.",
    features: ["Speaking practice", "AI-scored tests", "Flexible timings"],
  },
];

export default function TestPrep() {
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
              Test <span className="text-accent">Preparation</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Achieve your target score with our expert-led preparation programs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Test Programs */}
      <section className="py-20 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testPrograms.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 card-hover h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-4">{program.name}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{program.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {program.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <CTAButton
                    variant="primary"
                    to={program.path}
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

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Why Choose Our Test Prep?</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Award,
                title: "Expert Instructors",
                description: "Learn from certified trainers with years of experience"
              },
              {
                icon: Users,
                title: "Small Batches",
                description: "Personalized attention with limited students per batch"
              },
              {
                icon: BookOpen,
                title: "Study Materials",
                description: "Comprehensive materials and practice tests included"
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 card-hover text-center">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to enroll in our next batch
            </p>
            <CTAButton variant="primary" to="/contact">
              Enroll Now
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
