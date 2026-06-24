// project.js — Project case studies for Junayed Ahmed

const PROJECTS = {

  /* ─── Let's Break the Stigma ─────────────────────── */
  "break-the-stigma": {
    title: "Let's Break the Stigma",
    context: "BYAAW Advocacy Campaign · Bangladesh",
    subtitle: "Podcast Sessions · Specialist Panels · Public Education",
    image: "assets/stigma.jpg",
    tags: ["Advocacy", "Podcast", "Autism", "Education"],
    metrics: [
      { value: "Live",      label: "Sessions" },
      { value: "Q&A",       label: "Format" },
      { value: "Experts",   label: "Speakers" },
      { value: "Bangladesh", label: "Reach" },
    ],
    overview: "Let's Break the Stigma is a BYAAW advocacy campaign built around podcast-style sessions featuring specialists, changemakers, and community voices — all focused on autism awareness and education in Bangladesh. The campaign tackled the social stigma that prevents families from seeking help and kept the conversation grounded in real lived experiences.",
    problem: "In Bangladesh, autism stigma is not just a social issue — it is a barrier to diagnosis, treatment, and community support. Many families hide their children's conditions out of shame. Healthcare professionals rarely discuss it openly. There was no accessible, credible platform where the public could hear directly from specialists and people making real differences on the ground.",
    approach: "The campaign ran a series of structured podcast-style sessions, each bringing together specialists in autism and mental health, community advocates, and individuals who had navigated the system firsthand. Each session covered a specific topic — diagnosis, inclusion, family support, policy — and ended with an open Q&A where the audience could ask questions directly. The format was deliberately accessible, not academic.",
    features: [
      { icon: "🎙️", title: "Specialist Sessions", desc: "Hosted podcast-style conversations with doctors, therapists, and public health professionals working directly in autism care in Bangladesh." },
      { icon: "🌟", title: "Community Changemakers", desc: "Featured individuals making real differences — parents, educators, and advocates — who shared stories and practical insights from lived experience." },
      { icon: "💬", title: "Open Q&A Format", desc: "Each session closed with open audience Q&A, giving people a direct line to experts on questions they couldn't ask anywhere else." },
      { icon: "📚", title: "Public Education Focus", desc: "Every session was designed to educate — breaking down misconceptions, explaining what autism actually is, and showing what real support looks like." },
    ],
    outcome: "The campaign created a space that didn't previously exist in Bangladesh — an open, accessible, expert-led conversation about autism that reached families, students, healthcare workers, and general public. Sessions generated direct community engagement through Q&A and helped shift how participants understood and discussed autism.",
    takeaway: "Stigma lives in silence. The most effective thing we did was simply make the conversation public — bring credible voices into the open and give people permission to ask questions they had been carrying privately for years. Education at scale starts with one honest, accessible conversation.",
    tech: ["Advocacy", "Public Education", "Community Organizing", "Podcast Format", "Autism Awareness", "BYAAW"],
    links: [],
    prev: { id: "raytracer-c",        label: "Ray Tracing Engine" },
    next: { id: "radon-infographic",  label: "Indoor Radon Exposure" },
  },

  /* ─── Indoor Radon Exposure Infographic ──────────── */
  "radon-infographic": {
    title: "Indoor Radon Exposure in Alberta Homes",
    context: "Public Health Infographic · University of Alberta",
    subtitle: "Environmental Health · Policy Analysis · Data Visualization",
    image: "assets/radon.png",
    tags: ["Public Health", "Policy", "Infographic", "Environmental Health"],
    metrics: [
      { value: "1500+",   label: "Bq/m³ Threshold" },
      { value: "33%",     label: "Homes Over Limit" },
      { value: "200",     label: "Bq/m³ WHO Limit" },
      { value: "Alberta", label: "Focus Region" },
    ],
    overview: "A public health infographic examining indoor radon exposure in Alberta homes — presenting the cancer risk, provincial exceedance data, and an evidence-based policy proposal to mandate testing and subsidize mitigation across the province.",
    problem: "Radon is a colorless, odorless radioactive gas that seeps into homes from soil. It is the second leading cause of lung cancer in Canada after smoking. Despite this, testing is voluntary, landlords face no disclosure requirements, and financial barriers prevent most families from remediating — even after a dangerous result. In Alberta, roughly 1 in 3 homes in certain regions exceeds Health Canada's 200 Bq/m³ guideline. The data exists. The policy response does not.",
    approach: "Synthesized evidence from Health Canada, the World Health Organization, the National Collaborating Centre for Environmental Health, and Stanley et al. to construct a cross-Canada radon level comparison and risk communication framework. Designed a data visualization showing provincial distribution of radon concentrations and a pie chart of exposure outcomes. The policy proposal was structured around existing public health law frameworks and affordability analysis.",
    features: [
      { icon: "☢️", title: "What Is Radon", desc: "Explains radon as a naturally occurring decay product of uranium in soil — invisible, odorless, and dangerous only through long-term inhalation in enclosed spaces." },
      { icon: "🏠", title: "Who Is Affected", desc: "Cross-Canada data showing Alberta's radon burden: regional hotspots, percentage of homes above the 200 Bq/m³ guideline, and disproportionate risk in lower-income housing." },
      { icon: "📜", title: "The Policy Gap", desc: "Analysis of why the current voluntary testing regime fails: no landlord disclosure requirement, high remediation costs, and zero public education via healthcare providers or schools." },
      { icon: "🔬", title: "RMDP Solution", desc: "Radon Mitigation Disclosure Program proposal: mandatory testing at home sale/rental, subsidized test kits, a $500 mitigation rebate, province-wide public education via Alberta Health Services, and school testing requirements." },
    ],
    outcome: "Produced an evidence-based policy brief in infographic format demonstrating that mandatory disclosure at point of sale, combined with subsidized testing and a $500 remediation rebate, is both feasible and cost-effective compared to the long-term healthcare cost of radon-induced lung cancer.",
    takeaway: "Public health problems are often policy problems in disguise. The science on radon has been clear for decades — what is missing is political will and accessible communication. Translating peer-reviewed evidence into an infographic people will actually read is itself a public health intervention.",
    tech: ["Public Health Research", "Environmental Health", "Data Visualization", "Policy Analysis", "Infographic Design", "Health Canada Guidelines"],
    links: [{ href: "Ahmed_Junayed_infographuc.pdf", label: "View Infographic PDF" }],
    prev: { id: "break-the-stigma",  label: "Let's Break the Stigma" },
    next: { id: "morality-essay",    label: "Can We Be Good Without God?" },
  },

  /* ─── Philosophy Essay ────────────────────────────── */
  "morality-essay": {
    title: "Can We Be Good Without God?",
    context: "Philosophy Essay · University of Alberta",
    subtitle: "Ethics · Comparative Worldview Analysis · Academic Writing",
    image: "assets/philosophy.png",
    tags: ["Philosophy", "Ethics", "Academic", "Comparative Analysis"],
    metrics: [
      { value: "2",      label: "Worldview Lenses" },
      { value: "8+",     label: "Scholars Engaged" },
      { value: "Peer",   label: "Reviewed Format" },
      { value: "UofA",   label: "Institution" },
    ],
    overview: "A philosophical essay examining whether morality requires a divine foundation — comparing theistic moral frameworks (Divine Command Theory, Keller) against secular alternatives (Baggini, Buijs, Singer, Harris) through both a Comparison Lens and a Truth Lens to determine which account better explains moral reality.",
    problem: "The question of whether God is necessary for morality is one of philosophy's oldest and most practically relevant debates. It shapes how societies form laws, how individuals justify ethical decisions, and how different worldviews engage with contemporary moral controversies — from abortion and climate action to AI ethics. The challenge is not to dismiss either side, but to evaluate both rigorously.",
    approach: "Applied two analytical lenses throughout: a Comparison Lens (CL) assessing internal consistency, explanatory range, and responsiveness to criticism, and a Truth Lens (TL) evaluating claims against observable moral reality. Engaged the Euthyphro Dilemma as a structuring device — if God commands something because it is good, goodness is independent of God; if it is good because God commands it, morality becomes arbitrary. Evaluated theistic responses (Keller, Jakobsen) and secular alternatives (naturalism via Buijs, moral intuition via Baggini, Haidt's moral foundations) against contemporary moral controversies.",
    features: [
      { icon: "⛪", title: "Theistic Framework", desc: "Examined Divine Command Theory and Tim Keller's moral argument — that objective morality requires a personal God as its grounding — alongside Jakobsen's critique of the secular moral community." },
      { icon: "🔬", title: "Secular Alternatives", desc: "Assessed Julian Baggini's naturalistic account, Buijs's evolutionary moral foundations, Peter Singer's ethics of sentience, and Sam Harris's moral landscape as coherent bases for ethics without God." },
      { icon: "⚖️", title: "Euthyphro Analysis", desc: "Used Plato's Euthyphro Dilemma to expose the structural tension in divine command theory: if goodness depends on God's will, morality becomes contingent; if God recognizes pre-existing goodness, God becomes unnecessary for its foundation." },
      { icon: "🌍", title: "Contemporary Applications", desc: "Applied both frameworks to live moral debates — abortion, climate ethics, AI decision-making, and Haidt's cross-cultural moral roots — to test which worldview offers more coherent practical guidance." },
    ],
    outcome: "The essay concludes that secular moral frameworks — grounded in reason, human flourishing, and evolutionary moral psychology — provide a more internally consistent and empirically defensible account of morality than divine command theory, while acknowledging that religious traditions encode genuine moral wisdom worth engaging seriously rather than dismissing.",
    takeaway: "Moral philosophy forces you to examine the foundations beneath positions you have never questioned. Writing this essay changed how I approach ethical disagreement — I am less interested in winning arguments and more interested in understanding what each framework is actually trying to protect. That shift is more valuable than any conclusion.",
    tech: ["Philosophy", "Ethics", "Academic Writing", "Comparative Analysis", "Worldview Studies", "Critical Reasoning"],
    links: [{ href: "Ahmed_Junayedphilosophy.docx", label: "Download Essay DOCX", download: true }],
    prev: { id: "radon-infographic", label: "Indoor Radon Exposure" },
    next: { id: "bank-call-bot",     label: "AI Banking Call Bot" },
  },

  /* ─── AI Banking Call Bot ─────────────────────────── */
  "bank-call-bot": {
    title: "AI Banking Call Bot",
    context: "Personal Project · Voice AI & Systems Design",
    subtitle: "Python · FastAPI · Twilio",
    image: "assets/chatbot.jpg",
    tags: ["Python", "FastAPI", "Voice AI", "Systems"],
    metrics: [
      { value: "Voice", label: "Interface" },
      { value: "FastAPI", label: "Backend" },
      { value: "Twilio", label: "Telephony" },
      { value: "AI", label: "Intent Routing" },
    ],
    overview: "An AI-powered voice assistant designed to handle inbound banking calls — routing customer intent, processing common requests, and enforcing safety-first action policies before any sensitive operation is executed.",
    problem: "Banks handle thousands of inbound calls daily. Most systems drop customers in hold queues or connect them to agents for questions that could be handled automatically. The challenge was building an intelligent voice layer that understands intent, routes correctly, and stays safe — without a human in the loop for every interaction.",
    approach: "Built around a FastAPI backend with a telephony webhook receiving inbound call audio via Twilio. Voice input is transcribed and passed through an intent classification layer. A policy engine evaluates each intent against safety guardrails before any action is taken. The modular design separates telephony, intent, policy, and action layers so real banking APIs can slot in without structural changes.",
    features: [
      { icon: "📞", title: "Inbound Call Handling", desc: "Receives and processes inbound banking calls via telephony webhook integration with Twilio." },
      { icon: "🧠", title: "Intent Routing", desc: "Classifies customer intent from voice input and routes it to the appropriate banking action handler." },
      { icon: "🛡️", title: "Policy Guardrails", desc: "Enforces safety-first action policies — sensitive operations require validation before execution." },
      { icon: "🔌", title: "Modular Architecture", desc: "Designed for real banking API integration — each layer (telephony, intent, policy, action) is independently swappable." },
    ],
    outcome: "Delivered a working proof-of-concept demonstrating safe, structured intent routing for banking voice interactions. The modular design means swapping in real banking APIs requires no structural changes to the core system.",
    takeaway: "Designing for safety in AI systems is not a feature you add at the end — it is a constraint that shapes every architectural decision from the start. This project made that principle concrete.",
    tech: ["Python", "FastAPI", "Twilio", "Voice AI", "REST APIs", "Systems Design"],
    links: [],
    prev: { id: "morality-essay",  label: "Can We Be Good Without God?" },
    next: { id: "tweet-manager",   label: "Tweet Manager" },
  },

  /* ─── Tweet Manager ───────────────────────────────── */
  "tweet-manager": {
    title: "Tweet Manager",
    context: "CMPUT 291 · Database Management Systems",
    subtitle: "Python · SQLite · SQL",
    image: "assets/twitter.png",
    tags: ["Python", "SQLite", "SQL", "CLI"],
    metrics: [
      { value: "10+",    label: "Features" },
      { value: "SQLite", label: "Database" },
      { value: "CLI",    label: "Interface" },
      { value: "Secure", label: "Auth Design" },
    ],
    overview: "A fully featured Twitter-like CLI application built in Python with SQLite — supporting authentication, hashtag search, followers, retweets, replies, personalized feeds, and favorite lists with secure parameterized database access throughout.",
    problem: "Real social platforms have complex relational data — users, tweets, hashtags, follower graphs, content interactions — that need careful schema design and secure query handling. The challenge was implementing this full feature set in raw Python + SQL, with no ORM, while keeping all queries safe against injection.",
    approach: "Designed a normalized relational schema covering users, tweets, hashtags, replies, retweets, follows, and favorites. All database access uses parameterized queries throughout. The CLI handles session state and renders feeds chronologically, with hashtag and keyword search layered on top of the core data model.",
    features: [
      { icon: "🔐", title: "Secure Auth", desc: "Login and signup with parameterized SQL queries — no string interpolation anywhere in the authentication flow." },
      { icon: "#️⃣", title: "Hashtag & Keyword Search", desc: "Full hashtag and keyword search across tweet content, backed by indexed queries for performance." },
      { icon: "👥", title: "Social Graph", desc: "Follow/unfollow system with user profiles and follower/following counts." },
      { icon: "📰", title: "Personalized Feed", desc: "Retweets, replies, and a chronological feed of tweets from accounts the user follows." },
      { icon: "⭐", title: "Favorite Lists", desc: "Create and manage named lists of saved tweets for organized reference." },
    ],
    outcome: "Implemented a fully functional social platform backend with 10+ features — authentication, search, social graph, content actions, and personalized feeds — entirely in Python and raw SQL without an ORM. All queries are injection-safe.",
    takeaway: "Writing raw SQL for a feature-complete social platform taught me what ORMs actually do for you — and what they hide. Understanding the underlying schema made every query intentional rather than magic.",
    tech: ["Python", "SQLite", "SQL", "CLI", "Parameterized Queries", "Database Design"],
    links: [],
    prev: { id: "bank-call-bot",        label: "AI Banking Call Bot" },
    next: { id: "amazon-reviews-mongo", label: "Amazon Review Analytics" },
  },

  /* ─── Amazon Reviews MongoDB ──────────────────────── */
  "amazon-reviews-mongo": {
    title: "Amazon Review Analytics",
    context: "CMPUT 291 · Database Management Systems",
    subtitle: "Python · MongoDB · Aggregation Pipelines",
    image: "assets/amazon.jpg",
    tags: ["Python", "MongoDB", "NoSQL", "Analytics"],
    metrics: [
      { value: "6",       label: "Analytics Queries" },
      { value: "MongoDB", label: "Database" },
      { value: "Large",   label: "Dataset Scale" },
      { value: "NoSQL",   label: "Paradigm" },
    ],
    overview: "Loaded large JSON Amazon product review datasets into MongoDB and implemented a suite of analytics queries using aggregation pipelines — surfacing product quality signals, reviewer behavior patterns, time-based trends, and suspicious review detection.",
    problem: "Large-scale review datasets contain patterns invisible at the individual record level — which products are genuinely rated highly, which reviewers are most active, how ratings shift over time, and which reviews look suspicious based on engagement signals. SQL aggregation would work, but the challenge was doing this at scale in MongoDB's document model.",
    approach: "Batch-ingested large JSON review files into MongoDB collections. Designed aggregation pipelines for each analytics query — grouping, sorting, filtering, and projecting across millions of records. Suspicious review detection used composite signals: high star rating combined with low helpfulness vote ratio as a flag for inauthentic reviews.",
    features: [
      { icon: "📥", title: "Batch Ingestion", desc: "Efficient batch loading of large JSON review datasets into MongoDB collections." },
      { icon: "⭐", title: "Product Rating Analytics", desc: "Average rating per ASIN and top-N highest rated product rankings." },
      { icon: "🏆", title: "Reviewer Activity", desc: "Top 10 most active reviewers by total review count." },
      { icon: "📅", title: "Time-based Trends", desc: "Review volume and rating patterns compared across different years." },
      { icon: "🚨", title: "Suspicious Review Detection", desc: "Flagged reviews with high star ratings but disproportionately low helpfulness votes." },
    ],
    outcome: "Delivered 6 working analytics queries across a large-scale dataset, demonstrating efficient aggregation pipeline design in MongoDB. The suspicious review detection approach correctly identifies reviews where community helpfulness signals contradict the star rating.",
    takeaway: "NoSQL aggregation pipelines require you to think in transformations, not tables. Planning the pipeline shape before writing a single line was the difference between queries that ran cleanly and ones that timed out.",
    tech: ["Python", "MongoDB", "Aggregation Pipelines", "NoSQL", "Data Analytics", "JSON"],
    links: [],
    prev: { id: "tweet-manager",   label: "Tweet Manager" },
    next: { id: "event-lottery",   label: "Event Lottery System" },
  },

  /* ─── Event Lottery System ────────────────────────── */
  "event-lottery": {
    title: "Event Lottery System",
    context: "CMPUT 301 · Software Engineering · Team Project",
    subtitle: "Android · Firebase · Agile",
    image: "assets/lottery.png",
    tags: ["Android", "Firebase", "Team Project", "UML"],
    metrics: [
      { value: "3",        label: "User Roles" },
      { value: "Firebase", label: "Backend" },
      { value: "Agile",    label: "Methodology" },
      { value: "Team",     label: "Collaboration" },
    ],
    overview: "A full Android application for managing event registrations through a fair lottery-based selection system — with distinct role-based experiences for entrants, organizers, and admins, backed by Firebase for real-time data sync.",
    problem: "Managing event registrations fairly at scale across multiple user roles is harder than it looks. Organizers need to create events and control capacity. Entrants need to register and receive fair selection outcomes. Admins need oversight. All of this needs to work in real time across devices with consistent state.",
    approach: "Designed with three separate role flows (entrant, organizer, admin) each with their own UI and permissions. Firebase Firestore provides real-time sync across all clients. The lottery mechanism runs server-side to prevent client manipulation. UML class and sequence diagrams informed the architecture before any code was written — as required by the software engineering process.",
    features: [
      { icon: "🎭", title: "Role-Based Access", desc: "Distinct experience for entrants, organizers, and admins — each with appropriate permissions and UI." },
      { icon: "🎰", title: "Lottery Selection", desc: "Fair lottery-based entrant selection workflow that organizers trigger after registration closes." },
      { icon: "☁️", title: "Firebase Real-time Sync", desc: "Cloud-backed data storage with real-time updates across all connected clients." },
      { icon: "📐", title: "UML-Driven Design", desc: "Architecture documented with UML class and sequence diagrams before implementation — following full software engineering process." },
    ],
    outcome: "Delivered a fully functional Android app with all three role flows, lottery logic, and real-time Firebase sync. Completed as a team project using GitHub collaboration and agile sprint structure.",
    takeaway: "Software engineering process matters at team scale. The UML diagrams we wrote before coding caught design conflicts that would have been expensive to fix mid-sprint. This was my first real experience seeing why upfront design work pays off.",
    tech: ["Android", "Java", "Firebase", "Firestore", "UML", "GitHub", "Agile"],
    links: [],
    prev: { id: "amazon-reviews-mongo", label: "Amazon Review Analytics" },
    next: { id: "poe2-ai",              label: "PoE2 AI Player" },
  },

  /* ─── PoE2 AI Player ──────────────────────────────── */
  "poe2-ai": {
    title: "PoE2 AI Player",
    context: "CMPUT 366 · Artificial Intelligence",
    subtitle: "Python · Heuristics · Search · RL",
    image: "assets/poe2.jpg",
    tags: ["Python", "AI", "Heuristics", "Search"],
    metrics: [
      { value: "AI",        label: "Domain" },
      { value: "Heuristic", label: "Evaluation" },
      { value: "UCB",       label: "Exploration" },
      { value: "Python",    label: "Language" },
    ],
    overview: "An AI agent built to play the Powers of Exponent 2 strategy game — using heuristic board evaluation and exploration-exploitation strategies to make better decisions than greedy or random play.",
    problem: "Playing strategy games optimally requires evaluating future states efficiently under uncertainty. A purely greedy agent exploits but never explores. A random agent explores but never learns. The challenge was designing an evaluation function and exploration strategy that actually improves game performance.",
    approach: "Implemented a heuristic evaluation function that scores board positions based on game-specific features. Applied UCB-style exploration-exploitation reasoning to balance trying new moves versus committing to high-scoring lines. State-space search with rollout sampling informed action selection at each turn.",
    features: [
      { icon: "🧮", title: "Heuristic Evaluation", desc: "Custom evaluation function scoring board positions based on game-relevant features beyond simple tile values." },
      { icon: "🔭", title: "Exploration Strategy", desc: "UCB-style exploration-exploitation reasoning to balance discovering new positions versus committing to strong ones." },
      { icon: "🌳", title: "State-Space Search", desc: "State-space reasoning with action selection based on projected future outcomes." },
      { icon: "📊", title: "Performance Tuning", desc: "Sampled rollouts used to calibrate heuristic weights and exploration parameters." },
    ],
    outcome: "Produced an agent that outperforms greedy and random baselines on the Powers of Exponent 2 game — demonstrating that heuristic evaluation combined with principled exploration beats either extreme alone.",
    takeaway: "AI in games is really a lens for understanding decision-making under uncertainty. The hardest part was not the algorithm — it was designing an evaluation function that captured what actually makes a board position good. That design problem is more domain reasoning than computer science.",
    tech: ["Python", "Heuristic Evaluation", "UCB", "State-Space Search", "Rollout Sampling"],
    links: [{ href: '#poe2-game-section', label: 'Play the Game Live' }],
    prev: { id: "event-lottery",  label: "Event Lottery System" },
    next: { id: "rl-playground",  label: "RL Algorithm Playground" },
  },

  /* ─── RL Algorithm Playground ────────────────────── */
  "rl-playground": {
    title: "RL Algorithm Playground",
    context: "CMPUT 366 · Artificial Intelligence",
    subtitle: "Python · SARSA · Q-Learning · Dyna-Q+",
    image: "assets/rl.webp",
    tags: ["Python", "RL", "Algorithms", "Analysis"],
    metrics: [
      { value: "4",       label: "Algorithms" },
      { value: "SARSA",   label: "On-Policy" },
      { value: "Dyna-Q+", label: "Planning" },
      { value: "Python",  label: "Language" },
    ],
    overview: "Implemented four core reinforcement learning algorithms from scratch — SARSA, Q-learning, Expected SARSA, and Dyna-Q+ with exploration bonuses — then empirically compared their learning speed and stability across environments including Mountain Car.",
    problem: "RL algorithms look similar on paper but behave very differently in practice. The question is not which algorithm is theoretically better — it is which one converges faster, stays stable, and generalizes across environments. The only way to answer that is to implement and run them yourself.",
    approach: "Implemented each algorithm from the mathematical definition — no RL library shortcuts. Ran controlled experiments across environments with identical hyperparameters where possible. Generated learning curves to visualise convergence speed and stability across multiple seeds. Dyna-Q+ planning was implemented with exploration bonuses to reward revisiting under-explored states.",
    features: [
      { icon: "📐", title: "SARSA (On-Policy TD)", desc: "On-policy temporal difference learning — learns the value of the policy being followed." },
      { icon: "🎯", title: "Q-Learning (Off-Policy)", desc: "Off-policy TD control — learns the optimal policy regardless of the exploration strategy used." },
      { icon: "⚖️", title: "Expected SARSA", desc: "Uses the expected value over actions instead of a sampled next action — more stable than standard SARSA." },
      { icon: "🗺️", title: "Dyna-Q+ Planning", desc: "Model-based planning with exploration bonuses that reward revisiting states not seen recently." },
    ],
    outcome: "Produced comparative learning curves demonstrating real behavioural differences between on-policy and off-policy methods, and between reactive and planning-based approaches. Results match theoretical predictions — which confirmed both the implementations and the theory.",
    takeaway: "Implementing RL algorithms from scratch is the only way to truly understand them. Reading a pseudocode description gives you the shape; implementing it teaches you where the subtleties live — update timing, exploration decay, terminal state handling. Theory and practice diverge in ways that only show up in code.",
    tech: ["Python", "SARSA", "Q-Learning", "Expected SARSA", "Dyna-Q+", "Reinforcement Learning"],
    links: [],
    prev: { id: "poe2-ai",        label: "PoE2 AI Player" },
    next: { id: "minesweeper-c",  label: "Pointer Minesweeper" },
  },

  /* ─── Pointer Minesweeper ─────────────────────────── */
  "minesweeper-c": {
    title: "Pointer-Based Minesweeper",
    context: "CMPUT 201 · Practical Programming Methodology",
    subtitle: "C · Pointer Arithmetic · Memory Management",
    image: "assets/minesweeper.png",
    tags: ["C", "Pointers", "Memory", "Systems"],
    metrics: [
      { value: "C",        label: "Language" },
      { value: "0",        label: "Array Subscripts" },
      { value: "Pointer",  label: "Only Access" },
      { value: "CLI",      label: "Interface" },
    ],
    overview: "A console Minesweeper game implemented in C using exclusively pointer arithmetic — no array subscripting allowed. Every grid access, traversal, and bounds check is done through raw pointer operations.",
    problem: "Array subscripting in C hides pointer mechanics behind familiar syntax. The constraint of zero array indexing forces you to think explicitly about memory layout, stride, and address arithmetic — building the muscle memory that separates surface-level C knowledge from real systems understanding.",
    approach: "The game grid is allocated as a flat block of memory. All cell access uses pointer arithmetic: base pointer + (row × width + col). Traversal for flood-fill (reveal adjacent cells) is implemented with pointer offsets in all eight directions, with explicit bounds checking at each step. No pointer is ever dereferenced without a bounds check.",
    features: [
      { icon: "🧮", title: "Pointer-Only Grid Access", desc: "Every cell read and write uses pointer arithmetic — zero array subscript operators in the grid logic." },
      { icon: "🔍", title: "Manual Traversal", desc: "Eight-directional flood-fill reveal implemented entirely through pointer offsets with explicit bounds handling." },
      { icon: "🛡️", title: "Memory Safety", desc: "All pointer dereferences guarded by bounds checks — no undefined behaviour in any game state." },
      { icon: "🎮", title: "Full CLI Gameplay", desc: "Complete gameplay loop — cell reveal, flag placement, mine detection, win and loss conditions." },
    ],
    outcome: "A fully playable Minesweeper implementation with no array subscripting anywhere in the grid logic. The constraint forced a deep familiarity with C memory layout that carries directly into any low-level systems work.",
    takeaway: "C arrays are syntactic sugar over pointers. Removing that sugar for an entire project makes the underlying model impossible to ignore. After this, pointer arithmetic in any context feels readable rather than cryptic.",
    tech: ["C", "Pointer Arithmetic", "Manual Memory Management", "CLI", "Systems Programming"],
    links: [{ href: '#ms-game-section', label: 'Play Minesweeper Live' }],
    prev: { id: "rl-playground", label: "RL Algorithm Playground" },
    next: { id: "raytracer-c",   label: "Ray Tracing Engine" },
  },

  /* ─── Ray Tracing Engine ──────────────────────────── */
  "raytracer-c": {
    title: "Ray Tracing Engine",
    context: "CMPUT 201 · Practical Programming Methodology",
    subtitle: "C · Vector Math · Computer Graphics",
    image: "assets/raytracing.png",
    tags: ["C", "Graphics", "Math", "Rendering"],
    metrics: [
      { value: "C",        label: "Language" },
      { value: "Spheres",  label: "Geometry" },
      { value: "Vector",   label: "Math Core" },
      { value: "PPM",      label: "Output Format" },
    ],
    overview: "A ray tracing engine implemented from scratch in C — computing ray-sphere intersections, applying lighting calculations, and rendering scenes to image output using only vector mathematics.",
    problem: "3D rendering requires precise mathematical modelling of how light behaves in a scene. There are no shortcuts — each pixel in the output image is the result of tracing a ray from the camera through that pixel into the scene and computing what it hits and how light reflects off it. The challenge was implementing that physics correctly at the C level.",
    approach: "Each pixel launches a ray from the camera position through the image plane. For each ray, the engine tests intersection against all spheres in the scene using the quadratic formula for ray-sphere intersection. On a hit, the lighting model computes diffuse shading using dot products between the surface normal and light direction vector. Output is written as a PPM image file.",
    features: [
      { icon: "🔦", title: "Ray-Sphere Intersection", desc: "Quadratic formula-based intersection testing for rays against spherical geometry." },
      { icon: "📐", title: "Vector Mathematics", desc: "Full vector library: dot product, normalization, subtraction, distance — all implemented in C." },
      { icon: "💡", title: "Lighting Calculations", desc: "Diffuse shading computed from surface normals and light direction using dot product projection." },
      { icon: "🖼️", title: "Image Output", desc: "Rendered scenes written to PPM format — a simple pixel-by-pixel image format readable by standard viewers." },
    ],
    outcome: "Produced a working ray tracer rendering scenes with multiple spheres and correct lighting. Seeing pixels appear correctly from nothing but math was a clear demonstration that graphics is applied vector algebra.",
    takeaway: "Computer graphics is just applied mathematics on a deadline. Every formula in a graphics textbook is a geometric intuition expressed as arithmetic. Implementing it in C stripped away every abstraction and made that connection direct.",
    tech: ["C", "Vector Math", "Ray Tracing", "Linear Algebra", "PPM Image Format"],
    links: [],
    prev: { id: "minesweeper-c",     label: "Pointer Minesweeper" },
    next: { id: "break-the-stigma", label: "Let's Break the Stigma" },
  },

};

/* ─── Helpers ──────────────────────────────────────────── */
function qs(id) { return document.getElementById(id); }
function hide(id) { const el = qs(id); if (el) el.hidden = true; }
function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

/* ─── Renderer ─────────────────────────────────────────── */
function renderProject(proj) {
  document.title = `${proj.title} · Junayed Ahmed`;

  const imgEl = qs('p-image');
  if (imgEl) {
    if (proj.image) { imgEl.src = proj.image; imgEl.alt = proj.title; }
    else { const w = imgEl.closest('.det-logo-wrap'); if (w) w.hidden = true; }
  }

  setText('p-title',    proj.title);
  setText('p-context',  proj.context);
  setText('p-subtitle', proj.subtitle);
  renderPills('p-tags', proj.tags);

  const metricsEl = qs('p-metrics');
  if (metricsEl && proj.metrics) {
    metricsEl.innerHTML = proj.metrics.map((m, i) =>
      `${i > 0 ? '<div class="det-metric-sep" aria-hidden="true"></div>' : ''}
       <div class="det-metric"><strong>${m.value}</strong><span>${m.label}</span></div>`
    ).join('');
  }

  setSection('sec-overview', 'p-overview', proj.overview);
  setSection('sec-problem',  'p-problem',  proj.problem);
  setSection('sec-approach', 'p-approach', proj.approach);
  setSection('sec-outcome',  'p-outcome',  proj.outcome);

  const featEl = qs('p-features');
  if (featEl && proj.features && proj.features.length) {
    featEl.innerHTML = proj.features.map(f =>
      `<div class="det-card">
         <div class="det-card-icon" aria-hidden="true">${f.icon}</div>
         <h3 class="det-card-title">${f.title}</h3>
         <p class="det-card-desc">${f.desc}</p>
       </div>`
    ).join('');
  } else { hide('sec-features'); }

  const takeEl = qs('p-takeaway');
  if (takeEl && proj.takeaway) {
    takeEl.innerHTML = `<span class="det-quote-mark" aria-hidden="true">"</span>${proj.takeaway}`;
  } else { hide('sec-takeaway'); }

  renderPills('p-tech', proj.tech, 'det-skill-pill');

  const linksEl = qs('p-links');
  if (linksEl && proj.links && proj.links.length) {
    linksEl.innerHTML = proj.links.map(l => {
      if (l.href.startsWith('#')) {
        return `<a class="det-link" href="${l.href}">${l.label} ↓</a>`;
      }
      if (l.download || /\.docx?$/i.test(l.href)) {
        return `<a class="det-link" href="${l.href}" download>${l.label} ↓</a>`;
      }
      return `<a class="det-link" href="${l.href}" target="_blank" rel="noopener noreferrer">${l.label} ↗</a>`;
    }).join('');
    const sb = qs('sb-links'); if (sb) sb.hidden = false;
  }

  const prevEl = qs('p-prev'), nextEl = qs('p-next');
  if (prevEl && proj.prev) {
    prevEl.href = `project.html?id=${proj.prev.id}`;
    setText('p-prev-name', proj.prev.label);
  }
  if (nextEl && proj.next) {
    nextEl.href = `project.html?id=${proj.next.id}`;
    setText('p-next-name', proj.next.label);
  }
}

function setText(id, text) { const el = qs(id); if (el && text != null) el.textContent = text; }
function setSection(secId, textId, text) {
  if (!text) { hide(secId); return; }
  setText(textId, text);
}
function renderPills(containerId, items, cls) {
  const el = qs(containerId);
  if (!el || !items || !items.length) return;
  el.innerHTML = items.map(t => `<span${cls ? ` class="${cls}"` : ''}>${t}</span>`).join('');
}

/* ─── Init ─────────────────────────────────────────────── */
(function init() {
  if (!qs('p-title')) return;
  const proj = PROJECTS[getQueryParam('id')];
  if (!proj) {
    document.title = 'Project not found — Junayed Ahmed';
    setText('p-title', 'Project not found');
    ['p-context','p-subtitle','p-tags','p-metrics',
     'sec-overview','sec-problem','sec-approach','sec-features',
     'sec-outcome','sec-takeaway'].forEach(hide);
    return;
  }
  renderProject(proj);
})();
