// project.js (FINAL with image support)
const PROJECTS = {
  "bank-call-bot": {
    title: "AI Banking Call Bot",
    subtitle: "Python · FastAPI · Voice AI · Systems Design",
    image: "assets/chatbot.jpg",
    overview:
      "AI-powered voice assistant to handle inbound banking calls with intent routing and safety-first action policies.",
    features: [
      "Inbound call handling via telephony webhook",
      "Intent routing for common banking requests",
      "Policy guardrails for sensitive actions",
      "Modular design for real banking API integration"
    ],
    tags: ["Python", "FastAPI", "Voice", "Systems"],
    tech: ["Python", "FastAPI", "Twilio"],
    links: []
  },

  "tweet-manager": {
    title: "Tweet Manager (CMPUT 291)",
    subtitle: "Python · SQLite · SQL · CLI Systems",
    image: "assets/twitter.png",
    overview:
      "Twitter-like CLI app supporting authentication, hashtags, followers, retweets, replies, feeds, and favorite lists with secure database access.",
    features: [
      "Secure login/signup with parameterized SQL queries",
      "Hashtag + keyword tweet search",
      "Followers and user profiles",
      "Retweets, replies, and personalized feed",
      "Favorite lists for organizing tweets"
    ],
    tags: ["Python", "SQLite", "SQL", "CLI"],
    tech: ["Python", "SQLite", "SQL"],
    links: []
  },

  "amazon-reviews-mongo": {
    title: "Amazon Review Analytics (CMPUT 291)",
    subtitle: "Python · MongoDB · Data Analytics · NoSQL",
    image: "assets/amazon.jpg",
    overview:
      "Loaded large JSON review datasets into MongoDB and implemented analytics queries using aggregation pipelines to analyze product ratings, reviewer behavior, time trends, and suspicious reviews.",
    features: [
      "Batch ingestion for large datasets",
      "Average rating by ASIN",
      "Top-N highest rated products",
      "Most active reviewers (top 10)",
      "Reviews over time (year comparisons)",
      "Suspicious review detection (high rating + low helpfulness)"
    ],
    tags: ["Python", "MongoDB", "NoSQL", "Analytics"],
    tech: ["Python", "MongoDB", "Aggregation Pipelines"],
    links: []
  },

  "event-lottery": {
    title: "Event Lottery System (CMPUT 301)",
    subtitle: "Android · Firebase · Software Engineering",
    image: "assets/lottery.jpg",
    overview:
      "Android application for managing event registrations using a lottery-based entrant selection workflow with role-based experiences and cloud-backed data storage.",
    features: [
      "Role-based access (entrant / organizer / admin)",
      "Lottery-based entrant selection workflow",
      "Firebase-backed storage and real-time sync",
      "Team-based engineering with UML/design artifacts and GitHub collaboration"
    ],
    tags: ["Android", "Firebase", "Team Project", "UML"],
    tech: ["Android", "Firebase", "GitHub", "Agile Workflow"],
    links: []
  },

  "poe2-ai": {
    title: "PoE2 AI Player",
    subtitle: "Python · AI · Search Algorithms · Reinforcement Learning",
    image: "assets/poe2.jpg",
    overview:
      "Implemented an AI agent to play the Powers of Exponent 2 game using heuristic evaluation and exploration strategies to improve decision-making under uncertainty.",
    features: [
      "Heuristic evaluation function for board positions",
      "Exploration–exploitation strategies (e.g., UCB-style reasoning)",
      "State-space reasoning and action selection",
      "Performance tuning using sampled rollouts (as implemented)"
    ],
    tags: ["Python", "AI", "RL", "Search"],
    tech: ["Python", "Heuristics", "Exploration Strategies"],
    links: []
  },

  "rl-playground": {
    title: "RL Algorithm Playground",
    subtitle: "Python · Reinforcement Learning · Experimentation",
    image: "assets/rl.webp",
    overview:
      "Implemented core RL algorithms and compared learning behavior across environments (e.g., Mountain Car), focusing on stability, exploration, and planning effects.",
    features: [
      "Implemented SARSA, Q-learning, and Expected SARSA",
      "Implemented Dyna-Q+ style planning with exploration bonuses",
      "Analyzed learning speed and stability across runs",
      "Created learning curves to compare approaches"
    ],
    tags: ["Python", "RL", "Analysis", "Algorithms"],
    tech: ["Python", "RL", "Experimentation"],
    links: []
  },

  "minesweeper-c": {
    title: "Pointer-Based Minesweeper (CMPUT 201)",
    subtitle: "C · Memory Management · Systems Programming",
    image: "assets/minesweeper.png",
    overview:
      "Implemented a console-based Minesweeper game in C using only pointer arithmetic, without array indexing. Emphasized low-level memory access and memory safety reasoning.",
    features: [
      "Pointer-only access (no array subscripting)",
      "Manual grid traversal with pointer arithmetic",
      "Bounds handling and safe memory access patterns",
      "CLI gameplay loop (reveal/flag)"
    ],
    tags: ["C", "Pointers", "Memory", "Systems"],
    tech: ["C", "Pointer Arithmetic", "CLI"],
    links: []
  },

  "raytracer-c": {
    title: "Ray Tracing Engine (C)",
    subtitle: "C · Computer Graphics · Vector Math",
    image: "assets/raytracing.png",
    overview:
      "Implemented a basic ray tracing engine in C, supporting spheres, lighting, and vector-based intersection calculations with a focus on correctness and low-level implementation details.",
    features: [
      "Ray–sphere intersection math",
      "Vector ops (dot product, normalization, distance)",
      "Lighting computations (as implemented)",
      "Image output pipeline (PPM or similar)"
    ],
    tags: ["C", "Graphics", "Math", "Rendering"],
    tech: ["C", "Vector Math", "Ray Tracing"],
    links: []
  }
};

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function renderProject(project) {
  document.title = `${project.title} — Portfolio`;

  // hero image
  const imgEl = document.getElementById("p-image");
  if (imgEl && project.image) {
    imgEl.src = project.image;
    imgEl.style.display = "block";
  }

  document.getElementById("p-title").textContent = project.title;
  document.getElementById("p-subtitle").textContent = project.subtitle;
  document.getElementById("p-overview").textContent = project.overview;

  const tagsEl = document.getElementById("p-tags");
  tagsEl.innerHTML = "";
  project.tags.forEach(t => {
    const s = document.createElement("span");
    s.textContent = t;
    tagsEl.appendChild(s);
  });

  const featEl = document.getElementById("p-features");
  featEl.innerHTML = "";
  project.features.forEach(f => {
    const li = document.createElement("li");
    li.textContent = f;
    featEl.appendChild(li);
  });

  const techEl = document.getElementById("p-tech");
  techEl.innerHTML = "";
  project.tech.forEach(t => {
    const s = document.createElement("span");
    s.textContent = t;
    techEl.appendChild(s);
  });

  const linksBlock = document.getElementById("p-links-block");
  const linksEl = document.getElementById("p-links");

  if (project.links && project.links.length > 0) {
    linksBlock.style.display = "block";
    linksEl.innerHTML = "";
    project.links.forEach(l => {
      const a = document.createElement("a");
      a.className = "btn secondary";
      a.href = l.href;
      a.target = "_blank";
      a.rel = "noreferrer";
      a.textContent = l.label;
      linksEl.appendChild(a);
    });
  } else {
    linksBlock.style.display = "none";
    linksEl.innerHTML = "";
  }
}

(function init() {
  if (!document.getElementById("p-title")) return;

  const id = getQueryParam("id");
  const project = PROJECTS[id];

  if (!project) {
    document.title = "Project not found — Portfolio";
    const imgEl = document.getElementById("p-image");
    if (imgEl) imgEl.style.display = "none";

    document.getElementById("p-title").textContent = "Project not found";
    document.getElementById("p-subtitle").textContent = "";
    document.getElementById("p-tags").innerHTML = "";
    document.getElementById("p-tech").innerHTML = "";
    document.getElementById("p-features").innerHTML = "";
    document.getElementById("p-overview").textContent =
      "Missing or incorrect project id. Go back and select a project.";
    document.getElementById("p-links-block").style.display = "none";
    return;
  }

  renderProject(project);
})();
