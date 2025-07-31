import React, { useEffect, useState } from 'react';

interface TrailPoint {
  id: number;
  x: number;
  y: number;
}

const MouseTrail: React.FC = () => {
  const [trailPoints, setTrailPoints] = useState<TrailPoint[]>([]);
  const [pointId, setPointId] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPoint: TrailPoint = {
        id: pointId,
        x: e.clientX,
        y: e.clientY,
      };

      setTrailPoints(prev => [...prev, newPoint]);
      setPointId(prev => prev + 1);

      // Remove trail points after animation
      setTimeout(() => {
        setTrailPoints(prev => prev.filter(point => point.id !== newPoint.id));
      }, 500);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [pointId]);

  return (
    <>
      {trailPoints.map((point) => (
        <div
          key={point.id}
          className="mouse-trail"
          style={{
            left: point.x - 5,
            top: point.y - 5,
          }}
        />
      ))}
    </>
  );
};

export default MouseTrail; 