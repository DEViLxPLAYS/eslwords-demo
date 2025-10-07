import { Layout } from "@/components/Layout";
import { CTAButton } from "@/components/CTAButton";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function Gallery() {
  const galleryCategories = [
    {
      title: "Student Success Moments",
      description: "Celebrating achievements and visa approvals",
      images: [
        { title: "Visa Approval Celebration", emoji: "🎓" },
        { title: "Students with Offer Letters", emoji: "📧" },
        { title: "Pre-Departure Briefing", emoji: "✈️" },
        { title: "Success Party", emoji: "🎉" },
      ]
    },
    {
      title: "Study Destinations",
      description: "Universities and cities our students study in",
      images: [
        { title: "UK Universities", emoji: "🇬🇧" },
        { title: "Chinese Medical Schools", emoji: "🇨🇳" },
        { title: "Kyrgyzstan Campuses", emoji: "🇰🇬" },
        { title: "International Students", emoji: "🌍" },
      ]
    },
    {
      title: "IELTS & PTE Classes",
      description: "Our test preparation sessions in action",
      images: [
        { title: "IELTS Speaking Practice", emoji: "🎤" },
        { title: "Group Study Sessions", emoji: "📚" },
        { title: "Mock Test Day", emoji: "📝" },
        { title: "Achievement Certificates", emoji: "🏆" },
      ]
    },
    {
      title: "Chinese Language Program",
      description: "Students learning Chinese culture and language",
      images: [
        { title: "Chinese Class", emoji: "🀄" },
        { title: "Cultural Activities", emoji: "🎭" },
        { title: "HSK Test Preparation", emoji: "📖" },
        { title: "Language Practice", emoji: "💬" },
      ]
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
              Our <span className="text-accent">Gallery</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Capturing moments of success, learning, and cultural experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {galleryCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">{category.title}</h2>
                <p className="text-lg text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.images.map((image, imageIndex) => (
                  <motion.div
                    key={image.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: imageIndex * 0.1 }}
                  >
                    <Card className="overflow-hidden card-hover">
                      <div className="aspect-square bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                        <div className="text-8xl">{image.emoji}</div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-center">{image.title}</h3>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Media CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="section-title mb-6">Follow Us on Social Media</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stay updated with our latest success stories, admissions news, and student experiences on Facebook
            </p>
            <a
              href="https://www.facebook.com/MoonConsultants"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-flex items-center"
            >
              <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Visit Our Facebook Page
            </a>
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
              Want to Be Featured in Our Gallery?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start your study abroad journey with us today
            </p>
            <CTAButton to="/contact" className="text-lg px-12 py-6">
              Get Started
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
