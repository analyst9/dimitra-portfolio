import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Research from "./sections/Research";
import Projects from "./sections/Projects";
import Publications from "./sections/Publications";
import Contact from "./sections/Contact";

function App() {
  const [language, setLanguage] = useState("el");

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar
        language={language}
        setLanguage={setLanguage}
      />

      <Hero language={language} />
      <About language={language} />
      <Research language={language} />
      <Projects language={language} />
      <Publications language={language} />
      <Contact language={language} /> 
    </div>
  );
}

export default App;