import { Instagram, Linkedin, Github, Globe } from "lucide-react";
import { EVENT } from "@/config/event";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Tracks", href: "#tracks" },
  { label: "Why Participate", href: "#why" },
  { label: "Register", href: "#register" },
  { label: "FAQ", href: "#faq" },
];

const SOCIALS = [
  { label: "Instagram", href: EVENT.socials.instagram, icon: Instagram },
  { label: "LinkedIn", href: EVENT.socials.linkedin, icon: Linkedin },
  { label: "GitHub", href: EVENT.socials.github, icon: Github },
  { label: "Website", href: EVENT.socials.website, icon: Globe },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-bold text-gradient">SheSolves 2026</p>
          <p className="mt-2 font-display text-sm tracking-[0.18em] text-silver">
            Code. Create. Empower.
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {EVENT.chapter}
            <br />
            {EVENT.institute}
          </p>
          <a
            href={`mailto:${EVENT.contactEmail}`}
            className="mt-3 inline-block text-sm text-primary hover:underline"
          >
            {EVENT.contactEmail}
          </a>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Explore
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-1">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Follow
          </h2>
          <ul className="mt-4 flex gap-3">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <s.icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground sm:px-8">
        © 2026 SheSolves • ACM-W PCCOE
      </div>
    </footer>
  );
}
