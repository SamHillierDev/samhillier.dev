import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gitHub, linkedIn } from "../data/socials";

/** Placeholder "SH" mark, matching /favicon.svg. */
export const Monogram: React.FC<{ className?: string }> = ({ className }) => (
  <span
    aria-hidden="true"
    className={`bg-ink text-paper inline-flex shrink-0 items-center justify-center rounded-[22%] font-bold tracking-tight ${className ?? ""}`}
  >
    SH
  </span>
);

const Nav: React.FC = () => (
  <nav className="bg-paper/75 border-line fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl backdrop-saturate-150">
    <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:px-6">
      <a
        href="#top"
        className="font-display flex items-center gap-2 text-[15px] font-semibold"
      >
        <Monogram className="h-6 w-6 text-[10px]" />
        Sam Hillier
      </a>
      <div className="flex items-center gap-2">
        <a
          href={linkedIn.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect on LinkedIn"
          className="bg-ink text-paper flex h-8 items-center gap-2 rounded-full px-3 text-[13px] font-medium transition-colors hover:bg-white sm:px-4"
        >
          <FontAwesomeIcon icon={linkedIn.icon} />
          <span className="hidden sm:inline">Connect on LinkedIn</span>
        </a>
        <a
          href={gitHub.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View GitHub"
          className="border-line hover:border-ink/60 flex h-8 items-center gap-2 rounded-full border px-3 text-[13px] font-medium transition-colors sm:px-4"
        >
          <FontAwesomeIcon icon={gitHub.icon} />
          <span className="hidden sm:inline">View GitHub</span>
        </a>
      </div>
    </div>
  </nav>
);

export default Nav;
