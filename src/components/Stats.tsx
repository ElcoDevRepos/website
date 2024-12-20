import React from 'react';
import { useCountUp } from '../hooks/useCountUp';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, suffix = '' }) => {
  const count = useCountUp({ end: value });

  return (
    <div className="text-center px-8">
      <div className="text-4xl font-bold text-blue-600 mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600 font-medium">
        {label}
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-12">
          <StatItem 
            value={5} 
            label="Years in Business"
            suffix="+"
          />
          <StatItem 
            value={50} 
            label="Projects Completed"
            suffix="+"
          />
          <StatItem 
            value={100} 
            label="Satisfied Clients"
            suffix="%"
          />
          <StatItem 
            value={10} 
            label="Years Experience"
            suffix="+"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
