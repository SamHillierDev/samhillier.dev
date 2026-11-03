import { projects } from "../data/projects";

const Projects: React.FC = () =>
  projects.length === 0 ? null : (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none font-bold tracking-[-0.04em]">
        More projects
      </h2>

      <div className="mt-14 space-y-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="border-line bg-surface grid overflow-hidden rounded-[2rem] border md:grid-cols-2"
          >
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              className="aspect-[4/3] h-full w-full object-cover"
            />
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {project.title}
              </h3>
              <p className="font-display text-mute mt-2 text-xl font-medium">
                {project.tagline}
              </p>
              <p className="text-ink/80 mt-6 leading-relaxed">
                {project.description}
              </p>
              {project.stack && (
                <p className="text-mute mt-4 text-sm">
                  {project.stack.join(", ")}
                </p>
              )}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand mt-8 self-start font-medium underline-offset-4 hover:underline"
              >
                {project.linkLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );

export default Projects;
