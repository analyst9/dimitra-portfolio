import FadeInSection from "../components/FadeInSection";

const researchTranslations = {
  el: {
    label: "ΕΡΕΥΝΑ",
    title: "Τεχνητή Νοημοσύνη στην Εκπαίδευση",
    intro:
      "Η ερευνητική μου δραστηριότητα επικεντρώνεται στον σχεδιασμό και την αξιολόγηση ευφυών τεχνολογιών που υποστηρίζουν τη μάθηση, την ακαδημαϊκή συμβουλευτική και τη λήψη εκπαιδευτικών αποφάσεων.",
    phdLabel: "ΔΙΔΑΚΤΟΡΙΚΗ ΕΡΕΥΝΑ",
    phdTitle: "Τεχνητή Νοημοσύνη στην Εκπαίδευση",
    phdText:
      "Εκπονώ τη διδακτορική μου διατριβή στο Τμήμα Ψηφιακών Συστημάτων του Πανεπιστημίου Θεσσαλίας, με αντικείμενο τις εφαρμογές της Τεχνητής Νοημοσύνης στην Εκπαίδευση και τα ευφυή συστήματα ακαδημαϊκής συμβουλευτικής και υποστήριξης αποφάσεων.",
    universityLabel: "Πανεπιστήμιο",
    departmentLabel: "Τμήμα",
    university: "Πανεπιστήμιο Θεσσαλίας",
    department: "Τμήμα Ψηφιακών Συστημάτων",
    interestsTitle: "Ερευνητικά ενδιαφέροντα",
    interests: [
      {
        number: "01",
        title: "Τεχνητή Νοημοσύνη στην Εκπαίδευση",
        text: "Εφαρμογές τεχνητής νοημοσύνης για εξατομικευμένη μάθηση και εκπαιδευτική υποστήριξη.",
      },
      {
        number: "02",
        title: "Αναλυτική Μάθησης",
        text: "Ανάλυση εκπαιδευτικών δεδομένων για την κατανόηση και τη βελτίωση της μαθησιακής διαδικασίας.",
      },
      {
        number: "03",
        title: "Ακαδημαϊκή Συμβουλευτική",
        text: "Ευφυή συστήματα ακαδημαϊκής συμβουλευτικής και επαγγελματικού προσανατολισμού.",
      },
      {
        number: "04",
        title: "Συστήματα Υποστήριξης Αποφάσεων",
        text: "Συστήματα που αξιοποιούν δεδομένα και αλγορίθμους για την υποστήριξη εκπαιδευτικών αποφάσεων.",
      },
      {
        number: "05",
        title: "Παραγωγική Τεχνητή Νοημοσύνη",
        text: "Μελέτη της αξιοποίησης παραγωγικών μοντέλων τεχνητής νοημοσύνης σε εκπαιδευτικά περιβάλλοντα.",
      },
      {
        number: "06",
        title: "Εξηγήσιμη Τεχνητή Νοημοσύνη",
        text: "Διαφάνεια, ερμηνευσιμότητα και υπεύθυνη χρήση της τεχνητής νοημοσύνης στην εκπαίδευση.",
      },
    ],
  },

  en: {
    label: "RESEARCH",
    title: "Artificial Intelligence in Education",
    intro:
      "My research focuses on the design and evaluation of intelligent technologies that support learning, academic advising and educational decision-making.",
    phdLabel: "DOCTORAL RESEARCH",
    phdTitle: "Artificial Intelligence in Education",
    phdText:
      "I am pursuing my PhD in the Department of Digital Systems at the University of Thessaly, focusing on applications of Artificial Intelligence in Education and intelligent systems for academic advising and decision support.",
    universityLabel: "University",
    departmentLabel: "Department",
    university: "University of Thessaly",
    department: "Department of Digital Systems",
    interestsTitle: "Research interests",
    interests: [
      {
        number: "01",
        title: "AI in Education",
        text: "Artificial intelligence applications for personalized learning and educational support.",
      },
      {
        number: "02",
        title: "Learning Analytics",
        text: "Educational data analysis to understand and improve learning processes.",
      },
      {
        number: "03",
        title: "Academic Advising",
        text: "Intelligent systems for academic advising and career guidance.",
      },
      {
        number: "04",
        title: "Decision Support Systems",
        text: "Systems that use data and algorithms to support educational decision-making.",
      },
      {
        number: "05",
        title: "Generative AI",
        text: "The integration of generative artificial intelligence into educational environments.",
      },
      {
        number: "06",
        title: "Explainable AI",
        text: "Transparency, interpretability and responsible use of artificial intelligence in education.",
      },
    ],
  },
};

function Research({ language }) {
  const content =
    researchTranslations[language] || researchTranslations.el;

  return (
    <FadeInSection direction="right">
      <section
        id="research"
        className="relative scroll-mt-28 overflow-hidden bg-slate-950 px-8 py-28 text-white md:px-24"
      >
        <div className="pointer-events-none absolute bottom-12 left-[-160px] h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="pointer-events-none absolute right-[-140px] top-20 h-96 w-96 rounded-full bg-violet-600/15 blur-3xl" />

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

          <div className="group relative mb-20 overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl transition-all duration-500 hover:border-violet-300/30 hover:shadow-[0_25px_80px_rgba(139,92,246,.15)] md:p-12">
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-violet-500/15 blur-3xl" />
            </div>

            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
              <div>
                <p className="mb-4 text-sm font-extrabold tracking-[0.3em] text-violet-300">
                  {content.phdLabel}
                </p>

                <h3 className="mb-6 text-3xl font-extrabold md:text-4xl">
                  {content.phdTitle}
                </h3>

                <p className="text-lg leading-8 text-slate-300">
                  {content.phdText}
                </p>
              </div>

              <div className="flex flex-col justify-center gap-5 rounded-[28px] border border-white/10 bg-slate-900/70 p-7">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-400">
                    {content.universityLabel}
                  </p>

                  <p className="mt-2 text-xl font-extrabold">
                    {content.university}
                  </p>
                </div>

                <div className="h-px bg-white/10" />

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-400">
                    {content.departmentLabel}
                  </p>

                  <p className="mt-2 text-xl font-extrabold">
                    {content.department}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="mb-8 text-3xl font-extrabold">
            {content.interestsTitle}
          </h3>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {content.interests.map((interest) => (
              <article
                key={interest.number}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/[0.05]
                  p-7
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-cyan-300/40
                  hover:shadow-[0_25px_70px_rgba(34,211,238,.18)]
                "
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

                  <div className="absolute bottom-0 right-0 h-36 w-36 rounded-full bg-violet-500/20 blur-3xl" />
                </div>

                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-sm font-extrabold tracking-[0.25em] text-cyan-300">
                      {interest.number}
                    </span>

                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,.8)] transition duration-300 group-hover:scale-125" />
                  </div>

                  <h4 className="mb-4 text-2xl font-extrabold text-white">
                    {interest.title}
                  </h4>

                  <p className="leading-7 text-slate-300">
                    {interest.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

export default Research;