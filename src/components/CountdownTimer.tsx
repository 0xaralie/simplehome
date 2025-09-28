import { useState, useEffect } from 'react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const targetDate = new Date('2025-05-14T20:00:00');
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-2 sm:space-x-4 my-6">
      {[
        { label: 'Hari', value: timeLeft.days },
        { label: 'Jam', value: timeLeft.hours },
        { label: 'Menit', value: timeLeft.minutes },
        { label: 'Detik', value: timeLeft.seconds }
      ].map(({ label, value }) => (
        <div key={label} className="text-center">
          <div className="
            backdrop-blur-md bg-white/15 
            border border-white/30 
            rounded-2xl px-4 py-3 
            min-w-[60px] sm:min-w-[80px]
            shadow-lg
          ">
            <div className="text-lg sm:text-2xl font-bold text-white">{value}</div>
            <div className="text-xs sm:text-sm text-white/80">{label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}