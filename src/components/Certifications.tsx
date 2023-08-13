import { useState } from "react";
import certifications from "../data/certifications";

const Certifications: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section>
      <div className="relative mx-auto w-full max-w-3xl overflow">
        <div className="relative flex justify-evenly gap-y-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`relative w-[130px] transform rounded-lg transition ${
                hoveredIndex === index ? "z-10 scale-105" : "z-0"
              } ${index !== 0 ? "-ml-[80px]" : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a href={cert.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="w-full rounded-lg object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
