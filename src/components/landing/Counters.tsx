import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1600) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.floor(eased * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return { val, ref };
}

function Stat({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const { val, ref } = useCountUp(value);
  return (
    <div ref={ref} className="rounded-3xl glass p-6 text-center hover-lift">
      <p className="text-4xl font-bold text-gradient md:text-5xl">
        {val.toLocaleString()}{suffix}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function Counters() {
  return (
    <section className="py-12">
      <div className="container mx-auto grid max-w-5xl gap-4 px-6 sm:grid-cols-2 md:grid-cols-4">
        <Stat value={1000} label="Viral Captions" suffix="+" />
        <Stat value={150} label="HD Wallpapers" />
        <Stat value={50} label="Heartwarming Stories" />
        <Stat value={13} label="Chapter PDF Cat Care Guide" />
      </div>
    </section>
  );
}
