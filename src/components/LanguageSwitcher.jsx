const options = [
  { id: "el", short: "EL", label: "Ελληνικά" },
  { id: "en", short: "EN", label: "English" },
];

function LanguageSwitcher({ language, setLanguage }) {
  return (
    <div
      role="group"
      aria-label="Language / Γλώσσα"
      className="flex rounded-full border border-white/15 bg-white/10 p-1"
    >
      {options.map((option) => {
        const selected = option.id === language;
        return (
          <button
            key={option.id}
            type="button"
            lang={option.id}
            title={option.label}
            aria-label={option.label}
            aria-pressed={selected}
            onClick={() => setLanguage(option.id)}
            className={`rounded-full px-3 py-1.5 text-sm font-extrabold transition ${
              selected
                ? "bg-gradient-to-r from-cyan-300 to-violet-300 text-slate-950"
                : "text-slate-300 hover:text-white"
            }`}
          >
            {option.short}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;
