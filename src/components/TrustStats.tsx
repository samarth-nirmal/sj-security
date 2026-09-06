import React from 'react';
import { motion } from 'motion/react';
import { CountUp } from './CountUp';

export const TrustStats: React.FC = () => {
  return (
    <section id="about" className="w-full py-2 sm:py-6 scroll-mt-24">
      {/* Exact Sparc Group Hero Overview Card - Subtle Curve on Mobile, Rounded on Desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#DFEAE3] rounded-xl sm:rounded-[44px] p-5 sm:p-12 lg:p-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center">
          
          {/* Left: Mission & Purpose Statement */}
          <div className="lg:col-span-7">
            <p className="text-[15px] sm:text-2xl lg:text-[28px] text-[#0E3333] font-normal leading-[1.45] sm:leading-[1.38] tracking-tight font-['Outfit']">
              SJ Security &amp; Facilities Services is a military-trained security group that recruits, trains, and coordinates disciplined personnel to together create a comprehensive protective offering across Maharashtra.
            </p>
          </div>

          {/* Right: Clean 2x2 Numeric Grid with Smooth Counting Animation */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-y-6 sm:gap-y-12 gap-x-4 sm:gap-x-10 pt-2 lg:pt-0">
            {/* Metric 1 */}
            <div>
              <div className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#0E3333] tracking-tight font-['Outfit'] tabular-nums leading-none whitespace-nowrap">
                <CountUp end={30} suffix="+" duration={1600} />
              </div>
              <div className="text-[11px] sm:text-base text-[#0E3333] mt-1.5 sm:mt-2 font-normal font-['Outfit'] leading-tight sm:leading-snug">
                Years military leadership
              </div>
            </div>

            {/* Metric 2 */}
            <div>
              <div className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#0E3333] tracking-tight font-['Outfit'] tabular-nums leading-none whitespace-nowrap">
                <CountUp end={60} suffix="+" duration={1700} />
              </div>
              <div className="text-[11px] sm:text-base text-[#0E3333] mt-1.5 sm:mt-2 font-normal font-['Outfit'] leading-tight sm:leading-snug">
                Guards managed in PSUs
              </div>
            </div>

            {/* Metric 3 */}
            <div>
              <div className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#0E3333] tracking-tight font-['Outfit'] tabular-nums leading-none whitespace-nowrap">
                <CountUp end={100} suffix="%" duration={1800} />
              </div>
              <div className="text-[11px] sm:text-base text-[#0E3333] mt-1.5 sm:mt-2 font-normal font-['Outfit'] leading-tight sm:leading-snug">
                Statutory compliance
              </div>
            </div>

            {/* Metric 4 */}
            <div>
              <div className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#0E3333] tracking-tight font-['Outfit'] tabular-nums leading-none whitespace-nowrap">
                <CountUp start={0} end={2023} duration={1900} />
              </div>
              <div className="text-[11px] sm:text-base text-[#0E3333] mt-1.5 sm:mt-2 font-normal font-['Outfit'] leading-tight sm:leading-snug">
                Govt. PSARA Licensed
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
