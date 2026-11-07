import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { reviewCv } from "../data/projects";
import techIcons from "../data/techIcons";
import ReviewCvTestimonials from "./ReviewCvTestimonials";

/** ReviewCV mark, review.cv/favicon.svg recoloured to this section's blue. */
const ReviewCvMark: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
    <defs>
      <linearGradient id="rcv-mark" x1="0" y1="0" x2="32" y2="32">
        <stop offset="0%" stopColor="#2f6bff" />
        <stop offset="100%" stopColor="#3fa0ff" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="8" fill="url(#rcv-mark)" />
    <g
      fill="none"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 7h8l5 5v13a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" />
      <polyline points="17,7 17,13 23,13" />
      <line x1="12" y1="17" x2="20" y2="17" />
      <line x1="12" y1="21" x2="17" y2="21" />
    </g>
  </svg>
);

const ReviewCvShowcase: React.FC = () => {
  return (
    <section id="reviewcv" className="bg-paper text-white">
      <div className="relative overflow-hidden pb-12 sm:pb-16">
        <div className="pointer-events-none absolute top-[85%] left-1/2 aspect-square w-[140vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(47,125,255,0.28),transparent)]" />
        {/* Fade the glow out at the bottom so it blends into the steps below. */}
        <div className="to-paper pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-b from-transparent" />

        {/* The wordmark is the title, in place of CS2.TEAM's banner image. Like that banner's band, this solid band hides the top of the glow so it only lights up behind the tagline and button. */}
        <div className="from-paper relative bg-linear-to-b from-75% to-transparent px-4 pt-20 pb-12 text-center sm:px-6 sm:pt-28 sm:pb-16">
          <h2 className="font-display inline-flex items-center gap-4 text-[clamp(2.75rem,9vw,5.5rem)] leading-none font-bold tracking-tight">
            <ReviewCvMark className="h-[0.9em] w-[0.9em] shrink-0 drop-shadow-[0_10px_40px_rgba(47,125,255,0.6)]" />
            <span>
              Review
              <span className="bg-linear-to-r from-[#2f7dff] to-[#6cb6ff] bg-clip-text text-transparent">
                CV
              </span>
            </span>
          </h2>
        </div>

        <div className="relative mx-auto w-full max-w-5xl px-4 text-center sm:px-6">
          <p className="font-display mx-auto max-w-4xl text-[clamp(1.6rem,4vw,2.5rem)] leading-[1.15] font-semibold tracking-tight text-balance text-white">
            {reviewCv.tagline.lead}{" "}
            <span className="text-rcv pr-[0.08em] italic">
              {reviewCv.tagline.highlight}
            </span>{" "}
            {reviewCv.tagline.rest}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={reviewCv.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-linear-to-b from-[#5598ff] to-[#2f6bff] py-2.5 pr-6 pl-2.5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-2px_0_rgba(0,0,0,0.15),0_10px_40px_-8px_rgba(47,125,255,0.75)] transition-[translate,box-shadow] duration-300 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-2px_0_rgba(0,0,0,0.15),0_16px_60px_-8px_rgba(47,125,255,1)] motion-safe:hover:-translate-y-0.5"
            >
              {/* Sheen that sweeps across on hover. */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[500%] motion-reduce:hidden"
              />
              <span className="bg-paper text-rcv relative grid h-8 w-8 place-items-center rounded-full">
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="text-[0.75rem] transition-transform duration-300 group-hover:translate-x-px group-hover:-translate-y-px"
                />
              </span>
              <span className="font-display relative text-[1.0625rem] font-semibold">
                {reviewCv.linkLabel}
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <ol className="grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-3">
          {reviewCv.steps.map((step) => (
            <li key={step.title} className="flex gap-4">
              <span
                aria-hidden="true"
                className="text-rcv flex w-10 shrink-0 justify-center pt-1 text-2xl sm:w-12 sm:text-3xl"
              >
                <FontAwesomeIcon icon={step.icon} />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-white/55">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <ul className="mt-10 flex flex-wrap items-center gap-2">
          <li className="mr-1 text-sm text-white/55">Developed with</li>
          {reviewCv.stack.map((tech) => (
            <li
              key={tech}
              className="flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-sm text-white/75"
            >
              {techIcons[tech] && (
                <FontAwesomeIcon
                  icon={techIcons[tech]}
                  aria-hidden="true"
                  className="text-base text-white/90"
                />
              )}
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <ReviewCvTestimonials />
    </section>
  );
};

export default ReviewCvShowcase;
