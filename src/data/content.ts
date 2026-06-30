/* ============================================================
   CONTENU BILINGUE — source unique de vérité (FR / EN)
   Chaque feuille { fr, en } est aplatie dans MAP pour le
   rendu serveur (FR) et la bascule client (EN).
   ============================================================ */

export interface Bi { fr: string; en: string; }

const B = (fr: string, en: string): Bi => ({ fr, en });

/* ---- Méta / identité ------------------------------------- */
export const site = {
  name: 'Oussama Nasry',
  initials: 'ON',
  email: 'nasryoussama.pro@gmail.com',
  cv: 'cv-oussama_nasry.pdf',
  perso: 'https://oussama-nasry-pf.github.io/',
  repo: 'https://github.com/oussama-nasry-pf/portfolio-competences',
};

/* ---- Couleurs officielles du référentiel ----------------- */
export const COLORS = {
  traiter:   { base: '#c0392b', soft: 'rgba(192,57,43,0.10)', line: 'rgba(192,57,43,0.30)' },
  analyser:  { base: '#e07b39', soft: 'rgba(224,123,57,0.12)', line: 'rgba(224,123,57,0.32)' },
  valoriser: { base: '#d4a017', soft: 'rgba(212,160,23,0.14)', line: 'rgba(212,160,23,0.34)' },
  developper:{ base: '#6aa84f', soft: 'rgba(106,168,79,0.13)', line: 'rgba(106,168,79,0.32)' },
};

/* ---- Contenu structuré ----------------------------------- */
export const content = {
  meta: {
    docTitle: B(
      'Portfolio de compétences — Oussama Nasry',
      'Skills Portfolio — Oussama Nasry'
    ),
    docDesc: B(
      'Portfolio d’évaluation BUT 3 Science des données : démonstration des 4 compétences (Traiter, Analyser, Valoriser, Développer) par des traces et des preuves.',
      'BUT 3 Data Science evaluation portfolio: demonstrating the 4 competencies (Process, Analyse, Add value, Develop) through traces and proofs.'
    ),
  },

  nav: {
    brand: B('Portfolio de compétences', 'Skills Portfolio'),
    method: B('Démarche', 'Method'),
    competences: B('Compétences', 'Competencies'),
    synthesis: B('Synthèse', 'Summary'),
    cv: B('CV', 'Resume'),
  },

  /* ---- Libellés d'interface (bilingues) ----------------- */
  ui: {
    competence: B('Compétence', 'Competency'),
    situations: B('Situations professionnelles', 'Professional situations'),
    levelsTitle: B('Niveaux de maîtrise', 'Mastery levels'),
    ceTitle: B('Composantes essentielles', 'Essential components'),
    tracesTitle: B('Traces &amp; preuves', 'Traces &amp; proofs'),
    tracesSub: B('Des réalisations concrètes, commentées au regard du référentiel.', 'Concrete artefacts, commented against the framework.'),
    preuveLabel: B('De la trace à la preuve', 'From trace to proof'),
    forces: B('Points forts', 'Strengths'),
    axes: B('Axes de progrès', 'Areas for growth'),
    acTitle: B('Apprentissages critiques', 'Critical learnings'),
    acSub: B('Ce que ce niveau engage à maîtriser', 'What this level requires mastering'),
    stateDone: B('Acquis', 'Acquired'),
    stateProgress: B('En progression', 'In progress'),
    stateFuture: B('À venir', 'Upcoming'),
    seeDetail: B('Voir le détail', 'See details'),
    overviewTitle: B('Quatre compétences, quatre preuves', 'Four competencies, four proofs'),
    overviewSub: B('Une partie par compétence : auto-positionnement, composantes essentielles, traces commentées et regard critique.', 'One part per competency: self-assessment, essential components, commented traces and critical reflection.'),
  },

  hero: {
    kicker: B('Portfolio d’évaluation · BUT 3 Science des données', 'Evaluation portfolio · BUT 3 Data Science'),
    title: B('Portfolio de<br><span class="accent-word">compétences</span>', 'Skills<br><span class="accent-word">Portfolio</span>'),
    lead: B(
      'Étudiant en 3<sup>e</sup> année de BUT Science des données — parcours <strong>Visualisation &amp; Conception d’Outils Décisionnels</strong> à l’IUT Lumière Lyon&nbsp;2, en alternance <strong>Data Analyst chez Solustil</strong>.',
      'Third-year BUT Data Science student — <strong>Visualisation &amp; Design of Decision-support Tools</strong> track at IUT Lumière Lyon&nbsp;2, work-study <strong>Data Analyst at Solustil</strong>.'
    ),
    lead2: B(
      'Ce document démontre, <strong>compétence par compétence</strong>, mon niveau de maîtrise : je m’auto-positionne sur le référentiel du diplôme, puis je transforme des <strong>traces</strong> issues de mes expériences en <strong>preuves</strong> commentées.',
      'This document demonstrates, <strong>competency by competency</strong>, my level of mastery: I self-assess against the diploma framework, then turn <strong>traces</strong> from my experience into commented <strong>proofs</strong>.'
    ),
    cta1: B('Découvrir la démarche', 'See the method'),
    cta2: B('Aller aux compétences', 'Jump to competencies'),
    scrollHint: B('Les 4 compétences', 'The 4 competencies'),
  },

  /* ---- Démarche (slides 4–5 du cours) -------------------- */
  method: {
    kicker: B('La démarche', 'The method'),
    title: B('D’une trace à une preuve', 'From trace to proof'),
    lead: B(
      'Un portfolio d’évaluation est un dossier dans lequel je rassemble des éléments et les <strong>analyse</strong> pour qu’ils servent de <strong>preuves</strong> de l’acquisition d’une compétence. Centré sur le référentiel métier du diplôme, il demande de <strong>m’auto-positionner</strong> — et surtout de <strong>justifier</strong> : une réponse positive ne suffit pas, c’est l’analyse qui compte. Une bonne lecture d’un point faible vaut autant que celle d’un point fort.',
      'An evaluation portfolio is a file in which I gather elements and <strong>analyse</strong> them so they serve as <strong>proofs</strong> that a competency is acquired. Centred on the diploma’s professional framework, it requires me to <strong>self-position</strong> — and above all to <strong>justify</strong>: a positive answer is not enough, the analysis is what matters. A good reading of a weak point is worth as much as that of a strong one.'
    ),
    steps: [
      { n: '01', title: B('Déclaratif', 'Declarative'), text: B('« Je sais faire » — affirmé sans preuve. Le point de départ, insuffisant à lui seul.', '“I can do it” — stated without proof. The starting point, not enough on its own.') },
      { n: '02', title: B('Traces', 'Traces'), text: B('J’accumule des réalisations concrètes : dashboards, scripts, cartes, code livré.', 'I gather concrete artefacts: dashboards, scripts, maps, shipped code.') },
      { n: '03', title: B('Preuves commentées', 'Commented proofs'), text: B('Je rédige et commente ces traces au regard du référentiel : la trace devient preuve.', 'I write up and comment these traces against the framework: the trace becomes a proof.') },
      { n: '04', title: B('Regard critique', 'Critical reflection'), text: B('J’analyse forces et limites, et la transférabilité à d’autres situations.', 'I analyse strengths and limits, and transferability to other situations.') },
    ],
    refTitle: B('Le référentiel : 4 compétences', 'The framework: 4 competencies'),
    refText: B(
      'Le BUT Science des données structure le métier en quatre compétences. Chacune se décline en <strong>composantes essentielles</strong> (CE) et en <strong>niveaux de maîtrise</strong>. Ce portfolio consacre une partie à chacune.',
      'The BUT Data Science structures the profession into four competencies. Each breaks down into <strong>essential components</strong> (CE) and <strong>mastery levels</strong>. This portfolio devotes one part to each.'
    ),
  },

  competencesIntro: {
    label: B('Les compétences', 'The competencies'),
  },

  /* ---- Les 4 compétences -------------------------------- */
  competences: [
    /* ===== 1 — TRAITER ===== */
    {
      num: '01',
      key: 'traiter',
      color: 'traiter',
      short: B('Traiter', 'Process'),
      full: B('Traiter des données à des fins décisionnelles', 'Process data for decision-making'),
      tagline: B('Du cycle de vie de la donnée au modèle adapté.', 'From the data lifecycle to the right model.'),
      definition: B(
        'Intervenir à toutes les étapes du cycle de vie de la donnée — l’insérer, la modifier, l’extraire, la nettoyer et la structurer dans le modèle le plus adapté au besoin décisionnel.',
        'Act at every stage of the data lifecycle — insert, modify, extract, clean and structure it in the model best suited to the decision need.'
      ),
      situations: [
        B('Développement d’un système d’information décisionnel', 'Building a decision-support information system'),
        B('Préparation des données à des fins d’analyse statistique', 'Preparing data for statistical analysis'),
      ],
      niveau: {
        claim: B('Niveau 2 consolidé · Niveau 3 en progression', 'Level 2 consolidated · Level 3 in progress'),
        levels: [
          { n: 1, state: 'done',     label: B('Traiter des données structurées', 'Process structured data') },
          { n: 2, state: 'done',     label: B('Automatiser le traitement de données multidimensionnelles', 'Automate multidimensional data processing') },
          { n: 3, state: 'progress', label: B('Intégrer le traitement de données complexes', 'Integrate complex data processing') },
        ],
      },
      ce: [
        { code: 'CE1.01', text: B('En intervenant à toutes les étapes du cycle de vie de la donnée (insertion, modification, extraction, suppression)', 'Acting at every stage of the data lifecycle (insert, modify, extract, delete)') },
        { code: 'CE1.02', text: B('En utilisant le modèle de données adapté aux besoins', 'Using the data model suited to the needs') },
        { code: 'CE1.03', text: B('En s’inscrivant dans une démarche de documentation des réalisations adaptée au public visé', 'Following a documentation approach suited to the target audience') },
        { code: 'CE1.04', text: B('En traduisant correctement les demandes métier en programmes, dans le respect du cahier des charges', 'Correctly translating business requests into programs, respecting the specifications') },
        { code: 'CE1.05', text: B('En écrivant un programme correctement structuré et documenté, respectant les bonnes pratiques', 'Writing a properly structured and documented program, following best practices') },
        { code: 'CE1.06', text: B('En identifiant les librairies et langages dédiés', 'Identifying dedicated libraries and languages') },
      ],
      traces: [
        {
          img: 'graph.png', kind: 'img',
          badge: B('Académique', 'Academic'),
          title: B('Migration relationnel → graphe (Neo4j)', 'Relational → graph migration (Neo4j)'),
          desc: B('Base de la délinquance 2012–2022 migrée d’un SGBD relationnel vers Neo4j : modélisation en graphe, scripts Python de migration, requêtes Cypher.', 'Crime database 2012–2022 migrated from a relational DBMS to Neo4j: graph modelling, Python migration scripts, Cypher queries.'),
          tags: ['Python', 'Neo4j', 'Cypher', 'NoSQL'],
        },
        {
          img: 'projects/dashboard-machine.png', kind: 'img',
          badge: B('Pro · Solustil', 'Pro · Solustil'),
          title: B('Extraction &amp; structuration SQL', 'SQL extraction &amp; structuring'),
          desc: B('Extraction des données de production par requêtes SQL, nettoyage et structuration pour alimenter les tableaux de bord — toutes les étapes du cycle de vie.', 'Production data extracted via SQL queries, cleaned and structured to feed dashboards — every lifecycle stage.'),
          tags: ['SQL', 'ETL', 'Data cleaning'],
        },
        {
          img: 'projects/shema-2.png', kind: 'img',
          badge: B('Stage · SHEMA', 'Internship · SHEMA'),
          title: B('Import multi-sources automatisé (VBA)', 'Automated multi-source import (VBA)'),
          desc: B('Construction d’une base alimentant un Business Plan : import de fichiers sources hétérogènes et automatisation des calculs en VBA.', 'Building a database feeding a Business Plan: import of heterogeneous source files and VBA calculation automation.'),
          tags: ['VBA', 'Excel', 'Automatisation'],
        },
      ],
      preuve: B(
        'Mon alternance chez Solustil me place à <strong>toutes les étapes du cycle de vie de la donnée</strong> (CE1.01) : j’extrais les données de production en SQL, je les nettoie, les structure, puis je les réinjecte dans des tableaux de bord. La <strong>migration vers Neo4j</strong> est ma preuve la plus aboutie du <strong>choix d’un modèle de données adapté</strong> (CE1.02) — passer d’un schéma relationnel à un graphe pour analyser des relations, avec des scripts Python structurés (CE1.05) et un langage dédié, Cypher (CE1.06). Chez SHEMA, l’automatisation VBA m’a confronté à l’<strong>intégration de sources hétérogènes</strong> (AC21.03) et à la traduction d’une demande métier en programme (CE1.04).',
        'My work-study at Solustil places me at <strong>every stage of the data lifecycle</strong> (CE1.01): I extract production data in SQL, clean it, structure it, then feed it back into dashboards. The <strong>Neo4j migration</strong> is my most complete proof of <strong>choosing a suitable data model</strong> (CE1.02) — moving from a relational schema to a graph to analyse relationships, with structured Python scripts (CE1.05) and a dedicated language, Cypher (CE1.06). At SHEMA, the VBA automation confronted me with <strong>integrating heterogeneous sources</strong> (AC21.03) and translating a business request into a program (CE1.04).'
      ),
      forces: [
        B('Aisance sur la chaîne ETL : SQL, Python, VBA et plusieurs SGBD (relationnel, graphe).', 'Comfortable across the ETL chain: SQL, Python, VBA and several DBMS (relational, graph).'),
        B('Capacité à choisir le bon modèle de données selon le besoin (relationnel vs graphe).', 'Able to choose the right data model for the need (relational vs graph).'),
      ],
      axes: [
        B('Industrialiser mes tests : ma démarche de validation reste artisanale (AC21.04).', 'Industrialise my testing: my validation approach is still hand-made (AC21.04).'),
        B('Monter au Niveau 3 : traitement de flux temps réel et de gros volumes (Big Data).', 'Reach Level 3: real-time stream and large-volume (Big Data) processing.'),
      ],
      ac: [
        { code: 'AC21.01', text: B('Comprendre l’organisation des données de l’entreprise', 'Understand the organisation of company data') },
        { code: 'AC21.03', text: B('Identifier et résoudre les problèmes d’intégration de sources hétérogènes', 'Identify and solve integration problems of heterogeneous sources') },
        { code: 'AC21.05', text: B('Apprécier l’intérêt de briques logicielles existantes et savoir les utiliser', 'Appreciate and use existing software components') },
        { code: 'AC31.02', text: B('Comprendre les spécificités des données complexes et de leur exploitation', 'Understand the specifics of complex data and its exploitation') },
      ],
    },

    /* ===== 2 — ANALYSER ===== */
    {
      num: '02',
      key: 'analyser',
      color: 'analyser',
      short: B('Analyser', 'Analyse'),
      full: B('Analyser statistiquement les données', 'Statistically analyse data'),
      tagline: B('Faire parler la donnée dans son contexte.', 'Make data speak in its context.'),
      definition: B(
        'Mettre en évidence les grandes tendances et les informations principales d’un jeu de données, avec des techniques adaptées au contexte de l’étude et aux attentes décisionnelles.',
        'Bring out the main trends and key information of a dataset, with techniques suited to the study context and decision-making expectations.'
      ),
      situations: [
        B('Programmation d’un outil d’aide à la décision', 'Programming a decision-support tool'),
        B('Projet d’étude statistique', 'Statistical study project'),
      ],
      niveau: {
        claim: B('Niveau 1 solide · Niveau 2 en progression', 'Level 1 solid · Level 2 in progress'),
        levels: [
          { n: 1, state: 'done',     label: B('Mettre en œuvre une analyse descriptive', 'Carry out a descriptive analysis') },
          { n: 2, state: 'progress', label: B('Mettre en œuvre une analyse exploratoire', 'Carry out an exploratory analysis') },
          { n: 3, state: 'future',   label: B('Analyse exploratoire de données complexes', 'Exploratory analysis of complex data') },
        ],
      },
      ce: [
        { code: 'CE2.01', text: B('En tenant compte du contexte de l’étude (économique, socio-démographique, commercial, clinique…)', 'Taking the study context into account (economic, socio-demographic, commercial, clinical…)') },
        { code: 'CE2.02', text: B('En mettant en évidence les grandes tendances et les informations principales', 'Bringing out the main trends and key information') },
        { code: 'CE2.03', text: B('En mettant en œuvre les techniques adaptées aux attentes du client ou de l’instance décisionnaire', 'Applying techniques suited to the client’s or decision body’s expectations') },
        { code: 'CE2.04', text: B('En mettant en œuvre les techniques adaptées aux données complexes (massives, mal structurées, flux…)', 'Applying techniques suited to complex data (massive, ill-structured, streams…)') },
        { code: 'CE2.05', text: B('En tenant compte du contexte inférentiel (variabilité de l’échantillon)', 'Taking the inferential context into account (sample variability)') },
      ],
      traces: [
        {
          img: 'projects/anlci-presence-cri-final.jpeg', kind: 'img',
          badge: B('Stage · ANLCI', 'Internship · ANLCI'),
          title: B('Analyse spatiale &amp; cartographie (QGIS)', 'Spatial analysis &amp; mapping (QGIS)'),
          desc: B('Apurement de données territoriales puis cartographie sous QGIS pour suivre les indicateurs des Centres Ressources Illettrisme — une méthode adaptée à un domaine spécifique.', 'Cleansing of territorial data then QGIS mapping to track Illiteracy Resource Centres indicators — a method tailored to a specific field.'),
          tags: ['QGIS', 'Statistique spatiale', 'Data cleaning'],
        },
        {
          img: 'dashboard-fullscreen.png', kind: 'img',
          badge: B('Pro · Solustil', 'Pro · Solustil'),
          title: B('Analyse exploratoire de production', 'Exploratory production analysis'),
          desc: B('Analyse exploratoire des données de production pour faire émerger les tendances et détecter les anomalies, dans le contexte industriel de l’entreprise.', 'Exploratory analysis of production data to surface trends and detect anomalies, within the company’s industrial context.'),
          tags: ['KPI', 'Détection d’anomalies', 'Reporting'],
        },
      ],
      preuve: B(
        'Au quotidien chez Solustil, je mène des <strong>analyses exploratoires</strong> sur les données de production pour faire émerger les tendances et <strong>détecter les anomalies</strong> (CE2.02), toujours au regard du <strong>contexte industriel</strong> de l’étude (CE2.01). Mon stage à l’ANLCI est ma preuve d’une <strong>méthode adaptée à un domaine spécifique</strong> — la statistique spatiale (AC32.02) : après apurement, j’ai produit une analyse cartographiée sous QGIS pour suivre des indicateurs territoriaux. C’est la compétence que j’assume comme <strong>la plus en construction</strong>, et c’est précisément ce qui la rend intéressante à analyser.',
        'Day-to-day at Solustil, I run <strong>exploratory analyses</strong> on production data to surface trends and <strong>detect anomalies</strong> (CE2.02), always with regard to the <strong>industrial context</strong> of the study (CE2.01). My ANLCI internship is my proof of a <strong>method tailored to a specific field</strong> — spatial statistics (AC32.02): after cleansing, I produced a QGIS-mapped analysis to track territorial indicators. This is the competency I openly consider <strong>most in development</strong>, which is exactly what makes it worth analysing.'
      ),
      forces: [
        B('Solide en analyse descriptive et exploratoire ancrée dans un contexte métier réel.', 'Strong in descriptive and exploratory analysis grounded in a real business context.'),
        B('Méthode adaptée à un domaine spécifique (statistique spatiale) menée de bout en bout.', 'A field-specific method (spatial statistics) carried out end-to-end.'),
      ],
      axes: [
        B('Renforcer le cadre inférentiel (CE2.05) et la modélisation statistique formelle.', 'Strengthen the inferential framework (CE2.05) and formal statistical modelling.'),
        B('Acquérir les mécanismes de l’apprentissage statistique / IA (AC32.04) — objectif de Mastère.', 'Learn the mechanics of statistical learning / AI (AC32.04) — a Master’s goal.'),
      ],
      ac: [
        { code: 'AC22.03', text: B('Comprendre l’intérêt des analyses multivariées pour résumer l’information', 'Understand the value of multivariate analysis to summarise information') },
        { code: 'AC22.05', text: B('Apprécier les limites de validité et les conditions d’application d’une analyse', 'Appreciate the validity limits and conditions of application of an analysis') },
        { code: 'AC32.02', text: B('Mettre en œuvre des méthodes adaptées à un domaine spécifique (statistique spatiale)', 'Apply methods suited to a specific field (spatial statistics)') },
        { code: 'AC32.04', text: B('Comprendre les mécanismes de base de l’intelligence artificielle', 'Understand the basic mechanisms of artificial intelligence') },
      ],
    },

    /* ===== 3 — VALORISER ===== */
    {
      num: '03',
      key: 'valoriser',
      color: 'valoriser',
      short: B('Valoriser', 'Add value'),
      full: B('Valoriser une production dans un contexte professionnel', 'Add value to a production in a professional context'),
      tagline: B('La bonne information, au bon public, sous la bonne forme.', 'The right information, to the right audience, in the right form.'),
      definition: B(
        'Restituer et défendre une production data en l’adaptant au destinataire, à la forme attendue et aux réalités économiques de l’entreprise — à l’écrit comme à l’oral, en français comme en anglais.',
        'Deliver and defend a data production by adapting it to the recipient, the expected form and the company’s economic realities — written and spoken, in French and English.'
      ),
      situations: [
        B('Développement d’outils décisionnels', 'Development of decision-support tools'),
        B('Étude statistique', 'Statistical study'),
      ],
      niveau: {
        claim: B('Niveau 2 consolidé · Niveau 3 en progression', 'Level 2 consolidated · Level 3 in progress'),
        levels: [
          { n: 1, state: 'done',     label: B('Contextualiser et présenter les données', 'Contextualise and present data') },
          { n: 2, state: 'done',     label: B('Restituer et argumenter ses résultats', 'Deliver and argue one’s results') },
          { n: 3, state: 'progress', label: B('Intégrer et valoriser sa production dans l’écosystème de l’entreprise', 'Integrate and valorise one’s production in the company ecosystem') },
        ],
      },
      ce: [
        { code: 'CE3.01', text: B('En s’adaptant au niveau d’expertise, à la culture et au statut du destinataire', 'Adapting to the recipient’s expertise level, culture and status') },
        { code: 'CE3.02', text: B('En s’exprimant correctement, aussi bien en français qu’en anglais, à l’oral comme à l’écrit', 'Expressing oneself correctly, in French and English, spoken and written') },
        { code: 'CE3.03', text: B('En veillant aux aspects éthiques, déontologiques et réglementaires de diffusion des données', 'Attending to the ethical, deontological and regulatory aspects of data sharing') },
        { code: 'CE3.04', text: B('En interprétant et contextualisant les résultats (vérification des sources, esprit critique)', 'Interpreting and contextualising results (source checking, critical thinking)') },
        { code: 'CE3.05', text: B('En utilisant la forme de restitution adaptée', 'Using the appropriate form of delivery') },
        { code: 'CE3.06', text: B('En tenant compte des réalités économiques et managériales des entreprises', 'Taking into account the economic and managerial realities of companies') },
      ],
      traces: [
        {
          img: 'projects/dashboard-machine.png', kind: 'img',
          badge: B('Pro · Solustil', 'Pro · Solustil'),
          title: B('Deux dashboards, deux publics', 'Two dashboards, two audiences'),
          desc: B('Une vue synthétique d’indicateurs pour la Direction, une vue opérationnelle temps réel pour l’Atelier : même donnée, deux formes de restitution adaptées.', 'A synthetic KPI view for Management, a real-time operational view for the Workshop: same data, two tailored delivery forms.'),
          tags: ['Grafana', 'KPI', 'Communication'],
        },
        {
          img: '', kind: 'web',
          badge: B('Méta-trace', 'Meta-trace'),
          title: B('Ce portfolio, bilingue &amp; en ligne', 'This portfolio, bilingual &amp; online'),
          desc: B('Le document que vous lisez est lui-même une preuve : restitution web bilingue français/anglais, publiée en ligne et adaptée à sa forme.', 'The document you are reading is itself a proof: a bilingual French/English web delivery, published online and fit to its form.'),
          tags: ['FR / EN', 'Web', 'Restitution'],
        },
        {
          img: 'projects/shema-2.png', kind: 'img',
          badge: B('Stage · SHEMA', 'Internship · SHEMA'),
          title: B('Business Plan &amp; réalités économiques', 'Business Plan &amp; economic realities'),
          desc: B('Travailler sur un Business Plan m’a ancré dans les réalités économiques et managériales de l’entreprise (CE3.06).', 'Working on a Business Plan anchored me in the economic and managerial realities of the company (CE3.06).'),
          tags: ['Business Plan', 'Gain de temps', 'Métier'],
        },
      ],
      preuve: B(
        'La valorisation est le <strong>fil rouge de mon alternance</strong>. Mes tableaux de bord Grafana s’adressent à <strong>deux publics distincts</strong> (CE3.01) : une vue synthétique pour la <strong>Direction</strong>, une vue opérationnelle temps réel pour l’<strong>Atelier</strong> — même donnée, deux <strong>formes de restitution adaptées</strong> (CE3.05). Je choisis des indicateurs pertinents (AC23.03) et je dois régulièrement <strong>défendre mes choix</strong> (AC23.02). Ce <strong>portfolio bilingue</strong> (CE3.02), publié en ligne, est lui-même une trace de restitution adaptée à sa forme. Le Business Plan SHEMA m’a ancré dans les <strong>réalités économiques</strong> de l’entreprise (CE3.06).',
        'Adding value is the <strong>common thread of my work-study</strong>. My Grafana dashboards target <strong>two distinct audiences</strong> (CE3.01): a synthetic view for <strong>Management</strong>, a real-time operational view for the <strong>Workshop</strong> — same data, two <strong>tailored delivery forms</strong> (CE3.05). I select relevant indicators (AC23.03) and regularly have to <strong>defend my choices</strong> (AC23.02). This <strong>bilingual portfolio</strong> (CE3.02), published online, is itself a trace of delivery fitted to its form. The SHEMA Business Plan anchored me in the company’s <strong>economic realities</strong> (CE3.06).'
      ),
      forces: [
        B('Communication terrain : adapter la même donnée à la Direction et à l’Atelier.', 'Field communication: adapting the same data for Management and the Workshop.'),
        B('Restitution soignée et bilingue (ce document, dashboards, soutenances).', 'Polished, bilingual delivery (this document, dashboards, oral defences).'),
      ],
      axes: [
        B('Consolider l’anglais professionnel (B2) pour un usage courant en réunion.', 'Consolidate professional English (B2) for fluent use in meetings.'),
        B('Structurer la conformité réglementaire (RGPD, anonymisation — CE3.03 / AC33.01).', 'Structure regulatory compliance (GDPR, anonymisation — CE3.03 / AC33.01).'),
      ],
      ac: [
        { code: 'AC23.02', text: B('Savoir défendre ses choix d’analyses', 'Be able to defend one’s analytical choices') },
        { code: 'AC23.03', text: B('Choisir des indicateurs pertinents pour communiquer sur les résultats', 'Choose relevant indicators to communicate results') },
        { code: 'AC23.04', text: B('Prendre conscience de la rigueur requise dans ses productions', 'Be aware of the rigour required in one’s productions') },
        { code: 'AC33.01', text: B('Transformer la donnée pour la mettre en conformité (anonymisation, normalisation)', 'Transform data to ensure compliance (anonymisation, normalisation)') },
      ],
    },

    /* ===== 4 — DÉVELOPPER (VCOD) ===== */
    {
      num: '04',
      key: 'developper',
      color: 'developper',
      short: B('Développer', 'Develop'),
      full: B('Développer un outil décisionnel', 'Develop a decision-support tool'),
      tagline: B('De l’analyse du besoin au déploiement de l’outil.', 'From needs analysis to tool deployment.'),
      definition: B(
        'Concevoir, réaliser et déployer un composant d’une solution décisionnelle — structuration des données, visualisation métier et méthodes de développement logiciel à l’appui. (Compétence du parcours VCOD.)',
        'Design, build and deploy a component of a decision-support solution — backed by data structuring, business-oriented visualisation and software development methods. (VCOD track competency.)'
      ),
      situations: [
        B('Déploiement d’une solution décisionnelle', 'Deployment of a decision-support solution'),
        B('Automatisation de reporting et de visualisation', 'Automation of reporting and visualisation'),
      ],
      niveau: {
        claim: B('Niveau 1 consolidé · Niveau 2 en progression', 'Level 1 consolidated · Level 2 in progress'),
        levels: [
          { n: 1, state: 'done',     label: B('Développer un composant d’une solution décisionnelle', 'Develop a component of a decision-support solution') },
          { n: 2, state: 'progress', label: B('Participer au déploiement d’une solution décisionnelle', 'Take part in deploying a decision-support solution') },
        ],
      },
      ce: [
        { code: 'CE4.01', text: B('En mettant en œuvre une structuration des données adaptée à leurs caractéristiques (type, volume…)', 'Implementing a data structuring suited to their characteristics (type, volume…)') },
        { code: 'CE4.02', text: B('En assurant la qualité des données et en minimisant les biais liés à l’incertitude des sources', 'Ensuring data quality and minimising bias linked to source uncertainty') },
        { code: 'CE4.03', text: B('En étant sensible aux aspects éthiques, déontologiques et juridiques de diffusion des données', 'Being mindful of the ethical, deontological and legal aspects of data sharing') },
        { code: 'CE4.04', text: B('En réalisant des solutions de visualisation spécifiques aux données métier', 'Building visualisation solutions specific to business data') },
        { code: 'CE4.05', text: B('En intervenant à différents niveaux de la chaîne décisionnelle', 'Intervening at different levels of the decision chain') },
        { code: 'CE4.06', text: B('En utilisant des méthodes de développement logiciel', 'Using software development methods') },
      ],
      traces: [
        {
          img: 'dashboard-fullscreen.png', kind: 'img',
          badge: B('Pro · Solustil', 'Pro · Solustil'),
          title: B('Tableau de bord décisionnel (Grafana)', 'Decision-support dashboard (Grafana)'),
          desc: B('Composant décisionnel complet : de l’analyse du besoin à la requête SQL, jusqu’au plugin de visualisation HTML/JSON temps réel — une visualisation spécifique aux données métier.', 'A complete decision component: from needs analysis to SQL query, up to the real-time HTML/JSON visualisation plugin — a visualisation specific to business data.'),
          tags: ['Grafana', 'SQL', 'HTML / JSON', 'Temps réel'],
        },
        {
          img: '', kind: 'code',
          badge: B('Méta-trace', 'Meta-trace'),
          title: B('Ce site : Git, CI/CD &amp; déploiement', 'This site: Git, CI/CD &amp; deployment'),
          desc: B('Projet Astro versionné sous Git et déployé en continu sur GitHub Pages : preuve vivante d’un cycle de vie de projet informatique et de l’usage d’un gestionnaire de versions.', 'An Astro project versioned with Git and continuously deployed to GitHub Pages: a living proof of a software project lifecycle and of version-control usage.'),
          tags: ['Astro', 'Git', 'GitHub Actions', 'CI/CD'],
        },
        {
          img: 'projects/shema-2.png', kind: 'img',
          badge: B('Stage · SHEMA', 'Internship · SHEMA'),
          title: B('Automatisation &amp; interopérabilité', 'Automation &amp; interoperability'),
          desc: B('L’automatisation du Business Plan en VBA illustre les enjeux d’automatisation et d’interopérabilité d’un ensemble de tâches (AC24.02VCOD).', 'The VBA Business Plan automation illustrates the stakes of automating and interconnecting a set of tasks (AC24.02VCOD).'),
          tags: ['VBA', 'Automatisation', 'Interopérabilité'],
        },
      ],
      preuve: B(
        'Chez Solustil, j’ai développé un <strong>composant complet d’une solution décisionnelle</strong> (Niveau 1) : un tableau de bord Grafana temps réel, de la <strong>requête SQL</strong> au <strong>plugin de visualisation HTML/JSON</strong>, en passant par l’analyse du besoin et de l’existant (AC24.01VCOD). J’interviens à <strong>plusieurs niveaux de la chaîne décisionnelle</strong> (CE4.05) avec des visualisations spécifiques aux données métier (CE4.04). Enfin, <strong>ce portfolio est une preuve vivante de méthode de développement logiciel</strong> (CE4.06) : projet Astro <strong>versionné sous Git</strong> et <strong>déployé en continu (CI/CD)</strong> sur GitHub Pages — preuve de l’usage d’un gestionnaire de versions (AC34.04VCOD) et d’un cycle de vie de projet informatique (AC24.04VCOD).',
        'At Solustil, I developed a <strong>complete component of a decision-support solution</strong> (Level 1): a real-time Grafana dashboard, from the <strong>SQL query</strong> to the <strong>HTML/JSON visualisation plugin</strong>, via needs-and-existing analysis (AC24.01VCOD). I intervene at <strong>several levels of the decision chain</strong> (CE4.05) with visualisations specific to business data (CE4.04). Finally, <strong>this portfolio is a living proof of software development method</strong> (CE4.06): an Astro project <strong>versioned with Git</strong> and <strong>continuously deployed (CI/CD)</strong> to GitHub Pages — proof of version-control usage (AC34.04VCOD) and of a software project lifecycle (AC24.04VCOD).'
      ),
      forces: [
        B('Développement d’un composant décisionnel de bout en bout (Grafana) et mise en ligne.', 'End-to-end development of a decision component (Grafana) and going live.'),
        B('Pratique réelle du versioning Git et du déploiement continu (ce site).', 'Real practice of Git versioning and continuous deployment (this site).'),
      ],
      axes: [
        B('Tests automatisés et architecture logicielle plus rigoureuse (AC34.03VCOD).', 'Automated testing and more rigorous software architecture (AC34.03VCOD).'),
        B('Exploiter flux de données et Big Data avec des moyens dédiés (AC34.01VCOD) — cap Mastère.', 'Handle data streams and Big Data with dedicated means (AC34.01VCOD) — Master’s direction.'),
      ],
      ac: [
        { code: 'AC24.01', text: B('Comprendre le rôle de l’analyse des besoins et de l’existant dans un projet décisionnel', 'Understand the role of needs-and-existing analysis in a decision project') },
        { code: 'AC24.02', text: B('Percevoir les enjeux de l’automatisation et de l’interopérabilité', 'Grasp the stakes of automation and interoperability') },
        { code: 'AC34.03', text: B('Appliquer les méthodes de développement dans un projet informatique', 'Apply development methods in a software project') },
        { code: 'AC34.04', text: B('Apprécier l’intérêt d’un gestionnaire de versions de code', 'Appreciate the value of a code version-control system') },
      ],
    },
  ],

  /* ---- Synthèse ----------------------------------------- */
  synthesis: {
    kicker: B('Synthèse', 'Summary'),
    title: B('Mon auto-positionnement', 'My self-assessment'),
    lead: B(
      'Une lecture d’ensemble de mes quatre compétences, telles que je les situe aujourd’hui sur le référentiel — points forts assumés et axes de progrès identifiés.',
      'An overview of my four competencies as I position them today against the framework — owned strengths and identified areas for growth.'
    ),
    closingTitle: B('Une trajectoire', 'A trajectory'),
    closing: B(
      'De l’analyse et la visualisation vers l’ingénierie de la donnée : ce portfolio clôt mon BUT Science des données et ouvre sur un <strong>Mastère Data Engineer</strong> (Ynov, 2026–2028), où je consoliderai mes axes de progrès — pipelines, tests, modélisation statistique et Big Data.',
      'From analysis and visualisation toward data engineering: this portfolio closes my BUT Data Science and opens onto a <strong>Data Engineer Master’s</strong> (Ynov, 2026–2028), where I will consolidate my growth areas — pipelines, testing, statistical modelling and Big Data.'
    ),
    oralNote: B(
      'Support destiné à l’oral du 10 septembre : deux composantes essentielles y seront discutées en profondeur.',
      'Support for the 10 September oral: two essential components will be discussed in depth.'
    ),
  },

  footer: {
    line: B(
      'Portfolio de compétences · BUT 3 Science des données — IUT Lumière Lyon 2',
      'Skills portfolio · BUT 3 Data Science — IUT Lumière Lyon 2'
    ),
    backPerso: B('Voir mon portfolio professionnel', 'See my professional portfolio'),
  },
};

/* ---- Aplatissement → MAP { clé: {fr,en} } --------------- */
type AnyObj = Record<string, unknown>;
function isBi(n: unknown): n is Bi {
  return !!n && typeof n === 'object' && typeof (n as AnyObj).fr === 'string' && typeof (n as AnyObj).en === 'string';
}
function flatten(node: unknown, prefix: string, out: Record<string, Bi>): void {
  if (isBi(node)) { out[prefix] = { fr: node.fr, en: node.en }; return; }
  if (Array.isArray(node)) { node.forEach((v, i) => flatten(v, `${prefix}.${i}`, out)); return; }
  if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node as AnyObj)) flatten(v, prefix ? `${prefix}.${k}` : k, out);
  }
}

export const MAP: Record<string, Bi> = (() => {
  const out: Record<string, Bi> = {};
  flatten(content, '', out);
  return out;
})();

export const EN: Record<string, string> = Object.fromEntries(
  Object.entries(MAP).map(([k, v]) => [k, v.en])
);
