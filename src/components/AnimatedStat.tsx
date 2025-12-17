import { useCountUp } from "@/hooks/useCountUp";

interface AnimatedStatProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const AnimatedStat = ({ end, suffix = "", label, duration = 2000 }: AnimatedStatProps) => {
  const { count, ref } = useCountUp({ end, duration, suffix });

  return (
    <div 
      ref={ref}
      className="text-center p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300 hover:scale-105 group"
    >
      <div className="text-3xl md:text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
        {count}
      </div>
      <div className="text-sm text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
};

export default AnimatedStat;
