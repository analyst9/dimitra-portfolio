import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import CV from "./sections/CV";
import Research from "./sections/Research";
import Projects from "./sections/Projects";
import Publications from "./sections/Publications";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const STORAGE_KEY = "dl-language";

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "el" || saved === "en") return saved;
  } catch {
    // localStorage μη διαθέσιμο (π.χ. ιδιωτική περιήγηση)
  }
  const browser = (navigator.language || "el").toLowerCase();
  return browser.startsWith("el") ? "el" : "en";
}

const pageTitles = {
  el: "Δήμητρα Λάμπρου | Ερευνήτρια ΤΝ στην Εκπαίδευση",
  en: "Dimitra Lamprou | AI in Education Researcher",
};

function App() {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = pageTitles[language];
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // αγνόησε
    }
  }, [language]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-slate-950 text-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-full focus:bg-cyan-300 focus:px-5 focus:py-3 focus:font-bold focus:text-slate-950"
        >
          {language === "el" ? "Μετάβαση στο περιεχόμενο" : "Skip to content"}
        </a>

        <Navbar language={language} setLanguage={setLanguage} />

        <main id="main">
          <Hero language={language} />
          <About language={language} />
          <CV language={language} />
          <Research language={language} />
          <Projects language={language} />
          <Publications language={language} />
          <Contact language={language} />
        </main>

        <Footer language={language} />
      </div>
    </MotionConfig>
  );
}

export default App;
