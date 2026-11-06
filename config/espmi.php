<?php

return [
    // Daftar program studi yang tampil di filter halaman e-SPMI.
    'program_studi' => [
        'Teknik Mesin',
        'Teknik Sipil',
        'Sistem Informasi',
    ],

    // Siklus audit (kunci => label). Tambah baris baru setiap siklus berikutnya,
    // mis. 'VII-2027' => 'Siklus VII – Tahun 2027'.
    'siklus' => [
        'VI-2026' => 'Siklus VI – Tahun 2026',
    ],

    // Siklus yang terpilih secara default
    'siklus_aktif' => 'VI-2026',

    // Rentang skor (sesuai angka di depan pilihan Kesimpulan Verifikasi)
    'skor_min' => 1,
    'skor_max' => 4,

    // Pilihan "Kesimpulan Verifikasi" (skor => label di dropdown + status di tabel).
    // Skor disimpan di database; label & status hanya tampilan.
    'kesimpulan' => [
        4 => ['label' => 'Ada/Lengkap/Terpenuhi',     'status' => 'Terpenuhi'],
        3 => ['label' => 'Ada tetapi belum lengkap',  'status' => 'Belum Lengkap'],
        2 => ['label' => 'Proses Penyusunan',         'status' => 'Proses Penyusunan'],
        1 => ['label' => 'Tidak Ada/Tidak Tersedia',  'status' => 'Tidak Ada'],
    ],

    // Kategori capaian (urut dari batas tertinggi) — sama dengan sheet HASIL AL
    'kategori' => [
        ['min' => 85, 'label' => 'Sangat Memenuhi'],
        ['min' => 75, 'label' => 'Memenuhi'],
        ['min' => 60, 'label' => 'Memerlukan Perbaikan'],
        ['min' => 0,  'label' => 'Belum Memenuhi'],
    ],

    // ---------------------------------------------------------------
    // Laporan cetak DT & PTK (sheet "DT" dan "PTK" pada instrumen AMI)
    // ---------------------------------------------------------------
    'laporan' => [
        'lembaga' => 'LEMBAGA PENJAMINAN MUTU (LPjM)',
        'universitas' => 'UNIVERSITAS ABULYATAMA',
        'alamat' => 'Jln. Blang Bintang Lama Km. 8,5 Telp.  (0651) 23699, 34488, Lampoh Keude Aceh Besar',
        'program_kerja' => 'PROGRAM KERJA AUDIT MUTU INTERNAL BIDANG AKADEMIK',
        'logo' => 'asset/img/espmi/logo-unaya.png', // relatif terhadap folder public/

        // Dipakai pada kotak identitas PTK
        'ruang_lingkup' => 'Implementasi Pelaksanaan Tridrarma PT',
        'kriteria' => 'Standar Unaya; Renstra PT; Renstra LPPM dan Instrumen Akreditasi',

        // Penandatangan tetap (sebelumnya diketik langsung di Excel)
        'ketua_bidang_ami' => 'Musran, S.Pd., M.Pd',
        'ketua_lpjm' => 'Dr. Sari Wardani, S.T., M.T',

        // Distribusi dokumen (bagian 8 pada DT)
        'distribusi' => [
            ['Auditee', 'Auditor'],
            ['LPjM', 'Arsip'],
        ],
    ],

    // Kategori temuan & unit penanggung jawab menurut skor
    // (rumus IF pada kolom J dan K sheet DT)
    'temuan' => [
        4 => ['kategori' => 'Memenuhi', 'unit' => 'Selesai'],
        3 => ['kategori' => 'OB',       'unit' => 'Ka. Prodi'],
        2 => ['kategori' => 'KTS',      'unit' => 'Dekanat'],
        1 => ['kategori' => 'KTB',      'unit' => 'Dekanat'],
    ],
];