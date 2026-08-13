import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  HeartPulse,
  GraduationCap,
  Leaf,
  ShieldCheck,
  Rocket,
  Sparkles,
  Lightbulb,
  Code2,
  Handshake,
  Mic,
  Trophy,
  TrendingUp,
  Award,
  Medal,
  BadgeCheck,
  Presentation,
  type LucideIcon,
} from "lucide-react";
import aboutVisual from "@/assets/about-visual.jpg";
import { BENEFITS, EVENT, FAQS, ROUNDS, SCHEDULE, TRACKS } from "@/config/event";
import { Reveal } from "./Reveal";

const ICONS: Record<string, LucideIcon | undefined> = {
  HeartPulse,
  GraduationCap,
  Leaf,
  ShieldCheck,
  Rocket,
  Sparkles,
  Lightbulb,
  Code2,
  Handshake,
  Mic,
  Trophy,
  TrendingUp,
};

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-[0.65rem] uppercase tracking-[0.28em] text-primary sm:text-xs">{children}</p>
  );
}

/* ─────────────────────────── About ─────────────────────────── */

const STATS = ["Women Innovators", "Multiple Rounds", "Real-World Problems", "One Winning Idea"];

export function About() {
  return (
    <section id="about" className="section-y mx-auto max-w-7xl px-5 sm:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow>About SheSolves</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
              Where Ideas Meet <span className="text-gradient">Impact</span>
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              SheSolves is a women-only hackathon designed to provide women in technology with a
              platform to think boldly, build creatively and solve real-world problems. From the
              first spark of an idea to a working solution, participants collaborate, code and
              present their innovations in a competitive yet empowering environment.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="mt-9 grid grid-cols-2 gap-3">
              {STATS.map((s) => (
                <li
                  key={s}
                  className="rounded-xl border border-border bg-surface/60 px-4 py-4 font-display text-sm font-semibold transition-colors hover:border-primary/50"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="relative">
            <div className="absolute inset-2 -z-10 rounded-[2rem] opacity-70 blur-3xl" style={{ background: "var(--gradient-hero)" }} />
            <img
              src={aboutVisual}
              alt="Abstract illustration of a woman's profile formed from glowing circuit lines"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full rounded-3xl border border-border object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ────────────────────────── Journey ────────────────────────── */

export function Journey() {
  return (
    <section id="journey" className="section-y relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <Eyebrow>The Rounds</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold sm:text-5xl">
            The SheSolves <span className="text-gradient">Journey</span>
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <div
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent lg:left-0 lg:top-6 lg:h-px lg:w-full lg:bg-gradient-to-r"
            aria-hidden="true"
          />
          <ol className="grid gap-8 lg:grid-cols-4 lg:gap-6">
            {ROUNDS.map((r, i) => (
              <li key={r.id} className="relative pl-12 lg:pl-0">
                <Reveal delay={i * 90}>
                  <span className="animate-pulse-glow absolute left-[0.6rem] top-2 size-3 rounded-full bg-primary shadow-[0_0_18px_5px_color-mix(in_oklab,var(--primary)_60%,transparent)] lg:static lg:mb-6 lg:block" />
                  <div className="glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:glow-ring lg:mt-0">
                    <p className="font-display text-4xl font-bold text-silver/25 transition-colors group-hover:text-primary/60">
                      {r.id}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-semibold">{r.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Schedule ───────────────────────── */

export function Schedule() {
  return (
    <section id="schedule" className="section-y mx-auto max-w-5xl px-5 sm:px-8">
      <Reveal>
        <Eyebrow>Event Schedule</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
          The Road to <span className="text-gradient">SheSolves</span>
        </h2>
      </Reveal>

      <ol className="relative mt-12 space-y-4 border-l border-border pl-8">
        {SCHEDULE.map((s, i) => (
          <li key={s.title} className="relative">
            <span className="absolute -left-[2.35rem] top-6 size-2.5 rounded-full bg-accent shadow-[0_0_14px_4px_color-mix(in_oklab,var(--violet)_50%,transparent)]" />
            <Reveal delay={i * 70}>
              <div className="glass flex flex-col gap-2 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:glow-ring sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.mode}</p>
                </div>
                <span className="shrink-0 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-widest text-silver">
                  {s.date}
                </span>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-xs text-muted-foreground">
        Exact dates and timings will be published by the organizing committee.
      </p>
    </section>
  );
}

/* ─────────────────────────── Tracks ────────────────────────── */

export function Tracks() {
  return (
    <section id="tracks" className="section-y mx-auto max-w-7xl px-5 sm:px-8">
      <Reveal>
        <Eyebrow>Tracks &amp; Domains</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
          What Will You <span className="text-gradient">Solve?</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TRACKS.map((t, i) => {
          const Icon = ICONS[t.icon] ?? Sparkles;
          return (
            <Reveal key={t.title} delay={i * 70}>
              <article className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:glow-ring">
                <div
                  className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: "var(--primary)" }}
                />
                <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-surface text-primary transition-colors group-hover:text-accent">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ────────────────────── Why participate ────────────────────── */

export function WhyParticipate() {
  return (
    <section id="why" className="section-y mx-auto max-w-7xl px-5 sm:px-8">
      <Reveal>
        <Eyebrow>Why Participate</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
          More Than a <span className="text-gradient">Hackathon</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((b, i) => {
          const Icon = ICONS[b.icon] ?? Sparkles;
          return (
            <Reveal key={b.title} delay={i * 60}>
              <article className="group h-full rounded-2xl border border-border bg-surface/50 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-surface">
                <Icon
                  className="size-6 text-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
                  aria-hidden="true"
                />
                <h3 className="mt-5 font-display text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ───────────────────────── Statement ───────────────────────── */

export function Statement() {
  return (
    <section className="relative isolate overflow-hidden py-28 sm:py-40">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" aria-hidden="true" />
      <div
        className="animate-pulse-glow absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            She doesn&apos;t wait for change.
            <br />
            <span className="text-gradient">She builds it.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-2xl leading-relaxed text-muted-foreground">
            From an idea on paper to a solution that works in the real world — SheSolves gives women
            the space, challenge and community to make it happen.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────── Prizes ────────────────────────── */

const RECOGNITION = [
  { icon: Medal, title: "Winner", body: "Top team of SheSolves 2026." },
  { icon: Award, title: "Runner-up", body: "Second-placed team of the finale." },
  { icon: BadgeCheck, title: "Recognition", body: "Certificates for participating teams." },
  { icon: Presentation, title: "Showcase", body: "Opportunities for showcasing innovation." },
];

export function Prizes() {
  return (
    <section className="section-y mx-auto max-w-7xl px-5 sm:px-8">
      <Reveal>
        <Eyebrow>Prizes &amp; Recognition</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
          Build. Compete. <span className="text-gradient">Win.</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1.4fr]">
        <Reveal>
          <div className="glass relative flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl p-10 text-center glow-ring">
            <div
              className="absolute inset-0 -z-10 opacity-70"
              style={{ background: "var(--gradient-hero)" }}
              aria-hidden="true"
            />
            <Trophy className="size-9 text-accent" aria-hidden="true" />
            <p className="mt-6 text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Total Prize Pool
            </p>
            <p className="mt-3 font-display text-6xl font-bold text-gradient sm:text-7xl">
              {EVENT.prizePool}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {RECOGNITION.map((r, i) => (
            <Reveal key={r.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-border bg-surface/50 p-6 transition-colors hover:border-accent/50">
                <r.icon className="size-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-semibold">{r.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── Registration ─────────────────────── */

export function Register() {
  return (
    <section id="register" className="section-y mx-auto max-w-7xl px-5 sm:px-8">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12">
          <div
            className="absolute inset-0 -z-10 opacity-80"
            style={{ background: "var(--gradient-hero)" }}
            aria-hidden="true"
          />
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            Ready to Make Her Idea <span className="text-gradient">Solve?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Your idea could be the next solution that makes an impact.
          </p>
          {EVENT.registrationOpen ? (
            <a
              href={EVENT.registrationUrl}
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-9 py-4 font-display text-base font-bold uppercase tracking-[0.14em] text-primary-foreground transition-all hover:glow-ring hover:brightness-110"
            >
              Register Now <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          ) : (
            <div className="mt-9 inline-flex flex-col items-center justify-center gap-3">
              <span className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/80 px-9 py-4 font-display text-base font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Registration Opening Soon
              </span>
              <p className="text-xs text-muted-foreground">
                Check back here or follow our socials for updates.
              </p>
            </div>
          )}
          <p className="mt-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Team Size: {EVENT.teamSize}
          </p>
        </div>
      </Reveal>
    </section>
  );
}

/* ───────────────────────────── FAQ ─────────────────────────── */

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-y mx-auto max-w-3xl px-5 sm:px-8">
      <Reveal>
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
          Questions, <span className="text-gradient">Answered</span>
        </h2>
      </Reveal>

      <div className="mt-10 space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} delay={i * 50}>
              <div className="overflow-hidden rounded-2xl border border-border bg-surface/50">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-semibold transition-colors hover:text-primary"
                >
                  {f.q}
                  <ChevronDown
                    className={`size-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ───────────────────────── Organizer ───────────────────────── */

export function Organizer() {
  return (
    <section className="section-y mx-auto max-w-4xl px-5 text-center sm:px-8">
      <Reveal>
        <Eyebrow>ACM-W Student Chapter</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
          Empowering Women in <span className="text-gradient">Computing</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          SheSolves 2026 is organized by the {EVENT.chapter}, under the {EVENT.department} of{" "}
          {EVENT.institute}. The chapter works to support, celebrate and advocate for women in
          computing through technical events, mentorship and community.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 font-display text-[0.65rem] uppercase tracking-[0.22em] text-silver sm:text-xs">
          {["PCET", "PCCOE", "Computer Engineering", "ACM", "ACM-W", "ANANTYA", "SheSolves"].map(
            (b) => (
              <span key={b} className="rounded-full border border-border px-4 py-2">
                {b}
              </span>
            ),
          )}
        </div>
      </Reveal>
    </section>
  );
}
