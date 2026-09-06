import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO, STATUTORY_REGISTRATIONS } from '../data/companyData';
import navLogoWhite from '../assets/logo/nav-logo-white.png';
import navLogoBlack from '../assets/logo/nav-logo-black.png';

interface NavbarProps {
  onRequestConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinksLeft = [
    { label: 'Business areas', href: '#services' },
    { label: 'About us', href: '#about' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Training', href: '#training' },
    { label: 'Compliance', href: '#compliance' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    
    // Give time for mobile drawer close animation to start before scrolling smoothly
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        const headerOffset = 72;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }
    }, 120);
  };

  const isHeaderSolid = isScrolled || mobileMenuOpen;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
        <nav
          id="main-navigation"
          className={`w-full transition-all duration-300 py-2 sm:py-3.5 border-b ${
            isHeaderSolid
              ? 'bg-white/95 backdrop-blur-md shadow-xs border-[#D2DFD8]'
              : 'bg-transparent border-transparent'
          }`}
        >
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
            
            {/* Left Navigation Links - Desktop Only */}
            <div className="hidden lg:flex items-center space-x-7 xl:space-x-10">
              {navLinksLeft.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-base xl:text-lg font-medium transition-colors duration-300 font-['Outfit'] cursor-pointer ${
                    isScrolled
                      ? 'text-[#0E3333] hover:text-[#5B8B77]'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Brand Logo - Left-aligned on mobile, Centered on desktop (lowered slightly) */}
            <a
              href="#home"
              id="brand-logo-link"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center text-decoration-none translate-y-0.5 sm:translate-y-1.5 lg:translate-y-2 cursor-pointer"
            >
              <div className="relative flex items-center justify-start lg:justify-center h-13 sm:h-16 lg:h-20 w-36 sm:w-40 lg:w-44">
                {/* White Logo */}
                <img
                  src={navLogoWhite}
                  alt="SJ Security"
                  className={`absolute inset-0 my-auto h-auto max-h-[42px] sm:max-h-[50px] lg:max-h-[64px] w-auto max-w-[132px] sm:max-w-[140px] lg:max-w-[145px] object-contain transition-opacity duration-300 ${
                    isHeaderSolid
                      ? 'opacity-0 pointer-events-none'
                      : 'opacity-100'
                  }`}
                />
                {/* Black Logo */}
                <img
                  src={navLogoBlack}
                  alt="SJ Security"
                  className={`absolute inset-0 my-auto h-auto max-h-[42px] sm:max-h-[50px] lg:max-h-[64px] w-auto max-w-[132px] sm:max-w-[140px] lg:max-w-[145px] object-contain transition-opacity duration-300 ${
                    isHeaderSolid
                      ? 'opacity-100'
                      : 'opacity-0 pointer-events-none'
                  }`}
                />
              </div>
            </a>

            {/* Right Area: Region / Status + Contact Us Pill (Desktop) */}
            <div className="hidden lg:flex items-center space-x-7">
              <a
                href="#maharashtra"
                onClick={(e) => handleNavClick(e, '#maharashtra')}
                className={`text-base xl:text-lg font-medium transition-colors duration-300 font-['Outfit'] cursor-pointer ${
                  isScrolled
                    ? 'text-[#0E3333] hover:text-[#5B8B77]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Maharashtra
              </a>
              
              <button
                id="nav-cta-consultation"
                type="button"
                onClick={onRequestConsultation}
                className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-medium tracking-normal transition-all duration-300 cursor-pointer font-['Outfit'] ${
                  isScrolled
                    ? 'bg-[#0E3333] hover:bg-[#174545] text-white shadow-xs'
                    : 'bg-white hover:bg-[#DFEAE3] text-[#0E3333] shadow-md hover:shadow-lg'
                }`}
              >
                Contact us
              </button>
            </div>

            {/* Mobile Right Controls: Clean Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                id="mobile-menu-toggle"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2.5 rounded-full transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center ${
                  isHeaderSolid
                    ? 'text-[#0E3333] hover:bg-[#DFEAE3]/60'
                    : 'text-white hover:bg-white/15'
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </nav>

        {/* Mobile Menu Drawer with Smooth Slide and Fade */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-navigation-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden bg-white border-b border-[#D2DFD8] shadow-2xl px-5 pt-3 pb-8 space-y-4 max-h-[calc(100vh-64px)] overflow-y-auto"
            >
              <div className="flex flex-col space-y-1">
                {navLinksLeft.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="py-2.5 text-base text-[#0E3333] font-medium border-b border-slate-100 flex items-center justify-between cursor-pointer hover:text-[#5B8B77] active:bg-[#EDF3EE]/50 px-1 rounded-md transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#5B8B77]" />
                  </a>
                ))}
                
                <a
                  href="#maharashtra"
                  onClick={(e) => handleNavClick(e, '#maharashtra')}
                  className="py-2.5 text-base text-[#0E3333] font-medium border-b border-slate-100 flex items-center justify-between cursor-pointer hover:text-[#5B8B77] active:bg-[#EDF3EE]/50 px-1 rounded-md transition-colors"
                >
                  <span>Maharashtra Operations</span>
                  <ArrowRight className="w-4 h-4 text-[#5B8B77]" />
                </a>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="py-2.5 text-base text-[#0E3333] font-medium border-b border-slate-100 flex items-center justify-between cursor-pointer hover:text-[#5B8B77] active:bg-[#EDF3EE]/50 px-1 rounded-md transition-colors"
                >
                  <span>Contact Desk</span>
                  <ArrowRight className="w-4 h-4 text-[#5B8B77]" />
                </a>
              </div>

              <div className="pt-2 space-y-3">
                <button
                  type="button"
                  id="mobile-drawer-cta-consultation"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onRequestConsultation();
                  }}
                  className="w-full py-3.5 bg-[#0E3333] hover:bg-[#174545] text-white flex items-center justify-center space-x-2.5 font-medium text-sm rounded-full shadow-md active:scale-[0.99] transition-all cursor-pointer"
                >
                  <span className="w-7 h-7 rounded-full bg-[#A1C6B4] text-[#0E3333] flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  <span>Request Security Consultation</span>
                </button>

                <a
                  href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`}
                  className="w-full py-2.5 bg-[#EDF3EE] hover:bg-[#DFEAE3] text-[#0E3333] flex items-center justify-center space-x-2 font-medium text-xs rounded-full transition-colors cursor-pointer"
                >
                  <span>Call Command Desk: {COMPANY_INFO.contact.phone}</span>
                </a>

                <div className="text-center pt-1">
                  <span className="text-[11px] text-[#3D5A59] font-['Outfit']">
                    Govt. of Maharashtra PSARA Lic. No: {STATUTORY_REGISTRATIONS[0].registrationNumber}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Dimmed Backdrop overlay on mobile when menu is open */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-2xs lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
};
