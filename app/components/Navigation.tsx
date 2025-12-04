"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Building2, Briefcase, Users, Workflow, ChevronRight, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";

  const navLinks = [
    { 
      href: isHomePage ? "#about" : "/#about", 
      label: "About",
      icon: Building2
    },
    { 
      href: isHomePage ? "#services" : "/#services", 
      label: "Services", 
      badge: "New",
      icon: Briefcase
    },
    { 
      href: isHomePage ? "#industries" : "/#industries", 
      label: "Industries",
      icon: Users
    },
    { 
      href: isHomePage ? "#process" : "/#process", 
      label: "Process",
      icon: Workflow
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHomePage
          ? "bg-white backdrop-blur-md shadow-lg border-b border-slate-700/50"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto ">
        <div className="flex items-center justify-between h-20 ">
          {/* Logo/Brand */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
          >
            <div className="">
              <div className=" "></div>
              <img 
                src="/logo2.png" 
                alt="Vedya Logo"
                className="      w-30 h-30 object-cover pb-10 mt-13"
              />
            </div>
            {/* <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
                vedyaone
              </span>
            </div> */}
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-black hover:text-yellow-400 font-medium transition-all duration-300 group/item uppercase text-sm ${
                  pathname === link.href || (link.href === "/contact" && pathname === "/contact")
                    ? "text-yellow-400"
                    : ""
                }`}
              >
                <span className="flex items-center gap-2">
                  <link.icon className="w-4 h-4 opacity-60 group-hover/item:opacity-100 transition-opacity" />
                  <span>{link.label}</span>
                  {link.badge && (
                    <Badge 
                      variant="default" 
                      className="ml-1 text-[10px] px-1.5 py-0 animate-pulse"
                    >
                      {link.badge}
                    </Badge>
                  )}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover/item:w-full"></span>
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-slate-600">
              <Button 
                asChild 
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase"
              >
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="Menu"
                className="relative"
              >
                <Menu className={`h-6 w-6 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100'}`} />
                <X className={`absolute h-6 w-6 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[400px] p-0 bg-slate-800 border-slate-700">
              <div className="h-full flex flex-col">
                <SheetHeader className="px-6 pt-6 pb-4 border-b border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-500 text-slate-900 rounded-lg p-2 font-bold text-lg shadow-md">
                      V
                    </div>
                    <SheetTitle className="text-xl font-bold text-white uppercase">
                      vedyaone
                    </SheetTitle>
                  </div>
                </SheetHeader>
                <nav className="flex-1 px-6 py-6 space-y-2 overflow-y-auto">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between p-4 rounded-lg text-white hover:text-yellow-400 hover:bg-slate-700 font-medium transition-all duration-200 group uppercase"
                    >
                      <div className="flex items-center gap-3">
                        <link.icon className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                        <span>{link.label}</span>
                        {link.badge && (
                          <Badge variant="default" className="text-[10px]">
                            {link.badge}
                          </Badge>
                        )}
                      </div>
                      <ChevronRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-slate-700">
                    <Button 
                      asChild 
                      size="lg"
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold shadow-md uppercase"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link href="/contact">
                        Contact Us
                      </Link>
                    </Button>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

