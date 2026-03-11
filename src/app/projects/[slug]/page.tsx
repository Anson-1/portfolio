import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

const statusColors = {
  completed: "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300",
  "in-progress":
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300",
  planned: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
};

const statusLabels = {
  completed: "Completed",
  "in-progress": "In Progress",
  planned: "Coming Soon",
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/#projects"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-white"
      >
        <ArrowLeft size={16} />
        Back to projects
      </Link>

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${statusColors[project.status]}`}
        >
          {statusLabels[project.status]}
        </span>
        <span className="text-xs text-zinc-400">
          {project.category === "ml"
            ? "ML / Data Science"
            : project.category === "llm"
              ? "LLM / GenAI"
              : project.category === "quant"
                ? "Quant / Finance"
                : "Full Stack"}
        </span>
      </div>

      <h1 className="mb-4 text-4xl font-bold tracking-tight">
        {project.title}
      </h1>

      <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
        {project.longDescription}
      </p>

      {/* Links */}
      <div className="mb-10 flex flex-wrap gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            <Github size={16} />
            View Source
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
      </div>

      {/* Highlights */}
      {project.highlights.length > 0 && (
        <div className="mb-10">
          <h2 className="mb-4 text-xl font-semibold">Key Highlights</h2>
          <ul className="space-y-2">
            {project.highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech stack */}
      <div>
        <h2 className="mb-4 text-xl font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
