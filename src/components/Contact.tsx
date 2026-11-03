import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { linkedIn } from "../data/socials";

const Contact: React.FC = () => (
  <section id="contact" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
    <div className="border-line grid gap-6 border-y py-14 md:grid-cols-[12rem_1fr] md:gap-10 md:py-20">
      <h2 className="text-mute text-sm">Get in touch</h2>

      <div>
        <p className="font-display text-ink/90 max-w-3xl text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.15] font-semibold tracking-tight">
          If you're interested in collaborating or have any questions —{" "}
          <span className="text-mute">I'd love to hear from you!</span>
        </p>

        <a
          href={linkedIn.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-ink text-paper mt-10 inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white sm:px-6 sm:py-3 sm:text-[15px] md:mt-12"
        >
          <FontAwesomeIcon icon={linkedIn.icon} className="text-[1.4em]" />
          Connect on LinkedIn
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
