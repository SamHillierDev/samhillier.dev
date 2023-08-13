import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/samhillier",
      icon: faLinkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/SamHillierDev",
      icon: faGithub,
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/Zyphaex",
      icon: faXTwitter,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/Zyphaex",
      icon: faInstagram,
    },
  ];

  return (
    <footer className="mt-8 bg-gray-800 py-6 text-white">
      <div className="mb-4 flex justify-center space-x-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-purple-400"
            aria-label={social.name}
          >
            <FontAwesomeIcon icon={social.icon} className="text-xl" />
          </a>
        ))}
      </div>
      <p className="text-center text-sm">
        © {currentYear} Sam Hillier. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
