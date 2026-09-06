import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, ArrowRight, ShieldCheck } from 'lucide-react';
import founderImage from '../assets/images/founder_placeholder.svg';

interface ModelAdvantagesProps {
  onRequestConsultation: () => void;
}

export const ModelAdvantages: React.FC<ModelAdvantagesProps> = ({ onRequestConsultation }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const advantages = [
    {
      num: '01',
      title: 'Army veteran leadership & military discipline',
      desc: 'Founded and led by Mr. Sudhir Sitaram Jawale (Retd. Army), bringing 30+ years of distinguished Indian Army service and 6+ years managing 60+ guards in high-security PSU environments. Every post follows regimented military order.'
    },
    {
      num: '02',
      title: 'Rigorous PSARA recruitment & 12-module training',
      desc: 'Every recruit passes background checks, age and fitness thresholds, followed by an intensive 12-module syllabus covering gate protocol, fire safety, first aid, dispute de-escalation, and post turnover.'
    },
    {
      num: '03',
      title: 'Prompt replacement guarantee & staff continuity',
      desc: 'Zero post vacancies. In case any security personnel is found unsuitable, we arrange replacement promptly from our standing reserve roster to maintain uninterrupted site safety.'
    },
    {
      num: '04',
      title: '100% statutory labor law compliance',
      desc: 'Transparent compliance with PF, ESI, Minimum Wages, Gratuity, Bonus, and Maharashtra PSARA regulations. Clients receive monthly audit-ready challans, eliminating co-liability risks.'
    },
    {
      num: '05',
      title: 'Statewide operational supervision across Maharashtra',
      desc: 'Dedicated field officers conduct unscheduled day and night inspections across Pune, Mumbai, Nashik, Sambhajinagar, and regional industrial corridors to ensure guard alertness.'
    }
  ];

  return (
    <section id="leadership" className="py-8 sm:py-12 bg-white">
      <div className="w-full">
        
        {/* 2-Column Grid: Heading & 5 Points on Left, Tall Image with Pill on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-20 items-start">
          
          {/* Left: Heading + Numbered Accordion List */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col">
            {/* Heading */}
            <div className="mb-6 sm:mb-10">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#0E3333] tracking-tight leading-[1.08] font-['Outfit']">
                Advantages of <br />
                the SJ Security model
              </h2>
            </div>

            {/* 5-Point Accordion List */}
            <div className="divide-y divide-[#D2DFD8] border-t border-b border-[#D2DFD8]">
              {advantages.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={item.num} className="py-4 sm:py-6 lg:py-7 transition-colors">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left group cursor-pointer"
                    >
                      <div className="flex items-center space-x-3 sm:space-x-8">
                        {/* Pale sage number matching reference */}
                        <span className="text-xl sm:text-3xl lg:text-4xl font-light text-[#7CA795] tracking-tight font-['Outfit'] w-7 sm:w-12 shrink-0">
                          {item.num}
                        </span>

                        {/* Item Title matching font & size */}
                        <span className="text-base sm:text-xl lg:text-2xl font-normal text-[#0E3333] group-hover:text-[#184545] font-['Outfit'] transition-colors leading-snug">
                          {item.title}
                        </span>
                      </div>

                      {/* Arrow Down Indicator on far right with smooth rotation */}
                      <span className="text-[#0E3333] p-1 shrink-0 ml-2">
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <ArrowDown className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-colors duration-300 ${
                            isOpen ? 'text-[#7CA795]' : 'text-[#0E3333] group-hover:text-[#184545]'
                          }`} />
                        </motion.div>
                      </span>
                    </button>

                    {/* Smooth Animated Expandable Content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key={`content-${item.num}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pl-10 sm:pl-20 pr-2 pt-2.5 pb-2 text-sm sm:text-base lg:text-lg text-[#3D5A59] leading-relaxed font-['Outfit']">
                            <p>{item.desc}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Tall Portrait Card with Large Rounded Corners & Floating Pill Button Matching Reference */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex flex-col justify-start mt-4 lg:mt-0">
            <div className="relative rounded-xl sm:rounded-[44px] overflow-hidden shadow-xl bg-[#DFEAE3] w-full h-[460px] sm:h-[620px] lg:h-[780px] xl:h-[840px]">
              <img
                src={founderImage}
                alt="Mr. Sudhir Sitaram Jawale - Retd. Army, Director SJ Security"
                className="w-full h-full object-cover object-top filter contrast-[1.02]"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle gradient vignette at bottom */}
              <div className="absolute inset-0 bg-linear-to-t from-[#0E3333]/95 via-[#0E3333]/35 to-transparent"></div>

              {/* Floating Bottom Pill Container - Stack on mobile, flex row on desktop */}
              <div className="absolute bottom-5 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 sm:gap-4">
                <div className="text-white drop-shadow-xs">
                  <div className="text-[11px] uppercase tracking-wider text-[#A1C6B4] font-medium font-['Outfit']">
                    Founder &amp; Director
                  </div>
                  <div className="text-base sm:text-lg lg:text-xl font-medium text-white font-['Outfit'] leading-tight">
                    Mr. Sudhir Sitaram Jawale
                  </div>
                  <div className="text-xs text-white/80 font-light font-['Outfit'] mt-0.5">
                    Retd. Army • 30+ Yrs Military Service
                  </div>
                </div>

                <button
                  onClick={onRequestConsultation}
                  aria-label="Request consultation"
                  className="inline-flex items-center justify-between w-full sm:w-auto pl-4 sm:pl-5 pr-1.5 py-1.5 bg-[#0E3333] hover:bg-[#164242] border border-white/20 rounded-full transition-all duration-300 shadow-xl group cursor-pointer shrink-0"
                >
                  <span className="text-white text-xs sm:text-sm font-medium font-['Outfit'] mr-3 whitespace-nowrap">
                    Request Consultation
                  </span>
                  <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#A1C6B4] group-hover:bg-[#b8d6c7] text-[#0E3333] flex items-center justify-center transition-colors shadow-xs shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
