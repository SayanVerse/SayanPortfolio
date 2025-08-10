import { useState, useEffect } from 'react';

interface LiveClockProps {
  className?: string;
}

export function LiveClock({ className = '' }: LiveClockProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className={`${className} glass rounded-xl p-4 backdrop-blur-md border border-white/10`}>
      <div className="text-center space-y-1">
        <div className="text-lg font-mono text-primary glow-text">
          {formatTime(time)}
        </div>
        <div className="text-xs text-muted-foreground opacity-70">
          {formatDate(time)}
        </div>
        <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto opacity-50"></div>
      </div>
    </div>
  );
}
