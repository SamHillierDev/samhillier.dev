import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const linkedIn = {
  name: "LinkedIn",
  url: "https://linkedin.com/in/samhillier",
  icon: faLinkedin,
};

export const gitHub = {
  name: "GitHub",
  url: "https://github.com/SamHillierDev",
  icon: faGithub,
};

export const socials = [
  linkedIn,
  gitHub,
  { name: "X (Twitter)", url: "https://x.com/Zyphaex", icon: faXTwitter },
  {
    name: "Instagram",
    url: "https://instagram.com/Zyphaex",
    icon: faInstagram,
  },
];
