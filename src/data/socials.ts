import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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

export const email = {
  name: "Email",
  url: "mailto:sam@hillier.uk",
  icon: faEnvelope,
};

export const socials = [
  linkedIn,
  gitHub,
  email,
  { name: "X (Twitter)", url: "https://x.com/Zyphaex", icon: faXTwitter },
  {
    name: "Instagram",
    url: "https://instagram.com/Zyphaex",
    icon: faInstagram,
  },
];
