import { useState } from "react";

const languageOptions = {
  el: {
    label: "Ελληνικά",
    flag: "https://flagcdn.com/w40/gr.png",
    alt: "Ελληνική σημαία",
  },
  en: {
    label: "English",
    flag: "https://flagcdn.com/w40/gb.png",
    alt: "British flag",
  },
};

function LanguageSwitcher({ language, setLanguage }) {
  const [open, setOpen] = useState(false);
  const currentLanguage = languageOptions[language];

  function selectLanguage(selectedLanguage) {
    setLanguage(selectedLanguage);
    setOpen(false);
  }

  return (
    <div className="relative z-[100]">
      <button
        type="button"
        onClick={() => setOpen((previousValue) => !previousValue)}
        className="flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur-xl transition hover:bg-white/15"
      >
        <img
          src={currentLanguage.flag}
          alt={currentLanguage.alt}
          className="h-5 w-7 rounded object-cover"
        />

        <span>{currentLanguage.label}</span>

        <span
          className={`text-sm transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-[200] mt-3 w-56 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
          <button
            type="button"
            onClick={() => selectLanguage("el")}
            className="flex w-full items-center gap-3 px-5 py-4 text-left text-white transition hover:bg-cyan-500/10"
          >
            <img
              src={languageOptions.el.flag}
              alt={languageOptions.el.alt}
              className="h-5 w-7 rounded object-cover"
            />

            <span>Ελληνικά</span>
          </button>

          <button
            type="button"
            onClick={() => selectLanguage("en")}
            className="flex w-full items-center gap-3 px-5 py-4 text-left text-white transition hover:bg-cyan-500/10"
          >
            <img
              src={languageOptions.en.flag}
              alt={languageOptions.en.alt}
              className="h-5 w-7 rounded object-cover"
            />

            <span>English</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;