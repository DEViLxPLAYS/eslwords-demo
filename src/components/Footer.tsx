import { Link } from "react-router-dom";
import { Facebook, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight text-blue-900 group">
                Miss<span className="text-blue-600 transition-colors">Waffa</span>
              </span>
            </Link>
            <p className="text-sm text-slate-600 mt-4 max-w-sm">
              Helping hundreds of students become confident English speakers and achieve a band 7+ in IELTS Speaking.
            </p>
            <div className="flex space-x-3 pt-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-600 hover:text-white text-blue-600 transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link to="/ielts-speaking" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">IELTS Speaking</Link></li>
              <li><Link to="/blogs" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Blogs</Link></li>
              <li><Link to="/contact" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Contact Us</h3>
            <ul className="space-y-3 lg:pr-4">
              <li className="flex items-start space-x-3 text-sm text-slate-600">
                <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Canada</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-600 break-all">
                <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span>contact@eslwords.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Miss Waffa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
