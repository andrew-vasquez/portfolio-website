import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Name from "./components/Name.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Skills from "./components/Skills.jsx";
function App() {
  return (
    <>
      <div className="w-full max-w-2xl mx-auto py-8 px-4 sm:py-16 sm:px-8 selection:bg-gray-600 selection:text-white">
        <header>
          <Navbar />
          <Name />
        </header>
        <main>
          <About />
          <Projects />
          <Skills />
        </main>
          <Footer />
      </div>
    </>
  );
}

export default App;
