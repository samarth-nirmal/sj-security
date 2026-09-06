import React, { useEffect, useState, useRef } from 'react';

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  start = 0,
  duration = 1900,
  suffix = '',
  prefix = '',
  className = ''
}) => {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    let isMounted = true;
    let animId: number | null = null;
    let observer: IntersectionObserver | null = null;
    const element = ref.current;

    const startCounting = () => {
      if (hasAnimated.current || !isMounted) return;
      hasAnimated.current = true;

      const startTime = performance.now ? performance.now() : Date.now();

      const updateCount = (now: number) => {
        if (!isMounted) return;
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth easeOutQuart curve: 1 - (1 - t)^4
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const currentVal = Math.round(start + (end - start) * easeProgress);

        setCount(currentVal);

        if (progress < 1) {
          animId = requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };

      animId = requestAnimationFrame(updateCount);
    };

    if (!element) {
      startCounting();
      return () => {
        isMounted = false;
        if (animId !== null) cancelAnimationFrame(animId);
      };
    }

    try {
      if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                startCounting();
                if (observer && entry.target) {
                  observer.unobserve(entry.target);
                }
              }
            });
          },
          { threshold: 0.1 }
        );

        observer.observe(element);
      } else {
        startCounting();
      }
    } catch {
      startCounting();
    }

    return () => {
      isMounted = false;
      if (animId !== null) {
        cancelAnimationFrame(animId);
      }
      if (observer) {
        observer.disconnect();
      }
    };
  }, [end, start, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};
