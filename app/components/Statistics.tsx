import { Database, Users, Smile, GraduationCap } from "lucide-react";

export default function Statistics() {
  const stats = [
    {
      icon: Database,
      number: "122000",
      label: "CANDIDATE DATABASE",
    },
    {
      icon: Users,
      number: "1145",
      label: "RECRUITMENT COMPLETED",
    },
    {
      icon: Smile,
      number: "67",
      label: "HAPPY CLIENTS",
    },
    {
      icon: GraduationCap,
      number: "1242",
      label: "TRAINED CANDIDATE",
    },
  ];

  return (
    <section className="py-16 bg-slate-800 relative overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px)',
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-white/20">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-white/80 text-xs md:text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

