import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import BackgroundEffects from "@/components/home/BackgroundEffects";
import {
  Reveal,
  Stagger,
  WordReveal,
} from "@/components/home/MotionPrimitives";
import { projectData } from "@/lib/projectData";
import { contactContent, heroContent, stackGroups } from "@/lib/siteContent";

function ActionLink({
  href,
  label,
  secondary = false,
  icon,
}: {
  href: string;
  label: string;
  secondary?: boolean;
  icon?: ReactNode;
}) {
  const baseClasses =
    "radius-control inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50";
  const opensInNewTab = !href.startsWith("#");

  return (
    <a
      href={href}
      target={opensInNewTab ? "_blank" : undefined}
      rel={opensInNewTab ? "noopener noreferrer" : undefined}
      className={
        secondary
          ? `${baseClasses} button-secondary border border-white/10 bg-white/[0.03] text-white/88 hover:border-white/20 hover:bg-white/[0.06]`
          : `${baseClasses} button-primary border border-white/12 bg-white text-black hover:bg-[#dde6ee]`
      }
    >
      <span>{label}</span>
      {icon}
    </a>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="icon-link radius-control inline-flex h-11 w-11 items-center justify-center border border-white/10 bg-white/[0.03] text-white/82 hover:border-white/20 hover:bg-white/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
    >
      {children}
    </a>
  );
}

function SectionIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="max-w-3xl">
      <p className="eyebrow mb-4">{label}</p>
      <h2 className="display-heading max-w-4xl text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-soft sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

export default function HomePage() {
  const [featuredProject, ...selectedProjects] = projectData;

  return (
    <div className="portfolio-shell">
      <div className="portfolio-backdrop" aria-hidden="true" />
      <div className="portfolio-grid" aria-hidden="true" />
      <BackgroundEffects />

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="relative z-10">
        <header className="mx-auto w-full max-w-[1200px] px-4 pt-6 sm:px-6 lg:px-8 lg:pt-8">
          <Reveal>
            <div className="surface-card radius-panel flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
              <div className="flex items-center gap-3">
                <div className="radius-control flex h-11 w-11 items-center justify-center border border-white/10 bg-white/[0.04]">
                  <Image
                    src="/signature-white.png"
                    alt="Andrew Vasquez initials"
                    width={54}
                    height={22}
                    priority
                    className="h-auto w-[3.4rem] brightness-125 contrast-125"
                  />
                </div>
                <div>
                  <p className="eyebrow mb-1">Andrew Vasquez</p>
                  <p className="text-sm text-soft sm:text-[0.95rem]">
                    Frontend and full-stack developer
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <SocialLink
                  href="https://github.com/andrew-vasquez"
                  label="View Andrew Vasquez on GitHub"
                >
                  <Github className="h-4 w-4" />
                </SocialLink>
                <SocialLink
                  href="https://www.linkedin.com/in/andrew-vasquez-000434237/"
                  label="View Andrew Vasquez on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </SocialLink>
                <SocialLink href="mailto:avasdev98@gmail.com" label="Email Me">
                  <Mail className="h-4 w-4" />
                </SocialLink>
              </div>
            </div>
          </Reveal>
        </header>

        <main
          id="main-content"
          className="mx-auto flex w-full max-w-[1200px] flex-col gap-16 px-4 pb-20 pt-8 sm:px-6 sm:pb-24 lg:gap-20 lg:px-8 lg:pt-12"
        >
          <section className="relative">
            <Reveal>
              <div className="radius-chip mb-6 inline-flex border border-white/10 bg-white/[0.03] px-4 py-2">
                <p className="eyebrow text-[0.68rem] text-white/72">
                  {heroContent.pill}
                </p>
              </div>
            </Reveal>

            <WordReveal
              lines={heroContent.lines}
              delay={0.12}
              className="hero-title max-w-3xl text-[clamp(2.6rem,6.2vw,4.9rem)] font-semibold text-white"
            />

            <Reveal className="mt-5 max-w-2xl" delay={0.24}>
              <p className="text-base leading-8 text-soft sm:text-lg">
                {heroContent.description}
              </p>
            </Reveal>

            <Reveal
              className="mt-8 flex flex-wrap items-center gap-3"
              delay={0.32}
            >
              <ActionLink
                href={heroContent.primaryCta.href}
                label={heroContent.primaryCta.label}
                icon={<ArrowRight className="h-4 w-4" />}
              />
              <ActionLink
                href={heroContent.secondaryCta.href}
                label={heroContent.secondaryCta.label}
                secondary
                icon={<Mail className="h-4 w-4" />}
              />
            </Reveal>

            <Stagger className="mt-10 grid gap-3 sm:grid-cols-3" delay={0.4}>
              {heroContent.meta.map((item) => (
                <Reveal
                  key={item}
                  className="surface-card radius-card px-4 py-4 text-sm leading-6 text-soft"
                >
                  {item}
                </Reveal>
              ))}
            </Stagger>

            <section id="featured-work" className="mt-10 lg:mt-12">
              <div className="grid items-start gap-5 lg:grid-cols-[1.18fr_0.92fr]">
                <Reveal>
                  <div className="surface-panel radius-panel self-start overflow-hidden p-3">
                    <div className="radius-card border border-white/10 bg-[#0d1015] p-3 shadow-[0_30px_120px_-50px_rgba(0,0,0,0.95)]">
                      <div className="mb-3 flex items-center gap-2 px-1">
                        <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                      </div>
                      <div className="overflow-hidden rounded-[0.75rem] border border-white/10 bg-black/30">
                        <Image
                          src={featuredProject.image}
                          alt={`Preview of ${featuredProject.title}`}
                          width={1440}
                          height={1008}
                          priority
                          sizes="(max-width: 1024px) 100vw, 720px"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {featuredProject.proofPoints.map((item, index) => (
                        <div
                          key={item}
                          className={`radius-card border border-white/10 bg-white/[0.02] px-4 py-4 text-sm leading-6 text-soft ${
                            index === featuredProject.proofPoints.length - 1
                              ? "sm:col-span-2"
                              : ""
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>

                <Reveal>
                  <div className="surface-panel radius-panel p-6 sm:p-7">
                    <p className="eyebrow mb-4">{featuredProject.category}</p>
                    <h2 className="display-heading text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                      {featuredProject.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-base leading-7 text-soft sm:text-lg">
                      {featuredProject.summary}
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <div className="radius-card border border-white/10 bg-white/[0.025] p-4 sm:col-span-2">
                        <p className="eyebrow mb-3">Role</p>
                        <p className="text-sm leading-7 text-soft sm:text-[0.98rem]">
                          {featuredProject.role}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <p className="eyebrow mb-3">Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {featuredProject.stack.map((item) => (
                          <span
                            key={item}
                            className="radius-chip border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-soft"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6">
                      <ActionLink
                        href={featuredProject.link}
                        label="Open Project"
                        icon={<ArrowUpRight className="h-4 w-4" />}
                      />
                    </div>
                  </div>
                </Reveal>
              </div>

              <SectionIntro
                label="Skills"
                title="Frontend, backend, and tools."
              />
              <Stagger className="mt-5 grid gap-4 md:grid-cols-3">
                {stackGroups.map((group) => (
                  <Reveal key={group.title}>
                    <article className="surface-card radius-card h-full p-5">
                      <p className="eyebrow mb-4">{group.title}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {group.items.map((item) => (
                          <div
                            key={`${group.title}-${item.name}`}
                            className="radius-chip inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] px-3 py-2"
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={18}
                              height={18}
                              className="h-[18px] w-[18px]"
                            />
                            <span className="text-sm text-soft">
                              {item.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </article>
                  </Reveal>
                ))}
              </Stagger>
            </section>
          </section>

          <section className="below-fold-section">
            <SectionIntro
              label="Projects"
              title="More projects"
              description="A few other things I have built."
            />

            <Stagger className="mt-8 grid gap-5 lg:grid-cols-2">
              {selectedProjects.map((project) => (
                <Reveal key={project.title}>
                  <article className="surface-card radius-panel group overflow-hidden">
                    <div className="overflow-hidden border-b border-white/10 bg-black/20">
                      <Image
                        src={project.image}
                        alt={`Preview of ${project.title}`}
                        width={1200}
                        height={900}
                        sizes="(max-width: 1024px) 100vw, 560px"
                        className="h-64 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="p-6 sm:p-7">
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <div>
                          <p className="eyebrow mb-2">{project.category}</p>
                          <h3 className="display-heading text-[1.8rem] font-semibold tracking-[-0.04em] text-white">
                            {project.title}
                          </h3>
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-link radius-control inline-flex h-11 w-11 items-center justify-center border border-white/10 bg-white/[0.03] text-white/82 group-hover:border-white/20 group-hover:bg-white/[0.06] group-hover:text-white"
                          aria-label={`Open ${project.title}`}
                        >
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </div>

                      <p className="text-base leading-7 text-soft">
                        {project.summary}
                      </p>

                      <div className="mt-5">
                        <p className="eyebrow mb-3">Role</p>
                        <p className="text-sm leading-6 text-soft">
                          {project.role}
                        </p>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="radius-chip border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-soft"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </Stagger>
          </section>

          <section className="below-fold-section">
            <Reveal>
              <div className="surface-panel radius-panel px-6 py-8 sm:px-8 sm:py-10 lg:flex lg:items-end lg:justify-between lg:gap-8">
                <div className="max-w-2xl">
                  <p className="eyebrow mb-4">{contactContent.label}</p>
                  <h2 className="display-heading text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                    {contactContent.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-soft sm:text-lg">
                    {contactContent.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 lg:mt-0 lg:justify-end">
                  <ActionLink
                    href="mailto:avasdev98@gmail.com"
                    label="Start A Conversation"
                    icon={<Mail className="h-4 w-4" />}
                  />
                  <ActionLink
                    href="https://github.com/andrew-vasquez"
                    label="View GitHub"
                    secondary
                    icon={<ArrowUpRight className="h-4 w-4" />}
                  />
                </div>
              </div>
            </Reveal>
          </section>
        </main>

        <footer className="mx-auto w-full max-w-[1200px] px-4 pb-8 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
              <p>&copy; 2026 Andrew Vasquez</p>
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-white/42">
                Designed and built in Next.js
              </p>
            </div>
          </Reveal>
        </footer>
      </div>
    </div>
  );
}
