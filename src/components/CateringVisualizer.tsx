/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TRADITIONAL_DISHES, traditionalFeast } from '../data';
import { TraditionalDish } from '../types';
import { UtensilsCrossed, CheckCircle, Info, Flame, CircleAlert } from 'lucide-react';

interface Props {
  selectedDishIds: string[];
  onToggleDish: (id: string) => void;
}

export default function CateringVisualizer({ selectedDishIds, onToggleDish }: Props) {
  const [activeCategory, setActiveCategory] = useState<'welcome' | 'main' | 'sides' | 'dessert'>('main');

  // Group dishes by category
  const categories = {
    welcome: { label: 'Welcome Drinks', tamilName: 'வரவேற்பு பானங்கள்' },
    main: { label: 'Main Grains', tamilName: 'பிரதான உணவுகள்' },
    sides: { label: 'Vegetable Sides & Vada', tamilName: 'கூட்டு வகைகள்' },
    dessert: { label: 'Royal Sweets', tamilName: 'இனிப்புகள்' },
  };

  // Get coordinate placement on the banana leaf relative to standard serving traditions
  // Traditional Tamil leaf layout:
  // - Top half (from left to right): Salt, Pickle, Ginger, Vadai, Side dishes/Subzis
  // - Bottom half (centered): Rice, Sambar, Rasam, Payasam, Appalam
  // - Left corner: Sweets
  const getDishPlacementClass = (dishId: string) => {
    switch (dishId) {
      case 'beverage-1': return 'top-4 left-[20%]'; // Saffron Panagam
      case 'beverage-2': return 'top-4 left-[40%]'; // Elaneer Payasam
      case 'side-3': return 'top-10 left-[10%]';   // Medu Vadai
      case 'side-1': return 'top-10 left-[60%]';   // Chettinad Potatoes
      case 'side-2': return 'top-10 left-[75%]';   // Thirunelveli Sodhi
      case 'side-4': return 'top-10 left-[48%]';   // Kalyana Sambar
      case 'main-1': return 'bottom-8 left-[35%]';  // Ghee Pongal
      case 'main-2': return 'bottom-8 left-[55%]';  // Thanga Samba Rice
      case 'sweet-1': return 'bottom-12 left-[15%]'; // Mysore Pak
      case 'sweet-2': return 'bottom-12 left-[78%]'; // Jigarthanda
      default: return 'bottom-8 left-[50%]';
    }
  };

  return (
    <section id="banana-leaf-feast" className="py-24 bg-maroon-900/10 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-gold-300 uppercase block mb-3">
            Gourmet Cultural Heritage Trails
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gold-100 tracking-tight">
            Namma Ooru Native Gastronomy & Feast Trails
          </h2>
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4" />
          <p className="mt-4 text-gold-100/60 max-w-2xl mx-auto font-sans font-light text-sm sm:text-base">
            Savor the rich heritage and intense culinary chemistry of Southern India. Customize your authentic, multi-course traditional banana leaf banquet to explore regional spices, fresh palm nectars, and golden-fried crispy native grains served on clean leaf trails.
          </p>
        </div>

        {/* Layout split: Controls on left/right, Visual of Banana Leaf on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Controls Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <UtensilsCrossed className="w-5 h-5 text-gold-400" />
                <h3 className="font-serif text-xl sm:text-2xl text-gold-100 font-bold">Customize Your Royal Menu</h3>
              </div>

              {/* Category tabs */}
              <div className="flex border-b border-gold-500/15 mb-6 overflow-x-auto gap-1 no-scrollbar">
                {(Object.keys(categories) as Array<keyof typeof categories>).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 text-xs sm:text-sm font-sans font-medium border-b-2 whitespace-nowrap transition-all cursor-pointer ${
                      activeCategory === cat
                        ? 'border-gold-400 text-gold-300'
                        : 'border-transparent text-gold-100/50 hover:text-gold-100/80'
                    }`}
                  >
                    {categories[cat].label}
                  </button>
                ))}
              </div>

              {/* Dish choices checklist */}
              <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2">
                {TRADITIONAL_DISHES.filter((d) => d.category === activeCategory).map((dish) => {
                  const isSelected = selectedDishIds.includes(dish.id);
                  return (
                    <div
                      key={dish.id}
                      onClick={() => onToggleDish(dish.id)}
                      className={`flex justify-between items-center p-4 rounded-lg border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-maroon-950/40 border-gold-400/80 shadow-[0_0_15px_rgba(197,129,30,0.1)]'
                          : 'bg-black/20 border-gold-500/10 hover:border-gold-500/20'
                      }`}
                    >
                      <div className="flex-grow flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected ? 'bg-gold-500 border-gold-500' : 'border-gold-300/40'
                          }`}>
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-maroon-950" />}
                          </div>
                        </div>

                        <div>
                          <div className="flex items-baseline gap-1.5 flex-wrap">
                            <span className="text-gold-100 font-sans font-semibold text-sm sm:text-base">
                              {dish.name}
                            </span>
                            <span className="text-xs text-gold-400/80 font-mono font-normal">
                              ({dish.tamilName})
                            </span>
                          </div>
                          <p className="text-xs text-gold-100/60 mt-1 font-light leading-relaxed">
                            {dish.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex-shrink-0 text-right ml-4">
                        <span className="text-gold-300 font-mono font-bold text-sm sm:text-base">
                          ₹{dish.pricePerPlate}
                        </span>
                        <span className="text-[10px] text-gold-100/40 block font-sans">/ Plate</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Banana Leaf Information Footnote */}
            <div className="mt-8 bg-gold-500/5 border border-gold-400/10 rounded-lg p-4 flex gap-3 items-start text-xs text-gold-100/70 font-sans leading-relaxed">
              <Info className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gold-300">Traditional Custom Serving Ethos</p>
                <p className="mt-1 font-light">
                  Servings follow authentic South Indian hygiene and Vedic science: salt, pickles, and crisp papadums (Appalam) are placed standard. Sweet items are tasted first to honor auspicious beginnings.
                </p>
              </div>
            </div>
          </div>

          {/* Banana Leaf Visual Representation (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* The actual Leaf Frame */}
            <div className="w-full relative py-6 flex flex-col items-center">
              
              {/* Saffron background circle glow */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[350px] bg-gold-600/10 blur-[100px] rounded-full pointer-events-none" />

              {/* Leaf Box */}
              <div className="w-full max-w-[580px] aspect-[1.8/1] relative bg-emerald-950/20 border border-emerald-500/15 rounded-3xl p-6 shadow-inner flex items-center justify-center">
                
                {/* Visual Leaf */}
                <div className="absolute inset-4 overflow-hidden rounded-2xl flex items-center justify-center">
                  
                  {/* Decorative Leaf Shape (The classical Southern Banana Leaf) */}
                  <div className="w-full h-full relative bg-emerald-800 border-2 border-emerald-600 shadow-[0_10px_35px_rgba(0,0,0,0.5)] rounded-[50%_40%_50%_40%_/_20%_60%_20%_60%] flex flex-col justify-between overflow-hidden">
                    
                    {/* Leaf Midrib Line (Central line in leaf) */}
                    <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-emerald-400/50 z-10" />
                    
                    {/* Lateral leaf ribs (diagonal lines) */}
                    <div className="absolute inset-0 opacity-15 pointer-events-none z-0">
                      <div className="w-full h-full" style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(16, 185, 129, 0.4) 15px, rgba(16, 185, 129, 0.4) 18px)`,
                      }} />
                    </div>

                    {/* Standard items on leaf (Mandatory salt, pickle, appalam, lemons) to make it highly authentic! */}
                    <div className="absolute top-4 left-[4%] text-[10px] text-emerald-200/50 bg-black/30 border border-emerald-500/20 px-1.5 rounded uppercase font-mono tracking-widest pointer-events-none">
                      Auspicious Start
                    </div>

                    {/* Static Visual Components representing traditional items that remain on any standard leaf */}
                    <div className="absolute top-3 left-[8%] flex flex-col items-center pointer-events-none text-center">
                      <div className="w-3 h-3 rounded-full bg-white/95 border border-emerald-400 shadow shadow-white" title="Sacred Salt" />
                      <span className="text-[8px] text-emerald-300 font-sans mt-0.5 scale-75">Salt</span>
                    </div>

                    <div className="absolute top-3 left-[14%] flex flex-col items-center pointer-events-none text-center">
                      <div className="w-3.5 h-3.5 rounded-full bg-red-600 border border-emerald-400 shadow shadow-red-500" title="Ginger Pickle" />
                      <span className="text-[8px] text-emerald-300 font-sans mt-0.5 scale-75">Pickle</span>
                    </div>

                    <div className="absolute bottom-4 left-[6%] flex flex-col items-center pointer-events-none text-center">
                      <div className="w-9 h-9 rounded-full bg-yellow-100/90 border border-yellow-300 shadow-[0_3px_6px_rgba(0,0,0,0.2)] flex items-center justify-center font-serif text-[8px] font-bold text-yellow-800" title="Auspicious Appalam">
                        PAPAD
                      </div>
                      <span className="text-[8px] text-emerald-300 font-sans mt-0.5 scale-75 font-semibold">Appalam</span>
                    </div>

                    {/* DYNAMIC SHADOWS OF INGREDIENTS ON THE LEAF */}
                    <AnimatePresence>
                      {TRADITIONAL_DISHES.map((dish) => {
                        const isChosen = selectedDishIds.includes(dish.id);
                        if (!isChosen) return null;
                        
                        const placementClass = getDishPlacementClass(dish.id);
                        return (
                          <motion.div
                            key={dish.id}
                            initial={{ scale: 0, opacity: 0, y: -40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                            className={`absolute z-20 flex flex-col items-center ${placementClass}`}
                          >
                            {/* Decorative Dish Container representing serving plates / heap on leaf */}
                            <div className="relative flex items-center justify-center">
                              {/* Glowing background halo of fresh served food */}
                              <div className="absolute -inset-1 blur-md bg-yellow-400/20 rounded-full animate-pulse" />
                              
                              {/* Actual heap shape depending on category */}
                              <div className={`w-8 h-8 rounded-full border border-gold-300 shadow-[0_4px_10px_rgba(0,0,0,0.35)] flex items-center justify-center font-bold text-[8px] tracking-tight relative overflow-hidden text-center ${
                                dish.category === 'welcome' ? 'bg-amber-100 text-amber-900 border-amber-300' :
                                dish.category === 'main' ? 'bg-amber-50 text-yellow-950 border-gold-200' :
                                dish.category === 'sides' ? 'bg-amber-200 text-amber-950 border-amber-400' :
                                'bg-yellow-100 text-yellow-950 border-gold-300'
                              }`}>
                                <span className="scale-90 px-0.5 font-bold uppercase block leading-none">
                                  {dish.name.split(' ').pop()}
                                </span>
                              </div>
                            </div>

                            {/* Servings tags */}
                            <span className="text-[8px] font-mono text-emerald-100 bg-emerald-950/80 px-1 py-0.5 rounded shadow mt-1">
                              {dish.tamilName}
                            </span>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>

                    {/* Leaf central indicator */}
                    <div className="absolute top-[48%] left-1/2 -translate-x-1/2 z-10 text-[9px] font-mono font-bold tracking-[0.2em] text-emerald-300/40 uppercase pointer-events-none select-none">
                      Vazhailai Virundhu
                    </div>

                  </div>
                </div>

              </div>

              {/* Status tally of selected items */}
              <div className="mt-6 flex flex-wrap gap-2 justify-center max-w-lg">
                <span className="text-xs font-mono text-gold-100/50">Chosen treats:</span>
                {selectedDishIds.length === 0 ? (
                  <span className="text-xs text-rose-300/70 italic flex items-center gap-1">
                    <CircleAlert className="w-3.5 h-3.5" />
                    <span>Leaf is empty! Please click menu choices above to serve...</span>
                  </span>
                ) : (
                  TRADITIONAL_DISHES.filter((d) => selectedDishIds.includes(d.id)).map((d) => (
                    <span key={d.id} className="text-xs bg-emerald-900/40 border border-emerald-500/20 text-emerald-200 px-2 py-0.5 rounded font-sans flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {d.name}
                    </span>
                  ))
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
