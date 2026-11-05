import { faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { reviewCv } from "../data/projects";

const { testimonials } = reviewCv;

/** Horizontal testimonial scroller, ported from review.cv: three cards fit, the fourth peeks in faded on the right. */
const ReviewCvTestimonials: React.FC = () => {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [opacities, setOpacities] = useState<number[]>(() =>
    testimonials.map((_, i) => (i < 3 ? 1 : 0.25)),
  );

  // Fade each card by how much of it is inside the scroller.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const update = () => {
      const sRect = scroller.getBoundingClientRect();
      setOpacities(
        cardRefs.current.map((el) => {
          if (!el) return 1;
          const r = el.getBoundingClientRect();
          const visible = Math.max(
            0,
            Math.min(r.right, sRect.right) - Math.max(r.left, sRect.left),
          );
          const ratio = r.width > 0 ? visible / r.width : 1;
          // Fully visible = 1, half clipped ≈ 0.6, off-screen = 0.2.
          return 0.2 + 0.8 * ratio;
        }),
      );
    };

    update();
    scroller.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      scroller.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Drag to scroll with a mouse or pen; touch keeps native scrolling.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let isDown = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;
    let pendingDx = 0;
    let rafId = 0;

    const flush = () => {
      rafId = 0;
      scroller.scrollLeft = startScroll - pendingDx;
    };

    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      isDown = true;
      moved = false;
      startX = e.clientX;
      startScroll = scroller.scrollLeft;
      scroller.setPointerCapture(e.pointerId);
      scroller.style.scrollBehavior = "auto";
      scroller.style.scrollSnapType = "none";
    };
    const onMove = (e: PointerEvent) => {
      if (!isDown) return;
      pendingDx = e.clientX - startX;
      if (Math.abs(pendingDx) > 3) moved = true;
      if (!rafId) rafId = requestAnimationFrame(flush);
    };
    const onUp = (e: PointerEvent) => {
      if (!isDown) return;
      isDown = false;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
      scroller.releasePointerCapture(e.pointerId);
      scroller.style.scrollBehavior = "";
      scroller.style.scrollSnapType = "";
    };
    // Swallow the click that fires at the end of a drag.
    const onClickCapture = (e: MouseEvent) => {
      if (moved) {
        e.stopPropagation();
        e.preventDefault();
        moved = false;
      }
    };

    scroller.addEventListener("pointerdown", onDown);
    scroller.addEventListener("pointermove", onMove);
    scroller.addEventListener("pointerup", onUp);
    scroller.addEventListener("pointercancel", onUp);
    scroller.addEventListener("click", onClickCapture, true);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      scroller.removeEventListener("pointerdown", onDown);
      scroller.removeEventListener("pointermove", onMove);
      scroller.removeEventListener("pointerup", onUp);
      scroller.removeEventListener("pointercancel", onUp);
      scroller.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  return (
    <div className="overflow-hidden pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h3 className="font-display text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Loved by <span className="text-rcv">Job Seekers</span>
        </h3>

        <ul
          ref={scrollerRef}
          className="mt-10 flex cursor-grab touch-pan-x touch-pan-y snap-x snap-proximity [scrollbar-width:none] gap-4 overflow-x-auto scroll-smooth [mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_88%,transparent_100%)] pb-6 select-none active:cursor-grabbing lg:gap-6 [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t, i) => (
            <li
              key={t.name}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              style={{
                opacity: opacities[i],
                transition: "opacity 300ms ease-out",
              }}
              className="flex w-[80%] shrink-0 snap-start flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:w-[48%] md:w-[28%] md:p-8"
            >
              <div
                role="img"
                aria-label="5 out of 5 stars"
                className="text-rcv flex gap-1"
              >
                {Array.from({ length: 5 }, (_, s) => (
                  <FontAwesomeIcon key={s} icon={faStar} />
                ))}
              </div>
              <blockquote className="mt-4 mb-6 line-clamp-4 leading-relaxed text-white/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-auto flex items-center justify-between gap-4">
                <div>
                  <p className="font-display text-lg font-bold">
                    &mdash; {t.name}
                  </p>
                  <p className="text-sm text-white/55">{t.role}</p>
                </div>
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  aria-hidden="true"
                  className="text-rcv shrink-0 text-3xl opacity-30"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReviewCvTestimonials;
