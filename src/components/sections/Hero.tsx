import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Compass,
  Layers3,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "../../config/profile";
export function Hero() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 hero-grid"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-paper" />
      <div className="hero-orb h-80 w-80 -top-28 right-[-5rem] bg-emerald-100/70" />
      <div className="hero-orb h-72 w-72 bottom-[-6rem] left-[-5rem] bg-amber-100/65" />
      <div className="relative max-w-6xl px-5 py-20 mx-auto sm:py-24">
        <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-14 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="eyebrow"
            >
              <Sparkles size={14} /> Portofolio Profesional PPG
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="max-w-5xl mt-6 display-title"
            >
              Ed Maiorem <br />
              <span className="text-accent">Dei Glorium</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="max-w-2xl text-base leading-8 mt-7 sm:text-lg text-muted"
            >
              {profile.bio}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              <button onClick={() => go("courses")} className="btn-primary">
                Jelajahi Portofolio <ArrowRight size={17} />
              </button>
              <button onClick={() => go("about")} className="btn-secondary">
                Lihat Profil
              </button>
            </motion.div>
            <div className="flex flex-wrap items-center gap-6 mt-10 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" /> Belajar
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-2" /> Bertumbuh
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-400" />{" "}
                Bermanfaat
              </span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.7 }}
            className="relative mx-auto w-full max-w-[470px]"
          >
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-emerald-100/60 via-white/20 to-amber-100/60 blur-2xl" />
            <div className="relative rounded-[2.25rem] border border-white/90 bg-white/75 p-3 shadow-premium backdrop-blur-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-ink p-7 text-white">
                <div className="absolute inset-0 opacity-30 hero-grid" />
                <div className="absolute right-[-20%] top-[-10%] h-56 w-56 rounded-full bg-accent blur-3xl opacity-50" />
                <div className="relative flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[.18em]">
                      PPG · 2026
                    </span>
                    <Compass size={20} className="text-emerald-200" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[.18em] text-white/50">
                      Identitas Profesional
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                      Belajar.
                      <br />
                      <span className="text-emerald-200">Bertumbuh.</span>
                      <br />
                      Bermanfaat.
                    </h2>
                    <p className="max-w-xs mt-5 text-sm leading-6 text-white/65">
                      Belajar, merefleksi, berinovasi, dan bertumbuh untuk
                      menghadirkan pembelajaran yang bermakna.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-3 border rounded-2xl border-white/10 bg-white/5">
                      <BookOpen size={16} />
                      <p className="mt-3 text-[10px] text-white/50">BELAJAR</p>
                    </div>
                    <div className="p-3 border rounded-2xl border-white/10 bg-white/5">
                      <Layers3 size={16} />
                      <p className="mt-3 text-[10px] text-white/50">
                        BERTUMBUH
                      </p>
                    </div>
                    <div className="p-3 border rounded-2xl border-white/10 bg-white/5">
                      <Sparkles size={16} />
                      <p className="mt-3 text-[10px] text-white/50">
                        BERMANFAAT
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute px-4 py-3 border border-white -bottom-5 -left-5 rounded-2xl bg-white/90 shadow-soft backdrop-blur">
              <p className="text-[10px] font-bold uppercase tracking-[.16em] text-muted">
                Fokus
              </p>
              <p className="mt-1 text-sm font-bold text-ink">
                Artifak · Refleksi · Praktik
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="marquee relative mt-12 border-y border-slate-200/80 py-4 text-[10px] font-bold uppercase tracking-[.2em] text-slate-400">
        <div className="marquee-track">
          <span>Pedagogi</span>
          <span>•</span>
          <span>Pembelajaran Mendalam</span>
          <span>•</span>
          <span>PSE</span>
          <span>•</span>
          <span>TPACK</span>
          <span>•</span>
          <span>Refleksi 4C</span>
          <span>•</span>
          <span>Pedagogi</span>
          <span>•</span>
          <span>Pembelajaran Mendalam</span>
          <span>•</span>
          <span>PSE</span>
          <span>•</span>
          <span>TPACK</span>
          <span>•</span>
          <span>Refleksi 4C</span>
        </div>
      </div>
      <button
        onClick={() => go("about")}
        className="absolute -translate-x-1/2 bottom-6 left-1/2 text-muted"
        aria-label="Scroll ke Tentang"
      >
        <ArrowDown className="animate-bounce" size={19} />
      </button>
    </section>
  );
}
