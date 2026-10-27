import {
  Cpu,
  FlaskConical,
  Lightbulb,
  Target,
  UsersRound,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const prototypes = [
  {
    number: "01",
    title: "Dasar Kontrol LED",
    description:
      "Mengenal papan Arduino dan komponen virtual melalui rangkaian LED, sekaligus mempelajari dasar pemrograman mikrokontroler.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Sensor Kelembapan & LCD",
    description:
      "Membaca kelembapan tanah dengan Arduino dan menampilkan data pada LCD untuk memahami konsep input, output, dan pembacaan sensor.",
    icon: FlaskConical,
  },
  {
    number: "03",
    title: "Sensor Jarak untuk Alarm Mobil",
    description:
      "Menyimulasikan alarm mobil dengan sensor ultrasonik, lalu mengenalkan tantangan konektivitas jaringan sebagai transisi menuju proyek IoT.",
    icon: Cpu,
  },
];

const tinkercadActivities = [
  {
    level: "IoT Dasar",
    title: "Lampu LED & Running Text",
    description:
      "Pelajari dua rangkaian Arduino dasar, lalu rakit ulang LED dan running text secara mandiri.",
    image: "/gallery/iot-dasar.png",
    alt: "Tampilan aktivitas IoT Dasar di Tinkercad dengan instruksi praktik serta rangkaian lampu LED dan running text.",
  },
  {
    level: "IoT Menengah",
    title: "Sensor Tanah dan LCD",
    description:
      "Eksplorasi rangkaian sensor tanah, Arduino, dan LCD, lalu rakit kembali untuk memahami pembacaan sensor.",
    image: "/gallery/iot-menengah.png",
    alt: "Tampilan aktivitas IoT Menengah di Tinkercad dengan instruksi praktik dan rangkaian sensor tanah dengan LCD.",
  },
  {
    level: "IoT Lanjut",
    title: "Project Sensor Alarm Mobil",
    description:
      "Pelajari rangkaian sensor jarak dan alarm mobil, kemudian uji serta modifikasi simulasi dan programnya.",
    image: "/gallery/iot-lanjut.png",
    alt: "Tampilan aktivitas IoT Lanjut di Tinkercad dengan instruksi praktik dan rangkaian project sensor alarm mobil.",
  },
];

const activityInstructions = [
  "Eksplorasi rangkaian contoh melalui tombol “Tinker this”.",
  "Buat circuit baru, lalu rakit ulang komponen secara mandiri.",
  "Jalankan simulasi dan modifikasi program atau komponennya.",
  "Gunakan video tutorial sebagai referensi dan diskusi kelas saat menemui kendala.",
];

const learningPlanPdf = "/karya-inovasi/xi-perencanaan-pembelajaran-mendalam-iot.pdf";

const objectives = [
  "Mengembangkan media pembelajaran IoT berbasis Tinkercad yang terintegrasi dengan model Project Based Learning (PjBL).",
  "Menguji kelayakan media agar dapat digunakan secara efektif dalam pembelajaran Informatika.",
  "Menganalisis peningkatan pemahaman konsep dan hasil belajar peserta didik pada materi Internet of Things.",
];

const implementationSteps = [
  {
    title: "Pengenalan konsep",
    description:
      "Guru mengaitkan Internet of Things dengan contoh nyata dalam kehidupan sehari-hari.",
  },
  {
    title: "Demonstrasi simulasi",
    description:
      "Guru memperkenalkan Tinkercad Circuits sebagai lingkungan untuk merancang rangkaian dan kode secara virtual.",
  },
  {
    title: "Scaffolding melalui tiga contoh",
    description:
      "Siswa mempelajari proyek LED, sensor kelembapan dengan LCD, dan sensor jarak secara bertahap dengan bimbingan guru.",
  },
  {
    title: "Proyek mandiri atau kelompok",
    description:
      "Siswa merumuskan masalah, merancang sirkuit, menyusun kode, dan menguji proyek IoT secara virtual dengan alur PjBL.",
  },
];

const evaluations = [
  {
    title: "Kelayakan",
    description:
      "Validasi ahli materi dan ahli media terhadap substansi, keterbacaan, serta desain media.",
  },
  {
    title: "Keefektifan",
    description:
      "Analisis nilai pre-test dan post-test untuk mengukur pemahaman konsep dan hasil belajar.",
  },
  {
    title: "Praktikalitas",
    description:
      "Angket untuk mengetahui respon, kepuasan, dan kemudahan penggunaan menurut siswa dan guru.",
  },
];

export function Innovation() {
  return (
    <section id="innovation" className="section bg-paper">
      <div className="max-w-6xl px-5 mx-auto">
        <SectionHeading
          eyebrow="04 · Karya Inovasi"
          title="Belajar IoT lewat simulasi, dari mencoba hingga berkarya."
          description="Rancangan media pembelajaran Informatika yang membantu peserta didik memahami Internet of Things meski sekolah memiliki keterbatasan perangkat praktik."
        />

        <article className="relative overflow-hidden rounded-[28px] bg-ink p-7 text-white shadow-premium md:p-10">
          <div className="absolute -right-10 -top-14 h-56 w-56 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-emerald-100">
                <Cpu size={15} />
                Informatika · Internet of Things
              </span>
              <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-tight md:text-4xl">
                Pengembangan Media Pembelajaran Internet of Things Berbasis
                Tinkercad
              </h3>
              <p className="mt-4 max-w-2xl leading-7 text-slate-200">
                Alat Peraga Edukatif digital berbasis web yang memadukan
                Tinkercad Circuits dengan tahapan Project Based Learning
                (PjBL)—memandu siswa dari identifikasi masalah hingga
                pengujian proyek IoT secara virtual.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 md:min-w-48">
              <p className="text-xs font-semibold uppercase tracking-[.16em] text-emerald-100">
                Sasaran
              </p>
              <p className="mt-2 font-semibold">Kelas XI</p>
              <p className="mt-1 text-sm text-slate-200">
                SMA N 11 Yogyakarta
              </p>
            </div>
          </div>
          <div className="relative mt-8 flex flex-wrap gap-2">
            {["Tinkercad Circuits", "Project Based Learning", "Virtual lab"].map(
              (label) => (
                <span
                  key={label}
                  className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-slate-100"
                >
                  {label}
                </span>
              ),
            )}
          </div>
        </article>

        <div className="mt-12 grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="card">
            <p className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Latar Belakang
            </p>
            <h3 className="mt-3 card-title">Praktik IoT tanpa lab fisik</h3>
            <p className="card-copy">
              Keterbatasan perangkat keras dan komponen IoT membuat materi
              praktik berisiko menjadi abstrak. Penggunaan komponen fisik yang
              terbatas juga dapat menimbulkan kekhawatiran rusak atau korsleting
              sehingga siswa kurang leluasa bereksperimen.
            </p>
            <div className="mt-5 rounded-2xl bg-paper p-4 text-sm leading-6 text-muted">
              Simulasi virtual memberi ruang aman untuk merancang, mencoba, dan
              memperbaiki rangkaian sebelum siswa melangkah ke proyek nyata.
            </div>
          </div>
          <div className="card">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-accent">
                <Target size={19} />
              </span>
              <div>
                <h3 className="card-title">Tujuan Pengembangan</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Media dirancang sebagai solusi pembelajaran praktik IoT yang
                  terstruktur dan sesuai dengan kebutuhan sekolah minim
                  fasilitas.
                </p>
              </div>
            </div>
            <ol className="mt-5 space-y-3">
              {objectives.map((objective, index) => (
                <li key={objective} className="flex gap-3 text-sm leading-6">
                  <span className="font-bold text-accent">
                    0{index + 1}
                  </span>
                  <span className="text-muted">{objective}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-14">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Prototipe · Scaffolding</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Tiga proyek simulasi bertahap
              </h3>
            </div>
            <span className="hidden text-sm text-muted sm:inline">
              Dari konsep dasar menuju aplikasi
            </span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {prototypes.map(({ number, title, description, icon: Icon }) => (
              <article key={number} className="card">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-50 text-accent">
                    <Icon size={20} />
                  </span>
                  <span className="text-sm font-bold tracking-[.16em] text-accent">
                    {number}
                  </span>
                </div>
                <h4 className="mt-5 card-title">{title}</h4>
                <p className="card-copy">{description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <div className="mb-6">
            <p className="eyebrow">Aktivitas Simulasi · Tinkercad</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Aktivitas praktik dari dasar hingga lanjut
            </h3>
            <p className="mt-3 max-w-3xl leading-7 text-muted">
              Setiap aktivitas mengajak siswa mempelajari rangkaian contoh,
              merakit ulang secara mandiri, lalu menguji dan memodifikasi
              simulasi. Pilih gambar untuk membukanya dalam ukuran penuh.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {tinkercadActivities.map((activity, index) => (
              <article
                key={activity.level}
                className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-soft"
              >
                <a
                  href={activity.image}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Buka gambar aktivitas ${activity.level} dalam ukuran penuh`}
                  className="group relative block bg-slate-100"
                >
                  <img
                    src={activity.image}
                    alt={activity.alt}
                    loading="lazy"
                    className="h-[28rem] w-full object-contain object-top transition duration-300 group-hover:scale-[1.02]"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 text-xs font-bold text-accent shadow-sm">
                    0{index + 1} · {activity.level}
                  </span>
                </a>
                <div className="p-5">
                  <h4 className="card-title">{activity.title}</h4>
                  <p className="card-copy">{activity.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
            <h4 className="font-semibold text-ink">Alur kerja peserta didik</h4>
            <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {activityInstructions.map((instruction, index) => (
                <li
                  key={instruction}
                  className="flex gap-3 text-sm leading-6 text-muted"
                >
                  <span className="font-bold text-accent">
                    0{index + 1}
                  </span>
                  {instruction}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-14 rounded-[26px] border border-slate-200 bg-white p-6 shadow-soft md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="eyebrow">Dokumen Rancangan</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                XI - Perencanaan Pembelajaran Mendalam IoT
              </h3>
            </div>
            <a
              href={learningPlanPdf}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Buka PDF
            </a>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <iframe
              src={learningPlanPdf}
              title="XI - Perencanaan Pembelajaran Mendalam IoT"
              className="h-[720px] w-full bg-white"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="eyebrow">Rancangan Penerapan</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Dari demonstrasi ke proyek pilihan siswa
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {implementationSteps.map((step, index) => (
                <article key={step.title} className="card">
                  <span className="text-xs font-bold uppercase tracking-[.14em] text-accent">
                    Tahap 0{index + 1}
                  </span>
                  <h4 className="mt-3 card-title">{step.title}</h4>
                  <p className="card-copy">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-soft md:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-accent">
                <UsersRound size={19} />
              </span>
              <div>
                <p className="eyebrow">Nilai Inovasi</p>
                <h3 className="mt-1 text-xl font-semibold text-ink">
                  Relevan dan bermanfaat
                </h3>
              </div>
            </div>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-muted">
              <li>
                <strong className="text-ink">Kebaruan:</strong> memadukan
                simulasi Tinkercad dengan sintaks PjBL untuk konteks sekolah
                minim fasilitas.
              </li>
              <li>
                <strong className="text-ink">Kreativitas:</strong> menggunakan
                virtual laboratory berbasis web sebagai alternatif praktik
                perangkat keras.
              </li>
              <li>
                <strong className="text-ink">Relevansi:</strong> selaras dengan
                pembelajaran Informatika dan kebutuhan praktik yang kontekstual.
              </li>
              <li>
                <strong className="text-ink">Landasan riset:</strong> literatur
                tentang Tinkercad dan PjBL mendukung potensinya; keberhasilan
                media ini tetap perlu diuji melalui evaluasi.
              </li>
            </ul>
          </aside>
        </div>

        <div className="mt-14 rounded-[26px] border border-slate-200 bg-white p-6 shadow-soft md:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Evaluasi Keberhasilan</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
                Tiga aspek yang akan diukur
              </h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted">
              Pengujian membantu memastikan media layak, efektif, dan mudah
              digunakan oleh guru maupun peserta didik.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {evaluations.map((item, index) => (
              <div key={item.title} className="rounded-2xl bg-paper p-5">
                <span className="text-xs font-bold text-accent">
                  0{index + 1}
                </span>
                <h4 className="mt-2 font-semibold text-ink">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
