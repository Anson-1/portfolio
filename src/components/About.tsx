export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">About Me</h2>
        <div className="h-1 w-12 rounded bg-blue-600 mb-8" />

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m completing my{" "}
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                MSc in Big Data Technology
              </span>{" "}
              at HKUST, building on a BSc in Physics with minors in Mathematics
              and Computer Science from HKU. This cross-disciplinary background
              gives me a strong foundation in both the theory and engineering of
              ML systems.
            </p>
            <p>
              I&apos;ve worked on{" "}
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                AI research at HKGAI
              </span>{" "}
              (training diffusion-LLM speech synthesis models on 10,000+ hours
              of data) and as a{" "}
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                Software Engineer Intern at Bybit
              </span>{" "}
              building AI-driven testing pipelines. I enjoy end-to-end work —
              from data pipelines to model deployment.
            </p>
            <p>
              I&apos;m currently looking for opportunities in Hong Kong as a
              Data Scientist, ML Engineer, Quant Developer, or Data Engineer.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="mb-4 font-semibold">Quick Facts</h3>
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                <span>MSc Big Data Technology, HKUST (2025–2026)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                <span>BSc Physics (Minors: Math &amp; CS), HKU (2021–2025)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                <span>AI Research @ HKGAI &middot; Software Eng @ Bybit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                <span>Open to: Data Science, ML Engineering, Quant Dev, Data Engineering</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
