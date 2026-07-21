import LanguageSwitcher from "./LanguageSwitcher";

const navbarTranslations = {
  el: {
    home: "Αρχική",
    about: "Σχετικά",
    research: "Έρευνα",
    projects: "Έργα",
    publications: "Δημοσιεύσεις",
    contact: "Επικοινωνία",
  },

  en: {
    home: "Home",
    about: "About",
    research: "Research",
    projects: "Projects",
    publications: "Publications",
    contact: "Contact",
  },
};

function Navbar({ language, setLanguage }) {
  const text = navbarTranslations[language];

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      console.error(`Δεν βρέθηκε το section: ${sectionId}`);
      return;
    }

    const navbarOffset = 115;

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  };

  const navItems = [
    { id: "home", label: text.home },
    { id: "about", label: text.about },
    { id: "research", label: text.research },
    { id: "projects", label: text.projects },
    { id: "publications", label: text.publications },
    { id: "contact", label: text.contact },
  ];

  return (
    <header className="fixed left-1/2 top-4 z-50 flex h-20 w-[96%] -translate-x-1/2 items-center justify-between rounded-3xl border border-white/10 bg-slate-950/70 px-8 backdrop-blur-xl">
      <button
        type="button"
        onClick={() => handleScroll("home")}
        className="relative z-30 bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-4xl font-extrabold text-transparent"
      >
        DL
      </button>

      <nav className="relative z-40 hidden items-center gap-6 font-bold md:flex">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleScroll(item.id)}
            className="relative z-50 cursor-pointer whitespace-nowrap bg-transparent p-0 text-white transition hover:text-cyan-300"
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="relative z-10">
        <LanguageSwitcher
          language={language}
          setLanguage={setLanguage}
        />
      </div>
    </header>
  );
}

export default Navbar;