import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import TerminalWindow from "../components/TerminalWindow";
import Button from "../components/Button";
import { profile } from "../data/portfolioData";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="absolute inset-0 -z-10 bg-dotgrid opacity-60" />
      <div className="mx-auto grid max-w-5xl gap-14 px-6 pb-24 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-4">
            {profile.role} · {profile.location}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name.split(" ")[0]}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-dim to-amber-dim dark:from-teal dark:to-amber">
              {profile.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70 dark:text-paper/70">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">
              View work <FiArrowDown size={14} />
            </Button>
            <Button as="a" href="#contact" variant="ghost">
              Get in touch <FiMail size={14} />
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-ink/50 transition-colors hover:text-teal-dim dark:text-paper/50 dark:hover:text-teal"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-ink/50 transition-colors hover:text-teal-dim dark:text-paper/50 dark:hover:text-teal"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href={profile.gmailComposeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
              className="text-ink/50 transition-colors hover:text-teal-dim dark:text-paper/50 dark:hover:text-teal"
            >
              <FiMail size={20} />
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-paper-line pt-6 dark:border-ink-line">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-[11px] uppercase tracking-wide text-ink/40 dark:text-paper/40">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-display text-xl font-semibold">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <TerminalWindow lines={profile.terminalLines} />
        </motion.div>
      </div>
    </section>
  );
}
