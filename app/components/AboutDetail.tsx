import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, Users, Target } from "lucide-react";

export default function AboutDetail() {
  return (
    <section id="about-detail" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16 pt-8">
            <Badge variant="secondary" className="text-sm mb-4">
              <Building2 className="w-3 h-3 mr-1.5 inline" />
              About vedyaone
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
              Your partner in building future-ready workforces
            </p>
          </div>

          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  We are a Talent Enablement and Workforce Solutions partner helping organizations design and deliver high-performing teams for the future of work.
                </p>
                <p>
                  With a deep recruiter network, domain expertise, and a large global talent pool, we enable companies to hire, manage, and retain skilled, job-ready professionals across IT and Non-IT domains.
                </p>
                <p>
                  Beyond recruitment, we deliver end-to-end workforce and IT project solutions that align people, process, and technology to support business growth through agility, quality, and speed.
                </p>
                <p>
                  Our approach combines strategic workforce design with hands-on delivery excellence, helping enterprises move from reactive hiring to proactive capability building.
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl border-2 border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Professional team meeting and collaboration at vedyaone"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  To deliver faster hiring, high-quality talent, and cost-effective workforce solutions that drive business performance and growth.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  To become a trusted global partner for IT and Non-IT workforce transformation, helping organizations build future-ready teams and embrace digital evolution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
