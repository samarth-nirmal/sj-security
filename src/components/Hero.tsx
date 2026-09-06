import React from 'react';
import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

interface HeroProps {
  onContactClick?: () => void;
  onRequestConsultation?: () => void;
  onExploreServices?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onContactClick,
  onRequestConsultation,
  onExploreServices
}) => {
  const handleContactNavigation = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onContactClick) {
      onContactClick();
    } else {
      const el = document.getElementById('contact');
      if (el) {
        const headerOffset = 72;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }
    }
  };

  const handleExploreServicesNavigation = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onExploreServices) {
      onExploreServices();
    } else {
      const el = document.getElementById('services');
      if (el) {
        const headerOffset = 72;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }
    }
  };
  return (
    <section
      id="home"
      className="relative w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden text-white"
    >
      {/* Background Photography with smooth cinematic scale & fade entrance */}
      <motion.div
        initial={{ opacity: 0, scale: 1.07 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 w-full h-full"
      >
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85"
          alt="Modern corporate facilities and enterprise architecture"
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.02]"
          referrerPolicy="no-referrer"
        />
        {/* Clean neutral dark gradient - no blue or teal tint */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/25"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/40"></div>
      </motion.div>

      {/* Main Hero Content Area - Responsive Container */}
      <div className="relative z-10 w-full px-5 sm:px-10 lg:px-16 pt-24 sm:pt-32 pb-8 sm:pb-14 my-auto flex flex-col justify-center">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          {/* Main Headline - Scaled beautifully for mobile & desktop */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.35rem] sm:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-tight text-white leading-[1.08] font-['Outfit']"
          >
            We protect for a <br className="hidden sm:inline" />
            safer tomorrow
          </motion.h1>

          {/* Action Buttons - Contact Us + Desktop-Only Explore Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 sm:gap-5 pt-1 sm:pt-2"
          >
            {/* Contact Us Button - Scaled up on desktop */}
            <button
              id="hero-cta-consultation"
              onClick={handleContactNavigation}
              className="inline-flex items-center pl-4 sm:pl-5 lg:pl-7 pr-1.5 sm:pr-2 lg:pr-2.5 py-1.5 sm:py-2 lg:py-2.5 bg-[#0E3333] hover:bg-[#164242] border border-white/20 rounded-full transition-all duration-300 shadow-lg group cursor-pointer"
            >
              <span className="text-white text-sm sm:text-base lg:text-lg font-medium tracking-normal mr-2.5 sm:mr-3.5 lg:mr-4 font-['Outfit']">
                Contact us
              </span>
              {/* Soft sage circular button badge with contact logo */}
              <span className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-[#A1C6B4] group-hover:bg-[#b8d6c7] text-[#0E3333] flex items-center justify-center transition-colors shadow-xs">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5 group-hover:rotate-12 transition-transform" />
              </span>
            </button>

            {/* Explore Services Link - Only on Desktop Screens */}
            <button
              id="hero-cta-explore-services"
              type="button"
              onClick={handleExploreServicesNavigation}
              className="hidden lg:inline-flex items-center text-white/75 hover:text-white text-lg font-medium tracking-normal font-['Outfit'] cursor-pointer transition-colors duration-300 py-2 px-1"
            >
              Explore services
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar - Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full px-5 sm:px-10 lg:px-16 pb-6 sm:pb-12 flex items-center justify-between text-white"
      >
        <div className="text-base sm:text-xl lg:text-2xl font-medium tracking-tight text-white/90 font-['Outfit']">
          By veterans, for enterprise protection.
        </div>
      </motion.div>
    </section>
  );
};
