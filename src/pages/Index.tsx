import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Star, CheckCircle, Mic, BookOpen, Award, Zap, Globe, Users } from "lucide-react";
import { useRef, useState } from "react";

/* ─── helpers ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

/* 3-D tilt card hook */
function use3DTilt() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 30 });
  const sy = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(sy, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(sx, [-0.5, 0.5], ["-8deg", "8deg"]);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => { x.set(0); y.set(0); };
  return { rotateX, rotateY, onMove, onLeave };
}

/* ─── floating stat card ─── */
function StatBadge({ value, label, color, delay }: { value: string; label: string; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`absolute backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 shadow-xl ${color}`}
    >
      <p className="text-2xl font-extrabold leading-none">{value}</p>
      <p className="text-xs font-medium opacity-80 mt-0.5">{label}</p>
    </motion.div>
  );
}

/* ─── 3-D feature card ─── */
function FeatureCard({ icon: Icon, title, desc, gradient, delay }: {
  icon: React.ElementType; title: string; desc: string; gradient: string; delay: number;
}) {
  const { rotateX, rotateY, onMove, onLeave } = use3DTilt();
  return (
    <motion.div {...fadeUp(delay)} style={{ perspective: 800 }}>
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow cursor-default group h-full"
      >
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-lg`}
          style={{ transform: "translateZ(20px)" }}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2" style={{ transform: "translateZ(10px)" }}>{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed" style={{ transform: "translateZ(8px)" }}>{desc}</p>
      </motion.div>
    </motion.div>
  );
}

/* ─── testimonial card ─── */
function TestimonialCard({ name, country, band, quote, delay }: {
  name: string; country: string; band: string; quote: string; delay: number;
}) {
  return (
    <motion.div
      {...fadeUp(delay)}
      whileHover={{ y: -6 }}
      className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col gap-4"
    >
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
      </div>
      <p className="text-slate-700 text-sm leading-relaxed italic flex-grow">"{quote}"</p>
      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
        <div>
          <p className="font-semibold text-slate-900 text-sm">{name}</p>
          <p className="text-xs text-slate-400">{country}</p>
        </div>
        <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
          Band {band}
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════ */
export default function Index() {
  return (
    <div className="min-h-screen bg-white font-inter overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* animated bg blobs */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />
        <motion.div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[80px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
        {/* grid texture */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center py-16">

            {/* Left text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-xs font-semibold mb-6 tracking-wider"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                ONLINE IELTS SPEAKING COURSE
              </motion.div>

              {/* Headline — word by word */}
              <div className="mb-6 overflow-hidden">
                {[
                  { text: "Speak English", cls: "text-white" },
                  { text: "Fluently.", cls: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400" },
                  { text: "Score Higher.", cls: "text-white" },
                ].map((line, li) => (
                  <motion.h1
                    key={li}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 + li * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className={`text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] block ${line.cls}`}
                  >
                    {line.text}
                  </motion.h1>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}
                className="text-slate-400 text-lg leading-relaxed max-w-lg mb-10"
              >
                Join Miss Waffa — native English speaker & IELTS expert from Canada — and achieve Band 7, 8, or 9 in just 7 days.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-2xl transition-all hover:shadow-2xl hover:shadow-blue-600/30 hover:-translate-y-0.5 text-base">
                  Start Learning Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/ielts-speaking"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-4 rounded-2xl transition-all text-base">
                  View Course Details
                </Link>
              </motion.div>

              {/* Trust strip */}
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}
                className="mt-10 flex items-center gap-5 text-sm text-slate-500"
              >
                <div className="flex -space-x-2">
                  {[11, 12, 13, 14].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/80?img=${i}`} alt=""
                      className="w-8 h-8 rounded-full border-2 border-slate-800 object-cover" />
                  ))}
                </div>
                <p className="text-slate-400 text-sm"><strong className="text-white text-base">2,000+</strong> students taught worldwide</p>
              </motion.div>
            </div>

            {/* Right — photo + floating cards */}
            <div className="relative hidden lg:flex items-center justify-center h-[620px]">
              {/* main photo card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-[360px] h-[480px] rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/10"
              >
                <img src="https://i.postimg.cc/3RxRGXVK/esl-words-ielts-speaking.webp"
                  alt="Miss Waffa" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3">
                    <p className="text-white font-bold text-sm">Miss Waffa</p>
                    <p className="text-blue-300 text-xs">IELTS Speaking Expert · Canada 🇨🇦</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating stat badges */}
              <StatBadge value="2,000+" label="Students Taught" color="bg-blue-600/90 text-white" delay={0.8}
                {...{ className: "absolute -left-8 top-16" } as any} />
              <div style={{ position: "absolute", left: "-2rem", top: "4rem" }}>
                <StatBadge value="2,000+" label="Students Taught" color="bg-blue-600/90 text-white" delay={0.8} />
              </div>
              <div style={{ position: "absolute", right: "-1rem", top: "6rem" }}>
                <StatBadge value="Band 9" label="Top Score Achieved" color="bg-white/95 text-slate-900" delay={1.0} />
              </div>
              <div style={{ position: "absolute", left: "-3rem", bottom: "7rem" }}>
                <StatBadge value="7 Days" label="To Fluency" color="bg-indigo-600/90 text-white" delay={1.2} />
              </div>
              <div style={{ position: "absolute", right: "-2rem", bottom: "5rem" }}>
                <StatBadge value="8 Years" label="Teaching Experience" color="bg-emerald-500/90 text-white" delay={1.4} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div className="bg-slate-950 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {[
              { value: "2,000+", label: "Students Worldwide" },
              { value: "Band 7–9", label: "Average Score" },
              { value: "8 Years", label: "Expert Teaching" },
              { value: "100%", label: "Online · Global" },
            ].map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="py-8 px-6 text-center">
                <p className="text-3xl font-extrabold text-white mb-1">{s.value}</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT WAFFA ── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — visual */}
            <motion.div {...fadeUp()} className="relative">
              <div className="absolute -inset-4 bg-blue-50 rounded-[3rem] rotate-2 -z-10" />
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[2.5rem] p-8 text-white">
                <div className="text-5xl mb-4">👩‍🏫</div>
                <blockquote className="text-lg font-medium leading-relaxed italic opacity-90 mb-6">
                  "I help students overcome language barriers — just like the ones my parents faced when they came to Canada."
                </blockquote>
                <div className="border-t border-white/20 pt-5 space-y-2">
                  {[
                    "🎓 Masters in TESL — University of Ottawa",
                    "🇨🇦 Native English speaker · 30+ years in Canada",
                    "📚 English Professor at top Canadian college",
                    "⭐ 2,000+ students achieved Band 7, 8, or 9",
                  ].map(f => (
                    <p key={f} className="text-sm text-blue-100">{f}</p>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — text */}
            <div className="space-y-6">
              <motion.div {...fadeUp(0.1)}>
                <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">Meet Your Instructor</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 leading-tight">
                  Asalaamu Alaykum,<br />I'm <span className="text-blue-600">Miss Waffa!</span>
                </h2>
              </motion.div>
              <motion.p {...fadeUp(0.2)} className="text-slate-500 text-lg leading-relaxed">
                I've been teaching IELTS Speaking for 8 years. My courses are designed to quickly build your vocabulary, fluency, and confidence — so you walk into the exam ready to impress.
              </motion.p>
              <motion.div {...fadeUp(0.3)} className="grid grid-cols-2 gap-4">
                {[
                  { icon: Mic, label: "Speaking Fluency" },
                  { icon: BookOpen, label: "Rich Vocabulary" },
                  { icon: Award, label: "Band 7, 8 or 9" },
                  { icon: Globe, label: "100% Online" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{label}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div {...fadeUp(0.4)}>
                <Link to="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5">
                  Book a Free Session <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3D COURSE FEATURES ── */}
      <section className="py-28 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">Why Students Choose Miss Waffa</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3">
              Become Fluent in <span className="text-blue-600">7 Days</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">
              No more hesitation. No more nervousness. Just results.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard icon={Zap} title="Speak Without Hesitation" delay={0}
              desc="Master fluency techniques so English flows naturally — in the exam and in life."
              gradient="from-blue-500 to-blue-700" />
            <FeatureCard icon={Award} title="Score Band 7, 8, or 9" delay={0.1}
              desc="Proven strategies used by top scorers, taught step by step by Miss Waffa."
              gradient="from-indigo-500 to-purple-600" />
            <FeatureCard icon={Mic} title="Perfect Pronunciation" delay={0.2}
              desc="Sound natural and clear. Build vocabulary that examiners love to hear."
              gradient="from-emerald-500 to-teal-600" />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">Student Results</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3">
              Real Students. Real Scores.
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard delay={0} band="8.0" name="Sara M." country="Pakistan → Canada"
              quote="I went from Band 6 to Band 8 in one week. Miss Waffa's techniques completely changed how I think in English." />
            <TestimonialCard delay={0.1} band="7.5" name="Ahmed K." country="Egypt → UK"
              quote="Her vocabulary lists and pronunciation tips were exactly what I needed. I finally stopped second-guessing myself." />
            <TestimonialCard delay={0.2} band="9.0" name="Nadia R." country="UAE → Australia"
              quote="I couldn't believe I scored Band 9. Miss Waffa made me realize I was capable of it all along." />
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section className="py-28 bg-slate-950 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeUp()} className="flex items-end justify-between mb-14 flex-wrap gap-4">
            <div>
              <span className="text-blue-400 font-bold text-xs tracking-widest uppercase">Latest</span>
              <h2 className="text-4xl font-extrabold mt-2">Speaking Tips & Insights</h2>
            </div>
            <Link to="/blogs" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors text-sm">
              View All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { cat: "Tips", title: "IELTS Speaking Tips 2026: Boost Your Band Score", excerpt: "The strategies no one tells you — straight from an IELTS expert." },
              { cat: "Part 3", title: "Part 3 Questions 2026: How to Answer Like a Band 8", excerpt: "Analyse, justify, and discuss — here's the exact formula to use." },
              { cat: "Vocabulary", title: "Barbecue Questions: Vocabulary & Sample Answers", excerpt: "This surprising topic hit the IELTS test recently. Here's how to ace it." },
            ].map((blog, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.55 }}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/10 transition-all cursor-pointer group"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                  {blog.cat}
                </span>
                <h3 className="text-white font-bold text-lg mt-4 mb-3 leading-snug group-hover:text-blue-300 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">{blog.excerpt}</p>
                <div className="flex items-center gap-1.5 text-blue-400 text-sm font-semibold mt-5 group-hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white text-center">
        <motion.div className="absolute inset-0 opacity-20"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "30px 30px" }} />
        <motion.div {...fadeUp()} className="relative z-10 container mx-auto px-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 text-sm font-semibold mb-8">
            <Users className="w-4 h-4" /> Join 2,000+ successful students
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight">
            Your Band 7+ Journey<br />Starts Today.
          </h2>
          <p className="text-blue-100 text-lg mb-10">
            Stop postponing your goals. Miss Waffa has helped thousands — you're next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-10 py-4 rounded-2xl transition-all hover:shadow-2xl hover:-translate-y-1 text-lg">
              Enroll Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/ielts-speaking"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-10 py-4 rounded-2xl hover:bg-white/10 transition-all text-lg">
              View Course Details
            </Link>
          </div>
          {/* mini checklist */}
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {["No long-term commitment", "100% online", "Results in 7 days", "Taught by a native speaker"].map(f => (
              <span key={f} className="flex items-center gap-2 text-sm text-blue-100">
                <CheckCircle className="w-4 h-4 text-blue-300" /> {f}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
