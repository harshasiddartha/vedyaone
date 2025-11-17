import Image from "next/image";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Building2 } from "lucide-react";

export default function Industries() {
  const industries = [
    { 
      name: "Information Technology", 
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
      badge: "Top", 
      badgeVariant: "default" as const 
    },
    { 
      name: "Banking and Finance", 
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
      badge: "Expert", 
      badgeVariant: "secondary" as const 
    },
    { 
      name: "E-Commerce", 
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
      badge: "Growing", 
      badgeVariant: "outline" as const 
    },
    { 
      name: "Manufacturing", 
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
      badge: "Established", 
      badgeVariant: "secondary" as const 
    },
    { 
      name: "Telecom", 
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80",
      badge: "Expert", 
      badgeVariant: "default" as const 
    },
    { 
      name: "Healthcare", 
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80",
      badge: "Specialized", 
      badgeVariant: "outline" as const 
    },
    { 
      name: "Retail", 
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
      badge: "Growing", 
      badgeVariant: "secondary" as const 
    },
    { 
      name: "Education", 
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
      badge: "Emerging", 
      badgeVariant: "outline" as const 
    },
    { 
      name: "Automotive", 
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80",
      badge: "Established", 
      badgeVariant: "secondary" as const 
    },
    { 
      name: "Construction and Real Estate", 
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
      badge: "Growing", 
      badgeVariant: "outline" as const 
    },
  ];

  return (
    <section id="industries" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Badge variant="secondary" className="text-xs">
              <Building2 className="w-3 h-3 mr-1.5 inline" />
              Industry Leaders
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Industries We Serve
          </h2>
          <p className="text-base md:text-lg text-slate-600">
            Our solutions are designed for sectors leading India's and the world's growth story.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((industry, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-slate-300 group">
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                  <div className="absolute top-2 right-2">
                    <Badge variant={industry.badgeVariant} className="text-xs shadow-lg">
                      {industry.badge}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="text-white font-bold text-base drop-shadow-lg">
                    {industry.name}
                  </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
