import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Workflow, Search, CheckCircle2, Users, Handshake, Rocket, BarChart3, TrendingUp } from "lucide-react";

export default function ProcessDetail() {
  const steps = [
    {
      title: "Discovery and Alignment",
      description: "We begin by understanding your business goals, culture, and skill requirements. This ensures our talent strategy aligns directly with your organizational priorities and transformation roadmap.",
      outcome: "Clarity on what success looks like before the first profile is shared.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
      icon: Search,
    },
    {
      title: "Talent Intelligence and Mapping",
      description: "Using market insights, recruiter expertise, and AI tools, we identify the most relevant and high-fit candidates across networks and platforms.",
      outcome: "Data-driven sourcing that balances quality, availability, and cost efficiency.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      icon: TrendingUp,
    },
    {
      title: "Assessment and Validation",
      description: "Every candidate undergoes technical, behavioral, and cultural evaluation tailored to your organization's standards.",
      outcome: "Only candidates who align with both your skill needs and values move forward.",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80",
      icon: CheckCircle2,
    },
    {
      title: "Client Collaboration and Selection",
      description: "We present a curated shortlist for your review, manage interview coordination, and facilitate transparent feedback loops.",
      outcome: "Seamless collaboration and faster decision-making with no administrative overhead.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
      icon: Users,
    },
    {
      title: "Offer Management and Candidate Experience",
      description: "We manage the full offer and negotiation process, ensuring clarity, fairness, and a strong candidate experience that strengthens your employer brand.",
      outcome: "High offer-to-join ratio and positive candidate advocacy.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80",
      icon: Handshake,
    },
    {
      title: "Onboarding and Transition Support",
      description: "Our team ensures new hires integrate smoothly into your systems, culture, and teams through guided onboarding and early engagement tracking.",
      outcome: "Faster productivity and reduced early attrition.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
      icon: Rocket,
    },
    {
      title: "Workforce Deployment and Performance Assurance",
      description: "For project-based or contract engagements, we monitor deployment success, satisfaction, and delivery outcomes — ensuring alignment with project milestones and performance metrics.",
      outcome: "Continuous improvement and accountability from day one to delivery.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
      icon: BarChart3,
    },
    {
      title: "Partnership and Evolution",
      description: "We believe every engagement is a relationship. We use insights from each project to refine future workforce strategies and continuously strengthen your talent ecosystem.",
      outcome: "Long-term workforce agility and trusted partnership.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="process-detail" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16 pt-8">
          <Badge variant="secondary" className="text-sm mb-4">
            <Workflow className="w-3 h-3 mr-1.5 inline" />
            Our Methodology
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            How We Create Workforce Confidence
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Every engagement follows a transparent and insight-driven approach designed to deliver speed, precision, and long-term workforce success.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="relative h-48 md:h-full min-h-[200px]">
                    <Image
                      src={step.image}
                      alt={`${step.title} - vedyaone process step ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                        <step.icon className="w-5 h-5 text-slate-900" />
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {index + 1}
                        </span>
                        <CardTitle className="text-2xl">{step.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-slate-600 leading-relaxed ml-14">
                        {step.description}
                      </p>
                      <div className="ml-14 p-4 bg-slate-50 rounded border border-teal-100">
                        <p className="text-slate-700">
                          <span className="font-semibold"></span> {step.outcome}
                        </p>
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
