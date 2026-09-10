import {
  MapPin,
  Quote,
  Heart,
  Sparkles,
  BookOpen,
  Compass,
  Award,
} from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { profile } from "../../config/profile";

export function About() {
  return (
    <section id="about" className="section bg-slate-50/50 relative overflow-hidden py-24">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="relative max-w-6xl px-5 mx-auto">
        <SectionHeading
          eyebrow="01 · Tentang Saya"
          title="Identitas & Filosofi Pendidik"
          description="Profil diri, inspirasi perjalanan, motivasi, serta filosofi pendidikan yang menjadi pijakan dalam mengabdi sebagai calon guru profesional."
        />

        {/* 1. Header Profile & Identity Card */}
        <Reveal>
          <div className="mb-12 rounded-[2.5rem] bg-gradient-to-br from-ink via-slate-900 to-slate-800 p-8 sm:p-12 text-white shadow-premium relative overflow-hidden">
            <div className="absolute right-[-10%] top-[-20%] h-80 w-80 rounded-full bg-accent blur-3xl opacity-25" />
            <div className="absolute left-[-10%] bottom-[-20%] h-80 w-80 rounded-full bg-amber-500 blur-3xl opacity-15" />
            
            <div className="relative grid lg:grid-cols-[auto_1fr_auto] gap-8 items-center">
              {/* Profile Image Frame */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-300 blur opacity-75 group-hover:opacity-100 transition duration-300" />
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-slate-900 shrink-0">
                    <img
                      src={profile.photoUrl}
                      alt={profile.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4 justify-center lg:justify-start">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[.18em] bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                    Profil Diri
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-white/70 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                    <MapPin size={13} className="text-emerald-300" />
                    {profile.location}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2 text-center lg:text-left">
                  {profile.name}
                </h2>
                <p className="text-emerald-200 font-medium text-lg mb-5 text-center lg:text-left">
                  {profile.role}
                </p>

                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 max-w-3xl">
                  <Quote size={24} className="text-emerald-300 shrink-0 mt-1" />
                  <p className="text-sm sm:text-base italic text-white/90 leading-relaxed font-serif">
                    "{profile.quote}"
                  </p>
                </div>
              </div>

              <div className="hidden xl:flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 text-center min-w-[190px]">
                <Award size={40} className="text-emerald-300 mb-2" />
                <span className="text-xs uppercase font-bold text-white/60 tracking-wider">Komitmen</span>
                <span className="text-sm font-semibold text-white mt-1">Pembelajar Seumur Hidup</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 2. Cerita Personal & Motivasi Guru */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Cerita Personal */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-white border border-slate-200/80 p-8 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="p-3 rounded-2xl bg-amber-50 text-amber-600 border border-amber-100">
                    <Heart size={22} />
                  </span>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600/80">Inspirasi Pendidik</span>
                    <h3 className="text-xl font-bold text-slate-900">Cerita Personal</h3>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {profile.ceritaPersonal}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Inspirasi: Bpk. Albertus Saptoro</span>
                <span className="text-amber-600 font-semibold">Guru SD Kelas 6</span>
              </div>
            </div>
          </Reveal>

          {/* Motivasi Menjadi Guru */}
          <Reveal delay={0.2}>
            <div className="h-full rounded-3xl bg-white border border-slate-200/80 p-8 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <Sparkles size={22} />
                  </span>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600/80">Panggilan Jiwa</span>
                    <h3 className="text-xl font-bold text-slate-900">Motivasi Menjadi Guru</h3>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {profile.motivasiGuru}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Prinsip Utama</span>
                <span className="text-emerald-600 font-semibold">Men and Women for Others</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 3. Filosofi Pendidikan */}
        <div className="mb-12">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <BookOpen size={24} className="text-accent" />
              Filosofi Pendidikan
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              Prinsip-prinsip mendasar yang menjadi pedoman dan arah dalam merancang serta melaksanakan pembelajaran.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {profile.filosofiPendidikan.map((filosofi, i) => (
              <Reveal key={filosofi.title} delay={i * 0.1}>
                <div className="h-full rounded-3xl bg-white border border-slate-200/80 p-7 shadow-sm hover:border-emerald-200 hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <span className="inline-block text-[10px] font-bold tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase mb-4">
                      {filosofi.subtitle}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{filosofi.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {filosofi.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 4. Visi Masa Depan */}
        <Reveal delay={0.2}>
          <div className="rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 p-8 sm:p-10 text-white shadow-lg relative overflow-hidden border border-emerald-700/30">
            <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 opacity-10">
              <Compass size={240} />
            </div>
            <div className="relative max-w-3xl">
              <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Compass size={16} />
                Visi Masa Depan
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                Mewujudkan Generasi Muda Berkarakter & PEKA Sosial
              </h3>
              <p className="text-emerald-100/90 text-base leading-relaxed font-light">
                "{profile.visiMasaDepan}"
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

