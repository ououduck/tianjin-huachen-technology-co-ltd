'use client';

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedWrapper({ children, className, delay = 0 }: AnimatedWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Delay the execution to ensure all DOM elements are ready
    const timer = setTimeout(() => {
      if (typeof window.IntersectionObserver === 'undefined') {
        setIsVisible(true);
        return;
      }
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
              if (ref.current) {
                observer.unobserve(ref.current);
              }
            }, delay);
          }
        },
        {
          threshold: 0.1,
        }
      );

      const currentRef = ref.current;
      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-1000 ease-out',
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-8',
        className
      )}
    >
      {children}
    </div>
  );
}