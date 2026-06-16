/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { DESTINATIONS } from '../data';
import { Compass, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import FogEffect from './FogEffect';

export default function VehicleJourney() {
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Define thematic environmental visual setups matching each destination
  const journeys = [
    {
      destination: 'Kashmir',
      theme: 'Snowy Alpine Pass',
      bgColor: 'from-amber-50/10 via-blue-50/20 to-sky-100/10',
      textColor: 'text-blue-100',
      terrainColor: 'bg-gradient-to-b from-slate-100 to-sky-200',
      ambientColor: 'rgba(186, 230, 253, 0.2)', // sky blue glow
      roadSideLeft: '❄️ Snowy Pine Tree',
      roadSideRight: '🏔️ Mt. Pir Panjal Peak',
      description: 'Cruising through the snowy, frost-kissed high alpine curves near Srinagar in pristine early dawn light.'
    },
    {
      destination: 'Manali & Shimla',
      theme: 'Mountain Valley Ridge',
      bgColor: 'from-indigo-950/40 via-sky-950/25 to-emerald-950/30',
      textColor: 'text-indigo-200',
      terrainColor: 'bg-gradient-to-b from-stone-600 to-emerald-900',
      ambientColor: 'rgba(52, 211, 153, 0.15)', // emerald glow
      roadSideLeft: '🌲 Alpine Cedar Woods',
      roadSideRight: '🪵 Cozy Luxury Wooden Cottage',
      description: 'Navigating high winding cliffside bridges alongside the clear crystal rushing waters of Beas River.'
    },
    {
      destination: 'Ooty & Kodaikanal',
      theme: 'Misty Tea Hills',
      bgColor: 'from-teal-950/40 via-emerald-950/30 to-green-950/40',
      textColor: 'text-green-300',
      terrainColor: 'bg-gradient-to-b from-emerald-800 to-green-950',
      ambientColor: 'rgba(16, 185, 129, 0.2)',
      roadSideLeft: '🍃 Eucalyptus Mist Trails',
      roadSideRight: '☕ Emerald Tea Gardens',
      description: 'Cruising along romantic curves completely enveloped by the soft whispers of blue Nilgiri mountain mists.'
    },
    {
      destination: 'Goa',
      theme: 'Golden Coastal Highway',
      bgColor: 'from-amber-500/10 via-orange-600/10 to-transparent',
      textColor: 'text-amber-200',
      terrainColor: 'bg-gradient-to-b from-yellow-100 to-amber-200',
      ambientColor: 'rgba(245, 158, 11, 0.25)',
      roadSideLeft: '🌴 Coconut Palm Orchards',
      roadSideRight: '⛵ Sunkissed Arabian Sea',
      description: 'Cruising down high coconut palm avenue roads, bathed entirely in warm golden sand sun rays.'
    },
    {
      destination: 'Kerala',
      theme: 'Tropical Waterway Ridge',
      bgColor: 'from-emerald-900/20 via-teal-900/15 to-transparent',
      textColor: 'text-teal-300',
      terrainColor: 'bg-gradient-to-b from-emerald-700 to-teal-950',
      ambientColor: 'rgba(20, 184, 166, 0.2)',
      roadSideLeft: '🛶 Deluxe Thatched Houseboats',
      roadSideRight: '🪷 Floating Lily Lagoons',
      description: 'Driving through beautiful lush waterways, taking in the serene calm breezes of Alappuzha canals.'
    },
    {
      destination: 'Rajasthan',
      theme: 'Great Thar Desert Highway',
      bgColor: 'from-rose-950/30 via-amber-950/20 to-black',
      textColor: 'text-amber-300',
      terrainColor: 'bg-gradient-to-b from-amber-600 to-rose-950',
      ambientColor: 'rgba(224, 130, 22, 0.2)',
      roadSideLeft: '🐪 Wandering Camel Safaris',
      roadSideRight: '🏰 Glowing Sandstone Forts',
      description: 'Sailing over rolling orange sand dunes on a straight high-speed luxury highway under lantern light.'
    },
    {
      destination: 'Andaman & Lakshadweep',
      theme: 'Ocean Azure Overpass',
      bgColor: 'from-sky-950/40 via-cyan-900/30 to-black',
      textColor: 'text-cyan-300',
      terrainColor: 'bg-gradient-to-b from-cyan-400 to-sky-900',
      ambientColor: 'rgba(6, 182, 212, 0.25)',
      roadSideLeft: '🏖️ Powdery Coral Beaches',
      roadSideRight: '🐚 Glowing Bioluminescent Waves',
      description: 'Gliding smoothly above crystal glass azure ocean bridges, with vibrant marine reefs glowing beneath.'
    }
  ];

  const currentJourney = journeys[activeStageIdx];

  // Automate vehicle journey sequence if needed
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStageIdx((prev) => (prev + 1) % journeys.length);
    }, 8500);
    return () => clearInterval(timer);
  }, []);

  const handleNextStage = () => {
    setActiveStageIdx((prev) => (prev + 1) % journeys.length);
  };

  const handlePrevStage = () => {
    setActiveStageIdx((prev) => (prev - 1 + journeys.length) % journeys.length);
  };

  const getWhatsAppLink = (dest: string) => {
    const textBase = `Hi! I was watching the interactive 3D Scenic Drive on your website. I am highly interested in custom guidance for a couple's journey to *${dest}*. Please share details.`;
    return `https://wa.me/9080746103?text=${encodeURIComponent(textBase)}`;
  };

  return (
    <section id="interactive-journey" className="py-24 bg-[#0a0204] px-6 relative overflow-hidden" ref={containerRef}>
      
      {/* Absolute Cinematic Accents */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

      {/* Decorative Traditional Border Gilt */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center pointer-events-none opacity-20">
        <span className="text-sm font-serif text-gold-300">✦ ━━━━━━━━ • ❖ • ━━━━━━━━ ✦</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono tracking-[0.25em] text-gold-300 uppercase block mb-3">
            3D Perspective Cinematic Simulation
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gold-100 tracking-tight">
            The Golden Horizon Highway Ride
          </h2>
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4" />
          <p className="mt-4 text-gold-100/60 max-w-2xl mx-auto font-sans font-light text-sm sm:text-base">
            Watch our majestic premium holiday limousine navigate through India's spectacular terrains live. Click the dashboard dials to switch climate terrains instantly!
          </p>
        </div>

        {/* Cinematic Dashboard + Viewport Arena */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Scenic Viewport (8 Cols with Perspective Road & 3D Vehicle) */}
          <div className="lg:col-span-8 bg-gradient-to-b from-maroon-950/30 to-black border-2 border-gold-400/20 rounded-2xl p-6 relative overflow-hidden h-[420px] sm:h-[480px] flex flex-col justify-between shadow-2xl">
            
            {/* Ambient Backlight Glow that morphs with the terrain selection */}
            <div 
              className="absolute inset-0 transition-all duration-1000 ease-in-out pointer-events-none"
              style={{ background: `radial-gradient(circle at 50% 35%, ${currentJourney.ambientColor} 0%, transparent 70%)` }}
            />

            {/* Dynamic Atmospheric Fog/Mist System for high-altitude mountain regions */}
            {['Kashmir', 'Manali & Shimla', 'Ooty & Kodaikanal'].includes(currentJourney.destination) && (
              <FogEffect />
            )}

            {/* Stage & Destination Overlay Tag */}
            <div className="relative z-20 flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-300 bg-black/50 border border-gold-400/30 px-2 py-1 rounded">
                  Active Circuit: 0{activeStageIdx + 1} / 0{journeys.length}
                </span>
                <h3 className="font-serif text-3xl font-black text-white mt-2 flex items-baseline gap-2">
                  <span>{currentJourney.destination}</span>
                  <span className="text-xs font-mono font-normal text-gold-400/80">({currentJourney.theme})</span>
                </h3>
              </div>

              {/* Climate Info */}
              <div className="text-right">
                <span className="text-[9px] font-mono tracking-widest text-emerald-400 uppercase bg-emerald-950/60 border border-emerald-500/20 px-2 py-1 rounded block">
                  ● Cruise Safe Mode
                </span>
              </div>
            </div>

            {/* THE VISUAL 3D ARENA (ROAD + MODEL) */}
            <div className="relative w-full h-[220px] sm:h-[260px] flex items-center justify-center pt-8">
              
              {/* THE 3D PERSPECTIVE ROAD (Vanishing point in center) */}
              <div 
                className="absolute inset-x-0 bottom-0 h-[100px] sm:h-[130px] opacity-90 overflow-hidden"
                style={{ perspective: '80px', perspectiveOrigin: '50% 0%' }}
              >
                {/* Rolling asphalt block */}
                <div 
                  className="w-[180%] h-[300px] bg-gradient-to-b from-stone-800 to-stone-900 mx-auto transform rotateX(60deg) relative shadow-inner flex flex-col justify-between p-2"
                  style={{ transformOrigin: 'top center' }}
                >
                  {/* Dashed center yellow line in rapid motion */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-[4px] -translate-x-1/2 overflow-hidden">
                    <div 
                      className="w-full h-[500px]"
                      style={{
                        backgroundImage: `repeating-linear-gradient(to bottom, #dfb768 0, #dfb768 30px, transparent 30px, transparent 60px)`,
                        animation: 'drive-lane 0.8s linear infinite'
                      }}
                    />
                  </div>

                  {/* Side white markers */}
                  <div className="absolute left-[5%] top-0 bottom-0 w-[2px] bg-white/40" />
                  <div className="absolute right-[5%] top-0 bottom-0 w-[2px] bg-white/40" />
                </div>
              </div>

              {/* ROADSIDE SCENIC FLOATING OBSTACLES (Trees/Cottages/Dunes moving out) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentJourney.destination + '-left'}
                  initial={{ scale: 0, opacity: 0, x: -10, y: -20 }}
                  animate={{ scale: [0.3, 1, 1.4], opacity: [0, 1, 0], x: [-15, -110, -260], y: [-10, 40, 110] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeOut' }}
                  className="absolute z-10 text-2xl sm:text-4xl pointer-events-none select-none"
                  style={{ top: '35%', left: '46%' }}
                >
                  {currentJourney.roadSideLeft.split(' ')[0]}
                </motion.div>

                <motion.div
                  key={currentJourney.destination + '-right'}
                  initial={{ scale: 0, opacity: 0, x: 10, y: -20 }}
                  animate={{ scale: [0.3, 1, 1.4], opacity: [0, 1, 0], x: [15, 110, 260], y: [-10, 40, 110] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeOut', delay: 2 }}
                  className="absolute z-10 text-2xl sm:text-4xl pointer-events-none select-none"
                  style={{ top: '35%', right: '46%' }}
                >
                  {currentJourney.roadSideRight.split(' ')[0]}
                </motion.div>
              </AnimatePresence>

              {/* THE PURE CSS ISOMETRIC 3D LUXURY BUS / CAB */}
              {/* Designed using nested panels for actual 3D volume & soft glowing shadows */}
              <div 
                className="relative w-[180px] sm:w-[220px] h-[75px] sm:h-[90px] z-20 animate-float"
                style={{ perspective: '400px' }}
              >
                
                {/* Under-Vehicle Cyan Neon Ambient Glow */}
                <div 
                  className="absolute bottom-[-10px] left-4 right-4 h-5 rounded-full blur-md opacity-70 transition-all duration-1000"
                  style={{ background: currentJourney.ambientColor }}
                />

                {/* Main Vehicle Chassis container with minor steering roll */}
                <div 
                  className="w-full h-full relative transition-transform duration-500"
                  style={{ transform: 'rotateY(-28deg) rotateX(8deg) rotateZ(1deg)', transformStyle: 'preserve-3d' }}
                >
                  
                  {/* Front windshield face */}
                  <div className="absolute top-[18px] left-[5px] w-[50px] h-[34px] bg-slate-900/95 border border-gold-300/40 rounded-sm transform origin-right rotateY(-35deg) flex items-center justify-center overflow-hidden">
                    {/* Glowing golden high beams */}
                    <div className="absolute right-0 bottom-1 w-2.5 h-1 bg-yellow-300 rounded-full" />
                    <div className="absolute left-0 bottom-1 w-2.5 h-1 bg-yellow-300 rounded-full" />
                    {/* Windshield reflective sheen */}
                    <div className="w-12 h-6 bg-gradient-to-tr from-transparent via-white/20 to-transparent rotate-12" />
                  </div>

                  {/* Right Side Long Cabin Wall (Lux traveler look) */}
                  <div className="absolute top-[8px] left-[45px] w-[130px] h-[48px] bg-gradient-to-r from-gold-400 via-gold-500 to-gold-700/90 rounded-r-lg border-y border-r border-[#834a10]/50 shadow-md flex items-center gap-2 pl-4">
                    {/* Array of premium couple lounge windows */}
                    <div className="w-6 h-5 bg-sky-950/80 rounded border-t border-sky-400/20" />
                    <div className="w-6 h-5 bg-sky-950/80 rounded border-t border-sky-400/20" />
                    <div className="w-6 h-5 bg-sky-950/80 rounded border-t border-sky-400/20" />
                    <div className="w-6 h-5 bg-sky-950/80 rounded border-t border-sky-400/20" />
                  </div>

                  {/* Curved Roof panel */}
                  <div className="absolute top-0 left-[25px] w-[142px] h-[10px] bg-gradient-to-r from-gold-200 to-gold-400 rounded-t transform rotateX(15deg)" />

                  {/* Rear Side Exhaust */}
                  <div className="absolute bottom-[10px] right-2 w-4 h-1.5 bg-zinc-800 rounded-full" />

                  {/* Premium chrome tires (Left & Right) */}
                  <div className="absolute bottom-[-10px] left-[32px] w-8 h-8 rounded-full bg-zinc-900 border-2 border-zinc-700/60 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-gold-300" />
                  </div>
                  <div className="absolute bottom-[-10px] left-[125px] w-8 h-8 rounded-full bg-zinc-900 border-2 border-zinc-700/60 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-gold-300" />
                  </div>

                </div>

              </div>

            </div>

            {/* Scenery details block */}
            <div className="relative z-20 bg-black/50 border border-gold-400/10 p-4 rounded-lg flex items-center justify-between text-xs sm:text-sm">
              <p className="text-gold-100/80 leading-relaxed font-sans max-w-lg font-light">
                {currentJourney.description}
              </p>
              <a
                href={getWhatsAppLink(currentJourney.destination)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-sans font-medium rounded text-xs shrink-0 ml-4 flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Inquire</span>
              </a>
            </div>

          </div>

          {/* Cruise Control Dashboard Controller (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            
            {/* The Control Dial Deck */}
            <div className="bg-maroon-900/15 border border-gold-400/20 p-6 rounded-2xl flex-grow flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono tracking-widest text-gold-400 uppercase font-bold block mb-1">Interactive Telemetry</span>
                <h4 className="font-serif text-xl font-bold text-gold-100 mb-4">Journey Coordinates</h4>
                
                {/* Dial selectors list */}
                <div className="space-y-3">
                  {journeys.map((j, k) => (
                    <button
                      key={k}
                      onClick={() => setActiveStageIdx(k)}
                      className={`w-full p-3 rounded-lg border text-left transition-all flex items-center justify-between cursor-pointer ${
                        activeStageIdx === k
                          ? 'bg-gold-400/10 border-gold-400 shadow'
                          : 'bg-black/10 border-gold-500/10 hover:border-gold-500/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full border text-xs flex items-center justify-center font-mono font-bold ${
                          activeStageIdx === k ? 'bg-gold-400 text-maroon-950 border-gold-400' : 'border-gold-500/20 text-gold-100/50'
                        }`}>
                          0{k + 1}
                        </span>
                        <div>
                          <span className="block font-serif text-sm font-semibold text-gold-100">{j.destination}</span>
                          <span className="block text-[9px] text-gold-100/40 uppercase font-mono tracking-tight">{j.theme}</span>
                        </div>
                      </div>

                      <ChevronRightSymbol active={activeStageIdx === k} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Control arrows below */}
              <div className="mt-6 pt-4 border-t border-gold-500/10 flex justify-between items-center gap-4">
                <button
                  onClick={handlePrevStage}
                  className="flex-grow py-2.5 border border-gold-300/30 hover:border-gold-300/70 rounded text-gold-300 hover:text-white flex items-center justify-center gap-1 text-xs cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Prev Stage</span>
                </button>
                <button
                  onClick={handleNextStage}
                  className="flex-grow py-2.5 border border-gold-300/30 hover:border-gold-300/70 rounded text-gold-300 hover:text-white flex items-center justify-center gap-1 text-xs cursor-pointer"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Quick Summary footnote */}
            <div className="bg-gold-500/5 border border-gold-400/10 p-4 rounded-xl text-center text-xs text-gold-100/60 font-sans font-light">
              We guide couples along the safest, cleanest bypass avenues, reserving custom vehicle cabins, private chauffeurs, high-definition panoramic windows, and elite multi-linguist hosts!
            </div>

          </div>

        </div>

      </div>

      {/* Embedded Animation stylesheet for simple layout loop keys */}
      <style>{`
        @keyframes drive-lane {
          0% { transform: translateY(-120px); }
          100% { transform: translateY(0); }
        }
      `}</style>

    </section>
  );
}

// Inline toggle icon helper
function ChevronRightSymbol({ active }: { active: boolean }) {
  return (
    <div className={`w-4 h-4 rounded-full border flex items-center justify-center text-xs transition-transform ${
      active ? 'bg-gold-400 border-gold-400 text-maroon-950 scale-110' : 'border-gold-500/20 text-gold-100/30'
    }`}>
      &rarr;
    </div>
  );
}
