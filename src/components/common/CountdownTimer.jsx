import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const targetDate = new Date('2026-04-30T09:00:00+05:30').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft(prev => ({ ...prev, isExpired: true }));
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
          isExpired: false
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft.isExpired) {
    return (
      <div className="text-accent-orange font-orbitron text-2xl tracking-widest animate-pulse border border-accent-orange/30 px-6 py-2">
        THE EXPO IS LIVE!
      </div>
    );
  }

  const TimerBlock = ({ value, label }) => (
    <div className="flex flex-col items-center px-4 md:px-8 first:pl-0 last:pr-0">
      <motion.span 
        key={value}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-4xl md:text-6xl font-orbitron text-accent-orange mb-1"
      >
        {value.toString().padStart(2, '0')}
      </motion.span>
      <span className="text-[10px] md:text-xs font-rajdhani text-text-muted tracking-widest uppercase">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex items-center justify-center divide-x divide-custom-border/50">
      <TimerBlock value={timeLeft.days} label="Days" />
      <TimerBlock value={timeLeft.hours} label="Hours" />
      <TimerBlock value={timeLeft.minutes} label="Minutes" />
      <TimerBlock value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
