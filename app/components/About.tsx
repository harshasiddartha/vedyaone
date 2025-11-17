import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Team collaboration"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-3 -right-3">
                <Badge variant="default" className="text-xs px-3 py-1.5 shadow-lg">
                  <Users className="w-3 h-3 mr-1.5 inline" />
                  500+ Companies
                </Badge>
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="flex flex-wrap items-center gap-2 mb-4 justify-center md:justify-start">
                <Badge variant="secondary" className="text-xs">
                  Trusted Partner
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Since 2010
                </Badge>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Your partner in building future-ready workforces.
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
                We are a Talent Enablement and Workforce Solutions provider, helping organizations connect people, purpose, and performance. Our expertise spans recruitment, staffing, and IT project delivery — aligning people strategy with business transformation.
              </p>
              <Button asChild size="lg" className="bg-slate-800 hover:bg-slate-900 text-white font-bold uppercase group">
                <Link href="/about" className="flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
