import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skills } from "../data/skills";
import techIcons from "../data/techIcons";

const Skills: React.FC = () => (
  <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
    <h2 className="sr-only">Toolkit</h2>
    <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
      {skills.map((group) => (
        <div key={group.category}>
          <h3 className="text-mute text-sm">{group.category}</h3>
          <ul className="font-display mt-3 space-y-1 text-2xl font-semibold tracking-tight">
            {group.items.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="text-ink/60 flex w-[1.1em] shrink-0 justify-center text-[0.8em]"
                >
                  {techIcons[item] && (
                    <FontAwesomeIcon icon={techIcons[item]} />
                  )}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
