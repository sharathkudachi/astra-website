import React from 'react';
import { Link } from 'react-router-dom';
import { HiMail, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="relative bg-bg-surface pt-16 pb-8 border-t border-accent-orange/30">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Col 1: Branding */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 border border-accent-orange flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-8 h-8 fill-none stroke-accent-orange stroke-[5]">
                <path d="M50 10 L15 30 L15 55 C15 75 50 90 50 90 C50 90 85 75 85 55 L85 30 L50 10 Z" />
              </svg>
            </div>
            <div>
              <span className="font-orbitron font-bold text-2xl tracking-tactical text-text-primary block">ASTRA</span>
              <span className="label-badge text-accent-orange text-[10px]">Innovation for National Security</span>
            </div>
          </Link>
          <p className="text-text-muted text-sm leading-relaxed max-w-xs font-inter">
            BMS Institute of Technology and Management's premier club for tactical readiness and awareness. Empowering students through defence innovation.
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="text-text-primary uppercase tracking-badge text-sm mb-6 border-l-2 border-accent-orange pl-3">Quick Access</h4>
          <div className="grid grid-cols-2 gap-4">
            <ul className="space-y-3">
              <li><Link to="/" className="text-text-muted hover:text-accent-orange text-sm transition-colors font-rajdhani uppercase">Home</Link></li>
              <li><Link to="/about" className="text-text-muted hover:text-accent-orange text-sm transition-colors font-rajdhani uppercase">About</Link></li>
              <li><Link to="/event" className="text-text-muted hover:text-accent-orange text-sm transition-colors font-rajdhani uppercase">Event</Link></li>
              <li><Link to="/schedule" className="text-text-muted hover:text-accent-orange text-sm transition-colors font-rajdhani uppercase">Schedule</Link></li>
            </ul>
            <ul className="space-y-3">
              <li><Link to="/guests" className="text-text-muted hover:text-accent-orange text-sm transition-colors font-rajdhani uppercase">Chief Guests</Link></li>
              <li><Link to="/prizes" className="text-text-muted hover:text-accent-orange text-sm transition-colors font-rajdhani uppercase">Prizes</Link></li>
              <li><Link to="/contact" className="text-text-muted hover:text-accent-orange text-sm transition-colors font-rajdhani uppercase">Contact</Link></li>
              <li><Link to="/register" className="text-text-muted hover:text-accent-orange text-sm transition-colors font-rajdhani uppercase">Register</Link></li>
            </ul>
          </div>
        </div>

        {/* Col 3: Contact */}
        <div>
          <h4 className="text-text-primary uppercase tracking-badge text-sm mb-6 border-l-2 border-accent-orange pl-3">Contact HQ</h4>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 group">
              <HiMail className="text-accent-orange text-xl mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <span className="block text-xs uppercase tracking-badge text-text-muted mb-1">Email Dispatch</span>
                <a href="mailto:astraclub@bmsit.in" className="text-text-primary hover:text-accent-orange transition-colors text-sm font-inter">astraclub@bmsit.in</a>
              </div>
            </div>
            <div className="flex items-start space-x-3 group">
              <HiLocationMarker className="text-accent-orange text-xl mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <span className="block text-xs uppercase tracking-badge text-text-muted mb-1">Observation Post</span>
                <p className="text-text-primary text-sm font-inter">
                  BMSIT, Yelahanka, Bengaluru – 560064, Karnataka, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 border-t border-custom-border/50 pt-8 flex flex-col md:row items-center justify-between space-y-4 md:space-y-0 text-center md:text-left">
        <p className="text-text-muted text-[10px] tracking-badge uppercase">
          &copy; 2026 ASTRA Club, BMSIT. Compiled for National Security Awareness.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="label-badge text-[10px] text-text-muted hover:text-accent-orange transition-colors">Privacy Protocal</a>
          <a href="#" className="label-badge text-[10px] text-text-muted hover:text-accent-orange transition-colors">Terms of Op</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
