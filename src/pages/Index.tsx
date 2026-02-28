import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Star, CheckCircle, Mic, Award, Globe } from "lucide-react";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { useRef } from "react";

/* ─── helpers ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

function use3DTilt() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 30 });
  const sy = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(sy, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(sx, [-0.5, 0.5], ["-8deg", "8deg"]);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { x.set(0); y.set(0); };
  return { rotateX, rotateY, onMove, onLeave };
}

function Card3D({ icon: Icon, title, desc, gradient, delay }: {
  icon: React.ElementType; title: string; desc: string; gradient: string; delay: number;
}) {
  const { rotateX, rotateY, onMove, onLeave } = use3DTilt();
  return (
    <motion.div {...fadeUp(delay)} style={{ perspective: 800 }}>
      <motion.div
        onMouseMove={onMove} onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow h-full"
      >
        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}
          style={{ transform: "translateZ(20px)" }}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-1.5" style={{ transform: "translateZ(10px)" }}>{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed" style={{ transform: "translateZ(8px)" }}>{desc}</p>
      </motion.div>
    </motion.div>
  );
}

/* cursor-reactive photo card */
function CursorPhoto() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 28 });
  const sy = useSpring(y, { stiffness: 200, damping: 28 });
  const rotateY = useTransform(sx, [-0.5, 0.5], ["-12deg", "12deg"]);
  const rotateX = useTransform(sy, [-0.5, 0.5], ["10deg", "-10deg"]);
  const shadowX = useTransform(sx, [-0.5, 0.5], ["-24px", "24px"]);
  const shadowY = useTransform(sy, [-0.5, 0.5], ["-12px", "20px"]);
  const shadow = useTransform(
    [shadowX, shadowY],
    ([sx, sy]) => `${sx} ${sy} 60px rgba(37,99,235,0.18)`
  );

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, boxShadow: shadow, transformStyle: "preserve-3d", perspective: 900 }}
      className="relative w-[320px] mx-auto cursor-none"
    >
      {/* Floating Band badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transform: "translateZ(36px)" }}
        className="absolute -top-5 -right-8 z-20 bg-white rounded-2xl px-4 py-3 shadow-xl border border-slate-100"
      >
        <p className="text-2xl font-extrabold text-blue-600 leading-none">Band 9</p>
        <p className="text-xs text-slate-400 mt-0.5">Top score achieved</p>
      </motion.div>
      {/* Floating 7 Days badge */}
      <motion.div
        animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ transform: "translateZ(36px)" }}
        className="absolute -bottom-4 -left-8 z-20 bg-blue-600 rounded-2xl px-4 py-3 shadow-xl"
      >
        <p className="text-2xl font-extrabold text-white leading-none">7 Days</p>
        <p className="text-xs text-blue-200 mt-0.5">To fluency</p>
      </motion.div>

      <div style={{ transform: "translateZ(0px)" }}
        className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
        <img src="https://i.postimg.cc/3RxRGXVK/esl-words-ielts-speaking.webp"
          alt="Miss Waffa" className="w-full object-cover aspect-[3/4]" />
      </div>
    </motion.div>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-inter overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <BackgroundPaths>
        <section className="min-h-screen flex items-center bg-white/60 pt-20">

          <div className="container mx-auto px-4 max-w-7xl py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold mb-6 tracking-wider"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  IELTS SPEAKING EXPERT · CANADA
                </motion.div>

                {["Speak English", "Fluently.", "Score Higher."].map((line, i) => (
                  <motion.h1 key={i}
                    initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className={`block text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] ${i === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500" : "text-slate-900"
                      }`}
                  >
                    {line}
                  </motion.h1>
                ))}

                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                  className="text-slate-500 text-lg mt-6 mb-8 max-w-md">
                  Miss Waffa — native English speaker &amp; IELTS expert. Achieve Band 7, 8, or 9 Online.
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}
                  className="flex flex-wrap gap-4">
                  <Link to="/contact"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-2xl transition-all hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5">
                    Start Learning <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/ielts-speaking"
                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-200 text-white font-semibold px-7 py-3.5 rounded-2xl transition-all">
                    View Course
                  </Link>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                  className="mt-10 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[11, 12, 13, 14].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/80?img=${i}`} alt=""
                        className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                    ))}
                  </div>
                  <p className="text-slate-500 text-sm"><strong className="text-slate-900">2,000+</strong> students worldwide</p>
                </motion.div>
              </div>

              {/* Right — cursor-reactive photo */}
              <div className="hidden lg:block">
                <CursorPhoto />
              </div>
            </div>
          </div>
        </section>
      </BackgroundPaths>

      {/* ── STATS ── */}
      <div className="bg-slate-950 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {[["2,000+", "Students"], ["Band 7–9", "Average Score"], ["8 Years", "Experience"], ["100%", "Online"]].map(([v, l], i) => (
              <motion.div key={l} {...fadeUp(i * 0.1)} className="py-7 px-6 text-center">
                <p className="text-3xl font-extrabold text-white mb-0.5">{v}</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider">{l}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Generated teacher image */}
            <motion.div {...fadeUp()} className="relative">
              <div className="absolute -inset-3 bg-blue-50 rounded-[3rem] rotate-2 -z-10" />
              <div className="rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100">
                <img src="https://i.postimg.cc/3RxRGXVK/esl-words-ielts-speaking.webp" alt="Miss Waffa" className="w-full object-cover" />
              </div>
            </motion.div>

            {/* Text */}
            <div className="space-y-6">
              <motion.div {...fadeUp(0.1)}>
                <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">Your Instructor</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 leading-tight">
                  I'm <span className="text-blue-600">Miss Waffa.</span>
                </h2>
              </motion.div>

              <motion.p {...fadeUp(0.15)} className="text-slate-500 text-lg leading-relaxed">
                Native English speaker. 30+ years in Canada. Masters in TESL. English Professor. IELTS coach for 8 years.
              </motion.p>

              <motion.div {...fadeUp(0.2)} className="grid grid-cols-2 gap-3">
                {[["🎓", "Masters in TESL"], ["🇨🇦", "Based in Canada"], ["📚", "English Professor"], ["⭐", "2,000+ students"]].map(([e, l]) => (
                  <div key={l} className="flex items-center gap-2.5 bg-slate-50 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700">
                    <span>{e}</span> {l}
                  </div>
                ))}
              </motion.div>

              <motion.div {...fadeUp(0.25)}>
                <Link to="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5">
                  Book a Free Session <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COURSE CARDS ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-slate-900">
              Fluent in <span className="text-blue-600">7 Days</span>
            </h2>
            <p className="text-slate-400 mt-3">No hesitation. No nervousness. Just results.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            <Card3D icon={Mic} title="Speaking Fluency" delay={0}
              desc="Speak naturally and confidently without hesitation or filler words."
              gradient="from-blue-500 to-blue-700" />
            <Card3D icon={Award} title="Band 7, 8 or 9" delay={0.1}
              desc="Proven strategies used by top IELTS scorers worldwide."
              gradient="from-indigo-500 to-purple-600" />
            <Card3D icon={Globe} title="100% Online" delay={0.2}
              desc="Live classes from anywhere in the world, at your own pace."
              gradient="from-emerald-500 to-teal-600" />
          </div>
        </div>
      </section>

      {/* ── SUCCESS IMAGE + TESTIMONIALS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div className="space-y-5">
              <motion.div {...fadeUp()}>
                <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">Student Results</span>
                <h2 className="text-4xl font-extrabold text-slate-900 mt-2">Real Students.<br />Real Scores.</h2>
              </motion.div>
              {[
                { name: "Sara M.", country: "Pakistan → Canada", band: "8.0", quote: "Went from Band 6 to Band 8 in one week." },
                { name: "Ahmed K.", country: "Egypt → UK", band: "7.5", quote: "Finally stopped second-guessing myself." },
                { name: "Nadia R.", country: "UAE → Australia", band: "9.0", quote: "Miss Waffa made me believe I could do it." },
              ].map((t, i) => (
                <motion.div key={t.name} {...fadeUp(0.1 + i * 0.08)}
                  className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="shrink-0">
                    <div className="flex gap-0.5 mb-1">{[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}</div>
                    <span className="bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full block text-center">
                      Band {t.band}
                    </span>
                  </div>
                  <div>
                    <p className="text-slate-700 text-sm italic mb-1">"{t.quote}"</p>
                    <p className="text-xs font-semibold text-slate-900">{t.name} <span className="text-slate-400 font-normal">· {t.country}</span></p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Success image */}
            <motion.div {...fadeUp(0.2)} className="relative">
              <div className="absolute -inset-3 bg-indigo-50 rounded-[3rem] -rotate-2 -z-10" />
              <div className="rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100">
                <img src="/ielts-success.png" alt="IELTS Band Success" className="w-full object-cover" />
              </div>
              <div className="absolute top-5 -right-5 bg-white rounded-2xl px-4 py-3 shadow-xl border border-slate-100">
                <p className="text-2xl font-extrabold text-green-600 leading-none">✓ Band 9</p>
                <p className="text-xs text-slate-400 mt-0.5">Top score achieved</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <BackgroundPaths>
        <section className="py-28 bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center">
          <motion.div {...fadeUp()} className="container mx-auto px-4 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Your Band 7+ Starts Today.</h2>
            <p className="text-blue-100 mb-8">Join Miss Waffa and achieve your target score.</p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-10 py-4 rounded-2xl hover:bg-blue-50 hover:-translate-y-0.5 transition-all hover:shadow-2xl text-lg">
              Enroll Now <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="mt-8 flex flex-wrap justify-center gap-5">
              {["No commitment", "100% online", "Results in 7 days", "Native speaker"].map(f => (
                <span key={f} className="flex items-center gap-2 text-sm text-blue-100">
                  <CheckCircle className="w-4 h-4 text-blue-300" /> {f}
                </span>
              ))}
            </div>
          </motion.div>
        </section>
      </BackgroundPaths>

      <Footer />
    </div>
  );
}
