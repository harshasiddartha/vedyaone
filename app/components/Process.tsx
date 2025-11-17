import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ArrowRight, Workflow } from "lucide-react";

export default function Process() {
  const steps = [
    { label: "Requirement Analysis", icon: "📋", step: 1, badge: "Start" },
    { label: "Talent Mapping", icon: "🗺️", step: 2 },
    { label: "Screening", icon: "🔍", step: 3 },
    { label: "Shortlisting", icon: "📝", step: 4 },
    { label: "Interviews", icon: "💼", step: 5 },
    { label: "Offer & Negotiation", icon: "🤝", step: 6 },
    { label: "Onboarding", icon: "🚀", step: 7 },
    { label: "Deployment", icon: "✅", step: 8, badge: "Complete" },
  ];

  return (
    <section id="process" className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
            Our Working Process
          </h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                {/* Circular Yellow Icon */}
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{step.step}. {step.label}</h3>
                {index === 0 && (
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Identifying the right talent, attracting them and motivating them to apply are the most important aspects of the recruitment process.
                  </p>
                )}
                {index === 1 && (
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    We screen applicants efficiently and accurately.
                  </p>
                )}
                {index === 2 && (
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    We shortlist applicants efficiently and accurately. This is where the recruitment process gets difficult and challenging.
                  </p>
                )}
                {index === 3 && (
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    The shortlisted applications will now move to the final interview process.
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg" className="bg-slate-800 hover:bg-slate-900 text-white font-bold uppercase group">
              <Link href="/process" className="flex items-center gap-2">
                View Complete Process Details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
