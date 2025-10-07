import { Layout } from "@/components/Layout";
import { CTAButton } from "@/components/CTAButton";
import { motion } from "framer-motion";
import { GraduationCap, Globe, Award, Users, BookOpen, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Index() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stats = [
    { icon: Users, value: "20+", label: "Years Experience" },
    { icon: GraduationCap, value: "10+", label: "Countries" },
    { icon: Award, value: "2000+", label: "Success Stories" },
    { icon: TrendingUp, value: "99%", label: "Success Rate" },
  ];

  const destinations = [
    { 
      name: "United Kingdom", 
      flag: "🇬🇧",
      description: "World-class education with globally recognized degrees",
      path: "/uk"
    },
    { 
      name: "China", 
      flag: "🇨🇳",
      description: "Affordable MBBS/BDS programs with scholarships",
      path: "/china"
    },
    { 
      name: "Kyrgyzstan", 
      flag: "🇰🇬",
      description: "Quality medical education at budget-friendly costs",
      path: "/kyrgyzstan"
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section min-h-[90vh] flex items-center justify-center text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Your Gateway to <span className="text-accent">Global Education</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Leading overseas education consultancy in Bahawalpur
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <CTAButton to="/contact" className="text-lg px-10 py-5">
              Apply Now
            </CTAButton>
            <CTAButton to="/about" variant="outline" className="text-lg px-10 py-5 border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </CTAButton>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 -mt-20 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center card-hover bg-card/95 backdrop-blur-sm">
                  <stat.icon className="h-10 w-10 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
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
            className="text-center mb-16"
            {...fadeIn}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            <h2 className="section-title">Why Choose Moon Consultant?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for overseas education with personalized guidance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Global Network", desc: "Partnerships with top universities worldwide" },
              { icon: Users, title: "Expert Guidance", desc: "Experienced counselors for every step" },
              { icon: Award, title: "Proven Success", desc: "Thousands of students studying abroad" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-8 text-center card-hover h-full">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Destinations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            <h2 className="section-title">Study Abroad Destinations</h2>
            <p className="text-lg text-muted-foreground">Explore world-class education opportunities</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-8 text-center card-hover h-full">
                  <div className="text-6xl mb-4">{dest.flag}</div>
                  <h3 className="text-2xl font-bold mb-3">{dest.name}</h3>
                  <p className="text-muted-foreground mb-6">{dest.description}</p>
                  <CTAButton to={dest.path}>
                    Explore Programs
                  </CTAButton>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            <h2 className="section-title">Our Services</h2>
            <p className="text-lg text-muted-foreground">Complete support for your education journey</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "IELTS Preparation", path: "/ielts", icon: BookOpen },
              { title: "PTE Coaching", path: "/pte", icon: BookOpen },
              { title: "Chinese Language", path: "/chinese-language", icon: Globe },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="p-8 card-hover h-full">
                  <service.icon className="h-12 w-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <CTAButton to={service.path}>
                    Learn More
                  </CTAButton>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us help you achieve your dream of studying abroad
            </p>
            <CTAButton to="/contact" className="text-lg px-12 py-6">
              Contact Us Today
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
