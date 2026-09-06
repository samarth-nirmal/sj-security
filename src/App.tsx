import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { ServicesSection } from './components/ServicesSection';
import { ModelAdvantages } from './components/ModelAdvantages';
import { OperationalInsights } from './components/OperationalInsights';
import { TrainingSection } from './components/TrainingSection';
import { ComplianceSection } from './components/ComplianceSection';
import { MaharashtraMap } from './components/MaharashtraMap';
import { ContactSection } from './components/ContactSection';
import { FollowOurJourney } from './components/FollowOurJourney';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>('');

  const handleOpenModal = (serviceTitle: string = '') => {
    setSelectedServiceForModal(serviceTitle);
    setModalOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerOffset = 72;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0E3333] flex flex-col font-['Outfit'] selection:bg-[#DFEAE3] selection:text-[#0E3333]">
      {/* Sticky Header - Exact Sparc Minimalist Architecture */}
      <Navbar onRequestConsultation={() => handleOpenModal()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Full-screen Hero Section */}
        <Hero
          onContactClick={() => handleScrollToSection('contact')}
          onExploreServices={() => handleScrollToSection('services')}
          onRequestConsultation={() => handleOpenModal()}
        />

        {/* Content sections framed with generous margins on both sides */}
        <div className="px-4 sm:px-10 md:px-16 lg:px-24 xl:px-36 2xl:px-48 space-y-10 sm:space-y-16 lg:space-y-24 my-6 sm:my-14">
          {/* Overview & 4 Key Metrics Card - Image 1 */}
          <TrustStats />

          {/* Business Areas (Services) - Image 2 */}
          <ServicesSection onSelectService={(serviceTitle) => handleOpenModal(serviceTitle)} />

          {/* Advantages of the SJ Security Model - Image 3 */}
          <ModelAdvantages onRequestConsultation={() => handleOpenModal()} />

          {/* Current Events Right Now (Field Operations & Insights) - Image 4 */}
          <OperationalInsights onArticleClick={() => handleOpenModal('Operational Inquiry')} />

          {/* Training Academy & Standards */}
          <TrainingSection />

          {/* Compliance & Statutory Obligations (Official PSARA & Labor Laws) */}
          <ComplianceSection />

          {/* Serving Across Maharashtra Map */}
          <MaharashtraMap onInquire={() => handleOpenModal()} />

          {/* Operational Command Desk & Callback Inquiry */}
          <ContactSection onRequestConsultation={() => handleOpenModal()} />
        </div>
      </main>

      {/* Follow Our Journey Banner - Full Size, Edge-to-Edge with No Margin */}
      <FollowOurJourney />

      {/* Institutional Footer - Image 5 */}
      <Footer />

      {/* Quick Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedServiceForModal}
      />
    </div>
  );
}
