import { Layout } from "@/components/Layout";
import { CTAButton } from "@/components/CTAButton";
import { motion } from "framer-motion";
import { BookOpen, Users, Trophy, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function IELTS() {
  const features = [
    { icon: Users, title: "Expert Instructors", desc: "Learn from certified IELTS trainers" },
    { icon: BookOpen, title: "Comprehensive Material", desc: "Latest study resources and practice tests" },
    { icon: Target, title: "Focused Training", desc: "All four modules covered thoroughly" },
    { icon: Trophy, title: "Proven Results", desc: "High success rate among our students" },
  ];

  const modules = [
    { title: "Listening", duration: "30 minutes", sections: "4 sections, 40 questions" },
    { title: "Reading", duration: "60 minutes", sections: "3 sections, 40 questions" },
    { title: "Writing", duration: "60 minutes", sections: "2 tasks" },
    { title: "Speaking", duration: "11-14 minutes", sections: "3 parts" },
  ];

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
              <span className="text-accent">IELTS</span> Test Preparation
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Achieve your target band score with our comprehensive IELTS preparation program
            </p>
            <CTAButton to="/contact" className="text-lg px-12 py-6">
              Enroll Now
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* What is IELTS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="section-title mb-6">What is IELTS?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              IELTS (International English Language Testing System) is the world's most popular English language proficiency test for study, work, and migration. It is accepted by over 11,000 organizations worldwide, including universities, employers, professional bodies, and immigration authorities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Test Modules */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">IELTS Test Modules</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center card-hover h-full">
                  <h3 className="text-2xl font-bold mb-3 text-primary">{module.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{module.duration}</p>
                  <p className="text-sm">{module.sections}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Why Choose Our IELTS Program?</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center card-hover h-full">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="section-title text-center mb-12">Course Features</h2>
            <Card className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-lg">Comprehensive coverage of all four modules: Listening, Reading, Writing, and Speaking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-lg">Regular mock tests and practice sessions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-lg">Personalized feedback and improvement strategies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-lg">Flexible batch timings to suit your schedule</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-lg">Study materials and resources included</span>
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-section py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Ace Your IELTS?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our next batch and achieve your target band score
            </p>
            <CTAButton to="/contact" className="text-lg px-12 py-6">
              Register Today
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
