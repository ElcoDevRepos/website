import React from 'react';
import { useCountUp } from '../hooks/useCountUp';
import VisitorCounter from './VisitorCounter';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  icon?: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, suffix = '', icon = '🎯' }) => {
  const count = useCountUp({ end: value });

  return (
    <div className="retro-card" style={{ textAlign: 'center', flex: '1', minWidth: '200px' }}>
      <div style={{ fontSize: '48px', marginBottom: '10px' }}>
        {icon}
      </div>
      <div style={{ 
        fontSize: '36px', 
        fontWeight: 'bold', 
        color: '#ff0000',
        textShadow: '3px 3px 0px #000',
        marginBottom: '10px'
      }}>
        {count}{suffix}
      </div>
      <div style={{ 
        fontSize: '16px', 
        fontWeight: 'bold',
        color: '#0000ff',
        textTransform: 'uppercase'
      }}>
        {label}
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <div className="retro-section">
      <h2 className="retro-title" style={{ textAlign: 'center', marginBottom: '30px' }}>
        📊 OUR AMAZING STATS! 📊
      </h2>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '20px',
        marginBottom: '30px'
      }}>
        <StatItem 
          value={7} 
          label="Years in Business"
          suffix="+"
          icon="🏢"
        />
        <StatItem 
          value={50} 
          label="Projects Completed"
          suffix="+"
          icon="💻"
        />
        <StatItem 
          value={100} 
          label="Satisfied Clients"
          suffix="%"
          icon="😊"
        />
        <StatItem 
          value={10} 
          label="Years Experience"
          suffix="+"
          icon="🎓"
        />
      </div>


    </div>
  );
};

export default Stats;
