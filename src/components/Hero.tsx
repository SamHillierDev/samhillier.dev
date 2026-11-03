import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { gitHub, linkedIn } from "../data/socials";
import { prefersReducedMotion } from "../hooks/useScrollProgress";

const roles = [
  "Software Engineer",
  "Cloud Engineer",
  "Backend Engineer",
  "Machine Learning Engineer",
];

function useCyclingRole() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(roles[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const target = roles[index];

    if (!deleting && text === target) {
      const hold = setTimeout(() => setDeleting(true), 3000);
      return () => clearTimeout(hold);
    }
    const step = setTimeout(
      () => {
        if (!deleting) {
          setText(target.slice(0, text.length + 1));
          return;
        }
        const next = text.slice(0, -1);
        setText(next);
        // Fully deleted: move on to typing the next role.
        if (next === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % roles.length);
        }
      },
      deleting ? 45 : 90,
    );
    return () => clearTimeout(step);
  }, [text, deleting, index]);

  return text;
}

const Hero: React.FC = () => {
  const role = useCyclingRole();

  return (
    <section
      id="top"
      className="short:pt-14 short:pb-4 mx-auto grid w-full max-w-6xl flex-1 content-center items-center gap-6 px-4 pt-16 pb-2 sm:gap-8 sm:px-6 sm:pt-20 sm:pb-6 md:grid-cols-[1fr_auto] md:gap-16"
    >
      <img
        src="/assets/images/sam-hillier.jpg"
        alt="Sam Hillier"
        width={320}
        height={320}
        className="ring-brand ring-offset-paper h-20 w-20 justify-self-center rounded-full object-cover ring-2 ring-offset-4 sm:h-24 sm:w-24 md:order-last md:h-[min(16rem,38svh)] md:w-[min(16rem,38svh)] md:justify-self-auto md:ring-offset-8 lg:h-[min(20rem,38svh)] lg:w-[min(20rem,38svh)]"
      />
      <div>
        <h1 className="font-display flex items-center justify-center gap-[0.2em] pb-2 text-[clamp(3rem,8vw,6rem)] leading-[0.9] font-bold tracking-[-0.045em] md:justify-start">
          <span
            aria-hidden="true"
            className="motion-safe:animate-wave inline-block origin-[70%_70%] text-[0.75em]"
          >
            👋
          </span>
          <span className="bg-linear-to-b from-white to-white/55 bg-clip-text text-transparent">
            Sam Hillier
          </span>
        </h1>
        <p
          className="font-display text-mute short:mt-2 mt-4 h-[1.3em] text-center text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold tracking-tight md:text-left"
          aria-label={roles.join(", ")}
        >
          <span aria-hidden="true">
            {role}
            <span className="animate-blink text-brand font-normal">|</span>
          </span>
        </p>
        <p className="text-ink/80 short:mt-5 mt-8 max-w-xl text-lg leading-relaxed">
          Software engineer working across cloud infrastructure, backend systems
          and machine learning.
        </p>
        <div className="short:mt-5 isolate mt-6 flex flex-wrap gap-3 sm:mt-8">
          <a
            href={linkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-ring bg-ink text-paper flex items-center gap-2.5 rounded-full px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white sm:px-6 sm:py-3 sm:text-[15px]"
          >
            <FontAwesomeIcon icon={linkedIn.icon} className="text-[1.4em]" />
            Connect on LinkedIn
          </a>
          <a
            href={gitHub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border-ink/35 text-ink hover:border-ink/70 flex items-center gap-2.5 rounded-full border bg-white/[0.06] px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/[0.12] sm:px-6 sm:py-3 sm:text-[15px]"
          >
            <FontAwesomeIcon icon={gitHub.icon} className="text-[1.4em]" />
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
