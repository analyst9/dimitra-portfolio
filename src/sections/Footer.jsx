import { FaArrowUp, FaLinkedin, FaOrcid, FaEnvelope } from "react-icons/fa6";
import { SiGooglescholar, SiResearchgate } from "react-icons/si";
import { scrollToSection } from "../utils/scroll";

const footerTranslations = {
  el: {
    role: "Υποψήφια Διδάκτορας · Τεχνητή Νοημοσύνη στην Εκπαίδευση",
    rights: "Με επιφύλαξη παντός δικαιώματος.",
    top: "Επιστροφή στην αρχή",
  },
  en: {
    role: "PhD Candidate · Artificial Intelligence in Education",
    rights: "All rights reserved.",
    top: "Back to top",
  },
};

const socials = [
  { href: "mailto:lamprou08@gmail.com", icon: FaEnvelope, label: "Email" },
  { href: "https://www.linkedin.com/in/dimitra-lamprou-343424179/", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://scholar.google.com/citations?user=SKzD12MAAAAJ&hl=el", icon: SiGooglescholar, label: "Google Scholar" },
  { href: "https://www.researchgate.net/profile/Dimitra-Lamprou-4", icon: SiResearchgate, label: "ResearchGate" },
  { href: "https://orcid.org/0000-0003-4527-0509", icon: FaOrcid, label: "ORCID" },
];

function Footer({ language }) {
  const text = footerTranslations[language] || footerTranslations.el;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-10 text-slate-400 sm:px-8 md:px-16 xl:px-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-extrabold text-white">
            {language === "el" ? "Δήμητρα Λάμπρου" : "Dimitra Lamprou"}
          </p>
          <p className="mt-1 text-sm">{text.role}</p>
          <p className="mt-3 text-xs text-slate-500">
            © {year} Dimitra Lamprou. {text.rights}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-lg text-slate-300 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-300"
            >
              <Icon />
            </a>
          ))}

          <button
            type="button"
            onClick={() => scrollToSection("home")}
            aria-label={text.top}
            title={text.top}
            className="ml-2 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 transition hover:-translate-y-1"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
