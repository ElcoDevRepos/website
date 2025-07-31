import { useState, useEffect } from 'react';

export const useVisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState(1337); // Default starting number
  const [todayVisitors, setTodayVisitors] = useState(42);

  useEffect(() => {
    // Get stored visitor count
    const storedCount = localStorage.getItem('elco-visitor-count');
    const storedToday = localStorage.getItem('elco-today-visitors');
    const lastVisitDate = localStorage.getItem('elco-last-visit');
    
    const today = new Date().toDateString();
    
    if (storedCount) {
      setVisitorCount(parseInt(storedCount));
    }
    
    if (storedToday && lastVisitDate === today) {
      setTodayVisitors(parseInt(storedToday));
    } else {
      // Reset today's count if it's a new day
      setTodayVisitors(1);
      localStorage.setItem('elco-today-visitors', '1');
      localStorage.setItem('elco-last-visit', today);
    }
    
    // Increment visitor count if this is a new visit
    const sessionKey = 'elco-session-started';
    if (!sessionStorage.getItem(sessionKey)) {
      const newCount = visitorCount + 1;
      setVisitorCount(newCount);
      localStorage.setItem('elco-visitor-count', newCount.toString());
      
      const newTodayCount = todayVisitors + 1;
      setTodayVisitors(newTodayCount);
      localStorage.setItem('elco-today-visitors', newTodayCount.toString());
      
      // Mark this session as started
      sessionStorage.setItem(sessionKey, 'true');
    }
  }, []);

  return { visitorCount, todayVisitors };
}; 