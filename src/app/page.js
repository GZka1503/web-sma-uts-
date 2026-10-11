import Link from "next/link";
import { beritaList } from "@/data/beritaData";
import BeritaCard from "@/components/BeritaCard";

export default function HomePage() {
  const latestBerita = beritaList.slice(0, 3);

  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative z-10">
          <div>
            <span className="bg-yellow-400 text-blue-950 font-bold text-xs uppercase px-3 py-1 rounded-full mb-4 inline-block">
              Selamat Datang
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              SMA Negeri 18 <br /><span className="text-yellow-400">Kota Bekasi</span>
            </h1>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              "Mewujudkan Generasi Cerdas, Berkarakter Mulia, Unggul dalam Prestasi, dan Berwawasan Lingkungan."
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/about" 
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold px-6 py-3 rounded-lg shadow-md transition"
              >
                Profil Sekolah
              </Link>
              <Link 
                href="/berita" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Kabar Terkini
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-72 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img 
                src="/images/images (1).jpg" 
                alt="Gedung SMAN 18 Bekasi" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Sekilas SMAN 18 Kota Bekasi</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-slate-600 leading-relaxed text-base mb-6">
              SMA Negeri 18 Kota Bekasi berdedikasi menyediakan lingkungan belajar yang kondusif, didukung oleh tenaga pendidik yang berkompeten serta fasilitas pembelajaran terpadu untuk mendampingi perkembangan akademik dan non-akademik siswa.
            </p>
            <Link 
              href="/about" 
              className="text-blue-700 font-semibold hover:text-blue-900 inline-flex items-center gap-1"
            >
              Baca Selengkapnya Tentang Kami →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">Berita Terbaru</h2>
              <p className="text-slate-500 mt-1">Dapatkan update kegiatan dan prestasi sekolah kami</p>
            </div>
            <Link 
              href="/berita" 
              className="hidden sm:inline-block bg-white hover:bg-slate-200 text-blue-900 border border-blue-900 font-semibold px-4 py-2 rounded-lg text-sm transition"
            >
              Lihat Semua Berita
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBerita.map((item) => (
              <BeritaCard key={item.id} berita={item} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link 
              href="/berita" 
              className="inline-block bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg text-sm"
            >
              Lihat Semua Berita
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}