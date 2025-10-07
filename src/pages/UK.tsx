import { Layout } from "@/components/Layout";
import { CTAButton } from "@/components/CTAButton";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Building2, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function UK() {
  const benefits = [
    "World-renowned universities",
    "Globally recognized degrees",
    "Post-study work opportunities",
    "Rich cultural experience",
    "Excellent research facilities",
    "Diverse course options",
  ];

  const programs = [
    { title: "Undergraduate Programs", duration: "3-4 years", icon: GraduationCap },
    { title: "Postgraduate Programs", duration: "1-2 years", icon: BookOpen },
    { title: "PhD Programs", duration: "3-4 years", icon: Building2 },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section py-32 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="text-9xl absolute top-10 right-10 opacity-20">🇬🇧</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-8xl mb-6">🇬🇧</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Study in the <span className="text-accent">United Kingdom</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Experience world-class education at prestigious UK universities with globally recognized degrees
            </p>
            <CTAButton to="/contact" className="text-lg px-12 py-6">
              Apply Now
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Why UK */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Why Study in the UK?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The UK offers some of the world's most prestigious universities and an unmatched academic experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 card-hover">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-lg font-medium">{benefit}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Available Programs</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-8 text-center card-hover h-full">
                  <program.icon className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <p className="text-muted-foreground">{program.duration}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="section-title text-center mb-12">Admission Requirements</h2>
            <Card className="p-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Academic Qualifications</h3>
                    <p className="text-muted-foreground">Relevant academic credentials based on chosen program level</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">English Proficiency</h3>
                    <p className="text-muted-foreground">IELTS (typically 6.0-7.0) or equivalent test scores</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Financial Proof</h3>
                    <p className="text-muted-foreground">Evidence of funds to cover tuition and living expenses</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Supporting Documents</h3>
                    <p className="text-muted-foreground">Personal statement, references, and relevant certificates</p>
                  </div>
                </div>
              </div>
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
              Start Your UK Education Journey
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our experts help you secure admission to top UK universities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton to="/contact" className="text-lg px-12 py-6">
                Apply Now
              </CTAButton>
              <CTAButton to="/ielts" variant="outline" className="text-lg px-12 py-6 border-white text-white hover:bg-white hover:text-primary">
                IELTS Preparation
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
