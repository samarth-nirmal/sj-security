import React from 'react';
import { GraduationCap, UserCheck, Activity, Flame, ShieldCheck, Check } from 'lucide-react';
import { RECRUITMENT_STANDARDS } from '../data/companyData';

export const RecruitmentStandards: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-[#C5222B]" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#C5222B]" />;
      case 'Activity': return <Activity className="w-6 h-6 text-[#C5222B]" />;
      case 'Flame': return <Flame className="w-6 h-6 text-[#C5222B]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#C5222B]" />;
    }
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#C5222B] mb-2">
            <ShieldCheck className="w-4 h-4 text-[#C5222B]" />
            <span>Operational Eligibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#032238] tracking-tight font-['Montserrat']">
            Recruitment &amp; Personnel Standards
          </h2>
          <div className="w-16 h-1 bg-[#C5222B] mx-auto mt-4 mb-6"></div>
          <p className="text-base text-slate-600 leading-relaxed">
            Personnel are carefully vetted, selected, and verified in strict accordance with the Private Security Agencies (Regulation) Act and operational requirements.
          </p>
        </div>

        {/* 4 Standards Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {RECRUITMENT_STANDARDS.map((std, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-white hover:border-[#032238]/30 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 shadow-xs flex items-center justify-center mb-4">
                  {getIcon(std.icon)}
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {std.label}
                </span>

                <h3 className="text-lg font-bold text-[#032238] mt-1 mb-2 font-['Montserrat']">
                  {std.value}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {std.detail}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center text-xs font-semibold text-emerald-700">
                <Check className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                <span>Verified Documentation</span>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory Note Box */}
        <div className="bg-slate-100 border-l-4 border-[#032238] p-5 rounded-r-lg max-w-4xl mx-auto text-xs sm:text-sm text-slate-700 space-y-1">
          <p className="font-bold text-[#032238]">
            Statutory &amp; Verification Protocol:
          </p>
          <p className="text-slate-600 leading-relaxed">
            All personnel undergo address verification, character vetting, and background checks. Training curriculum adheres to the syllabus specified under private security agency rules, ensuring reliable conduct on commercial and industrial assignments.
          </p>
        </div>

      </div>
    </section>
  );
};
