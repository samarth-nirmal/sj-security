import React from 'react';
import { ShieldCheck, Award, Building, FileCheck, CheckCircle2, Shield } from 'lucide-react';

export const TrustTicker: React.FC = () => {
  const credentials = [
    {
      title: 'MAHARASHTRA PSARA',
      subtitle: 'Govt. Licensed Agency',
      icon: ShieldCheck,
    },
    {
      title: 'UDYAM MSME',
      subtitle: 'Govt. of India Registered',
      icon: Award,
    },
    {
      title: 'EPFO & ESIC',
      subtitle: '100% Statutory Compliant',
      icon: FileCheck,
    },
    {
      title: 'ARMY VETERAN LED',
      subtitle: '30+ Yrs Military Rigor',
      icon: Shield,
    },
    {
      title: 'MIDC CORRIDORS',
      subtitle: 'Industrial Deployment',
      icon: Building,
    },
    {
      title: 'SHOP & EST. ACT',
      subtitle: 'Labour Dept. Certified',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="w-full py-5 sm:py-8 border-b border-[#D2DFD8]/70 bg-white">
      {/* Mobile: Smooth horizontal swipe row / Desktop: clean flex row */}
      <div className="flex items-center justify-between gap-4 sm:gap-8 overflow-x-auto no-scrollbar scroll-smooth px-2 sm:px-4">
        {credentials.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center space-x-2.5 sm:space-x-3 shrink-0 py-1 px-2.5 sm:px-3 rounded-lg group transition-colors select-none"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#DFEAE3] text-[#0E3333] flex items-center justify-center shrink-0 group-hover:bg-[#5B8B77] group-hover:text-white transition-colors">
                <IconComponent className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.6]" />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-semibold tracking-tight text-[#0E3333] font-['Outfit'] whitespace-nowrap">
                  {item.title}
                </div>
                <div className="text-[10px] sm:text-xs text-[#3D5A59] font-normal font-['Outfit'] whitespace-nowrap">
                  {item.subtitle}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
