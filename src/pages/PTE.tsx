import { Layout } from "@/components/Layout";
import { CTAButton } from "@/components/CTAButton";
import { motion } from "framer-motion";
import { Clock, Laptop, Award, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function PTE() {
  const features = [
    { icon: Clock, title: "Quick Results", desc: "Get your scores within 48 hours" },
    { icon: Laptop, title: "Computer-Based", desc: "Fully automated and unbiased scoring" },
    { icon: Award, title: "Globally Accepted", desc: "Recognized by universities worldwide" },
    { icon: CheckCircle2, title: "Flexible Scheduling", desc: "Book test dates that suit you" },
  ];

  const sections = [
    { title: "Speaking & Writing", duration: "77-93 minutes", parts: "Personal introduction, Read aloud, Repeat sentence, Describe image, Re-tell lecture, Answer questions, Summarize text, Essay" },
    { title: "Reading", duration: "32-40 minutes", parts: "Multiple choice, Re-order paragraphs, Fill in the blanks" },
    { title: "Listening", duration: "45-57 minutes", parts: "Summarize spoken text, Multiple choice, Fill the blanks, Highlight correct summary, Select missing word, Write from dictation" },
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
              <span className="text-accent">PTE</span> Academic Preparation
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Master PTE Academic with our expert-led training program
            </p>
            <CTAButton to="/contact" className="text-lg px-12 py-6">
              Enroll Now
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* What is PTE */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="section-title mb-6">What is PTE Academic?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              PTE Academic (Pearson Test of English) is a computer-based English language test trusted by universities, colleges, and governments around the world. It assesses your reading, writing, listening, and speaking skills in a single 2-hour test session with results available within 48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Test Sections */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">PTE Test Sections</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6 card-hover h-full">
                  <h3 className="text-2xl font-bold mb-3 text-primary">{section.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 font-semibold">{section.duration}</p>
                  <p className="text-sm text-muted-foreground">{section.parts}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose PTE */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Why Choose PTE Academic?</h2>
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
            <h2 className="section-title text-center mb-12">Our PTE Training Program</h2>
            <Card className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-lg">Comprehensive training for all PTE question types</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-lg">AI-powered practice tests and scoring</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-lg">Specialized techniques for computer-based testing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-lg">Expert tips for time management and scoring strategies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-lg">Regular mock tests in actual test conditions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-lg">Individual attention and personalized feedback</span>
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
              Ready to Excel in PTE?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our expert-led PTE preparation program today
            </p>
            <CTAButton to="/contact" className="text-lg px-12 py-6">
              Register Now
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
