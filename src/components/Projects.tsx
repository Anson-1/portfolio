"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects, categories, type Project } from "@/data/projects";

const statusColors = {
  completed: "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300",
  "in-progress": "bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300",
  planned: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
};

const statusLabels = {
  completed: "Completed",
  "in-progress": "In Progress",
  planned: "Coming Soon",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
    >
      <div className="mb-3 flex items-center justify-between">
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[project.status]}`}
        >
          {statusLabels[project.status]}
        </span>
        <div className="flex gap-2">
          {project.github && (
            <span
              onClick={(e) => { e.preventDefault(); window.open(project.github, "_blank"); }}
              className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
              aria-label="GitHub repository"
            >
              <Github size={18} />
            </span>
          )}
          {project.demo && (
            <span
              onClick={(e) => { e.preventDefault(); window.open(project.demo, "_blank"); }}
              className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
              aria-label="Live demo"
            >
              <ExternalLink size={18} />
            </span>
          )}
        </div>
      </div>

      <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
      <p className="mb-4 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <ArrowRight size={16} className="shrink-0 text-zinc-400 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="bg-zinc-50 py-24 px-6 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">Projects</h2>
        <div className="h-1 w-12 rounded bg-blue-600 mb-8" />

        {/* Filter tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === key
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "bg-zinc-200/60 text-zinc-600 hover:bg-zinc-300/60 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
