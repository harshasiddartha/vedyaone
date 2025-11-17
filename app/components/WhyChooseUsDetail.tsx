import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Zap, Globe, Shield, DollarSign, Handshake, TrendingUp } from "lucide-react";

export default function WhyChooseUsDetail() {
  const valuePoints = [
    {
      title: "Speed and Precision",
      description: "24 to 72 hour turnaround for vetted, high-fit profiles",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
      icon: Zap,
    },
    {
      title: "Domain Expertise",
      description: "Recruiters who understand your business and technology needs",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
      icon: Award,
    },
    {
      title: "Global Talent Network",
      description: "Access to professionals across India, APAC, EMEA, and North America",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&q=80",
      icon: Globe,
    },
    {
      title: "Quality Assurance",
      description: "Rigorous technical, behavioral, and cultural evaluations",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
      icon: Shield,
    },
    {
      title: "Flexible Engagement Models",
      description: "Tailored pricing for startups, SMEs, and enterprises",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80",
      icon: DollarSign,
    },
    {
      title: "End-to-End Partnership",
      description: "From sourcing to onboarding and post-placement support",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
      icon: Handshake,
    },
    {
      title: "Scalable Delivery",
      description: "Pan-India and global reach for complex or multi-region hiring",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="why-choose-us-detail" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16 pt-8">
          <Badge variant="secondary" className="text-sm mb-4">
            <Award className="w-3 h-3 mr-1.5 inline" />
            Why vedyaone
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Why Clients Choose Us
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Trusted by businesses for speed, scale, and precision in talent acquisition
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {valuePoints.map((point, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="relative h-32 md:h-full min-h-[150px]">
                    <Image
                      src={point.image}
                      alt={`${point.title} - vedyaone advantage`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                        <point.icon className="w-5 h-5 text-slate-900" />
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                          <point.icon className="w-5 h-5 text-teal-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">{point.title}</CardTitle>
                          <p className="text-slate-600 leading-relaxed">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
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
