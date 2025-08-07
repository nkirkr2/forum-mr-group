import { useState, useEffect } from "react";

function useIsMobile(breakpoint = 500) {
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    function handleResize() {
      setIsMobile(window.innerWidth <= breakpoint);
      console.log(window.innerWidth)
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return hasMounted ? isMobile : null; // <= вернем null, пока компонент не смонтирован
}

export default useIsMobile;
