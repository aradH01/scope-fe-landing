import React from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import FeatureGallery from '../components/landing/FeatureGallery';
import ExpectationGap from '../components/landing/ExpectationGap';
import PricingTiers from '../components/landing/PricingTiers';
import SocialProof from '../components/landing/SocialProof';
import CTASection from '../components/landing/CTASection';
import Footer from '../components/landing/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <Hero />
      <FeatureGallery />
      <ExpectationGap />
      <PricingTiers />
      <SocialProof />
      <CTASection />
      <Footer />
    </div>
  );
}
