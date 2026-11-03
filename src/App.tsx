import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Cs2Showcase from "./components/Cs2Showcase";
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
        <div className="flex min-h-svh flex-col">
          <Hero />
          <Certifications />
        </div>
        <Cs2Showcase />
        <Experience />
        <Projects />
        <Contact />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default App;
