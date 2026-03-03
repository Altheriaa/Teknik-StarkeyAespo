import React, { useState } from 'react';
import HomeLayout from '../../../Layouts/HomeLayout';
import { Link, usePage } from '@inertiajs/react';

export default function Bem({}) {
    const { flash } = usePage().props;
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <HomeLayout header="BEM">
            <section className="hero">
                <div className="container-hero text-center">
                    <h1 className="display-4 fw-bold fade-in">Badan Eksekutif Mahasiswa</h1>
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
                                <img src="asset/img/BEMFT-UNAYA-logo.png" alt="Logo Universitas Abulyatama" />
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
                                            <i className="fas fa-book-open me-2"></i> Visi BEM-FT UNAYA
                                        </button>
                                    </h2>
                                    <div 
                                        className={`accordion-collapse collapse ${openAccordion === 1 ? 'show' : ''}`}
                                    >
                                        <div className="accordion-body">
                                            Mewujudkan BEM-FT UNAYA sebagai organisasi yang aktif, kontributif, dalam mewadahi
                                            segala aspek yang berlandaskan Tridharma Perguruan Tinggi
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
                                            <i className="fas fa-user-graduate me-2"></i> Misi BEM-FT UNAYA
                                        </button>
                                    </h2>
                                    <div 
                                        className={`accordion-collapse collapse ${openAccordion === 2 ? 'show' : ''}`}
                                    >
                                        <div className="accordion-body">
                                            <ol>
                                                <li>
                                                    Membangun komunikasi yang baik sehingga menjadi penghubung dan wadah aspirasi
                                                    mahasiswa teknik
                                                </li>
                                                <li>
                                                    Menjalin hubungan internal dan eksternal yang harmonis demi terciptanya rasa
                                                    kekeluargaan
                                                </li>
                                                <li>
                                                    Meningkatkan ilmu pengetahuan, kaderisasi untuk membentuk SDM berwawasan luas dan
                                                    kompeten di bidang akademik dan non-akademik
                                                </li>
                                                <li>
                                                    Meningkatkan potensi yang dimiliki mahasiswa teknik untuk meraih prestasi dan
                                                    bermanfaat bagi masyarakat
                                                </li>
                                                <li>
                                                    Menemukan kreatifitas dan semangat wirausaha agar mahasiswa dapat mandiri dan
                                                    berdaya saing
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
                    <h2 className="si-visimisi text-center mt-2" style={{ color: '#f9f3d9' }}>Struktur Kepengurusan BEM-FT UNAYA</h2>
                </section>
                <div className="container-himpunan text-center">
                    {/* <!-- <h6 className="bem-section-title">Struktur Organisasi Himasi</h6> --> */}
                    {/* <!-- Gambar Struktur Organisasi --> */}
                    <img src="asset/img/bem teknik.png" alt="Struktur Organisasi Fakultas Teknik" className="org-maha-image" />
                    {/* <!-- Ganti URL gambar di atas dengan path gambar struktur organisasi Anda --> */}
                </div>
            </section>
        </HomeLayout>
    );
}
