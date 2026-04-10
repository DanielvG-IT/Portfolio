import type { Locale, SocialLink } from "@/types/site";

export const resumeFile = (locale: Locale) => {
  const language = locale === "nl" ? "NL" : "EN";

  return `https://github.com/DanielvG-IT/DanielvG-IT/raw/refs/heads/main/Curriculum%20Vitae%20(${language}).pdf`;
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/DanielvG-IT",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/daniel-v-ginneken/",
  },
  {
    label: "Email",
    href: "mailto:daniel@danielvanginneken.nl",
  },
];
