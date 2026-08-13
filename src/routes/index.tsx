import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero, InfoBar } from "@/components/site/Hero";
import {
  About,
  Journey,
  Schedule,
  Tracks,
  WhyParticipate,
  Statement,
  Prizes,
  Register,
  Faq,
  Organizer,
} from "@/components/site/Sections";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SheSolves 2026 | Women-Only Hackathon by ACM-W PCCOE" },
      {
        name: "description",
        content:
          "SheSolves 2026 — a women-only hackathon by the ACM-W Student Chapter, PCCOE. Ideate, propose, build and present real-world tech solutions. Code. Create. Empower.",
      },
      { property: "og:title", content: "SheSolves 2026 | ACM-W PCCOE Women-Only Hackathon" },
      {
        property: "og:description",
        content:
          "A women-only hackathon where ideas transform into impactful technology solutions. Organized by ACM-W Student Chapter, PCCOE.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <InfoBar />
        <About />
        <Journey />
        <Schedule />
        <Tracks />
        <WhyParticipate />
        <Statement />
        <Prizes />
        <Register />
        <Faq />
        <Organizer />
      </main>
      <Footer />
    </div>
  );
}
