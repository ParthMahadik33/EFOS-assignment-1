import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, Mail, MapPin, Mountain } from "lucide-react";
import heroPhoto from "@/assets/parth-hero.jpeg";
import greenMountains from "@/assets/green-mountains.jpg";
import cloud from "@/assets/cloud.png";
import { FloatingChat } from "@/components/FloatingChat";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Parth Mahadik — Among the Green Mountains" },
      { name: "description", content: "Personal site of Parth Mahadik — builder, wanderer of cloud-wrapped green ridges." },
      { property: "og:title", content: "Parth Mahadik" },
      { property: "og:description", content: "Personal site of Parth Mahadik — builder, wanderer of cloud-wrapped green ridges." },
      { property: "og:image", content: heroPhoto },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,ital,wght@9..144,0,300;9..144,0,400;9..144,1,300;9..144,1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
      { rel: "canonical", href: "/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Contact />
      <Footer />
      <FloatingChat />
    </main>
  );
}

function Clouds() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <img src={cloud} alt="" aria-hidden className="absolute top-[8%] left-0 w-[55%] max-w-[700px] opacity-80 animate-drift-slow" />
      <img src={cloud} alt="" aria-hidden className="absolute top-[28%] left-0 w-[40%] max-w-[500px] opacity-60 animate-drift-med" style={{ animationDelay: "-15s" }} />
      <img src={cloud} alt="" aria-hidden className="absolute top-[55%] left-0 w-[45%] max-w-[600px] opacity-70 animate-drift-fast" style={{ animationDelay: "-25s" }} />
      <img src={cloud} alt="" aria-hidden className="absolute top-[72%] left-0 w-[35%] max-w-[450px] opacity-50 animate-drift-slow" style={{ animationDelay: "-40s" }} />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden">
      {/* Mountain backdrop */}
      <div className="absolute inset-0">
        <img
          src={greenMountains}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-background" />
      </div>

      <Clouds />

      <nav className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <span className="flex items-center gap-2 font-display text-lg tracking-wide text-forest">
          <Mountain className="h-5 w-5" strokeWidth={1.5} />
          Parth Mahadik
        </span>
        <div className="hidden gap-8 text-sm text-forest/80 md:flex">
          <a href="#about" className="transition hover:text-forest">About</a>
          <a href="#contact" className="transition hover:text-forest">Contact</a>
        </div>
      </nav>

      <div className="relative z-20 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-12 px-6 pb-20 pt-4 md:grid-cols-12 md:gap-10 md:px-10 md:pb-28">
        <div className="animate-float-up md:col-span-7">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-moss">— Western Ghats · 2025</p>
          <h1 className="font-display text-5xl leading-[1.02] text-forest md:text-7xl lg:text-[5.5rem]">
            Among the
            <br />
            <em className="italic text-leaf">green mountains,</em>
            <br />
            above the clouds.
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-forest/75">
            I'm Parth — a developer who builds at sea level and breathes at altitude.
            This is a little corner of the internet where the air feels lighter.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-canopy-gradient px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:scale-[1.02]"
            >
              Say hello
            </a>
            <a href="#about" className="flex items-center gap-2 text-sm text-forest/80 transition hover:text-forest">
              Scroll down <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-float-up md:col-span-5 md:max-w-none" style={{ animationDelay: "0.2s" }}>
          <div className="absolute -inset-8 -z-10 rounded-full bg-white/30 blur-3xl animate-sway" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-white/50">
            <img
              src={heroPhoto}
              alt="Parth Mahadik sitting on a misty mountain summit"
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-forest/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/95">
              <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> HarishchandraGad, Kokan Kada</span>
              <span className="font-display italic">1,646 m</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-fade-bottom" />
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <img src={cloud} alt="" aria-hidden className="absolute top-20 left-0 w-[40%] opacity-40 animate-drift-slow" />
        <img src={cloud} alt="" aria-hidden className="absolute bottom-20 right-0 w-[35%] opacity-40 animate-drift-med" style={{ animationDelay: "-20s" }} />
      </div>
      <div className="relative mx-auto max-w-5xl px-6 py-28 md:px-10 md:py-40">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-moss">About</p>
        <h2 className="font-display text-4xl leading-[1.1] text-forest md:text-6xl">
          Building <em className="italic text-leaf">quietly</em>, climbing
          slowly, learning always.
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6 text-base leading-relaxed text-forest/75 md:text-lg">
            <p>
              I work where design meets code — making digital things that feel
              as open and considered as a long ridge walk. Less noise, more
              breathing room, more green.
            </p>
            <p>
              Off the desk, you'll find me chasing fog at the top of a Sahyadri
              peak, journaling beside a fire, or planning the next trail with a
              cup of cutting chai going cold in my hand.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { k: "College", v: "TCOER, Pune" },
              { k: "Year", v: "Second Year" },
              { k: "Currently based", v: "Pune, IN" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl border border-border bg-card/70 p-5 backdrop-blur">
                <div className="font-display text-3xl text-leaf">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-moss">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sending, setSending] = useState(false);
  return (
    <section id="contact" className="relative overflow-hidden bg-canopy-gradient">
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <img src={cloud} alt="" aria-hidden className="absolute top-10 left-0 w-[45%] opacity-80 animate-drift-slow" />
        <img src={cloud} alt="" aria-hidden className="absolute top-1/2 left-0 w-[35%] opacity-60 animate-drift-med" style={{ animationDelay: "-18s" }} />
        <img src={cloud} alt="" aria-hidden className="absolute bottom-10 left-0 w-[50%] opacity-70 animate-drift-fast" style={{ animationDelay: "-30s" }} />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 py-28 md:px-10 md:py-40">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/70">Contact</p>
        <h2 className="font-display text-4xl leading-[1.1] text-white md:text-6xl">
          Send a postcard
          <br />
          <em className="italic text-white/85">from your altitude.</em>
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSending(true);
            setTimeout(() => {
              setSending(false);
              toast.success("Message sent — talk soon.");
              (e.target as HTMLFormElement).reset();
            }, 700);
          }}
          className="mt-12 space-y-6 rounded-3xl border border-white/30 bg-white/85 p-8 shadow-soft backdrop-blur md:p-10"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Name" name="name" type="text" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-moss">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full resize-none rounded-2xl border border-border bg-background/60 px-4 py-3 text-foreground outline-none transition focus:border-primary focus:bg-background"
              placeholder="What's on your mind?"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <a href="mailto:hello@parthmahadik.com" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-forest">
              <Mail className="h-4 w-4" /> hello@parthmahadik.com
            </a>
            <button
              type="submit"
              disabled={sending}
              className="rounded-full bg-canopy-gradient px-7 py-3 text-sm font-medium text-primary-foreground shadow-soft transition hover:scale-[1.02] disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-widest text-moss">{label}</label>
      <input
        {...rest}
        className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-foreground outline-none transition focus:border-primary focus:bg-background"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-10 text-center text-xs text-muted-foreground md:px-10">
      © {new Date().getFullYear()} Parth Mahadik — made among green hills and drifting clouds.
    </footer>
  );
}
