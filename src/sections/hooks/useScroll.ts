/**
 * useScroll Hook
 * ---------------------------------------
 * Tracks the current vertical scroll
 * position of the window.
 */

import { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Set the initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    scrollY,
    isScrolled: scrollY > 50,
  };
};

export default useScroll;