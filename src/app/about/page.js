export default function AboutPage() {
  return (
    <div className="py-12 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-blue-900 mb-2">Profil SMA Negeri 18 Kota Bekasi</h1>
          <p className="text-slate-500">Mengenal Lebih Dekat Sekolah Kami</p>
        </div>

        <div className="space-y-8">
          

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-blue-800 pl-3">
              Sejarah Singkat
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              SMA Negeri 18 Kota Bekasi didirikan guna memenuhi kebutuhan sarana pendidikan menengah atas berkualitas bagi masyarakat di kawasan Mustikajaya dan sekitarnya. 
            </p>
            <p className="text-slate-600 leading-relaxed">
              Seiring berjalannya waktu, SMAN 18 Bekasi terus berkembang pesat dari segi fasilitas, mutu pengajaran, serta capaian prestasi siswa di ranah akademis dan seni-olahraga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">Visi Sekolah</h2>
              <p className="text-blue-100 italic leading-relaxed text-lg">
                "Terwujudnya Lulusan yang Bertaqwa, Berkarakter Mulia, Unggul dalam Prestasi, Serta Peduli Terhadap Lingkungan."
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-yellow-500 pl-3">
                Misi Sekolah
              </h2>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Menanamkan nilai-nilai keimanan dan ketaqwaan kepada Tuhan YME.</li>
                <li>Melaksanakan pembelajaran efektif untuk mengoptimalkan potensi siswa.</li>
                <li>Mendorong minat bakat siswa lewat kegiatan ekstrakurikuler.</li>
                <li>Mewujudkan lingkungan sekolah yang bersih, asri, dan berwawasan hijau.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-blue-800 pl-3">
              Fasilitas & Ekstrakurikuler
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">🏫 Fasilitas Unggulan</h3>
                <ul className="list-square list-inside text-sm text-slate-600 space-y-1">
                  <li>Ruang Kelas Ber-AC & Proyektor</li>
                  <li>Laboratorium IPA & Komputer</li>
                  <li>Perpustakaan Digital</li>
                  <li>Lapangan Olahraga Serbaguna</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">⚽ Ekstrakurikuler</h3>
                <ul className="list-square list-inside text-sm text-slate-600 space-y-1">
                  <li>Paskibra & Pramuka</li>
                  <li>Palang Merah Remaja (PMR)</li>
                  <li>Futsal, Basket & Voli</li>
                  <li>Seni Tari & Band Sekolah</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-yellow-500 pl-3">
              Alamat Lengkap
            </h2>
            <p className="text-slate-600">
              <strong>SMA Negeri 18 Kota Bekasi</strong><br />
              Jl. Kintamani No.7, RT.008/RW.004, Aren Jaya, Kec. Bekasi Timur., Kota Bekasi, Jawa Barat 17111
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}