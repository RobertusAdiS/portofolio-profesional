import { Link } from "react-router-dom";
import { ArrowUpRight, Layers3 } from "lucide-react";
import type { Project } from "../../types";
import { Reveal } from "../ui/Reveal";
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal>
      <article className="group relative h-full overflow-hidden rounded-[26px] border border-slate-200/90 bg-white p-6 shadow-[0_14px_45px_rgba(16,32,51,.055)] transition duration-300 hover:-translate-y-2 hover:shadow-premium">
        <div className="absolute top-0 right-0 transition rounded-full h-28 w-28 bg-emerald-50 blur-2xl group-hover:scale-150" />
        <div className="relative flex flex-col h-full">
          <div className="flex items-start justify-between gap-4">
            <span className="tag">{project.category}</span>
            <span className="text-[10px] font-bold tracking-[.16em] text-slate-300">
              {project.id.toUpperCase()}
            </span>
          </div>
          <div className="flex items-center justify-center w-12 h-12 mt-8 text-white rounded-2xl bg-ink">
            <Layers3 size={20} />
          </div>
          <h3 className="card-title mt-5 text-[21px]">{project.title}</h3>
          <p className="flex-1 card-copy">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-5">
            {project.skills?.slice(0, 3).map((s) => (
              <span
                className="text-[11px] font-semibold text-slate-500"
                key={s}
              >
                #{s.replaceAll(" ", "-")}
              </span>
            ))}
          </div>
          <Link
            className="mt-7 inline-flex items-center justify-between rounded-xl border border-slate-200 px-3.5 py-3 text-sm font-bold text-ink transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-accent"
            to={"/courses/" + project.slug}
          >
            Lihat detail mata kuliah <ArrowUpRight size={16} />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
