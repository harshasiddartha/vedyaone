import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ArrowRight, Workflow } from "lucide-react";

export default function Process() {
  const steps = [
    { 
      label: "Discovery & Alignment", 
      description: "We decode your business goals and skill priorities to define what success looks like.",
      step: 1, 
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
      badge: "Start"
    },
    { 
      label: "Talent Intelligence & Mapping", 
      description: "We combine data, AI, and market insight to identify the best-fit talent efficiently.",
      step: 2,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80"
    },
    { 
      label: "Assessment & Validation", 
      description: "Every candidate is evaluated for technical capability, behavior, and cultural alignment.",
      step: 3,
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&q=80"
    },
    { 
      label: "Collaboration & Selection", 
      description: "We manage shortlisting, interviews, and feedback seamlessly for faster decisions.",
      step: 4,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80"
    },
    { 
      label: "Offer Management & Experience", 
      description: "We ensure transparent offers and a positive candidate experience that builds brand trust.",
      step: 5,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80"
    },
    { 
      label: "Onboarding & Transition", 
      description: "Guided onboarding enables smooth integration, early engagement, and retention.",
      step: 6,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80"
    },
    { 
      label: "Deployment & Performance Assurance", 
      description: "We track outcomes and delivery success to ensure performance and accountability.",
      step: 7,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80"
    },
    { 
      label: "Partnership & Evolution", 
      description: "We evolve with you, refining strategies to strengthen your long-term talent ecosystem.",
      step: 8, 
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80",
      badge: "Complete"
    },
  ];

  return (
    <section id="process" className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="mb-6">
            <Badge variant="secondary" className="text-sm px-4 py-1.5 bg-yellow-500/20 text-yellow-400 border-yellow-500/30 uppercase tracking-wide">
              <Workflow className="w-3 h-3 mr-1.5 inline" />
              Our Process
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
            How We Create Workforce Confidence
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            A transparent, insight-driven journey designed to deliver speed, precision, and long-term workforce success.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group hover:-translate-y-1 transition-transform duration-300">
                {/* Image with Badge */}
                <div className="relative mx-auto mb-3 w-16 h-16 overflow-hidden rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={step.image}
                    alt={`${step.label} step`}
                    fill
                    className="object-cover"
                  />
                </div>
                {step.badge && (
                  <div className="absolute -top-1 -right-1 bg-white px-2 py-1 rounded-full text-xs font-bold text-yellow-600 shadow-md">
                    {step.badge}
                  </div>
                )}
                <h3 className="text-base font-bold text-slate-900 mb-3 uppercase tracking-wide leading-tight">
                  {step.step}. {step.label}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
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
