import React, { useState } from 'react';
import HomeLayout from '../../../Layouts/HomeLayout';
import { Link, usePage } from '@inertiajs/react';

export default function Hmm({}) {
    const { flash } = usePage().props;
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <HomeLayout header="Hmm">
            <section className="hero">
                <div className="container-hero text-center">
                    <h1 className="display-4 fw-bold fade-in">Himpunan Mahasiswa Teknik Mesin</h1>
                    <p className="lead fade-in">Suara Mahasiswa, Aksi Nyata: Bersama Membangun Kampus yang Lebih Baik</p>
                </div>
            </section>

            {/* <!-- Content --> */}
            <div className="bem-section">
                <div className="container">
                    {/* <!-- <h2 className="bem-section-title mb-5">Visi dan Misi <br>Badan Eksekutif Mahasiswa</h2> --> */}
                    <div className="row g-4 align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <div className="bem-image-wrapper">
                                <img src="asset/img/HMM.SVG" alt="Logo Universitas Abulyatama" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="accordion bem-accordion" id="accordionMasukan">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button 
                                            className={`accordion-button ${openAccordion !== 1 ? 'collapsed' : ''}`} 
                                            type="button" 
                                            onClick={() => toggleAccordion(1)}
                                        >
                                            <i className="fas fa-book-open me-2"></i> Visi Himpunan Mahasiswa Teknik Mesin
                                        </button>
                                    </h2>
                                    <div 
                                        className={`accordion-collapse collapse ${openAccordion === 1 ? 'show' : ''}`}
                                    >
                                        <div className="accordion-body">
                                            Menjadikan wadah unggulan dalam penegembangan akademik yang berkualitas, inovatif, dan 
                                            adaptif, dengan menjunjung solidaritas dan sinergi antara mahasiswa Teknik Mesin, Dosen 
                                            serta Industri untuk menciptakan lulusan yang kompeten dan siap menghadapai tantangan global.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button 
                                            className={`accordion-button ${openAccordion !== 2 ? 'collapsed' : ''}`} 
                                            type="button" 
                                            onClick={() => toggleAccordion(2)}
                                        >
                                            <i className="fas fa-user-graduate me-2"></i> Misi Himpunan Mahasiswa Teknik Mesin
                                        </button>
                                    </h2>
                                    <div 
                                        className={`accordion-collapse collapse ${openAccordion === 2 ? 'show' : ''}`}
                                    >
                                        <div className="accordion-body">
                                            <ol>
                                                <li>
                                                    Memfasilitasi pengembangan soft skills Mahasiswa Teknik Mesin seperti kemampuan kepemimpinan , dan 
                                                    kerja tim, yang mendukung kesuksesan akademik dan profesional.
                                                </li>
                                                <li>
                                                    Mendorong Mahasiswa untuk aktif dalam penelitian dan pengembangan teknologi dalam menyelenggarakan 
                                                    kegiatan proyek, diskusi, dan pelatihan.
                                                </li>
                                                <li>
                                                    Membangun kemitraaan yang lebih erat dengan dosen dan alumni untuk menciptakan peluang belajar yang lebih 
                                                    aplikatif.
                                                </li>
                                                <li>
                                                    Mengoptimalkan penggunaan teknologi dan sumber daya untuk mempermudah akses informasi akademik dan kegiatan belajar.
                                                </li>
                                                <li>
                                                    Menyediakan lingkungan yang solid dan menghargai ide dan keanekaragaman anggota.
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Struktur Organisasi Section --> */}

            <section className="struktur-section">
                <section className="si-vision-mission-section">
                    <h2 className="si-visimisi text-center mt-2" style={{ color: '#f9f3d9' }}>Struktur Kepengurusan Himpunan Mahasiswa Teknik Sipil</h2>
                </section>
                <div className="container-himpunan text-center">
                    {/* <!-- <h6 className="bem-section-title">Struktur Organisasi Himasi</h6> --> */}
                    {/* <!-- Gambar Struktur Organisasi --> */}
                    <img src="asset/img/Struktur Hmm.png" alt="Struktur Organisasi Fakultas Teknik" className="org-maha-image" />
                    {/* <!-- Ganti URL gambar di atas dengan path gambar struktur organisasi Anda --> */}
                </div>
            </section>
        </HomeLayout>
    );
}
