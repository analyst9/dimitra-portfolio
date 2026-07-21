import profileImg from "../assets/profile.jpg";
import FadeInSection from "../components/FadeInSection";

const aboutTranslations = {
  el: {
    label: "ΠΡΟΦΙΛ",
    title: "Ερευνητικό και Επαγγελματικό Προφίλ",
    intro:
      "Συνδέοντας τα Μαθηματικά, την Τεχνητή Νοημοσύνη, τα Δεδομένα και την Εκπαίδευση.",
    paragraph1:
      "Είμαι μαθηματικός με ακαδημαϊκό και επαγγελματικό υπόβαθρο στα Μαθηματικά, τη Στατιστική, την Ανάλυση Δεδομένων και την Πληροφορική.",
    paragraph2:
      "Είμαι υποψήφια διδάκτορας στο Τμήμα Ψηφιακών Συστημάτων του Πανεπιστημίου Θεσσαλίας. Η έρευνά μου επικεντρώνεται στην Τεχνητή Νοημοσύνη στην Εκπαίδευση, στα Learning Analytics, στα ευφυή συστήματα υποστήριξης αποφάσεων και στην ακαδημαϊκή συμβουλευτική.",
    paragraph3:
      "Συνδυάζω την ερευνητική μου δραστηριότητα με την εμπειρία μου στην εκπαίδευση και την ανάλυση δεδομένων, με στόχο τη δημιουργία λύσεων που μετατρέπουν τα δεδομένα σε γνώση και υποστηρίζουν την εκπαιδευτική καινοτομία.",
    cards: [
      {
        icon: "🎓",
        title: "Εκπαίδευση",
        text: "Μαθηματικά, Στατιστική και διδακτορική έρευνα.",
      },
      {
        icon: "📊",
        title: "Ανάλυση Δεδομένων",
        text: "Python, SQL, R, στατιστική και εξαγωγή γνώσης από δεδομένα.",
      },
      {
        icon: "🤖",
        title: "Έρευνα στην ΤΝ",
        text: "AI in Education, Learning Analytics και ευφυή συστήματα.",
      },
      {
        icon: "👩‍🏫",
        title: "Εκπαίδευση και Διδασκαλία",
        text: "Μαθηματικά, Πληροφορική και εκπαιδευτική τεχνολογία.",
      },
    ],
  },

  en: {
    label: "PROFILE",
    title: "Research & Professional Profile",
    intro:
      "Bridging Mathematics, Artificial Intelligence, Data and Education.",
    paragraph1:
      "I am a mathematician with an academic and professional background in Mathematics, Statistics, Data Analytics and Computer Science.",
    paragraph2:
      "I am currently pursuing a PhD in the Department of Digital Systems at the University of Thessaly. My research focuses on Artificial Intelligence in Education, Learning Analytics, intelligent decision-support systems and academic advising.",
    paragraph3:
      "I combine my research activity with my experience in education and data analytics to develop solutions that transform data into knowledge and support educational innovation.",
    cards: [
      {
        icon: "🎓",
        title: "Education",
        text: "Mathematics, Statistics and doctoral research.",
      },
      {
        icon: "📊",
        title: "Data Analytics",
        text: "Python, SQL, R, statistics and data-driven insights.",
      },
      {
        icon: "🤖",
        title: "AI Research",
        text: "AI in Education, Learning Analytics and intelligent systems.",
      },
      {
        icon: "👩‍🏫",
        title: "Teaching",
        text: "Mathematics, Computer Science and Educational Technology.",
      },
    ],
  },
};

function About({ language }) {
  const content = aboutTranslations[language];

  return (
    <FadeInSection direction="left">
      <section
        id="about"
        className="relative scroll-mt-28 overflow-hidden bg-slate-950 px-8 py-28 text-white md:px-24"
      >
        <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-[-100px] h-80 w-80 rounded-full bg-violet-600/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-extrabold tracking-[0.35em] text-cyan-300">
              {content.label}
            </p>

            <h2 className="mb-6 text-4xl font-extrabold md:text-6xl">
              {content.title}
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
              {content.intro}
            </p>
          </div>

          <div className="mb-16 grid items-center gap-12 lg:grid-cols-[380px_1fr]">
            <div className="relative mx-auto">
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-400/30 to-violet-600/30 blur-2xl" />

              <img
                src={profileImg}
                alt="Dimitra Lamprou"
                className="relative h-[470px] w-[360px] rounded-[40px] border border-white/15 object-cover object-top shadow-2xl"
              />
            </div>

            <div className="rounded-[36px] border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur-xl md:p-12">
              <p className="mb-6 text-lg leading-8 text-slate-200">
                {content.paragraph1}
              </p>

              <p className="mb-6 text-lg leading-8 text-slate-200">
                {content.paragraph2}
              </p>

              <p className="text-lg leading-8 text-slate-200">
                {content.paragraph3}
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {content.cards.map((card) => (
              <article
                key={card.title}
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
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

                  <div className="absolute bottom-0 right-0 h-36 w-36 rounded-full bg-violet-500/20 blur-3xl" />
                </div>

                <div className="relative z-10">
                  <span className="mb-5 block text-4xl transition duration-300 group-hover:scale-110">
                    {card.icon}
                  </span>

                  <h3 className="mb-3 text-xl font-extrabold text-white">
                    {card.title}
                  </h3>

                  <p className="leading-7 text-slate-300">
                    {card.text}
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

export default About;