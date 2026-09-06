import React from 'react';
import { Shield, CheckCircle2, ChevronRight, Award, Building, HeartHandshake } from 'lucide-react';
import accessControlImage from '../assets/images/security_access_control_1788679343058.jpg';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  const sectorsList = [
    "Corporate Houses",
    "Industries",
    "Banks",
    "Telecom Companies",
    "Hospitals",
    "Hotels",
    "Educational Institutions",
    "Public Sector Organizations"
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Accent */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#C5222B] mb-3">
            <span className="w-4 h-0.5 bg-[#C5222B]"></span>
            <span>About SJ Security &amp; Facilities Services</span>
            <span className="w-4 h-0.5 bg-[#C5222B]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#032238] tracking-tight font-['Montserrat']">
            Committed to Vigilance, Discipline &amp; Client Peace of Mind
          </h2>
          <div className="w-16 h-1 bg-[#C5222B] mx-auto mt-4 mb-6"></div>
          <p className="text-base text-slate-600 leading-relaxed font-medium italic bg-slate-50 border-l-4 border-[#032238] p-4 text-left rounded-r-lg shadow-2xs">
            “Our company’s objective is to provide a team of well-trained personnel to relieve our clients of security and operational concerns.”
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Professional Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100">
              <img
                src={accessControlImage}
                alt="SJ Security officer managing access control and checking facilities"
                className="w-full h-[420px] sm:h-[480px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#032238]/90 via-transparent to-transparent"></div>
              
              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white p-4 bg-[#032238]/85 backdrop-blur-md rounded-xl border border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-[#C5222B] flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm tracking-tight text-white">
                      Physical, Educational &amp; Medical Standards
                    </h4>
                    <p className="text-xs text-slate-300">
                      PSARA Compliant Recruitment &amp; Verification
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Insignia Accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#C5222B]/10 rounded-xl -z-10"></div>
          </div>

          {/* Right Column: Narrative & Sectors */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-[#032238] font-bold">SJ SECURITY &amp; FACILITIES SERVICES</strong> is committed to the safety and security of its clients and continuously upgrades the quality of its resources and infrastructure to support changing customer requirements.
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                The company provides manpower and security services in accordance with applicable physical, educational and medical standards and follows the requirements applicable to private security agencies.
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                The organization focuses on customized, site-specific training and experienced personnel to create dependable security solutions for clients across varied operational environments.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg flex items-start space-x-3">
                <Shield className="w-5 h-5 text-[#C5222B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#032238]">Site-Specific SOPs</h4>
                  <p className="text-xs text-slate-500">Every deployment has custom post orders adapted to client risks.</p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg flex items-start space-x-3">
                <HeartHandshake className="w-5 h-5 text-[#C5222B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#032238]">Operational Relief</h4>
                  <p className="text-xs text-slate-500">Freeing client management to focus fully on their core enterprise.</p>
                </div>
              </div>
            </div>

            {/* Sectors Served Tag Cloud */}
            <div className="pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Key Sectors Entrusted to Our Care:
              </h4>
              <div className="flex flex-wrap gap-2">
                {sectorsList.map((sector, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-semibold bg-[#032238]/5 text-[#032238] border border-slate-200 hover:border-[#C5222B] hover:text-[#C5222B] transition-colors"
                  >
                    <CheckCircle2 className="w-3 h-3 mr-1.5 text-[#C5222B]" />
                    {sector}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
