/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloating() {
  const number = '9080746103';
  const text = encodeURIComponent('Hi, I want premium guidance to visit beautiful places in India.');
  const whatsappUrl = `https://wa.me/${number}?text=${text}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 group pointer-events-none">
      
      {/* Tooltip text appearing on hover */}
      <div className="bg-black/85 border border-gold-400/30 text-gold-200 px-3 py-1.5 rounded-lg text-xs leading-relaxed shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono select-none hidden sm:block">
        Need Live Assistance?
      </div>

      {/* Floating pulsing button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', delay: 1.5, stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-gradient-to-tr from-emerald-600 to-teal-500 rounded-full flex items-center justify-center text-white shadow-[0_6px_25px_rgba(16,185,129,0.4)] cursor-pointer pulse-gold-glow pointer-events-auto"
        style={{ contentVisibility: 'auto' }}
        title="Open WhatsApp Guidance Chat"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white/15" />
      </motion.a>

    </div>
  );
}
