/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DESTINATIONS } from '../data';
import { Destination } from '../types';
import { MapPin, Calendar, Flame, Coffee, Compass, Landmark, X, MessageCircle } from 'lucide-react';

export default function DestinationsGrid() {
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);

  // Generates custom WhatsApp link with prefilled text tailored to destination
  const getWhatsAppLink = (destinationName: string) => {
    const textBase = `Hi, I want guidance for visiting beautiful places in India. I am particularly interested in the premium travel package for *${destinationName}*. Please share custom details.`;
    const encodedText = encodeURIComponent(textBase);
    return `https://wa.me/9080746103?text=${encodedText}`;
  };

  return (
    <section id="romantic-destinations" className="py-24 bg-maroon-950 px-6 relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
      <div className="absolute -left-32 top-1/3 w-96 h-96 bg-gold-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -right-32 bottom-1/4 w-96 h-96 bg-maroon-800/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-gold-300 uppercase block mb-3">
            Destinations of Splendor
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gold-100 tracking-tight">
            India’s Most Beautiful Travel Expeditions
          </h2>
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4" />
          <p className="mt-4 text-gold-100/60 max-w-2xl mx-auto font-sans font-light text-sm sm:text-base">
            Carefully curated, high-end vacation packages crafted for active sightseers, groups, and solo travelers seeking deep tranquility, elite guiding, and epic cinematic 4K landscapes.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              onClick={() => setSelectedDest(dest)}
              className="group cursor-pointer overflow-hidden rounded-xl border border-gold-400/20 bg-maroon-900/15 hover:border-gold-300/60 transition-all flex flex-col justify-between"
              style={{ contentVisibility: 'auto' }}
            >
              {/* Card Image Block with Parallax-Zoom Effect */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                />
                {/* Image Soft Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/20 to-transparent opacity-80" />
                
                {/* State Tag */}
                <div className="absolute top-4 left-4 bg-maroon-950/80 border border-gold-400/30 px-3 py-1 rounded text-xs text-gold-300 font-mono flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-gold-400" />
                  <span>{dest.state}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gold-100 group-hover:text-gold-300 transition-colors">
                    {dest.name}
                  </h3>
                  <p className="mt-3 text-sm text-gold-100/70 leading-relaxed font-light line-clamp-3">
                    {dest.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gold-500/10 flex items-center justify-between">
                  <div className="text-xs font-mono text-gold-100/50">
                    <span className="block text-gold-400 font-bold mb-0.5">Best Season:</span>
                    <span className="line-clamp-1">{dest.bestTime.split(' (')[0]}</span>
                  </div>
                  <span className="text-xs font-semibold text-gold-300 group-hover:underline transition-all flex items-center gap-1">
                    Explore Package &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Immersive 3D Destination Modal Overlay */}
      <AnimatePresence>
        {selectedDest && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative w-full max-w-4xl bg-gradient-to-br from-maroon-950 via-maroon-900 to-black rounded-2xl overflow-hidden border border-gold-400/40 shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedDest(null)}
                className="absolute top-4 right-4 z-20 bg-black/50 border border-gold-300/30 hover:border-gold-300 text-gold-100 p-2 rounded-full transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Side Image Banner */}
              <div className="w-full md:w-5/12 relative min-h-[220px] md:min-h-full">
                <img
                  src={selectedDest.image}
                  alt={selectedDest.name}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-maroon-950 via-maroon-950/20 to-transparent" />
                
                {/* Overlay Text in Image Area on Desktop */}
                <div className="absolute bottom-6 left-6 right-6 hidden md:block">
                  <div className="text-xs uppercase font-mono text-gold-300 mb-1 tracking-widest">{selectedDest.state}</div>
                  <h4 className="font-serif text-3xl font-bold text-gold-100">{selectedDest.name}</h4>
                  <div className="mt-3 text-xs font-semibold text-gold-200/90 flex items-center gap-1">
                    <span>Authentic Indian Heritage</span>
                  </div>
                </div>
              </div>

              {/* Detail Content Area */}
              <div className="w-full md:w-7/12 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
                <div>
                  {/* Title for Small Screens */}
                  <div className="md:hidden mb-4">
                    <span className="text-xs uppercase font-mono text-gold-400">{selectedDest.state}</span>
                    <h4 className="font-serif text-2xl font-bold text-gold-100">{selectedDest.name}</h4>
                  </div>

                  <h5 className="text-xs font-mono tracking-widest text-gold-400 uppercase mb-2">The Escape Vibe</h5>
                  <p className="text-sm font-sans text-gold-100/80 leading-relaxed text-justify">
                    {selectedDest.longDescription}
                  </p>

                  {/* Seasonal Guidelines */}
                  <div className="mt-6 bg-maroon-950/60 p-4 rounded-lg border border-gold-500/10">
                    <div className="flex items-center gap-2 text-gold-300 font-serif text-sm font-semibold">
                      <Calendar className="w-4 h-4 text-gold-400" />
                      <span>Best Season to Visit</span>
                    </div>
                    <p className="text-xs text-gold-100/90 mt-1 font-mono font-medium">{selectedDest.bestTime}</p>
                    <ul className="mt-2 space-y-1 text-xs text-gold-100/60 pl-4 list-disc font-sans">
                      {selectedDest.seasonalHighlights.map((hl, k) => (
                        <li key={k}>{hl}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Guided specialty experiences */}
                  <div className="mt-6">
                    <h5 className="text-xs font-mono tracking-widest text-gold-400 uppercase mb-3">Specialty Sightseeing Trails</h5>
                    <div className="space-y-4">
                      {selectedDest.tourSpecialties.map((exp, k) => (
                        <div key={k} className="flex gap-3 items-start border-l-2 border-gold-400/40 pl-3">
                          <div className="flex-grow">
                            <span className="text-sm font-serif font-semibold text-gold-100 block">
                              {exp.title}{' '}
                              {exp.tamilName && (
                                <span className="text-xs font-sans text-gold-400/80 font-normal">
                                  ({exp.tamilName})
                                </span>
                              )}
                            </span>
                            <span className="text-xs text-gold-100/70 mt-1 block leading-relaxed">
                              {exp.description}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Booking CTA Row */}
                <div className="mt-8 pt-6 border-t border-gold-500/15 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div>
                    <span className="text-xs text-gold-100/50 block font-mono">Premium Tour Cost Starts:</span>
                    <span className="text-2xl font-serif text-gold-300 font-bold">
                      ₹{selectedDest.basePricePerTourist.toLocaleString('en-IN')}{' '}
                      <span className="text-xs text-gold-100/60 font-sans font-light">/ Traveler</span>
                    </span>
                  </div>

                  <a
                    href={getWhatsAppLink(selectedDest.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-sans font-medium rounded-lg shadow-md transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
