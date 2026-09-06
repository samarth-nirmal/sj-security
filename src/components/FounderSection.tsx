import React from 'react';
import { Award, ShieldCheck, CheckCircle, Quote, Medal, Users, Shield } from 'lucide-react';
import founderImage from '../assets/images/founder_placeholder.svg';
import { COMPANY_INFO } from '../data/companyData';

export const FounderSection: React.FC = () => {
  return (
    <section id="leadership" className="py-20 lg:py-28 bg-[#032238] text-white relative overflow-hidden border-y-4 border-[#C5222B]">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-security-grid-dark opacity-30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#C5222B] mb-3">
            <Medal className="w-4 h-4 text-[#C5222B]" />
            <span>Military-Trained Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Montserrat']">
            Experience That Builds Confidence.
          </h2>
          <div className="w-20 h-1 bg-[#C5222B] mx-auto mt-4 mb-6"></div>
          <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Our operational ethos, high training benchmarks, and uncompromising standards of vigilance stem directly from distinguished military background and extensive public sector security leadership.
          </p>
        </div>

        {/* Prestigious Leadership Card */}
        <div className="max-w-5xl mx-auto bg-linear-to-br from-[#072a44] to-[#032238] border border-white/15 rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left: Founder Portrait with Prestige Military Frame */}
            <div className="lg:col-span-5 relative p-6 sm:p-8 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-1.5 bg-linear-to-b from-[#C5222B] to-slate-800 rounded-2xl opacity-60"></div>
                <div className="relative rounded-xl overflow-hidden border-2 border-white/30 shadow-2xl aspect-3/4">
                  <img
                    src={founderImage}
                    alt="Mr. Sudhir Sitaram Jawale - Retd. Army, Founder & Director of SJ Security"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#032238] via-transparent to-transparent opacity-60"></div>
                  
                  {/* Retd. Army Tag */}
                  <div className="absolute top-4 left-4 bg-[#C5222B] text-white px-3 py-1 rounded-md text-xs font-black tracking-widest uppercase shadow-md flex items-center space-x-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Indian Army Veteran</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Leadership Profile & Detailed Narrative */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:pl-4 space-y-6">
              
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#C5222B]">
                  Founder and Director
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1 font-['Montserrat']">
                  Mr. Sudhir Sitaram Jawale
                </h3>
                <p className="text-sm font-bold text-slate-300 tracking-wide mt-0.5">
                  Retd. Army
                </p>
              </div>

              {/* Founder Stated Background Quote */}
              <div className="relative bg-white/5 border-l-4 border-[#C5222B] p-4 rounded-r-lg">
                <Quote className="w-6 h-6 text-[#C5222B] opacity-50 mb-1" />
                <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed italic">
                  “30+ years of experience in the Indian Army, followed by 6+ years of experience managing teams of 60+ security guards for complex security activities in public sector unit organizations.”
                </p>
              </div>

              {/* Value proposition narrative */}
              <p className="text-sm text-slate-300 leading-relaxed">
                Under Mr. Jawale’s visionary command, SJ Security &amp; Facilities Services does not treat security as passive gatekeeping. Instead, every deployment reflects the drill discipline, physical stamina, situational vigilance, and unbending integrity forged through decades of military service.
              </p>

              {/* Experience Metric Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-black/30 border border-white/10 p-4 rounded-xl flex items-start space-x-3">
                  <Award className="w-6 h-6 text-[#C5222B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">30+ Years Armed Forces</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Tactical discipline, personnel turnout, and regimented training culture.
                    </p>
                  </div>
                </div>

                <div className="bg-black/30 border border-white/10 p-4 rounded-xl flex items-start space-x-3">
                  <Users className="w-6 h-6 text-[#C5222B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">6+ Years PSU Leadership</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Commanding 60+ guard teams in high-security public sector installations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Leadership Guarantee */}
              <div className="pt-2 flex items-center space-x-2 text-xs text-slate-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Personal operational oversight on critical client site audits and supervisor reports.</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
