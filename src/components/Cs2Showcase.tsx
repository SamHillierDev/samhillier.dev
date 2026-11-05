import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { featured } from "../data/projects";
import techIcons from "../data/techIcons";
import CountUp from "./CountUp";

const { partner, press } = featured;

const Cs2Showcase: React.FC = () => {
  return (
    <section
      id="cs2team"
      className="bg-cs2-night border-line border-y text-white"
    >
      <div className="relative overflow-hidden pb-12 sm:pb-16">
        <div className="pointer-events-none absolute top-[85%] left-1/2 aspect-square w-[140vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,106,0,0.28),transparent)]" />
        {/* Fade the glow out at the bottom so it blends into the stats below. */}
        <div className="to-cs2-night pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-b from-transparent" />

        {/* The banner is the title, sized to the page's content column. The band behind it uses the banner's own background tone, so the edge fades are seamless at every width; it blends into the section at the bottom. */}
        <div className="from-cs2-banner relative bg-linear-to-b from-75% to-transparent">
          <h2 className="mx-auto max-w-6xl px-4 sm:px-6">
            {/* The fade mask sits on the frame, not the image, so zooming the image in doesn't push the fades out of view. */}
            <div className="aspect-[3/1] overflow-hidden [mask-image:linear-gradient(to_bottom,black_70%,transparent),linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [mask-composite:intersect]">
              <img
                src={featured.logo}
                alt="CS2.TEAM"
                width={2172}
                height={724}
                className="h-full w-full scale-[1.5] object-cover"
              />
            </div>
          </h2>
        </div>

        <div className="relative mx-auto w-full max-w-5xl px-4 text-center sm:px-6">
          <div className="relative -mt-[3%]">
            <p className="text-sm text-white/55">Founded {featured.founded}</p>
            <p className="font-cs2 mx-auto mt-3 max-w-4xl text-[clamp(1.6rem,4vw,2.5rem)] leading-[1.15] font-semibold tracking-tight text-balance text-white">
              {featured.tagline.lead}{" "}
              <span className="text-cs2 italic">
                {featured.tagline.highlight}
              </span>
              <br />
              {featured.tagline.rest}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-cs2-night relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-linear-to-b from-[#ff8c3a] to-[#ff6a00] py-2.5 pr-6 pl-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-2px_0_rgba(0,0,0,0.15),0_10px_40px_-8px_rgba(255,106,0,0.75)] transition-[translate,box-shadow] duration-300 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-2px_0_rgba(0,0,0,0.15),0_16px_60px_-8px_rgba(255,106,0,1)] motion-safe:hover:-translate-y-0.5"
              >
                {/* Sheen that sweeps across on hover. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-linear-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[500%] motion-reduce:hidden"
                />
                <span className="bg-cs2-night text-cs2 relative grid h-8 w-8 place-items-center rounded-full">
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-[12px] transition-transform duration-300 group-hover:translate-x-px group-hover:-translate-y-px"
                  />
                </span>
                <span className="font-cs2 relative text-[17px] font-semibold italic">
                  {featured.linkLabel}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <dl className="grid gap-10 border-t border-white/10 pt-12 sm:grid-cols-3">
          {featured.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              {/* Indented by the icon slot width plus gap so the label lines up with the figure. */}
              <dt className="mt-2 pl-14 text-white/55 sm:pl-16">
                {stat.label}
              </dt>
              <dd className="font-display text-cs2 flex items-center gap-4 text-5xl font-bold tracking-tight sm:text-6xl">
                <span
                  aria-hidden="true"
                  className="flex w-10 shrink-0 justify-center text-[0.6em] text-white sm:w-12"
                >
                  <FontAwesomeIcon icon={stat.icon} />
                </span>
                <CountUp value={stat.value} />
              </dd>
            </div>
          ))}
        </dl>
        <ul className="mt-10 flex flex-wrap items-center gap-2">
          <li className="mr-1 text-sm text-white/55">Developed with</li>
          {featured.stack.map((tech) => (
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

      <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-24 sm:px-6 md:grid-cols-3">
        <a
          href={press.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group hover:border-cs2/50 flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-[border-color,box-shadow] duration-300 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_60px_-20px_rgba(255,106,0,0.5)]"
        >
          <div className="overflow-hidden border-b border-white/10">
            <img
              src={press.image}
              alt={`CS2.TEAM featured in the ${press.outlet} Ecosystem Showcase`}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-col p-5">
            <div className="flex items-center gap-3 text-sm">
              <span className="bg-cs2/15 text-cs2 rounded-full px-2.5 py-0.5 font-medium">
                Press
              </span>
              <time dateTime={press.date} className="text-white/60">
                {new Date(press.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  timeZone: "UTC",
                })}
              </time>
            </div>
            <h3 className="font-display mt-3 text-xl font-bold tracking-tight">
              {press.headline}
            </h3>
            <p className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-white/70">
              {press.description}
            </p>
          </div>
        </a>

        <a
          href={partner.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group hover:border-cs2/50 flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-[border-color,box-shadow] duration-300 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_60px_-20px_rgba(255,106,0,0.5)]"
        >
          <div className="overflow-hidden border-b border-white/10">
            <img
              src={partner.image}
              alt={`${partner.name} logo`}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-col p-5">
            <div className="flex items-center gap-3 text-sm">
              <span className="bg-cs2/15 text-cs2 rounded-full px-2.5 py-0.5 font-medium">
                Partner
              </span>
              <span className="inline-flex items-center gap-1.5 text-white/60 transition-colors duration-300 group-hover:text-white/90">
                <FontAwesomeIcon icon={faXTwitter} className="text-[11px]" />
                {partner.linkLabel}
              </span>
            </div>
            <h3 className="font-display mt-3 text-xl font-bold tracking-tight">
              {partner.name}
            </h3>
            <p className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-white/70">
              {partner.description}
            </p>
          </div>
        </a>

        <div
          aria-hidden="true"
          className="hidden flex-col overflow-hidden rounded-2xl border border-white/[0.06] md:flex"
        >
          <div className="aspect-[16/10] w-full bg-white/[0.03]" />
          <div className="flex flex-col gap-3 p-5">
            <div className="h-5 w-1/4 rounded-full bg-white/[0.04]" />
            <div className="mt-1 h-6 w-3/5 rounded-md bg-white/[0.04]" />
            <div className="mt-1 h-4 w-full rounded bg-white/[0.03]" />
            <div className="h-4 w-4/5 rounded bg-white/[0.03]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cs2Showcase;
