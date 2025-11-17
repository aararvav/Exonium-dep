"use client";

import { useEffect } from 'react';

const SmoothScrollProvider = ({ children }) => {
  useEffect(() => {
    // Enhanced smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      }
    };

    // Add momentum scrolling for iOS
    document.body.style.webkitOverflowScrolling = 'touch';
    
    // Listen for anchor clicks
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;