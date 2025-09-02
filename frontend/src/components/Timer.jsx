import { useState, useEffect } from "react";

const Timer = ({ minutes, onTimeUp }) => {
  const [time, setTime] = useState(minutes * 60);

  useEffect(() => {
    if (time <= 0) {
      onTimeUp();
      return;
    }
    const interval = setInterval(() => setTime((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [time, onTimeUp]);

  const formatTime = (t) => {
    const m = Math.floor(t / 60);
    const s = t % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return <div className="text-right font-mono text-lg mb-4">Time Left: {formatTime(time)}</div>;
};

export default Timer;
