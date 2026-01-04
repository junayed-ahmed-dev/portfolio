// experience.js (FINAL: includes top logo image support)
const EXPERIENCE = {
  "ucb-intern": {
    title: "Software Developer Intern — United Commercial Bank PLC",
    subtitle: "Jun 2024 – Aug 2024 · Dhaka, Bangladesh (On-site)",
    image: "assets/ucb.png",
    tags: ["Internship", "Banking", "Enterprise IT"],
    bullets: [
      "Collaborated with the software development team on BRDs and project proposals for client applications, web apps, and enterprise solutions.",
      "Participated in live deployment and testing; worked with the QC team to identify and resolve bugs.",
      "Contributed to a prototype web application focused on secure payment options and created websites for BAF Shaheen schools.",
      "Worked with the network team on database management using MySQL and application development using C# and .NET.",
      "Provided network supervision and collaborated with the cybersecurity team to protect servers and ensure security compliance.",
      "Coordinated with credit, risk management, and corporate banking teams to support IT needs."
    ],
    skills: [
      "SDLC", "Documentation", "Testing", "MySQL", "C#", ".NET",
      "Network Administration", "Security Compliance", "Enterprise Systems"
    ]
  },

  "neo-sales": {
    title: "Sales Representative — Neo Financial",
    subtitle: "Mar 2024 – Present · Edmonton, Alberta (On-site)",
    image: "assets/neo.jpg",
    tags: ["Part-time", "Fintech"],
    bullets: [
      "Drive sales growth by building customer relationships and promoting modern banking solutions.",
      "Support a strong customer experience in a fast-paced retail environment."
    ],
    skills: ["Customer Experience", "Sales", "Communication", "Fintech"]
  },

  "wizeprep": {
    title: "Marketing Representative & Class Ambassador — Wizeprep",
    subtitle: "Oct 2023 – Mar 2025 · Alberta, Canada (On-site)",
    image: "assets/wizeprep.jpg",
    tags: ["Part-time", "Campus Marketing"],
    bullets: [
      "Ran on-campus promotions including class announcements, poster placement, and student outreach.",
      "Improved brand visibility through consistent communication and peer engagement."
    ],
    skills: ["Communication", "Brand Communication", "Leadership", "Teamwork"]
  },

  "byaw-founder": {
    title: "Founder — Bangladesh Youth Alliance for Autism Welfare",
    subtitle: "Jan 2020 – Present · Bangladesh (Hybrid)",
    image: "assets/byaaw.jpeg",
    tags: ["Leadership", "Community"],
    bullets: [
      "Founded and led a youth organization focused on autism welfare and community support in Bangladesh.",
      "Organized field and online events and coordinated fundraising initiatives to support autism-related causes.",
      "Created awareness programs to reduce bullying by educating teenagers about autism and mental health."
    ],
    skills: ["Leadership", "Project Management", "Public Speaking", "Community Building"]
  }
};

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function renderExperience(exp) {
  document.title = `${exp.title} — Portfolio`;

  // Top logo
  const imgEl = document.getElementById("e-image");
  if (imgEl && exp.image) {
    imgEl.src = exp.image;
    imgEl.style.display = "block";
  }

  document.getElementById("e-title").textContent = exp.title;
  document.getElementById("e-subtitle").textContent = exp.subtitle;

  const tagsEl = document.getElementById("e-tags");
  tagsEl.innerHTML = "";
  exp.tags.forEach(t => {
    const s = document.createElement("span");
    s.textContent = t;
    tagsEl.appendChild(s);
  });

  const bulletsEl = document.getElementById("e-bullets");
  bulletsEl.innerHTML = "";
  exp.bullets.forEach(b => {
    const li = document.createElement("li");
    li.textContent = b;
    bulletsEl.appendChild(li);
  });

  const skillsEl = document.getElementById("e-skills");
  skillsEl.innerHTML = "";
  exp.skills.forEach(skl => {
    const s = document.createElement("span");
    s.textContent = skl;
    skillsEl.appendChild(s);
  });
}

(function init() {
  if (!document.getElementById("e-title")) return;

  const id = getQueryParam("id");
  const exp = EXPERIENCE[id];

  if (!exp) {
    document.title = "Experience not found — Portfolio";
    const imgEl = document.getElementById("e-image");
    if (imgEl) imgEl.style.display = "none";

    document.getElementById("e-title").textContent = "Experience not found";
    document.getElementById("e-subtitle").textContent = "";
    return;
  }

  renderExperience(exp);
})();
