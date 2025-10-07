import { Layout } from "@/components/Layout";
import { CTAButton } from "@/components/CTAButton";
import { motion } from "framer-motion";
import { Globe, Award, Calendar, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ChineseLanguage() {
  const programs = [
    { title: "6-Month Program", scholarship: "Partial Scholarship Available", intake: "September 2025" },
    { title: "1-Year Program", scholarship: "Partial Scholarship Available", intake: "September 2025" },
  ];

  const benefits = [
    "Partial scholarship opportunities",
    "Learn from native Chinese instructors",
    "HSK certification preparation",
    "Cultural immersion experience",
    "Gateway to Chinese universities",
    "Age: 16-40 years eligible",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section py-32 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="text-9xl absolute top-10 left-10 opacity-20">🇨🇳</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-8xl mb-6">🇨🇳</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Learn <span className="text-accent">Chinese Language</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-4">
              With Partial Scholarship Opportunities
            </p>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              6-Month & 1-Year Programs | September 2025 Intake | Age 16-40
            </p>
            <CTAButton to="/contact" className="text-lg px-12 py-6">
              Apply Now
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Program Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Program Options</h2>
            <p className="text-lg text-muted-foreground">
              Choose the program that fits your goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-8 text-center card-hover h-full">
                  <Calendar className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-3xl font-bold mb-3">{program.title}</h3>
                  <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
                    <Award className="inline h-5 w-5 mr-2" />
                    {program.scholarship}
                  </div>
                  <p className="text-muted-foreground mb-6">Intake: {program.intake}</p>
                  <CTAButton to="/contact">
                    Apply for This Program
                  </CTAButton>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn Chinese */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Why Learn Chinese?</h2>
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
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span className="text-lg font-medium">{benefit}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="section-title text-center mb-12">What You'll Learn</h2>
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Language Skills</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Speaking and pronunciation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Reading Chinese characters</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Writing proficiency</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Listening comprehension</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Additional Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-accent mt-1">•</span>
                      <span>HSK test preparation (Levels 1-6)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Chinese culture and traditions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Business Chinese (advanced levels)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent mt-1">•</span>
                      <span>University admission preparation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="section-title text-center mb-12">Eligibility Criteria</h2>
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <Users className="h-12 w-12 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Age Requirement</h3>
                    <p className="text-muted-foreground">Applicants must be between 16 and 40 years old</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="h-12 w-12 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Education</h3>
                    <p className="text-muted-foreground">Minimum high school/intermediate education completed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="h-12 w-12 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Scholarship</h3>
                    <p className="text-muted-foreground">Partial scholarships available based on merit</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Calendar className="h-12 w-12 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Intake</h3>
                    <p className="text-muted-foreground">September 2025 - Limited seats available</p>
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
              Start Your Chinese Language Journey
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Apply now for September 2025 intake with scholarship opportunities
            </p>
            <CTAButton to="/contact" className="text-lg px-12 py-6">
              Apply Today
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
