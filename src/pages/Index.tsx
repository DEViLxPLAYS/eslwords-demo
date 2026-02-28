import { Navbar as Navigation } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, PlayCircle, Star, GraduationCap, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Index() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true, margin: "-100px" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.2 },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <div className="min-h-screen font-inter selection:bg-blue-100 selection:text-blue-900 bg-slate-50">
      <Navigation />

      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/50 -z-10" />
          <motion.div
            className="absolute top-20 -left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 -right-20 w-[30rem] h-[30rem] bg-indigo-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="max-w-2xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200 text-blue-800 text-sm font-semibold mb-6 shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                  Learning English speaking has never been so quick and easy!
                </div>

                <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                  Speak English <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Fluently and Confidently
                  </span> <br />
                  for IELTS Speaking
                </h1>

                <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                  Boost your English vocabulary and perfect your pronunciation. Become fluent answering IELTS questions for speaking.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-14 px-8 text-lg font-semibold shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1" asChild>
                    <Link to="/contact">BECOME A CONFIDENT SPEAKER</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 px-8 rounded-xl text-lg font-semibold border-slate-200 text-slate-700 hover:bg-slate-50 transition-all group" asChild>
                    <Link to="/contact">
                      <PlayCircle className="w-5 h-5 mr-2 text-blue-600 group-hover:scale-110 transition-transform" />
                      Watch Intro
                    </Link>
                  </Button>
                </div>

                <div className="mt-10 flex items-center gap-4 text-sm font-medium text-slate-500">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" />
                      </div>
                    ))}
                  </div>
                  <p>Trusted by <span className="text-slate-900 font-bold">2000+</span> students</p>
                </div>
              </motion.div>

              {/* Hero Image / Graphic */}
              <motion.div
                className="relative lg:h-[600px] flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/20 border-8 border-white">
                  <div className="absolute inset-0 bg-blue-100 animate-pulse"></div>
                  <img
                    src="https://i.postimg.cc/3RxRGXVK/esl-words-ielts-speaking.webp"
                    alt="Miss Waffa Teaching IELTS Speaking"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20">
                      <div className="flex items-center gap-3 mb-1">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </div>
                      <p className="text-sm font-semibold text-slate-800">"Scored Band 8 in just weeks!"</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="py-24 bg-white relative">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              className="grid lg:grid-cols-2 gap-16 items-center"
              {...fadeIn}
            >
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -inset-4 bg-slate-100 rounded-[3rem] -z-10 rotate-3"></div>
                <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100">
                  <QuoteIcon className="w-12 h-12 text-blue-100 mb-6" />
                  <p className="text-xl leading-relaxed text-slate-700 italic mb-8">
                    "I chose the English teaching profession because I remember the language barriers my parents faced when they arrived to Canada 36 years ago. Because of this, I decided to become an English language instructor to help other immigrants with similar challenges."
                  </p>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Miss Waffa</h4>
                    <p className="text-blue-600 font-medium">Founder, ESL Words</p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-6">
                <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Meet Your Instructor</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  Asalaamu Alaykum, <br /> I'm Miss Waffa!
                </h2>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Welcome to ESL Words! I am a native English speaker living in Canada for over 30 years and have been offering English speaking courses to students preparing for the IELTS exam for the past 8 years.
                  </p>
                  <p>
                    I have a Masters in Teaching English as a Second Language from the University of Ottawa. I'm currently an English Professor at one of Canada's top colleges.
                  </p>
                  <p className="font-medium text-slate-900 bg-blue-50 p-4 rounded-xl border border-blue-100">
                    The IELTS speaking band 7 in 7 days course has helped hundreds of students become confident English speakers and achieve a band 7, 8, or 9.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- COURSE BENEFITS / PROBLEM AGITATION --- */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              {...fadeIn}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Become a confident English Speaker in 7 days!
              </h2>
              <p className="text-xl text-slate-300">
                You dream of speaking English smoothly without hesitation, but feel stuck at a band 5 or 6 and want to learn lots of new words without feeling nervous.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8 mb-16"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
            >
              {[
                {
                  icon: GraduationCap,
                  title: "Speak Without Hesitation",
                  desc: "Learn to express your thoughts clearly with no more trouble feeling anxious or scared every time you speak."
                },
                {
                  icon: Award,
                  title: "Score Band 7, 8, or 9",
                  desc: "Get the job of your dreams in an English speaking country by achieving your target IELTS score."
                },
                {
                  icon: CheckCircle2,
                  title: "Perfect Pronunciation",
                  desc: "Quickly improve your vocabulary and pronounce words correctly, not just for the test but for everyday life."
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 }
                  }}
                  className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 border border-blue-400/30">
                    <feature.icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="text-center" {...fadeIn}>
              <Button size="lg" id="take-course" className="bg-blue-600 hover:bg-blue-500 text-white rounded-full h-16 px-10 text-xl font-bold transition-all shadow-xl shadow-blue-600/20 hover:scale-105" asChild>
                <Link to="/contact">TAKE THE COURSE NOW</Link>
              </Button>
              <p className="mt-4 text-slate-400 text-sm">Join 2000+ successful students today</p>
            </motion.div>
          </div>
        </section>

        {/* --- RECENT BLOGS HIGHLIGHTS --- */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              className="flex justify-between items-end mb-12"
              {...fadeIn}
            >
              <div className="max-w-2xl">
                <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Knowledge Base</span>
                <h2 className="text-4xl font-bold text-slate-900">Recent Blogs</h2>
              </div>
              <Link to="/blogs" className="hidden sm:flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group">
                View All Posts <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
            >
              {[
                {
                  title: "IELTS Speaking Tips 2026: Strategies to Boost Your Band Score",
                  excerpt: "Preparing for the IELTS Speaking Tips 2026 can feel overwhelming. Some advice promises to instantly boost your band score, while...",
                  category: "Tips"
                },
                {
                  title: "IELTS Speaking Part 3 Questions 2026: Answers to Score High",
                  excerpt: "Are you preparing for the IELTS Speaking Part 3 Questions 2026 and finding them a bit challenging? Don't worry, you're...",
                  category: "Part 3"
                },
                {
                  title: "IELTS Speaking Barbecue Questions: Vocabulary & Answers",
                  excerpt: "Preparing for IELTS Speaking Part 1? Recently, many students reported that examiners asked them barbecue questions. From favorite foods to...",
                  category: "Vocabulary"
                }
              ].map((blog, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 }
                  }}
                  className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col h-full"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit mb-4">
                    {blog.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold mt-auto pt-4 border-t border-slate-100">
                    Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-10 text-center sm:hidden">
              <Button variant="outline" className="w-full h-12 rounded-xl" asChild>
                <Link to="/blogs">View All Posts</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

// Simple Quote Icon SVG component
function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
    </svg>
  );
}
