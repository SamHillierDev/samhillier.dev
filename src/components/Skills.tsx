import { skills } from "../data/skills";

const Skills: React.FC = () => {
  return (
    <div className="mt-8 px-4">
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <img
              src={skill.badge}
              alt={`${skill.name} badge`}
              className="transition hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
