import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import Certifications from "./Certifications";
import Skills from "./Skills";

const About: React.FC = () => {
  useEffect(() => {
    document.title = `Sam Hillier | Software Engineer`;
  });

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <article className="mx-auto max-w-4xl text-center xl:text-left">
          <div className="flex flex-col items-center gap-6 xl:flex-row xl:items-start">
            <div className="h-32 w-32 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 xl:h-40 xl:w-40">
              <img
                src="https://raw.githubusercontent.com/SamHillierDev/samhillier.dev/main/src/assets/images/sam-hillier.jpg"
                alt="Sam Hillier"
                className="h-full w-full cursor-pointer rounded-full shadow-lg transition hover:scale-105"
              />
            </div>
            <div className="flex-1">
              <header>
                <h3 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Sam Hillier</h3>
              </header>
              <p className="mt-4 text-lg leading-snug text-gray-600">
                Software engineer with a track record of applying technical
                expertise and collaboration to enhance system health, scalability,
                and long-term organisational excellence.
              </p>
              <p className="text-md mt-2 leading-snug text-gray-500">
                If you're interested in collaborating or have any questions — I'd
                love to hear from you!
              </p>
              <div className="mt-6 flex justify-center gap-4 xl:justify-start">
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
            </div>
          </div>
        </article>
        <div className="mt-12">
          <Certifications />
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
