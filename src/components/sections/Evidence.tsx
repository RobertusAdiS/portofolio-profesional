import { useState } from "react";
import { evidence } from "../../data/evidence";
import type { Evidence as EvidenceType } from "../../types";
import { EvidenceCard } from "../evidence/EvidenceCard";
import { EvidenceModal } from "../evidence/EvidenceModal";
import { SectionHeading } from "../ui/SectionHeading";
export function Evidence() {
  const [selected, setSelected] = useState<EvidenceType | null>(null);
  return (
    <section id="artifacts" className="bg-white section">
      <div className="max-w-6xl px-5 mx-auto">
        <SectionHeading
          eyebrow="05 · Artifak"
          title="Bukti belajar yang dapat diverifikasi."
          description="Koleksi artifak menggunakan placeholder sampai file dan URL asli tersedia."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {evidence.map((x) => (
            <EvidenceCard key={x.id} item={x} onOpen={setSelected} />
          ))}
        </div>
      </div>
      <EvidenceModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
