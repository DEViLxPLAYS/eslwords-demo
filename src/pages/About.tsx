import { Layout } from "@/components/Layout";
import { CTAButton } from "@/components/CTAButton";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section py-32 text-center text-white">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About <span className="text-accent">Moon Consultant</span> International
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Guiding Dreams, Building Futures - Your Trusted Partner in Overseas Education
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-4">
                  Moon Consultant International has been at the forefront of overseas education consultancy in Bahawalpur, Pakistan for over two decades. We have successfully guided thousands of students to achieve their dreams of studying abroad at prestigious universities worldwide.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Our journey began with a simple mission: to make global education accessible to students from Bahawalpur and surrounding regions. Today, we are proud to be one of Pakistan's most trusted education consultancy firms, with partnerships across the UK, China, Kyrgyzstan, and many other countries.
                </p>
                <p className="text-lg text-muted-foreground">
                  At Moon Consultant International, we don't just process applications—we build relationships. Every student is unique, and we provide personalized guidance tailored to individual aspirations, academic backgrounds, and career goals.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full">
                <Target className="h-16 w-16 text-primary mb-4" />
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground">
                  To empower students from Pakistan with the knowledge, resources, and support needed to pursue world-class education abroad. We strive to make the journey to international universities smooth, affordable, and successful.
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full">
                <Eye className="h-16 w-16 text-secondary mb-4" />
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground">
                  To be the leading education consultancy in Pakistan, recognized globally for our commitment to student success and our innovative approach to overseas education counseling.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="section-title text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Students Trust Us
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "20+ Years Experience", desc: "Two decades of proven expertise" },
              { icon: Users, title: "2000+ Success Stories", desc: "Students studying worldwide" },
              { icon: Target, title: "99% Success Rate", desc: "Outstanding visa approval" },
              { icon: Eye, title: "Personalized Guidance", desc: "Individual attention for each student" },
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
                  <p className="text-muted-foreground">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our experienced team guide you to the university of your dreams
            </p>
            <CTAButton to="/contact" className="text-lg px-12 py-6">
              Get Started Today
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
