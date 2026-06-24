// experience.js — Case study data for Junayed Ahmed

const EXPERIENCE = {

  /* ─── BMO Client Experience Specialist ───────────── */
  "bmo-specialist": {
    title: "Client Experience Specialist",
    org: "BMO Bank of Montreal",
    subtitle: "May 2026 – Present · Edmonton, Alberta (On-site)",
    image: "assets/BMO.png.webp",
    tags: ["Permanent Part-time", "Banking", "Client Relations", "Fintech"],
    metrics: [
      { value: "2026",   label: "Started" },
      { value: "Canada", label: "Market" },
      { value: "BMO",    label: "One of Canada's Big 5" },
      { value: "On-site", label: "Edmonton, AB" },
    ],
    about: "BMO Bank of Montreal is one of Canada's Big Five banks, serving millions of personal, business, and commercial banking clients across North America. Its branch network is the frontline of client experience — where trust, product knowledge, and digital fluency directly shape customer outcomes and revenue growth.",
    challenge: "Banking clients expect seamless, personalized service — but the financial landscape is increasingly digital and complex. The challenge is meeting people where they are: some clients are navigating digital platforms for the first time, others need tailored product recommendations, and all of them need to feel heard and secure in every interaction.",
    role: "As a Client Experience Specialist, I deliver high-quality banking service in a permanent part-time capacity, managing the full client journey — from first contact through product onboarding. I identify financial product opportunities aligned with individual client goals, support revenue growth through referrals, and guide clients through BMO's digital banking tools, while maintaining strict compliance and security standards.",
    contributions: [
      {
        icon: "🤝",
        title: "Client Relationship Management",
        desc: "Build genuine, long-term banking relationships by understanding each client's financial situation first — then matching them with products and services that actually serve their goals."
      },
      {
        icon: "💳",
        title: "Financial Product Recommendations",
        desc: "Identify and recommend appropriate financial products — accounts, cards, loans — aligned with individual client objectives and life stages, following needs-based selling principles."
      },
      {
        icon: "📈",
        title: "Revenue Growth & Referrals",
        desc: "Support branch revenue targets through quality referrals and cross-functional collaboration with financial advisors and specialists for complex client needs."
      },
      {
        icon: "📱",
        title: "Digital Banking Guidance",
        desc: "Guide clients through BMO's digital platforms — online banking, mobile app, e-transfers — improving accessibility and reducing friction for clients transitioning to digital-first banking."
      },
    ],
    impact: "Contributing to client retention and branch revenue through relationship-focused service and quality referrals. Helping clients — particularly those less comfortable with digital tools — navigate BMO's platforms confidently and securely.",
    reflection: "Working at BMO after Neo Financial has shown me how much the culture of a financial institution shapes client interactions. The Big 5 bank environment operates at a different scale and with more complexity than fintech-first alternatives — but the core principle is the same: clients trust you with their financial lives, and that trust is earned through honesty, consistency, and genuine understanding of what they actually need.",
    skills: ["Client Relations", "Banking Products", "Needs-Based Selling", "Digital Banking", "Referral Management", "Compliance", "Financial Literacy", "Communication"],
    links: [],
    prev: { id: "byaaw-founder", label: "BYAAW Founder" },
    next: { id: "ucb-intern",    label: "UCB Internship" },
  },

  /* ─── UCB Software Developer Intern ──────────────── */
  "ucb-intern": {
    title: "Software Developer Intern",
    org: "United Commercial Bank PLC",
    subtitle: "Jun 2024 – Aug 2024 · Dhaka, Bangladesh (On-site)",
    image: "assets/ucb.png",
    tags: ["Internship", "Banking", "Enterprise IT", "C# · .NET · MySQL"],
    metrics: [
      { value: "3",  label: "Months On-site" },
      { value: "6",  label: "Teams Worked With" },
      { value: "4+", label: "Tech Stacks" },
      { value: "2+", label: "Projects Shipped" },
    ],
    about: "United Commercial Bank PLC is one of Bangladesh's largest private commercial banks, serving millions of customers across retail, corporate, and digital banking. Its IT division manages enterprise-scale software, network infrastructure, database systems, and cybersecurity compliance across all business units.",
    challenge: "Enterprise banking software operates under strict security, compliance, and reliability constraints that academic projects never face. As an intern, I had to ramp up quickly on production systems, coordinate across departments with no formal authority, and contribute meaningfully on real deliverables — all within a 3-month window.",
    role: "Embedded with UCB's software development team, I contributed across four areas: software development and documentation, quality assurance and live deployment, network and database management, and cross-departmental IT coordination spanning six business units including cybersecurity, credit, and corporate banking.",
    contributions: [
      {
        icon: "💻",
        title: "Software Development & Prototypes",
        desc: "Collaborated on Business Requirements Documents and project proposals for client applications, web apps, and enterprise solutions. Built a secure payment prototype and developed websites for BAF Shaheen schools end-to-end."
      },
      {
        icon: "🔍",
        title: "QA & Live Deployment",
        desc: "Participated in live deployment cycles and worked with the QC team to identify and resolve software bugs across multiple active projects before production release."
      },
      {
        icon: "🗄️",
        title: "Network & Database Engineering",
        desc: "Worked with the network team on MySQL database management and application development in C# and .NET. Provided network supervision and collaborated with the cybersecurity team to protect servers and maintain security compliance."
      },
      {
        icon: "🤝",
        title: "Cross-departmental IT Support",
        desc: "Coordinated with credit, risk management, and corporate banking teams to support interdepartmental IT needs — translating business requirements into technical action across six distinct departments."
      },
    ],
    impact: "Shipped two projects: a secure payment prototype that informed a client-facing banking feature, and a school website deployed for BAF Shaheen College. Contributed to bug resolution across multiple active production projects and provided IT support that bridged six departments.",
    reflection: "Enterprise software runs at a different pressure level than university projects. At UCB I learned that technical competence is the floor, not the ceiling — documentation, cross-team communication, and security discipline are what actually determine whether code creates value. Working inside a bank where every system touches real money and real customers made that viscerally clear.",
    skills: ["C#", ".NET", "MySQL", "SDLC", "BRD Documentation", "QA & Testing", "Network Administration", "Security Compliance", "Enterprise Systems"],
    links: [],
    prev: { id: "bmo-specialist", label: "BMO" },
    next: { id: "neo-sales",      label: "Neo Financial" },
  },

  /* ─── Neo Financial Sales Rep ─────────────────────── */
  "neo-sales": {
    title: "Sales Representative",
    org: "Neo Financial",
    subtitle: "Mar 2024 – Present · Edmonton, Alberta (On-site)",
    image: "assets/neo.jpg",
    tags: ["Part-time", "Fintech", "Sales", "Customer Experience"],
    metrics: [
      { value: "2024",   label: "Started" },
      { value: "Daily",  label: "Customer Engagement" },
      { value: "Retail", label: "Environment" },
      { value: "Canada", label: "Market" },
    ],
    about: "Neo Financial is a Canadian fintech company offering modern banking alternatives — no-fee accounts, high-interest savings, and cashback rewards — disrupting traditional banking for everyday Canadians. Operating through major retail partnerships, Neo's sales teams are its frontline in converting customers away from legacy banks.",
    challenge: "In a retail environment, customers default to the banks they grew up with. Introducing a fintech-first product means overcoming both institutional skepticism and digital literacy gaps. The challenge was never just selling a product — it was changing how someone thought about banking.",
    role: "As a sales representative, I drove sales growth by building authentic customer relationships and promoting Neo's modern banking solutions. I managed the full customer journey in a fast-paced retail setting — from first contact through account activation — while consistently meeting performance targets.",
    contributions: [
      {
        icon: "💬",
        title: "Customer Relationship Building",
        desc: "Built genuine connections with customers by understanding their financial habits first, then showing how Neo addressed their specific needs — not just listing features."
      },
      {
        icon: "🏦",
        title: "Fintech Education",
        desc: "Communicated Neo's banking products clearly and accessibly to a diverse customer base with varying levels of financial literacy and digital comfort."
      },
      {
        icon: "🏆",
        title: "Sales Performance",
        desc: "Consistently met and exceeded performance targets in a competitive retail environment by prioritising trust over transaction speed."
      },
      {
        icon: "🤝",
        title: "Team Collaboration",
        desc: "Contributed to team strategy by sharing effective engagement approaches and helping refine how the team handles common customer objections."
      },
    ],
    impact: "Consistently exceeded sales targets across multiple review periods. Built customer relationships that produced genuine trust rather than one-time conversions — reflected in repeat engagement and positive customer feedback.",
    reflection: "Neo reinforced something I believe across all my work: the best approach is an honest one. Customers who understood what Neo actually offered converted at higher rates and came back. Authenticity consistently outperformed a scripted pitch. That principle — lead with what the person actually needs — is one I carry into research, advocacy, and every team I work in.",
    skills: ["Sales", "Customer Experience", "Fintech", "Communication", "Persuasion", "Active Listening", "Objection Handling", "Retail Performance"],
    links: [],
    prev: { id: "ucb-intern",    label: "UCB Internship" },
    next: { id: "wizeprep",      label: "Wizeprep" },
  },

  /* ─── Wizeprep Campus Ambassador ──────────────────── */
  "wizeprep": {
    title: "Marketing Representative & Class Ambassador",
    org: "Wizeprep",
    subtitle: "Oct 2023 – Mar 2025 · Alberta, Canada (On-site)",
    image: "assets/wizeprep.jpg",
    tags: ["Contract", "Campus Marketing", "Edtech", "UofA"],
    metrics: [
      { value: "17",   label: "Months" },
      { value: "UofA", label: "Campus" },
      { value: "Multi", label: "Cohorts Reached" },
      { value: "Peer", label: "Strategy" },
    ],
    about: "Wizeprep is a Canadian edtech platform offering university-level courses, study materials, and AI-powered tutoring to help students succeed in their toughest courses. It partners with universities across Canada and reaches thousands of students through campus-level marketing.",
    challenge: "University students filter out most promotional content instantly. Breaking through as a campus ambassador required a strategy that felt genuinely peer-to-peer — not advertising. The wrong approach would damage credibility rather than build it.",
    role: "As class ambassador and marketing representative at the University of Alberta, I ran on-campus promotions including in-class announcements, strategic poster placement, and direct peer-to-peer student outreach. I also reported outreach outcomes to improve campaign effectiveness.",
    contributions: [
      {
        icon: "📣",
        title: "In-Class Announcements",
        desc: "Delivered targeted in-class announcements to student cohorts where Wizeprep's tools were most relevant — framed around real course struggles, not product benefits."
      },
      {
        icon: "🖼️",
        title: "Poster & Material Placement",
        desc: "Coordinated strategic placement of marketing materials across high-traffic campus locations to maintain consistent brand visibility alongside peer outreach."
      },
      {
        icon: "👥",
        title: "Peer-to-Peer Student Outreach",
        desc: "Engaged students directly in conversations about Wizeprep — the only strategy that actually worked in a campus environment where peer trust outweighs branded messaging."
      },
      {
        icon: "📈",
        title: "Campaign Reporting",
        desc: "Tracked outreach outcomes and submitted structured feedback that informed Wizeprep's campus marketing strategy improvements across subsequent campaigns."
      },
    ],
    impact: "Improved Wizeprep brand visibility across multiple University of Alberta student cohorts over a 17-month engagement. Delivered consistent outreach across academic terms and contributed feedback that shaped campus marketing playbooks.",
    reflection: "Campus marketing taught me the difference between broadcasting and connecting. Students don't respond to ads — they respond to peers they trust. Authenticity at scale starts with one honest conversation. That insight shapes how I approach communication in every other domain: start with what the other person actually needs, not what you want them to hear.",
    skills: ["Campus Marketing", "Peer Outreach", "Brand Communication", "Public Relations", "Presentation", "Campaign Reporting", "Student Engagement"],
    links: [],
    prev: { id: "neo-sales",     label: "Neo Financial" },
    next: { id: "byaaw-founder", label: "BYAAW Founder" },
  },

  /* ─── BYAAW Founder ───────────────────────────────── */
  "byaaw-founder": {
    title: "Founder",
    org: "Bangladesh Youth Alliance for Autism Welfare",
    subtitle: "Jan 2020 – Present · Bangladesh (Hybrid)",
    image: "assets/byaaw.jpeg",
    tags: ["Founder", "Nonprofit", "Advocacy", "Community"],
    metrics: [
      { value: "2020",  label: "Founded" },
      { value: "1000+", label: "Community Members" },
      { value: "20+",   label: "Advocacy Meetings" },
      { value: "2",     label: "Countries" },
    ],
    about: "BYAAW (Bangladesh Youth Alliance for Autism Welfare) is a youth-led nonprofit building autism awareness, family support networks, and inclusive policy advocacy across Bangladesh. It operates in a country where autism remains widely misunderstood and formal support systems are almost entirely absent for most families.",
    challenge: "In Bangladesh, autism affects millions yet diagnosis rates remain critically low, and most families navigate it completely alone — without community, resources, or guidance. Youth-led disability advocacy barely existed. There was no platform where young people could build that infrastructure from the ground up.",
    role: "As founder, I built BYAAW from nothing — defining the mission, recruiting volunteers, organizing awareness campaigns and fundraising events, creating educational programs for schools, and establishing partnerships with community leaders and health professionals.",
    contributions: [
      {
        icon: "🎯",
        title: "Awareness Programs",
        desc: "Created and led autism awareness programs in schools and communities, educating teenagers about autism and mental health to reduce bullying and build inclusive behaviour."
      },
      {
        icon: "🤝",
        title: "Community Events & Outreach",
        desc: "Organized field and online events to bring families, volunteers, and community members together around autism welfare and inclusion goals."
      },
      {
        icon: "💰",
        title: "Fundraising Campaigns",
        desc: "Coordinated fundraising initiatives to support autism-related causes and families in need — sustaining programs through community-backed resources."
      },
      {
        icon: "📢",
        title: "Youth-Led Advocacy",
        desc: "Represented BYAAW to schools, health professionals, and community leaders — building a network of youth advocates aligned with the mission of dignity and inclusion."
      },
    ],
    impact: "Built a community of 1,000+ members, conducted 20+ advocacy meetings, and expanded the organization's reach to two countries. Hundreds of families have been connected to resources and support they didn't previously know existed.",
    reflection: "BYAAW taught me that real leadership is about creating space for others. Every family I spoke with shaped the organization's direction more than any strategic plan. This is not a resume line — it is a commitment to human dignity that I carry into everything else I do, including the research and the technical work.",
    skills: ["Leadership", "Community Organizing", "Project Management", "Public Speaking", "Fundraising", "Advocacy", "Stakeholder Engagement", "NGO Management"],
    links: [],
    prev: { id: "wizeprep",       label: "Wizeprep" },
    next: { id: "bmo-specialist", label: "BMO" },
  },

};

/* ─── Helpers ──────────────────────────────────────────── */
function qs(id) { return document.getElementById(id); }
function hide(id) { const el = qs(id); if (el) el.hidden = true; }
function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

/* ─── Renderer ─────────────────────────────────────────── */
function renderExperience(exp) {
  document.title = `${exp.title} — ${exp.org} · Junayed Ahmed`;

  const imgEl = qs('e-image');
  if (imgEl) {
    if (exp.image) { imgEl.src = exp.image; imgEl.alt = exp.org; }
    else { const w = imgEl.closest('.det-logo-wrap'); if (w) w.hidden = true; }
  }

  setText('e-title',    exp.title);
  setText('e-org',      exp.org);
  setText('e-subtitle', exp.subtitle);
  renderPills('e-tags', exp.tags);

  const metricsEl = qs('e-metrics');
  if (metricsEl && exp.metrics) {
    metricsEl.innerHTML = exp.metrics.map((m, i) =>
      `${i > 0 ? '<div class="det-metric-sep" aria-hidden="true"></div>' : ''}
       <div class="det-metric"><strong>${m.value}</strong><span>${m.label}</span></div>`
    ).join('');
  }

  setSection('sec-about',     'e-about',     exp.about);
  setSection('sec-challenge', 'e-challenge', exp.challenge);
  setSection('sec-role',      'e-role',      exp.role);
  setSection('sec-impact',    'e-impact',    exp.impact);

  const cardsEl = qs('e-contributions');
  if (cardsEl && exp.contributions && exp.contributions.length) {
    cardsEl.innerHTML = exp.contributions.map(c =>
      `<div class="det-card">
         <div class="det-card-icon" aria-hidden="true">${c.icon}</div>
         <h3 class="det-card-title">${c.title}</h3>
         <p class="det-card-desc">${c.desc}</p>
       </div>`
    ).join('');
  } else { hide('sec-contributions'); }

  const quoteEl = qs('e-reflection');
  if (quoteEl && exp.reflection) {
    quoteEl.innerHTML = `<span class="det-quote-mark" aria-hidden="true">"</span>${exp.reflection}`;
  } else { hide('sec-reflection'); }

  renderPills('e-skills', exp.skills, 'det-skill-pill');

  const linksEl = qs('e-links');
  if (linksEl && exp.links && exp.links.length) {
    linksEl.innerHTML = exp.links.map(l =>
      `<a class="det-link" href="${l.href}" target="_blank" rel="noopener noreferrer">${l.label} ↗</a>`
    ).join('');
    const sb = qs('sb-links'); if (sb) sb.hidden = false;
  }

  const prevEl = qs('e-prev'), nextEl = qs('e-next');
  if (prevEl && exp.prev) {
    prevEl.href = `experience.html?id=${exp.prev.id}`;
    setText('e-prev-name', exp.prev.label);
  }
  if (nextEl && exp.next) {
    nextEl.href = `experience.html?id=${exp.next.id}`;
    setText('e-next-name', exp.next.label);
  }
}

function setText(id, text) { const el = qs(id); if (el && text) el.textContent = text; }
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
  if (!qs('e-title')) return;
  const exp = EXPERIENCE[getQueryParam('id')];
  if (!exp) {
    document.title = 'Experience not found — Junayed Ahmed';
    setText('e-title', 'Experience not found');
    ['e-org','e-subtitle','e-tags','e-metrics',
     'sec-about','sec-challenge','sec-role','sec-contributions',
     'sec-impact','sec-reflection'].forEach(hide);
    return;
  }
  renderExperience(exp);
})();
