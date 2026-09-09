import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../../data/projects";
import { ProjectCard } from "../projects/ProjectCard";
import { SectionHeading } from "../ui/SectionHeading";
const filters = [
  "Semua",
  "Pedagogik",
  "PSE",
  "PPL",
  "Kepemimpinan",
  "Refleksi",
  "Teknologi",
] as const;
export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Semua");
  const shown =
    filter === "Semua"
      ? projects
      : projects.filter((p) => p.category === filter);
  return (
    <section id="courses" className="bg-white section">
      <div className="relative max-w-6xl px-5 mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-7">
          <SectionHeading
            eyebrow="03 · Mata Kuliah"
            title="Artefak yang menunjukkan proses."
            description="Kumpulan mata kuliah akademik yang memperlihatkan bagaimana konsep diterjemahkan menjadi rancangan, praktik, dan refleksi."
          />
          <div className="text-right lg:pb-2">
            <p className="text-4xl font-bold tracking-tight text-ink">
              {projects.length.toString().padStart(2, "0")}
            </p>
            <p className="text-xs font-semibold uppercase tracking-[.16em] text-muted">
              mata kuliah pilihan
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-9">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={filter === f ? "filter-active" : "filter"}
              aria-pressed={filter === f}
            >
              {f}
            </button>
          ))}
        </div>
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {shown.map((p) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        {!shown.length && (
          <div className="empty">
            Tidak ada mata kuliah pada kategori tersebut.
          </div>
        )}
      </div>
    </section>
  );
}
