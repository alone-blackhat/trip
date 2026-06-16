/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import Banner from './components/Banner';
import VehicleJourney from './components/VehicleJourney';
import DestinationsGrid from './components/DestinationsGrid';
import CateringVisualizer from './components/CateringVisualizer';
import TravelTicketDesigner from './components/TravelTicketDesigner';
import ThemeSelector from './components/ThemeSelector';
import Scroll3DContainer from './components/Scroll3DContainer';
import WhatsAppFloating from './components/WhatsAppFloating';
import { TRADITIONAL_DISHES } from './data';
import { Compass, Shield, Award, MessageCircle, Star } from 'lucide-react';

export default function App() {
  // Sync state for traditional buffet selections
  const [selectedDishIds, setSelectedDishIds] = useState<string[]>(
    TRADITIONAL_DISHES.filter((d) => d.selectedByDefault).map((d) => d.id)
  );

  const handleToggleDish = (id: string) => {
    setSelectedDishIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // Prefilled standard WhatsApp query
  const standardWhatsAppUrl = `https://wa.me/9080746103?text=${encodeURIComponent(
    'Hi, I want premium guidance to visit beautiful places in India.'
  )}`;

  return (
    <div className="min-h-screen bg-maroon-950 text-gold-100 font-sans selection:bg-gold-500 selection:text-maroon-950 overflow-x-hidden">
      
      {/* Premium Floating Header */}
      <header id="app-header" className="sticky top-0 z-40 bg-maroon-950/80 backdrop-blur-md border-b border-gold-500/15 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-gold-400 animate-pulse" />
          <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-gold-100">
            Namma Ooru <span className="text-gold-300 font-serif font-light">&amp; Payanam</span>
          </span>
        </div>
        <nav id="header-nav" className="hidden lg:flex items-center gap-6 font-mono text-xs uppercase tracking-wider text-gold-100/75">
          <a href="#home" className="hover:text-gold-400 transition-colors">Welcome</a>
          <a href="#romantic-destinations" className="hover:text-gold-400 transition-colors">Destinations</a>
          <a href="#banana-leaf-feast" className="hover:text-gold-400 transition-colors">Banana Leaf</a>
          <a href="#budget-planner" className="hover:text-gold-400 transition-colors">Budget Scroll</a>
          <a href="#ticket-designer" className="hover:text-gold-400 transition-colors">Custom Passes</a>
          <a href="#why-choose" className="hover:text-gold-400 transition-colors">Why Choose Us</a>
        </nav>
        <div>
          <a
            href={standardWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-mono text-xs uppercase tracking-wider hover:from-emerald-500 rounded font-bold transition-all flex items-center gap-1.5"
            id="header-cta"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat Live</span>
          </a>
        </div>
      </header>

      {/* 1. Cinematic Banner */}
      <Banner />

      {/* 2. Interactive 3D Perspective Vehicle Scroll Journey */}
      <VehicleJourney />

      {/* 3. Featured Romantic Destinations Grid in 4K Experience */}
      <Scroll3DContainer>
        <DestinationsGrid />
      </Scroll3DContainer>

      {/* 3. Interactive South Indian Virtual Banana Leaf (Vazhailai Virundhu) */}
      <Scroll3DContainer>
        <CateringVisualizer selectedDishIds={selectedDishIds} onToggleDish={handleToggleDish} />
      </Scroll3DContainer>

      {/* 4. Elegant Custom Pass Designer Builder */}
      <Scroll3DContainer>
        <TravelTicketDesigner />
      </Scroll3DContainer>

      {/* 5. Real-Time Budget Estimator */}
      <Scroll3DContainer>
        <ThemeSelector selectedDishIds={selectedDishIds} onToggleDish={handleToggleDish} />
      </Scroll3DContainer>

      {/* 6. Why Choose This Guidance Service */}
      <section id="why-choose" className="py-24 bg-maroon-950 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent pointer-events-none" />
        <Scroll3DContainer className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center mb-16">
            <span className="text-xs font-mono tracking-[0.25em] text-gold-300 uppercase block mb-3">
              Elite Heritage Agency
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gold-100 tracking-tight">
              Why Choose Namma Ooru Payanam Guidance?
            </h2>
            <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4" />
          </div>

          <div id="why-choose-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div id="card-service-1" className="bg-maroon-900/10 border border-gold-500/10 p-6 rounded-xl hover:border-gold-300/40 transition-all text-center">
              <div className="w-12 h-12 rounded-full border border-gold-400 flex items-center justify-center p-2 mx-auto mb-4 bg-maroon-950/50">
                <Compass className="w-6 h-6 text-gold-300" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gold-200">Bespoke Local Curators</h3>
              <p className="text-xs text-gold-100/60 leading-relaxed font-sans font-light mt-2">
                We possess boots-on-the-ground native specialists from Kashmir to Kanyakumari. Avoid tourist traps and witness authentic scenery.
              </p>
            </div>

            <div id="card-service-2" className="bg-maroon-900/10 border border-gold-500/10 p-6 rounded-xl hover:border-gold-300/40 transition-all text-center">
              <div className="w-12 h-12 rounded-full border border-gold-400 flex items-center justify-center p-2 mx-auto mb-4 bg-maroon-950/50">
                <Shield className="w-6 h-6 text-gold-300" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gold-200">Certified Elite Safety</h3>
              <p className="text-xs text-gold-100/60 leading-relaxed font-sans font-light mt-2">
                Your journey and sacred travel setups are guided with vetted background-checked hospitality partners, safe private transport and 24/7 security buffers.
              </p>
            </div>

            <div id="card-service-3" className="bg-maroon-900/10 border border-gold-500/10 p-6 rounded-xl hover:border-gold-300/40 transition-all text-center">
              <div className="w-12 h-12 rounded-full border border-gold-400 flex items-center justify-center p-2 mx-auto mb-4 bg-maroon-950/50">
                <Star className="w-6 h-6 text-gold-300" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gold-200">The 4K Experience</h3>
              <p className="text-xs text-gold-100/60 leading-relaxed font-sans font-light mt-2">
                All accommodation venues, houseboats and visual mandaps follow rigorous audits guaranteeing ultra high-definition views, pristine sanitization, and royal standard treatment.
              </p>
            </div>

            <div id="card-service-4" className="bg-maroon-900/10 border border-gold-500/10 p-6 rounded-xl hover:border-gold-300/40 transition-all text-center">
              <div className="w-12 h-12 rounded-full border border-gold-400 flex items-center justify-center p-2 mx-auto mb-4 bg-maroon-950/50">
                <Award className="w-6 h-6 text-gold-300" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gold-200">Absolute Transparency</h3>
              <p className="text-xs text-gold-100/60 leading-relaxed font-sans font-light mt-2">
                Say goodbye to hidden commissions. View full itemized bill parameters using our scroll estimator and pay vendors directly with zero markup charges.
              </p>
            </div>

          </div>

        </Scroll3DContainer>
      </section>

      {/* 7. Travel Tips & Safety Guidance Section */}
      <section id="travel-safety-tips" className="py-24 bg-maroon-950/50 px-6 relative overflow-hidden">
        <Scroll3DContainer className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Block description */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono tracking-[0.25em] text-gold-300 uppercase block">Guidance & Compliance</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Essential Tourist Safety &amp; Trip Guidelines
              </h2>
              <p className="text-sm text-gold-100/70 leading-relaxed font-light font-sans">
                Premium excursions deserve clean, secure execution. Here are our high-priority safety guidelines developed in coordination with tourism networks and municipal travel cells.
              </p>
              
              <div id="accreditation-seal" className="border-t border-gold-500/20 pt-6 flex items-center gap-4">
                <div className="w-10 h-10 border border-gold-300/40 rounded flex items-center justify-center text-gold-300 font-mono text-xs font-black">
                  AST
                </div>
                <div>
                  <span className="block text-xs font-mono font-bold text-gold-100">National Tourism Regulated</span>
                  <span className="block text-[10px] text-gold-100/50">Certified traditional partner ID #9080-T</span>
                </div>
              </div>
            </div>

            {/* Right block: Accordion style visual card */}
            <div className="lg:col-span-7 bg-[#1c0409] border border-gold-400/20 rounded-2xl p-6 sm:p-8 space-y-6">
              
              <div id="tip-1" className="space-y-2 border-b border-gold-500/10 pb-4">
                <h4 className="font-serif text-base sm:text-lg font-bold text-gold-200 flex items-center gap-2">
                  <span className="text-xs font-mono text-gold-400 border border-gold-400/30 w-5 h-5 rounded-full flex items-center justify-center">1</span>
                  <span>Climatic Booking Windows</span>
                </h4>
                <p className="text-xs sm:text-sm text-gold-100/60 leading-relaxed pl-7">
                  Always align winter mountain bookings (Manali/Kashmir) early to secure passes before snowfall roadblocks. When booking Kerala houseboat packages, request high-grade rain insulation if planning in the forest monsoon season (June–August).
                </p>
              </div>

              <div id="tip-2" className="space-y-2 border-b border-gold-500/10 pb-4">
                <h4 className="font-serif text-base sm:text-lg font-bold text-gold-200 flex items-center gap-2">
                  <span className="text-xs font-mono text-gold-400 border border-gold-400/30 w-5 h-5 rounded-full flex items-center justify-center">2</span>
                  <span>Temples &amp; Native Dress Etiquettes</span>
                </h4>
                <p className="text-xs sm:text-sm text-gold-100/60 leading-relaxed pl-7">
                  Several heritage temples across South India require traditional respectful attire (sarees for women, veshtis or trousers for men) to gain inner-chamber entrance. We prepare clothing recommendations and local shopping resources in your boarding pack.
                </p>
              </div>

              <div id="tip-3" className="space-y-2 pb-2">
                <h4 className="font-serif text-base sm:text-lg font-bold text-gold-200 flex items-center gap-2">
                  <span className="text-xs font-mono text-gold-400 border border-gold-400/30 w-5 h-5 rounded-full flex items-center justify-center">3</span>
                  <span>Medical Buffers &amp; Oxygen Prep</span>
                </h4>
                <p className="text-xs sm:text-sm text-gold-100/60 leading-relaxed pl-7">
                  High-altitude destination travel like Gulmarg (Kashmir) or Solang valley (Himachal) requires a natural acclimatization phase of 12-24 hours. Our premium shuttle cabs carry fitted oxygen cylinders for emergency tourist use.
                </p>
              </div>

            </div>

          </div>

        </Scroll3DContainer>
      </section>

      {/* 8. Elegant Footer CTA section */}
      <footer id="app-footer" className="bg-[#0b0103] border-t border-gold-500/15 py-16 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#dfb768_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          
          <div className="flex flex-col items-center">
            <Compass className="w-8 h-8 text-gold-400 animate-pulse mb-3" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-gold-100">
              Embark on Your Premium Journey
            </h2>
            <p className="text-xs sm:text-sm text-gold-100/60 max-w-lg mt-3 leading-relaxed">
              Envision luxury sights, high-resolution photo adventures or customize your road trip itineraries with premium WhatsApp guidance from our expert curators.
            </p>
          </div>

          <div id="footer-buttons" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={standardWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-sans font-semibold rounded-lg shadow-md transition-all flex items-center justify-center gap-2 text-sm"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>Connect on WhatsApp (+9080746103)</span>
            </a>
          </div>

          <div id="copyright-text" className="border-t border-gold-500/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gold-100/40 font-mono gap-4">
            <div>
              &copy; 2026 Namma Ooru Payanam Co. All Rights Reserved. South Indian &amp; Regional Heritage.
            </div>
            <div className="flex gap-4">
              <a href="#romantic-destinations" className="hover:text-gold-200">Destinations</a>
              <a href="#banana-leaf-feast" className="hover:text-gold-200">Banana Feast</a>
              <a href="#budget-planner" className="hover:text-gold-200">Estimator</a>
            </div>
          </div>

        </div>
      </footer>

      {/* 9. Floating Contact Trigger */}
      <WhatsAppFloating />

    </div>
  );
}
