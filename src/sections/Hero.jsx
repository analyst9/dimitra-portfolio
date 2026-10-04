import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/profile.jpg";
import { scrollToSection } from "../utils/scroll";

const heroTranslations = {
  el: {
    hello: "Γεια σου, είμαι η",
    firstName: "Δήμητρα",
    lastName: "Λάμπρου",
    roles: [
      "Ερευνήτρια Τεχνητής Νοημοσύνης",
      "Αναλύτρια Δεδομένων",
      "Πληροφορικός",
      "Μαθηματικός",
      "Υποψήφια Διδάκτορας",
      "Δημιουργός Ιστοσελίδων",
    ],
    motto:
      "Μετασχηματίζοντας την Εκπαίδευση μέσα από την Τεχνητή Νοημοσύνη, τα Μαθηματικά και τα Δεδομένα.",
    explore: "Εξερεύνησε το έργο μου",
    cv: "Δες το Βιογραφικό",
  },

  en: {
    hello: "Hello, I'm",
    firstName: "Dimitra",
    lastName: "Lamprou",
    roles: [
      "AI Researcher",
      "Data Analyst",
      "Computer Scientist",
      "Mathematician",
      "PhD Candidate",
      "Web Designer",
    ],
    motto:
      "Transforming Education through Artificial Intelligence, Mathematics and Data.",
    explore: "Explore My Work",
    cv: "View CV",
  },
};

function Hero({ language }) {
  const content = heroTranslations[language];

  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setTypedText("");
    setRoleIndex(0);
    setIsDeleting(false);
  }, [language]);

  useEffect(() => {
    const currentRole = content.roles[roleIndex];

    const typingTimer = setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentRole.slice(0, typedText.length + 1);
          setTypedText(nextText);

          if (nextText === currentRole) {
            setTimeout(() => {
              setIsDeleting(true);
            }, 1400);
          }
        } else {
          const nextText = currentRole.slice(0, typedText.length - 1);
          setTypedText(nextText);

          if (nextText === "") {
            setIsDeleting(false);
            setRoleIndex(
              (previousIndex) =>
                (previousIndex + 1) % content.roles.length
            );
          }
        }
      },
      isDeleting ? 45 : 90
    );

    return () => clearTimeout(typingTimer);
  }, [
    typedText,
    isDeleting,
    roleIndex,
    content.roles,
  ]);

  return (
    <section
      id="home"
      className="mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-28 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:pt-32 lg:gap-16"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
      >
        <p className="mb-4 text-lg font-bold text-cyan-100 md:text-xl">
          {content.hello}
        </p>

        <h1 className="mb-6 text-5xl font-black leading-[1.05] sm:text-6xl lg:text-7xl xl:text-8xl">
          <span className="bg-gradient-to-r from-white via-cyan-100 to-violet-300 bg-clip-text text-transparent">
            {content.firstName}
            <br />
            {content.lastName}
          </span>
        </h1>

        <p
          aria-live="off"
          className="mb-6 min-h-[84px] text-2xl font-extrabold leading-tight text-cyan-300 sm:min-h-[48px] sm:text-3xl lg:text-4xl"
        >
          {typedText}
          <span className="ml-1 animate-pulse text-cyan-200">
            |
          </span>
        </p>

        <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-200 md:text-xl">
          {content.motto}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className="whitespace-nowrap rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-4 text-center font-extrabold shadow-[0_10px_35px_rgba(34,211,238,0.2)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_15px_40px_rgba(34,211,238,0.35)]"
          >
            {content.explore}
          </a>

          <a
            href="#cv"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("cv");
            }}
            className="whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-6 py-4 text-center font-extrabold backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-cyan-300/40 hover:bg-white/15"
          >
            {content.cv}
          </a>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <motion.div
          className="relative w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[320px]"
          animate={{
            y: [0, -12, 0],
            rotate: [0, 0.5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 rounded-[36px] bg-cyan-400/20 blur-3xl" />

          <img
            src={heroImg}
            alt="Dimitra Lamprou"
            width="444"
            height="514"
            fetchPriority="high"
            className="relative aspect-[444/514] w-full rounded-[36px] border border-white/10 object-cover object-center shadow-[0_25px_80px_rgba(34,211,238,0.18)]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;