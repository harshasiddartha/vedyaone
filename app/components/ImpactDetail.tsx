import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function ImpactDetail() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="Team collaboration background"
          fill
          className="object-cover"
        />
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            So What: The Impact
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-6 leading-relaxed">
            Our process builds more than teams — it builds capability that fits into your culture. Every hire, every engagement, and every project strengthens your organization's adaptability and resilience.
          </p>
          <p className="text-2xl md:text-3xl font-bold mb-10 text-teal-400">
            Your people strategy is your business strategy.
          </p>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
            We help organizations move beyond hiring to workforce enablement — building teams that adapt, learn, and lead in a changing world.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Link href="#contact">Talk to Our Experts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
