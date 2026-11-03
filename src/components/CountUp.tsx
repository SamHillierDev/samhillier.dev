import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** A display string such as "10,000+" or "£1,000+". The first number in it is animated; the text around it is kept. */
  value: string;
  duration?: number;
  delay?: number;
};

const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

/** Counts a figure up from zero the first time it scrolls into view. */
const CountUp: React.FC<CountUpProps> = ({
  value,
  duration = 1600,
  delay = 0,
}) => {
  const match = value.match(/^(\D*)([\d,]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? Number(match[2].replace(/,/g, "")) : 0;
  const suffix = match?.[3] ?? "";

  const ref = useRef<HTMLSpanElement>(null);
  // With reduced motion, start (and stay) on the final figure.
  const [reduceMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [current, setCurrent] = useState(reduceMotion ? target : 0);
  const animate = Boolean(match) && !reduceMotion;

  useEffect(() => {
    const el = ref.current;
    if (!el || !animate) return;

    let frame = 0;
    let timeout = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        timeout = window.setTimeout(() => {
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            setCurrent(Math.round(easeOutCubic(t) * target));
            if (t < 1) frame = requestAnimationFrame(tick);
          };
          frame = requestAnimationFrame(tick);
        }, delay);
      },
      { threshold: 0.6 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [animate, target, duration, delay]);

  if (!match) return <>{value}</>;

  return (
    <span ref={ref}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="tabular-nums">
        {prefix}
        {current.toLocaleString("en-GB")}
        {suffix}
      </span>
    </span>
  );
};

export default CountUp;
