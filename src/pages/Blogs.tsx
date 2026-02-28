import { Navbar as Navigation } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Blogs = () => {
  return (
    <div className="min-h-screen pt-24 font-inter bg-slate-50">
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Recent Blogs
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Stay updated with the latest tips, strategies, and resources to help you ace your IELTS Speaking exam.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog cards will be added here or brought in from the landing page */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
              IELTS Speaking Tips 2026: Strategies to Boost Your Band Score
            </h3>
            <p className="text-slate-600 mb-4 line-clamp-3">
              Preparing for the IELTS Speaking Tips 2026 can feel overwhelming. Some advice promises to instantly boost your band score, while...
            </p>
            <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1 group">
              Read More
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blogs;
