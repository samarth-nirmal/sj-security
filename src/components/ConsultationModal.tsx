import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/companyData';
import { ConsultationFormData } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = ''
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    location: '',
    securityRequirement: defaultService || SERVICES_DATA[0].title,
    personnelRequired: '6-15 Guards',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          id="consultation-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-white rounded-[22px] sm:rounded-[28px] shadow-2xl overflow-hidden my-auto border border-[#D2DFD8]"
            id="consultation-modal-dialog"
          >
            {/* Modal Header */}
            <div className="bg-[#0E3333] px-4 sm:px-8 py-3.5 sm:py-5 text-white flex items-center justify-between">
              <div className="flex items-center space-x-2.5 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#DFEAE3] text-[#0E3333] flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#5B8B77]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-normal tracking-tight text-white font-['Outfit'] leading-tight">
                    Request Security Consultation
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#DFEAE3] font-['Outfit']">
                    SJ Security &amp; Facilities Services • Maharashtra PSARA
                  </p>
                </div>
              </div>
              <button
                id="btn-close-consultation-modal"
                onClick={onClose}
                aria-label="Close modal"
                className="text-[#DFEAE3] hover:text-white p-1.5 sm:p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-8 max-h-[82vh] overflow-y-auto font-['Outfit']">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-[#DFEAE3] text-[#5B8B77] rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-normal text-[#0E3333]">Consultation Request Received</h4>
                  <p className="text-[#3D5A59] max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, <span className="font-medium text-[#0E3333]">{formData.fullName}</span>. Our senior operations officer will review your security requirement for <span className="font-medium text-[#0E3333]">{formData.companyName || 'your site'}</span> and reach out within 2 to 4 hours.
                  </p>
                  <button
                    id="btn-modal-done"
                    onClick={handleReset}
                    className="mt-4 px-7 py-2.5 bg-[#0E3333] text-white rounded-full font-medium text-sm hover:bg-[#184545] transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="form-consultation-modal">
                  <p className="text-sm text-[#3D5A59] mb-4">
                    Please share your facility details below. Our operations team will prepare a customized, site-specific manpower deployment proposal.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#0E3333] mb-1">
                        Full Name *
                      </label>
                      <input
                        id="modal-input-name"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Ramesh Kulkarni"
                        className="w-full px-4 py-2.5 text-sm bg-white border border-[#D2DFD8] rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#5B8B77]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#0E3333] mb-1">
                        Company / Society Name *
                      </label>
                      <input
                        id="modal-input-company"
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Horizon Heights CHS"
                        className="w-full px-4 py-2.5 text-sm bg-white border border-[#D2DFD8] rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#5B8B77]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#0E3333] mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="modal-input-phone"
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+91 98XXX XXXXX"
                        className="w-full px-4 py-2.5 text-sm bg-white border border-[#D2DFD8] rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#5B8B77]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#0E3333] mb-1">
                        Official Email *
                      </label>
                      <input
                        id="modal-input-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="admin@company.com"
                        className="w-full px-4 py-2.5 text-sm bg-white border border-[#D2DFD8] rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#5B8B77]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#0E3333] mb-1">
                        Site Location (Maharashtra) *
                      </label>
                      <input
                        id="modal-input-location"
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Pune, Chakan, Mumbai"
                        className="w-full px-4 py-2.5 text-sm bg-white border border-[#D2DFD8] rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#5B8B77]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#0E3333] mb-1">
                        Personnel Required
                      </label>
                      <select
                        id="modal-select-personnel"
                        value={formData.personnelRequired}
                        onChange={(e) => setFormData({ ...formData, personnelRequired: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-white border border-[#D2DFD8] rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#5B8B77]"
                      >
                        <option value="1-5 Guards">1 – 5 Guards (Small Facility / Society)</option>
                        <option value="6-15 Guards">6 – 15 Guards (Medium Corporate / Factory)</option>
                        <option value="16-30 Guards">16 – 30 Guards (Industrial Plant / Hospital)</option>
                        <option value="31-60 Guards">31 – 60 Guards (Large Campus / Tech Park)</option>
                        <option value="60+ Guards">60+ Guards (Large PSU / Complex)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#0E3333] mb-1">
                      Primary Security Service
                    </label>
                    <select
                      id="modal-select-requirement"
                      value={formData.securityRequirement}
                      onChange={(e) => setFormData({ ...formData, securityRequirement: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-[#D2DFD8] rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#5B8B77]"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                      <option value="Comprehensive Integrated Security & Facilities Package">
                        Comprehensive Integrated Security &amp; Facilities Package
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#0E3333] mb-1">
                      Operational Notes / Premises Specifications
                    </label>
                    <textarea
                      id="modal-textarea-notes"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Shift timings (day/night/24x7), site area, weapon/unarmed, access control..."
                      className="w-full px-4 py-2 text-sm bg-white border border-[#D2DFD8] rounded-xl focus:outline-hidden focus:ring-1 focus:ring-[#5B8B77] resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-3 flex items-center justify-between border-t border-[#D2DFD8]">
                    <p className="text-xs text-[#3D5A59] flex items-center">
                      <Shield className="w-4 h-4 text-[#5B8B77] mr-1 inline shrink-0" />
                      100% Confidential &amp; PSARA Compliant
                    </p>
                    <button
                      id="btn-modal-submit"
                      type="submit"
                      disabled={loading}
                      className="px-7 py-2.5 bg-[#0E3333] hover:bg-[#184545] text-white text-sm font-medium rounded-full shadow-xs transition-all flex items-center gap-2 cursor-pointer"
                    >
                      {loading ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
