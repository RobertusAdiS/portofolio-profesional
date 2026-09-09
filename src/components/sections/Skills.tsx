import { Check } from "lucide-react";
import { skillGroups } from "../../data/skills";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
export function Skills() {
  return (
    <section id="skills" className="text-white section bg-ink">
      <div className="max-w-6xl px-5 mx-auto">
        <SectionHeading
          eyebrow="04 · Skills"
          title="Kompetensi yang terus dikembangkan."
          description="Fokus kompetensi dibangun dari pengalaman akademik dan praktik yang tercantum dalam portofolio."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((g) => (
            <Reveal key={g.title}>
              <article className="h-full p-6 border rounded-3xl border-white/10 bg-white/5">
                <h3 className="text-xl font-semibold">{g.title}</h3>
                <div className="grid gap-3 mt-5">
                  {g.items.map((x) => (
                    <div
                      key={x}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <Check size={16} className="text-white" />
                      {x}
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
