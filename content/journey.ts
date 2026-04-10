import type { CapabilityCluster, ExperienceEntry, Locale } from "@/types/site";

const journeyContent: Record<
  Locale,
  {
    timeline: ExperienceEntry[];
    experience: ExperienceEntry[];
    education: ExperienceEntry[];
    capabilities: CapabilityCluster[];
    tools: string[];
  }
> = {
  en: {
    timeline: [
      {
        period: "2022",
        title: "Built a technical foundation in systems and devices",
        organization: "Curio Techniek & Technologie",
        summary:
          "Started from the infrastructure side of IT, learning how systems behave, fail, and need to be supported in the real world.",
        bullets: [
          "Worked with hardware, networking, troubleshooting, and operational thinking.",
          "Built the kind of technical discipline that later translates well into software work.",
        ],
      },
      {
        period: "Nov 2022 - Present",
        title: "Worked in system support / MSP-style environments",
        organization: "Dentech TeleCommunicatie",
        summary:
          "Learned to think in terms of reliability, user impact, and solving real technical problems under practical constraints.",
        bullets: [
          "Strengthened troubleshooting, Linux familiarity, networking context, and structured problem solving.",
          "Built confidence with real environments instead of only classroom exercises.",
        ],
      },
      {
        period: "2024 - Present",
        title: "Moved intentionally toward software development",
        organization: "Avans University of Applied Sciences",
        summary:
          "Shifted focus toward building software, while keeping the systems mindset that came from infrastructure work.",
        bullets: [
          "Working with frontend and full-stack development concepts, especially around modern web applications.",
          "Using each project to sharpen implementation quality, architecture thinking, and product judgment.",
        ],
      },
      {
        period: "Now",
        title: "Building a stronger long-term developer profile",
        organization: "Independent work",
        summary:
          "The current phase is about depth: fewer filler projects, more intentional work, and a clearer developer identity.",
        bullets: [
          "Prioritising case-study-ready builds over quantity.",
          "Creating a serious base for internships, future opportunities, and a long-term personal brand.",
        ],
      },
    ],
    experience: [
      {
        period: "Nov 2022 - Present",
        title: "System Support Specialist",
        organization: "Dentech TeleCommunicatie",
        summary:
          "Hands-on work around support, troubleshooting, technical reliability, and real-world IT environments.",
        bullets: [
          "Developed a practical understanding of Linux, networking, and structured issue resolution.",
          "Learned how to stay calm, methodical, and useful when systems fail or requirements are unclear.",
        ],
      },
      {
        period: "2024 - Present",
        title: "Software development studies and independent building",
        organization: "Avans + independent projects",
        summary:
          "Combining formal study with self-directed project work to move from systems-heavy foundations into software engineering.",
        bullets: [
          "Focusing on modern frontend development with a broader interest in full-stack application design.",
          "Building toward stronger public work that can stand up as case-study material.",
        ],
      },
    ],
    education: [
      {
        period: "2024 - Present",
        title: "Software Development / Computer Science",
        organization: "Avans University of Applied Sciences",
        summary:
          "Current study path centred on software development, programming, and application design.",
        bullets: [
          "The direction is clearly toward software engineering as the primary identity.",
        ],
      },
      {
        period: "2022 - 2024",
        title: "Expert IT Systems & Devices",
        organization: "Curio Techniek & Technologie",
        summary:
          "A systems-oriented education that built practical foundations in hardware, networking, support, and infrastructure thinking.",
        bullets: [
          "This background still shapes the way software problems are approached today.",
        ],
      },
    ],
    capabilities: [
      {
        state: "workingWith",
        title: "Working with modern web development",
        description:
          "Building a stronger software foundation through frontend and application-focused work.",
        evidence:
          "Current focus is on turning study and independent builds into stronger, better-structured software projects.",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        state: "foundationIn",
        title: "Foundation in infrastructure and support",
        description:
          "The infrastructure background adds practical depth that many early developers do not have yet.",
        evidence:
          "Real exposure to Linux, networking, troubleshooting, and operational reality supports more grounded software decisions.",
        items: ["Linux", "Networking", "Systems support", "Troubleshooting"],
      },
      {
        state: "deepening",
        title: "Currently deepening architecture and full-stack thinking",
        description:
          "The next growth step is moving from implementation practice into stronger system and product thinking.",
        evidence:
          "Current work is aimed at better application structure, cleaner case studies, and software that holds up under closer review.",
        items: [".NET", "Blazor", "Application structure", "Deployment awareness"],
      },
    ],
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      ".NET",
      "Blazor",
      "Git",
      "Linux",
      "Docker",
      "Networking fundamentals",
    ],
  },
  nl: {
    timeline: [
      {
        period: "2022",
        title: "Bouwde een technische basis in systemen en devices",
        organization: "Curio Techniek & Technologie",
        summary:
          "Startte vanuit de infrastructuurkant van IT en leerde hoe systemen zich gedragen, falen en in de praktijk ondersteund moeten worden.",
        bullets: [
          "Werkte met hardware, netwerken, troubleshooting en operationeel denken.",
          "Bouwde technische discipline op die later goed doorwerkt in softwareontwikkeling.",
        ],
      },
      {
        period: "Nov 2022 - heden",
        title: "Werkte in system support / MSP-achtige omgevingen",
        organization: "Dentech TeleCommunicatie",
        summary:
          "Leerde denken in betrouwbaarheid, gebruikersimpact en het oplossen van echte technische problemen binnen praktische beperkingen.",
        bullets: [
          "Versterkte troubleshooting, Linux-kennis, netwerkcontext en gestructureerd probleemoplossen.",
          "Bouwde vertrouwen op in echte omgevingen in plaats van alleen klassikale oefeningen.",
        ],
      },
      {
        period: "2024 - heden",
        title: "Bewoog bewust richting softwareontwikkeling",
        organization: "Avans University of Applied Sciences",
        summary:
          "Verschoof de focus naar software bouwen, met behoud van de systeemblik die uit infrastructuurwerk is ontstaan.",
        bullets: [
          "Werkt met frontend- en full-stackconcepten, met nadruk op moderne webapplicaties.",
          "Gebruikt elk project om uitvoeringskwaliteit, architectuurdenken en productoordeel te verbeteren.",
        ],
      },
      {
        period: "Nu",
        title: "Bouwt aan een sterker langetermijnprofiel als developer",
        organization: "Zelfstandig werk",
        summary:
          "De huidige fase draait om verdieping: minder opvulprojecten, meer gericht werk en een duidelijker developer-identiteit.",
        bullets: [
          "Geeft prioriteit aan case-study-ready builds boven kwantiteit.",
          "Bouwt aan een serieuze basis voor stages, toekomstige kansen en een langetermijn personal brand.",
        ],
      },
    ],
    experience: [
      {
        period: "Nov 2022 - heden",
        title: "System Support Specialist",
        organization: "Dentech TeleCommunicatie",
        summary:
          "Praktisch werk rond support, troubleshooting, technische betrouwbaarheid en echte IT-omgevingen.",
        bullets: [
          "Ontwikkelde praktisch begrip van Linux, netwerken en gestructureerde probleemanalyse.",
          "Leerde kalm, methodisch en bruikbaar te blijven wanneer systemen falen of requirements onduidelijk zijn.",
        ],
      },
      {
        period: "2024 - heden",
        title: "Software development studie en zelfstandig bouwen",
        organization: "Avans + zelfstandige projecten",
        summary:
          "Combineert studie met eigen projectwerk om van systeemgerichte fundamenten door te groeien naar software engineering.",
        bullets: [
          "Focus op moderne frontendontwikkeling met bredere interesse in full-stack applicatieontwerp.",
          "Bouwt toe naar sterker publiek werk dat echt als case-study materiaal kan dienen.",
        ],
      },
    ],
    education: [
      {
        period: "2024 - heden",
        title: "Software Development / Computer Science",
        organization: "Avans University of Applied Sciences",
        summary:
          "Huidige studierichting gericht op softwareontwikkeling, programmeren en applicatieontwerp.",
        bullets: [
          "De richting is duidelijk: software engineering als primaire identiteit.",
        ],
      },
      {
        period: "2022 - 2024",
        title: "Expert IT Systems & Devices",
        organization: "Curio Techniek & Technologie",
        summary:
          "Een systeemgerichte opleiding die praktische fundamenten legde in hardware, netwerken, support en infrastructuurdenken.",
        bullets: [
          "Die achtergrond bepaalt nog steeds hoe softwareproblemen vandaag benaderd worden.",
        ],
      },
    ],
    capabilities: [
      {
        state: "workingWith",
        title: "Werkt met moderne webontwikkeling",
        description:
          "Bouwt een sterkere softwarebasis op via frontend- en applicatiegericht werk.",
        evidence:
          "De huidige focus ligt op het omzetten van studie en zelfstandige builds naar sterkere en beter gestructureerde softwareprojecten.",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        state: "foundationIn",
        title: "Fundament in infrastructuur en support",
        description:
          "De infrastructuurachtergrond geeft praktische diepte die veel startende developers nog niet hebben.",
        evidence:
          "Echte blootstelling aan Linux, netwerken, troubleshooting en operationele realiteit ondersteunt meer gegronde softwarekeuzes.",
        items: ["Linux", "Netwerken", "Systems support", "Troubleshooting"],
      },
      {
        state: "deepening",
        title: "Verdiept zich nu in architectuur en full-stack denken",
        description:
          "De volgende groeistap is van implementatie-oefening naar sterker systeem- en productdenken.",
        evidence:
          "Huidig werk is gericht op betere applicatiestructuur, schonere case studies en software die beter standhoudt bij serieuze beoordeling.",
        items: [".NET", "Blazor", "Applicatiestructuur", "Deployment awareness"],
      },
    ],
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      ".NET",
      "Blazor",
      "Git",
      "Linux",
      "Docker",
      "Netwerkfundamenten",
    ],
  },
};

export function getJourneyTimeline(locale: Locale) {
  return journeyContent[locale].timeline;
}

export function getExperienceEntries(locale: Locale) {
  return journeyContent[locale].experience;
}

export function getEducationEntries(locale: Locale) {
  return journeyContent[locale].education;
}

export function getCapabilityClusters(locale: Locale) {
  return journeyContent[locale].capabilities;
}

export function getTools(locale: Locale) {
  return journeyContent[locale].tools;
}
