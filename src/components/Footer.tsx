import { Link } from "react-router-dom";
import { Facebook, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <img 
              src="https://i.postimg.cc/cLtPjwnp/Gemini-Generated-Image-a1hrha1hrha1hrha.png" 
              alt="Moon Consultant" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground mb-4">
              Guiding Dreams, Building Futures
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.facebook.com/MoonConsultants" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/uk" className="text-sm text-muted-foreground hover:text-primary transition-colors">Study in UK</Link></li>
              <li><Link to="/china" className="text-sm text-muted-foreground hover:text-primary transition-colors">Study in China</Link></li>
              <li><Link to="/ielts" className="text-sm text-muted-foreground hover:text-primary transition-colors">IELTS</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/chinese-language" className="text-sm text-muted-foreground hover:text-primary transition-colors">Chinese Language</Link></li>
              <li><Link to="/pte" className="text-sm text-muted-foreground hover:text-primary transition-colors">PTE</Link></li>
              <li><Link to="/success-stories" className="text-sm text-muted-foreground hover:text-primary transition-colors">Success Stories</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>1st Floor, Allied Bank Building, One Unit Chowk, Bahawalpur, Pakistan</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>0300-9682169</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>062-2740110</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>www.themoonconsultant.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Moon Consultant International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
