import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          MSc Big Data Technology @ HKUST
        </div>

        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Shiyang Xu
          </span>
        </h1>

        <p className="mx-auto mb-8 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          Physics grad turned ML engineer, based in Hong Kong.
          I build end-to-end ML systems, data pipelines, and quantitative trading strategies.
        </p>

        <div className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-5">
          <a
            href="https://github.com/Anson-1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/anson-xu-b870902b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:sxuck@connect.ust.hk"
            className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
