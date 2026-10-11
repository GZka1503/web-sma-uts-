import { beritaList } from "@/data/beritaData";
import BeritaCard from "@/components/BeritaCard";

export default function BeritaPage() {
  return (
    <div className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-slate-800">Daftar Berita & Informasi</h1>
          <p className="text-slate-500 mt-2">Seputar Kegiatan dan Pengumuman SMAN 18 Kota Bekasi</p>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beritaList.map((item) => (
            <BeritaCard key={item.id} berita={item} />
          ))}
        </div>

      </div>
    </div>
  );
}