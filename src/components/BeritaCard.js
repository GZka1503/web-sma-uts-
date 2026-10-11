import Link from "next/link";

export default function BeritaCard({ berita }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-slate-100 flex flex-col h-full">
      <div className="h-48 w-full bg-slate-200 relative overflow-hidden">
        <img
          src={berita.image}
          alt={berita.title}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-xs font-semibold text-blue-600 mb-2 block">{berita.date}</span>
        <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2 hover:text-blue-600 transition">
          {berita.title}
        </h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
          {berita.summary}
        </p>
        <Link
          href={`/berita/${berita.id}`}
          className="inline-block text-center bg-blue-800 hover:bg-blue-900 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
        >
          Baca Selengkapnya
        </Link>
      </div>
    </div>
  );
}