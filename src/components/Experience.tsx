import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import experience from "../data/experience";

const Experience: React.FC = () => (
  <section id="experience" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
    <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none font-bold tracking-[-0.04em]">
      Experience
    </h2>

    <div className="mt-14 space-y-8">
      {experience.map((role) => (
        <article
          key={role.organisation}
          className="border-line bg-surface overflow-hidden rounded-[2rem] border shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
        >
          <header className="grid gap-6 p-8 sm:grid-cols-2 sm:items-end sm:gap-24 sm:p-12">
            <div>
              <h3 className="font-display text-4xl leading-none font-bold tracking-tight sm:text-5xl">
                {role.logo ? (
                  <img
                    src={role.logo}
                    alt={role.organisation}
                    width={1174}
                    height={338}
                    className="block h-12 w-auto sm:h-16"
                  />
                ) : (
                  role.organisation
                )}
              </h3>
              <p className="font-display mt-6 text-xl font-semibold tracking-tight">
                {role.title}
              </p>
              <p className="text-mute mt-1 text-sm">
                {role.period} · {role.location}
              </p>
            </div>
            <p className="text-ink/75 text-lg leading-relaxed">
              {role.summary}
            </p>
          </header>

          <dl className="border-line grid border-t sm:grid-cols-2">
            {role.metrics.map((metric) => (
              <div
                key={metric.value}
                className="border-line flex flex-col-reverse justify-end border-b p-8 sm:p-12 sm:[&:not(:last-child)]:border-r"
              >
                <dt className="text-mute mt-3 max-w-xs leading-relaxed">
                  {metric.label}
                </dt>
                <dd className="font-display text-6xl font-bold tracking-tight sm:text-7xl">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>

          <ul className="grid gap-x-12 gap-y-8 p-8 sm:grid-cols-2 sm:p-12">
            {role.highlights.map((highlight) => (
              <li key={highlight.title} className="flex gap-5">
                <span
                  aria-hidden="true"
                  className="text-ink/80 flex w-11 shrink-0 justify-center pt-1 text-4xl"
                >
                  <FontAwesomeIcon icon={highlight.icon} />
                </span>
                <div>
                  <h4 className="font-display text-lg font-semibold">
                    {highlight.title}
                  </h4>
                  <p className="text-ink/70 mt-1 leading-relaxed">
                    {highlight.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default Experience;
