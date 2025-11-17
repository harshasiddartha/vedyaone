import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Code, Users, Building2, GraduationCap, Server, CheckCircle2, ArrowRight } from "lucide-react";

export default function ServicesDetail() {
  const services = [
    {
      title: "IT Recruitment & Digital Talent Solutions",
      description: "We help organizations find exceptional IT and digital talent across both core and emerging technologies. Our recruiters combine technical expertise with domain understanding to ensure every placement delivers measurable business value.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      icon: Code,
      expertise: [
        "Software Development: Java, .NET, Python, PHP, JavaScript Frameworks",
        "Cloud & Infrastructure: AWS, Azure, Google Cloud, DevOps, FinOps, Cloud Security",
        "Data, AI & Analytics: Data Engineering, BI (Power BI, Tableau, Qlik), Data Science, MLOps, AI/ML Engineering",
        "Cybersecurity & Compliance: Security Analysts, Ethical Hackers, Compliance Specialists",
        "Enterprise Applications: SAP, Oracle, Salesforce, Workday, Microsoft Dynamics, CRM & ERP Experts",
        "Digital Experience & Frontend: UI/UX Designers, Web Developers, Mobile Developers (Android, iOS, Flutter, React Native)",
        "Automation & Emerging Tech: RPA, Blockchain, IoT, AR/VR, Edge Computing, Prompt Engineering",
        "IT Leadership & Delivery: Project Managers, Scrum Masters, Solution Architects, Business Analysts, IT Program Leads",
      ],
      value: [
        "Quick access to pre-vetted and certified technology professionals",
        "Domain-specialist recruiters with deep market knowledge",
        "Flexible hiring models for permanent, contract, or hybrid workforce needs",
      ],
    },
    {
      title: "Non-IT Recruitment & Industry Talent Solutions",
      description: "We provide qualified professionals across diverse industries and business functions, enabling organizations to build strong, high-performing teams that drive outcomes and efficiency.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
      icon: Users,
      expertise: [
        "Core Industries: Manufacturing & Engineering, Logistics & Supply Chain, Retail, Hospitality, Education, Healthcare, Pharmaceuticals, BPO/KPO",
        "Business & Corporate Roles: Sales, Marketing, Finance & Accounting, HR, Administration, Procurement, Legal & Compliance",
        "Growth & Digital Functions: Customer Success, Digital Marketing, Performance Marketing, Product Management, CX & Service Operations",
        "New-Age Sectors: Renewable Energy & Clean Tech, FinTech, EdTech, HealthTech, E-Commerce, Smart Infrastructure, Public Sector Projects",
        "Executive & Interim Leadership: CXOs, VPs, and senior functional heads for transformation, turnaround, or advisory roles",
      ],
      value: [
        "Verified and assessed candidates for technical and cultural alignment",
        "Pan-India and international sourcing through a trusted recruiter network",
        "Proven capability in managing volume, niche, and leadership hiring",
      ],
      outcome: "Our recruitment model is designed not only to fill positions but to strengthen organizational capability. Whether scaling operations, modernizing business functions, or launching new initiatives, we connect the right talent with the right mission at the right time.",
    },
    {
      title: "Workforce Solutions & Talent Orchestration",
      description: "We provide end-to-end workforce management and deployment solutions that help organizations scale, optimize, and align talent with evolving business priorities.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      icon: Building2,
      subDescription: "Our models are built to provide flexibility without compromising on quality, compliance, or continuity.",
      engagementModels: [
        "Full-Time Workforce Enablement: Strategic hiring and onboarding of permanent employees aligned with business goals.",
        "Contract Workforce Solutions: Skilled professionals deployed for defined projects or durations, ensuring agility and expertise on demand.",
        "Flexible & Project-Based Engagements: Ideal for seasonal, transformation, or volume-based initiatives that require rapid workforce mobilization.",
        "Recruitment Partnership Model (RPO): We act as your extended talent acquisition arm, managing large-scale or ongoing hiring programs end-to-end.",
      ],
      value: [
        "Seamless workforce scalability with transparent governance",
        "Reduced time-to-deploy through specialized recruiter networks",
        "Data-driven workforce insights for cost and performance optimization",
      ],
    },
    {
      title: "Campus Recruitment",
      description: "We help organizations engage with emerging talent through structured campus programs that identify, assess, and hire top graduates for internships and full-time roles.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      icon: GraduationCap,
      subDescription: "Our model bridges academia and industry, ensuring candidates are job-ready, adaptable, and aligned with your organizational culture from the start.",
    },
    {
      title: "IT Projects and Technology Services",
      description: "In addition to staffing, we deliver end-to-end IT project solutions tailored to business needs. Our teams combine technical expertise with disciplined project governance to ensure speed, quality, and scalability.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      icon: Server,
      expertise: [
        "Application Development and Maintenance",
        "Software Support and Enhancement",
        "IT Consulting and Project Management",
      ],
      whyChoose: [
        "Experienced, certified development teams",
        "Agile delivery with comprehensive documentation and QA",
        "Cost-effective onshore and offshore hybrid models",
      ],
    },
  ];

  return (
    <section id="services-detail" className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16 pt-8">
          <Badge variant="secondary" className="text-sm mb-4 px-4 py-1.5">
            <Briefcase className="w-3 h-3 mr-1.5 inline" />
            What We Offer
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive talent and workforce solutions tailored to your needs
          </p>
        </div>
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-2 hover:border-slate-300 transition-all duration-300 hover:shadow-2xl group"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 md:h-full min-h-[400px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} - vedyaone service offering`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 to-transparent"></div>
                  <div className="absolute top-6 left-6 flex items-center gap-3">
                    {service.icon && (
                      <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border-2 border-white/50">
                        <service.icon className="w-8 h-8 text-slate-900" />
                      </div>
                    )}
                    <Badge variant="default" className="text-xs px-3 py-1 shadow-lg">
                      Service {index + 1}
                    </Badge>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="bg-white">
                  <CardHeader className="pb-4 border-b border-slate-100">
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                        {service.title}
                    </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <CardDescription className="text-base md:text-lg text-slate-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    
                    {service.subDescription && (
                      <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <CardDescription className="text-base text-slate-700">
                        {service.subDescription}
                      </CardDescription>
                      </div>
                    )}

                    {service.expertise && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Code className="w-5 h-5 text-teal-600" />
                          <h4 className="text-lg font-bold text-slate-900">
                            Expertise Includes
                        </h4>
                        </div>
                        <ul className="space-y-2.5">
                          {service.expertise.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-700">
                              <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm md:text-base leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {service.engagementModels && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-5 h-5 text-blue-600" />
                          <h4 className="text-lg font-bold text-slate-900">
                            Engagement Models
                        </h4>
                        </div>
                        <ul className="space-y-2.5">
                          {service.engagementModels.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-700">
                              <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm md:text-base leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {service.value && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          <h4 className="text-lg font-bold text-slate-900">
                            Value We Deliver
                        </h4>
                        </div>
                        <ul className="space-y-2.5">
                          {service.value.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-700">
                              <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                              <span className="text-sm md:text-base leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {service.whyChoose && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Server className="w-5 h-5 text-purple-600" />
                          <h4 className="text-lg font-bold text-slate-900">
                            Why Clients Choose Our IT Projects
                        </h4>
                        </div>
                        <ul className="space-y-2.5">
                          {service.whyChoose.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-700">
                              <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm md:text-base leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {service.outcome && (
                      <div className="p-5 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl border-2 border-teal-200 shadow-sm">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-teal-600 rounded-lg">
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-slate-900 font-bold mb-2 text-lg">Outcome</p>
                            <p className="text-slate-700 leading-relaxed">{service.outcome}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
