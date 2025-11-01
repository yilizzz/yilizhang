import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 768;

const useResponsivePanelSize = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile, false);
  }, []);

  return isMobile;
};

export default useResponsivePanelSize;
