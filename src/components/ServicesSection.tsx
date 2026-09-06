import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield,
  Home,
  Building2,
  KeyRound,
  Users,
  Car,
  Eye,
  AlertTriangle,
  Flame,
  HeartPulse,
  Lock,
  ArrowRight,
  X,
  Check
} from 'lucide-react';
import { SERVICES_DATA } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getThinIcon = (iconName: string) => {
    const iconProps = { className: "w-8 h-8 sm:w-9 sm:h-9 text-[#5B8B77] stroke-1", strokeWidth: 1.5 };
    switch (iconName) {
      case 'Shield': return <Shield {...iconProps} />;
      case 'Home': return <Home {...iconProps} />;
      case 'Building2': return <Building2 {...iconProps} />;
      case 'KeyRound': return <KeyRound {...iconProps} />;
      case 'Users': return <Users {...iconProps} />;
      case 'Car': return <Car {...iconProps} />;
      case 'Eye': return <Eye {...iconProps} />;
      case 'AlertTriangle': return <AlertTriangle {...iconProps} />;
      case 'Flame': return <Flame {...iconProps} />;
      case 'HeartPulse': return <HeartPulse {...iconProps} />;
      case 'Lock': return <Lock {...iconProps} />;
      default: return <Shield {...iconProps} />;
    }
  };

  return (
    <section id="services" className="py-8 sm:py-12 bg-white">
      <div className="w-full">
        
        {/* Section Heading */}
        <div className="mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0E3333] tracking-tight font-['Outfit']">
            Business areas
          </h2>
          <p className="text-base text-[#3D5A59] mt-2.5 sm:mt-3 max-w-2xl font-['Outfit'] leading-relaxed">
            Comprehensive security guarding and facility management services adapted for Maharashtra's corporate, industrial, and residential environments.
          </p>
        </div>

        {/* Exact Sparc 2-Column Business Areas Grid */}
        <div className="space-y-10 sm:space-y-16">
          {/* Pair services into rows of 2 */}
          {Array.from({ length: Math.ceil(SERVICES_DATA.length / 2) }).map((_, rowIndex) => {
            const leftService = SERVICES_DATA[rowIndex * 2];
            const rightService = SERVICES_DATA[rowIndex * 2 + 1];
            const isLastRow = rowIndex === Math.ceil(SERVICES_DATA.length / 2) - 1;

            return (
              <div
                key={rowIndex}
                className={`pb-10 sm:pb-16 ${!isLastRow ? 'border-b border-[#D2DFD8]' : ''}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20">
                  
                  {/* Left Column Service */}
                  {leftService && (
                    <div className={`group flex flex-col justify-between ${rightService ? 'pb-10 md:pb-0 border-b border-[#D2DFD8] md:border-b-0' : ''}`}>
                      <div>
                        <div className="flex items-start space-x-3.5 sm:space-x-4 mb-3 sm:mb-3.5">
                          <div className="shrink-0 mt-0.5 sm:mt-1">
                            {getThinIcon(leftService.iconName)}
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-[#0E3333] tracking-tight font-['Outfit'] group-hover:text-[#184545] transition-colors leading-snug">
                              {leftService.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-sm sm:text-base text-[#3D5A59] font-normal leading-relaxed pl-0 sm:pl-12 lg:pl-13 font-['Outfit']">
                          {leftService.shortDesc}
                        </p>
                      </div>

                      <div className="pl-0 sm:pl-12 lg:pl-13 mt-4 sm:mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                        <button
                          onClick={() => setActiveModalService(leftService)}
                          className="text-xs sm:text-sm font-normal text-[#0E3333] hover:text-[#5B8B77] transition-colors inline-flex items-center space-x-1.5 cursor-pointer font-['Outfit'] py-1"
                        >
                          <span>Read full scope</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#5B8B77]" />
                        </button>

                        <button
                          onClick={() => onSelectService(leftService.title)}
                          className="text-xs sm:text-sm font-medium text-[#5B8B77] hover:underline cursor-pointer font-['Outfit'] py-1"
                        >
                          Request deployment
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Right Column Service */}
                  {rightService && (
                    <div className="group flex flex-col justify-between">
                      <div>
                        <div className="flex items-start space-x-3.5 sm:space-x-4 mb-3 sm:mb-3.5">
                          <div className="shrink-0 mt-0.5 sm:mt-1">
                            {getThinIcon(rightService.iconName)}
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-[#0E3333] tracking-tight font-['Outfit'] group-hover:text-[#184545] transition-colors leading-snug">
                              {rightService.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-sm sm:text-base text-[#3D5A59] font-normal leading-relaxed pl-0 sm:pl-12 lg:pl-13 font-['Outfit']">
                          {rightService.shortDesc}
                        </p>
                      </div>

                      <div className="pl-0 sm:pl-12 lg:pl-13 mt-4 sm:mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                        <button
                          onClick={() => setActiveModalService(rightService)}
                          className="text-xs sm:text-sm font-normal text-[#0E3333] hover:text-[#5B8B77] transition-colors inline-flex items-center space-x-1.5 cursor-pointer font-['Outfit'] py-1"
                        >
                          <span>Read full scope</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#5B8B77]" />
                        </button>

                        <button
                          onClick={() => onSelectService(rightService.title)}
                          className="text-xs sm:text-sm font-medium text-[#5B8B77] hover:underline cursor-pointer font-['Outfit'] py-1"
                        >
                          Request deployment
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Scope Modal with Smooth Motion */}
      <AnimatePresence>
        {activeModalService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={() => setActiveModalService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[24px] shadow-2xl max-w-lg w-full p-5 sm:p-8 border border-[#D2DFD8] relative max-h-[88vh] overflow-y-auto m-3"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4 border-b border-slate-100 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#DFEAE3] text-[#0E3333] flex items-center justify-center shrink-0">
                    {getThinIcon(activeModalService.iconName)}
                  </div>
                  <div>
                    <span className="text-xs text-[#5B8B77] font-normal uppercase tracking-wider font-['Outfit']">
                      Service Area
                    </span>
                    <h3 className="text-xl sm:text-2xl font-normal text-[#0E3333] font-['Outfit']">
                      {activeModalService.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setActiveModalService(null)}
                  className="text-slate-400 hover:text-slate-600 p-1 rounded-full cursor-pointer transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-[#3D5A59] leading-relaxed mb-6 font-['Outfit']">
                {activeModalService.fullDesc}
              </p>

              <h4 className="text-xs font-medium uppercase tracking-wider text-[#0E3333] mb-3 font-['Outfit']">
                Standard Operational Deliverables:
              </h4>
              <ul className="space-y-2 mb-6 text-xs sm:text-sm text-[#3D5A59]">
                {activeModalService.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 bg-[#EDF3EE] p-2.5 rounded-xl font-['Outfit']">
                    <Check className="w-4 h-4 text-[#5B8B77] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setActiveModalService(null)}
                  className="px-5 py-2.5 text-sm font-normal text-[#0E3333] hover:bg-slate-100 rounded-full cursor-pointer font-['Outfit'] transition-all duration-200 text-center"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = activeModalService.title;
                    setActiveModalService(null);
                    onSelectService(title);
                  }}
                  className="px-6 py-2.5 text-sm font-medium bg-[#0E3333] text-white rounded-full hover:bg-[#184545] shadow-xs flex items-center justify-center space-x-2 cursor-pointer font-['Outfit'] transition-all duration-200"
                >
                  <span>Request deployment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
