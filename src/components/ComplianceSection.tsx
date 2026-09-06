import React, { useState } from 'react';
import { ShieldCheck, Copy, Check, FileCheck, Scale, Info } from 'lucide-react';
import { STATUTORY_REGISTRATIONS, COMPLIANCE_ITEMS } from '../data/companyData';

export const ComplianceSection: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="compliance" className="py-8 sm:py-12 bg-white">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="mb-16 lg:mb-20">
          <span className="text-xs font-medium uppercase tracking-widest text-[#5B8B77] block mb-3 font-['Outfit']">
            Governance &amp; Statutory Integrity
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0E3333] tracking-tight font-['Outfit']">
            Compliance &amp; statutory obligations
          </h2>
          <p className="text-base sm:text-lg text-[#3D5A59] mt-4 max-w-2xl font-['Outfit'] leading-relaxed">
            Full regulatory transparency protects principal employers against joint liability. SJ Security operates in strict accordance with the Private Security Agencies Regulation Act and all Central &amp; State labor enactments.
          </p>
        </div>

        {/* Official Statutory Registrations Card - Subtle Curve on Mobile, Rounded on Desktop */}
        <div className="bg-[#DFEAE3] rounded-xl sm:rounded-[40px] p-5 sm:p-10 lg:p-16 mb-12 sm:mb-20 lg:mb-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D2DFD8] pb-5 mb-6 sm:mb-10">
            <div>
              <span className="text-xs font-medium uppercase tracking-widest text-[#5B8B77] font-['Outfit']">
                Agency Credentials
              </span>
              <h3 className="text-xl sm:text-3xl font-normal text-[#0E3333] font-['Outfit'] mt-1">
                Official Agency Registrations &amp; Licenses
              </h3>
            </div>
            <div className="inline-flex items-center self-start sm:self-auto bg-white text-[#0E3333] text-xs font-medium px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-xs shrink-0 font-['Outfit']">
              <ShieldCheck className="w-4 h-4 mr-2 text-[#5B8B77]" />
              Verified &amp; Active
            </div>
          </div>

          {/* Registrations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {STATUTORY_REGISTRATIONS.map((item, idx) => (
              <div
                key={idx}
                id={`compliance-card-${idx}`}
                className="bg-white rounded-lg sm:rounded-[24px] p-4.5 sm:p-6 shadow-xs flex flex-col justify-between group border border-transparent hover:border-[#5B8B77] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-[#3D5A59] font-['Outfit']">
                      Credential 0{idx + 1}
                    </span>
                    <FileCheck className="w-4 h-4 text-[#5B8B77]" />
                  </div>

                  <h4 className="text-sm sm:text-base font-medium text-[#0E3333] mb-2 sm:mb-3 font-['Outfit']">
                    {item.title}
                  </h4>

                  <div className="bg-[#EDF3EE] rounded-xl p-2.5 sm:p-3 font-mono text-xs font-medium text-[#0E3333] tracking-wider flex items-center justify-between">
                    <span className="truncate mr-2">{item.registrationNumber}</span>
                    <button
                      onClick={() => handleCopy(item.registrationNumber, idx)}
                      title="Copy registration number"
                      aria-label={`Copy ${item.title}`}
                      className="text-[#3D5A59] hover:text-[#0E3333] p-1.5 rounded-md hover:bg-white/60 transition-colors shrink-0 cursor-pointer min-w-[32px] min-h-[32px] flex items-center justify-center"
                    >
                      {copiedIndex === idx ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <p className="text-xs text-[#3D5A59] mt-3 sm:mt-4 pt-3 border-t border-slate-100 font-['Outfit']">
                  Authority: {item.authority}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Labor Law & Statutory Obligations - Open, Airy, Uncluttered Layout */}
        <div>
          <div className="mb-10 pb-4 border-b border-[#D2DFD8] flex flex-col sm:flex-row sm:items-end justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#5B8B77] font-medium block mb-1">
                Labor Protection
              </span>
              <h3 className="text-2xl sm:text-3xl font-normal text-[#0E3333] font-['Outfit']">
                Adherence to government labor regulations
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#3D5A59] mt-2 sm:mt-0 font-['Outfit']">
              Complete statutory protection for client organizations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {COMPLIANCE_ITEMS.map((comp, idx) => (
              <div
                key={idx}
                className="pt-2 flex items-start space-x-4"
              >
                <div className="w-8 h-8 rounded-full bg-[#DFEAE3] text-[#5B8B77] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-[#0E3333] font-['Outfit'] mb-1">
                    {comp.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#3D5A59] leading-relaxed font-['Outfit']">
                    {comp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center space-x-3 text-xs sm:text-sm text-[#3D5A59] bg-[#EDF3EE] p-4 sm:p-5 rounded-2xl max-w-3xl">
            <Info className="w-5 h-5 text-[#5B8B77] shrink-0" />
            <span className="font-['Outfit'] leading-relaxed">
              Audit-ready electronic challans, PF returns, and ESIC monthly slips are shared proactively with each client organization's administrative audit team.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
