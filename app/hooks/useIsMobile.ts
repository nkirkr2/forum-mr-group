import { useState, useEffect } from "react";

function useIsMobile(breakpoint = 500) {
  const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
        setIsMobile(window.innerWidth <= breakpoint);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

  return isMobile;
}

export default useIsMobile;