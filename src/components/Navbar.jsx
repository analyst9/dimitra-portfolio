import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";
import LanguageSwitcher from "./LanguageSwitcher";
import { scrollToSection } from "../utils/scroll";

const navbarTranslations = {
  el: {
    home: "Αρχική",
    about: "Σχετικά",
    cv: "Βιογραφικό",
    research: "Έρευνα",
    projects: "Έργα",
    publications: "Δημοσιεύσεις",
    services: "Υπηρεσίες",
    contact: "Επικοινωνία",
    openMenu: "Άνοιγμα μενού",
    closeMenu: "Κλείσιμο μενού",
  },
  en: {
    home: "Home",
    about: "About",
    cv: "CV",
    research: "Research",
    projects: "Projects",
    publications: "Publications",
    services: "Services",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
};

const sectionIds = [
  "home",
  "about",
  "cv",
  "research",
  "projects",
  "publications",
  "services",
  "contact",
];

function Navbar({ language, setLanguage }) {
  const text = navbarTranslations[language];
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Επισήμανση της ενότητας που βλέπει ο επισκέπτης
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const go = (id) => {
    if (menuOpen) {
      setMenuOpen(false);
      // περίμενε να κλείσει το μενού στο κινητό πριν την κύλιση
      setTimeout(() => scrollToSection(id), 260);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <header
      className={`fixed left-1/2 top-3 z-50 w-[calc(100%-1.5rem)] max-w-7xl -translate-x-1/2 rounded-3xl border transition-all duration-300 md:top-4 ${
        scrolled || menuOpen
          ? "border-white/10 bg-slate-950/80 shadow-[0_10px_40px_rgba(2,6,23,.6)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="flex h-16 items-center justify-between px-5 md:h-[72px] md:px-7">
        <button
          type="button"
          onClick={() => go("home")}
          aria-label="Dimitra Lamprou"
          className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-3xl font-black tracking-tight text-transparent"
        >
          DL
        </button>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                go(id);
              }}
              aria-current={active === id ? "true" : undefined}
              className={`relative rounded-full px-3.5 py-2 text-[15px] font-bold transition xl:px-4 ${
                active === id ? "text-white" : "text-slate-300 hover:text-white"
              }`}
            >
              {active === id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white/10"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{text[id]}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher language={language} setLanguage={setLanguage} />

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? text.closeMenu : text.openMenu}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-lg lg:hidden"
          >
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="flex flex-col gap-1 border-t border-white/10 px-3 pb-4 pt-3">
              {sectionIds.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      go(id);
                    }}
                    className={`block rounded-2xl px-4 py-3 text-lg font-bold transition ${
                      active === id
                        ? "bg-white/10 text-cyan-300"
                        : "text-slate-200 hover:bg-white/5"
                    }`}
                  >
                    {text[id]}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
