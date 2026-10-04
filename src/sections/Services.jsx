import {
  FaMobileScreen,
  FaMagnifyingGlass,
  FaLanguage,
  FaBolt,
  FaGlobe,
  FaScrewdriverWrench,
  FaEnvelope,
} from "react-icons/fa6";
import FadeInSection from "../components/FadeInSection";
import { scrollToSection } from "../utils/scroll";

const EMAIL = "lamprou08@gmail.com";

const servicesTranslations = {
  el: {
    label: "ΥΠΗΡΕΣΙΕΣ",
    title: "Κατασκευή Επαγγελματικών Ιστοσελίδων",
    intro:
      "Αναλαμβάνω τη δημιουργία σύγχρονων, επαγγελματικών ιστοσελίδων για κάθε επάγγελμα. Σχεδιάζω κάθε site από την αρχή, με βάση τις ανάγκες και την ταυτότητα του επαγγελματία ή της επιχείρησης.",
    forWhoTitle: "Για κάθε επάγγελμα",
    forWho: [
      "Γιατροί & Θεραπευτές",
      "Δικηγόροι",
      "Εκπαιδευτικοί & Φροντιστήρια",
      "Ερευνητές & Ακαδημαϊκοί",
      "Λογιστές & Σύμβουλοι",
      "Μηχανικοί & Αρχιτέκτονες",
      "Καταστήματα",
      "Εστίαση & Τουρισμός",
      "Καλλιτέχνες & Δημιουργοί",
      "Ελεύθεροι επαγγελματίες",
    ],
    featuresTitle: "Τι περιλαμβάνει",
    features: [
      {
        icon: FaMobileScreen,
        title: "Responsive σχεδιασμός",
        text: "Τέλεια εμφάνιση σε κινητό, tablet και υπολογιστή.",
      },
      {
        icon: FaMagnifyingGlass,
        title: "SEO",
        text: "Βελτιστοποίηση για να σας βρίσκουν εύκολα στο Google.",
      },
      {
        icon: FaLanguage,
        title: "Πολύγλωσσο περιεχόμενο",
        text: "Ελληνικά, Αγγλικά ή όποια γλώσσα χρειάζεστε.",
      },
      {
        icon: FaBolt,
        title: "Γρήγορο & ασφαλές",
        text: "Σύγχρονες τεχνολογίες, γρήγορη φόρτωση και HTTPS.",
      },
      {
        icon: FaGlobe,
        title: "Domain & φιλοξενία",
        text: "Βοήθεια με το δικό σας όνομα (π.χ. onomasas.gr) και τη δημοσίευση.",
      },
      {
        icon: FaScrewdriverWrench,
        title: "Υποστήριξη",
        text: "Ενημερώσεις περιεχομένου και τεχνική υποστήριξη μετά την παράδοση.",
      },
    ],
    processTitle: "Πώς δουλεύουμε",
    process: [
      { title: "Γνωριμία", text: "Συζητάμε τι χρειάζεστε και τι θέλετε να πετύχετε." },
      { title: "Σχεδιασμός", text: "Προτείνω δομή, χρώματα και περιεχόμενο." },
      { title: "Κατασκευή", text: "Φτιάχνω το site και το βλέπετε πριν δημοσιευτεί." },
      { title: "Παράδοση", text: "Δημοσίευση στο domain σας και υποστήριξη." },
    ],
    exampleNote: "Αυτή η ιστοσελίδα είναι δείγμα της δουλειάς μου.",
    cta: "Ζητήστε προσφορά",
    ctaSecondary: "Επικοινωνία",
    mailSubject: "Ενδιαφέρον για κατασκευή ιστοσελίδας",
  },

  en: {
    label: "SERVICES",
    title: "Professional Website Design",
    intro:
      "I design and build modern, professional websites for any profession. Every site is created from scratch around the needs and identity of the professional or business.",
    forWhoTitle: "For every profession",
    forWho: [
      "Doctors & Therapists",
      "Lawyers",
      "Teachers & Tutoring centres",
      "Researchers & Academics",
      "Accountants & Consultants",
      "Engineers & Architects",
      "Shops",
      "Restaurants & Tourism",
      "Artists & Creators",
      "Freelancers",
    ],
    featuresTitle: "What's included",
    features: [
      {
        icon: FaMobileScreen,
        title: "Responsive design",
        text: "Looks great on mobile, tablet and desktop.",
      },
      {
        icon: FaMagnifyingGlass,
        title: "SEO",
        text: "Optimized so clients can find you on Google.",
      },
      {
        icon: FaLanguage,
        title: "Multilingual content",
        text: "Greek, English or any language you need.",
      },
      {
        icon: FaBolt,
        title: "Fast & secure",
        text: "Modern technologies, fast loading and HTTPS.",
      },
      {
        icon: FaGlobe,
        title: "Domain & hosting",
        text: "Help with your own domain (e.g. yourname.com) and going live.",
      },
      {
        icon: FaScrewdriverWrench,
        title: "Support",
        text: "Content updates and technical support after delivery.",
      },
    ],
    processTitle: "How it works",
    process: [
      { title: "Discovery", text: "We discuss what you need and your goals." },
      { title: "Design", text: "I propose structure, colours and content." },
      { title: "Build", text: "I build the site and you review it before launch." },
      { title: "Launch", text: "Publishing on your domain, plus ongoing support." },
    ],
    exampleNote: "This website is an example of my work.",
    cta: "Request a quote",
    ctaSecondary: "Contact",
    mailSubject: "Website design enquiry",
  },
};

function Services({ language }) {
  const content = servicesTranslations[language] || servicesTranslations.el;
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(content.mailSubject)}`;

  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 py-24 text-white sm:px-8 md:px-16 md:py-28 xl:px-24"
    >
      <div className="pointer-events-none absolute left-[-160px] top-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[-140px] h-96 w-96 rounded-full bg-violet-600/15 blur-3xl" />

      <FadeInSection>
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
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

          <div className="mb-14">
            <h3 className="mb-5 text-sm font-extrabold uppercase tracking-[0.25em] text-violet-300">
              {content.forWhoTitle}
            </h3>
            <div className="flex flex-wrap gap-3">
              {content.forWho.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 font-semibold text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <h3 className="mb-6 text-3xl font-extrabold">{content.featuresTitle}</h3>
          <div className="mb-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.features.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="group rounded-[28px] border border-white/10 bg-white/[0.05] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_20px_60px_rgba(34,211,238,.12)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/15 to-violet-500/15 text-xl text-cyan-300 transition group-hover:scale-110">
                  <Icon aria-hidden="true" />
                </div>
                <h4 className="mb-2 text-xl font-extrabold">{title}</h4>
                <p className="leading-7 text-slate-300">{text}</p>
              </article>
            ))}
          </div>

          <h3 className="mb-6 text-3xl font-extrabold">{content.processTitle}</h3>
          <ol className="mb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {content.process.map((step, index) => (
              <li
                key={step.title}
                className="rounded-[28px] border border-white/10 bg-slate-900/60 p-6"
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 font-black text-slate-950">
                  {index + 1}
                </span>
                <h4 className="mb-2 text-xl font-extrabold">{step.title}</h4>
                <p className="leading-7 text-slate-300">{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="flex flex-col items-start gap-6 rounded-[32px] border border-cyan-300/20 bg-gradient-to-r from-cyan-400/10 to-violet-500/10 p-7 md:flex-row md:items-center md:justify-between md:p-10">
            <p className="text-xl font-extrabold leading-snug md:text-2xl">
              {content.exampleNote}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={mailto}
                className="inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-4 font-extrabold shadow-[0_10px_35px_rgba(34,211,238,0.2)] transition hover:-translate-y-1"
              >
                <FaEnvelope aria-hidden="true" />
                {content.cta}
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-6 py-4 font-extrabold transition hover:-translate-y-1 hover:bg-white/15"
              >
                {content.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}

export default Services;
