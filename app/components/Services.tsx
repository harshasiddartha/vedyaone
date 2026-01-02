import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive websites and web apps tailored to your business goals.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
      link: "/services",
      linkText: "Explore Web Development",
      badge: "Popular",
      badgeVariant: "default" as const,
    },
    {
      title: "Video Editing",
      description: "Professional video editing services to craft compelling stories and impactful messages.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&q=80",
      link: "/services",
      linkText: "Discover Video Editing",
      badge: "New",
      badgeVariant: "secondary" as const,
    },
    {
      title: "Digital Marketing",
      description: "Digital marketing strategies to grow your brand, reach, and conversions.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
      link: "/services",
      linkText: "View Marketing Solutions",
      badge: "Flexible",
      badgeVariant: "outline" as const,
    },
    {
      title: "Graphic Design",
      description: "Creative visuals, branding, and design assets that communicate your story.",
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=600&q=80",
      link: "/services",
      linkText: "Learn More",
      badge: "Growing",
      badgeVariant: "secondary" as const,
    },
    {
      title: "UI/UX Design",
      description: "User-centered interfaces that are intuitive, beautiful, and conversion-focused.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
      link: "/services",
      linkText: "Explore UI/UX Design",
      badge: "Expert",
      badgeVariant: "default" as const,
    },
    {
      title: "Mobile Application",
      description: "High-performance mobile apps for iOS and Android that keep your users engaged.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
      link: "/services",
      linkText: "Explore Mobile Apps",
      badge: "Featured",
      badgeVariant: "outline" as const,
    },
  ];

  return (
    <section id="services" className="py-16 bg-white relative">
      {/* Background Image Fade */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="mb-6">
            <Badge variant="secondary" className="text-sm px-4 py-1.5 bg-yellow-500/20 text-yellow-400 border-yellow-500/30 uppercase tracking-wide">
              Our Services
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 uppercase tracking-wide leading-tight">
            Digital solutions for your growing business.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            From websites and custom software to branding, design, and mobile apps, we help you build a strong digital presence end to end.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              {/* Image Section */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Dark Blue Section */}
              <div className="bg-slate-800 text-white p-5 flex-grow flex flex-col">
                <div className="mb-2">
                  <span className="text-yellow-400 font-bold text-xs uppercase">vedyaone</span>
                </div>
                <h3 className="text-base font-bold mb-2 uppercase leading-tight">{service.title}</h3>
                <p className="text-slate-300 text-xs mb-3 flex-grow leading-relaxed">{service.description}</p>
                <div className="pt-3 border-t border-slate-700">
                  <p className="text-xs text-slate-400 mb-1">For Enquiry:</p>
                  <a href="mailto:contact@vedyaone.com" className="text-yellow-400 hover:text-yellow-300 text-xs font-medium">
                  bd@vedyaone.com 
                  </a>
                </div>
              </div>
              {/* Service Label Below */}
              <div className="bg-white p-3 text-center border-t-2 border-slate-200">
                <span className="text-slate-700 font-semibold text-xs leading-tight">{service.title}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild size="lg" className="bg-slate-800 hover:bg-slate-900 text-white font-bold uppercase group">
            <Link href="/services" className="flex items-center gap-2">
              View All Services Details
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
