import { Link, useParams } from "react-router-dom";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Link2,
  AlertCircle,
  Lightbulb,
  RefreshCcw,
} from "lucide-react";
import { projects } from "../data/projects";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/navigation/Navbar";

const reflection4CSteps = [
  {
    key: "connection" as const,
    label: "KONEKSI (CONNECTION)",
    icon: Link2,
    description:
      "Apa pengetahuan atau pengalaman sebelumnya yang terhubung dengan pembelajaran ini?",
  },
  {
    key: "challenge" as const,
    label: "TANTANGAN (CHALLENGE)",
    icon: AlertCircle,
    description:
      "Tantangan atau kesulitan apa yang muncul dalam proses belajar dan praktik?",
  },
  {
    key: "concept" as const,
    label: "KONSEP (CONCEPT)",
    icon: Lightbulb,
    description:
      "Konsep pendidikan penting apa yang dipahami dan dapat menjadi landasan tindakan?",
  },
  {
    key: "change" as const,
    label: "PERUBAHAN (CHANGE)",
    icon: RefreshCcw,
    description:
      "Apa yang berubah dalam cara berpikir, merancang, atau melakukan pembelajaran?",
  },
];

export function ProjectCaseStudy() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);

  if (!p)
    return (
      <>
        <Navbar />
        <main className="max-w-4xl min-h-screen px-5 pt-40 mx-auto">
          <h1 className="text-4xl font-semibold">
            Mata kuliah tidak ditemukan
          </h1>
          <Link className="inline-block mt-5 text-accent" to="/">
            Kembali ke portofolio
          </Link>
        </main>
        <Footer />
      </>
    );

  return (
    <>
      <Navbar />
      <main className="pb-20 pt-36">
        <div className="max-w-4xl px-5 mx-auto">
          <Link
            to="/#courses"
            className="inline-flex items-center gap-2 text-sm text-muted"
          >
            <ArrowLeft size={16} /> Kembali ke daftar mata kuliah
          </Link>

          <div className="mt-8">
            <span className="tag">{p.category}</span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl text-ink">
              {p.title}
            </h1>
            {!p.hideOverview && p.description && (
              <p className="mt-5 text-xl leading-8 text-muted">
                {p.description}
              </p>
            )}
          </div>

          <div className="grid gap-10 mt-12">
            {!p.hideOverview && p.description && (
              <Block title="Gambaran Mata Kuliah">
                <p>{p.description}</p>
              </Block>
            )}
            {p.context && p.context.trim() !== "" && (
              <Block title="Konteks">
                <p>{p.context}</p>
              </Block>
            )}
            {p.approach && p.approach.length > 0 && (
              <Block title="Pendekatan">
                <ul>
                  {p.approach.map((x) => (
                    <li key={x} className="flex gap-3 mt-3">
                      <CheckCircle2
                        size={18}
                        className="text-accent shrink-0"
                      />
                      {x}
                    </li>
                  ))}
                </ul>
              </Block>
            )}
            {p.outcomes && p.outcomes.length > 0 && (
              <Block title="Capaian Pembelajaran">
                <ul>
                  {p.outcomes.map((x) => (
                    <li key={x} className="flex gap-3 mt-3">
                      <CheckCircle2
                        size={18}
                        className="text-accent shrink-0"
                      />
                      {x}
                    </li>
                  ))}
                </ul>
              </Block>
            )}
            {p.skills && p.skills.length > 0 && (
              <Block title="Kompetensi yang Ditunjukkan">
                <div className="flex flex-wrap gap-2">
                  {p.skills.map((x) => (
                    <span className="tag" key={x}>
                      {x}
                    </span>
                  ))}
                </div>
              </Block>
            )}

            {/* Reflection 4C Section */}
            {p.reflection4C && (
              <Block title="Refleksi · 4C">
                <p className="mb-6 text-base text-muted">
                  Refleksi menggunakan kerangka 4C: menghubungkan pengalaman,
                  mengidentifikasi tantangan, merumuskan konsep, dan menentukan
                  perubahan.
                </p>
                <div className="grid gap-4">
                  {reflection4CSteps.map((step, index) => {
                    const Icon = step.icon;
                    const text = p.reflection4C![step.key];
                    return (
                      <div
                        key={step.key}
                        className="p-5 bg-white border rounded-2xl border-slate-200 sm:p-6 shadow-soft"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <span className="grid w-10 h-10 place-items-center rounded-xl bg-emerald-50 text-accent shrink-0">
                            <Icon size={20} />
                          </span>
                          <div>
                            <span className="text-[10px] font-bold tracking-[.16em] text-slate-400">
                              0{index + 1}
                            </span>
                            <h3 className="text-sm font-bold uppercase tracking-[.12em] text-accent">
                              {step.label}
                            </h3>
                          </div>
                        </div>
                        <p className="mb-2 text-sm italic leading-7 text-slate-500">
                          {step.description}
                        </p>
                        <p className="text-base leading-7 text-ink">{text}</p>
                      </div>
                    );
                  })}
                </div>
              </Block>
            )}

            <Block title="Artifak">
              {p.evidenceUrl && p.evidenceUrl !== "#" ? (
                <a
                  href={p.evidenceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 text-sm font-semibold text-accent hover:underline"
                >
                  <ExternalLink size={15} /> Lihat Artifak
                </a>
              ) : (
                <>
                  <p className="text-muted">
                    Tautan artifak saat ini masih placeholder.
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 text-sm text-muted">
                    <ExternalLink size={15} /> Artifak belum tersedia
                  </span>
                </>
              )}
            </Block>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-slate-200 pt-7">
      <h2 className="text-2xl font-semibold text-ink">{title}</h2>
      <div className="mt-4 text-lg leading-8 text-muted">{children}</div>
    </section>
  );
}
