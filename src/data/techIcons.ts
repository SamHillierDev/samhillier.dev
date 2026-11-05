import type {
  IconDefinition,
  IconName,
} from "@fortawesome/fontawesome-svg-core";
import {
  faAws,
  faCss3Alt,
  faDocker,
  faGitAlt,
  faHtml5,
  faJira,
  faJs,
  faMicrosoft,
  faNodeJs,
  faPython,
  faReact,
  faTypescript,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faMasksTheater,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import {
  type SimpleIcon,
  siCypress,
  siExpress,
  siJest,
  siMongodb,
  siNestjs,
  siNextdotjs,
  siTailwindcss,
  siTerraform,
  siVite,
  siVitest,
} from "simple-icons";

// Wraps a Simple Icons glyph (24×24 path) so it renders through FontAwesomeIcon like the rest.
const fromSimpleIcon = (icon: SimpleIcon): IconDefinition => ({
  prefix: "fab",
  iconName: icon.slug as IconName,
  icon: [24, 24, [], "", icon.path],
});

// Brand icons keyed by the tech names used in skills and project stacks. Names without an entry render as text only.
const techIcons: Record<string, IconDefinition> = {
  TypeScript: faTypescript,
  JavaScript: faJs,
  Python: faPython,
  SQL: faDatabase,
  HTML: faHtml5,
  CSS: faCss3Alt,
  React: faReact,
  "Next.js": fromSimpleIcon(siNextdotjs),
  "Node.js": faNodeJs,
  Express: fromSimpleIcon(siExpress),
  NestJS: fromSimpleIcon(siNestjs),
  Tailwind: fromSimpleIcon(siTailwindcss),
  Terraform: fromSimpleIcon(siTerraform),
  "AWS CDK": faAws,
  Vitest: fromSimpleIcon(siVitest),
  Jest: fromSimpleIcon(siJest),
  Playwright: faMasksTheater,
  Cypress: fromSimpleIcon(siCypress),
  AWS: faAws,
  LLM: faRobot,
  Azure: faMicrosoft,
  Docker: faDocker,
  MongoDB: fromSimpleIcon(siMongodb),
  Vite: fromSimpleIcon(siVite),
  Git: faGitAlt,
  Jira: faJira,
};

export default techIcons;
