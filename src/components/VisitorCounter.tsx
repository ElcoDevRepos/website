import React from 'react';
import { useVisitorCount } from '../hooks/useVisitorCount';

interface VisitorCounterProps {
  variant?: 'hero' | 'footer' | 'contact' | 'stats';
}

const VisitorCounter: React.FC<VisitorCounterProps> = ({ variant = 'hero' }) => {
  const { visitorCount, todayVisitors } = useVisitorCount();

  const getRandomEmoji = () => {
    const emojis = ['🔥', '⭐', '🚀', '💯', '🎯', '✨', '🌟', '💎'];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  switch (variant) {
    case 'hero':
      return (
        <div className="retro-counter">
          VISITORS: {formatNumber(visitorCount)} | PROJECTS COMPLETED: 42 | HAPPY CLIENTS: 100%
        </div>
      );
    
    case 'footer':
      return (
        <div className="hit-counter">
          🔥 TOTAL VISITORS: {formatNumber(visitorCount)} | 🎯 PAGE VIEWS: {formatNumber(visitorCount * 3)} 🔥
        </div>
      );
    
    case 'contact':
      return (
        <div className="hit-counter">
          📊 VISITORS TODAY: {formatNumber(todayVisitors)} | 📈 TOTAL VISITORS: {formatNumber(visitorCount)} 📊
        </div>
      );
    
    case 'stats':
      return (
        <div className="retro-counter">
          🚀 SUCCESS RATE: 99.9% | ⚡ RESPONSE TIME: &lt; 24 HOURS | 🎯 ON-TIME DELIVERY: 100% 🚀
        </div>
      );
    
    default:
      return (
        <div className="hit-counter">
          {getRandomEmoji()} VISITORS: {formatNumber(visitorCount)} {getRandomEmoji()}
        </div>
      );
  }
};

export default VisitorCounter; 