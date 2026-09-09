import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { journey } from "../../data/journey";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
export function Journey() {
  const [semester, setSemester] = useState<1 | 2>(1);
  return (
    <section id="journey" className="bg-white section">
      <div className="max-w-6xl px-5 mx-auto">
        <SectionHeading
          eyebrow="02 · Perjalanan"
          title="Perjalanan akademik menuju pertumbuhan profesional."
          description="Setiap pengalaman menjadi ruang untuk mempelajari konsep, mencoba praktik, lalu merefleksikan perbaikan."
        />
        <div className="flex gap-2 mb-8">
          <button
            className={semester === 1 ? "filter-active" : "filter"}
            onClick={() => setSemester(1)}
          >
            Semester 1
          </button>
          <button
            className={semester === 2 ? "filter-active" : "filter"}
            onClick={() => setSemester(2)}
          >
            Semester 2
          </button>
        </div>
        <div className="relative ml-2 border-l md:ml-6 border-slate-200">
          {journey
            .filter((x) => x.semester === semester)
            .map((item, i) => (
              <Reveal key={item.id} className="relative pl-8 pb-7">
                <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-white" />
                <article className="card">
                  <button
                    className="w-full text-left"
                    onClick={() => {
                      const el = document.getElementById(item.id + "-details");
                      if (el) el.classList.toggle("hidden");
                    }}
                  >
                    <div className="flex justify-between gap-4">
                      <div>
                        <span className="text-xs font-semibold text-accent">
                          0{i + 1}
                        </span>
                        <h3 className="mt-1 card-title">{item.title}</h3>
                        <p className="card-copy">{item.description}</p>
                      </div>
                      <ChevronDown className="shrink-0 text-muted" size={19} />
                    </div>
                  </button>
                  <div
                    id={item.id + "-details"}
                    className="grid hidden gap-5 pt-5 mt-5 border-t border-slate-100 md:grid-cols-2"
                  >
                    <div>
                      <p className="label">Pembelajaran Utama</p>
                      <ul className="mt-2 space-y-2 text-sm text-muted">
                        {item.learningPoints.map((p) => (
                          <li key={p}>• {p}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="label">Kompetensi</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {item.competency.map((c) => (
                          <span className="tag" key={c}>
                            {c}
                          </span>
                        ))}
                      </div>
                      {item.reflection && (
                        <>
                          <p className="mt-4 label">Refleksi</p>
                          <p className="mt-2 text-sm text-muted">
                            {item.reflection}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}
