import { useState } from "react";
import {
  ArrowRight,
  Link2,
  AlertCircle,
  Lightbulb,
  RefreshCcw,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
const steps = [
  {
    id: "connection",
    label: "KONEKSI (CONNECTION)",
    icon: Link2,
    text: "Apa pengetahuan atau pengalaman sebelumnya yang terhubung dengan pembelajaran ini?",
  },
  {
    id: "challenge",
    label: "TANTANGAN (CHALLENGE)",
    icon: AlertCircle,
    text: "Tantangan atau kesulitan apa yang muncul dalam proses belajar dan praktik?",
  },
  {
    id: "concept",
    label: "KONSEP (CONCEPT)",
    icon: Lightbulb,
    text: "Konsep pendidikan penting apa yang dipahami dan dapat menjadi landasan tindakan?",
  },
  {
    id: "change",
    label: "PERUBAHAN (CHANGE)",
    icon: RefreshCcw,
    text: "Apa yang berubah dalam cara berpikir, merancang, atau melakukan pembelajaran?",
  },
];
export function Reflection() {
  const [i, setI] = useState(0);
  const s = steps[i];
  return (
    <section id="reflection" className="section bg-paper">
      <div className="max-w-6xl px-5 mx-auto">
        <SectionHeading
          eyebrow="Refleksi · 4C"
          title="Mengubah pengalaman menjadi pembelajaran profesional."
          description="Kerangka 4C membantu menghubungkan pengalaman dengan tantangan, konsep, dan perubahan praktik."
        />
        <div className="grid lg:grid-cols-[.35fr_.65fr] gap-5">
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
            {steps.map((x, n) => (
              <button
                key={x.id}
                onClick={() => setI(n)}
                className={`p-4 rounded-2xl text-left border ${i === n ? "bg-white border-accent shadow-soft" : "border-slate-200 bg-white/50"}`}
              >
                <span className="text-xs font-bold text-accent">0{n + 1}</span>
                <span className="block mt-1 text-sm font-semibold">
                  {x.label}
                </span>
              </button>
            ))}
          </div>
          <div className="card min-h-[300px] flex flex-col justify-between">
            <div>
              <s.icon className="text-accent" size={28} />
              <p className="mt-6 text-sm font-semibold uppercase tracking-[.15em] text-accent">
                {s.label}
              </p>
              <p className="mt-3 text-2xl font-semibold leading-tight md:text-3xl text-ink">
                {s.text}
              </p>
            </div>
            <button
              onClick={() => setI((i + 1) % steps.length)}
              className="inline-flex items-center self-start gap-2 mt-8 text-sm font-semibold text-accent"
            >
              Tahap berikutnya <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
