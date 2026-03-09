export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 px-6 dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Shiyang Xu. All rights reserved.</p>
        <p>
          Built with{" "}
          <span className="font-medium text-zinc-700 dark:text-zinc-300">
            Next.js
          </span>{" "}
          &amp;{" "}
          <span className="font-medium text-zinc-700 dark:text-zinc-300">
            Tailwind CSS
          </span>
        </p>
      </div>
    </footer>
  );
}
