import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroTeamImage from '../assets/images/hero_security_team_1788679287378.jpg';
import accessControlImage from '../assets/images/security_access_control_1788679343058.jpg';
import trainingDrillImage from '../assets/images/security_training_drill_1788679327546.jpg';

interface OperationalInsightsProps {
  onArticleClick?: () => void;
}

export const OperationalInsights: React.FC<OperationalInsightsProps> = ({ onArticleClick }) => {
  const articles = [
    {
      image: trainingDrillImage,
      title: 'Back with military rigor – How regimented daily drills maintain peak vigilance at industrial corridors',
      date: 'Written on September 4, 2026',
      tag: 'Training Standard'
    },
    {
      image: accessControlImage,
      title: 'Zero post abandonment – Why prompt replacement guarantees protect critical facilities & residential societies',
      date: 'Written on August 28, 2026',
      tag: 'Operations'
    },
    {
      image: heroTeamImage,
      title: 'Under unified command across Maharashtra – Integrating physical guarding with modern access & facility logistics',
      date: 'Written on August 25, 2026',
      tag: 'Strategy'
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="w-full">
        
        {/* Header Row Matching Reference */}
        <div className="flex flex-row items-baseline justify-between mb-8 sm:mb-12 gap-3">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-[#0E3333] tracking-tight font-['Outfit']">
            Current events right now
          </h2>

          <button
            onClick={onArticleClick}
            className="inline-flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-base font-normal text-[#0E3333] hover:text-[#5B8B77] transition-colors cursor-pointer font-['Outfit'] shrink-0"
          >
            <span>See all updates</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* 3-Column Card Grid Matching Reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {articles.map((item, index) => (
            <div
              key={index}
              onClick={onArticleClick}
              className="group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Rounded Photo */}
                <div className="relative rounded-[20px] sm:rounded-[28px] overflow-hidden aspect-16/10 bg-[#DFEAE3] mb-4 sm:mb-6 shadow-xs">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Article Title */}
                <h3 className="text-base sm:text-xl font-normal text-[#0E3333] leading-snug group-hover:text-[#184545] transition-colors font-['Outfit']">
                  {item.title}
                </h3>
              </div>

              {/* Date String at Bottom */}
              <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-[#3D5A59]/80 font-['Outfit']">
                {item.date}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
