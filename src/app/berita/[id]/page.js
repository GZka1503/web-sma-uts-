import Link from "next/link";
import { beritaList } from "@/data/beritaData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return beritaList.map((berita) => ({
    id: berita.id,
  }));
}

export default async function DetailBeritaPage({ params }) {
  const { id } = await params;
  const berita = beritaList.find((b) => b.id === id);

  if (!berita) {
    notFound();
  }

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link
          href="/berita"
          className="inline-flex items-center text-sm font-semibold text-blue-800 hover:text-blue-950 mb-6 transition"
        >
          ← Kembali ke Halaman Berita
        </Link>

        <article className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden p-6 sm:p-10">
          
          <span className="text-xs font-bold text-yellow-600 uppercase tracking-wider bg-yellow-50 px-3 py-1 rounded-full">
            Berita Sekolah
          </span>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4 leading-tight">
            {berita.title}
          </h1>

          <p className="text-sm text-slate-400 mb-6 pb-4 border-b border-slate-100">
            Diterbitkan pada: <span className="font-medium text-slate-600">{berita.date}</span>
          </p>

          <div className="w-full h-64 sm:h-96 bg-slate-200 rounded-xl overflow-hidden mb-8">
            <img
              src={berita.image}
              alt={berita.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose max-w-none text-slate-700 leading-relaxed space-y-4 whitespace-pre-line text-base">
            {berita.content}
          </div>

          <div className="mt-10 pt-6 border-t border-slate-100 flex justify-between items-center">
            <span className="text-xs text-slate-400">SMAN 18 Kota Bekasi</span>
            <Link
              href="/berita"
              className="bg-blue-900 hover:bg-blue-950 text-white text-xs font-semibold px-4 py-2 rounded-lg transition"
            >
              Berita Lainnya
            </Link>
          </div>

        </article>

      </div>
    </div>
  );
}