/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function FogEffect() {
  const [scrollIntensity, setScrollIntensity] = useState(0.35);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
          const scrollPercent = scrollTop / maxScroll;
          
          // Map scroll percent smoothly (0.15 - 0.75 opacity range)
          const liveIntensity = Math.min(0.75, Math.max(0.15, 0.15 + scrollPercent * 0.7));
          setScrollIntensity(liveIntensity);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none z-[2] select-none transition-opacity duration-700 ease-out"
      style={{ opacity: scrollIntensity }}
    >
      {/* Primary Slow Moving Mist Cloud */}
      <motion.div
        initial={{ x: '0%', y: '0%' }}
        animate={{ 
          x: ['0%', '-30%', '5%', '0%'],
          y: ['0%', '8%', '-5%', '0%']
        }}
        transition={{ 
          duration: 75, 
          ease: 'linear', 
          repeat: Infinity 
        }}
        className="absolute inset-[-40px] bg-repeat opacity-40 mix-blend-screen"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1200&auto=format&fit=crop&blur=30')`, // Ambient misty soft grain
          backgroundSize: 'cover',
          filter: 'contrast(0.7) brightness(1.6) blur(12px)',
        }}
      />

      {/* Secondary Fast Counter-Mist Cloud with soft white radial gradient meshes */}
      <motion.div
        initial={{ x: '-15%', y: '10%' }}
        animate={{ 
          x: ['-15%', '15%', '-5%', '-15%'],
          y: ['10%', '-8%', '15%', '10%']
        }}
        transition={{ 
          duration: 45, 
          ease: 'linear', 
          repeat: Infinity 
        }}
        className="absolute inset-[-60px] opacity-25 mix-blend-overlay"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.4) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3) 0%, transparent 50%)',
          filter: 'blur(30px)'
        }}
      />

      {/* Tertiary bottom-heavy dense valley mist shroud */}
      <div 
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-maroon-950/90 via-maroon-950/40 to-transparent z-[3]"
        style={{ backdropFilter: 'blur(3px)' }}
      />
    </div>
  );
}
