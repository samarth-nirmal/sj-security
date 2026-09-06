import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Shield,
  MessageCircle,
  ArrowRight,
  Check,
  FileText
} from 'lucide-react';
import { COMPANY_INFO, STATUTORY_REGISTRATIONS } from '../data/companyData';

interface ContactSectionProps {
  onRequestConsultation?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onRequestConsultation }) => {
  // Streamlined 3-field callback form
  const [callbackName, setCallbackName] = useState('');
  const [callbackContact, setCallbackContact] = useState('');
  const [callbackLocation, setCallbackLocation] = useState('');
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);
  const [callbackLoading, setCallbackLoading] = useState(false);

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCallbackLoading(true);
    setTimeout(() => {
      setCallbackLoading(false);
      setCallbackSubmitted(true);
    }, 500);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello SJ Security & Facilities Services, I would like to request a site security consultation in Maharashtra.`
  );

  return (
    <section id="contact" className="py-8 sm:py-12 bg-white scroll-mt-24">
      <div className="w-full">
        
        {/* Spacious, Uncluttered Operations & Consultation Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Direct Operations Desk - Clean, Airy Layout */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#5B8B77] font-medium block mb-2 font-['Outfit']">
                Direct Communication
              </span>
              <h3 className="text-2xl sm:text-4xl font-normal text-[#0E3333] font-['Outfit'] tracking-tight">
                Operational command desk
              </h3>
              <p className="text-sm sm:text-base text-[#3D5A59] mt-2 sm:mt-3 max-w-md font-['Outfit'] leading-relaxed">
                Reach our 24/7 Pune operations team directly for urgent deployments, guard allocations, or site supervision.
              </p>
            </div>

            <div className="space-y-5 sm:space-y-6 pt-1 font-['Outfit']">
              {/* Telephone */}
              <div className="flex items-start space-x-3.5 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#EDF3EE] flex items-center justify-center text-[#0E3333] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#5B8B77]" />
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs text-[#3D5A59] uppercase tracking-wider">Direct Telephone &amp; 24/7 Hotline</span>
                  <p className="text-[#0E3333] font-medium text-base sm:text-lg mt-0.5">
                    {COMPANY_INFO.contact.phone}
                  </p>
                  <p className="text-[#3D5A59] text-xs">
                    Secondary: {COMPANY_INFO.contact.altPhone}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3.5 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#EDF3EE] flex items-center justify-center text-[#0E3333] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#5B8B77]" />
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs text-[#3D5A59] uppercase tracking-wider">Official Inquiries &amp; Tenders</span>
                  <p className="text-[#0E3333] font-medium text-sm sm:text-base mt-0.5 break-all">
                    {COMPANY_INFO.contact.email}
                  </p>
                  <p className="text-[#3D5A59] text-xs">
                    Support: {COMPANY_INFO.contact.supportEmail}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3.5 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#EDF3EE] flex items-center justify-center text-[#0E3333] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#5B8B77]" />
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs text-[#3D5A59] uppercase tracking-wider">State Headquarters</span>
                  <p className="text-[#0E3333] font-medium text-sm sm:text-base mt-0.5">
                    {COMPANY_INFO.contact.headOffice}
                  </p>
                  <p className="text-xs text-[#5B8B77] font-medium mt-0.5">
                    Serving Pune, Mumbai, MMR, Chakan, Nashik, Sambhajinagar &amp; Nagpur
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions & Statutory Badge */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 sm:px-6 bg-[#0E3333] hover:bg-[#184545] text-white font-medium text-xs sm:text-sm rounded-full transition-all flex items-center justify-center space-x-2 text-decoration-none font-['Outfit']"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat directly on WhatsApp</span>
              </a>

              <div className="px-4 py-2.5 rounded-full bg-[#EDF3EE] text-xs text-[#3D5A59] flex items-center justify-center space-x-2 font-['Outfit']">
                <Shield className="w-3.5 h-3.5 text-[#5B8B77]" />
                <span>PSARA Lic: <strong className="text-[#0E3333] font-mono">{STATUTORY_REGISTRATIONS[0].registrationNumber}</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Breathable Quick Callback & Full Consultation CTA */}
          <div className="lg:col-span-6">
            <div className="bg-[#EDF3EE] rounded-xl sm:rounded-[32px] p-5 sm:p-10 lg:p-12 border border-[#D2DFD8]">
              
              {callbackSubmitted ? (
                <div className="py-8 sm:py-12 text-center space-y-4 font-['Outfit']">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#DFEAE3] text-[#5B8B77] rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-normal text-[#0E3333]">
                    Request Received
                  </h4>
                  <p className="text-xs sm:text-sm text-[#3D5A59] max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-medium text-[#0E3333]">{callbackName}</span>. A security operations officer will connect with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setCallbackSubmitted(false);
                      setCallbackName('');
                      setCallbackContact('');
                      setCallbackLocation('');
                    }}
                    className="mt-3 px-5 sm:px-6 py-2.5 bg-[#0E3333] text-white text-xs sm:text-sm font-medium rounded-full hover:bg-[#184545] transition-colors cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <div className="space-y-5 sm:space-y-6 font-['Outfit']">
                  <div className="border-b border-[#D2DFD8] pb-4 sm:pb-5">
                    <h4 className="text-xl sm:text-2xl font-normal text-[#0E3333]">
                      Request quick callback
                    </h4>
                    <p className="text-xs sm:text-sm text-[#3D5A59] mt-1.5 leading-relaxed">
                      Leave your details for an immediate discussion on site guarding, facility manpower, or electronic surveillance.
                    </p>
                  </div>

                  <form onSubmit={handleCallbackSubmit} className="space-y-3.5 sm:space-y-4" id="quick-callback-form">
                    <div>
                      <label className="block text-xs font-medium text-[#0E3333] mb-1.5">
                        Your Name / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={callbackName}
                        onChange={(e) => setCallbackName(e.target.value)}
                        placeholder="e.g. Ramesh Kulkarni, Tech Park"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm bg-white border border-[#D2DFD8] rounded-xl focus:ring-1 focus:ring-[#5B8B77] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#0E3333] mb-1.5">
                        Phone Number or Email *
                      </label>
                      <input
                        type="text"
                        required
                        value={callbackContact}
                        onChange={(e) => setCallbackContact(e.target.value)}
                        placeholder="+91 98220 XXXXX / info@company.com"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm bg-white border border-[#D2DFD8] rounded-xl focus:ring-1 focus:ring-[#5B8B77] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#0E3333] mb-1.5">
                        Site Location in Maharashtra *
                      </label>
                      <input
                        type="text"
                        required
                        value={callbackLocation}
                        onChange={(e) => setCallbackLocation(e.target.value)}
                        placeholder="e.g. Pune (Hinjawadi / Chakan), Mumbai, etc."
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm bg-white border border-[#D2DFD8] rounded-xl focus:ring-1 focus:ring-[#5B8B77] focus:outline-hidden"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={callbackLoading}
                        className="w-full py-3 sm:py-3.5 bg-[#0E3333] hover:bg-[#184545] text-white font-medium text-xs sm:text-sm rounded-full transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-xs"
                      >
                        {callbackLoading ? (
                          <span>Connecting with Command Desk...</span>
                        ) : (
                          <>
                            <span>Request Operations Callback</span>
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>

                  {/* Comprehensive Proposal Button */}
                  <div className="pt-3.5 sm:pt-4 border-t border-[#D2DFD8]/80 text-center">
                    <p className="text-[11px] sm:text-xs text-[#3D5A59] mb-2">
                      Need a detailed tender specification or customized guard allocation schedule?
                    </p>
                    <button
                      onClick={onRequestConsultation}
                      type="button"
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#0E3333] hover:text-[#5B8B77] transition-colors cursor-pointer underline underline-offset-4"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Open Comprehensive Proposal Questionnaire</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
