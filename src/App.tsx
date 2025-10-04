import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
// import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 container mx-auto mt-20">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <About />
                  {/* <Projects /> */}
                </>
              }
            />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
