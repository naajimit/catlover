import { Download, Eye, ShieldCheck, Infinity as InfinityIcon, Zap } from "lucide-react";
import heroCat from "@/assets/cat-hero.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      {/* Glow orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/30 blur-[120px] animate-glow-orb" />
        <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-lavender/30 blur-[100px] animate-glow-orb" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blush/30 blur-[120px] animate-glow-orb" />
      </div>

      {/* Floating paw emojis */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
        <span className="absolute left-[8%] top-[18%] text-3xl opacity-60 animate-float">🐾</span>
        <span className="absolute left-[14%] top-[60%] text-2xl opacity-50 animate-float-slow">🐱</span>
        <span className="absolute right-[10%] top-[24%] text-4xl opacity-60 animate-float-slow">✨</span>
        <span className="absolute right-[16%] top-[68%] text-3xl opacity-60 animate-float">💕</span>
      </div>

      <div className="container mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-foreground/80">
            <Zap className="h-3.5 w-3.5 text-primary" />
            Limited-time discounted price
          </span>

          <h1 className="mt-6 text-3xl font-bold leading-[1.05] md:text-5xl lg:text-5xl">
            Have you ever found something that takes your entire{" "}
            <span className="text-gradient">Cat Lover</span> Feeling to another level
            <span className="ml-2 inline-block animate-float">🐱</span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
             where you get <span className="text-foreground font-semibold">1000 Viral Cat Captions,</span>,{" "}
            <span className="text-foreground font-semibold">150 HD Wallpapers</span> Cat Care Secrets, and Heartwarming Stories… all together with instant download access?</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://ultravault.gumroad.com/l/ojzsml"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03] hover:shadow-[0_0_40px_oklch(0.85_0.15_350/0.6)]"
            >
              <Download className="h-4 w-4" />
              Get Instant Access
            </a>
            <a
              href="#preview"
              className="inline-flex items-center gap-2 rounded-full glass-strong px-7 py-4 text-sm font-semibold text-foreground transition hover:bg-white/10"
            >
              <Eye className="h-4 w-4" />
              Preview Free Samples
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Download className="h-3.5 w-3.5 text-primary" /> Instant Download</span>
            <span className="inline-flex items-center gap-1.5"><InfinityIcon className="h-3.5 w-3.5 text-accent" /> Lifetime Access</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-mint" /> Digital Product</span>
          </div>
        </div>

        {/* Product mockup */}
        <div className="relative mx-auto w-full max-w-md animate-fade-up [animation-delay:200ms]">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-[image:var(--gradient-primary)] opacity-40 blur-3xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] glass-strong shadow-glow">
            <img
              src={heroCat}
              alt="Adorable kitten — Ultimate Cat Lover Bundle"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl glass p-4 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-widest text-primary">Digital Bundle</p>
              <p className="mt-1 text-lg font-semibold">Ultimate Cat Lover Bundle</p>
              <p className="text-xs text-muted-foreground">1000 Captions · 150 Wallpapers · PDFs · Stories</p>
            </div>
          </div>
          {/* floating mini cards */}
          <div className="absolute -left-6 top-10 hidden rounded-2xl glass-strong p-3 text-xs shadow-card animate-float md:block">
            <p className="font-semibold">🐾 1000+ Captions</p>
          </div>
          <div className="absolute -right-6 bottom-24 hidden rounded-2xl glass-strong p-3 text-xs shadow-card animate-float-slow md:block">
            <p className="font-semibold">📱 150 HD Wallpapers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
