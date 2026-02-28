import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Globe, Clock, MessageCircle, BookOpen, Star, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", course: "", message: "" });

  const handleChange = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.course) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1000));
    toast({ title: "Message sent!", description: "Miss Waffa will get back to you soon." });
    setForm({ name: "", email: "", course: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-inter">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
        <motion.div {...fadeUp} className="relative z-10 container mx-auto px-4 max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-sm font-semibold mb-5 tracking-wide">
            📩 Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight">
            Start Your IELTS Journey<br />
            <span className="text-blue-200">with Miss Waffa</span>
          </h1>
          <p className="text-lg text-blue-100 max-w-xl mx-auto">
            Ready to speak English fluently and achieve your target band score? Reach out and let's get started!
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left — Info Cards */}
            <div className="space-y-6">
              <motion.div {...fadeUp}>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">How Miss Waffa Can Help You</h2>
                <p className="text-slate-500">Join thousands of students who achieved Band 7, 8, or 9 in IELTS Speaking.</p>
              </motion.div>

              {/* Services */}
              <motion.div {...fadeUp} className="grid gap-4">
                {[
                  {
                    icon: BookOpen,
                    color: "bg-blue-50 text-blue-600 border-blue-100",
                    title: "IELTS Speaking Band 7 in 7 Days",
                    desc: "An intensive, structured course designed to rapidly improve your speaking fluency, vocabulary, and pronunciation.",
                  },
                  {
                    icon: MessageCircle,
                    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
                    title: "1-on-1 Speaking Practice Sessions",
                    desc: "Personalized live sessions with Miss Waffa to practice real IELTS speaking tasks with expert feedback.",
                  },
                  {
                    icon: Star,
                    color: "bg-purple-50 text-purple-600 border-purple-100",
                    title: "Vocabulary & Pronunciation Coaching",
                    desc: "Build a rich academic vocabulary and speak with clear, confident pronunciation for everyday English and the IELTS exam.",
                  },
                  {
                    icon: Globe,
                    color: "bg-green-50 text-green-600 border-green-100",
                    title: "100% Online — Available Worldwide",
                    desc: "All courses are delivered online. Miss Waffa teaches students from around the world from her base in Canada.",
                  },
                ].map((item, i) => (
                  <div key={i} className={`flex gap-4 p-5 bg-white rounded-2xl border shadow-sm hover:shadow-md transition-shadow`}>
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${item.color}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Quick Facts */}
              <motion.div {...fadeUp} className="bg-blue-600 text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4">Why Students Love Miss Waffa</h3>
                <ul className="space-y-2.5">
                  {[
                    "30+ years as a native English speaker in Canada",
                    "Masters in TESL from the University of Ottawa",
                    "8+ years teaching IELTS Speaking courses online",
                    "Current English Professor at a top Canadian college",
                    "2,000+ students achieved Band 7, 8, or 9",
                  ].map((fact, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-blue-100">
                      <CheckCircle className="w-4 h-4 text-blue-300 mt-0.5 shrink-0" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right — Contact Form */}
            <motion.div {...fadeUp} className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10">
              <div className="mb-7">
                <h2 className="text-2xl font-bold text-slate-900 mb-1.5">Send a Message</h2>
                <p className="text-slate-500 text-sm">Fill in the form and Miss Waffa will reply within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Your full name"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  />
                </div>

                {/* Course Interest */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">I&apos;m Interested In <span className="text-red-500">*</span></label>
                  <select
                    value={form.course}
                    onChange={(e) => handleChange("course", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  >
                    <option value="">Select a course or service</option>
                    <option value="band7-course">IELTS Speaking Band 7 in 7 Days Course</option>
                    <option value="1on1-sessions">1-on-1 Speaking Practice Sessions</option>
                    <option value="vocab-pronunciation">Vocabulary & Pronunciation Coaching</option>
                    <option value="general-english">General English Speaking Improvement</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Your Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell Miss Waffa about your current English level, your IELTS target score, or any questions you have..."
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold py-3 px-6 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0"
                >
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  You'll receive a reply within 24 hours. All lessons are online.
                </p>
              </form>

              {/* Contact Info Strip */}
              <div className="mt-7 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span>contact@eslwords.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>Online — Available Worldwide</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
