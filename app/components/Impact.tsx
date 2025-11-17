import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Target, Users, TrendingUp, Zap } from "lucide-react";

export default function Impact() {
  return (
    <section id="impact" className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Enhanced Background with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
          alt="Diverse professional team collaborating in modern office"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <Badge variant="secondary" className="text-sm px-4 py-2 bg-white/10 text-white border-white/20 backdrop-blur-sm">
              <Target className="w-3 h-3 mr-1.5 inline" />
              Strategic Impact
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2 border-white/30 text-white backdrop-blur-sm">
              <TrendingUp className="w-3 h-3 mr-1.5 inline" />
              Proven Results
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2 border-white/30 text-white backdrop-blur-sm">
              <Zap className="w-3 h-3 mr-1.5 inline" />
              Workforce Enablement
            </Badge>
          </div>

          {/* Main Content */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Because your people strategy is your business strategy.
          </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-200 mb-10 leading-relaxed max-w-4xl mx-auto">
            We help organizations move beyond hiring to workforce enablement — building teams that adapt, learn, and lead in a changing world.
          </p>
          </div>

          {/* Visual Elements - Stats or Features */}
         

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              asChild 
              size="lg" 
              className="text-base px-8 py-6 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 hover:scale-105 group uppercase"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <span>Talk to Our Experts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
          </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
