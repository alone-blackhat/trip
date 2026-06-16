/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { heroMandapSunset } from '../data';
import { Calendar, Compass, PhoneCall } from 'lucide-react';

export default function Banner() {
  const scrollToCalculator = () => {
    document.getElementById('budget-planner')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDestinations = () => {
    document.getElementById('romantic-destinations')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-maroon-950">
      {/* Background Image with Cinematic Golden-Crimson Overlays */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.02, opacity: 0.55 }}
          transition={{ duration: 2.2, ease: 'easeOut' }}
          src={heroMandapSunset}
          alt="Traditional Indian Mandap at Sunset"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Scrims to ensure ultra-high readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-950/50 via-transparent to-maroon-950/50" />
      </div>

      {/* Decorative Traditional Border Motifs */}
      <div className="absolute top-8 left-8 right-8 bottom-8 border border-gold-500/25 pointer-events-none z-10 hidden md:block">
        <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-gold-300" />
        <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-gold-300" />
        <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-gold-300" />
        <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-gold-300" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 md:px-12 flex flex-col items-center">
        {/* Elite Heritage Travels Accent */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-6"
        >
          <span className="text-sm font-mono tracking-[0.3em] text-gold-300 uppercase block mb-2">Elite Heritage Travels</span>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
        </motion.div>

        {/* Majestic Tamil & Indian Royal Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gold-100 leading-tight drop-shadow-lg"
        >
          நம்ம ஊரு <br className="sm:hidden" />
          <span className="text-gold-300 text-gold-gradient font-serif">Valithadam & Payanam</span>
        </motion.h1>

        {/* Poetic Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-6 text-base sm:text-xl text-gold-100/80 font-sans max-w-2xl leading-relaxed font-light"
        >
          Weaving pristine Tamil native legends with India’s most beautifully curated, panoramic 4K sightseeing & heritage road trip guidance. Tweak your custom routes, explore local gastronomy, and design your bespoke passes.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
          id="hero-cta"
        >
          {/* Main Booking Button */}
          <button
            onClick={scrollToCalculator}
            className="w-full sm:w-auto px-8 py-4 bg-gold-gradient hover:bg-gold-400 text-maroon-950 font-sans font-semibold rounded-lg shadow-lg hover:shadow-gold-500/20 transition-all cursor-pointer flex items-center justify-center gap-2 relative group overflow-hidden"
          >
            <Calendar className="w-5 h-5 flex-shrink-0" />
            <span>Tailor Custom Journey</span>
          </button>

          {/* Travel Destinations Button */}
          <button
            onClick={scrollToDestinations}
            className="w-full sm:w-auto px-8 py-4 bg-maroon-950/40 hover:bg-maroon-900/60 text-gold-100 border border-gold-300/40 hover:border-gold-300/80 rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <Compass className="w-5 h-5 flex-shrink-0" />
            <span>Discover Scenic Circuits</span>
          </button>
        </motion.div>

        {/* Quick Information Footnotes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-16 grid grid-cols-3 gap-4 md:gap-12 max-w-lg border-t border-gold-500/15 pt-8 text-center text-xs sm:text-sm text-gold-100/60 font-mono"
        >
          <div>
            <span className="block text-gold-400 font-bold font-serif mb-1 text-base sm:text-lg">100%</span>
            <span>Native Guided Trails</span>
          </div>
          <div className="border-x border-gold-500/15 px-2 md:px-6">
            <span className="block text-gold-400 font-bold font-serif mb-1 text-base sm:text-lg">4K UHD</span>
            <span>Cinematic Photogrids</span>
          </div>
          <div>
            <span className="block text-gold-400 font-bold font-serif mb-1 text-base sm:text-lg">+9080746103</span>
            <span>24/7 Premium Guidance</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Wave/Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gold-400/50 flex justify-center p-1 cursor-pointer"
          onClick={scrollToDestinations}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
        </motion.div>
      </div>
    </div>
  );
}
