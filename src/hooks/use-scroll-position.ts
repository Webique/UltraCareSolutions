"use client";

import { useEffect, useState } from "react";

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsAtTop(currentScrollY < 50); // Consider "at top" if scroll is less than 50px
    };

    // Set initial values
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollY, isAtTop };
}