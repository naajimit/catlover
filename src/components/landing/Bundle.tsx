import { MessageCircleHeart, Image as ImageIcon, BookOpen, Heart } from "lucide-react";

const items = [
  {
    icon: MessageCircleHeart,
    title: "1000 Viral Cat Captions",
    desc: "Funny, cute, emotional, Instagram-ready captions that turn likes into followers.",
    tint: "from-primary/30 to-blush/20",
  },
  {
    icon: ImageIcon,
    title: "150 HD Cat Wallpapers",
    desc: "Aesthetic, cute, cozy ultra-HD wallpapers for every phone & mood.",
    tint: "from-lavender/30 to-primary/20",
  },
  {
    icon: BookOpen,
    title: "Cat Care Guide PDF",
    desc: "Easy cat care: feeding, health, behavior & happiness, beautifully designed.",
    tint: "from-mint/30 to-lavender/20",
  },
  {
    icon: Heart,
    title: "50 Heartwarming Stories",
    desc: "Cute, emotional, relaxing stories every cat lover will fall in love with.",
    tint: "from-blush/30 to-primary/20",
  },
];

export function Bundle() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">What's Inside</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Four premium pieces. <span className="text-gradient">One magical bundle.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc, tint }, i) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl glass p-6 hover-lift"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${tint} blur-2xl transition group-hover:scale-125`} />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-glow">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
