import { useEffect, useRef } from "react";
import certifications from "../data/certifications";
import { prefersReducedMotion } from "../hooks/useScrollProgress";

/** Cruising speed in px/s; negative scrolls left. */
const AUTO_SPEED = -40;
/** How quickly velocity eases back to cruising after a fling (higher is snappier). */
const EASE = 1.6;
/** Fastest fling in px/s, so a hard flick doesn't spin the badges into a blur. */
const MAX_FLING = 2500;
/** Pointer travel in px before a press counts as a drag rather than a click. */
const DRAG_THRESHOLD = 10;

const Badge: React.FC<{
  cert: (typeof certifications)[number];
  duplicate?: boolean;
}> = ({ cert, duplicate }) => {
  const img = (
    <img
      src={cert.src}
      alt={cert.alt}
      title={cert.alt}
      loading="lazy"
      draggable={false}
      className="h-28 w-28 object-contain [filter:drop-shadow(0_0_0_transparent)_drop-shadow(0_0_0_transparent)] transition-[translate,scale,filter] duration-300 ease-out group-focus-within:-translate-y-2 group-focus-within:scale-110 group-focus-within:[filter:drop-shadow(0_0_8px_var(--glow))_drop-shadow(0_0_28px_var(--glow))] group-hover:-translate-y-2 group-hover:scale-110 group-hover:[filter:drop-shadow(0_0_8px_var(--glow))_drop-shadow(0_0_28px_var(--glow))] sm:h-32 sm:w-32"
    />
  );

  return (
    <li
      className="group shrink-0"
      // 8-digit hex adds ~55% alpha. Keep the colour itself translucent rather than using
      // color-mix() in the filter, which browsers can't tween and would snap on instead.
      style={{ "--glow": `${cert.glow}8c` } as React.CSSProperties}
    >
      {cert.url === "#" ? (
        img
      ) : (
        <a
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          draggable={false}
          className="block"
          tabIndex={duplicate ? -1 : undefined}
        >
          {img}
        </a>
      )}
    </li>
  );
};

/** Endless badge carousel that glides on its own and can be dragged or flung. */
function useDraggableMarquee() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (prefersReducedMotion || !viewport || !track) return;

    // The layout scales with the root font size on large screens, so the cruise speed does too.
    let cruise = AUTO_SPEED;
    const updateCruise = () => {
      const rem = parseFloat(
        getComputedStyle(document.documentElement).fontSize,
      );
      cruise = AUTO_SPEED * (rem / 16 || 1);
    };
    updateCruise();

    let offset = 0;
    let velocity = cruise;
    let paused = false;
    let frame = 0;
    let lastFrame = performance.now();
    let lastTransform = "";

    const drag = {
      active: false,
      captured: false,
      moved: false,
      opened: false,
      pointerId: 0,
      startX: 0,
      lastX: 0,
      lastTime: 0,
    };

    const tick = (now: number) => {
      const dt = Math.min((now - lastFrame) / 1000, 0.05);
      lastFrame = now;

      if (!drag.active) {
        const target = paused ? 0 : cruise;
        velocity += (target - velocity) * (1 - Math.exp(-EASE * dt));
        offset += velocity * dt;
      }

      // Each half of the track is an identical set, so wrap within one set's width.
      const loop = track.scrollWidth / 2;
      if (loop > 0) offset = ((offset % loop) - loop) % loop;
      const transform = `translate3d(${offset.toFixed(2)}px, 0, 0)`;
      if (transform !== lastTransform) {
        track.style.transform = transform;
        lastTransform = transform;
      }

      frame = requestAnimationFrame(tick);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      Object.assign(drag, {
        active: true,
        captured: false,
        moved: false,
        opened: false,
        pointerId: e.pointerId,
        startX: e.clientX,
        lastX: e.clientX,
        lastTime: e.timeStamp,
      });
      velocity = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!drag.active || e.pointerId !== drag.pointerId) return;

      if (!drag.moved && Math.abs(e.clientX - drag.startX) > DRAG_THRESHOLD) {
        drag.moved = true;
        // Capture only once it's a real drag, so plain clicks still reach the badge links.
        viewport.setPointerCapture(e.pointerId);
        drag.captured = true;
        viewport.dataset.dragging = "";
      }

      const dx = e.clientX - drag.lastX;
      const dt = (e.timeStamp - drag.lastTime) / 1000;
      offset += dx;
      if (dt > 0) velocity = velocity * 0.2 + (dx / dt) * 0.8;
      drag.lastX = e.clientX;
      drag.lastTime = e.timeStamp;
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!drag.active || e.pointerId !== drag.pointerId) return;
      drag.active = false;
      // Holding still before letting go means no fling.
      if (e.timeStamp - drag.lastTime > 80) velocity = 0;
      velocity = Math.max(-MAX_FLING, Math.min(MAX_FLING, velocity));
      if (drag.captured) viewport.releasePointerCapture(e.pointerId);
      delete viewport.dataset.dragging;

      // A press that never became a drag is a click: open the badge ourselves rather than
      // relying on the browser's click, which can be lost while the track is being animated.
      if (e.type === "pointerup" && !drag.moved) {
        const link = (e.target as Element).closest<HTMLAnchorElement>(
          "a[href]",
        );
        if (link) {
          window.open(link.href, "_blank", "noopener,noreferrer");
          drag.opened = true;
        }
      }
    };

    // Swallow the pointer's own click (after a drag, or after we opened the link above).
    // Keyboard activation has detail 0 and goes through untouched.
    const onClick = (e: MouseEvent) => {
      if (e.detail !== 0 && (drag.moved || drag.opened)) {
        e.preventDefault();
        e.stopPropagation();
      }
      drag.moved = false;
      drag.opened = false;
    };

    const pause = (e: Event) => {
      if (e instanceof PointerEvent && e.pointerType !== "mouse") return;
      paused = true;
    };
    const resume = (e: Event) => {
      if (e instanceof PointerEvent && e.pointerType !== "mouse") return;
      paused = false;
    };

    viewport.addEventListener("pointerdown", onPointerDown);
    viewport.addEventListener("pointermove", onPointerMove);
    viewport.addEventListener("pointerup", onPointerUp);
    viewport.addEventListener("pointercancel", onPointerUp);
    viewport.addEventListener("click", onClick, true);
    viewport.addEventListener("pointerenter", pause);
    viewport.addEventListener("pointerleave", resume);
    viewport.addEventListener("focusin", pause);
    viewport.addEventListener("focusout", resume);
    window.addEventListener("resize", updateCruise);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateCruise);
      viewport.removeEventListener("pointerdown", onPointerDown);
      viewport.removeEventListener("pointermove", onPointerMove);
      viewport.removeEventListener("pointerup", onPointerUp);
      viewport.removeEventListener("pointercancel", onPointerUp);
      viewport.removeEventListener("click", onClick, true);
      viewport.removeEventListener("pointerenter", pause);
      viewport.removeEventListener("pointerleave", resume);
      viewport.removeEventListener("focusin", pause);
      viewport.removeEventListener("focusout", resume);
    };
  }, []);

  return { viewportRef, trackRef };
}

const Certifications: React.FC = () => {
  const { viewportRef, trackRef } = useDraggableMarquee();

  return (
    <section
      id="certifications"
      className="short:pt-0 short:pb-6 pt-4 pb-6 sm:pb-10"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 sm:px-6">
        {/* Lucide "circle-check-big" (ISC): the tick breaks out through a gap in the circle. */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="text-mute h-10 w-10 shrink-0 sm:h-11 sm:w-11"
        >
          <path d="M21.801 10A10 10 0 1 1 17 3.335" />
          <path d="m9 11 3 3L22 4" />
        </svg>
        <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
          Certifications
          <span className="text-mute block">
            {certifications.length} certifications across AWS and Azure.
          </span>
        </h2>
      </div>

      {/* Tall padding inside, cancelled by negative margins, so hover glows aren't clipped.
          The padding ignores the pointer; only the badge rows can be grabbed. */}
      <div
        ref={viewportRef}
        className="pointer-events-none relative -mt-4 -mb-10 touch-pan-y overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] select-none [&_ul]:pointer-events-auto [&_ul]:cursor-grab data-dragging:[&_ul]:cursor-grabbing motion-reduce:[&_ul]:cursor-auto"
      >
        <div
          ref={trackRef}
          className="flex w-max py-14 will-change-transform motion-reduce:w-full"
        >
          <ul className="flex gap-6 pr-6 motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:pr-0">
            {certifications.map((cert) => (
              <Badge key={cert.alt} cert={cert} />
            ))}
          </ul>
          {/* Duplicate set so the loop is seamless; hidden from assistive tech. */}
          <ul
            className="flex gap-6 pr-6 motion-reduce:hidden"
            aria-hidden="true"
          >
            {certifications.map((cert) => (
              <Badge key={cert.alt} cert={cert} duplicate />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
