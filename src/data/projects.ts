import {
  faChartLine,
  faMagnifyingGlass,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import cs2TeamLogo from "../assets/images/projects/cs2team-header.jpg";
import enjinFeature from "../assets/images/projects/enjin-feature.jpg";
import derbyEsportsMockup from "../assets/images/projects/derby-esports-mockup.png";
// import cleanappLogo from "../assets/images/projects/cleanapp-logo-blue.png";

export interface Project {
  title: string;
  tagline: string;
  description: string;
  image: string;
  link: string;
  linkLabel: string;
  stack?: string[];
}

export const featured = {
  title: "CS2.TEAM",
  // Shown on two lines with "largest" highlighted; the word joiner and no-break space keep "Counter-Strike 2" together.
  tagline: {
    lead: "I built the",
    highlight: "largest",
    rest: "Counter-\u2060Strike\u00a02 team-finding platform.",
  },
  founded: "March 2023",
  logo: cs2TeamLogo,
  link: "https://cs2.team",
  linkLabel: "Visit CS2.TEAM",
  press: {
    outlet: "Enjin",
    date: "2026-05-09",
    headline: "CS2.TEAM Introduces NFTs to Esports Team Finder",
    description:
      "Enjin spotlighted CS2.TEAM in its Ecosystem Showcase, covering how the platform brings NFTs to esports team-finding.",
    image: enjinFeature,
    link: "https://enjin.io/blog/cs-2-team-introduces-nf-ts-to-esports-team-finder/",
    linkLabel: "Read the article",
  },
  stack: ["TypeScript", "React", "Node.js", "AWS"],
  stats: [
    { icon: faUsers, value: "10,000+", label: "registered users" },
    {
      icon: faMagnifyingGlass,
      value: "5,000+",
      label: "Google search clicks in 28 days",
    },
    {
      icon: faChartLine,
      value: "£1,000+",
      label: "annual recurring revenue",
    },
  ],
  partner: {
    name: "Derby Esports",
    description:
      "CS2.TEAM grew out of recruiting for Derby Esports, a community committed to empowering gamers and promoting esports competitions, from amateur events to professional leagues.",
    image: derbyEsportsMockup,
    link: "https://x.com/derbyesports",
    linkLabel: "Follow on X",
  },
};

// The "More projects" section and its nav link stay hidden while this is empty.
export const projects: Project[] = [
  // {
  //   title: "Cleanapp",
  //   tagline: "Simplifying cleanliness with smart solutions.",
  //   description:
  //     "Managing cleanliness at home or in the workplace, with a focus on sustainability.",
  //   image: cleanappLogo,
  //   link: "http://cleanapp.com",
  //   linkLabel: "Visit Cleanapp",
  // },
];
