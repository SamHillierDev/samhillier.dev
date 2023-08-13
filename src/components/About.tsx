import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Certifications from "./Certifications";
import Skills from "./Skills";

const About: React.FC = () => {
  useEffect(() => {
    document.title = `Sam Hillier | Software Engineer`;
  });

  return (
    <section className="py-12">
      <div className="container mx-auto flex flex-wrap items-center gap-12 xl:flex-nowrap">
        <article className="order-2 w-full px-6 text-center xl:order-1 xl:w-1/2 xl:text-left">
          <header>
            <h3 className="text-4xl font-extrabold text-gray-800">About Me</h3>
          </header>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Software engineer with a track record of applying technical
            expertise and collaboration to enhance system health, scalability,
            and long-term organisational excellence.
          </p>
          <p className="text-md mt-3 leading-relaxed text-gray-500">
            If you're interested in collaborating or have any questions — I'd
            love to hear from you!
          </p>
          <p className="mt-4 text-lg font-medium text-purple-800">
            🫵 This site is still in development.
          </p>
          <footer className="mt-6">
            <h4 className="text-xl font-semibold text-gray-800">
              Let's connect
            </h4>
            <div className="mt-4 flex justify-center gap-4 xl:justify-start">
              <a
                href="https://linkedin.com/in/samhillier"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-[#0A66C2] px-5 py-2 text-white shadow-md transition-transform hover:scale-105 hover:bg-[#0a44c2]"
              >
                <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/SamHillierDev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-gray-800 px-6 py-2 text-white shadow-md transition-transform hover:scale-105 hover:bg-gray-900"
              >
                <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
                GitHub
              </a>
            </div>
          </footer>
        </article>
        <aside className="order-1 flex w-full flex-col items-center px-6 xl:order-2 xl:w-1/2">
          <img
            src="https://raw.githubusercontent.com/SamHillierDev/samhillier.dev/main/src/assets/images/sam-hillier.jpg"
            alt="Sam Hillier"
            className="h-50 w-50 cursor-pointer rounded-full shadow-lg transition hover:scale-105"
          />
          <div className="mt-8 w-full">
            <Certifications />
            <Skills />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default About;
