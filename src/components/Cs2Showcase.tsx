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
      <div className="relative overflow-hidden pb-24 sm:pb-32">
        <div className="pointer-events-none absolute top-[85%] left-1/2 aspect-square w-[140vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,106,0,0.28),transparent)]" />
        {/* Fade the glow out at the bottom so it blends into the stats below. */}
        <div className="to-cs2-night pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-b from-transparent" />

        {/* The logo is the title. Its dark background matches the section, so the band runs edge to edge and only fades at the bottom. */}
        <div className="from-cs2-night relative bg-linear-to-b from-75% to-transparent">
          <h2>
            <img
              src={featured.logo}
              alt="CS2.TEAM"
              width={1080}
              height={1080}
              className="mx-auto aspect-[16/9] w-full max-w-5xl [mask-image:linear-gradient(to_bottom,black_78%,transparent)] [mask-composite:intersect] object-cover min-[1024px]:[mask-image:linear-gradient(to_bottom,black_78%,transparent),linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]"
            />
          </h2>
        </div>

        <div className="relative mx-auto w-full max-w-5xl px-4 text-center sm:px-6">
          <div className="relative -mt-[7%]">
            <p className="text-sm text-white/55">Founded {featured.founded}</p>
            <p className="font-display mx-auto mt-3 max-w-2xl text-xl font-medium text-balance whitespace-pre-line text-white/80 sm:text-2xl">
              {featured.tagline}
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

      <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <a
          href={press.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group hover:border-cs2/50 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-[border-color,box-shadow] duration-300 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_60px_-20px_rgba(255,106,0,0.5)] md:grid-cols-[6fr_5fr]"
        >
          <div className="overflow-hidden">
            <img
              src={press.image}
              alt={`CS2.TEAM featured in the ${press.outlet} Ecosystem Showcase`}
              loading="lazy"
              className="aspect-[10/7] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <p className="text-cs2 text-sm font-medium">
              As featured on {press.outlet}
            </p>
            <h3 className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {press.headline}
            </h3>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/75">
              {press.description}
            </p>
            <span className="mt-8 inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-[15px] font-medium text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-colors duration-300 group-hover:border-white/25 group-hover:bg-white/[0.08] group-hover:text-white">
              {press.linkLabel}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-[11px] transition-transform duration-300 group-hover:translate-x-px group-hover:-translate-y-px"
              />
            </span>
          </div>
        </a>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <article className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:grid-cols-[6fr_5fr]">
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <p className="text-cs2 text-sm font-medium">In partnership with</p>
            <h3 className="font-display mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              {partner.name}
            </h3>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/75">
              {partner.description}
            </p>
            <a
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-[15px] font-medium text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
            >
              <FontAwesomeIcon icon={faXTwitter} />
              {partner.linkLabel}
            </a>
          </div>
          <img
            src={partner.image}
            alt={`${partner.name} logo`}
            loading="lazy"
            className="order-first aspect-[4/3] h-full w-full object-cover md:order-last"
          />
        </article>
      </div>
    </section>
  );
};

export default Cs2Showcase;
