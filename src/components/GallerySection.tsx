import React, { useState } from 'react';
import { Camera, Eye, X, ZoomIn, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import heroTeamImage from '../assets/images/hero_security_team_1788679287378.jpg';
import founderImage from '../assets/images/founder_placeholder.svg';
import trainingDrillImage from '../assets/images/security_training_drill_1788679327546.jpg';
import accessControlImage from '../assets/images/security_access_control_1788679343058.jpg';

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: string;
  caption: string;
}

export const GallerySection: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "1",
      src: heroTeamImage,
      title: "Guard Squad Formation & Turnout",
      category: "Personnel in Uniform",
      caption: "Disciplined uniform inspection and ceremonial formation of security guards prior to deployment."
    },
    {
      id: "2",
      src: trainingDrillImage,
      title: "Military-Standard Drill Practice",
      category: "Security Training",
      caption: "Outdoor drill maneuvers instructed under the supervision of Indian Army veteran trainers."
    },
    {
      id: "3",
      src: accessControlImage,
      title: "Access Control & Gate Management",
      category: "On-Site Operations",
      caption: "Active vehicle checking and visitor verification at a corporate facility in Maharashtra."
    },
    {
      id: "4",
      src: founderImage,
      title: "Leadership & Director Oversight",
      category: "Leadership",
      caption: "Mr. Sudhir Sitaram Jawale (Retd. Army), bringing 30+ years of armed forces command to private security."
    }
  ];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % galleryItems.length);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#C5222B] mb-2">
            <Camera className="w-4 h-4 text-[#C5222B]" />
            <span>Field Realities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#032238] tracking-tight font-['Montserrat']">
            Professionalism in Action
          </h2>
          <div className="w-20 h-1 bg-[#C5222B] mx-auto mt-4 mb-6"></div>
          <p className="text-base text-slate-600 leading-relaxed">
            Authentic glimpses of our personnel in crisp uniform, rigorous drill sessions, access barrier checking, and leadership operations.
          </p>
        </div>

        {/* Gallery Grid with Featured Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Featured Large Image (Span 7) */}
          <div
            className="md:col-span-7 relative group rounded-2xl overflow-hidden shadow-lg border-2 border-white cursor-pointer h-[380px] sm:h-[460px] bg-black"
            onClick={() => setActiveLightboxIndex(0)}
          >
            <img
              src={galleryItems[0].src}
              alt={galleryItems[0].title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#032238]/90 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-[#C5222B] px-2.5 py-1 rounded-sm inline-block mb-2">
                {galleryItems[0].category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-['Montserrat']">
                {galleryItems[0].title}
              </h3>
              <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                {galleryItems[0].caption}
              </p>
            </div>

            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-4 h-4" />
            </div>
          </div>

          {/* Right Column Grid (Span 5) */}
          <div className="md:col-span-5 grid grid-cols-1 gap-6">
            
            {/* Top Right Item */}
            <div
              className="relative group rounded-2xl overflow-hidden shadow-md border-2 border-white cursor-pointer h-[215px] bg-black"
              onClick={() => setActiveLightboxIndex(1)}
            >
              <img
                src={galleryItems[1].src}
                alt={galleryItems[1].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#032238]/90 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5222B] bg-white/10 px-2 py-0.5 rounded-xs">
                  {galleryItems[1].category}
                </span>
                <h4 className="text-base font-bold font-['Montserrat'] mt-1">
                  {galleryItems[1].title}
                </h4>
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Bottom Right Item */}
            <div
              className="relative group rounded-2xl overflow-hidden shadow-md border-2 border-white cursor-pointer h-[215px] bg-black"
              onClick={() => setActiveLightboxIndex(2)}
            >
              <img
                src={galleryItems[2].src}
                alt={galleryItems[2].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#032238]/90 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5222B] bg-white/10 px-2 py-0.5 rounded-xs">
                  {galleryItems[2].category}
                </span>
                <h4 className="text-base font-bold font-['Montserrat'] mt-1">
                  {galleryItems[2].title}
                </h4>
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxIndex(null)}
              aria-label="Close Lightbox"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-[#C5222B] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev & Next Controls */}
            <button
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#C5222B] transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#C5222B] transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image */}
            <div className="max-h-[70vh] flex items-center justify-center bg-black">
              <img
                src={galleryItems[activeLightboxIndex].src}
                alt={galleryItems[activeLightboxIndex].title}
                className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Lightbox Caption Strip */}
            <div className="p-5 bg-[#032238] border-t border-white/10 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5222B]">
                  {galleryItems[activeLightboxIndex].category}
                </span>
                <h4 className="text-lg font-bold font-['Montserrat']">
                  {galleryItems[activeLightboxIndex].title}
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  {galleryItems[activeLightboxIndex].caption}
                </p>
              </div>
              <span className="text-xs font-mono text-slate-400 self-end sm:self-center">
                {activeLightboxIndex + 1} / {galleryItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
