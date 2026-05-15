import { Utensils, Brain, Scissors, HeartHandshake, Sparkles, Lock } from "lucide-react";

const tips = [
  { icon: Utensils, title: "Feeding Guide", text: "The exact daily portions, treats schedule, and foods to avoid." },
  { icon: Brain, title: "Understanding Behavior", text: "Decode tail flicks, slow blinks, and midnight zoomies." },
  { icon: Scissors, title: "Grooming Tips", text: "Stress-free brushing, nail trims, and bath alternatives." },
  { icon: HeartHandshake, title: "Keeping Cats Happy", text: "Enrichment, play, and bonding rituals that work." },
  { icon: Sparkles, title: "Beginner Cat Care", text: "Everything a new cat parent needs in week one." },
];

export function CareGuide() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      {/* PDF mockup */}
      <div className="relative mx-auto w-full max-w-md">
        <div className="absolute -inset-8 rounded-[2.5rem] bg-[image:var(--gradient-primary)] opacity-30 blur-3xl" />
        <div className="relative grid grid-cols-2 gap-3">
          <div className="aspect-[3/4] rounded-2xl glass-strong p-4 shadow-card animate-float">
            <div className="h-2 w-2/3 rounded-full bg-primary/60" />
            <div className="mt-2 h-2 w-1/2 rounded-full bg-white/20" />
            <div className="mt-4 h-24 rounded-lg bg-[image:var(--gradient-primary)] opacity-70" />
            <div className="mt-3 space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-white/15" />
              <div className="h-1.5 w-5/6 rounded-full bg-white/15" />
              <div className="h-1.5 w-4/6 rounded-full bg-white/15" />
            </div>
            <p className="mt-4 text-[10px] uppercase tracking-widest text-primary">Chapter 01</p>
          </div>
          <div className="aspect-[3/4] translate-y-6 rounded-2xl glass-strong p-4 shadow-card animate-float-slow">
            <div className="h-24 rounded-lg bg-lavender/40" />
            <div className="mt-3 h-2 w-2/3 rounded-full bg-white/30" />
            <div className="mt-2 space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-white/15" />
              <div className="h-1.5 w-3/4 rounded-full bg-white/15" />
              <div className="h-1.5 w-2/3 rounded-full bg-white/15" />
            </div>
            <p className="mt-4 text-[10px] uppercase tracking-widest text-accent">Behavior</p>
          </div>
          <div className="col-span-2 relative aspect-[16/9] overflow-hidden rounded-2xl glass-strong p-4">
            <div className="absolute inset-0 backdrop-blur-md" />
            <div className="relative flex h-full items-center justify-center gap-2 text-sm text-muted-foreground">
              <Lock className="h-4 w-4" /> 38 more pages locked
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {tips.map(({ icon: Icon, title, text }) => (
          <div key={title} className="group flex gap-4 rounded-2xl glass p-4 hover-lift">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold">{title}</p>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
        <p className="pt-2 text-center text-sm font-medium text-primary">
          Complete Cat Care Secrets Available Inside ✨
        </p>
      </div>
    </div>
  );
}
