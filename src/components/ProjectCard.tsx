import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  logo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  logo,
}) => {
  return (
    <Link to={link}>
      <div className="group flex h-96 w-80 cursor-pointer flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
        <div className="h-80 w-full overflow-hidden">
          <img
            src={logo}
            alt={title}
            className="h-full w-full scale-100 transform object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <div className="flex h-full flex-col justify-between p-4">
          <div>
            <h4 className="text-xl font-semibold">{title}</h4>
            <p className="mt-2 line-clamp-3 text-gray-600">{description}</p>
          </div>
          <p className="mt-4 font-semibold text-blue-600 hover:text-blue-800">
            View Project
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
