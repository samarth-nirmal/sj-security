import React from 'react';
import {
  CheckCircle2,
  ShieldCheck,
  Clock,
  Zap,
  Heart,
  Quote,
  Sparkles,
  Shield,
  Layers,
  Users2,
  TrendingUp,
  Compass,
  Check
} from 'lucide-react';
import { CORE_VALUES } from '../data/companyData';

export const QualityAndValues: React.FC = () => {
  const qualityPillars = [
    { title: "Quality Assurance Systems", desc: "Standardized inspection sheets and daily shift log checks.", icon: Layers },
    { title: "Employee Involvement", desc: "Empowering frontline guards with clear responsibility and pride.", icon: Users2 },
    { title: "Adequate Staff Training", desc: "Refresher modules covering fire safety, vigilance, and etiquette.", icon: Shield },
    { title: "Continuous Improvement", desc: "Regular client feedback reviews and proactive adjustments.", icon: TrendingUp },
    { title: "Strong Operational Discipline", desc: "Regimented military-rooted turnout, attendance, and duty alertness.", icon: Compass },
    { title: "Customer-Focused Service", desc: "Tailoring response directly to each property's distinct environment.", icon: Heart }
  ];

  const commitmentPillars = [
    "Timely statutory compliance (PF, ESI, Minimum Wages)",
    "Effective & ongoing employee training",
    "Employee motivation and development programs",
    "Dedicated customer-focused service & quick response",
    "Continuous process improvement and night audits",
    "Helping clients focus completely on their core operations"
  ];

  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-[#C5222B]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#C5222B]" />;
      case 'Clock': return <Clock className="w-6 h-6 text-[#C5222B]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#C5222B]" />;
      case 'Heart': return <Heart className="w-6 h-6 text-[#C5222B]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#C5222B]" />;
    }
  };

  return (
    <div id="why-us">
      {/* QUALITY POLICY SECTION (Dark Navy) */}
      <section className="py-20 lg:py-24 bg-[#032238] text-white relative border-b-2 border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#C5222B] mb-3">
              <Sparkles className="w-4 h-4 text-[#C5222B]" />
              <span>Operational Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Montserrat']">
              Our Quality Policy
            </h2>
            <div className="w-20 h-1 bg-[#C5222B] mx-auto mt-4 mb-6"></div>
            
            {/* Stated Message */}
            <div className="bg-white/5 border-l-4 border-[#C5222B] p-5 sm:p-6 rounded-r-xl text-left shadow-md">
              <Quote className="w-8 h-8 text-[#C5222B] opacity-60 mb-2" />
              <p className="text-base sm:text-xl font-medium text-slate-100 leading-relaxed italic">
                “We provide satisfactory personnel to our clients by adopting quality systems, fair practices, and taking responsibility for our tasks and our environment in all our services.”
              </p>
            </div>
          </div>

          {/* 6 Quality Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#072a44] border border-white/10 rounded-xl p-6 hover:border-[#C5222B] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#C5222B]/20 text-[#C5222B] group-hover:bg-[#C5222B] group-hover:text-white transition-colors flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5 font-['Montserrat']">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5222B]">
              The Moral &amp; Military Ethos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#032238] tracking-tight mt-1 font-['Montserrat']">
              Our Core Values
            </h2>
            <div className="w-16 h-1 bg-[#C5222B] mx-auto mt-4 mb-6"></div>
            <p className="text-base text-slate-600 leading-relaxed">
              These fundamental principles guide every decision, shift handover, client consultation, and supervisor inspection across our organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center hover:bg-white hover:border-[#032238]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 group-hover:border-[#C5222B]/40 shadow-xs flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                    {getValueIcon(val.iconName)}
                  </div>
                  <h3 className="text-base font-black tracking-tight text-[#032238] mb-1 font-['Montserrat']">
                    {val.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#C5222B] mb-3">
                    {val.tagline}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {val.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[10px] uppercase font-bold text-slate-400">
                  Value 0{idx + 1}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* OUR COMMITMENT SECTION (Bold Full-Width) */}
      <section className="py-16 sm:py-20 bg-linear-to-r from-[#032238] via-[#072a44] to-[#032238] text-white border-y-4 border-[#C5222B] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-block bg-[#C5222B] text-white text-[11px] uppercase font-bold tracking-widest px-3 py-1 rounded-sm">
                Uncompromising Promise
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Montserrat'] tracking-tight">
                “Our commitment is to give quality service &amp; customer satisfaction.”
              </h2>
              <p className="text-base sm:text-lg text-slate-200 font-medium italic border-l-2 border-red-400 pl-3">
                “Honesty, punctuality and keeping our commitments are central to the way we operate.”
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                By taking full command of facility protection and staff continuity, we enable business executives, factory managers, and residential committees to direct 100% of their energy toward growth and productivity.
              </p>
            </div>

            <div className="lg:col-span-6 bg-black/25 border border-white/10 rounded-xl p-6 sm:p-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Key Deliverables Backing Our Commitment:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {commitmentPillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#C5222B] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">
                      {pillar}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
