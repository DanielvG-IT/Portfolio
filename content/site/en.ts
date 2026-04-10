import type { SiteDictionary } from "@/types/site";

export const enSite: SiteDictionary = {
  localeLabel: "English",
  meta: {
    home: {
      title: "Software developer with infrastructure roots",
      description:
        "Bilingual portfolio of Daniël van Ginneken, a young software developer building on top of strong technical foundations in systems, networking, and troubleshooting.",
    },
    about: {
      title: "About",
      description:
        "Learn more about Daniël van Ginneken, his technical background, working style, and why infrastructure roots shape his software approach.",
    },
    projects: {
      title: "Projects",
      description:
        "Selected builds, technical explorations, and current work from Daniël van Ginneken.",
    },
    journey: {
      title: "Journey",
      description:
        "From systems support and infrastructure into software development: the path that shaped Daniël van Ginneken.",
    },
    resume: {
      title: "Resume",
      description:
        "Experience, education, capabilities, and tools for Daniël van Ginneken.",
    },
    contact: {
      title: "Contact",
      description:
        "Get in touch with Daniël van Ginneken for internships, opportunities, or technical conversations.",
    },
  },
  nav: {
    items: [
      { key: "home", label: "Home" },
      { key: "about", label: "About" },
      { key: "projects", label: "Projects" },
      { key: "journey", label: "Journey" },
      { key: "contact", label: "Contact" },
    ],
    resumeCta: "Resume",
    openMenu: "Open navigation",
    closeMenu: "Close navigation",
    themeToggle: "Toggle theme",
    languageToggle: "Switch language",
  },
  common: {
    selectedBuilds: "Selected builds",
    technicalExplorations: "Technical explorations",
    currentlyBuilding: "Currently building",
    statusLabels: {
      selected: "Selected",
      exploration: "Exploration",
      building: "Building",
    },
    viewAllProjects: "View all projects",
    viewJourney: "View journey",
    viewResume: "View resume",
    downloadResume: "Download resume",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
    liveSite: "Live site",
    availableOnRequest: "Available on request",
    noPublicLinks: "Public links are not ready yet",
    readMore: "Read more",
  },
  home: {
    hero: {
      eyebrow: "Software developer with infrastructure roots",
      title: "Building software on top of strong technical foundations.",
      alternatives: [
        "Software developer with infrastructure roots.",
        "From systems and networking into software engineering.",
        "A developer shaped by real-world infrastructure.",
      ],
      intro:
        "I’m Daniël van Ginneken, a 19-year-old software development student from the Netherlands. My background in systems support and infrastructure gave me a practical technical foundation. Now I’m deliberately going deeper into software engineering.",
      detailLines: [
        "Software development is the primary direction.",
        "Infrastructure knowledge adds depth in troubleshooting, systems thinking, and reliability.",
      ],
    },
    trustStrip: [
      "Based in the Netherlands",
      "Focused on internships and serious software growth",
      "GitHub, LinkedIn, and resume available",
    ],
    infrastructure: {
      eyebrow: "Infrastructure roots",
      title: "Troubleshooting, systems thinking, and real technical context.",
      description:
        "The infrastructure background matters because it shaped how problems are approached: methodically, calmly, and with attention to how systems behave outside ideal conditions.",
      asideTitle: "Software first. Broader technical understanding as an advantage.",
      asideDescription:
        "The site positions software development as the main identity. The infrastructure side supports that identity with stronger debugging, clearer systems awareness, and a more grounded understanding of reliability.",
      points: [
        {
          title: "Practical problem solving",
          description:
            "Real support work teaches how to isolate issues, deal with incomplete information, and stay useful under pressure.",
        },
        {
          title: "Systems awareness",
          description:
            "Linux, networking, and operational context make it easier to think beyond the frontend and understand how software fits into larger systems.",
        },
        {
          title: "Grounded engineering habits",
          description:
            "A foundation in support and infrastructure encourages cleaner debugging, better structure, and more respect for reliability.",
        },
      ],
    },
    projects: {
      eyebrow: "Work",
      title: "Early work, presented honestly and with structure.",
      description:
        "The goal here is not to fake a polished senior portfolio. It is to show the strongest current work, the areas being explored, and what is actively being built next.",
      honestyNote:
        "Case-study-ready projects are still limited. That is exactly why the site separates selected work, explorations, and work in progress.",
    },
    journey: {
      eyebrow: "Journey",
      title: "From MSP and systems support toward software engineering.",
      description:
        "The path matters because it explains the mindset behind the work: practical, technical, and built on real environments before moving deeper into software.",
    },
    capabilities: {
      eyebrow: "Capabilities",
      title: "Skills shown as foundations, current tools, and next growth areas.",
      description:
        "This site avoids percentages and inflated labels. The focus is on what is being used now, what is already grounded, and what is being deepened next.",
    },
    contentTeaser: {
      eyebrow: "Future content",
      title: "Sharing what I learn over time.",
      description:
        "Technical notes, small breakdowns, and eventually video are part of the long-term direction, but they stay secondary to the work itself.",
      note: "The goal is thoughtful technical sharing, not building an influencer-style website.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Open to internships, opportunities, and strong technical conversations.",
      description:
        "If the combination of software focus and infrastructure depth is relevant, the best routes are email or LinkedIn.",
    },
  },
  about: {
    intro: {
      eyebrow: "About",
      title: "A young developer with technical depth already in place.",
      description:
        "The strongest way to describe the profile is simple: early in the journey, serious about the craft, and building on top of real technical foundations.",
    },
    narrative: [
      "I started from the infrastructure side of IT. That meant learning how systems behave in practice, how technical issues surface in the real world, and how to solve problems without guessing.",
      "That background gave me habits I still rely on now: troubleshooting step by step, paying attention to reliability, and thinking beyond a single screen or framework.",
      "Software development is where I want to go deeper. I’m intentionally building toward stronger software projects, better architecture decisions, and a body of work that grows with me over the coming years.",
    ],
    principlesLabel: "Principle",
    principles: [
      {
        title: "Honest positioning",
        description:
          "No inflated titles, no fake client stories, and no pretending to be further than I am.",
      },
      {
        title: "Technical discipline",
        description:
          "Clean structure, careful thinking, and respect for how software behaves in real conditions.",
      },
      {
        title: "Long-term orientation",
        description:
          "This site is built as a serious base for internships now and stronger work, products, and content later.",
      },
    ],
    currentFocus: {
      title: "Current focus",
      description:
        "The current phase is about building a stronger software profile without losing the advantages of a broader technical background.",
      items: [
        "Sharpening TypeScript and React/Next.js execution",
        "Building case-study-ready projects with better structure",
        "Deepening full-stack and architecture thinking",
        "Turning infrastructure awareness into better software judgment",
      ],
    },
    portraitNote:
      "A portrait can support the brand, but the site is designed to remain strong even without heavy photography.",
  },
  projectsPage: {
    intro: {
      eyebrow: "Projects",
      title: "Work that reflects the current stage honestly.",
      description:
        "This page separates what is already presentable, what is still exploratory, and what is actively taking shape next.",
    },
    honestyNote:
      "There are not yet five polished flagship projects here, and the site does not pretend otherwise. The stronger move is to document the work clearly and let the portfolio grow with real substance.",
    sectionDescriptions: {
      selected:
        "The strongest current work that already supports the overall story and standard of the site.",
      exploration:
        "Smaller builds and technical experiments that matter because they show direction, not because they are being overstated.",
      building:
        "Areas that are still in progress and intentionally framed as such.",
    },
  },
  journeyPage: {
    intro: {
      eyebrow: "Journey",
      title: "From systems support into software development.",
      description:
        "The path matters because it explains why the work is grounded the way it is, and why software is now the main direction.",
    },
    transitionTitle: "What this path adds to the software side",
    transitionDescription:
      "The infrastructure background is not the headline identity, but it adds practical strengths that are useful in software development.",
    transitionPoints: [
      {
        title: "Calmer debugging",
        description:
          "Experience in support environments builds a more structured approach to problem solving.",
      },
      {
        title: "Broader systems context",
        description:
          "Knowing something about Linux, networking, and deployment changes how software decisions are evaluated.",
      },
      {
        title: "Less theory-only thinking",
        description:
          "Real environments teach tradeoffs, reliability, and the difference between something that works once and something that holds up.",
      },
    ],
  },
  resumePage: {
    intro: {
      eyebrow: "Resume",
      title: "A clear view of experience, education, and direction.",
      description:
        "This is a concise overview of the background behind the portfolio: real technical foundations, software as the main path, and room to keep growing.",
    },
    summary:
      "Software developer in progress, built on top of systems support experience, infrastructure awareness, and an intentional move into stronger software engineering work.",
    experienceTitle: "Experience",
    educationTitle: "Education",
    capabilitiesTitle: "Capability areas",
    toolsTitle: "Tools and technologies",
  },
  contactPage: {
    intro: {
      eyebrow: "Contact",
      title: "Best reached directly.",
      description:
        "The contact approach in v1 is simple on purpose: clear trust signals, direct routes, and no unnecessary form friction.",
    },
    availabilityTitle: "Availability",
    availabilityCopy:
      "Currently most relevant for internships, early-career software opportunities, and conversations with teams that value technical foundations as much as visible output.",
    bestRouteTitle: "Best route",
    bestRouteCopy:
      "Email works best for direct contact. LinkedIn is also a good route for professional outreach in the Netherlands.",
  },
  footer: {
    statement:
      "Software developer with infrastructure roots, building a serious long-term base for better software work.",
    location: "Based in North Brabant, the Netherlands",
    rights: "All rights reserved.",
  },
};
