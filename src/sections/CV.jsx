import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaLanguage,
  FaCertificate,
  FaCode,
  FaHeart,
} from "react-icons/fa6";
import FadeInSection from "../components/FadeInSection";
import { cvContent } from "../content/cv";

function TimelineItem({ item, presentLabel }) {
  return (
    <li className="relative pb-10 pl-8 last:pb-0 md:pl-10">
      <span
        aria-hidden="true"
        className={`absolute left-[-7px] top-2 h-3.5 w-3.5 rounded-full border-2 ${
          item.current
            ? "border-cyan-300 bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,.8)]"
            : "border-slate-500 bg-slate-950"
        }`}
      />

      <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-bold">
        <span className="text-cyan-300">{item.period}</span>
        {item.current && (
          <span className="rounded-full border border-emerald-300/25 bg-emerald-400/10 px-2.5 py-0.5 text-xs text-emerald-200">
            {presentLabel}
          </span>
        )}
        {item.meta && (
          <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-0.5 text-xs text-slate-300">
            {item.meta}
          </span>
        )}
      </div>

      <h4 className="text-xl font-extrabold leading-snug text-white md:text-2xl">
        {item.title}
      </h4>

      <p className="mt-1 font-semibold text-violet-300">{item.org}</p>

      {item.details?.length > 0 && (
        <ul className="mt-4 space-y-2 text-slate-300">
          {item.details.map((detail) => (
            <li key={detail} className="flex gap-3 leading-7">
              <span
                aria-hidden="true"
                className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/70"
              />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function SideCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
      <h4 className="mb-4 flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.18em] text-cyan-300">
        <Icon aria-hidden="true" className="text-base" />
        {title}
      </h4>
      {children}
    </div>
  );
}

function CV({ language }) {
  const content = cvContent[language] || cvContent.el;
  const [tab, setTab] = useState("experience");

  const tabs = [
    { id: "experience", label: content.tabs.experience, icon: FaBriefcase },
    { id: "education", label: content.tabs.education, icon: FaGraduationCap },
  ];

  const items = tab === "education" ? content.education : content.experience;

  return (
    <section
      id="cv"
      className="relative scroll-mt-28 overflow-hidden px-6 py-24 text-white sm:px-8 md:px-16 md:py-28 xl:px-24"
    >
      <div className="pointer-events-none absolute right-[-160px] top-40 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />

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

          <div className="mb-10 rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-400/[0.07] to-violet-500/[0.07] p-7 md:p-10">
            <h3 className="mb-4 text-sm font-extrabold uppercase tracking-[0.25em] text-violet-300">
              {content.profileTitle}
            </h3>
            <p className="text-lg leading-8 text-slate-200">{content.profile}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 md:p-10">
              <div
                role="tablist"
                aria-label={content.title}
                className="mb-10 inline-flex rounded-full border border-white/10 bg-slate-900/70 p-1.5"
              >
                {tabs.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={tab === id}
                    onClick={() => setTab(id)}
                    className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-extrabold transition md:text-base ${
                      tab === id ? "text-slate-950" : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {tab === id && (
                      <motion.span
                        layoutId="cv-tab-pill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300 to-violet-300"
                        transition={{ type: "spring", stiffness: 400, damping: 34 }}
                      />
                    )}
                    <Icon aria-hidden="true" className="relative" />
                    <span className="relative">{label}</span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.ol
                  key={tab + language}
                  role="tabpanel"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="ml-2 border-l border-white/15"
                >
                  {items.map((item) => (
                    <TimelineItem
                      key={item.title + item.period}
                      item={item}
                      presentLabel={content.present}
                    />
                  ))}
                </motion.ol>
              </AnimatePresence>
            </div>

            <aside className="flex flex-col gap-6">
              <SideCard icon={FaCode} title={content.technicalTitle}>
                <div className="flex flex-wrap gap-2">
                  {content.technical.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-cyan-300/20 bg-cyan-400/[0.07] px-3 py-1.5 text-sm font-bold text-cyan-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SideCard>

              <SideCard icon={FaLanguage} title={content.languagesTitle}>
                <ul className="space-y-3">
                  {content.languages.map((lang) => (
                    <li
                      key={lang.name}
                      className="flex items-center justify-between gap-4"
                    >
                      <span className="font-bold text-white">{lang.name}</span>
                      <span className="text-right text-sm text-slate-400">
                        {lang.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </SideCard>

              <SideCard icon={FaCertificate} title={content.coursesTitle}>
                <ul className="space-y-4">
                  {content.courses.map((course) => (
                    <li key={course.name}>
                      <p className="font-bold leading-6 text-white">
                        {course.name}
                      </p>
                      <p className="text-sm text-slate-400">
                        {course.org} · {course.period}
                      </p>
                    </li>
                  ))}
                </ul>
              </SideCard>

              <SideCard icon={FaHeart} title={content.softTitle}>
                <div className="flex flex-wrap gap-2">
                  {content.soft.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-sm font-semibold text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SideCard>

              <p className="px-2 text-sm text-slate-400">
                {content.publicationsNote}{" "}
                <a
                  href="#publications"
                  className="font-bold text-cyan-300 underline-offset-4 hover:underline"
                >
                  {content.publicationsLink}
                </a>
                .
              </p>
            </aside>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}

export default CV;
