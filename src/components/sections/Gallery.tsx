import { useState } from "react";
import { Camera, Video, X, Maximize2, Play, Sparkles, Filter } from "lucide-react";
import { galleryItems, GalleryItem } from "../../data/gallery";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    "Semua",
    "Praktik Mengajar",
    "Bimbingan & Mentoring",
    "Presentasi & Inovasi",
    "PPL & Lapangan",
  ];

  const filteredItems =
    selectedCategory === "Semua"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="section bg-slate-900 text-white py-24 relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/3 left-[-10%] w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl px-5 mx-auto">
        <SectionHeading
          eyebrow="04 · Galeri Dokumentasi"
          title="Dokumentasi Kegiatan & Praktik"
          description="Rekaman visual pengalaman nyata, praktik mengajar di kelas, bimbingan reflektif, serta pengimbasan inovasi pembelajaran."
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <div className="flex items-center gap-2 mr-2 text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:flex">
            <Filter size={14} className="text-emerald-400" /> Filter:
          </div>
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25 scale-105"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <div
                onClick={() => setActiveItem(item)}
                className="group relative rounded-3xl overflow-hidden bg-slate-800/80 border border-white/10 shadow-lg hover:border-emerald-400/50 hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full"
              >
                {/* Image / Video Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 text-emerald-300 border border-emerald-400/30 backdrop-blur-md">
                      {item.category}
                    </span>
                    <span className="p-2 rounded-full bg-slate-900/80 text-white backdrop-blur-md border border-white/10">
                      {item.type === "video" ? <Video size={14} /> : <Camera size={14} />}
                    </span>
                  </div>

                  {/* Hover Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-xs">
                    <div className="p-3.5 rounded-full bg-emerald-500 text-slate-950 shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      {item.type === "video" ? <Play size={20} className="ml-0.5" /> : <Maximize2 size={20} />}
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex flex-col justify-between flex-grow bg-slate-900/90">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {item.date && (
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-medium text-slate-500">
                      <span className="flex items-center gap-1">
                        <Sparkles size={12} className="text-emerald-400" /> {item.date}
                      </span>
                      <span className="text-emerald-400 group-hover:underline">Lihat Detail</span>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
            <div className="relative max-w-4xl w-full bg-slate-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/80 text-slate-300 hover:text-white hover:bg-emerald-500 hover:text-slate-950 transition-all duration-300 border border-white/10"
                aria-label="Tutup Galeri"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-[1.2fr_0.8fr]">
                {/* Media Preview */}
                <div className="relative aspect-[4/3] bg-slate-950 flex items-center justify-center overflow-hidden">
                  {activeItem.type === "video" ? (
                    <video
                      src={activeItem.src}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <img
                      src={activeItem.src}
                      alt={activeItem.title}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>

                {/* Details Side Panel */}
                <div className="p-8 flex flex-col justify-between bg-slate-900">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {activeItem.category}
                      </span>
                      {activeItem.date && (
                        <span className="text-xs text-slate-400">{activeItem.date}</span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">
                      {activeItem.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {activeItem.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <span>Dokumentasi Portofolio PPG</span>
                    <button
                      onClick={() => setActiveItem(null)}
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-emerald-500 hover:text-slate-950 text-white font-semibold transition-all duration-300"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
