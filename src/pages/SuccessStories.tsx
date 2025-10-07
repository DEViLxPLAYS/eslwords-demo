import { Layout } from "@/components/Layout";
import { CTAButton } from "@/components/CTAButton";
import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function SuccessStories() {
  const stories = [
    {
      name: "Muhammad Hammad Pirzada",
      achievement: "AI Bachelor Scholarship in China",
      destination: "🇨🇳 China",
      program: "Bachelor's in Artificial Intelligence",
      scholarship: "Full Scholarship",
      testimonial: "Moon Consultant made my dream of studying AI in China a reality. Their guidance throughout the process was invaluable."
    },
    {
      name: "Ayesha Khan",
      achievement: "MBBS Admission with Scholarship",
      destination: "🇨🇳 China",
      program: "Bachelor of Medicine",
      scholarship: "Partial Scholarship",
      testimonial: "The team helped me secure a scholarship for MBBS. I'm now studying at a top medical university in China!"
    },
    {
      name: "Ali Hassan",
      achievement: "UK Master's Degree",
      destination: "🇬🇧 United Kingdom",
      program: "Master's in Business Administration",
      scholarship: "Merit-Based Aid",
      testimonial: "From IELTS preparation to visa approval, Moon Consultant guided me every step of the way. Now I'm pursuing my MBA in the UK."
    },
    {
      name: "Fatima Noor",
      achievement: "Chinese Language Scholarship",
      destination: "🇨🇳 China",
      program: "Chinese Language Program",
      scholarship: "Partial Scholarship",
      testimonial: "I received a scholarship to learn Chinese in China. The experience has been life-changing, all thanks to Moon Consultant."
    },
    {
      name: "Ahmed Raza",
      achievement: "MBBS in Kyrgyzstan",
      destination: "🇰🇬 Kyrgyzstan",
      program: "Bachelor of Medicine",
      scholarship: "N/A",
      testimonial: "Affordable medical education with excellent quality. Moon Consultant helped me find the perfect program within my budget."
    },
    {
      name: "Sara Ahmed",
      achievement: "UK Engineering Degree",
      destination: "🇬🇧 United Kingdom",
      program: "Engineering",
      scholarship: "University Scholarship",
      testimonial: "Their IELTS coaching was excellent. I scored 7.5 and got admission to a prestigious UK university with a scholarship."
    },
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
              <span className="text-accent">Success</span> Stories
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Real students, real achievements - hear from those who made their dreams come true
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 -mt-20 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "2000+", label: "Students Placed" },
              { value: "10+", label: "Countries" },
              { value: "99%", label: "Visa Success" },
              { value: "20+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center bg-card/95 backdrop-blur-sm card-hover">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Students' Achievements</h2>
            <p className="text-lg text-muted-foreground">
              These success stories inspire us to help more students achieve their dreams
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 card-hover h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{story.name}</h3>
                      <p className="text-sm text-primary font-semibold">{story.achievement}</p>
                    </div>
                    <Award className="h-8 w-8 text-accent flex-shrink-0" />
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{story.destination.split(' ')[0]}</span>
                      <span className="text-sm text-muted-foreground">{story.destination.split(' ').slice(1).join(' ')}</span>
                    </div>
                    <p className="text-sm font-medium">{story.program}</p>
                    {story.scholarship !== "N/A" && (
                      <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs">
                        {story.scholarship}
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground italic">"{story.testimonial}"</p>
                  </div>
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
              Be Our Next Success Story
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of students who achieved their dreams with Moon Consultant
            </p>
            <CTAButton to="/contact" className="text-lg px-12 py-6">
              Start Your Journey
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
