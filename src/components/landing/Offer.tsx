import { useEffect, useState } from "react";
import { Download, Tag } from "lucide-react";

const STORAGE_KEY = "ucb_offer_expires_at";
const DURATION_MS =
  7 * 24 * 60 * 60 * 1000 +
  23 * 60 * 60 * 1000 +
  59 * 60 * 1000 +
  59 * 1000;

function getExpiry(): number {
  if (typeof window === "undefined") return Date.now() + DURATION_MS;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  const parsed = stored ? parseInt(stored, 10) : NaN;
  if (!parsed || isNaN(parsed) || parsed <= Date.now()) {
    const next = Date.now() + DURATION_MS;
    window.localStorage.setItem(STORAGE_KEY, String(next));
    return next;
  }
  return parsed;
}

function usePersistentCountdown() {
  const [remaining, setRemaining] = useState(DURATION_MS);

  useEffect(() => {
    const expiry = getExpiry();
    const tick = () => {
      const diff = expiry - Date.now();
      if (diff <= 0) {
        window.localStorage.removeItem(STORAGE_KEY);
        setRemaining(0);
      } else {
        setRemaining(diff);
      }
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  const total = Math.max(0, Math.floor(remaining / 1000));
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return { d, h, m, s };
}

function Cell({ value, label }: { value: number; label: string }) {
  return (
    <div className="rounded-2xl glass-strong px-5 py-3 text-center min-w-[78px] transition-all duration-500">
      <p className="text-3xl font-bold tabular-nums">{String(value).padStart(2, "0")}</p>
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
    </div>
  );
}

export function Offer() {
  const { d, h, m, s } = usePersistentCountdown();
  return (
    <section id="offer" className="relative py-24">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] glass-strong p-8 md:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/40 blur-3xl animate-glow-orb" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-lavender/40 blur-3xl animate-glow-orb" />

          <div className="relative text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-4 py-1.5 text-xs font-bold text-primary-foreground shadow-glow">
              <Tag className="h-3.5 w-3.5" /> 70% OFF — Today Only
            </span>
            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              Get Instant Access Before <span className="text-gradient">The Discount Ends</span>
            </h2>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Cell value={d} label="Days" />
              <Cell value={h} label="Hours" />
              <Cell value={m} label="Minutes" />
              <Cell value={s} label="Seconds" />
            </div>

            <div className="mt-8 flex flex-col items-center gap-2">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl text-muted-foreground line-through">$49</span>
                <span className="text-5xl font-bold text-gradient">$14</span>
              </div>
              <p className="text-xs text-muted-foreground">One-time payment · Lifetime access</p>
            </div>

            <a
              href="https://ultravault.gumroad.com/l/ojzsml"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow animate-pulse-glow transition hover:scale-[1.03]"
            >
              <Download className="h-4 w-4" />
              Get The Bundle Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
