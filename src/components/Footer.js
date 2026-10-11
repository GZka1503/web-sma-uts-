import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6 border-t-4 border-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
  
        <div>
          <h3 className="text-xl font-bold text-white mb-3">SMA Negeri 18 Kota Bekasi</h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            Mengembangkan potensi peserta didik secara optimal, cerdas, dan berakhlak mulia berbasis iman dan takwa.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Alamat & Kontak</h4>
          <p className="text-sm text-slate-400 leading-relaxed mb-2">
            📍Jl. Kintamani No.7, RT.008/RW.004, Aren Jaya, Kec. Bekasi Timur., Kota Bekasi, Jawa Barat 17111
          </p>
          <p className="text-sm text-slate-400">📞  (021) 82653176</p>
          <p className="text-sm text-slate-400">✉️ sman18bks@gmail.com</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Navigasi Halaman</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition">Beranda (Home)</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-400 transition">Profil Sekolah (About)</Link>
            </li>
            <li>
              <Link href="/berita" className="hover:text-yellow-400 transition">Kabar & Berita Terkini</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
        <p>© 2026 SMA Negeri 18 Kota Bekasi. All Rights Reserved.</p>
      </div>
    </footer>
  );
}