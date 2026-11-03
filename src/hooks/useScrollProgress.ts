import { useEffect, useRef, useState } from "react";

export const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Tracks how far the viewport has scrolled through a tall element:
 * 0 when its top reaches the top of the screen, 1 when its bottom reaches the bottom.
 */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(prefersReducedMotion ? 1 : 0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      setProgress(distance > 0 ? clamp(-rect.top / distance) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return [ref, progress] as const;
}

export const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

/** Maps progress within [start, end] onto 0..1. */
export const range = (progress: number, start: number, end: number) =>
  clamp((progress - start) / (end - start));
