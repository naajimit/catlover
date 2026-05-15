import { Mail, Download, PawPrint } from "lucide-react";

const faqs = [
  { q: "How do I receive the bundle?", a: "Instantly after checkout. You'll get a download link by email — no waiting." },
  { q: "What devices does it work on?", a: "Everything! iPhone, Android, iPad, Mac, PC. PDFs, JPGs and TXT files." },
  { q: "Do I keep it forever?", a: "Yes. Lifetime access to all current and future updates of the bundle." },
  { q: "Is there a refund policy?", a: "Because it's an instant digital product, all sales are final — but we're confident you'll love it." },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-20 pb-32">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">FAQ</p>
          <h3 className="mt-3 text-3xl font-bold md:text-4xl">Frequently asked</h3>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl glass p-5 open:shadow-glow">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold">
                {f.q}
                <span className="text-primary transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-3 rounded-2xl glass p-5">
            <Download className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-semibold">Instant Download</p>
              <p className="text-xs text-muted-foreground">Delivered the moment you check out.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl glass p-5">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-semibold">support@catloverbundle.com</p>
              <p className="text-xs text-muted-foreground">We reply within 24 hours.</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 border-t border-white/5 pt-8 text-center text-xs text-muted-foreground">
          <div className="flex items-center gap-2 text-foreground">
            <PawPrint className="h-4 w-4 text-primary" />
            <span className="font-semibold">Ultimate Cat Lover Bundle</span>
          </div>
          <p>© {new Date().getFullYear()} Cat Lover Bundle. Made with love for cat people everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
