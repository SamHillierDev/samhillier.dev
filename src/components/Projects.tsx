import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const Projects: React.FC = () => {
  return (
    <section className="py-8">
      <h3 className="mb-6 text-center text-3xl font-semibold">Projects</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {Object.entries(projects).map(([key, project]) => (
          <ProjectCard
            key={key}
            title={project.title}
            description={project.tagline}
            link={`/projects/${key}`}
            logo={project.logo}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
