export type Locale = "nl" | "en";

export type RouteKey =
  | "home"
  | "about"
  | "projects"
  | "journey"
  | "resume"
  | "contact";

export type ProjectStatus = "selected" | "exploration" | "building";

export type CapabilityState = "workingWith" | "foundationIn" | "deepening";

export interface HeroContent {
  eyebrow: string;
  title: string;
  titleLines: string[];
  alternatives: string[];
  intro: string;
  detailLines: string[];
}

export interface CapabilityCluster {
  state: CapabilityState;
  title: string;
  description: string;
  evidence: string;
  items: string[];
}

export interface ContactMethod {
  label: string;
  value: string;
  href: string;
  note: string;
}

export interface ExperienceEntry {
  period: string;
  title: string;
  organization: string;
  summary: string;
  bullets: string[];
}

export interface PageIntro {
  eyebrow: string;
  title: string;
  description: string;
}

export interface ProjectEntry {
  slug: string;
  title: string;
  status: ProjectStatus;
  category: string;
  year: string;
  summary: string;
  context: string;
  stack: string[];
  links: {
    github?: string;
    live?: string;
  };
  note?: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteDictionary {
  localeLabel: string;
  meta: {
    home: { title: string; description: string };
    about: { title: string; description: string };
    projects: { title: string; description: string };
    journey: { title: string; description: string };
    resume: { title: string; description: string };
    contact: { title: string; description: string };
  };
  nav: {
    items: Array<{ key: RouteKey; label: string }>;
    resumeCta: string;
    openMenu: string;
    closeMenu: string;
    themeToggle: string;
    languageToggle: string;
  };
  common: {
    selectedBuilds: string;
    technicalExplorations: string;
    currentlyBuilding: string;
    statusLabels: Record<ProjectStatus, string>;
    viewAllProjects: string;
    viewJourney: string;
    viewResume: string;
    downloadResume: string;
    github: string;
    linkedin: string;
    email: string;
    liveSite: string;
    availableOnRequest: string;
    noPublicLinks: string;
    readMore: string;
  };
  home: {
    hero: HeroContent;
    trustStrip: string[];
    infrastructure: {
      eyebrow: string;
      title: string;
      description: string;
      asideTitle: string;
      asideDescription: string;
      points: Array<{ title: string; description: string }>;
    };
    projects: {
      eyebrow: string;
      title: string;
      description: string;
      honestyNote: string;
    };
    journey: {
      eyebrow: string;
      title: string;
      description: string;
    };
    capabilities: {
      eyebrow: string;
      title: string;
      description: string;
    };
    contentTeaser: {
      eyebrow: string;
      title: string;
      description: string;
      note: string;
    };
    contact: {
      eyebrow: string;
      title: string;
      description: string;
    };
  };
  about: {
    intro: PageIntro;
    narrative: string[];
    principlesLabel: string;
    principles: Array<{ title: string; description: string }>;
    currentFocus: {
      title: string;
      description: string;
      items: string[];
    };
    portraitNote: string;
  };
  projectsPage: {
    intro: PageIntro;
    honestyNote: string;
    sectionDescriptions: Record<ProjectStatus, string>;
  };
  journeyPage: {
    intro: PageIntro;
    transitionTitle: string;
    transitionDescription: string;
    transitionPoints: Array<{ title: string; description: string }>;
  };
  resumePage: {
    intro: PageIntro;
    summary: string;
    experienceTitle: string;
    educationTitle: string;
    capabilitiesTitle: string;
    toolsTitle: string;
  };
  contactPage: {
    intro: PageIntro;
    availabilityTitle: string;
    availabilityCopy: string;
    bestRouteTitle: string;
    bestRouteCopy: string;
  };
  footer: {
    statement: string;
    location: string;
    rights: string;
  };
}
