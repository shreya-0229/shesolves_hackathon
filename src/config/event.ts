/**
 * SheSolves 2026 — central event configuration.
 * Organizers: update everything here. No event data should be hardcoded elsewhere.
 * Values left as "To be announced" are intentionally unconfirmed — do not invent dates.
 */

export const EVENT = {
  name: "SheSolves 2026",
  tagline: "Code. Create. Empower.",
  description:
    "A women-only hackathon where ideas transform into impactful technology solutions.",
  institute: "PCET's Pimpri Chinchwad College of Engineering",
  department: "Department of Computer Engineering",
  chapter: "ACM-W Student Chapter, PCCOE",

  // ── Key details ──────────────────────────────────────────────
  dates: "To be announced",
  venue: "Pimpri Chinchwad College of Engineering, Pune",
  teamSize: "2–4 members",
  prizePool: "₹15,000",

  // ── Registration ─────────────────────────────────────────────
  registrationOpen: false,
  registrationUrl: "#register",

  // ── Contact & socials ────────────────────────────────────────
  contactEmail: "acmw@pccoepune.org",
  socials: {
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    website: "https://www.pccoepune.com/",
  },
} as const;

export const ROUNDS = [
  {
    id: "01",
    title: "Ideate",
    body: "Think about a meaningful real-world problem and develop an innovative solution.",
  },
  {
    id: "02",
    title: "Propose",
    body: "Present your idea, problem statement, approach and expected impact.",
  },
  {
    id: "03",
    title: "Build",
    body: "Turn your idea into a functional technology solution during the hackathon.",
  },
  {
    id: "04",
    title: "Present",
    body: "Demonstrate your project, explain your technical implementation and present its impact to the judges.",
  },
] as const;

/** Schedule — set `date` when the official dates are confirmed. */
export const SCHEDULE = [
  { title: "Registration & Ideation", mode: "Online", date: "To be announced" },
  { title: "Proposal Submission", mode: "Online", date: "To be announced" },
  { title: "Online Hackathon", mode: "24-hour development phase", date: "To be announced" },
  { title: "Offline Hackathon", mode: "On-campus development and refinement", date: "To be announced" },
  { title: "Final Presentation", mode: "Project demonstration + judging", date: "To be announced" },
  { title: "Winner Announcement", mode: "Celebrating the teams that made an impact", date: "To be announced" },
] as const;

export const TRACKS = [
  { icon: "HeartPulse", title: "Health", body: "Technology for better health and well-being." },
  { icon: "GraduationCap", title: "Education", body: "Making learning more accessible and effective." },
  { icon: "Leaf", title: "Environment", body: "Building technology for a sustainable future." },
  { icon: "ShieldCheck", title: "Safety", body: "Creating smarter and safer communities." },
  { icon: "Rocket", title: "Entrepreneurship", body: "Turning innovative ideas into scalable solutions." },
  { icon: "Sparkles", title: "Women Empowerment", body: "Technology that creates opportunities and impact." },
] as const;

export const BENEFITS = [
  { icon: "Lightbulb", title: "Build", body: "Turn your idea into a working solution." },
  { icon: "Code2", title: "Learn", body: "Strengthen your technical and problem-solving skills." },
  { icon: "Handshake", title: "Collaborate", body: "Work with talented women from different backgrounds." },
  { icon: "Mic", title: "Present", body: "Showcase your project to judges and industry/academic experts." },
  { icon: "Trophy", title: "Compete", body: "Challenge yourself and compete for exciting prizes." },
  { icon: "TrendingUp", title: "Grow", body: "Build confidence, leadership and innovation skills." },
] as const;

export const FAQS = [
  {
    q: "Who can participate?",
    a: "Women students eligible according to the official event rules.",
  },
  { q: "What is the team size?", a: "2–4 members." },
  {
    q: "Is this an online or offline event?",
    a: "The event follows a hybrid / multi-stage format.",
  },
  {
    q: "What can we build?",
    a: "Projects should align with the official tracks/domains and event problem statement requirements.",
  },
  {
    q: "Do I need to be an expert coder?",
    a: "No. Participants should be willing to learn, collaborate and build.",
  },
  {
    q: "What happens after registration?",
    a: "Participants follow the official event schedule, submit their proposal and shortlisted teams proceed through the hackathon rounds.",
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Schedule", href: "#schedule" },
  { label: "Tracks", href: "#tracks" },
  { label: "Why Participate", href: "#why" },
  { label: "FAQ", href: "#faq" },
] as const;
