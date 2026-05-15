const stories = [
  {
    title: "Luna's Window",
    body: "Every night, Luna waited beside the window for her owner to come home. The streetlamp would cast a soft amber glow on her tiny paws as she watched each car pass — patient, hopeful, completely in love…",
  },
  {
    title: "Oliver's Rescue",
    body: "Oliver was rescued from the streets, but he ended up rescuing his human instead. On the hardest nights, when the world felt heavy, his quiet purr would settle beside her chest like a small heartbeat saying: you are not alone…",
  },
];

export function StoriesPreview() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {stories.map((s) => (
        <article
          key={s.title}
          className="group relative overflow-hidden rounded-3xl glass-strong p-8 hover-lift"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Story</p>
          <h3 className="mt-2 text-2xl font-semibold">{s.title}</h3>
          <p className="mt-4 font-display text-lg leading-relaxed text-foreground/85 mask-fade-bottom">
            {s.body}
          </p>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card/80 to-transparent" />
        </article>
      ))}
      <div className="md:col-span-2 text-center">
        <span className="inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-sm font-medium">
          + 48 More Heartwarming Stories 💌
        </span>
      </div>
    </div>
  );
}
