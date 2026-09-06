import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const FollowOurJourney: React.FC = () => {
  const [quickInput, setQuickInput] = useState('');
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickInput.trim()) return;
    setQuickSubmitted(true);
  };

  return (
    <section id="follow-journey" className="w-full bg-[#DFEAE3] py-12 sm:py-20 lg:py-28 px-5 sm:px-12 md:px-16 lg:px-24 xl:px-32">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left: Headline & Explanation */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-[#0E3333] tracking-tight font-['Outfit']">
              Follow our journey
            </h2>
            <p className="text-sm sm:text-lg text-[#3D5A59] leading-relaxed font-['Outfit'] max-w-xl">
              Connect with our operational leadership to receive site vulnerability evaluations, customized security proposals, and regulatory updates across Maharashtra.
            </p>
          </div>

          {/* Right: Quick Pill Input Field Matching Reference */}
          <div className="lg:col-span-6">
            {quickSubmitted ? (
              <div className="bg-white rounded-full py-3.5 px-5 sm:px-8 flex items-center space-x-3 shadow-xs font-['Outfit'] text-[#0E3333]">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#5B8B77] shrink-0" />
                <span className="text-xs sm:text-base font-medium">
                  Thank you. Our command desk will connect with you shortly.
                </span>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="space-y-3">
                <div className="relative flex items-center bg-white rounded-full p-1.5 sm:p-2.5 pl-4 sm:pl-7 shadow-xs border border-transparent focus-within:border-[#5B8B77] transition-all">
                  <input
                    type="text"
                    value={quickInput}
                    onChange={(e) => setQuickInput(e.target.value)}
                    placeholder="Enter email or phone number..."
                    className="bg-transparent text-[#0E3333] text-xs sm:text-base focus:outline-hidden flex-1 font-['Outfit'] placeholder-[#3D5A59]/70 min-w-0 pr-2"
                    required
                  />
                  <button
                    type="submit"
                    aria-label="Submit contact"
                    className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#A1C6B4] hover:bg-[#8eb8a3] text-[#0E3333] flex items-center justify-center transition-colors cursor-pointer shrink-0 shadow-xs"
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
