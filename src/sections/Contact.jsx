import FadeInSection from "../components/FadeInSection";

import {
  FaEnvelope,
  FaLinkedin,
  FaOrcid,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import {
  SiGooglescholar,
  SiResearchgate,
} from "react-icons/si";

const contactTranslations = {
  el: {
    label: "ΕΠΙΚΟΙΝΩΝΙΑ",
    title: "Ας επικοινωνήσουμε",
    intro:
      "Είμαι διαθέσιμη για ερευνητικές συνεργασίες, ακαδημαϊκές προτάσεις και έργα που συνδέουν την Τεχνητή Νοημοσύνη, τα Δεδομένα και την Εκπαίδευση.",
    cardTitle: "Επικοινωνία και ακαδημαϊκό προφίλ",
    cardText:
      "Μπορείτε να επικοινωνήσετε μαζί μου μέσω email ή να επισκεφθείτε τα επαγγελματικά και ακαδημαϊκά προφίλ μου.",
    emailLabel: "Email",
    emailDescription: "Στείλτε μου απευθείας μήνυμα",
    linkedinLabel: "LinkedIn",
    linkedinDescription: "Επαγγελματικό προφίλ και δίκτυο",
    scholarLabel: "Google Scholar",
    scholarDescription: "Δημοσιεύσεις και αναφορές",
    researchGateLabel: "ResearchGate",
    researchGateDescription: "Ερευνητικό και ακαδημαϊκό έργο",
    orcidLabel: "ORCID",
    orcidDescription: "Μοναδικό αναγνωριστικό ερευνήτριας",
    locationLabel: "Τοποθεσία",
    location: "Λάρισα, Ελλάδα",
    availability: "Διαθέσιμη για συνεργασίες",
  },

  en: {
    label: "CONTACT",
    title: "Let's connect",
    intro:
      "I am open to research collaborations, academic opportunities and projects that connect Artificial Intelligence, Data and Education.",
    cardTitle: "Contact and academic profiles",
    cardText:
      "You can contact me directly by email or visit my professional and academic profiles.",
    emailLabel: "Email",
    emailDescription: "Send me a direct message",
    linkedinLabel: "LinkedIn",
    linkedinDescription: "Professional profile and network",
    scholarLabel: "Google Scholar",
    scholarDescription: "Publications and citations",
    researchGateLabel: "ResearchGate",
    researchGateDescription: "Research and academic work",
    orcidLabel: "ORCID",
    orcidDescription: "Unique researcher identifier",
    locationLabel: "Location",
    location: "Larissa, Greece",
    availability: "Open to collaborations",
  },
};

const contactLinks = [
  {
    id: "email",
    href: "mailto:lamprou08@gmail.com",
    icon: FaEnvelope,
    value: "lamprou08@gmail.com",
    labelKey: "emailLabel",
    descriptionKey: "emailDescription",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/dimitra-lamprou-343424179/",
    icon: FaLinkedin,
    value: "Dimitra Lamprou",
    labelKey: "linkedinLabel",
    descriptionKey: "linkedinDescription",
  },
  {
    id: "scholar",
    href: "https://scholar.google.com/citations?user=SKzD12MAAAAJ&hl=el",
    icon: SiGooglescholar,
    value: "Google Scholar",
    labelKey: "scholarLabel",
    descriptionKey: "scholarDescription",
  },
  {
    id: "researchgate",
    href: "https://www.researchgate.net/profile/Dimitra-Lamprou-4",
    icon: SiResearchgate,
    value: "Dimitra Lamprou",
    labelKey: "researchGateLabel",
    descriptionKey: "researchGateDescription",
  },
  {
    id: "orcid",
    href: "https://orcid.org/0000-0003-4527-0509",
    icon: FaOrcid,
    value: "0000-0003-4527-0509",
    labelKey: "orcidLabel",
    descriptionKey: "orcidDescription",
  },
];

function Contact({ language }) {
  const content =
    contactTranslations[language] || contactTranslations.el;

  return (
    <div
      id="contact"
      className="scroll-mt-28"
    >
      <FadeInSection direction="up">
        <section className="relative overflow-hidden bg-slate-950 px-8 py-28 text-white md:px-24">
          <div className="pointer-events-none absolute left-[-140px] top-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="pointer-events-none absolute bottom-[-80px] right-[-120px] h-96 w-96 rounded-full bg-violet-600/15 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto mb-16 max-w-4xl text-center">
              <p className="mb-4 text-sm font-extrabold tracking-[0.35em] text-cyan-300">
                {content.label}
              </p>

              <h2 className="mb-6 text-4xl font-extrabold md:text-6xl">
                {content.title}
              </h2>

              <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                {content.intro}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.05] p-7 shadow-[0_30px_100px_rgba(15,23,42,0.45)] backdrop-blur-xl md:p-12">
              <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-10 grid items-start gap-8 lg:grid-cols-[1fr_auto]">
                  <div>
                    <h3 className="mb-4 text-3xl font-extrabold">
                      {content.cardTitle}
                    </h3>

                    <p className="max-w-3xl text-lg leading-8 text-slate-300">
                      {content.cardText}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-3 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-5 py-3 text-sm font-bold text-emerald-200">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,.9)]" />

                    {content.availability}
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {contactLinks.map((link) => {
                    const Icon = link.icon;
                    const isEmail = link.id === "email";

                    return (
                      <a
                        key={link.id}
                        href={link.href}
                        target={isEmail ? undefined : "_blank"}
                        rel={isEmail ? undefined : "noopener noreferrer"}
                        className="
                          group
                          relative
                          overflow-hidden
                          rounded-[28px]
                          border
                          border-white/10
                          bg-slate-900/60
                          p-6
                          transition-all
                          duration-500
                          hover:-translate-y-2
                          hover:border-cyan-300/40
                          hover:shadow-[0_20px_60px_rgba(34,211,238,.14)]
                        "
                      >
                        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                          <div className="absolute -left-12 -top-12 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl" />

                          <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl" />
                        </div>

                        <div className="relative z-10 flex items-center gap-5">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-2xl text-cyan-300 transition duration-300 group-hover:scale-110 group-hover:border-cyan-300/30">
                            <Icon />
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="mb-1 text-sm font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                              {content[link.labelKey]}
                            </p>

                            <p className="truncate text-lg font-extrabold text-white">
                              {link.value}
                            </p>

                            <p className="mt-1 text-sm leading-6 text-slate-400">
                              {content[link.descriptionKey]}
                            </p>
                          </div>

                          <FaArrowUpRightFromSquare className="shrink-0 text-sm text-slate-500 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300" />
                        </div>
                      </a>
                    );
                  })}
                </div>

                <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-8 text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm font-bold uppercase tracking-[0.18em]">
                    {content.locationLabel}
                  </p>

                  <p className="text-base font-semibold text-slate-200">
                    {content.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}

export default Contact;