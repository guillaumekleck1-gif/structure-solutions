import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Grid background - blueprint style */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--primary) / 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--primary) / 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* Animated structural lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Diagonal support beams */}
          <motion.line
            x1="0%" y1="100%"
            x2="30%" y2="40%"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeOpacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.line
            x1="100%" y1="100%"
            x2="70%" y2="40%"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeOpacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          />
          <motion.line
            x1="30%" y1="40%"
            x2="70%" y2="40%"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeOpacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          />
          
          {/* Cross bracing */}
          <motion.line
            x1="35%" y1="70%"
            x2="50%" y2="40%"
            stroke="hsl(var(--accent))"
            strokeWidth="1"
            strokeOpacity="0.15"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
          />
          <motion.line
            x1="65%" y1="70%"
            x2="50%" y2="40%"
            stroke="hsl(var(--accent))"
            strokeWidth="1"
            strokeOpacity="0.15"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.9 }}
          />
        </svg>

        {/* Central content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Structural frame animation */}
          <div className="relative w-32 h-32 mb-8">
            {/* Outer frame */}
            <motion.div
              className="absolute inset-0 border-2 border-primary"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            
            {/* Inner cross structure */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <motion.line
                x1="0" y1="0" x2="100" y2="100"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
              <motion.line
                x1="100" y1="0" x2="0" y2="100"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
              <motion.line
                x1="50" y1="0" x2="50" y2="100"
                stroke="hsl(var(--accent))"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />
              <motion.line
                x1="0" y1="50" x2="100" y2="50"
                stroke="hsl(var(--accent))"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              />
            </svg>

            {/* Corner joints */}
            {[
              { x: 0, y: 0 },
              { x: 100, y: 0 },
              { x: 0, y: 100 },
              { x: 100, y: 100 },
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-primary rounded-full"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
              />
            ))}

            {/* Center node */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-4 h-4 bg-accent rounded-full"
              style={{ transform: 'translate(-50%, -50%)' }}
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5, delay: 1 }}
            />
          </div>

          {/* Company name */}
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-wider">
              DYNAMIX
            </h1>
            <p className="text-sm text-muted-foreground tracking-[0.3em] mt-1">
              INGÉNIERIE
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Loading text */}
          <motion.p
            className="mt-4 text-xs text-muted-foreground tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Chargement...
          </motion.p>
        </div>

        {/* Floating measurement marks */}
        <div className="absolute bottom-8 left-8 flex items-end gap-1 opacity-20">
          {[40, 60, 80, 50, 70].map((h, i) => (
            <motion.div
              key={i}
              className="w-1 bg-primary"
              initial={{ height: 0 }}
              animate={{ height: h }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
            />
          ))}
        </div>

        <div className="absolute top-8 right-8 opacity-20">
          <motion.div
            className="w-16 h-16 border border-primary"
            initial={{ scale: 0, rotate: 45 }}
            animate={{ scale: 1, rotate: 45 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
