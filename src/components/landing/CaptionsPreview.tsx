const captions = [
  "A tiny cat, but its love is huge.",
  "Cat Its love is selfless and unconditional.",
  "When the cat is beside me, loneliness gives up.",
  "I wake up with my cat’s permission.",
  "My cat stares like a boss 24/7.",
  "The cat is my wordless love.",
  "The cat is the sweetest problem of my life.",
  "Cat Its eyes hide a thousand loves.",
  "People leave, but my cat stays.",
  "It’s not just a cat, it’s the cure for my loneliness.",
  "Cat Its love needs no words.",
  "My cat is my silent comfort.",
];

export function CaptionsPreview() {
  return (
    <div className="relative">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {captions.map((c, i) => (
          <div
            key={c}
            className="group relative overflow-hidden rounded-2xl glass p-5 hover-lift"
          >
            <span className="absolute -left-2 -top-2 text-5xl text-primary/20">"</span>
            <p className="relative text-sm font-medium leading-relaxed text-foreground/90">
              {c}
            </p>
            <p className="mt-3 text-[10px] uppercase tracking-widest text-muted-foreground">
              Caption #{String(i + 1).padStart(2, "0")}
            </p>
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="relative mt-[-0rem] flex justify-center">
        <div className="rounded-full glass-strong px-6 py-3 text-sm font-semibold text-foreground shadow-glow">
          + 988 More Captions Inside The Bundle ✨
        </div>
      </div>
    </div>
  );
}
