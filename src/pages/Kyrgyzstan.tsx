import { Layout } from "@/components/Layout";
import { CTAButton } from "@/components/CTAButton";
import { motion } from "framer-motion";
import { GraduationCap, DollarSign, CheckCircle2, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Kyrgyzstan() {
  const benefits = [
    "Affordable tuition fees",
    "Low cost of living",
    "English medium instruction",
    "WHO & PMC recognized degrees",
    "Safe and welcoming environment",
    "Easy visa process",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section py-32 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="text-9xl absolute bottom-10 right-10 opacity-20">🇰🇬</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-8xl mb-6">🇰🇬</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Study in <span className="text-accent">Kyrgyzstan</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Quality medical education at the most affordable costs
            </p>
            <CTAButton to="/contact" className="text-lg px-12 py-6">
              Apply Now
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Why Kyrgyzstan */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Why Study MBBS in Kyrgyzstan?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The perfect destination for budget-conscious students seeking quality medical education
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

      {/* Key Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: DollarSign, title: "Low Tuition Fees", value: "~$3000-4000/year" },
              { icon: GraduationCap, title: "Program Duration", value: "5-6 years" },
              { icon: Users, title: "International Students", value: "Welcoming community" },
              { icon: CheckCircle2, title: "Recognition", value: "WHO, PMC & MCI listed" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center card-hover h-full">
                  <item.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.value}</p>
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
                    <h3 className="font-semibold text-lg mb-1">Academic Qualification</h3>
                    <p className="text-muted-foreground">Intermediate/A-Level with Biology, Chemistry, Physics (minimum 50%)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Age Requirement</h3>
                    <p className="text-muted-foreground">17 to 25 years on or before December 31st of admission year</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">No Entrance Exam</h3>
                    <p className="text-muted-foreground">Direct admission based on academic credentials</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Language</h3>
                    <p className="text-muted-foreground">English medium instruction - no language test required</p>
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
              Start Your Medical Career in Kyrgyzstan
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Affordable, quality education awaits you
            </p>
            <CTAButton to="/contact" className="text-lg px-12 py-6">
              Apply Now
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
