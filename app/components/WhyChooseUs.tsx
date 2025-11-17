import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ArrowRight, Zap, Target, Globe, Award, RefreshCw, Users } from "lucide-react";

export default function WhyChooseUs() {
  const valuePoints = [
    {
      title: "Speed & Agility",
      description: "24–72 hour turnaround on vetted profiles.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
      badge: "Fast",
      badgeVariant: "default" as const,
    },
    {
      title: "Domain Expertise",
      description: "Specialist recruiters and delivery teams across IT and Non-IT verticals.",
      icon: Target,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
      badge: "Expert",
      badgeVariant: "secondary" as const,
    },
    {
      title: "Global Reach",
      description: "PAN India and international hiring capabilities.",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&q=80",
      badge: "Wide",
      badgeVariant: "outline" as const,
    },
    {
      title: "Quality First",
      description: "Multi-stage evaluation, technical testing, and cultural fit assessments.",
      icon: Award,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
      badge: "Premium",
      badgeVariant: "default" as const,
    },
    {
      title: "Flexible Engagements",
      description: "Transparent models suited for startups, SMEs, and enterprises.",
      icon: RefreshCw,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80",
      badge: "Flexible",
      badgeVariant: "secondary" as const,
    },
    {
      title: "End-to-End Support",
      description: "From sourcing to onboarding and post-deployment success tracking.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
      badge: "Complete",
      badgeVariant: "outline" as const,
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 md:py-20 bg-slate-800 relative overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="Background"
          fill
          className="object-cover blur-sm"
        />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-16">
          {/* Badge */}
          <div className="mb-6">
            <Badge variant="secondary" className="text-sm px-4 py-2 bg-yellow-500/20 text-yellow-400 border-yellow-500/30 uppercase tracking-wide">
              <Award className="w-3 h-3 mr-1.5 inline" />
              Why Organizations Choose Us
            </Badge>
          </div>
          
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 uppercase tracking-wide leading-tight">
            Trusted by businesses for speed, scale, and precision.
          </h2>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
            Our clients choose us for our ability to combine strategic insight with delivery excellence.
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold uppercase group">
              <Link href="/why-choose-us" className="flex items-center gap-2">
                View Complete Details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Grid of Value Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {valuePoints.map((point, index) => (
            <Card 
              key={index} 
              className="group bg-white/10 backdrop-blur-sm border-white/20 text-white overflow-hidden hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image Section */}
              <CardHeader className="relative h-48 overflow-hidden p-0">
                <Image
                  src={point.image}
                  alt={point.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={point.badgeVariant} 
                    className={`text-xs ${point.badgeVariant === 'default' ? 'bg-yellow-500 text-slate-900' : ''}`}
                  >
                    {point.badge}
                  </Badge>
                </div>
              </CardHeader>
              
              {/* Content */}
              <CardContent className="pt-6 pb-0">
                <div className="flex items-center gap-3 mb-4">
                  <point.icon className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <CardTitle className="text-lg font-bold uppercase tracking-wide">
                    {point.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-slate-300 leading-relaxed">
                  {point.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
