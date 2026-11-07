import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "../data/socials";
import { Monogram } from "./Nav";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-line border-t">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-4 px-4 py-8 text-sm text-white/50 sm:flex-row sm:px-6">
        <p className="flex items-center gap-2">
          <Monogram className="h-5 w-5 text-[0.5rem]" />© {currentYear} Sam Hillier
        </p>
        <ul className="flex gap-5">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-lg transition-colors hover:text-white"
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
