/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { TRAVEL_MODES, DESTINATIONS, TRADITIONAL_DISHES } from '../data';
import { TripCalculatorState } from '../types';
import { Compass, Users, Star, Trees, Camera, Compass as CompassIcon, MapPin, ChevronRight, MessageCircle } from 'lucide-react';

interface Props {
  selectedDishIds: string[];
  onToggleDish: (id: string) => void;
}

export default function ThemeSelector({ selectedDishIds, onToggleDish }: Props) {
  // Trip planning calculator states
  const [calculator, setCalculator] = useState<TripCalculatorState>({
    travelModeId: 'heritage',
    destinationId: 'none',
    travelersCount: 4,
    tierIndex: 1, // Premium is default focus
    accommodationType: 'luxury',
    selectedDishes: selectedDishIds,
    jeepSafariSelected: true,
    hdPhotographySelected: true,
    localGuideSelected: false,
  });

  // Get active travel mode
  const activeMode = useMemo(() => {
    return TRAVEL_MODES.find((m) => m.id === calculator.travelModeId) || TRAVEL_MODES[0];
  }, [calculator.travelModeId]);

  // Handle travel mode change
  const handleModeChange = (id: string) => {
    setCalculator((prev) => ({
      ...prev,
      travelModeId: id,
      tierIndex: 1, // reset to premium default
    }));
  };

  const selectedTier = useMemo(() => {
    return activeMode.tierOptions[calculator.tierIndex] || activeMode.tierOptions[0];
  }, [activeMode, calculator.tierIndex]);

  // Compute pricing values dynamically
  const calculations = useMemo(() => {
    const base = activeMode.basePrice;
    
    // Tier costs per tourist
    const tierCostPerPerson = selectedTier.price;
    const tierTotal = tierCostPerPerson * calculator.travelersCount;
    
    // Gastronomy package selection
    const gastronomyCostPerPlate = TRADITIONAL_DISHES
      .filter((d) => selectedDishIds.includes(d.id))
      .reduce((acc, current) => acc + current.pricePerPlate, 0);
    const gastronomyTotal = gastronomyCostPerPlate * calculator.travelersCount;

    // Optional additional scenic destination getaway
    let additionalDestCost = 0;
    if (calculator.destinationId !== 'none') {
      const dest = DESTINATIONS.find((d) => d.id === calculator.destinationId);
      if (dest) {
        additionalDestCost = dest.basePricePerTourist * calculator.travelersCount;
      }
    }

    // Custom activities add-ons
    const jeepSafariCost = calculator.jeepSafariSelected ? (4500 * calculator.travelersCount) : 0;
    const photographyCost = calculator.hdPhotographySelected ? 12000 : 0;
    const localGuideCost = calculator.localGuideSelected ? 8000 : 0;

    const subtotal = base + tierTotal + gastronomyTotal + additionalDestCost + jeepSafariCost + photographyCost + localGuideCost;
    const serviceFee = Math.round(subtotal * 0.05); // 5% Standard Service Fee
    const total = subtotal + serviceFee;

    return {
      base,
      tierCostPerPerson,
      tierTotal,
      gastronomyCostPerPlate,
      gastronomyTotal,
      additionalDestCost,
      jeepSafariCost,
      photographyCost,
      localGuideCost,
      subtotal,
      serviceFee,
      total
    };
  }, [activeMode, selectedTier, calculator, selectedDishIds]);

  const selectedDestinationName = useMemo(() => {
    if (calculator.destinationId === 'none') return '';
    return DESTINATIONS.find((d) => d.id === calculator.destinationId)?.name || '';
  }, [calculator.destinationId]);

  // Generate Booking WhatsApp text
  const getBookingWhatsAppLink = () => {
    const dishCount = selectedDishIds.length;
    const textBase = `Hi, I want guidance for planning a Premium Indian Holiday Celebration! Here are my custom planner choices:

🌲 *Theme Theme*: ${activeMode.name} (${activeMode.tamilName})
🌟 *Service Tier*: ${selectedTier.name} (₹${selectedTier.price}/person)
👥 *Travel Group*: ${calculator.travelersCount} Travelers
🍽️ *Native Food trails*: Selected ${dishCount} traditional feast items
✈️ *Extra Corridor Getaway*: ${selectedDestinationName || 'None'}
🌋 *Jeep Safari Excursion*: ${calculator.jeepSafariSelected ? 'Yes' : 'No'}
📷 *HD Drones & Photoshoot*: ${calculator.hdPhotographySelected ? 'Yes' : 'No'}
🗺️ *Certified Native Guide*: ${calculator.localGuideSelected ? 'Yes' : 'No'}
💰 *Grand Package Total*: ₹${calculations.total.toLocaleString('en-IN')}

Please share itinerary details and available booking slots!`;

    return `https://wa.me/9080746103?text=${encodeURIComponent(textBase)}`;
  };

  return (
    <section id="budget-planner" className="py-24 bg-maroon-900/10 px-6 relative overflow-hidden">
      
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-gold-300 uppercase block mb-3">
            Exploration Cost Estimator
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gold-100 tracking-tight">
            Tailor Your Custom Journey &amp; Estimator
          </h2>
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4" />
          <p className="mt-4 text-gold-100/60 max-w-2xl mx-auto font-sans font-light text-sm sm:text-base">
            Configure your dream holiday mode, scale accommodations, handpick regional food trials, and inspect your itemized pricing receipt before chatting live with our curators.
          </p>
        </div>

        {/* Master Double-Column Flex */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Inputs Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Ceremony Style */}
            <div className="bg-maroon-900/15 border border-gold-500/15 p-6 rounded-xl relative">
              <div className="absolute top-4 right-4 text-gold-400 font-mono text-xs">Step 01</div>
              <h3 className="font-serif text-lg sm:text-xl text-gold-200 font-bold mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-gold-400" />
                <span>Select Your Journey Category Theme</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TRAVEL_MODES.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => handleModeChange(mode.id)}
                    className={`p-4 rounded text-left border transition-all flex flex-col justify-between h-28 cursor-pointer ${
                      calculator.travelModeId === mode.id
                        ? 'border-gold-300 bg-gold-400/10 shadow-lg shadow-gold-500/5'
                        : 'border-gold-500/10 hover:border-gold-500/20 text-gold-100/60'
                    }`}
                  >
                    <div>
                      <span className="text-sm font-serif font-semibold block text-gold-100">{mode.name}</span>
                      <span className="text-[10px] text-gold-400 mt-1 uppercase tracking-wide block leading-none font-mono">
                        ({mode.tamilName})
                      </span>
                    </div>
                    <span className="text-xs text-gold-100/50 leading-relaxed font-light line-clamp-2 mt-2">
                      {mode.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Tent & Mandap Decor */}
            <div className="bg-maroon-900/15 border border-gold-500/15 p-6 rounded-xl relative">
              <div className="absolute top-4 right-4 text-gold-400 font-mono text-xs">Step 02</div>
              <h3 className="font-serif text-lg sm:text-xl text-gold-200 font-bold mb-4">
                Expedition & Accommodation Level Tiers
              </h3>
              <div className="space-y-3">
                {activeMode.tierOptions.map((opt, idx) => (
                  <div
                    key={idx}
                    onClick={() => setCalculator((prev) => ({ ...prev, tierIndex: idx }))}
                    className={`p-4 rounded-lg border cursor-pointer transition-all flex justify-between items-center ${
                      calculator.tierIndex === idx
                        ? 'border-gold-400 bg-gold-400/10 shadow-[0_0_12px_rgba(197,129,30,0.1)]'
                        : 'border-gold-500/10 hover:border-gold-500/20'
                    }`}
                  >
                    <div className="pr-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm sm:text-base font-serif font-bold text-gold-100">{opt.name}</span>
                        <span className="text-xs text-gold-400 font-mono">({opt.tamilName})</span>
                      </div>
                      <p className="text-xs text-gold-100/60 mt-1 font-sans font-light leading-relaxed">
                        {opt.description}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-gold-300 font-mono font-bold text-sm sm:text-base">₹{opt.price.toLocaleString('en-IN')}</span>
                      <span className="text-[10px] text-gold-100/40 block">/ Traveler</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Scale & Catering count */}
            <div className="bg-maroon-900/15 border border-gold-500/15 p-6 rounded-xl relative">
              <div className="absolute top-4 right-4 text-gold-400 font-mono text-xs">Step 03</div>
              <h3 className="font-serif text-lg sm:text-xl text-gold-200 font-bold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-gold-400" />
                <span>Group Size & Scale</span>
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-gold-100/70">Number of Travelers in party:</span>
                  <span className="px-4 py-1.5 bg-black/40 border border-gold-400/30 font-mono font-bold text-gold-300 text-lg rounded">
                    {calculator.travelersCount} <span className="text-xs text-gold-100/50">TRAVELERS</span>
                  </span>
                </div>
                {/* slider */}
                <input
                  type="range"
                  min="1"
                  max="25"
                  step="1"
                  value={calculator.travelersCount}
                  onChange={(e) => setCalculator((prev) => ({ ...prev, travelersCount: parseInt(e.target.value) }))}
                  className="w-full accent-gold-400 cursor-pointer h-2 bg-maroon-950 rounded-lg outline-none"
                />
                <div className="flex justify-between text-[10px] text-gold-100/40 font-mono">
                  <span>1 (Solo Expedition)</span>
                  <span>25 (Large Cultural Group Caravan)</span>
                </div>
                
                {/* Alert regarding Gastronomy connection */}
                <div className="mt-4 bg-emerald-500/5 border border-emerald-500/15 rounded p-3 text-xs text-emerald-200/90 font-sans flex items-center justify-between">
                  <div>
                    <span className="block font-semibold text-emerald-300">Catering / Local Gastronomy Integration</span>
                    <span className="block mt-0.5 text-emerald-100/70 font-light leading-relaxed">
                      Your traditional banana leaf has <strong className="text-gold-300 font-mono">{selectedDishIds.length}</strong> native items selected. Gourmet costing scales automatically for {calculator.travelersCount} active travelers.
                    </span>
                  </div>
                  <a href="#banana-leaf-feast" className="text-gold-300 hover:underline font-mono text-[10px] whitespace-nowrap ml-4">
                    Modify Leaf Dishes &darr;
                  </a>
                </div>
              </div>
            </div>

            {/* Step 4: Honeymoon & Travel Destination Extension (Optional) */}
            <div className="bg-maroon-900/15 border border-gold-500/15 p-6 rounded-xl relative">
              <div className="absolute top-4 right-4 text-gold-400 font-mono text-xs">Step 04</div>
              <h3 className="font-serif text-lg sm:text-xl text-gold-200 font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gold-400" />
                <span>Add Extra Destination Sightseeing Corridor (Optional)</span>
              </h3>
              <div className="space-y-4">
                <label className="block text-xs font-mono text-gold-300 uppercase">Select multi-city getaway addition</label>
                <select
                  value={calculator.destinationId}
                  onChange={(e) => setCalculator((prev) => ({ ...prev, destinationId: e.target.value }))}
                  className="w-full bg-black/40 border border-gold-500/20 text-gold-100 px-4 py-3 rounded focus:outline-none focus:border-gold-400 text-sm font-sans"
                >
                  <option value="none">No extra city (Explore single route)</option>
                  {DESTINATIONS.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name} Scenic Multi-City ({d.state}) — ₹{d.basePricePerTourist.toLocaleString('en-IN')}/tourist
                    </option>
                  ))}
                </select>
                <p className="text-xs text-gold-100/50 leading-relaxed font-light font-sans">
                  *Adding an extra destination corridor bundles luxury airport/train shuttle transits, boutique native hotels bookings, and private photography walk permissions seamlessly into your estimation.
                </p>
              </div>
            </div>

            {/* Step 5: Elite Custom Add-ons */}
            <div className="bg-maroon-900/15 border border-gold-500/15 p-6 rounded-xl relative">
              <div className="absolute top-4 right-4 text-gold-400 font-mono text-xs">Step 05</div>
              <h3 className="font-serif text-lg sm:text-xl text-gold-200 font-bold mb-4">
                Bespoke Activities &amp; Tour Support
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Add-on 1: Jeep Safari */}
                <div
                  onClick={() => setCalculator((prev) => ({ ...prev, jeepSafariSelected: !prev.jeepSafariSelected }))}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    calculator.jeepSafariSelected ? 'border-gold-400 bg-gold-400/5 text-gold-300' : 'border-gold-500/10 text-gold-100/40'
                  }`}
                >
                  <Trees className="w-5 h-5 mb-2 text-emerald-400" />
                  <span className="block text-xs font-mono uppercase font-bold text-gold-100/90">Jeep Safari</span>
                  <span className="block text-[10px] mt-1 font-serif text-gold-400">4x4 Mountain Rides</span>
                  <span className="block text-xs font-mono font-bold mt-2">₹4,500 / Tourist</span>
                </div>

                {/* Add-on 2: Cinematic Photography */}
                <div
                  onClick={() => setCalculator((prev) => ({ ...prev, hdPhotographySelected: !prev.hdPhotographySelected }))}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    calculator.hdPhotographySelected ? 'border-gold-400 bg-gold-400/5 text-gold-300' : 'border-gold-500/10 text-gold-100/40'
                  }`}
                >
                  <Camera className="w-5 h-5 mb-2 text-gold-400" />
                  <span className="block text-xs font-mono uppercase font-bold text-gold-100/90">Cinematography</span>
                  <span className="block text-[10px] mt-1 font-serif text-gold-400">Drone & Photoshoot</span>
                  <span className="block text-xs font-mono font-bold mt-2">₹12,000 (Flat Fee)</span>
                </div>

                {/* Add-on 3: Certified Native Guide */}
                <div
                  onClick={() => setCalculator((prev) => ({ ...prev, localGuideSelected: !prev.localGuideSelected }))}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    calculator.localGuideSelected ? 'border-gold-400 bg-gold-400/5 text-gold-300' : 'border-gold-500/10 text-gold-100/40'
                  }`}
                >
                  <CompassIcon className="w-5 h-5 mb-2 text-cyan-400" />
                  <span className="block text-xs font-mono uppercase font-bold text-gold-100/90">Native Guide</span>
                  <span className="block text-[10px] mt-1 font-serif text-gold-400">Multilingual Captain</span>
                  <span className="block text-xs font-mono font-bold mt-2">₹8,000 (Flat Fee)</span>
                </div>

              </div>
            </div>

          </div>

          {/* Bill Invoice Column - Grand Gold-Parchment Scroll (5 cols) */}
          <div className="lg:col-span-5 sticky top-8">
            <div className="bg-[#fcf8ef] text-amber-950 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 border-4 border-gold-200 relative animate-fade-in-up">
              
              {/* Paper roll style details */}
              <div className="absolute top-0 inset-x-0 h-4 bg-gold-200/50" />
              
              {/* Traditional watermark symbol */}
              <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
                <span className="text-8xl font-serif">ॐ</span>
              </div>

              <div className="text-center pb-6 border-b-2 border-dashed border-amber-900/15">
                <span className="text-[10px] font-mono tracking-widest text-[#a76515] uppercase font-bold block mb-1">Receipt Summary</span>
                <h4 className="font-serif text-2xl font-black text-amber-950">Grand Exploration Ticket</h4>
                <div className="text-[10px] text-amber-900/60 font-mono mt-1">Generated: Real-Time Planner</div>
              </div>

              {/* Line items list */}
              <div className="py-6 space-y-4 font-sans text-sm border-b-2 border-dashed border-amber-900/15">
                
                {/* 1. Base Journey Cost */}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-amber-900 font-bold">{activeMode.name} Base Config:</span>
                  <span className="font-mono font-medium">₹{calculations.base.toLocaleString('en-IN')}</span>
                </div>

                {/* 2. Package Tier choice */}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-amber-950 block font-bold">
                    {selectedTier.name} Tier Option:
                    <span className="text-[10px] font-sans text-amber-905 block font-normal">
                      ₹{calculations.tierCostPerPerson.toLocaleString('en-IN')} x {calculator.travelersCount} travelers
                    </span>
                  </span>
                  <span className="font-mono text-amber-950 font-bold">₹{calculations.tierTotal.toLocaleString('en-IN')}</span>
                </div>

                {/* 3. Gastronomy */}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-amber-950 block font-bold">
                    Traditional Feast ({selectedDishIds.length} items chosen):
                    <span className="text-[10px] font-sans text-amber-900/60 block font-normal">
                      {calculations.gastronomyCostPerPlate > 0 ? `₹${calculations.gastronomyCostPerPlate} plate value x ${calculator.travelersCount} travelers` : 'No dishes chosen'}
                    </span>
                  </span>
                  <span className="font-mono">₹{calculations.gastronomyTotal.toLocaleString('en-IN')}</span>
                </div>

                {/* 4. Additional Destination Getaway if any */}
                {calculations.additionalDestCost > 0 && (
                  <div className="flex justify-between items-center text-xs bg-emerald-500/5 p-2 rounded">
                    <span className="text-emerald-950 block font-bold">
                      🏞️ Route corridor addition: {selectedDestinationName}:
                      <span className="text-[10px] font-sans text-emerald-800/80 block font-normal">
                        Boutique stays & guide fee x {calculator.travelersCount} travelers
                      </span>
                    </span>
                    <span className="font-mono text-emerald-950 font-bold">₹{calculations.additionalDestCost.toLocaleString('en-IN')}</span>
                  </div>
                )}

                {/* 5. Activities Add-ons */}
                {(calculator.jeepSafariSelected || calculator.hdPhotographySelected || calculator.localGuideSelected) && (
                  <div className="pt-2 border-t border-amber-900/10">
                    <span className="text-[10px] font-mono tracking-wider text-[#a76515] uppercase font-bold block mb-1">Tailored Activities Package:</span>
                    <div className="space-y-1.5 pl-2 text-xs">
                      {calculator.jeepSafariSelected && (
                        <div className="flex justify-between text-amber-900">
                          <span>🌋 High Elevation 4x4 Jeep Safaris</span>
                          <span className="font-mono">₹{calculations.jeepSafariCost.toLocaleString('en-IN')}</span>
                        </div>
                      )}
                      {calculator.hdPhotographySelected && (
                        <div className="flex justify-between text-amber-900">
                          <span>📷 Cinematic Photos &amp; Drone clips</span>
                          <span className="font-mono">₹12,000</span>
                        </div>
                      )}
                      {calculator.localGuideSelected && (
                        <div className="flex justify-between text-amber-900">
                          <span>🗺️ Multilingual Native Expert Captain</span>
                          <span className="font-mono">₹8,000</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

              </div>

              {/* Summary Calculations */}
              <div className="py-6 space-y-2">
                <div className="flex justify-between text-xs text-amber-900/70 font-mono">
                  <span>Gross Subtotal:</span>
                  <span>₹{calculations.subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-xs text-amber-900/70 font-mono">
                  <span>Standard Service &amp; Booking Fee (5%):</span>
                  <span>₹{calculations.serviceFee.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-baseline pt-4 text-amber-950">
                  <span className="font-serif text-sm sm:text-base font-black uppercase">Grand package price:</span>
                  <span className="font-serif text-3xl font-black text-[#881337] tracking-tight">
                    ₹{calculations.total.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* WhatsApp instant scheduler */}
              <div className="mt-4">
                <a
                  href={getBookingWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-sans font-bold uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>Explore &amp; Book via WhatsApp</span>
                </a>
                <span className="text-[10px] text-amber-900/50 uppercase text-center block tracking-wide mt-3 font-mono font-medium">
                  Guaranteed 24-Hour Premium Response
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
