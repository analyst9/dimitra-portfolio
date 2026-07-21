import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/profile.jpg";

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
    ],
    motto:
      "Μετασχηματίζοντας την Εκπαίδευση μέσα από την Τεχνητή Νοημοσύνη, τα Μαθηματικά και τα Δεδομένα.",
    explore: "Εξερεύνησε το έργο μου",
    cv: "Λήψη Βιογραφικού",
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
    ],
    motto:
      "Transforming Education through Artificial Intelligence, Mathematics and Data.",
    explore: "Explore My Work",
    cv: "Download CV",
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
      className="grid min-h-screen scroll-mt-28 grid-cols-1 items-center gap-12 px-8 pb-16 pt-32 md:grid-cols-2 md:px-24"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
      >
        <p className="mb-5 text-xl font-bold text-cyan-100">
          {content.hello}
        </p>

        <h1 className="mb-6 text-6xl font-black leading-tight md:text-8xl">
          <span className="bg-gradient-to-r from-white via-cyan-100 to-violet-300 bg-clip-text text-transparent">
            {content.firstName}
            <br />
            {content.lastName}
          </span>
        </h1>

        <h2 className="mb-6 min-h-[70px] text-4xl font-extrabold text-cyan-300 md:text-5xl">
          {typedText}
          <span className="ml-1 animate-pulse text-cyan-200">
            |
          </span>
        </h2>

        <p className="mb-8 max-w-xl text-xl leading-relaxed text-slate-200">
          {content.motto}
        </p>

        <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
          <a
            href="#about"
            className="whitespace-nowrap rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-4 text-center font-extrabold shadow-[0_10px_35px_rgba(34,211,238,0.2)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_15px_40px_rgba(34,211,238,0.35)]"
          >
            {content.explore}
          </a>

          <a
  href={language === "el" ? "/cv-el.pdf" : "/cv-en.pdf"}
  target="_blank"
  rel="noreferrer"
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
          className="relative"
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
          <div className="absolute inset-0 rounded-[44px] bg-cyan-400/20 blur-3xl" />

          <img
            src={heroImg}
            alt="Dimitra Lamprou"
            className="relative h-[560px] w-[430px] rounded-[44px] border border-white/10 object-cover object-top shadow-[0_25px_80px_rgba(34,211,238,0.18)]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;