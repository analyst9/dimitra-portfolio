import FadeInSection from "../components/FadeInSection";

const projectTranslations = {
  el: {
    label: "ΕΡΓΑ",
    title: "Επιλεγμένα Έργα",
    intro:
      "Ενδεικτικά έργα που συνδυάζουν την Τεχνητή Νοημοσύνη, την Ανάλυση Δεδομένων, την Εκπαίδευση και την ανάπτυξη ψηφιακών λύσεων.",
    projects: [
      {
        title: "Ακαδημαϊκή Συμβουλευτική με Τεχνητή Νοημοσύνη",
        description:
          "Συστηματική μελέτη συστημάτων ακαδημαϊκής συμβουλευτικής και επαγγελματικού προσανατολισμού που βασίζονται στην Τεχνητή Νοημοσύνη.",
        tags: ["AI in Education", "Systematic Review", "Academic Advising"],
        status: "Έρευνα",
      },
      {
        title: "Ανάλυση Εκπαιδευτικών Δεδομένων",
        description:
          "Ανάλυση εκπαιδευτικών δεδομένων και σχεδιασμός λύσεων που υποστηρίζουν τη λήψη αποφάσεων και τη βελτίωση της μαθησιακής εμπειρίας.",
        tags: ["Python", "Statistics", "Learning Analytics"],
        status: "Δεδομένα",
      },
      {
        title: "Ψηφιακές Εφαρμογές Μάθησης",
        description:
          "Δημιουργία εκπαιδευτικών εφαρμογών και ψηφιακού υλικού για τα Μαθηματικά, την Πληροφορική και την εκπαιδευτική τεχνολογία.",
        tags: ["React", "Education", "Digital Learning"],
        status: "Ανάπτυξη",
      },
    ],
    view: "Περισσότερα",
  },

  en: {
    label: "PROJECTS",
    title: "Selected Projects",
    intro:
      "Selected work combining Artificial Intelligence, Data Analytics, Education and digital solution development.",
    projects: [
      {
        title: "AI Academic Advising",
        description:
          "A systematic study of AI-driven academic advising and career guidance systems.",
        tags: ["AI in Education", "Systematic Review", "Academic Advising"],
        status: "Research",
      },
      {
        title: "Educational Data Analytics",
        description:
          "Educational data analysis and the design of solutions that support decision-making and improve learning experiences.",
        tags: ["Python", "Statistics", "Learning Analytics"],
        status: "Data",
      },
      {
        title: "Digital Learning Applications",
        description:
          "Development of educational applications and digital learning material for Mathematics, Computer Science and Educational Technology.",
        tags: ["React", "Education", "Digital Learning"],
        status: "Development",
      },
    ],
    view: "View Project",
  },
};

function Projects({ language }) {
  const content = projectTranslations[language];

  return (
    <FadeInSection direction="up">
     <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 px-8 py-28 text-white md:px-24"
    >
      <div className="absolute bottom-[-120px] left-[-100px] h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

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

        <div className="grid gap-7 lg:grid-cols-3">
          {content.projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex min-h-[430px] flex-col rounded-[30px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/30 hover:shadow-[0_0_55px_rgba(34,211,238,0.12)]"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-extrabold tracking-[0.25em] text-cyan-300">
                  0{index + 1}
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-slate-300">
                  {project.status}
                </span>
              </div>

              <h3 className="mb-5 text-3xl font-extrabold">
                {project.title}
              </h3>

              <p className="mb-8 leading-7 text-slate-300">
                {project.description}
              </p>

              <div className="mb-10 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyan-300/15 bg-cyan-400/5 px-3 py-2 text-sm font-bold text-cyan-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                type="button"
                className="mt-auto flex items-center gap-3 self-start font-extrabold text-cyan-300 transition group-hover:gap-5"
              >
                {content.view}
                <span aria-hidden="true">→</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
     </FadeInSection>
  );
}

export default Projects;