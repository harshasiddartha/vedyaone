import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ArrowRight, Award } from "lucide-react";

export default function WhyChooseUs() {
  const valuePoints = [
    {
      title: "Speed & Agility",
      description: "24–72 hour turnaround on vetted profiles.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
      badge: "Fast",
      badgeVariant: "default" as const,
    },
    {
      title: "Domain Expertise",
      description: "Specialist recruiters and delivery teams across IT and Non-IT verticals.",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
      badge: "Expert",
      badgeVariant: "secondary" as const,
    },
    {
      title: "Global Reach",
      description: "PAN India and international hiring capabilities.",
      icon: "🌍",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&q=80",
      badge: "Wide",
      badgeVariant: "outline" as const,
    },
    {
      title: "Quality First",
      description: "Multi-stage evaluation, technical testing, and cultural fit assessments.",
      icon: "✨",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
      badge: "Premium",
      badgeVariant: "default" as const,
    },
    {
      title: "Flexible Engagements",
      description: "Transparent models suited for startups, SMEs, and enterprises.",
      icon: "🔄",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80",
      badge: "Flexible",
      badgeVariant: "secondary" as const,
    },
    {
      title: "End-to-End Support",
      description: "From sourcing to onboarding and post-deployment success tracking.",
      icon: "🤝",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
      badge: "Complete",
      badgeVariant: "outline" as const,
    },
  ];

  return (
    <section className="py-16 bg-slate-800 relative overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="Background"
          fill
          className="object-cover blur-sm"
        />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-wide">
            Why Choose Us.
          </h2>
          <div className="text-left text-white space-y-3 max-w-3xl mx-auto">
            <p className="text-sm md:text-base leading-relaxed">
              We are experts in recruiting and retaining experienced employees who align with your organizational culture and business objectives. Our recruitment process is designed to create stringent recruitment strategies that ensure we find the right talent for your specific needs.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              We assess candidates through comprehensive evaluation processes, ensuring technical competence, cultural fit, and long-term potential. Our commitment to ethical standards and confidentiality means your recruitment needs are handled with the utmost professionalism and discretion.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              With a proven track record of successful placements across diverse industries, we help organizations build high-performing teams that drive business growth and innovation.
            </p>
          </div>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold uppercase group">
              <Link href="/why-choose-us" className="flex items-center gap-2">
                View Complete Details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
