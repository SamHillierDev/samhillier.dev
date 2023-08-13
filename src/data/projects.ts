import cs2TeamLogo from "../assets/images/projects/cs2Team.jpg";
import cs2TeamBanner from "../assets/images/projects/cs2team-banner.jpg";
import derbyEsportsLogo from "../assets/images/projects/derby-esports-mockup.png";
import derbyEsportsBanner from "../assets/images/projects/derby-esports-banner.png";
// import cleanappLogo from "../assets/images/projects/cleanapp-logo-blue.png";
// import cleanappBanner from "../assets/images/projects/cleanapp-banner.png";

const projects = {
  cs2team: {
    title: "CS2.TEAM",
    tagline: "Find esports teams and players on CS2.TEAM.",
    content:
      "At CS2.TEAM, our mission is to connect aspiring players with esports teams.<br /><br />" +
      "Whether you're a solo player searching for a squad or a team seeking new talent,<br />" +
      "our platform is designed to help you elevate your game to the next level.<br /><br />" +
      "Founded on 22nd March, 2023, by Sam Hillier. CS2.TEAM emerged from the firsthand experience of recruiting players for the team Derby Esports, and the realisation of the need for a more streamlined and effective way to recruit players and manage a team.",
    logo: cs2TeamLogo,
    banner: cs2TeamBanner,
    link: "https://linkedin.com/company/cs2team",
    gallery: ["#", "#"],
  },
  derbyesports: {
    title: "Derby Esports",
    tagline: "Esports organisation and gaming community.",
    content:
      "Derby Esports is committed to empowering gamers, promoting esports competitions, and fostering a sense of community.<br /><br />" +
      "From amateur events to professional leagues, Derby Esports is your gateway to competitive gaming.",
    logo: derbyEsportsLogo,
    banner: derbyEsportsBanner,
    link: "https://x.com/derbyesports",
    gallery: ["#", "#"],
  },
  // cleanapp: {
  //   title: "Cleanapp",
  //   tagline: "Simplifying cleanliness with smart solutions.",
  //   content:
  //     "Cleanapp is your go-to solution for managing cleanliness, whether at home or in the workplace. With user-friendly features and a focus on sustainability, Cleanapp ensures your spaces are spotless.",
  //   logo: cleanappLogo,
  //   banner: cleanappBanner,
  //   link: "http://cleanapp.com",
  //   gallery: ["#", "#"],
  // },
};

export default projects;
