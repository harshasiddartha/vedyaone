import Link from "next/link";
import { Building2, Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Instagram, Copyright, Facebook, Pin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-700">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-yellow-500 text-slate-900 rounded-lg p-1.5 font-bold text-lg shadow-md">
                V
              </div>
              <span className="text-xl font-bold uppercase tracking-wide">vedyaone</span>
            </div>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              Your partner in building future-ready workforces through talent enablement and workforce solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/#process" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services - Removed as per instructions */}
          <div></div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 uppercase">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">India HQ: [City, State]</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <a href="mailto:contact@vedyaone.com" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  contact@vedyaone.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  +91 XXX XXX XXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://www.facebook.com/profile.php?id=61583901034374" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-slate-800">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/vedya_consulting_technologies" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-slate-800">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/company/vedya-consulting-technologies" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-slate-800">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://www.pinterest.com/vedyaone01" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-slate-800">
            <Pin className="w-5 h-5" />
          </a>
        </div>

        {/* Bottom Bar */}
        
      </div>
    </footer>
  );
}
