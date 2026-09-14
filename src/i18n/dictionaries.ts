export const en = {
  meta: {
    title: 'Andrés Cabrera — Travel Tech Engineer & Software Architect',
    description:
      'Senior Software Engineer specializing in flight aggregation platforms, GDS integrations (Amadeus, Sabre, Travelport), cloud-native microservices, and high-concurrency systems. 12M+ daily searches. Available for Travel Tech opportunities.',
    locale: 'en_US',
  },
  nav: {
    about: 'About',
    travelTech: 'Travel Tech',
    stack: 'Stack',
    experience: 'Experience',
    portfolio: 'Portfolio',
    fintech: 'FinTech',
    contact: 'Contact',
    downloadCv: 'Download CV',
    home: 'Andrés Cabrera — Home',
    menu: 'Toggle mobile menu',
  },
  hero: {
    sectionLabel: 'Hero section',
    badge: 'Available for new opportunities',
    titleA: 'Architecting the Future of',
    titleB: 'Travel Technology',
    roles: [
      'Travel Tech Engineer',
      'Flight Aggregation Architect',
      'Backend Systems Specialist',
      'Cloud Native Developer',
    ],
    bio1: 'Senior Software Engineer specializing in ',
    bioS1: 'flight aggregation platforms',
    bio2: ', ',
    bioS2: 'GDS integrations',
    bio3: ', and ',
    bioS3: 'cloud-native microservices',
    bio4: '. Building the infrastructure that moves millions of travelers.',
    statLabels: ['Daily Searches', 'Microservices', 'Provider Integrations'],
    cvEn: 'CV — English',
    cvEs: 'CV — Español',
    meetMe: 'Meet Me',
    scroll: 'scroll',
    photoAlt: 'Andrés Cabrera — Software Engineer',
  },
  stats: {
    sectionLabel: 'Impact statistics',
    items: [
      { label: 'Daily Searches', description: 'Flight searches processed daily after platform optimization' },
      { label: 'Microservices Deployed', description: 'Event-driven services architected from the ground up in Starlings' },
      { label: 'Provider Integrations', description: 'LCCs (AirEuropa, Volaris, etc.), GDSs (Amadeus, Sabre), and aggregators (Travelfusion)' },
      { label: 'Uptime SLA', description: 'Migrated from legacy monoliths to a container based architecture to reach high availability' },
    ],
  },
  travel: {
    sectionLabel: 'Travel Technology specialization',
    badge: 'Primary Specialization',
    titleA: 'Travel Technology',
    titleB: 'Architecture',
    intro:
      'Building the backend infrastructure that powers modern flight search — from raw GDS data to real-time aggregation at massive scale.',
    starlingsPeriod: 'Apr 2025 — Present · Software Developer',
    starlingsDescA: 'A flight aggregation platform processing ',
    starlingsStrong: '12 million+ daily searches',
    starlingsDescB:
      '. My role: scale the aggregation layer, integrate new carriers and distribution systems, and migrate the infrastructure to a containerized microservices architecture.',
    achievements: [
      'Scaled platform throughput to 12M+ flight searches/day via caching and batch optimizations',
      'Integrated Global Distribution Systems (Amadeus, Sabre, Travelport) and Low-Cost Carriers',
      'Led containerization initiative — migrated legacy infrastructure to Docker/k8s microservices',
      'Connected LCC connectors: Volaris, AirEuropa, Turkish Airlines, TravelFusion aggregator',
    ],
    ecosystem: 'Integration Ecosystem',
    gds: 'Global Distribution Systems',
    aggregatorCore: '✈ Flight Aggregator Core',
    aggregatorSub: 'Kotlin · Kafka · 12M req/day',
    lcc: 'Low-Cost Carriers',
    despegarPeriod: 'Oct 2018 – Mar 2020 · Scala Developer',
    despegarDesc:
      "Post-selling flight exchanges on Latin America's largest OTA unicorn. Integrated with Sabre, Travelport & Amadeus. Built fare arbitrage logic for revenue optimization.",
    avantripPeriod: 'Jan 2018 – Oct 2018 · Full Stack Java',
    avantripDesc:
      'Travel back-office platform supporting multiple business alliances. New billing interface against SAP Travel One via Spring Cloud Stream.',
  },
  stack: {
    sectionLabel: 'Technology stack',
    badge: 'Technical Arsenal',
    title: 'Tech Stack',
    subtitle: 'Full-spectrum platform engineering — from API design to cloud infrastructure.',
    roadmap: 'Full Roadmap',
    skillIq: 'Pluralsight Skill IQ',
    groups: {
      'travel-tech': {
        category: 'Travel Tech',
        descs: [
          'Amadeus · Sabre · Travelport',
          'Modern airline distribution',
          'Volaris · Turkish · AirEuropa',
          'Aggregator integration',
          'Financial messaging standard',
        ],
      },
      backend: {
        category: 'Backend',
        descs: [
          'Primary language',
          'Akka · Finatra · Finagle',
          'Spring Boot 4 · Spring FW 7',
          'Reactive Streams · RxJava',
          'High-perf RPC',
          'API design · schema-first',
        ],
      },
      messaging: {
        category: 'Messaging & Events',
        descs: [
          'Event streaming · Kafka Streams',
          'Real-time messaging · caching',
          'Async queue processing',
          'Real-time bidirectional comms',
          'Messaging abstraction',
        ],
      },
      cloud: {
        category: 'Cloud & Infra',
        descs: [
          'EKS · Lambda · S3 · ECS · EC2',
          'Orchestration · Helm · EKS',
          'Containerization · Compose',
          'Workers · Edge Computing · Wrangler',
          'Cloud Foundry · Dataflow',
        ],
      },
      data: {
        category: 'Data',
        descs: [
          'Document store · Atlas',
          'Relational · Spring Data',
          'AWS NoSQL · high-throughput',
          'Full-text search · analytics',
          'Cache · sessions · pub/sub',
        ],
      },
      observability: {
        category: 'Observability',
        descs: [
          'Cluster health · pods · HPA',
          'Built-in observability design',
          'GitHub Actions · automated deploys',
          'Gatling · performance profiling',
        ],
      },
      frontend: {
        category: 'Frontend',
        descs: ['ES6+ · strict mode', 'SSR · Static export · App Router', 'Hooks · Context · Performance', 'Angular 6+ · RxJS · NgRx'],
      },
    } as Record<string, { category: string; descs: string[] }>,
  },
  experience: {
    sectionLabel: 'Work experience timeline',
    badge: 'Work Experience',
    title: 'Career Timeline',
    subtitle: '12+ years building software across Travel Tech, FinTech, and platform engineering.',
    domains: { travel: 'Travel Tech', fintech: 'FinTech', tech: 'Engineering' } as Record<string, string>,
    items: {
      'exp-starlings': {
        role: 'Software Developer',
        period: 'Apr 2025 — Present',
        highlights: [
          'Scaled flight aggregator to handle 12M+ daily searches via throughput optimization and caching improvements',
          'Led GDS and LCC integration development: Amadeus, Sabre, Travelport, Volaris, Turkish Airlines, AirEuropa, TravelFusion',
          'Redesigned and migrated legacy infrastructure to a containerized microservices architecture for high availability',
        ],
      },
      'exp-esportunity': {
        role: 'Founder Developer',
        period: 'Apr 2023 — Apr 2025',
        highlights: [
          'Architected 10+ event-driven microservices for a next-gen Esports startup from the ground up',
          'Built real-time chat system for thousands of concurrent users via WebSocket and Redis PubSub — 99.9% uptime',
          'Improved response times 40% with GraphQL optimizations and intelligent caching / idempotency strategies',
          'Led engineering team end-to-end; accelerated product launch by 30% while implementing observability stack',
        ],
      },
      'exp-rappi': {
        role: 'Software Developer & Tech Lead',
        period: 'Nov 2020 — Apr 2023',
        highlights: [
          'Led RappiPay Authorizer team: credit/debit card processing, anti-fraud systems, ISO8583 switch integrations',
          'Architected multi-country card authorizer using Netty financial frames over ISO8583 standard',
          'Led RappiPay Movements team: major refactor of wallet movements core services across all LATAM',
          'Managed cross-functional teams across Mexico, Colombia, and Argentina',
        ],
      },
      'exp-wenance': {
        role: 'Software Developer',
        period: 'Mar 2020 — Nov 2020',
        highlights: [
          'Designed and built new financial disbursements solution using Project Reactor and async messaging (AWS SQS)',
          'Maintained banking core (Mambu) and public APIs; integrated banking providers STP (MX) and Instantor (ES)',
        ],
      },
      'exp-despegar': {
        role: 'Software Developer',
        period: 'Oct 2018 — Mar 2020',
        highlights: [
          'Developed and maintained Scala backend services for Post-Selling Voluntary Flight Exchanges platform',
          'Resolved complex integrations with major GDS: Sabre, Travelport, Amadeus for ticketing and exchanges',
          'Designed fare arbitrage logic to optimize flight pricing models and capture revenue opportunities',
        ],
      },
      'exp-avantrip': {
        role: 'Full Stack Java Developer',
        period: 'Jan 2018 — Oct 2018',
        highlights: [
          'Built new back-office management system with Spring + AngularJS for multiple travel alliances',
          'Developed SAP Travel One billing interface using Spring Cloud Stream messaging',
        ],
      },
      'exp-monsanto': {
        role: 'Full Stack Java Developer',
        period: 'May 2017 — Jan 2018',
        highlights: [
          'Migrated legacy monolith to cloud-based royalties management application using event-driven architecture',
          'Developed functional reactive microtasks with Spring Cloud Dataflow to redesign core billing interfaces',
        ],
      },
      'exp-galicia': {
        role: 'Java Software Developer',
        period: 'Oct 2016 — May 2017',
        highlights: ['Built new modules for multi-channel banking application on Spring Dynamic Modules / OSGi platform'],
      },
      'exp-hsbc': {
        role: 'Lead Full Stack Developer',
        period: 'Jun 2015 — Oct 2016',
        highlights: [
          'Designed and migrated Money Markets management application for HSBC',
          'Built MatriXS Evergreening SPA; designed microservices backend and dynamic scripting designer',
        ],
      },
    } as Record<string, { role: string; period: string; highlights: string[] }>,
  },
  portfolio: {
    sectionLabel: 'Portfolio projects',
    badge: 'Portfolio',
    titleA: 'Featured',
    titleB: 'Projects',
    subtitle: 'Products I founded -or- built — from travel booking at scale to eSports talent matchmaking.',
    venetravelPeriod: 'venetravel.net · Travel booking platform',
    venetravelDescA: 'Booking platform for Venezuelan destinations — ',
    venetravelStrong: '66+ hotels, flights, tours and attractions',
    venetravelDescB: ' with destination autocomplete, rate quoting, suitcase (maleta) checkout and guest onboarding.',
    venetravelTags: ['Autocomplete', 'Hotels', 'Maleta Checkout', 'Marketplace'],
    venetravelCta: 'Visit venetravel.net',
    venetravelVideoLabel: 'Venetravel booking journey — search, quote, suitcase and checkout',
    venetravelLive: 'Live',
    esportunityPeriod: 'Apr 2023 — Apr 2025 · Founder Developer',
    esportunityDescA: 'A talent-matchmaking platform for competitive gaming: opportunity board with ',
    esportunityStrong: '150+ active listings',
    esportunityDescB: ', community feed and ',
    esportunityStrong2: 'realtime chat',
    esportunityDescC: ' connecting players with eSports organizations across Latin America.',
    esportunityTags: ['Realtime Chat', 'Matchmaking', 'Feed', 'BETA'],
    esportunityUpwork: 'View on Upwork',
    esportunityGithub: 'GitHub — eSportunity',
    esportunityFounder: 'Founder',
    galleryLabel: 'Project screenshots',
  },
  fintech: {
    sectionLabel: 'FinTech experience',
    badge: 'Foundation',
    titleA: 'FinTech',
    titleB: 'Pedigree',
    intro:
      "Before focusing on Travel Tech, I spent 3+ years building the financial infrastructure of LATAM's largest super-app. This gives me a unique edge: the discipline and rigour of high-stakes transactional systems.",
    trackRecord: 'FinTech Track Record',
    metrics: [
      { label: 'Years in FinTech', val: '3+' },
      { label: 'Transactions/day', val: 'M+' },
      { label: 'Countries covered', val: '5+', note: 'MX · CO · AR · ES + more' },
      { label: 'Protocols mastered', val: 'ISO8583', note: 'Card networks' },
    ] as { label: string; val: string; note?: string }[],
    rappiPeriod: 'Nov 2020 – Apr 2023 · Developer & TL',
    rappiDescA: 'Payments infrastructure for one of LATAM',
    rappiDescB: "'s most valued unicorns. Led two critical teams: ",
    rappiStrong1: 'RappiPay Authorizer',
    rappiMid: ' (card processing, anti-fraud) and ',
    rappiStrong2: 'RappiPay Movements',
    rappiDescC: ' (wallet core re-architecture).',
    wenancePeriod: 'Mar 2020 – Nov 2020 · Software Developer',
    wenanceDesc:
      'Designed the financial disbursement architecture for a digital lending platform. Reactive programming with Project Reactor; banking integrations with STP (MX) and Instantor (ES); core banking via Mambu.',
    highlights: {
      'fintech-iso': {
        title: 'ISO8583 Card Processing',
        description:
          'Built multi-country credit and debit card authorizer at RappiPay using Netty financial frames over the ISO8583 messaging standard — handling millions of daily transactions across LATAM.',
      },
      'fintech-antifraud': {
        title: 'Anti-Fraud Systems',
        description:
          'Maintained and extended anti-fraud infrastructure at RappiPay Authorizer for credit card processing — with real-time webhook integrations and traditional Base1/Base2 file flows.',
      },
      'fintech-wallet': {
        title: 'Wallet Movements Core',
        description:
          "Led major re-architecture of RappiPay's wallet movements core for the super-app across Mexico, Colombia, and Argentina — a year-long engineering initiative.",
      },
      'fintech-disbursements': {
        title: 'Financial Disbursements',
        description:
          "Designed a Fintech Banking Startup's cashout solution using Project Reactor and in-house async messaging (AWS SQS). Integrated banking providers STP (Mexico) and Instantor (Spain) for loan disbursements.",
      },
    } as Record<string, { title: string; description: string }>,
  },
  contact: {
    sectionLabel: 'Contact information',
    badge: 'Get in Touch',
    titleA: "Let's Build Something",
    titleB: 'Together',
    subtitle: 'Open to exciting Travel Tech or platform engineering opportunities. Remote-first — based in Argentina & Venezuela.',
    remote: 'Remote',
    location: 'Argentina 🇦🇷 · Venezuela 🇻🇪',
    available: 'Available',
    availability: 'Open to new opportunities',
    scheduleCall: 'Schedule a Call',
  },
  footer: {
    tagline: 'Travel Tech Engineer',
    navLabel: 'Footer navigation',
    schedule: 'Schedule',
  },
  schedule: {
    metaTitle: 'Schedule a Meeting — Andrés Cabrera',
    metaDescription:
      'Book a time to connect with Andrés Cabrera, Travel Tech Engineer. Schedule a discovery call or technical conversation.',
    badge: "Let's connect",
    titleA: 'Schedule a',
    titleB: 'Meeting',
    intro:
      "Pick a time that works for you. Whether it's a technical deep-dive, a discovery call, or just a quick introduction — I'm happy to connect.",
    cards: [
      { label: 'Remote-first', sub: 'Argentina · Venezuela' },
      { label: 'ART / VET', sub: 'UTC-3 / UTC-4' },
      { label: 'Travel Tech focus', sub: 'GDS · NDC · Aggregation' },
    ],
    calendarTitle: 'Schedule Appointment with Andrés Cabrera',
    calendarLabel: 'Appointment scheduling calendar',
    loadingCalendar: 'Loading calendar…',
    altContact: 'Prefer to reach out directly?',
  },
};

export type Dictionary = typeof en;

export const es: Dictionary = {
  meta: {
    title: 'Andrés Cabrera — Ingeniero Travel Tech & Arquitecto de Software',
    description:
      'Ingeniero de Software Senior especializado en plataformas de agregación de vuelos, integraciones GDS (Amadeus, Sabre, Travelport), microservicios cloud-native y sistemas de alta concurrencia. Más de 12M de búsquedas diarias. Disponible para oportunidades Travel Tech.',
    locale: 'es_AR',
  },
  nav: {
    about: 'Sobre mí',
    travelTech: 'Travel Tech',
    stack: 'Stack',
    experience: 'Experiencia',
    portfolio: 'Portafolio',
    fintech: 'FinTech',
    contact: 'Contacto',
    downloadCv: 'Descargar CV',
    home: 'Andrés Cabrera — Inicio',
    menu: 'Abrir menú móvil',
  },
  hero: {
    sectionLabel: 'Sección principal',
    badge: 'Disponible para nuevas oportunidades',
    titleA: 'Diseñando el futuro de la',
    titleB: 'Tecnología de Viajes',
    roles: [
      'Ingeniero Travel Tech',
      'Arquitecto de Agregación de Vuelos',
      'Especialista en Sistemas Backend',
      'Desarrollador Cloud Native',
    ],
    bio1: 'Ingeniero de Software Senior especializado en ',
    bioS1: 'plataformas de agregación de vuelos',
    bio2: ', ',
    bioS2: 'integraciones GDS',
    bio3: ' y ',
    bioS3: 'microservicios cloud-native',
    bio4: '. Construyendo la infraestructura que mueve a millones de viajeros.',
    statLabels: ['Búsquedas diarias', 'Microservicios', 'Integraciones'],
    cvEn: 'CV — English',
    cvEs: 'CV — Español',
    meetMe: 'Agendar llamada',
    scroll: 'desliza',
    photoAlt: 'Andrés Cabrera — Ingeniero de Software',
  },
  stats: {
    sectionLabel: 'Estadísticas de impacto',
    items: [
      { label: 'Búsquedas diarias', description: 'Búsquedas de vuelos procesadas por día tras optimizar la plataforma' },
      { label: 'Microservicios', description: 'Servicios orientados a eventos diseñados desde cero en Starlings' },
      { label: 'Integraciones', description: 'LCCs (AirEuropa, Volaris, etc.), GDSs (Amadeus, Sabre) y agregadores (Travelfusion)' },
      { label: 'SLA de disponibilidad', description: 'Migración de monolitos legacy a arquitectura contenerizada para alta disponibilidad' },
    ],
  },
  travel: {
    sectionLabel: 'Especialización en Travel Technology',
    badge: 'Especialización principal',
    titleA: 'Arquitectura',
    titleB: 'Travel Technology',
    intro:
      'Construyendo la infraestructura backend que potencia la búsqueda moderna de vuelos — desde datos GDS crudos hasta agregación en tiempo real a escala masiva.',
    starlingsPeriod: 'Abr 2025 — Actualidad · Desarrollador de Software',
    starlingsDescA: 'Una plataforma de agregación de vuelos que procesa ',
    starlingsStrong: 'más de 12 millones de búsquedas diarias',
    starlingsDescB:
      '. Mi rol: escalar la capa de agregación, integrar nuevas aerolíneas y sistemas de distribución, y migrar la infraestructura a microservicios contenerizados.',
    achievements: [
      'Escalé el throughput de la plataforma a más de 12M de búsquedas de vuelos/día con caché y optimizaciones batch',
      'Integré Sistemas de Distribución Global (Amadeus, Sabre, Travelport) y aerolíneas Low-Cost',
      'Lideré la contenerización — migré infraestructura legacy a microservicios Docker/k8s',
      'Conecté conectores LCC: Volaris, AirEuropa, Turkish Airlines y el agregador TravelFusion',
    ],
    ecosystem: 'Ecosistema de integración',
    gds: 'Sistemas de Distribución Global',
    aggregatorCore: '✈ Núcleo Agregador de Vuelos',
    aggregatorSub: 'Kotlin · Kafka · 12M req/día',
    lcc: 'Aerolíneas Low-Cost',
    despegarPeriod: 'Oct 2018 – Mar 2020 · Desarrollador Scala',
    despegarDesc:
      'Cambios voluntarios post-venta en el unicornio OTA más grande de Latinoamérica. Integración con Sabre, Travelport y Amadeus. Lógica de arbitraje tarifario para optimización de ingresos.',
    avantripPeriod: 'Ene 2018 – Oct 2018 · Full Stack Java',
    avantripDesc:
      'Plataforma travel de back-office para múltiples alianzas comerciales. Nueva interfaz de facturación contra SAP Travel One con Spring Cloud Stream.',
  },
  stack: {
    sectionLabel: 'Stack tecnológico',
    badge: 'Arsenal técnico',
    title: 'Tech Stack',
    subtitle: 'Ingeniería de plataforma integral — del diseño de APIs a la infraestructura cloud.',
    roadmap: 'Roadmap completo',
    skillIq: 'Pluralsight Skill IQ',
    groups: {
      'travel-tech': {
        category: 'Travel Tech',
        descs: [
          'Amadeus · Sabre · Travelport',
          'Distribución aérea moderna',
          'Volaris · Turkish · AirEuropa',
          'Integración de agregadores',
          'Estándar de mensajería financiera',
        ],
      },
      backend: {
        category: 'Backend',
        descs: [
          'Lenguaje principal',
          'Akka · Finatra · Finagle',
          'Spring Boot 4 · Spring FW 7',
          'Reactive Streams · RxJava',
          'RPC de alto rendimiento',
          'Diseño de APIs · schema-first',
        ],
      },
      messaging: {
        category: 'Mensajería y eventos',
        descs: [
          'Streaming de eventos · Kafka Streams',
          'Mensajería en tiempo real · caché',
          'Procesamiento async por colas',
          'Comunicación bidireccional en tiempo real',
          'Abstracción de mensajería',
        ],
      },
      cloud: {
        category: 'Cloud e Infra',
        descs: [
          'EKS · Lambda · S3 · ECS · EC2',
          'Orquestación · Helm · EKS',
          'Contenerización · Compose',
          'Workers · Edge Computing · Wrangler',
          'Cloud Foundry · Dataflow',
        ],
      },
      data: {
        category: 'Datos',
        descs: [
          'Documental · Atlas',
          'Relacional · Spring Data',
          'NoSQL AWS · alto throughput',
          'Búsqueda full-text · analítica',
          'Caché · sesiones · pub/sub',
        ],
      },
      observability: {
        category: 'Observabilidad',
        descs: [
          'Salud del cluster · pods · HPA',
          'Diseño con observabilidad integrada',
          'GitHub Actions · deploys automáticos',
          'Gatling · profiling de rendimiento',
        ],
      },
      frontend: {
        category: 'Frontend',
        descs: ['ES6+ · modo estricto', 'SSR · Export estático · App Router', 'Hooks · Context · Performance', 'Angular 6+ · RxJS · NgRx'],
      },
    },
  },
  experience: {
    sectionLabel: 'Línea de tiempo laboral',
    badge: 'Experiencia laboral',
    title: 'Trayectoria profesional',
    subtitle: 'Más de 12 años construyendo software en Travel Tech, FinTech e ingeniería de plataforma.',
    domains: { travel: 'Travel Tech', fintech: 'FinTech', tech: 'Ingeniería' },
    items: {
      'exp-starlings': {
        role: 'Desarrollador de Software',
        period: 'Abr 2025 — Actualidad',
        highlights: [
          'Escalé el agregador de vuelos a más de 12M de búsquedas diarias con optimización de throughput y mejoras de caché',
          'Lideré integraciones GDS y LCC: Amadeus, Sabre, Travelport, Volaris, Turkish Airlines, AirEuropa, TravelFusion',
          'Rediseñé y migré la infraestructura legacy a microservicios contenerizados para alta disponibilidad',
        ],
      },
      'exp-esportunity': {
        role: 'Desarrollador Fundador',
        period: 'Abr 2023 — Abr 2025',
        highlights: [
          'Diseñé más de 10 microservicios orientados a eventos para una startup de Esports de última generación',
          'Construí chat en tiempo real para miles de usuarios concurrentes con WebSocket y Redis PubSub — 99.9% uptime',
          'Mejoré 40% los tiempos de respuesta con optimizaciones GraphQL y estrategias de caché / idempotencia',
          'Lideré el equipo de ingeniería end-to-end; aceleré el lanzamiento 30% con stack de observabilidad',
        ],
      },
      'exp-rappi': {
        role: 'Desarrollador de Software & Tech Lead',
        period: 'Nov 2020 — Abr 2023',
        highlights: [
          'Lideré el equipo Autorizador de RappiPay: procesamiento de tarjetas crédito/débito, antifraude, integraciones ISO8583',
          'Diseñé autorizador multi-país con frames financieros Netty sobre el estándar ISO8583',
          'Lideré el equipo Movements: refactor mayor del core de movimientos de billetera en todo LATAM',
          'Gestioné equipos multifuncionales en México, Colombia y Argentina',
        ],
      },
      'exp-wenance': {
        role: 'Desarrollador de Software',
        period: 'Mar 2020 — Nov 2020',
        highlights: [
          'Diseñé y construí la solución de desembolsos financieros con Project Reactor y mensajería async (AWS SQS)',
          'Mantuve el core bancario (Mambu) y APIs públicas; integré proveedores STP (MX) e Instantor (ES)',
        ],
      },
      'exp-despegar': {
        role: 'Desarrollador de Software',
        period: 'Oct 2018 — Mar 2020',
        highlights: [
          'Desarrollé y mantuve servicios backend Scala para la plataforma de cambios voluntarios post-venta',
          'Resolví integraciones complejas con GDS: Sabre, Travelport, Amadeus para ticketing y cambios',
          'Diseñé lógica de arbitraje tarifario para optimizar pricing y captar ingresos',
        ],
      },
      'exp-avantrip': {
        role: 'Desarrollador Java Full Stack',
        period: 'Ene 2018 — Oct 2018',
        highlights: [
          'Construí el back-office con Spring + AngularJS para múltiples alianzas de viajes',
          'Desarrollé la interfaz de facturación SAP Travel One con mensajería Spring Cloud Stream',
        ],
      },
      'exp-monsanto': {
        role: 'Desarrollador Java Full Stack',
        period: 'May 2017 — Ene 2018',
        highlights: [
          'Migré el monolito legacy a una aplicación cloud de gestión de regalías con arquitectura de eventos',
          'Desarrollé microtareas reactivas con Spring Cloud Dataflow para rediseñar la facturación',
        ],
      },
      'exp-galicia': {
        role: 'Desarrollador Java',
        period: 'Oct 2016 — May 2017',
        highlights: ['Construí módulos para banca multicanal sobre Spring Dynamic Modules / OSGi'],
      },
      'exp-hsbc': {
        role: 'Desarrollador Full Stack Líder',
        period: 'Jun 2015 — Oct 2016',
        highlights: [
          'Diseñé y migré la aplicación de Money Markets para HSBC',
          'Construí la SPA MatriXS Evergreening; diseñé backend de microservicios y scripting dinámico',
        ],
      },
    },
  },
  portfolio: {
    sectionLabel: 'Proyectos del portafolio',
    badge: 'Portafolio',
    titleA: 'Proyectos',
    titleB: 'Destacados',
    subtitle: 'Productos que fundé -o- construí — de reservas de viajes a escala a matchmaking de eSports.',
    venetravelPeriod: 'venetravel.net · Plataforma de reservas de viajes',
    venetravelDescA: 'Plataforma de reservas para destinos venezolanos — ',
    venetravelStrong: 'más de 66 hoteles, vuelos, tours y atracciones',
    venetravelDescB: ' con autocompletado de destinos, cotización de tarifas, checkout con maleta y alta de pasajeros.',
    venetravelTags: ['Autocompletado', 'Hoteles', 'Checkout Maleta', 'Marketplace'],
    venetravelCta: 'Visitar venetravel.net',
    venetravelVideoLabel: 'Recorrido de reserva Venetravel — búsqueda, cotización, maleta y checkout',
    venetravelLive: 'En vivo',
    esportunityPeriod: 'Abr 2023 — Abr 2025 · Desarrollador Fundador',
    esportunityDescA: 'Plataforma de matchmaking de talento gamer: bolsa de oportunidades con ',
    esportunityStrong: 'más de 150 avisos activos',
    esportunityDescB: ', feed comunitario y ',
    esportunityStrong2: 'chat en tiempo real',
    esportunityDescC: ' conectando jugadores con organizaciones de eSports en Latinoamérica.',
    esportunityTags: ['Chat en vivo', 'Matchmaking', 'Feed', 'BETA'],
    esportunityUpwork: 'Ver en Upwork',
    esportunityGithub: 'GitHub — eSportunity',
    esportunityFounder: 'Fundador',
    galleryLabel: 'Capturas del proyecto',
  },
  fintech: {
    sectionLabel: 'Experiencia FinTech',
    badge: 'Base',
    titleA: 'Trayectoria',
    titleB: 'FinTech',
    intro:
      'Antes de enfocarme en Travel Tech, pasé más de 3 años construyendo la infraestructura financiera de la super-app más grande de LATAM. Eso me da una ventaja única: la disciplina y el rigor de los sistemas transaccionales críticos.',
    trackRecord: 'Historial FinTech',
    metrics: [
      { label: 'Años en FinTech', val: '3+' },
      { label: 'Transacciones/día', val: 'M+' },
      { label: 'Países', val: '5+', note: 'MX · CO · AR · ES + más' },
      { label: 'Protocolos', val: 'ISO8583', note: 'Redes de tarjetas' },
    ],
    rappiPeriod: 'Nov 2020 – Abr 2023 · Developer & TL',
    rappiDescA: 'Infraestructura de pagos de uno de los unicornios más valuados de LATAM',
    rappiDescB: '. Lideré dos equipos críticos: ',
    rappiStrong1: 'Autorizador RappiPay',
    rappiMid: ' (procesamiento, antifraude) y ',
    rappiStrong2: 'Movements RappiPay',
    rappiDescC: ' (re-arquitectura del core de billetera).',
    wenancePeriod: 'Mar 2020 – Nov 2020 · Desarrollador de Software',
    wenanceDesc:
      'Diseñé la arquitectura de desembolsos para una plataforma de préstamos digitales. Programación reactiva con Project Reactor; integraciones bancarias STP (MX) e Instantor (ES); core bancario Mambu.',
    highlights: {
      'fintech-iso': {
        title: 'Procesamiento ISO8583',
        description:
          'Autorizador multi-país de crédito y débito en RappiPay con frames financieros Netty sobre ISO8583 — millones de transacciones diarias en LATAM.',
      },
      'fintech-antifraud': {
        title: 'Sistemas antifraude',
        description:
          'Mantuve y extendí la infraestructura antifraude del Autorizador RappiPay — webhooks en tiempo real y flujos clásicos Base1/Base2.',
      },
      'fintech-wallet': {
        title: 'Core de billetera',
        description:
          'Lideré la re-arquitectura del core de movimientos de la super-app en México, Colombia y Argentina — iniciativa de un año.',
      },
      'fintech-disbursements': {
        title: 'Desembolsos financieros',
        description:
          'Solución de cashout con Project Reactor y mensajería async propia (AWS SQS). Integré STP (México) e Instantor (España) para desembolsos.',
      },
    },
  },
  contact: {
    sectionLabel: 'Información de contacto',
    badge: 'Hablemos',
    titleA: 'Construyamos algo',
    titleB: 'Juntos',
    subtitle: 'Abierto a oportunidades Travel Tech o de ingeniería de plataforma. Remoto — Argentina y Venezuela.',
    remote: 'Remoto',
    location: 'Argentina 🇦🇷 · Venezuela 🇻🇪',
    available: 'Disponible',
    availability: 'Abierto a nuevas oportunidades',
    scheduleCall: 'Agendar llamada',
  },
  footer: {
    tagline: 'Ingeniero Travel Tech',
    navLabel: 'Navegación del pie',
    schedule: 'Agendar',
  },
  schedule: {
    metaTitle: 'Agendar una reunión — Andrés Cabrera',
    metaDescription:
      'Reserva un momento para conversar con Andrés Cabrera, Ingeniero Travel Tech. Agenda una llamada de descubrimiento o charla técnica.',
    badge: 'Hablemos',
    titleA: 'Agenda una',
    titleB: 'Reunión',
    intro:
      'Elegí el horario que te convenga. Ya sea una charla técnica profunda, una llamada de descubrimiento o una simple presentación — estoy feliz de conectar.',
    cards: [
      { label: 'Remoto', sub: 'Argentina · Venezuela' },
      { label: 'ART / VET', sub: 'UTC-3 / UTC-4' },
      { label: 'Foco Travel Tech', sub: 'GDS · NDC · Agregación' },
    ],
    calendarTitle: 'Agendar cita con Andrés Cabrera',
    calendarLabel: 'Calendario de citas',
    loadingCalendar: 'Cargando calendario…',
    altContact: '¿Prefieres escribirme directo?',
  },
};
