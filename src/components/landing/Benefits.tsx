import { Cat, Instagram, Smartphone, HeartPulse, Download, Gem } from "lucide-react";

const benefits = [
  { icon: Cat, title: "Perfect for Cat Lovers", desc: "Made by cat people, for cat people." },
  { icon: Instagram, title: "Great for Instagram Content", desc: "Captions that double your engagement." },
  { icon: Smartphone, title: "Cute Wallpapers Daily", desc: "A new lockscreen mood every day." },
  { icon: HeartPulse, title: "Emotional & Relaxing", desc: "Soft, cozy, and full of feelings." },
  { icon: Download, title: "Instant Digital Download", desc: "No waiting. Yours in seconds." },
  { icon: Gem, title: "Amazing Value", desc: "4 premium products, one tiny price." },
];

export function Benefits() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Why people love it</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Made to feel <span className="text-gradient">irresistibly cozy.</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, desc }) => {
            const isDownload = title === "Instant Digital Download";
            const inner = (
              <>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-glow transition group-hover:rotate-6">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </>
            );
            if (isDownload) {
              return (
                <a
                  key={title}
                  href="https://ultravault.gumroad.com/l/ojzsml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-3xl glass p-6 hover-lift transition hover:shadow-glow hover:ring-1 hover:ring-primary/40 cursor-pointer"
                >
                  {inner}
                </a>
              );
            }
            return (
              <div key={title} className="group rounded-3xl glass p-6 hover-lift">
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
