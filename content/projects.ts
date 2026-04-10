import type { Locale, ProjectEntry, ProjectStatus } from "@/types/site";

const projectsByLocale: Record<Locale, ProjectEntry[]> = {
  en: [
    {
      slug: "portfolio-platform",
      title: "Portfolio platform",
      status: "selected",
      category: "Personal platform / Next.js",
      year: "2026",
      summary:
        "A bilingual portfolio built as a long-term personal platform rather than a one-page template.",
      context:
        "The goal of this project is clarity and credibility: software development first, infrastructure roots as supporting depth, and room to grow into stronger case studies over time.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "App Router", "next-themes"],
      links: {
        live: "https://danielvanginneken.nl",
        github: "https://github.com/DanielvG-IT",
      },
      note: "This site is intentionally treated as a product foundation, not just a design exercise.",
    },
    {
      slug: "blazor-dotnet-experiments",
      title: "Blazor and .NET experiments",
      status: "exploration",
      category: "Technical exploration",
      year: "2025",
      summary:
        "A set of smaller experiments used to understand component-driven UI, routing, and application structure in the .NET ecosystem.",
      context:
        "This work is about learning the shape of production-minded software development, not claiming polished finished products before they exist.",
      stack: ["C#", ".NET", "Blazor"],
      links: {},
      note: "Still exploration work. Stronger public case studies will be added as they mature.",
    },
    {
      slug: "frontend-coursework-builds",
      title: "Frontend coursework builds",
      status: "exploration",
      category: "Coursework / UI practice",
      year: "2024-2026",
      summary:
        "School and independent builds focused on layout, UI structure, component thinking, and cleaner frontend implementation.",
      context:
        "These projects matter because they show progression, but they are not presented as flagship work until the product thinking and execution level are stronger.",
      stack: ["React", "JavaScript", "Tailwind CSS"],
      links: {},
      note: "Selected examples will be upgraded into full case studies when they are worth documenting properly.",
    },
    {
      slug: "next-case-study-build",
      title: "Next case-study-ready application",
      status: "building",
      category: "Currently building",
      year: "Current focus",
      summary:
        "Work in progress toward a stronger application with clearer product thinking, stronger architecture, and a better case-study story.",
      context:
        "The aim is not to ship filler projects quickly, but to build something that can stand up to closer technical review.",
      stack: ["Next.js", "TypeScript", "Full-stack architecture"],
      links: {},
      note: "Still taking shape.",
    },
    {
      slug: "technical-notes-and-automation",
      title: "Technical notes and automation ideas",
      status: "building",
      category: "Systems + software",
      year: "Ongoing",
      summary:
        "An evolving stream of smaller ideas around Linux workflows, deployment awareness, troubleshooting patterns, and practical automation.",
      context:
        "This is the area where infrastructure experience can turn into useful software workflows, notes, and eventually small tools.",
      stack: ["Linux", "Networking", "Automation thinking"],
      links: {},
      note: "Public output here will grow gradually instead of being forced into a content machine from day one.",
    },
  ],
  nl: [
    {
      slug: "portfolio-platform",
      title: "Portfolio platform",
      status: "selected",
      category: "Persoonlijk platform / Next.js",
      year: "2026",
      summary:
        "Een tweetalig portfolio dat is opgebouwd als langetermijnplatform, niet als one-page template.",
      context:
        "Het doel van dit project is helderheid en geloofwaardigheid: softwareontwikkeling op één, infrastructuurroots als ondersteunende diepte, en ruimte om later sterkere case studies toe te voegen.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "App Router", "next-themes"],
      links: {
        live: "https://danielvanginneken.nl",
        github: "https://github.com/DanielvG-IT",
      },
      note: "Deze site wordt bewust behandeld als productfundament, niet alleen als designoefening.",
    },
    {
      slug: "blazor-dotnet-experiments",
      title: "Blazor- en .NET-experimenten",
      status: "exploration",
      category: "Technische verkenning",
      year: "2025",
      summary:
        "Een reeks kleinere experimenten om componentgedreven UI, routing en applicatiestructuur binnen het .NET-ecosysteem beter te begrijpen.",
      context:
        "Dit werk draait om het leren van de vorm van productiegericht software bouwen, niet om afgewerkte producten te claimen voordat ze dat echt zijn.",
      stack: ["C#", ".NET", "Blazor"],
      links: {},
      note: "Nog verkennend werk. Sterkere publieke case studies volgen zodra ze daar klaar voor zijn.",
    },
    {
      slug: "frontend-coursework-builds",
      title: "Frontend studieprojecten",
      status: "exploration",
      category: "Schoolwerk / UI-oefening",
      year: "2024-2026",
      summary:
        "School- en zelfstandige builds gericht op layout, UI-structuur, componentdenken en schonere frontend-implementatie.",
      context:
        "Deze projecten zijn relevant omdat ze ontwikkeling laten zien, maar ze worden nog niet gepresenteerd als vlaggenschipwerk zolang productdenken en uitvoering nog groeien.",
      stack: ["React", "JavaScript", "Tailwind CSS"],
      links: {},
      note: "Geselecteerde voorbeelden worden later uitgewerkt tot echte case studies als ze dat waard zijn.",
    },
    {
      slug: "next-case-study-build",
      title: "Next case-study-ready applicatie",
      status: "building",
      category: "Nu in ontwikkeling",
      year: "Huidige focus",
      summary:
        "Werk in uitvoering richting een sterkere applicatie met duidelijker productdenken, betere architectuur en een serieuzer case-study-verhaal.",
      context:
        "Het doel is niet om snel opvulprojecten te publiceren, maar om iets te bouwen dat technisch beter standhoudt bij serieuze beoordeling.",
      stack: ["Next.js", "TypeScript", "Full-stack architectuur"],
      links: {},
      note: "Nog in opbouw.",
    },
    {
      slug: "technical-notes-and-automation",
      title: "Technische notities en automatiseringsideeën",
      status: "building",
      category: "Systemen + software",
      year: "Lopend",
      summary:
        "Een groeiende stroom kleinere ideeën rond Linux-workflows, deployment awareness, troubleshootingpatronen en praktische automatisering.",
      context:
        "Hier kan infrastructuurervaring uitgroeien tot bruikbare softwareworkflows, notities en uiteindelijk kleine tools.",
      stack: ["Linux", "Netwerken", "Automatiseringsdenken"],
      links: {},
      note: "Publieke output groeit hier geleidelijk, zonder het geforceerd als contentmachine te behandelen.",
    },
  ],
};

export function getProjects(locale: Locale) {
  return projectsByLocale[locale];
}

export function getProjectsByStatus(locale: Locale, status: ProjectStatus) {
  return getProjects(locale).filter((project) => project.status === status);
}
