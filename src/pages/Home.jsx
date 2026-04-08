import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiLocationMarker } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import CountdownTimer from '../components/common/CountdownTimer';
import { 
  GiShield, 
  GiRobotLeg, 
  GiArtificialIntelligence, 
  GiLockSpy, 
  GiCctvCamera, 
  GiProcessor, 
  GiRadarSweep, 
  GiDeliveryDrone 
} from 'react-icons/gi';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const stats = [
    { value: "₹30,000+", label: "Prize Pool" },
    { value: "50", label: "Selected Teams" },
    { value: "4", label: "Evaluation Orgs" },
    { value: "30 APR", label: "2026" }
  ];

  const domains = [
    { id: 1, title: "Defence Technology", icon: <GiShield />, desc: "Next-gen tactical hardware and equipment." },
    { id: 2, title: "Robotics & Autonomous Systems", icon: <GiRobotLeg />, desc: "Ground-based robotics and automation." },
    { id: 3, title: "AI & Machine Learning", icon: <GiArtificialIntelligence />, desc: "Intelligence systems for tactical decision making." },
    { id: 4, title: "Cybersecurity & Ethical Hacking", icon: <GiLockSpy />, desc: "Securing national digital infrastructure." },
    { id: 5, title: "IoT & Smart Surveillance", icon: <GiCctvCamera />, desc: "Connected sensors for perimeter monitoring." },
    { id: 6, title: "Embedded Systems", icon: <GiProcessor />, desc: "Specialized computing modules for defence." },
    { id: 7, title: "Communication Technologies", icon: <GiRadarSweep />, desc: "Secure and resilient field communications." },
    { id: 8, title: "UAVs & Drones", icon: <GiDeliveryDrone />, desc: "Aerial surveillance and payload delivery." }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="w-full"
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20">
        <motion.div variants={itemVariants} className="mb-4">
          <span className="font-rajdhani text-accent-amber tracking-[0.2em] uppercase text-sm font-semibold">
            ASTRA CLUB · BMSIT BENGALURU
          </span>
        </motion.div>

        <motion.h1 
          variants={itemVariants} 
          className="text-5xl md:text-8xl font-orbitron font-black text-text-primary tracking-tactical mb-2 leading-none"
        >
          DEFENCE TECHNOLOGY
        </motion.h1>

        <motion.h2 
          variants={itemVariants} 
          className="text-6xl md:text-9xl font-orbitron font-black text-accent-orange mb-8 tracking-tighter"
        >
          EXPO 2026
        </motion.h2>

        <motion.p 
          variants={itemVariants}
          className="text-text-muted max-w-2xl text-lg md:text-xl font-inter mb-10 leading-relaxed"
        >
          Innovating for National Security | Powered by Students | Inspired by Defence
        </motion.p>

        <motion.div variants={itemVariants} className="mb-12">
          <CountdownTimer />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col md:row items-center space-y-4 md:space-y-0 md:space-x-6">
          <Link 
            to="/register" 
            className="px-10 py-4 bg-accent-orange text-bg-base font-orbitron font-bold tracking-tactical uppercase hover:scale-105 transition-transform animate-glow-pulse"
          >
            Register on Unstop
          </Link>
          <Link 
            to="/event" 
            className="px-10 py-4 border border-text-primary text-text-primary font-orbitron font-bold tracking-tactical uppercase hover:bg-text-primary hover:text-bg-base transition-all"
          >
            Explore the Expo
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 flex items-center text-text-muted font-rajdhani tracking-widest uppercase">
          <HiLocationMarker className="text-accent-orange mr-2 text-xl" />
          <span>30 April 2026 · BMSIT, Bengaluru</span>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-bg-surface border-y border-custom-border/50 py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-custom-border/30">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-6">
                <span className="text-3xl md:text-4xl font-orbitron text-text-primary mb-2">{stat.value}</span>
                <span className="text-xs uppercase tracking-badge text-accent-orange font-rajdhani">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Preview */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:row items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="text-left">
            <span className="label-badge text-accent-orange">Strategy</span>
            <h2 className="text-4xl font-orbitron mt-2">COMPETITION DOMAINS</h2>
          </div>
          <Link to="/event" className="flex items-center text-accent-orange font-rajdhani uppercase tracking-badge group">
            View All Domains <HiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain) => (
            <motion.div
              key={domain.id}
              whileHover={{ y: -5, borderColor: 'var(--accent-orange)' }}
              className="bg-bg-surface border border-custom-border p-8 group transition-all duration-300"
            >
              <div className="text-4xl text-accent-orange mb-6 group-hover:scale-110 transition-transform">
                {domain.icon}
              </div>
              <h3 className="text-xl font-rajdhani uppercase tracking-badge mb-3 text-text-primary">
                {domain.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {domain.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Chief Guest Teaser */}
      <section className="bg-bg-elevated py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col lg:row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="label-badge text-accent-amber px-3 py-1 border border-accent-amber/30 mb-6 inline-block">
              Chief Guest
            </span>
            <h2 className="text-4xl md:text-5xl font-orbitron mb-6">Brigadier B. M. Cariappa (Retd.)</h2>
            <p className="text-text-muted text-lg mb-8 leading-relaxed font-inter">
              Kargil War Veteran and Vir Chakra Awardee. A decorated officer known for exceptional courage and strategic leadership.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <span className="bg-accent-amber/10 text-accent-amber border border-accent-amber/20 px-4 py-1.5 label-badge text-xs">Kargil War Veteran</span>
              <span className="bg-accent-orange/10 text-accent-orange border border-accent-orange/20 px-4 py-1.5 label-badge text-xs">Vir Chakra Awardee</span>
            </div>
            <Link 
              to="/guests" 
              className="px-8 py-3 border border-accent-orange text-accent-orange font-rajdhani uppercase tracking-badge hover:bg-accent-orange hover:text-bg-base transition-all inline-flex items-center"
            >
              View Chief Guests <HiArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="lg:w-1/2 w-full aspect-square md:aspect-video lg:aspect-square relative">
            <div className="absolute inset-0 border-2 border-accent-orange/30 m-4" />
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent-orange" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent-orange" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent-orange" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent-orange" />
            <div className="w-full h-full bg-black flex items-center justify-center border border-custom-border overflow-hidden">
               <img src="/guest 1.png" alt="Brigadier Cariappa" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Prize Teaser */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="label-badge text-accent-orange">Recognition</span>
          <h2 className="text-4xl font-orbitron mt-2 mb-4">AWARDS & RECOGNITION</h2>
          <div className="h-1 w-24 bg-accent-orange mx-auto mb-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-bg-surface border border-custom-border p-10 text-center relative pt-20">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-accent-amber bg-bg-base flex items-center justify-center font-orbitron text-4xl text-accent-amber">2</div>
             <h3 className="text-2xl font-rajdhani mb-2">SILVER</h3>
             <span className="text-3xl font-orbitron text-text-primary block mb-4">₹10,000</span>
             <p className="text-text-muted text-sm">Runner Up Prize</p>
          </div>
          <div className="bg-bg-elevated border-2 border-accent-orange p-12 text-center relative pt-24 scale-110 z-10">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-accent-orange bg-bg-base flex items-center justify-center font-orbitron text-5xl text-accent-orange animate-glow-pulse">1</div>
             <h3 className="text-3xl font-rajdhani mb-2">GOLD</h3>
             <span className="text-4xl font-orbitron text-text-primary block mb-4">₹15,000</span>
             <p className="text-text-muted text-sm uppercase tracking-widest font-bold">Grand Champion</p>
          </div>
          <div className="bg-bg-surface border border-custom-border p-10 text-center relative pt-20">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-accent-amber/50 bg-bg-base flex items-center justify-center font-orbitron text-4xl text-accent-amber/50">3</div>
             <h3 className="text-2xl font-rajdhani mb-2">BRONZE</h3>
             <span className="text-3xl font-orbitron text-text-primary block mb-4">₹5,000</span>
             <p className="text-text-muted text-sm">Third Place Award</p>
          </div>
        </div>

        <div className="text-center">
          <Link to="/prizes" className="text-accent-orange font-rajdhani uppercase tracking-badge flex items-center justify-center hover:translate-x-2 transition-transform">
             View All Prizes <HiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
