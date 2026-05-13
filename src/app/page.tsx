import Link from "next/link";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Structured assessments",
    body: "Candidates work through role-specific evaluations that test the fundamentals an employer would actually probe in a first-round screen.",
  },
  {
    number: "02",
    title: "Practical tasks",
    body: "Real-world deliverables, scoped to the job they want — not trivia, not multiple choice. Output is reviewed against a fixed rubric.",
  },
  {
    number: "03",
    title: "Interviews",
    body: "Live conversations confirm communication, depth, and judgment. The same questions, scored the same way, for everyone.",
  },
  {
    number: "04",
    title: "A standardized score",
    body: "Every candidate receives one comparable score. Employers see a verified signal instead of a CV they have to take on faith.",
  },
];

const audiences = [
  {
    label: "For employers",
    headline: "Stop hiring on guesswork.",
    body: "Every candidate in the pipeline has been assessed, tasked, and interviewed against the same rubric. You see verified evidence of capability before you ever open a calendar.",
    cta: { label: "Hire verified talent", href: "#contact" },
  },
  {
    label: "For candidates",
    headline: "Prove what you can actually do.",
    body: "If you meet the bar, you become discoverable to employers who are actively hiring. If you don't, you get specific, AI-generated guidance on what to improve — and a clean retake after 14 days.",
    cta: { label: "Get verified", href: "#contact" },
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            SkillBridge
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground sm:flex">
            <a href="#how-it-works" className="hover:text-foreground">
              How it works
            </a>
            <a href="#audiences" className="hover:text-foreground">
              Who it&apos;s for
            </a>
            <a href="#contact" className="hover:text-foreground">
              Contact
            </a>
          </nav>
          <Button asChild size="sm">
            <a href="#contact">Get started</a>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="border-b border-border/60">
          <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
            <p className="mb-6 text-sm font-medium tracking-wide text-muted-foreground uppercase">
              A verified talent pipeline for Africa
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
              Hiring early-career talent shouldn&apos;t come down to a CV you
              can&apos;t verify.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              SkillBridge evaluates early-career professionals through
              structured assessments, practical tasks, and interviews — then
              makes them discoverable to employers only when they&apos;re
              job-ready.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#contact">Hire verified talent</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">Get verified as a candidate</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="border-b border-border/60 bg-muted/40">
          <div className="mx-auto w-full max-w-6xl px-6 py-24">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div>
                <p className="mb-4 text-sm font-medium tracking-wide text-muted-foreground uppercase">
                  The problem
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                  Employers are hiring on unverified CVs.
                </h2>
              </div>
              <div className="space-y-5 text-lg leading-8 text-muted-foreground">
                <p>
                  A CV is a claim. It tells you what someone says they can do,
                  not what they actually can. For early-career roles — where
                  references are thin and credentials are noisy — that gap is
                  expensive.
                </p>
                <p>
                  Capable talent has no credible way to prove their ability.
                  Employers spend weeks filtering candidates who shouldn&apos;t
                  have made it past the first stage. Both sides lose.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="border-b border-border/60">
          <div className="mx-auto w-full max-w-6xl px-6 py-24">
            <div className="mb-16 max-w-2xl">
              <p className="mb-4 text-sm font-medium tracking-wide text-muted-foreground uppercase">
                How it works
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Four steps to a verified, comparable signal.
              </h2>
            </div>
            <ol className="grid gap-8 sm:grid-cols-2">
              {steps.map((step) => (
                <li
                  key={step.number}
                  className="rounded-2xl border border-border/60 bg-card p-8"
                >
                  <span className="font-mono text-sm text-muted-foreground">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-b border-border/60 bg-muted/40">
          <div className="mx-auto w-full max-w-6xl px-6 py-24">
            <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
              <div>
                <p className="mb-4 text-sm font-medium tracking-wide text-muted-foreground uppercase">
                  When candidates fall short
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                  Rejection that actually helps.
                </h2>
              </div>
              <div className="space-y-5 text-lg leading-8 text-muted-foreground">
                <p>
                  Most platforms tell candidates &quot;no&quot; and stop there.
                  SkillBridge generates targeted, AI-driven guidance pinpointing
                  what to work on, with a clean retake window after 14 days.
                </p>
                <p>
                  Over time, the pipeline doesn&apos;t just filter talent — it
                  raises the floor.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="audiences" className="border-b border-border/60">
          <div className="mx-auto grid w-full max-w-6xl gap-px bg-border/60 md:grid-cols-2">
            {audiences.map((audience) => (
              <div key={audience.label} className="bg-background p-10 sm:p-14">
                <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
                  {audience.label}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {audience.headline}
                </h3>
                <p className="mt-4 leading-7 text-muted-foreground">
                  {audience.body}
                </p>
                <Button asChild className="mt-8" variant="outline">
                  <a href={audience.cta.href}>{audience.cta.label}</a>
                </Button>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
            <div className="rounded-3xl border border-border/60 bg-card p-10 sm:p-16">
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
                Build a hiring pipeline you can trust.
              </h2>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                Whether you&apos;re hiring or being hired, SkillBridge replaces
                guesswork with a verified, standardized score.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href="mailto:hello@skillbridge.africa">Talk to our team</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="mailto:hello@skillbridge.africa">
                    Join the waitlist
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} SkillBridge. All rights reserved.
          </p>
          <p>Verified talent for early-career roles across Africa.</p>
        </div>
      </footer>
    </div>
  );
}
