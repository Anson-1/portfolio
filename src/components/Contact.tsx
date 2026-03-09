import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-zinc-50 py-24 px-6 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">Get in Touch</h2>
        <div className="mx-auto h-1 w-12 rounded bg-blue-600 mb-8" />

        <p className="mb-10 text-zinc-600 dark:text-zinc-400">
          I&apos;m actively looking for opportunities in Hong Kong. Whether you have
          a role in mind or just want to connect, feel free to reach out.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:sxuck@connect.ust.hk"
            className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 text-left transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
              <Mail size={18} />
            </div>
            <div>
              <div className="text-sm font-medium">Email</div>
              <div className="text-xs text-zinc-500">sxuck@connect.ust.hk</div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/anson-xu-b870902b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 text-left transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
              <Linkedin size={18} />
            </div>
            <div>
              <div className="text-sm font-medium">LinkedIn</div>
              <div className="text-xs text-zinc-500">Connect with me</div>
            </div>
          </a>

          <a
            href="https://github.com/Anson-1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 text-left transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
              <Github size={18} />
            </div>
            <div>
              <div className="text-sm font-medium">GitHub</div>
              <div className="text-xs text-zinc-500">View my code</div>
            </div>
          </a>

          <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 text-left dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
              <MapPin size={18} />
            </div>
            <div>
              <div className="text-sm font-medium">Location</div>
              <div className="text-xs text-zinc-500">Hong Kong</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
