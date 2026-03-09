import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">Skills</h2>
        <div className="h-1 w-12 rounded bg-blue-600 mb-8" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
            >
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-zinc-100 px-2.5 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
