/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { TravelPassTemplate } from '../types';
import { Ticket, Check, Landmark, MessageCircle } from 'lucide-react';

export default function TravelTicketDesigner() {
  const [template, setTemplate] = useState<TravelPassTemplate>({
    travelerName: 'Aditya Kumar',
    coTravelers: 'Family of 3',
    destinationTitle: 'Kashmir Valley Scenic Tour',
    travelModeTitle: 'Classic Heritage Caravan',
    date: '2026-09-12',
    groupSize: '4 Travelers',
    selectedOption: 'Ultra Elite Palace stay with private SUV',
    borderStyle: 'gold-gilt',
    textColor: '#881337', // maroon-900
    specialRequests: 'Interested in early morning photography tours, local historical guides, and trying traditional native food trails.',
  });

  const borderStyles = [
    { id: 'gold-gilt', label: 'Royal Gold Gilt', colorClass: 'border-gold-400' },
    { id: 'tropical-palm', label: 'Lush Southern Palm', colorClass: 'border-emerald-600' },
    { id: 'vintage-rail', label: 'Vintage Heritage Rail', colorClass: 'border-amber-800' },
    { id: 'coastal-wave', label: 'Turquoise Shore Cruise', colorClass: 'border-teal-500' },
  ];

  const getBorderDecorativeClasses = () => {
    switch (template.borderStyle) {
      case 'gold-gilt':
        return 'border-8 border-double border-gold-300 ring-4 ring-gold-500/10 m-2';
      case 'tropical-palm':
        return 'border-4 border-emerald-600 ring-2 ring-gold-400/35 m-3';
      case 'vintage-rail':
        return 'border-4 border-amber-800 border-dashed ring-4 ring-amber-900/15 m-2';
      case 'coastal-wave':
        return 'border-4 border-teal-500 ring-4 ring-emerald-500/15 m-2';
      default:
        return 'border-4 border-gold-400 m-2';
    }
  };

  const getWhatsAppShareLink = () => {
    const textBase = `Hi, I am planning a custom Indian holiday exploration! I designed my Travel Ticket online:
    
🎫 *Lead Traveler*: ${template.travelerName}
👥 *Companions*: ${template.coTravelers} (${template.groupSize})
🌲 *Destination*: ${template.destinationTitle}
🚀 *Holiday Mode*: ${template.travelModeTitle}
📅 *Journey Date*: ${template.date}
🌟 *Selected Tier*: ${template.selectedOption}
🎨 *Ticket Motif*: ${template.borderStyle}
✍ *Special Wishes*: ${template.specialRequests}

Please help us plan our tailored itinerary and guide us on our road trip!`;
    return `https://wa.me/9080746103?text=${encodeURIComponent(textBase)}`;
  };

  return (
    <section id="ticket-designer" className="py-24 bg-maroon-950 px-6 relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gold-400/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-maroon-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-gold-300 uppercase block mb-3">
            Digital Boarding Passes
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gold-100 tracking-tight">
            Design Your Custom Scenic Travel Pass
          </h2>
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4" />
          <p className="mt-4 text-gold-100/60 max-w-2xl mx-auto font-sans font-light text-sm sm:text-base">
            Configure an aesthetic, custom-framed travel pass for your family group. Choose local artistic styles, layout your tour priorities, and preview your premium golden boarding card instantly.
          </p>
        </div>

        {/* Master Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Form Editor (5 cols) */}
          <div className="lg:col-span-5 bg-maroon-900/10 border border-gold-400/20 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <Ticket className="w-5 h-5 text-gold-400" />
              <h3 className="font-serif text-xl sm:text-2xl text-gold-100 font-bold">Ticket Configurations</h3>
            </div>

            <div className="space-y-4">
              
              {/* Couple Names */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-gold-300 uppercase mb-1">Lead Traveler Name</label>
                  <input
                    type="text"
                    value={template.travelerName}
                    onChange={(e) => setTemplate({ ...template, travelerName: e.target.value })}
                    className="w-full bg-black/40 border border-gold-500/20 text-gold-100 px-3 py-2 rounded focus:outline-none focus:border-gold-400 text-sm font-sans"
                    placeholder="Aditya Kumar"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gold-300 uppercase mb-1">Companions / Family</label>
                  <input
                    type="text"
                    value={template.coTravelers}
                    onChange={(e) => setTemplate({ ...template, coTravelers: e.target.value })}
                    className="w-full bg-black/40 border border-gold-500/20 text-gold-100 px-3 py-2 rounded focus:outline-none focus:border-gold-400 text-sm font-sans"
                    placeholder="e.g. Family of 3"
                  />
                </div>
              </div>

              {/* Event Subtitles */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-gold-300 uppercase mb-1">Destination State</label>
                  <input
                    type="text"
                    value={template.destinationTitle}
                    onChange={(e) => setTemplate({ ...template, destinationTitle: e.target.value })}
                    className="w-full bg-black/40 border border-gold-500/20 text-gold-100 px-3 py-2 rounded focus:outline-none focus:border-gold-400 text-sm font-sans"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gold-300 uppercase mb-1">Holiday Mode Theme</label>
                  <input
                    type="text"
                    value={template.travelModeTitle}
                    onChange={(e) => setTemplate({ ...template, travelModeTitle: e.target.value })}
                    className="w-full bg-black/40 border border-gold-500/20 text-gold-100 px-3 py-2 rounded focus:outline-none focus:border-gold-400 text-sm font-sans"
                  />
                </div>
              </div>

              {/* Timing */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-gold-300 uppercase mb-1">Departure Month / Date</label>
                  <input
                    type="date"
                    value={template.date}
                    onChange={(e) => setTemplate({ ...template, date: e.target.value })}
                    className="w-full bg-black/40 border border-gold-500/20 text-gold-100 px-3 py-2 rounded focus:outline-none focus:border-gold-400 text-sm font-sans"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gold-300 uppercase mb-1">Group Size Info</label>
                  <input
                    type="text"
                    value={template.groupSize}
                    onChange={(e) => setTemplate({ ...template, groupSize: e.target.value })}
                    className="w-full bg-black/40 border border-gold-500/20 text-gold-100 px-3 py-2 rounded focus:outline-none focus:border-gold-400 text-sm font-sans"
                  />
                </div>
              </div>

              {/* Venue */}
              <div>
                <label className="block text-xs font-mono text-gold-300 uppercase mb-1">Selected Tier Package Level</label>
                <input
                  type="text"
                  value={template.selectedOption}
                  onChange={(e) => setTemplate({ ...template, selectedOption: e.target.value })}
                  className="w-full bg-black/40 border border-gold-500/20 text-gold-100 px-3 py-2 rounded focus:outline-none focus:border-gold-400 text-sm font-sans"
                  placeholder="e.g. Ultra Elite Palace stay with private SUV"
                />
              </div>

              {/* Special instructions */}
              <div>
                <label className="block text-xs font-mono text-gold-300 uppercase mb-1">Special Expeditions & Food Wishes</label>
                <textarea
                  value={template.specialRequests}
                  onChange={(e) => setTemplate({ ...template, specialRequests: e.target.value })}
                  rows={3}
                  className="w-full bg-black/40 border border-gold-500/20 text-gold-100 px-3 py-2 rounded focus:outline-none focus:border-gold-400 text-xs font-sans resize-none"
                  placeholder="Enter bespoke notes..."
                />
              </div>

              {/* Borders styles toggle */}
              <div>
                <label className="block text-xs font-mono text-gold-300 uppercase mb-2">Select Traditional Ticket Frame Motif</label>
                <div className="grid grid-cols-2 gap-2">
                  {borderStyles.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setTemplate({ ...template, borderStyle: b.id as any })}
                      className={`px-3 py-2 text-xs text-left border rounded transition-all cursor-pointer ${
                        template.borderStyle === b.id
                          ? 'border-gold-400 bg-gold-400/10 text-gold-300'
                          : 'border-gold-500/10 hover:border-gold-500/30 text-gold-100/60'
                      }`}
                    >
                      <span className="block font-medium">{b.label}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Visual Card Preview Container (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* The Live Boarding Pass Canvas */}
            <div className="w-full max-w-[420px] aspect-[1/1.42] bg-[#faf0db] text-amber-950 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col justify-between p-1 border-4 border-gold-300/40">
              
              {/* Decorative ticket line markings */}
              <div className="absolute inset-x-0 top-16 border-t border-dashed border-amber-900/15 pointer-events-none" />
              <div className="absolute top-14 left-[-10px] w-5 h-5 rounded-full bg-maroon-950 pointer-events-none" />
              <div className="absolute top-14 right-[-10px] w-5 h-5 rounded-full bg-maroon-950 pointer-events-none" />

              {/* Structural Border applied dynamically based on selected option */}
              <div className={`flex-grow h-full p-6 flex flex-col justify-between text-center relative ${getBorderDecorativeClasses()}`}>
                
                {/* Boarding Symbol Header */}
                <div className="flex flex-col items-center pt-2">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-gold-600 block uppercase font-bold">Premium Scenic Pass</span>
                  <div className="flex gap-2 items-center justify-center mt-1">
                    <Ticket className="w-4 h-4 text-amber-900" />
                    <span className="text-[8px] font-mono text-amber-900/65 font-semibold">TICKET ID: BHARAT-PASS-2026</span>
                  </div>
                </div>

                {/* Main Text Content */}
                <div className="space-y-4 my-auto px-2 pt-6">
                  
                  {/* Lead Traveler */}
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.15em] text-gold-600 block">Lead Traveler Class</span>
                    <span className="font-serif text-2xl font-black text-amber-950 block select-all">
                      {template.travelerName}
                    </span>
                    <span className="text-xs font-sans text-amber-800/80 block mt-0.5">
                      Accompanying: <strong className="font-semibold">{template.coTravelers}</strong>
                    </span>
                  </div>

                  {/* Trip details */}
                  <div className="py-2 border-y border-amber-900/10 grid grid-cols-2 gap-2 text-left">
                    <div>
                      <span className="text-[8px] uppercase font-mono tracking-wider text-gold-600">Scenic Circuit</span>
                      <span className="font-serif text-xs font-bold text-amber-950 block leading-tight">{template.destinationTitle}</span>
                    </div>
                    <div>
                      <span className="text-[8px] uppercase font-mono tracking-wider text-gold-600">Travel Mode</span>
                      <span className="font-serif text-xs font-bold text-amber-950 block leading-tight">{template.travelModeTitle}</span>
                    </div>
                  </div>

                  {/* Special instruction text block */}
                  <div className="bg-amber-100/50 p-2.5 rounded-lg border border-amber-950/5 text-[9px] text-justify leading-relaxed text-amber-900 font-sans font-light">
                    <strong>Expeditions & Diet Request:</strong> "{template.specialRequests}"
                  </div>

                  {/* Date & Group size */}
                  <div className="grid grid-cols-2 gap-2 text-left pt-1">
                    <div>
                      <span className="text-[8px] uppercase font-mono tracking-wider text-gold-600">Boarding Date</span>
                      <span className="text-xs font-mono font-bold text-amber-950 block">
                        {template.date ? new Date(template.date).toLocaleDateString('en-IN', {
                          year: 'numeric', month: 'long', day: 'numeric'
                        }) : 'Upon booking approval'}
                      </span>
                    </div>
                    <div>
                      <span className="text-[8px] uppercase font-mono tracking-wider text-gold-600">Group Size</span>
                      <span className="text-xs font-mono font-bold text-[#b91d47] block">{template.groupSize}</span>
                    </div>
                  </div>

                  {/* Selected Tier */}
                  <div className="pt-2 border-t border-amber-900/10">
                    <span className="text-[8px] uppercase tracking-widest text-gold-600 font-bold block mb-0.5 font-mono">Custom Select Option</span>
                    <span className="text-[9px] font-sans font-extrabold text-amber-900 leading-tight block uppercase bg-amber-950/5 px-2 py-1 rounded">
                      {template.selectedOption}
                    </span>
                  </div>

                </div>

                {/* Card footer decorative design */}
                <div className="flex flex-col items-center pb-2">
                  <div className="h-[1px] w-24 bg-amber-900/20 mx-auto mb-1" />
                  <span className="text-[8px] font-mono text-gold-600/80 uppercase tracking-widest">Namma Ooru Premium Tourism</span>
                </div>

              </div>

            </div>

            {/* CTA action beneath the designer */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <span className="text-xs text-gold-100/50 font-mono">Bespoke luxury pass configuration complete?</span>
              <a
                href={getWhatsAppShareLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-sans font-medium rounded-lg shadow-md transition-all flex items-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Submit Pass & Book via WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
