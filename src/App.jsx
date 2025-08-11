import { motion } from "motion/react";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Name from "./components/Name.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Skills from "./components/Skills.jsx";
import { variants, transitions, staggerContainer } from "./utils/animations.js";
import "./styles/animations.css";

function App() {
  return (
    <>
      <motion.div 
        className="w-full max-w-2xl mx-auto py-8 px-4 sm:py-16 sm:px-8 selection:bg-gray-600 selection:text-white"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        style={{ willChange: "transform, opacity" }}
      >
        <motion.header
          variants={variants.slideDown}
          transition={transitions.spring}
          style={{ willChange: "transform, opacity" }}
        >
          <Navbar />
          <Name />
        </motion.header>
        <motion.main
          variants={variants.fadeIn}
          transition={transitions.medium}
          style={{ willChange: "opacity" }}
        >
          <About />
          <Projects />
          <Skills />
        </motion.main>
        <motion.div
          variants={variants.slideUp}
          transition={transitions.spring}
          style={{ willChange: "transform, opacity" }}
        >
          <Footer />
        </motion.div>
      </motion.div>
    </>
  );
}

export default App;
