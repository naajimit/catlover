import { PawPrint } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-28">
      <div className="container mx-auto max-w-4xl px-6 text-center">
        <PawPrint className="mx-auto h-10 w-10 text-primary animate-float" />
        <h2 className="mt-6 text-4xl font-bold md:text-6xl">
          Your Cat Obsession <span className="text-gradient">Deserves This Bundle</span> 🐾
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Download instantly and enjoy the ultimate cat lover experience today.
        </p>
        <a
          href="#offer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-8 py-5 text-base font-semibold text-primary-foreground shadow-glow animate-pulse-glow"
        >
          Get The Ultimate Cat Lover Bundle Now
        </a>
      </div>
    </section>
  );
}
