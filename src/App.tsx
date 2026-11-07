import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Certifications from "./components/Certifications";
import Cs2Showcase from "./components/Cs2Showcase";
import ReviewCvShowcase from "./components/ReviewCvShowcase";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero and badges fill exactly one screen, so the next scroll lands on CS2.TEAM. */}
        <div className="relative isolate flex min-h-svh flex-col">
          {/* Faint grid behind the hero, fading out toward the edges and the badges. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.06)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)] bg-size-[3.5rem_3.5rem] bg-center"
          />
          <Hero />
          <Certifications />
        </div>
        <Cs2Showcase />
        <ReviewCvShowcase />
        <Projects />
        <Contact />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default App;
