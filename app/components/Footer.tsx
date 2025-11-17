import Link from "next/link";
import { Building2, Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-700">
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
                  About Us
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
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/#impact" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 uppercase">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  IT Recruitment
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Non-IT Recruitment
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Staffing Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Campus Recruitment
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  IT Projects & Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 uppercase">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">India HQ</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  +91 XXX XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <a href="mailto:contact@vedyaone.com" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  contact@vedyaone.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  www.vedyaone.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
          <div className="text-slate-400 text-sm text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} vedyaone. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            <Link href="/contact" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm uppercase">
              Contact
            </Link>
            <Link href="/about" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm uppercase">
              About
            </Link>
            <Link href="/services" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm uppercase">
              For Employer
            </Link>
            <Link href="/process" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm uppercase">
              Blog
            </Link>
            <Link href="/why-choose-us" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm uppercase">
              Career
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
