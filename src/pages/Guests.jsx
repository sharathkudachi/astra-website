import React from 'react';
import { motion } from 'framer-motion';
import { GiShield, GiMedal, GiRocket } from 'react-icons/gi';

const Guests = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-20"
    >
      <div className="text-center mb-20">
        <span className="label-badge text-accent-orange mb-4 block">Official Delegates</span>
        <h1 className="text-4xl md:text-5xl font-orbitron mb-8 tracking-widest leading-tight">CHIEF GUESTS & DIGNITARIES</h1>
        <div className="h-1 w-32 bg-accent-orange mx-auto" />
      </div>

      <div className="space-y-24 max-w-5xl mx-auto">
        {/* Guest 1 - Brigadier */}
        <div className="relative group">
          <div className="absolute top-0 right-0 z-20">
            <span className="bg-accent-orange text-bg-base px-6 py-2 font-orbitron text-sm font-bold tracking-widest animate-glow-pulse">
              CONFIRMED
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-custom-border bg-bg-surface">
            <div className="lg:col-span-2 relative aspect-square overflow-hidden bg-bg-elevated p-8">
              <div className="absolute inset-8 border border-accent-orange/20" />
              <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-accent-orange" />
              <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-accent-orange" />
              <div className="w-full h-full border border-custom-border flex items-center justify-center bg-black">
                 <img src="/guest 1.png" alt="Brigadier Cariappa" className="w-full h-full object-contain" />
              </div>
            </div>

            <div className="lg:col-span-3 p-10 lg:p-12 flex flex-col justify-center">
              <span className="label-badge text-accent-amber mb-2">Army Dignitary</span>
              <h2 className="text-3xl md:text-4xl font-orbitron mb-2">Brigadier B. M. Cariappa (Retd.)</h2>
              <p className="font-rajdhani text-xl text-text-muted mb-8 tracking-widest uppercase">Kargil War Veteran · Vir Chakra Awardee</p>
              
              <p className="text-text-primary text-lg leading-relaxed font-inter mb-10">
                Decorated with the Vir Chakra for exceptional courage and leadership during the 1999 Kargil War. Brigadier Cariappa has served the nation with distinction across various challenging terrains and operational roles. His strategic insight and tactical experience are invaluable to the next generation of defence innovators.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-accent-amber/10 border border-accent-amber/30 px-5 py-2">
                   <GiMedal className="text-accent-amber text-xl" />
                   <span className="label-badge text-accent-amber text-xs">Kargil Veteran</span>
                </div>
                <div className="flex items-center space-x-2 bg-accent-orange/10 border border-accent-orange/30 px-5 py-2">
                   <GiShield className="text-accent-orange text-xl" />
                   <span className="label-badge text-accent-orange text-xs">Vir Chakra</span>
                </div>
                <div className="flex items-center space-x-2 bg-text-primary/10 border border-text-primary/30 px-5 py-2">
                   <GiShield className="text-text-primary text-xl" />
                   <span className="label-badge text-text-primary text-xs">Strategic Command</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guest 2 - Shubhanshu Shukla */}
        <div className="relative group opacity-80 filter grayscale hover:grayscale-0 transition-all duration-500">
          <div className="absolute top-0 right-0 z-20">
            <span className="bg-accent-amber/20 text-accent-amber border border-accent-amber/50 px-6 py-2 font-orbitron text-xs font-bold tracking-widest">
              INVITATION EXTENDED
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-custom-border bg-bg-surface">
            <div className="lg:col-span-2 relative aspect-[4/3] lg:aspect-square overflow-hidden bg-bg-elevated p-12">
               <div className="w-full h-full border border-custom-border flex items-center justify-center bg-black">
                 <img src="/guest 2.png" alt="Group Captain Shubhanshu Shukla" className="w-full h-full object-contain" />
              </div>
            </div>

            <div className="lg:col-span-3 p-10 flex flex-col justify-center">
              <span className="label-badge text-text-muted mb-2">Air Force Dignitary</span>
              <h2 className="text-3xl font-orbitron mb-2">Group Captain Shubhanshu Shukla</h2>
              <p className="font-rajdhani text-lg text-text-muted mb-6 tracking-widest uppercase">Indian Air Force Officer | ISRO Gaganyaan Mission</p>
              
              <p className="text-text-muted text-base leading-relaxed font-inter mb-8">
                An esteemed officer of the Indian Air Force and one of the four selected astronauts for ISRO's Gaganyaan missions. He represents the convergence of aeronautics and space exploration in India's pursuit of technological sovereignty.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-custom-border px-4 py-1.5 opacity-50">
                   <span className="label-badge text-text-muted text-[10px]">Aeronautical Operations</span>
                </div>
                <div className="flex items-center space-x-2 bg-custom-border px-4 py-1.5 opacity-50">
                   <span className="label-badge text-text-muted text-[10px]">Human Spaceflight</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 text-center">
         <p className="text-text-muted text-xs uppercase tracking-[0.2em]">
           Subject to operational duty commitments of the dignitaries.
         </p>
      </div>
    </motion.div>
  );
};

export default Guests;
