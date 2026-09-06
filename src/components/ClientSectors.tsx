import React from 'react';
import {
  Building2,
  Factory,
  Landmark,
  Radio,
  Stethoscope,
  Hotel,
  GraduationCap,
  Building,
  Shield,
  ArrowRight
} from 'lucide-react';
import { CLIENT_SECTORS } from '../data/companyData';

interface ClientSectorsProps {
  onSectorSelect: (sectorName: string) => void;
}

export const ClientSectors: React.FC<ClientSectorsProps> = ({ onSectorSelect }) => {
  const getSectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-7 h-7 text-[#032238] group-hover:text-white" />;
      case 'Factory': return <Factory className="w-7 h-7 text-[#032238] group-hover:text-white" />;
      case 'Landmark': return <Landmark className="w-7 h-7 text-[#032238] group-hover:text-white" />;
      case 'Radio': return <Radio className="w-7 h-7 text-[#032238] group-hover:text-white" />;
      case 'Stethoscope': return <Stethoscope className="w-7 h-7 text-[#032238] group-hover:text-white" />;
      case 'Hotel': return <Hotel className="w-7 h-7 text-[#032238] group-hover:text-white" />;
      case 'GraduationCap': return <GraduationCap className="w-7 h-7 text-[#032238] group-hover:text-white" />;
      case 'Building': return <Building className="w-7 h-7 text-[#032238] group-hover:text-white" />;
      default: return <Shield className="w-7 h-7 text-[#032238] group-hover:text-white" />;
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#C5222B] mb-2">
            <Shield className="w-4 h-4 text-[#C5222B]" />
            <span>Versatile Sector Deployments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#032238] tracking-tight font-['Montserrat']">
            Trusted Across Critical Environments
          </h2>
          <div className="w-20 h-1 bg-[#C5222B] mx-auto mt-4 mb-6"></div>
          <p className="text-base text-slate-600 leading-relaxed">
            Every sector has unique vulnerabilities. Our site-specific training ensures guards adhere strictly to the operational reality of your industry.
          </p>
        </div>

        {/* 8 Sector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLIENT_SECTORS.map((sector, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs hover:shadow-xl hover:border-[#032238]/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-slate-100 group-hover:bg-[#032238] transition-colors flex items-center justify-center mb-5 shadow-xs">
                  {getSectorIcon(sector.iconName)}
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5222B]">
                  {sector.highlight}
                </span>

                <h3 className="text-lg font-bold text-[#032238] mt-1 mb-2 font-['Montserrat']">
                  {sector.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {sector.description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-400">
                  Custom Post Orders
                </span>
                <button
                  onClick={() => onSectorSelect(sector.name)}
                  className="text-xs font-bold text-[#032238] group-hover:text-[#C5222B] flex items-center space-x-1"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
