import { Sparkles } from "lucide-react";

export function StickyCTA() {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[min(96%,520px)] -translate-x-1/2 md:bottom-6">
      <a
        href="#offer"
        className="group flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-4 text-sm font-semibold text-primary-foreground shadow-glow animate-pulse-glow"
      >
        <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12" />
        Get Instant Access — 70% Off Today
      </a>
    </div>
  );
}
