import React from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { Hero } from './components/Hero';
import { Specialities } from './components/Specialities';
import { ProcessFlow } from './components/ProcessFlow';
import { AarogyaHero } from './components/AarogyaHero';
import { AppointmentForm } from './components/AppointmentForm';
import { WhyHospiOne } from './components/WhyHospiOne';
import { DownloadApp } from './components/DownloadApp';
import { ConsultationBanner } from './components/ConsultationBanner';
import { BlogSection } from './components/BlogSection';
import { AboutHospiOne } from './components/AboutHospiOne';
import { SurgeonBanner } from './components/SurgeonBanner';
import { EventsSection } from './components/EventsSection';
import { Testimonials } from './components/Testimonials';
import { DirectoryLinks } from './components/DirectoryLinks';
import { Footer } from './components/Footer';
import { AuthProvider } from './context/AuthContext';
import { LoginModal } from './components/auth/LoginModal';

function App() {
  return (
    <AuthProvider>
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <TopBar />
      <Header />
      <CategoryNav />
      <main>
        <Hero />
        <Specialities />
        <ProcessFlow />
        <AarogyaHero />
        <AppointmentForm />
        <WhyHospiOne />
        <DownloadApp />
        <ConsultationBanner />
        <BlogSection />
        <AboutHospiOne />
        <SurgeonBanner />
        <EventsSection />
        <Testimonials />
        <DirectoryLinks />
      </main>
      
      <Footer />
    <LoginModal />
      </div>
    </AuthProvider>
  );
}

export default App;
