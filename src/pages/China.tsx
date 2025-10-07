import { Layout } from "@/components/Layout";
import { CTAButton } from "@/components/CTAButton";
import { motion } from "framer-motion";
import { GraduationCap, DollarSign, Award, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function China() {
  const programs = [
    {
      title: "MBBS Program",
      duration: "5-6 years",
      description: "WHO & PMC recognized medical degrees",
      icon: GraduationCap,
    },
    {
      title: "BDS Program",
      duration: "5 years",
      description: "Dental studies with practical training",
      icon: GraduationCap,
    },
    {
      title: "Scholarship Programs",
      duration: "Various",
      description: "Partial to full scholarship opportunities",
      icon: Award,
    },
  ];

  const benefits = [
    { icon: DollarSign, title: "Affordable Tuition", desc: "Cost-effective medical education" },
    { icon: Award, title: "Scholarship Opportunities", desc: "Various scholarship programs available" },
    { icon: Globe, title: "International Recognition", desc: "Degrees recognized globally" },
    { icon: GraduationCap, title: "Quality Education", desc: "Modern facilities and expert faculty" },
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
              Study <span className="text-accent">MBBS/BDS</span> in China
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Affordable medical education with internationally recognized degrees and scholarship opportunities
            </p>
            <CTAButton to="/contact" className="text-lg px-12 py-6">
              Apply for 2025-2026 Intake
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Medical Programs in China</h2>
            <p className="text-lg text-muted-foreground">
              World-class medical education at affordable costs
            </p>
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
                  <p className="text-muted-foreground mb-3">{program.duration}</p>
                  <p className="text-sm">{program.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Why Choose China for Medical Studies?</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center card-hover h-full">
                  <benefit.icon className="h-12 w-12 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
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
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-xl mb-3 text-primary">For MBBS/BDS Programs:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Intermediate/A-Level with Biology, Chemistry, and Physics (60% minimum)</li>
                    <li>• Age: 17-25 years</li>
                    <li>• Valid passport</li>
                    <li>• No IELTS/TOEFL required (English medium programs available)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3 text-primary">Scholarship Eligibility:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Academic merit-based scholarships available</li>
                    <li>• Partial to full tuition coverage</li>
                    <li>• Limited seats - apply early</li>
                  </ul>
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
              Admissions Open for 2025-2026
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Limited scholarship seats available. Apply now to secure your spot!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton to="/contact" className="text-lg px-12 py-6">
                Apply Now
              </CTAButton>
              <CTAButton to="/chinese-language" variant="outline" className="text-lg px-12 py-6 border-white text-white hover:bg-white hover:text-primary">
                Chinese Language Course
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
