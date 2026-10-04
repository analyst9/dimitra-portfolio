export function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  const navbarOffset = 100;
  const top =
    section.getBoundingClientRect().top + window.scrollY - navbarOffset;
  window.scrollTo({ top: sectionId === "home" ? 0 : top, behavior: "smooth" });
}
