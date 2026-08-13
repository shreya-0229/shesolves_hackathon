import { ArrowRight, ArrowDown, CalendarDays, MapPin, Users, Trophy } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { EVENT } from "@/config/event";
import { Reveal } from "./Reveal";

const CHIPS = ["Women in Tech", "Innovation", "Collaboration", "Impact"];

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-svh items-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 size-full object-cover opacity-60"
      />
      <div
        className="absolute inset-0 -z-10 grid-bg opacity-40"
        style={{ maskImage: "radial-gradient(70% 60% at 50% 40%, #000, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-background to-transparent" />

      {/* floating nodes */}
      <span className="animate-float-slow absolute left-[12%] top-[22%] -z-10 size-2 rounded-full bg-primary shadow-[0_0_24px_6px_var(--primary)]" />
      <span className="animate-float-slow absolute right-[16%] top-[32%] -z-10 size-1.5 rounded-full bg-accent shadow-[0_0_22px_6px_var(--violet)] [animation-delay:1.4s]" />
      <span className="animate-float-slow absolute bottom-[22%] left-[24%] -z-10 size-1.5 rounded-full bg-silver/70 [animation-delay:2.6s]" />

      <div className="mx-auto w-full max-w-5xl px-5 pb-20 pt-28 text-center sm:px-8">
        <Reveal>
          <p className="mx-auto max-w-2xl font-display text-[0.65rem] uppercase leading-relaxed tracking-[0.28em] text-muted-foreground sm:text-xs">
            {EVENT.institute}
            <br />
            {EVENT.department}
            <br />
            <span className="text-primary">In association with ACM-W</span>
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-7 font-display text-5xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl">
            <span className="text-gradient">SheSolves</span>{" "}
            <span className="text-foreground/90">2026</span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-5 font-display text-lg font-medium tracking-[0.18em] text-silver sm:text-2xl">
            Code. Create. Empower.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {EVENT.description}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={EVENT.registrationUrl}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-all hover:glow-ring hover:brightness-110 sm:w-auto"
            >
              Register Now <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#about"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold text-foreground transition-colors hover:bg-secondary sm:w-auto"
            >
              Explore Event <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={380}>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
            {CHIPS.map((c, i) => (
              <li key={c} className="flex items-center gap-3">
                <span>{c}</span>
                {i < CHIPS.length - 1 && <span className="text-primary">•</span>}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

const INFO = [
  { icon: CalendarDays, label: "Date", value: EVENT.dates },
  { icon: MapPin, label: "Venue", value: EVENT.venue },
  { icon: Users, label: "Team Size", value: EVENT.teamSize },
  { icon: Trophy, label: "Prize Pool", value: EVENT.prizePool },
];

export function InfoBar() {
  return (
    <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-5 sm:px-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {INFO.map((item, i) => (
          <Reveal key={item.label} delay={i * 80}>
            <div className="glass group h-full rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:glow-ring">
              <item.icon className="size-5 text-primary transition-colors group-hover:text-accent" aria-hidden="true" />
              <p className="mt-4 text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-1.5 font-display text-base font-semibold leading-snug">{item.value}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
