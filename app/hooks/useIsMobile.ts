'use client'
import { useEffect, useState } from "react";

export default function useIsMobile(breakpoint = 500) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setIsMobile(mql.matches);

    update(); 
    if (mql.addEventListener) {
      mql.addEventListener('change', update);
    } else {
      mql.addListener(update);
    }
    window.addEventListener('orientationchange', update);

    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener('change', update);
      } else {
        mql.removeListener(update);
      }
      window.removeEventListener('orientationchange', update);
    };
  }, [breakpoint]);

  return isMobile; // null до маунта, true/false после
}
