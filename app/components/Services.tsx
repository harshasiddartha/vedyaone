import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "IT Recruitment & Digital Talent Solutions",
      description: "Build high-performance digital teams across software, cloud, data, and emerging tech.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
      link: "/services",
      linkText: "Explore IT Recruitment",
      badge: "Popular",
      badgeVariant: "default" as const,
    },
    {
      title: "Non-IT Recruitment & Industry Talent Solutions",
      description: "Find skilled professionals across manufacturing, finance, healthcare, retail, and more.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
      link: "/services",
      linkText: "Explore Non-IT Recruitment",
      badge: "New",
      badgeVariant: "secondary" as const,
    },
    {
      title: "Staffing Services",
      description: "Contract, temporary, and permanent models designed to scale your workforce with confidence.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
      link: "/services",
      linkText: "View Staffing Models",
      badge: "Flexible",
      badgeVariant: "outline" as const,
    },
    {
      title: "Campus Recruitment",
      description: "Bridge the gap between academia and industry by hiring job-ready graduates.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
      link: "/services",
      linkText: "Learn More",
      badge: "Growing",
      badgeVariant: "secondary" as const,
    },
    {
      title: "IT Projects & Technology Services",
      description: "From application development to managed services, we deliver technology that supports your business growth.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
      link: "/services",
      linkText: "Explore IT Projects",
      badge: "Expert",
      badgeVariant: "default" as const,
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
              Our Core Services
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 uppercase tracking-wide leading-tight">
            End-to-end talent and workforce solutions.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            From permanent and project-based hiring to IT solutions and transformation support, we provide the flexibility and precision modern organizations need.
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
