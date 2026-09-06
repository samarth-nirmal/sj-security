import React from 'react';
import {
  BookOpen,
  Shield,
  Eye,
  UserCheck,
  Car,
  Navigation,
  Search,
  AlertOctagon,
  Lock,
  HeartPulse,
  Flame,
  Footprints
} from 'lucide-react';
import { TRAINING_AREAS, TRAINING_PROCESS } from '../data/companyData';
import trainingDrillImage from '../assets/images/security_training_drill_1788679327546.jpg';

export const TrainingSection: React.FC = () => {
  const getTrainingIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-[#5B8B77]", strokeWidth: 1.5 };
    switch (iconName) {
      case 'BookOpen': return <BookOpen {...props} />;
      case 'Shield': return <Shield {...props} />;
      case 'Eye': return <Eye {...props} />;
      case 'UserCheck': return <UserCheck {...props} />;
      case 'Car': return <Car {...props} />;
      case 'Navigation': return <Navigation {...props} />;
      case 'Search': return <Search {...props} />;
      case 'AlertOctagon': return <AlertOctagon {...props} />;
      case 'Lock': return <Lock {...props} />;
      case 'Cross': return <HeartPulse {...props} />;
      case 'Flame': return <Flame {...props} />;
      case 'Footprints': return <Footprints {...props} />;
      default: return <Shield {...props} />;
    }
  };

  return (
    <section id="training" className="py-10 sm:py-16 lg:py-24 px-4 sm:px-10 lg:px-16 bg-[#EDF3EE] rounded-xl sm:rounded-[44px] overflow-hidden">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-16 lg:mb-20">
          <span className="text-xs font-medium uppercase tracking-widest text-[#5B8B77] block mb-2 font-['Outfit']">
            Academy &amp; Education
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0E3333] tracking-tight font-['Outfit']">
            Training that creates confidence
          </h2>
          <p className="text-sm sm:text-lg text-[#3D5A59] mt-3 sm:mt-4 max-w-2xl font-['Outfit'] leading-relaxed">
            “Our state-of-the-art training equipment and knowledge ensure that we impart high-quality training to our personnel.”
          </p>
        </div>

        {/* Feature Editorial Highlight Card - Subtle Curve on Mobile */}
        <div className="bg-white rounded-xl sm:rounded-[32px] p-6 sm:p-10 lg:p-16 mb-12 sm:mb-20 lg:mb-24 border border-[#D2DFD8] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <span className="inline-block px-3.5 py-1 bg-[#DFEAE3] text-[#0E3333] text-xs rounded-full font-medium font-['Outfit']">
                Military Veteran Instructors
              </span>
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-normal text-[#0E3333] font-['Outfit'] leading-snug">
                Supported by Indian Army Training Establishments
              </h3>
              <p className="text-[#3D5A59] text-xs sm:text-base leading-relaxed font-['Outfit']">
                “Our training institute is supported by highly qualified trainers, including experienced personnel with backgrounds in the Indian Army’s training establishments.”
              </p>
              <p className="text-[#3D5A59] text-xs sm:text-base leading-relaxed font-['Outfit']">
                “Training is closely monitored by senior operational personnel to maintain uniformity and stringent minimum acceptable standards.”
              </p>
              <div className="bg-[#DFEAE3]/40 border-l-2 border-[#5B8B77] p-3.5 sm:p-4 rounded-r-xl text-xs sm:text-sm text-[#0E3333] font-['Outfit']">
                <span className="font-semibold">Dual Phase Training:</span> Basic preparation before and after deployment, reinforced by ongoing site evaluations.
              </div>
            </div>

            {/* Drill Formation Photography */}
            <div className="lg:col-span-5">
              <div className="rounded-[20px] sm:rounded-[24px] overflow-hidden aspect-16/11 shadow-md bg-[#DFEAE3]">
                <img
                  src={trainingDrillImage}
                  alt="Disciplined security drill inspection"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>

        {/* 5-Step Visual Training Process */}
        <div className="mb-12 sm:mb-20 lg:mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 pb-4 border-b border-[#D2DFD8]">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#5B8B77] font-medium block mb-1">
                Methodology
              </span>
              <h3 className="text-2xl sm:text-3xl font-normal text-[#0E3333] font-['Outfit']">
                The 5-stage training pipeline
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#3D5A59] mt-1 sm:mt-0 font-['Outfit']">
              Structured progressive modules from screening to field post
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-5">
            {TRAINING_PROCESS.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-[18px] sm:rounded-[22px] p-4.5 sm:p-6 border border-[#D2DFD8] flex flex-col justify-between hover:shadow-xs transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl font-light text-[#5B8B77] font-['Outfit']">
                      0{step.step}
                    </span>
                    <span className="text-[10px] text-[#3D5A59] uppercase tracking-wider font-['Outfit'] bg-[#EDF3EE] px-2 py-0.5 rounded-md">
                      Stage {step.step}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-medium text-[#0E3333] mb-1.5 sm:mb-2 font-['Outfit']">
                    {step.title}
                  </h4>

                  <p className="text-xs text-[#3D5A59] leading-relaxed mb-3 sm:mb-4 font-['Outfit']">
                    {step.description}
                  </p>
                </div>

                <div className="pt-2.5 sm:pt-3 border-t border-[#EDF3EE] text-[10px] sm:text-[11px] text-[#5B8B77] font-medium font-['Outfit']">
                  Focus: {step.focus}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 12 Modules Imparted - Light, uncluttered editorial presentation */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 pb-4 border-b border-[#D2DFD8]">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#5B8B77] font-medium block mb-1">
                Syllabus
              </span>
              <h3 className="text-2xl sm:text-3xl font-normal text-[#0E3333] font-['Outfit']">
                Core operational modules
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#3D5A59] mt-1 sm:mt-0 font-['Outfit']">
              Comprehensive security, emergency and facility protocols
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
            {TRAINING_AREAS.map((item, idx) => (
              <div
                key={item.id}
                className="bg-white/80 rounded-[18px] sm:rounded-[20px] p-4 sm:p-6 border border-[#D2DFD8]/80 hover:bg-white hover:border-[#5B8B77] transition-all group flex items-start space-x-3.5 sm:space-x-4"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#DFEAE3] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {getTrainingIcon(item.iconName)}
                </div>
                <div>
                  <span className="text-[10px] text-[#5B8B77] uppercase tracking-wider block mb-0.5 font-medium">
                    Module {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <h4 className="text-xs sm:text-sm font-medium text-[#0E3333] mb-1 font-['Outfit']">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#3D5A59] leading-relaxed font-['Outfit']">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
