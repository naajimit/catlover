import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { Bundle } from "@/components/landing/Bundle";
import { CaptionsPreview } from "@/components/landing/CaptionsPreview";
import { WallpaperSlider } from "@/components/landing/WallpaperSlider";
import { CareGuide } from "@/components/landing/CareGuide";
import { StoriesPreview } from "@/components/landing/StoriesPreview";
import { Benefits } from "@/components/landing/Benefits";
import { Counters } from "@/components/landing/Counters";

import { Offer } from "@/components/landing/Offer";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ultimate Cat Lover Bundle — 1000 Captions, 150 HD Wallpapers & More" },
      {
        name: "description",
        content:
          "Get 1000 viral cat captions, 150 HD wallpapers, a cat care PDF and 50 heartwarming stories — instantly. The ultimate digital bundle for cat lovers.",
      },
      { property: "og:title", content: "Ultimate Cat Lover Bundle 🐱" },
      {
        property: "og:description",
        content:
          "1000 captions • 150 HD wallpapers • Cat care guide • 50 heartwarming stories. Instant download.",
      },
    ],
  }),
});

function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-bold md:text-5xl">{title}</h2>
      {sub ? <p className="mt-3 text-muted-foreground">{sub}</p> : null}
    </div>
  );
}

function Index() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <Counters />
      <Bundle />

      <section id="preview" className="py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Free Preview"
            title={<>Try the bundle <span className="text-gradient">before you buy</span></>}
            sub="Real samples from inside. No email required."
          />
          <CaptionsPreview />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Wallpapers"
            title={<>Preview some of the <span className="text-gradient">150 HD wallpapers</span></>}
            sub="Unlock the full wallpaper collection instantly."
          />
        </div>
        <WallpaperSlider />
      </section>

      <section className="py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Cat Care Guide"
            title={<>A beautiful <span className="text-gradient">cat care PDF</span> you'll actually read</>}
          />
          <CareGuide />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Stories"
            title={<>Cozy reading for <span className="text-gradient">cat lovers</span></>}
          />
          <StoriesPreview />
        </div>
      </section>

      <Benefits />
      <Offer />
      <FinalCTA />
      <Footer />
    </main>
  );
}
