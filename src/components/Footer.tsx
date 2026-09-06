import React from 'react';
import { ArrowUp, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, STATUTORY_REGISTRATIONS } from '../data/companyData';
import footerLogo from '../assets/logo/footer-logo.png';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const businessAreas = [
    { label: 'Security Guarding', href: '#services' },
    { label: 'Facilities Support', href: '#services' },
    { label: 'Access & Surveillance', href: '#services' },
    { label: 'Industrial & PSU Defense', href: '#services' },
    { label: 'Residential Societies', href: '#services' },
    { label: 'Emergency & Fire Safety', href: '#services' },
  ];

  const aboutUsLinks = [
    { label: 'The SJ Security Model', href: '#leadership' },
    { label: 'Military Leadership', href: '#leadership' },
    { label: 'Training Academy', href: '#training' },
    { label: 'Recruitment Criteria', href: '#standards' },
    { label: 'Replacement Guarantee', href: '#standards' },
  ];

  const complianceLinks = [
    { label: `PSARA: ${STATUTORY_REGISTRATIONS[0].registrationNumber}`, href: '#compliance' },
    { label: `Udyam: ${STATUTORY_REGISTRATIONS[1].registrationNumber}`, href: '#compliance' },
    { label: `Shop Act: ${STATUTORY_REGISTRATIONS[2].registrationNumber}`, href: '#compliance' },
    { label: 'EPF & ESIC Adherence', href: '#compliance' },
    { label: 'Minimum Wages Enactments', href: '#compliance' },
  ];

  return (
    <footer className="bg-white text-[#0E3333] border-t border-[#D2DFD8] pt-12 sm:pt-20 lg:pt-28 pb-10 sm:pb-16">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Main Grid - 2-Column on Mobile, 12-Column on Large */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 pb-12 sm:pb-20 border-b border-[#D2DFD8]">
          
          {/* Brand & Mission Column - Spans 2 cols on mobile */}
          <div className="col-span-2 lg:col-span-4 space-y-4 sm:space-y-6">
            <a href="#home" className="inline-block">
              <img
                src={footerLogo}
                alt="SJ Security"
                className="h-18 sm:h-24 md:h-28 lg:h-32 w-auto object-contain drop-shadow-xs"
              />
            </a>

            <p className="text-sm sm:text-lg lg:text-xl text-[#3D5A59] leading-relaxed font-['Outfit'] max-w-md">
              It is in disciplined preparation that genuine security is forged. Do you have a question, a site requirement, or do you just want to say hello? Send an email or message and we will respond promptly.
            </p>

            <div className="pt-1 sm:pt-2">
              <a
                href="#contact"
                className="inline-flex items-center bg-[#0E3333] hover:bg-[#184545] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium tracking-normal transition-colors font-['Outfit'] cursor-pointer"
              >
                Contact us
              </a>
            </div>
          </div>

          {/* Col 2: Business areas */}
          <div className="col-span-1 lg:col-span-2 space-y-3 sm:space-y-5">
            <h4 className="text-base sm:text-xl font-medium text-[#0E3333] font-['Outfit']">
              Business areas
            </h4>
            <ul className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-[17px] text-[#3D5A59] font-['Outfit']">
              {businessAreas.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-[#0E3333] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: About us */}
          <div className="col-span-1 lg:col-span-2 space-y-3 sm:space-y-5">
            <h4 className="text-base sm:text-xl font-medium text-[#0E3333] font-['Outfit']">
              About us
            </h4>
            <ul className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-[17px] text-[#3D5A59] font-['Outfit']">
              {aboutUsLinks.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-[#0E3333] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Compliance & Licenses */}
          <div className="col-span-1 lg:col-span-2 space-y-3 sm:space-y-5">
            <h4 className="text-base sm:text-xl font-medium text-[#0E3333] font-['Outfit']">
              Compliance
            </h4>
            <ul className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-[15px] text-[#3D5A59] font-['Outfit']">
              {complianceLinks.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-[#0E3333] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Follow us */}
          <div className="col-span-1 lg:col-span-2 space-y-3 sm:space-y-5">
            <h4 className="text-base sm:text-xl font-medium text-[#0E3333] font-['Outfit']">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-[17px] text-[#3D5A59] font-['Outfit']">
              <li>
                <a
                  href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#0E3333] transition-colors font-mono text-xs sm:text-base break-all"
                >
                  {COMPANY_INFO.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="hover:text-[#0E3333] transition-colors text-xs sm:text-base break-all"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </li>
              <li>
                <span className="text-xs sm:text-base text-[#5B8B77] block mt-0.5 font-medium">
                  Pune &amp; Maharashtra
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-6 sm:pt-10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-[#3D5A59] text-center sm:text-left font-['Outfit']">
          <p>
            © {new Date().getFullYear()} SJ Security &amp; Facilities Services. All Rights Reserved.
          </p>

          <p className="text-[#3D5A59]/90 text-center sm:text-right">
            Securing Today For A Safer Tomorrow &bull; PSARA Lic. {STATUTORY_REGISTRATIONS[0].registrationNumber}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-[#0E3333] hover:text-[#5B8B77] transition-colors cursor-pointer font-medium"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
