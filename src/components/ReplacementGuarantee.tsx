import React from 'react';
import { UserCheck2, RefreshCw, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

interface ReplacementGuaranteeProps {
  onInquire: () => void;
}

export const ReplacementGuarantee: React.FC<ReplacementGuaranteeProps> = ({ onInquire }) => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-lg p-6 sm:p-10 relative overflow-hidden">
          {/* Subtle top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-[#032238] via-[#C5222B] to-[#032238]"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Reassurance Visual */}
            <div className="md:col-span-4 flex flex-col items-center text-center p-4 bg-slate-50 rounded-xl border border-slate-200/80">
              <div className="w-16 h-16 rounded-2xl bg-[#032238] text-white flex items-center justify-center shadow-md mb-3">
                <RefreshCw className="w-8 h-8 text-[#C5222B]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Staff Continuity Assurance
              </span>
              <h4 className="text-lg font-black text-[#032238] mt-1 font-['Montserrat']">
                Zero Post Abandonment
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Standing reserve force maintained 24/7 for swift mobilization.
              </p>
            </div>

            {/* Right Message Content */}
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#C5222B]">
                <ShieldCheck className="w-4 h-4 text-[#C5222B]" />
                <span>Personnel Assurance</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#032238] font-['Montserrat'] tracking-tight">
                Reliable Staffing. Responsive Replacement.
              </h3>

              <div className="bg-slate-50 border-l-4 border-[#032238] p-4 rounded-r-lg">
                <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed italic">
                  “In case any security personnel is found unsuitable, the organization will arrange replacement promptly. The required strength is deployed to maintain effective and credible security.”
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-600 font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Prompt replacement with no administrative friction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Continuous 100% post occupancy SLA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pre-briefed reliever guards familiar with site</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct escalation line to senior operational inspector</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
