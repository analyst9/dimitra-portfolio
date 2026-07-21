import FadeInSection from "../components/FadeInSection";

const publicationTranslations = {
  el: {
    label: "ΔΗΜΟΣΙΕΥΣΕΙΣ",
    title: "Επιλεγμένες Δημοσιεύσεις",
    intro:
      "Ενδεικτικές επιστημονικές δημοσιεύσεις και ερευνητικές εργασίες στους τομείς της Στατιστικής, της Δημόσιας Υγείας και της Τεχνητής Νοημοσύνης στην Εκπαίδευση.",
    typeJournal: "Δημοσίευση σε περιοδικό",
    typeConference: "Συνεδριακή εργασία",
    read: "Προβολή δημοσίευσης",
    publications: [
      {
        year: "2019",
        type: "journal",
        title:
          "Trends of mortality in Greece prior to and during its current financial crisis (2009–2015)",
        venue: "Rambam Maimonides Medical Journal",
        authors: "Vardakas K.Z., Lamprou D. et al.",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6649780/",
      },
      {
        year: "2018",
        type: "conference",
        title:
          "The influence of peer smoking in smoking behaviour of adolescents",
        venue: "European Respiratory Journal",
        authors: "Mpousiou D., Lamprou D. et al.",
        url: "https://publications.ersnet.org/content/erj/52/suppl62/pa4568",
      },
      {
        year: "2018",
        type: "conference",
        title:
          "The effect of parental smoking and smoking inside the house in the adolescents’ attitude",
        venue: "European Respiratory Journal",
        authors: "Mpousiou D., Lamprou D. et al.",
        url: "https://publications.ersnet.org/content/erj/52/suppl62/pa4571",
      },
    ],
  },

  en: {
    label: "PUBLICATIONS",
    title: "Selected Publications",
    intro:
      "Selected scientific publications and research work in Statistics, Public Health and Artificial Intelligence in Education.",
    typeJournal: "Journal article",
    typeConference: "Conference paper",
    read: "View publication",
    publications: [
      {
        year: "2019",
        type: "journal",
        title:
          "Trends of mortality in Greece prior to and during its current financial crisis (2009–2015)",
        venue: "Rambam Maimonides Medical Journal",
        authors: "Vardakas K.Z., Lamprou D. et al.",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6649780/",
      },
      {
        year: "2018",
        type: "conference",
        title:
          "The influence of peer smoking in smoking behaviour of adolescents",
        venue: "European Respiratory Journal",
        authors: "Mpousiou D., Lamprou D. et al.",
        url: "https://publications.ersnet.org/content/erj/52/suppl62/pa4568",
      },
      {
        year: "2018",
        type: "conference",
        title:
          "The effect of parental smoking and smoking inside the house in the adolescents’ attitude",
        venue: "European Respiratory Journal",
        authors: "Mpousiou D., Lamprou D. et al.",
        url: "https://publications.ersnet.org/content/erj/52/suppl62/pa4571",
      },
    ],
  },
};

function Publications({ language }) {
  const content = publicationTranslations[language];

  return (
    <FadeInSection direction="left">
    <section
      id="publications"
      className="relative scroll-mt-28 overflow-hidden bg-slate-950 px-8 py-28 text-white md:px-24"
    >
      <div className="absolute right-[-120px] top-16 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 max-w-4xl">
          <p className="mb-4 text-sm font-extrabold tracking-[0.35em] text-cyan-300">
            {content.label}
          </p>

          <h2 className="mb-6 text-4xl font-extrabold md:text-6xl">
            {content.title}
          </h2>

          <p className="text-lg leading-8 text-slate-300 md:text-xl">
            {content.intro}
          </p>
        </div>

        <div className="space-y-6">
          {content.publications.map((publication) => (
            <article
              key={publication.title}
              className="grid gap-6 rounded-[30px] border border-white/10 bg-white/[0.05] p-7 transition duration-300 hover:border-cyan-300/30 hover:bg-white/[0.07] md:grid-cols-[120px_1fr_auto] md:items-center"
            >
              <div>
                <p className="text-3xl font-extrabold text-cyan-300">
                  {publication.year}
                </p>

                <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  {publication.type === "journal"
                    ? content.typeJournal
                    : content.typeConference}
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-extrabold leading-8 md:text-2xl">
                  {publication.title}
                </h3>

                <p className="mb-2 font-bold text-violet-300">
                  {publication.venue}
                </p>

                <p className="text-slate-400">
                  {publication.authors}
                </p>
              </div>

              <a
                href={publication.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 whitespace-nowrap font-extrabold text-cyan-300 transition hover:gap-5"
              >
                {content.read}
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
    </FadeInSection>

  );
}

export default Publications;