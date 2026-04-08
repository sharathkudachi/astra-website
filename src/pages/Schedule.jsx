import React from 'react';
import { motion } from 'framer-motion';

const Schedule = () => {
  const timeline = [
    { time: "09:00 AM", event: "Expo Begins / Gates Open", type: "standard" },
    { time: "10:00 AM", event: "Registration Closes", type: "standard" },
    { time: "10:00–10:30 AM", event: "Inauguration Ceremony", type: "key" },
    { time: "10:30 AM–01:30 PM", event: "Expo + Evaluation (Phase 1)", type: "key" },
    { time: "10:30–11:30 AM", event: "Guest Address", type: "tentative", badge: "TENTATIVE" },
    { time: "01:30–02:30 PM", event: "Lunch Break", type: "break" },
    { time: "02:30–04:00 PM", event: "Evaluation Continues (Phase 2)", type: "key" },
    { time: "02:45–04:00 PM", event: "Address by Brigadier B. M. Cariappa", type: "confirmed", badge: "CONFIRMED" },
    { time: "04:30 PM", event: "Results Announcement & Prize Distribution", type: "key" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-20"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-orbitron mb-8">EVENT SCHEDULE</h1>
        <div className="bg-accent-orange text-bg-base py-3 px-8 inline-block font-orbitron text-lg tracking-widest uppercase">
          30 APRIL 2026 · BMSIT, BENGALURU
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative group">
        {/* Vertical line connecting dots */}
        <div className="absolute left-[34px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-custom-border" />

        <div className="space-y-12">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative flex flex-col md:flex-row items-center md:justify-center">
              {/* Dot */}
              <div className={`absolute left-[29px] md:left-1/2 md:-ml-[6px] w-3 h-3 rounded-full z-10 
                ${item.type === 'key' ? 'bg-accent-orange scale-150' : 
                  item.type === 'confirmed' ? 'bg-accent-orange' : 
                  item.type === 'tentative' ? 'bg-accent-amber' : 
                  'bg-custom-border'} 
                ${item.type === 'key' ? 'ring-4 ring-bg-base shadow-[0_0_15px_rgba(255,107,0,0.5)]' : ''}`} 
              />

              <div className="flex w-full flex-col md:flex-row items-start md:items-center">
                {/* Time - Left on Desktop */}
                <div className="md:w-1/2 md:pr-16 text-left md:text-right pl-16 md:pl-0 mb-2 md:mb-0">
                  <span className={`font-orbitron text-lg ${item.type === 'break' ? 'text-text-muted' : 'text-text-primary'}`}>
                    {item.time}
                  </span>
                </div>

                {/* Event - Right on Desktop */}
                <div className="md:w-1/2 md:pl-16 pl-16">
                  <div className={`p-6 border ${
                    item.type === 'key' || item.type === 'confirmed' ? 'border-accent-orange/30 bg-accent-orange/5' : 
                    item.type === 'tentative' ? 'border-accent-amber/30 bg-accent-amber/5' : 
                    'border-custom-border bg-bg-surface/50'
                  } relative`}>
                    <h3 className={`font-rajdhani text-xl font-bold uppercase tracking-badge ${
                      item.type === 'break' ? 'text-text-muted' : 'text-text-primary'
                    }`}>
                      {item.event}
                    </h3>

                    {item.badge && (
                      <span className={`mt-2 inline-block text-[10px] px-2 py-0.5 font-bold font-rajdhani 
                        ${item.badge === 'CONFIRMED' ? 'bg-accent-orange/20 text-accent-orange border border-accent-orange/30' : 
                          'bg-accent-amber/20 text-accent-amber border border-accent-amber/30'}`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center max-w-2xl mx-auto">
        <p className="text-text-muted text-sm italic border-t border-custom-border pt-8">
          The schedule is dynamic and subject to adjustments based on operational requirements and guest availability.
        </p>
      </div>
    </motion.div>
  );
};

export default Schedule;
