import React from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker, HiCalendar } from 'react-icons/hi';
import { FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  const contactInfo = [
    {
      icon: <HiMail className="text-3xl text-accent-orange" />,
      label: "Signal Dispatch",
      value: "astraclub@bmsit.in",
      link: "mailto:astraclub@bmsit.in"
    },
    {
      icon: <HiLocationMarker className="text-3xl text-accent-orange" />,
      label: "Observation Post",
      value: "BMS Institute of Technology and Management, Yelahanka New Town, Bengaluru – 560064, Karnataka",
      link: "https://maps.google.com/?q=BMS+Institute+of+Technology+and+Management"
    },
    {
      icon: <HiCalendar className="text-3xl text-accent-orange" />,
      label: "Operation Date",
      value: "30 April 2026",
    }
  ];

  const socials = [
    { icon: <FaInstagram />, label: "Instagram", href: "#" },
    { icon: <FaLinkedin />, label: "LinkedIn", href: "#" },
    { icon: <FaXTwitter />, label: "Twitter", href: "#" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-20"
    >
      <div className="text-center mb-16">
        <span className="label-badge text-accent-orange mb-4 block">Communication Channels</span>
        <h1 className="text-4xl md:text-5xl font-orbitron mb-8 tracking-widest">CONTACT HQ</h1>
        <div className="h-1 w-24 bg-accent-orange mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
        {/* Left Column - Contact Details */}
        <div className="space-y-12">
          {contactInfo.map((info, idx) => (
            <div key={idx} className="flex items-start space-x-6 group">
              <div className="w-16 h-16 border border-custom-border bg-bg-surface flex items-center justify-center group-hover:border-accent-orange transition-colors">
                {info.icon}
              </div>
              <div className="flex-1">
                <span className="block font-rajdhani text-sm text-accent-orange uppercase tracking-badge mb-2">{info.label}</span>
                {info.link ? (
                  <a href={info.link} className="text-xl md:text-2xl font-inter text-text-primary hover:text-accent-orange transition-colors leading-tight block">
                    {info.value}
                  </a>
                ) : (
                  <span className="text-xl md:text-2xl font-inter text-text-primary leading-tight block">
                    {info.value}
                  </span>
                )}
              </div>
            </div>
          ))}

          <div className="pt-8 border-t border-custom-border">
             <span className="block font-rajdhani text-sm text-text-muted uppercase tracking-badge mb-6">Social Intelligence</span>
             <div className="flex space-x-6">
                {socials.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href} 
                    className="w-12 h-12 border border-custom-border flex items-center justify-center text-xl text-text-muted hover:text-accent-orange hover:border-accent-orange transition-all"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
             </div>
          </div>
        </div>

        {/* Right Column - Map Placeholder */}
        <div className="relative group lg:sticky lg:top-32">
          <div className="absolute -inset-4 border border-accent-orange/20 pointer-events-none group-hover:border-accent-orange/40 transition-colors" />
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent-orange" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent-orange" />
          
          <div className="bg-bg-surface border border-custom-border aspect-square w-full overflow-hidden relative">
             <div className="w-full h-full bg-bg-elevated flex flex-col items-center justify-center text-center p-12">
                <HiLocationMarker className="text-7xl text-accent-orange/20 mb-6" />
                <h3 className="font-orbitron text-xl text-text-primary mb-4">MAP COORDINATES</h3>
                <p className="text-text-muted text-sm font-inter">
                   BMS Institute of Technology and Management<br />
                   Yelahanka New Town, Bengaluru
                </p>
                <div className="mt-8 px-6 py-2 border border-accent-orange/30 text-accent-orange text-[10px] font-rajdhani uppercase tracking-badge">
                   Static Iframe Placeholder
                </div>
             </div>
             
             {/* Visual Overlay */}
             <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.5)_100%)]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
