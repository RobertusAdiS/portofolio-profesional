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
    <section
      id="about"
      className="relative py-24 overflow-hidden section bg-slate-50/50"
    >
      {/* Decorative Background Elements */}
      <div className="absolute left-0 rounded-full pointer-events-none top-1/4 w-96 h-96 bg-emerald-100/40 blur-3xl -z-10" />
      <div className="absolute right-0 rounded-full pointer-events-none bottom-10 w-96 h-96 bg-amber-100/40 blur-3xl -z-10" />

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
                  <div className="absolute transition duration-300 rounded-full opacity-75 -inset-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-300 blur group-hover:opacity-100" />
                  <div className="relative overflow-hidden border-4 rounded-full shadow-2xl w-36 h-36 sm:w-44 sm:h-44 border-white/20 bg-slate-900 shrink-0">
                    <img
                      src={profile.photoUrl}
                      alt={profile.name}
                      className="object-cover object-center w-full h-full transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center justify-center gap-3 mb-4 lg:justify-start">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[.18em] bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                    Profil Diri
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-white/70 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                    <MapPin size={13} className="text-emerald-300" />
                    {profile.location}
                  </span>
                </div>

                <h2 className="mb-2 text-3xl font-bold tracking-tight text-center text-white sm:text-4xl lg:text-left">
                  {profile.name}
                </h2>
                <p className="mb-5 text-lg font-medium text-center text-emerald-200 lg:text-left">
                  {profile.role}
                </p>

                <div className="flex items-start max-w-3xl gap-3 p-5 border bg-white/10 backdrop-blur-md rounded-2xl border-white/15">
                  <Quote size={24} className="mt-1 text-emerald-300 shrink-0" />
                  <p className="font-serif text-sm italic leading-relaxed sm:text-base text-white/90">
                    "{profile.quote}"
                  </p>
                </div>
              </div>

              <div className="hidden xl:flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 text-center min-w-[190px]">
                <Award size={40} className="mb-2 text-emerald-300" />
                <span className="text-xs font-bold tracking-wider uppercase text-white/60">
                  Komitmen
                </span>
                <span className="mt-1 text-sm font-semibold text-white">
                  Pembelajar Seumur Hidup
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 2. Cerita Personal & Motivasi Guru */}
        <div className="grid gap-8 mb-12 lg:grid-cols-2">
          {/* Cerita Personal */}
          <Reveal delay={0.1}>
            <div className="relative flex flex-col justify-between h-full p-8 transition-shadow bg-white border shadow-sm rounded-3xl border-slate-200/80 hover:shadow-md">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="p-3 border rounded-2xl bg-amber-50 text-amber-600 border-amber-100">
                    <Heart size={22} />
                  </span>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600/80">
                      Inspirasi Pendidik
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      Cerita Personal
                    </h3>
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">
                  {profile.ceritaPersonal}
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 mt-4 text-xs font-medium border-t border-slate-100 text-slate-500">
                <span>Inspirasi: Bpk. Albertus Saptoro</span>
                <span className="font-semibold text-amber-600">
                  Guru SD Kelas 6
                </span>
              </div>
            </div>
          </Reveal>

          {/* Motivasi Menjadi Guru */}
          <Reveal delay={0.2}>
            <div className="relative flex flex-col justify-between h-full p-8 transition-shadow bg-white border shadow-sm rounded-3xl border-slate-200/80 hover:shadow-md">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="p-3 border rounded-2xl bg-emerald-50 text-emerald-600 border-emerald-100">
                    <Sparkles size={22} />
                  </span>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600/80">
                      Panggilan Jiwa
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      Motivasi Menjadi Guru
                    </h3>
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">
                  {profile.motivasiGuru}
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 mt-4 text-xs font-medium border-t border-slate-100 text-slate-500">
                <span>Prinsip Utama</span>
                <span className="font-semibold text-emerald-600">
                  Men and Women for Others
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 3. Filosofi Pendidikan */}
        <div className="mb-12">
          <div className="mb-6">
            <h3 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
              <BookOpen size={24} className="text-accent" />
              Filosofi Pendidikan
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Prinsip-prinsip mendasar yang menjadi pedoman dan arah dalam
              merancang serta melaksanakan pembelajaran.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {profile.filosofiPendidikan.map((filosofi, i) => (
              <Reveal key={filosofi.title} delay={i * 0.1}>
                <div className="flex flex-col justify-between h-full transition-all bg-white border shadow-sm rounded-3xl border-slate-200/80 p-7 hover:border-emerald-200 hover:shadow-md">
                  <div>
                    <span className="inline-block text-[10px] font-bold tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase mb-4">
                      {filosofi.subtitle}
                    </span>
                    <h4 className="mb-2 text-xl font-bold text-slate-900">
                      {filosofi.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {filosofi.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 4. Visi Pendidikan Indonesia */}
        <Reveal delay={0.15}>
          <div className="p-8 mb-6 bg-white border shadow-sm rounded-3xl border-emerald-200/80 sm:p-10">
            <div className="flex items-center gap-2 mb-3 text-emerald-700">
              <BookOpen size={18} />
              <span className="text-xs font-bold tracking-wider uppercase">
                Visi Pendidikan Indonesia
              </span>
            </div>
            <p className="max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
              Mewujudkan pendidikan indonesia yang memandang peserta didik
              sebagai pribadi utuh dan unik, serta membentuk generasi yang
              unggul dalam ilmu sekaligus siap melayani sesama.
            </p>
          </div>
        </Reveal>

        {/* 5. Visi Masa Depan */}
        <Reveal delay={0.2}>
          <div className="relative p-8 overflow-hidden text-white border shadow-lg rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 sm:p-10 border-emerald-700/30">
            <div className="absolute bottom-0 right-0 translate-x-10 translate-y-10 opacity-10">
              <Compass size={240} />
            </div>
            <div className="relative max-w-3xl">
              <div className="flex items-center gap-2 mb-3 text-xs font-bold tracking-wider uppercase text-emerald-300">
                <Compass size={16} />
                Visi Masa Depan
              </div>
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Mewujudkan Generasi Muda Berkarakter & PEKA Sosial
              </h3>
              <p className="text-base font-light leading-relaxed text-emerald-100/90">
                "{profile.visiMasaDepan}"
              </p>
            </div>
          </div>
        </Reveal>

        {/* 6. Rencana Mencapai Visi */}
        <Reveal delay={0.25}>
          <div className="p-8 mt-6 bg-emerald-50/70 border border-emerald-100 rounded-3xl sm:p-10">
            <div className="mb-5">
              <span className="text-xs font-bold tracking-wider uppercase text-emerald-700">
                Rencana Mencapai Visi
              </span>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Langkah Nyata dalam Mengabdi
              </h3>
            </div>
            <ul className="grid gap-4 md:grid-cols-2">
              <li className="flex items-start gap-3 rounded-2xl bg-white p-5 text-sm leading-relaxed text-slate-700">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                <span>Memberikan yang terbaik dalam setiap tugas.</span>
              </li>
              <li className="flex items-start gap-3 rounded-2xl bg-white p-5 text-sm leading-relaxed text-slate-700">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                <span>
                  Mengenal setiap peserta didik secara pribadi, memperhatikan
                  kebutuhan dan keunikan mereka, serta merancang pembelajaran
                  berdiferensiasi yang berpihak pada peserta didik.
                </span>
              </li>
              <li className="flex items-start gap-3 rounded-2xl bg-white p-5 text-sm leading-relaxed text-slate-700">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                <span>
                  Mengintegrasikan proyek sosial, refleksi, dan pembiasaan
                  peduli sesama dalam kegiatan belajar, agar siswa tumbuh
                  menjadi pribadi bagi sesama.
                </span>
              </li>
              <li className="flex items-start gap-3 rounded-2xl bg-white p-5 text-sm leading-relaxed text-slate-700">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                <span>
                  Menghidupi nilai pelayanan, empati, dan kerendahan hati dalam
                  keseharian, karena karakter lebih efektif diteladankan
                  daripada diajarkan.
                </span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
