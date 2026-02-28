import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  CheckCircle, Mic, BookOpen, Clock, Star, ArrowRight,
  MessageCircle, Volume2, Award, Target
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const parts = [
  {
    part: "Part 1",
    title: "Introduction & Interview",
    duration: "4–5 min",
    desc: "The examiner introduces themselves and asks you general questions about familiar topics like home, family, work, studies, and interests.",
    tips: ["Answer naturally and extend your responses", "Use a variety of tenses", "Don't memorize — speak genuinely"],
    color: "from-blue-500 to-blue-600",
    light: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    part: "Part 2",
    title: "Individual Long Turn",
    duration: "3–4 min",
    desc: "You are given a task card with a topic and must speak for 1–2 minutes. You have 1 minute to prepare. The examiner may ask a follow-up question.",
    tips: ["Use your 1-minute prep time wisely", "Cover all bullet points on the card", "Speak for the full 2 minutes"],
    color: "from-indigo-500 to-indigo-600",
    light: "bg-indigo-50 border-indigo-100 text-indigo-700",
  },
  {
    part: "Part 3",
    title: "Two-Way Discussion",
    duration: "4–5 min",
    desc: "A deeper discussion linked to the Part 2 topic. Examines your ability to express and justify opinions, analyze, discuss, and speculate.",
    tips: ["Give detailed, reasoned answers", "Use academic vocabulary", "Agree/disagree and give reasons"],
    color: "from-purple-500 to-purple-600",
    light: "bg-purple-50 border-purple-100 text-purple-700",
  },
];

const criteria = [
  { icon: Volume2, label: "Fluency & Coherence", desc: "Speak smoothly without long pauses, link ideas logically." },
  { icon: BookOpen, label: "Lexical Resource", desc: "Use a wide range of vocabulary accurately and flexibly." },
  { icon: MessageCircle, label: "Grammatical Range", desc: "Use varied grammar structures correctly and naturally." },
  { icon: Mic, label: "Pronunciation", desc: "Be understood clearly; stress, rhythm, and intonation matter." },
];

const results = [
  { band: "9", label: "Expert User" },
  { band: "8", label: "Very Good User" },
  { band: "7", label: "Good User" },
  { band: "6", label: "Competent User" },
  { band: "5", label: "Modest User" },
];

export default function IELTSSpeaking() {
  return (
    <div className="min-h-screen bg-slate-50 font-inter">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "30px 30px" }}
        />
        <motion.div {...fadeUp} className="relative z-10 container mx-auto px-4 max-w-4xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-sm font-semibold mb-5 tracking-wide">
            🎤 IELTS Speaking Course
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight">
            Master IELTS Speaking<br />
            <span className="text-blue-200">with Miss Waffa</span>
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Learn everything you need to score Band 7, 8, or 9 in IELTS Speaking — from fluency and vocabulary to pronunciation, with expert guidance from a native English speaker.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-7 py-3.5 rounded-full hover:bg-blue-50 transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Enroll Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-blue-100 border border-white/30 font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-all"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats Strip */}
      <div className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {[
              { value: "2,000+", label: "Students Taught" },
              { value: "8 Years", label: "Teaching Experience" },
              { value: "Band 7–9", label: "Average Score Achieved" },
              { value: "100%", label: "Online — Worldwide" },
            ].map((stat) => (
              <div key={stat.label} className="py-6 px-6 text-center">
                <p className="text-3xl font-extrabold text-blue-600 mb-1">{stat.value}</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The 3 Parts */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">Know the Exam</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">The 3 Parts of IELTS Speaking</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">Miss Waffa breaks down every section so you know exactly what to expect and how to excel.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {parts.map((part, i) => (
              <motion.div
                key={part.part}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className={`bg-gradient-to-r ${part.color} p-5 text-white`}>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-80">{part.part}</span>
                  <h3 className="text-xl font-bold mt-1">{part.title}</h3>
                  <div className="flex items-center gap-1.5 mt-2 text-white/80 text-sm">
                    <Clock className="w-3.5 h-3.5" /> {part.duration}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{part.desc}</p>
                  <ul className="space-y-2">
                    {part.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marking Criteria */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-blue-400 font-bold text-sm uppercase tracking-wider">How You're Scored</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">4 Marking Criteria</h2>
            <p className="text-slate-400 mt-3">Each criterion is worth 25% of your speaking band score.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {criteria.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center mb-4">
                  <c.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-bold text-white mb-2">{c.label}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Band Score Guide */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">Score Guide</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">What Does Your Band Score Mean?</h2>
          </motion.div>
          <div className="space-y-3">
            {results.map((r, i) => (
              <motion.div
                key={r.band}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-5 bg-slate-50 border border-slate-200 rounded-xl px-6 py-4"
              >
                <span className="text-3xl font-extrabold text-blue-600 w-10 shrink-0">{r.band}</span>
                <div className="flex-1 h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${(parseInt(r.band) / 9) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-semibold text-slate-700 w-32 text-right">{r.label}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm mt-6">
            Most universities and immigration programs require Band <strong className="text-slate-800">6.5 – 7.5</strong>. Miss Waffa's course is focused on getting you there.
          </p>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">The Course</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-5">
                What You'll Learn in<br />"Band 7 in 7 Days"
              </h2>
              <ul className="space-y-3">
                {[
                  "How to answer any Part 1, 2, or 3 question confidently",
                  "Advanced vocabulary for every IELTS speaking topic",
                  "How to speak fluently without hesitation or filler words",
                  "Perfect pronunciation and intonation techniques",
                  "How to develop and extend your answers for a higher score",
                  "Live practice with sample IELTS-style questions",
                  "Proven strategies used by Band 8 and 9 scorers",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700 text-sm">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white">
              <Award className="w-10 h-10 text-blue-200 mb-5" />
              <h3 className="text-2xl font-bold mb-3">Miss Waffa's Promise</h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                "I have helped hundreds of students go from Band 5 to Band 7, 8, or even 9. With the right strategies, vocabulary, and consistent practice, <strong className="text-white">you can do it too.</strong>"
              </p>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (<Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />))}
                <span className="text-blue-200 text-sm ml-2">Rated 5★ by 2,000+ students</span>
              </div>
              <hr className="border-white/20 my-5" />
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-bold text-blue-600 bg-white px-6 py-3 rounded-full hover:bg-blue-50 transition w-full justify-center"
              >
                Book a Free Intro Session <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <motion.div {...fadeUp} className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Ready to Achieve Band 7 or Higher?</h2>
          <p className="text-blue-100 text-lg mb-8">Join Miss Waffa's next cohort and transform your IELTS Speaking score.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-10 py-4 rounded-full hover:bg-blue-50 transition-all hover:shadow-xl hover:-translate-y-0.5 text-lg"
          >
            Enroll Now <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
