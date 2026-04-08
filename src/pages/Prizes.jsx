import React from 'react';
import { motion } from 'framer-motion';
import { GiTrophy, GiLaurels, GiMedal, GiSiren } from 'react-icons/gi';

const Prizes = () => {
  const prizeCards = [
    {
      rank: "2nd",
      title: "Silver Excellence",
      amount: "₹10,000",
      description: "Awarded to the team showcasing exceptional innovation and technical feasibility.",
      icon: <GiMedal className="text-6xl text-accent-amber opacity-60" />,
      style: "border-custom-border bg-bg-surface order-2"
    },
    {
      rank: "1st",
      title: "Gold Vanguard",
      amount: "₹15,000",
      description: "The grand champion award for the most revolutionary defence technology solution.",
      icon: <GiTrophy className="text-8xl text-accent-orange" />,
      style: "border-accent-orange bg-bg-elevated order-1 lg:scale-110 lg:z-10 shadow-[0_0_30px_rgba(255,107,0,0.1)]",
      isGrand: true
    },
    {
      rank: "3rd",
      title: "Bronze Honor",
      amount: "₹5,000",
      description: "Recognizing outstanding prototype development and presentation skills.",
      icon: <GiLaurels className="text-6xl text-accent-amber opacity-40" />,
      style: "border-custom-border bg-bg-surface order-3"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-20"
    >
      <div className="text-center mb-24">
        <span className="label-badge text-accent-orange mb-4 block">Deployment Rewards</span>
        <h1 className="text-4xl md:text-6xl font-orbitron mb-12 tracking-tighter">AWARDS & RECOGNITION</h1>
        
        <div className="bg-bg-elevated border border-accent-orange/30 inline-flex flex-col md:flex-row items-center p-2">
            <div className="px-10 py-4 bg-accent-orange text-bg-base font-orbitron text-2xl font-bold tracking-widest">
              ₹30,000
            </div>
            <div className="px-10 py-4 font-rajdhani text-xl text-text-primary tracking-[0.2em] uppercase">
              TOTAL PRIZE POOL
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 items-center max-w-6xl mx-auto mb-32">
        {prizeCards.map((prize, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className={`relative p-12 border-2 text-center h-full flex flex-col items-center justify-center transition-all duration-300 ${prize.style}`}
          >
            <div className="mb-8 relative">
               {prize.icon}
               <span className="absolute -top-4 -right-4 font-orbitron text-2xl text-text-primary opacity-20">{prize.rank}</span>
            </div>
            
            <h3 className={`text-2xl font-orbitron mb-2 tracking-widest ${prize.isGrand ? 'text-accent-orange' : 'text-text-primary'}`}>
              {prize.title}
            </h3>
            <span className="text-4xl font-orbitron text-text-primary block mb-6">{prize.amount}</span>
            <p className="text-text-muted text-sm leading-relaxed font-inter">
              {prize.description}
            </p>

            {prize.isGrand && (
              <div className="absolute top-0 left-0 w-full h-1 bg-accent-orange animate-glow-pulse" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-bg-surface border border-custom-border p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-5">
            <GiSiren className="text-9xl" />
          </div>
          
          <h2 className="text-2xl font-orbitron mb-8 border-l-4 border-accent-orange pl-6">ADDITIONAL BENCHMARKS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent-orange mt-2 flex-shrink-0" />
                <p className="text-text-primary font-rajdhani uppercase tracking-widest leading-relaxed">
                  All participating teams receive a certificate of participation signed by ASTRA and BMSIT Officials.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent-orange mt-2 flex-shrink-0" />
                <p className="text-text-primary font-rajdhani uppercase tracking-widest leading-relaxed">
                  Shortlisted teams gain direct exposure to DRDO, HAL, BEL, and BDL experts for potential mentorship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center">
         <p className="text-text-muted text-xs label-badge">
           Prizes are subject to final evaluation scores and rules of engagement as set by the ASTRA Club committee.
         </p>
      </div>
    </motion.div>
  );
};

export default Prizes;
