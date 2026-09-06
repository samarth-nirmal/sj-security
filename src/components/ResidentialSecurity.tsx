import React from 'react';
import { HeartHandshake, ShieldAlert, Gem, ScanFace, Check, ArrowRight } from 'lucide-react';
import { RESIDENTIAL_BENEFITS } from '../data/companyData';

interface ResidentialSecurityProps {
  onInquire: () => void;
}

export const ResidentialSecurity: React.FC<ResidentialSecurityProps> = ({ onInquire }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake': return <HeartHandshake className="w-8 h-8 text-[#C5222B]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-8 h-8 text-[#C5222B]" />;
      case 'Gem': return <Gem className="w-8 h-8 text-[#C5222B]" />;
      case 'ScanFace': return <ScanFace className="w-8 h-8 text-[#C5222B]" />;
      default: return <HeartHandshake className="w-8 h-8 text-[#C5222B]" />;
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5222B]">
            Community &amp; Gated Living Protection
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#032238] tracking-tight mt-2 font-['Montserrat']">
            Why Residential Security Is Essential
          </h2>
          <div className="w-16 h-1 bg-[#C5222B] mx-auto mt-4 mb-6"></div>
          <p className="text-base text-slate-600 leading-relaxed">
            Modern housing societies, gated townships, and residential condominiums require continuous, vigilant, yet courteous security to preserve tranquility and protect families.
          </p>
        </div>

        {/* 4 Visual Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {RESIDENTIAL_BENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200/80 rounded-xl p-6 lg:p-7 hover:bg-white hover:border-[#032238]/30 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 group-hover:border-[#C5222B]/30 shadow-xs flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {getIcon(benefit.icon)}
                </div>

                <h3 className="text-lg font-bold text-[#032238] mb-2.5 font-['Montserrat']">
                  {benefit.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-[#032238]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5222B] mr-2"></span>
                <span>Trained Guard Deployment</span>
              </div>
            </div>
          ))}
        </div>

        {/* Residential Societies Quick Banner */}
        <div className="mt-12 bg-[#032238] text-white rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-l-4 border-[#C5222B]">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">
              Managing a Housing Society or Residential Complex in Maharashtra?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Get customized shift rosters, biometric visitor tracking SOPs, and night vigilance patrol setup.
            </p>
          </div>
          <button
            onClick={onInquire}
            className="shrink-0 px-6 py-3 bg-[#C5222B] hover:bg-[#A31820] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center space-x-2"
          >
            <span>Consult for Society</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
