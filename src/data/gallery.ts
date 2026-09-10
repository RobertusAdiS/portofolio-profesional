export interface GalleryItem {
  id: string;
  title: string;
  category: "Praktik Mengajar" | "Bimbingan & Mentoring" | "Presentasi & Inovasi" | "PPL & Lapangan";
  type: "image" | "video";
  src: string;
  description: string;
  date?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Praktik Mengajar di Kelas",
    category: "Praktik Mengajar",
    type: "image",
    src: "/gallery/Mengajar 1.jpeg",
    description: "Pelaksanaan praktik mengajar interaktif dan berpusat pada peserta didik di dalam kelas.",
    date: "Dokumentasi PPL"
  },
  {
    id: "2",
    title: "Bimbingan Reflektif dengan Guru Pamong",
    category: "Bimbingan & Mentoring",
    type: "image",
    src: "/gallery/Bimbingan dengan Guru pamong.jpeg",
    description: "Diskusi refleksi dan evaluasi rancangan pembelajaran serta strategi mengajar bersama Guru Pamong.",
    date: "Mentoring PPL"
  },
  {
    id: "3",
    title: "Bimbingan Akademik bersama Dosen Pembimbing",
    category: "Bimbingan & Mentoring",
    type: "image",
    src: "/gallery/Bimbingan dengan dosen.jpg",
    description: "Konsultasi dan pengarahan penyusunan modul pembelajaran serta artifak portofolio bersama Dosen Pembimbing Lapangan.",
    date: "Bimbingan Akademik"
  },
  {
    id: "4",
    title: "Presentasi Produk Inovasi Pembelajaran",
    category: "Presentasi & Inovasi",
    type: "image",
    src: "/gallery/Presentasi Produk.jpeg",
    description: "Pemaparan media dan produk inovasi pembelajaran berbasis TPACK untuk meningkatkan antusiasme siswa.",
    date: "Unjuk Kerja"
  },
  {
    id: "5",
    title: "Diseminasi & Gelar Karya Pembelajaran",
    category: "Presentasi & Inovasi",
    type: "image",
    src: "/gallery/Presentasi Produk 2.jpeg",
    description: "Demonstrasi interaktif penggunaan modul dan media pembelajaran inovatif.",
    date: "Gelar Karya"
  },
  {
    id: "6",
    title: "Upacara Penerjunan Mahasiswa PPL",
    category: "PPL & Lapangan",
    type: "image",
    src: "/gallery/penerjunan.jpeg",
    description: "Kegiatan serah terima dan penyambutan resmi penerjunan mahasiswa PPG di sekolah mitra.",
    date: "Penerjunan PPL"
  }
];
