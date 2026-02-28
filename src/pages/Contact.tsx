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


    </Layout>
  );
}
