import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams();
  const project = projects[projectId as keyof typeof projects];

  useEffect(() => {
    if (project) {
      document.title = `Sam Hillier | ${project.title}`;
    } else {
      document.title = "Sam Hillier | Software Engineer";
    }
  }, [project]);

  if (!project) {
    return (
      <div className="mt-20 text-center">
        <h1 className="text-3xl font-semibold">Project Not Found</h1>
        <Link
          to="/"
          className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
        >
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div
        className="relative h-64 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${project.banner})` }}
      ></div>
      <div className="text-center">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <h2 className="text-2xl font-semibold">{project.tagline}</h2>
      </div>
      <div className="mx-auto max-w-4xl">
        <p
          className="text-center text-lg text-gray-700"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
      </div>
      {/* <div className="mx-auto max-w-4xl">
        <h3 className="mb-4 text-xl font-semibold">Gallery</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {project.gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Screenshot ${index + 1}`}
              className="h-64 w-full rounded-lg object-cover shadow"
            />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded bg-blue-500 px-6 py-3 text-white hover:bg-blue-700"
        >
          Visit Project
        </a>
      </div> */}
    </div>
  );
};

export default ProjectDetail;
