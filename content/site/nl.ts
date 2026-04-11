import type { SiteDictionary } from "@/types/site";

export const nlSite: SiteDictionary = {
  localeLabel: "Nederlands",
  meta: {
    home: {
      title: "Software developer met infrastructuurroots",
      description:
        "Tweetalig portfolio van Daniël van Ginneken, een jonge software developer die bouwt op sterke technische fundamenten in systemen, netwerken en troubleshooting.",
    },
    about: {
      title: "Over Daniël van Ginneken",
      description:
        "Lees meer over Daniël van Ginneken, zijn technische achtergrond, manier van werken en waarom infrastructuurroots zijn software-aanpak versterken.",
    },
    projects: {
      title: "Projecten en technische verkenningen",
      description:
        "Geselecteerde builds, technische verkenningen en huidig werk van Daniël van Ginneken.",
    },
    journey: {
      title: "Van infrastructuur naar softwareontwikkeling",
      description:
        "Van system support en infrastructuur naar softwareontwikkeling: het pad dat Daniël van Ginneken heeft gevormd.",
    },
    resume: {
      title: "CV, ervaring en opleiding",
      description:
        "Ervaring, opleiding en technische focus van Daniël van Ginneken.",
    },
    contact: {
      title: "Contact met Daniël van Ginneken",
      description:
        "Neem contact op met Daniël van Ginneken voor stages, kansen of technische gesprekken.",
    },
  },
  nav: {
    items: [
      { key: "home", label: "Home" },
      { key: "about", label: "Over" },
      { key: "projects", label: "Projecten" },
      { key: "journey", label: "Pad" },
      { key: "contact", label: "Contact" },
    ],
    resumeCta: "CV",
    openMenu: "Open navigatie",
    closeMenu: "Sluit navigatie",
    themeToggle: "Wissel thema",
    languageToggle: "Wissel taal",
  },
  common: {
    selectedBuilds: "Geselecteerde builds",
    technicalExplorations: "Technische verkenningen",
    currentlyBuilding: "Nu in ontwikkeling",
    statusLabels: {
      selected: "Geselecteerd",
      exploration: "Verkenning",
      building: "In opbouw",
    },
    viewAllProjects: "Bekijk alle projecten",
    viewJourney: "Bekijk het pad",
    viewResume: "Bekijk CV",
    downloadResume: "Download CV",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "E-mail",
    liveSite: "Bekijk live",
    availableOnRequest: "Beschikbaar op aanvraag",
    noPublicLinks: "Publieke links zijn nog niet klaar",
    readMore: "Lees meer",
  },
  home: {
    hero: {
      eyebrow: "Software developer met infrastructuurroots",
      title: "Software gebouwd op sterke technische fundamenten.",
      titleLines: [
        "Software gebouwd",
        "op sterke technische",
        "fundamenten.",
      ],
      alternatives: [
        "Software developer met infrastructuurroots.",
        "Van systemen en netwerken naar software engineering.",
        "Een developer gevormd door echte infrastructuur.",
      ],
      intro:
        "Ik ben Daniël van Ginneken, een 19-jarige student software development uit Nederland. Mijn achtergrond in system support en infrastructuur gaf me een praktische technische basis. Nu ga ik bewust dieper richting software engineering.",
      detailLines: [
        "Softwareontwikkeling is de primaire richting.",
        "Infrastructuurkennis voegt diepte toe in troubleshooting, systeemdenken en betrouwbaarheid.",
      ],
    },
    trustStrip: [
      "Gebaseerd in Nederland",
      "Gericht op stages en serieuze groei in software",
      "GitHub, LinkedIn en CV beschikbaar",
    ],
    infrastructure: {
      eyebrow: "Infrastructuurroots",
      title: "Troubleshooting, systeemdenken en echte technische context.",
      description:
        "De infrastructuurachtergrond is relevant omdat die heeft gevormd hoe problemen benaderd worden: methodisch, rustig en met aandacht voor hoe systemen zich gedragen buiten ideale omstandigheden.",
      asideTitle: "Software eerst. Breder technisch begrip als voordeel.",
      asideDescription:
        "De site positioneert softwareontwikkeling als hoofdidentiteit. De infrastructuurkant ondersteunt dat met sterker debuggen, duidelijker systeembewustzijn en een gegronder begrip van betrouwbaarheid.",
      points: [
        {
          title: "Praktisch probleemoplossen",
          description:
            "Echt supportwerk leert hoe je issues isoleert, met onvolledige informatie omgaat en bruikbaar blijft onder druk.",
        },
        {
          title: "Systeembewustzijn",
          description:
            "Linux, netwerken en operationele context maken het makkelijker om verder te denken dan alleen de frontend en te begrijpen hoe software in grotere systemen past.",
        },
        {
          title: "Gegronde engineeringgewoontes",
          description:
            "Een basis in support en infrastructuur stimuleert schoner debuggen, betere structuur en meer respect voor betrouwbaarheid.",
        },
      ],
    },
    projects: {
      eyebrow: "Werk",
      title: "Vroeg werk, eerlijk en met structuur gepresenteerd.",
      description:
        "Het doel is niet om een gepolijst senior portfolio te faken. Het doel is om het sterkste huidige werk te laten zien, de gebieden die nog in verkenning zijn, en wat er actief daarna gebouwd wordt.",
      honestyNote:
        "Case-study-ready projecten zijn nog beperkt. Juist daarom splitst de site geselecteerd werk, verkenningen en werk in uitvoering.",
    },
    journey: {
      eyebrow: "Pad",
      title: "Van MSP en system support richting software engineering.",
      description:
        "Dit pad is relevant omdat het de mindset achter het werk verklaart: praktisch, technisch en gevormd in echte omgevingen voordat de focus dieper naar software verschoof.",
    },
    capabilities: {
      eyebrow: "Technische focus",
      title: "Vaardigheden getoond als fundamenten, huidige tools en volgende groeigebieden.",
      description:
        "Deze site gebruikt geen percentages of opgeblazen labels. De focus ligt op wat nu gebruikt wordt, wat al stevig is, en wat hierna verder verdiept wordt.",
    },
    contentTeaser: {
      eyebrow: "Toekomstige content",
      title: "Na verloop van tijd delen wat ik leer.",
      description:
        "Technische notities, kleine breakdowns en uiteindelijk video horen bij de langetermijnrichting, maar blijven ondergeschikt aan het werk zelf.",
      note: "Het doel is doordacht technisch delen, niet een influencer-achtige website bouwen.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Open voor stages, kansen en sterke technische gesprekken.",
      description:
        "Als de combinatie van softwarefocus en infrastructuurdiepte relevant is, zijn e-mail of LinkedIn de beste routes.",
    },
  },
  about: {
    intro: {
      eyebrow: "Over",
      title: "Een jonge developer met al aanwezige technische diepte.",
      description:
        "De sterkste manier om dit profiel te omschrijven is simpel: vroeg in de reis, serieus over het vak, en bouwend op echte technische fundamenten.",
    },
    narrative: [
      "Ik ben begonnen aan de infrastructuurkant van IT. Daardoor leerde ik hoe systemen zich in de praktijk gedragen, hoe technische problemen in de echte wereld ontstaan en hoe je problemen oplost zonder te gokken.",
      "Die achtergrond gaf me gewoontes waar ik nu nog steeds op leun: stap voor stap troubleshooten, aandacht hebben voor betrouwbaarheid en verder denken dan één scherm of framework.",
      "Softwareontwikkeling is waar ik dieper in wil groeien. Ik bouw bewust toe naar sterkere softwareprojecten, betere architectuurkeuzes en werk dat de komende jaren echt met mij kan meegroeien.",
    ],
    principlesLabel: "Principe",
    principles: [
      {
        title: "Eerlijke positionering",
        description:
          "Geen opgeblazen titels, geen verzonnen klantverhalen en geen doen alsof ik verder ben dan ik ben.",
      },
      {
        title: "Technische discipline",
        description:
          "Schone structuur, zorgvuldig denken en respect voor hoe software zich in echte omstandigheden gedraagt.",
      },
      {
        title: "Langetermijnoriëntatie",
        description:
          "Deze site is gebouwd als serieuze basis voor stages nu en sterker werk, producten en content later.",
      },
    ],
    currentFocus: {
      title: "Huidige focus",
      description:
        "De huidige fase draait om het bouwen van een sterker softwareprofiel zonder de voordelen van een bredere technische achtergrond te verliezen.",
      items: [
        "TypeScript en React/Next.js scherper uitvoeren",
        "Case-study-ready projecten bouwen met betere structuur",
        "Full-stack en architectuurdenken verdiepen",
        "Infrastructuurbewustzijn omzetten in beter softwareoordeel",
      ],
    },
    portraitNote:
      "Een portret kan het merk ondersteunen, maar de site is ontworpen om ook zonder zware fotografie sterk te blijven.",
  },
  projectsPage: {
    intro: {
      eyebrow: "Projecten",
      title: "Werk dat het huidige niveau eerlijk laat zien.",
      description:
        "Deze pagina scheidt wat al presenteerbaar is, wat nog verkennend is en wat nu actief vorm krijgt.",
    },
    honestyNote:
      "Er staan hier nog geen vijf volledig gepolijste vlaggenschipprojecten, en de site doet niet alsof dat wel zo is. De sterkere keuze is om het werk helder te documenteren en het portfolio met echte inhoud te laten groeien.",
    sectionDescriptions: {
      selected:
        "Het sterkste huidige werk dat het verhaal en de standaard van de site al ondersteunt.",
      exploration:
        "Kleinere builds en technische experimenten die relevant zijn omdat ze richting laten zien, niet omdat ze overdreven worden.",
      building:
        "Gebieden die nog in ontwikkeling zijn en bewust ook zo gepresenteerd worden.",
    },
  },
  journeyPage: {
    intro: {
      eyebrow: "Pad",
      title: "Van system support naar softwareontwikkeling.",
      description:
        "Dit pad is relevant omdat het verklaart waarom het werk zo gegrond aanvoelt en waarom software nu de hoofdrichting is.",
    },
    transitionTitle: "Wat dit pad toevoegt aan de softwarekant",
    transitionDescription:
      "De infrastructuurachtergrond is niet de hoofdidentiteit, maar voegt wel praktische sterke punten toe die bruikbaar zijn in softwareontwikkeling.",
    transitionPoints: [
      {
        title: "Rustiger debuggen",
        description:
          "Ervaring in supportomgevingen bouwt een meer gestructureerde aanpak voor probleemoplossen op.",
      },
      {
        title: "Breder systeemcontext",
        description:
          "Iets weten van Linux, netwerken en deployment verandert hoe softwarebeslissingen worden beoordeeld.",
      },
      {
        title: "Minder theorie-only denken",
        description:
          "Echte omgevingen leren trade-offs, betrouwbaarheid en het verschil tussen iets dat één keer werkt en iets dat standhoudt.",
      },
    ],
  },
  resumePage: {
    intro: {
      eyebrow: "CV",
      title: "Een helder overzicht van ervaring, opleiding en richting.",
      description:
        "Dit is een compacte samenvatting van de achtergrond achter het portfolio: echte technische fundamenten, software als hoofdrichting en ruimte om verder te groeien.",
    },
    summary:
      "Software developer in ontwikkeling, gebouwd op ervaring in system support, infrastructuurbewustzijn en een bewuste beweging richting sterker software engineering werk.",
    experienceTitle: "Ervaring",
    educationTitle: "Opleiding",
    capabilitiesTitle: "Technische focusgebieden",
    toolsTitle: "Tools en technologieën",
  },
  contactPage: {
    intro: {
      eyebrow: "Contact",
      title: "Het best direct bereikbaar.",
      description:
        "De contactaanpak in v1 is bewust simpel: duidelijke trust signals, directe routes en geen onnodige frictie via formulieren.",
    },
    availabilityTitle: "Beschikbaarheid",
    availabilityCopy:
      "Momenteel vooral relevant voor stages, vroege softwarekansen en gesprekken met teams die technische fundamenten net zo waarderen als zichtbare output.",
    bestRouteTitle: "Beste route",
    bestRouteCopy:
      "E-mail werkt het best voor direct contact. LinkedIn is ook een sterke route voor professioneel bereik in Nederland.",
  },
  footer: {
    statement:
      "Software developer met infrastructuurroots, bouwend aan een serieuze langetermijnbasis voor sterker softwarewerk.",
    location: "Gebaseerd in Noord-Brabant, Nederland",
    rights: "Alle rechten voorbehouden.",
  },
};
