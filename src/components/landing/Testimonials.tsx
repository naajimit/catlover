import { BadgeCheck } from "lucide-react";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";

const reviews = [
  { name: "Emily R.", avatar: a1, text: "This bundle is insanely cute. The wallpapers alone are worth it!" },
  { name: "Sarah M.", avatar: a2, text: "I used the captions on Instagram and my engagement exploded." },
  { name: "Jessica T.", avatar: a3, text: "The stories are so heartwarming. I read one every night before bed." },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Loved by cat people</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Real cat lovers. <span className="text-gradient">Real reactions.</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-3xl glass-strong p-6 hover-lift">
              <p className="text-base leading-relaxed text-foreground/90">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={r.avatar}
                  alt={r.name}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/40"
                />
                <div>
                  <p className="flex items-center gap-1.5 text-sm font-semibold">
                    {r.name}
                    <BadgeCheck className="h-4 w-4 text-primary" />
                  </p>
                  <p className="text-xs text-muted-foreground">Verified buyer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
