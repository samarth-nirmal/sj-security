import React, { useState } from 'react';
import { MapPin, Shield, ArrowRight } from 'lucide-react';
import { MAHARASHTRA_REGIONS } from '../data/companyData';

interface MaharashtraMapProps {
  onInquire: () => void;
}

export const MaharashtraMap: React.FC<MaharashtraMapProps> = ({ onInquire }) => {
  const [activeRegion, setActiveRegion] = useState<number>(0);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const displayRegion = hoveredNode !== null ? hoveredNode : activeRegion;

  const hubNodes = [
    { name: "Pune (HQ)", cx: 250, cy: 270, idx: 0, isHQ: true },
    { name: "MMR / Mumbai", cx: 180, cy: 220, idx: 1, isHQ: false },
    { name: "Nashik", cx: 250, cy: 160, idx: 2, isHQ: false },
    { name: "Sambhajinagar", cx: 350, cy: 200, idx: 3, isHQ: false },
    { name: "Nagpur", cx: 530, cy: 160, idx: 4, isHQ: false },
    { name: "Kolhapur", cx: 270, cy: 360, idx: 5, isHQ: false },
  ];

  return (
    <section id="maharashtra" className="py-8 sm:py-12 bg-white">
      <div className="w-full">
        
        {/* Section Header with CTA button */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 lg:mb-12 gap-5">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-[#5B8B77] block mb-2 font-['Outfit']">
              Statewide Presence
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0E3333] tracking-tight font-['Outfit']">
              Serving across Maharashtra
            </h2>
            <p className="text-sm sm:text-lg text-[#3D5A59] mt-2.5 sm:mt-3 max-w-2xl font-['Outfit'] leading-relaxed">
              Licensed by the Maharashtra Home Department under PSARA. Mobile operational supervisors conduct regular night audits, emergency drills, and roll calls across all industrial corridors.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onInquire}
              className="inline-flex items-center justify-center w-full sm:w-auto space-x-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-[#0E3333] hover:bg-[#184545] text-white text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer shadow-xs font-['Outfit']"
            >
              <span>Check deployment availability for your site</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

        {/* Full-Width Expansive Maharashtra Map Card - Subtle Curve on Mobile */}
        <div className="w-full bg-[#0E3333] rounded-xl sm:rounded-[44px] p-4.5 sm:p-8 lg:p-14 text-white relative overflow-hidden shadow-lg border border-[#174545]">
          
          {/* Top Bar inside Map Card - Hidden on mobile to prevent horizontal scrolling and clean up layout */}
          <div className="hidden sm:flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 sm:pb-6 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#A1C6B4] shrink-0" />
              <span className="text-xs sm:text-sm font-medium tracking-wider text-[#DFEAE3] font-['Outfit']">
                Statewide PSARA Jurisdiction &bull; Full Industrial Network
              </span>
            </div>

            {/* Quick Zone Navigation Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto py-1">
              {MAHARASHTRA_REGIONS.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveRegion(idx)}
                  onMouseEnter={() => setHoveredNode(idx)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all font-['Outfit'] cursor-pointer shrink-0 ${
                    displayRegion === idx
                      ? 'bg-[#A1C6B4] text-[#0E3333] font-semibold shadow-xs'
                      : 'bg-white/10 text-slate-200 hover:bg-white/20'
                  }`}
                >
                  {item.region.split(' ')[0]}
                </button>
              ))}
              <span className="text-xs font-mono font-medium bg-white/15 px-3 py-1.5 rounded-full text-slate-200 ml-1 hidden md:inline-block shrink-0">
                Maharashtra Licensed
              </span>
            </div>
          </div>

          {/* Expanded Wide SVG Map Representation of Maharashtra */}
          <div className="relative py-8 sm:py-12 flex items-center justify-center">
            <svg
              viewBox="0 0 720 440"
              className="w-full h-auto max-h-[460px] sm:max-h-[520px] lg:max-h-[560px] filter drop-shadow-lg select-none mx-auto"
              aria-label="Expansive Maharashtra Service Map"
            >
              {/* Subtle background radar circles centered on Pune */}
              <circle cx="250" cy="270" r="160" fill="none" stroke="#5B8B77" strokeWidth="1" strokeDasharray="4 6" opacity="0.15" />
              <circle cx="250" cy="270" r="260" fill="none" stroke="#5B8B77" strokeWidth="1" strokeDasharray="4 6" opacity="0.1" />

              {/* State Boundary Polygon (Wider, Centered Layout) */}
              <path
                d="M 160,130 
                   L 230,90 
                   L 350,70 
                   L 470,95 
                   L 580,110 
                   L 610,160 
                   L 580,240 
                   L 520,310 
                   L 420,350 
                   L 320,410 
                   L 250,390 
                   L 200,330 
                   L 170,270 
                   L 150,210 
                   Z"
                fill="#174545"
                stroke="#5B8B77"
                strokeWidth="2.5"
                className="transition-all duration-300 hover:fill-[#1b4d4d]"
              />

              {/* Operational Connective Network Corridors */}
              <path
                d="M 180,220 L 250,270 L 350,200 L 530,160"
                stroke="#A1C6B4"
                strokeWidth="2"
                strokeDasharray="5 5"
                opacity="0.75"
              />
              <path
                d="M 250,160 L 250,270 L 270,360"
                stroke="#A1C6B4"
                strokeWidth="1.75"
                strokeDasharray="4 4"
                opacity="0.6"
              />
              <path
                d="M 350,200 L 270,360"
                stroke="#ffffff"
                strokeWidth="1"
                strokeDasharray="3 3"
                opacity="0.25"
              />

              {/* Interactive Hub Nodes */}
              {hubNodes.map((node) => {
                const isSelected = activeRegion === node.idx;
                const isHovered = hoveredNode === node.idx;
                return (
                  <g
                    key={node.idx}
                    className="cursor-pointer"
                    onClick={() => setActiveRegion(node.idx)}
                    onMouseEnter={() => setHoveredNode(node.idx)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    {/* Generous invisible hit-area that never shifts or resizes, preventing hover flicker/stutter */}
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r="28"
                      fill="transparent"
                      className="cursor-pointer"
                    />

                    {/* HQ Animated Radar Ping (pointer-events-none prevents event jitter) */}
                    {node.isHQ && (
                      <circle
                        cx={node.cx}
                        cy={node.cy}
                        r="22"
                        fill="#A1C6B4"
                        fillOpacity="0.2"
                        className="animate-ping pointer-events-none"
                      />
                    )}

                    {/* Selection / Hover Ambient Glow Aura */}
                    {(isSelected || isHovered) && (
                      <circle
                        cx={node.cx}
                        cy={node.cy}
                        r={node.isHQ ? 20 : 16}
                        fill="#A1C6B4"
                        fillOpacity={isSelected ? 0.35 : 0.22}
                        className="pointer-events-none transition-all duration-300"
                      />
                    )}

                    {/* Main Hub Node Dot: Radius transitions cleanly without CSS transform scale */}
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r={node.isHQ ? (isHovered ? 12 : 10) : (isSelected ? 9.5 : (isHovered ? 9 : 7))}
                      fill={node.isHQ ? "#A1C6B4" : (isSelected || isHovered ? "#A1C6B4" : "#ffffff")}
                      stroke="#0E3333"
                      strokeWidth={2.5}
                      className="pointer-events-none transition-all duration-200 ease-out"
                    />

                    {/* City / Hub Text Label */}
                    <text
                      x={node.cx}
                      y={node.cy + (node.cy > 300 ? -18 : 28)}
                      textAnchor="middle"
                      fill={isSelected || isHovered ? "#A1C6B4" : "#ffffff"}
                      fontSize={node.isHQ ? "14" : (isSelected || isHovered ? "13" : "12")}
                      fontWeight={node.isHQ || isSelected || isHovered ? "600" : "500"}
                      className="pointer-events-none transition-colors duration-200 drop-shadow-sm font-['Outfit'] select-none"
                    >
                      {node.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Bottom Interactive Detail Strip & Legend */}
          <div className="pt-5 sm:pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-[#DFEAE3] font-['Outfit']">
            
            {/* Active Hub Detail Information */}
            <div className="flex items-center space-x-2.5 bg-white/5 border border-white/10 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl w-full sm:w-auto">
              <MapPin className="w-4 h-4 text-[#A1C6B4] shrink-0" />
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="font-semibold text-white">
                  {MAHARASHTRA_REGIONS[displayRegion]?.region}
                </span>
                <span className="text-[#A1C6B4]">
                  &bull; {MAHARASHTRA_REGIONS[displayRegion]?.hub}
                </span>
                <span className="bg-[#A1C6B4]/20 text-[#A1C6B4] text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 rounded-full font-medium">
                  {MAHARASHTRA_REGIONS[displayRegion]?.coverage}
                </span>
              </div>
            </div>

            {/* Map Legend */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-[#DFEAE3]">
              <span className="flex items-center">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#A1C6B4] mr-1.5 sm:mr-2 shrink-0"></span>
                HQ (Pune)
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white mr-1.5 sm:mr-2 shrink-0"></span>
                Regional Hubs
              </span>
              <span className="flex items-center">
                <span className="w-3.5 h-0.5 border-t border-dashed border-[#A1C6B4] mr-1.5 sm:mr-2 shrink-0"></span>
                Patrol Corridors
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
