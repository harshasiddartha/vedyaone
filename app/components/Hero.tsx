import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden bg-slate-800">
      {/* Dynamic Collaboration Background */}
      <div className="absolute inset-0">
        {/* Primary collaboration scene */}
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
          alt="Dynamic team collaboration"
          fill
          className="object-cover opacity-25"
          priority
        />
        
        {/* Overlay for hybrid transition effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-800/60 to-slate-900/70"></div>
        
        {/* Secondary collaboration scene for dissolve effect */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80"
            alt="Hybrid workspace collaboration"
            fill
            className="object-cover opacity-40 mix-blend-soft-light"
          />
        </div>
        
        {/* Animated dissolve/transition effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/5 to-transparent animate-slide opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-yellow-400/20 via-transparent to-transparent rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>
      
      {/* Spotlight Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-yellow-400/20 via-yellow-300/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <Badge variant="secondary" className="text-sm px-4 py-1.5 bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
              <Sparkles className="w-3 h-3 mr-1.5 inline" />
              Trusted by 500+ Companies
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight uppercase tracking-wide">
            Build teams that move as fast as your ambitions.
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            We help organizations design, hire, and enable high-performing workforces that drive growth and adapt to change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-base px-6 py-5 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold shadow-lg hover:shadow-xl group uppercase">
              <Link href="#services" className="flex items-center gap-2">
                Explore Our Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-6 py-5 border-2 border-white text-white hover:bg-white hover:text-slate-900 hover:border-white uppercase font-bold backdrop-blur-sm bg-white/5">
              <Link href="/contact">Partner With Us</Link>
            </Button>
          </div>
          
          {/* Social Media Icons */}
         
        </div>
        
        {/* Scroll Indicator */}
       
      </div>
    </section>
  );
}
