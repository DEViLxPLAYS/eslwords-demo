import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ConsultationForm } from "@/components/ConsultationForm";

export default function Contact() {

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
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Ready to start your journey? Contact us today for expert guidance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <Card className="p-6 card-hover">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Office Address</h3>
                      <p className="text-muted-foreground">
                        1st Floor, Allied Bank Building<br />
                        One Unit Chowk, Bahawalpur<br />
                        Pakistan
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 card-hover">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-muted-foreground">
                        Mobile: 0300-9682169<br />
                        Landline: 062-2740110
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 card-hover">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Website</h3>
                      <p className="text-muted-foreground">www.themoonconsultant.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 card-hover">
                  <div className="flex items-start space-x-4">
                    <Facebook className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Social Media</h3>
                      <a 
                        href="https://www.facebook.com/MoonConsultants"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        facebook.com/MoonConsultants
                      </a>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Office Hours */}
              <Card className="p-6 bg-primary/5">
                <h3 className="font-semibold text-lg mb-3">Office Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ConsultationForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-center mb-12">Visit Our Office</h2>
            <div className="max-w-5xl mx-auto">
              <Card className="overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.7829089!2d71.6667!3d29.3956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIzJzQ0LjIiTiA3McKwNDAnMDAuMSJF!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Moon Consultant International Office Location"
                ></iframe>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
