import React, { useState } from 'react';
import HomeLayout from '../../../Layouts/HomeLayout';
import { Link, usePage } from '@inertiajs/react';

export default function Himatesya({}) {
    const { flash } = usePage().props;
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <HomeLayout header="Himatesya">
            <section className="hero">
                <div className="container-hero text-center">
                    <h1 className="display-4 fw-bold fade-in">Himpunan Mahasiswa Teknik Sipil</h1>
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
                                <img src="asset/img/HIMATESYA.SVG" alt="Logo Universitas Abulyatama" />
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
                                            <i className="fas fa-book-open me-2"></i> Visi Himpunan Mahasiswa Teknik Sipil
                                        </button>
                                    </h2>
                                    <div 
                                        className={`accordion-collapse collapse ${openAccordion === 1 ? 'show' : ''}`}
                                    >
                                        <div className="accordion-body">
                                            Menjadikan HIMATESYA sebagai wadah untuk mengembangkan potensi dan kualitas diri 
                                            baik dibidang akademik maupun non akademik, demi terwujudnya peran aktif bagi 
                                            mahasiswa Teknik Sipil Abulyatama Aceh.
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
                                            <i className="fas fa-user-graduate me-2"></i> Misi Himpunan Mahasiswa Teknik Sipil
                                        </button>
                                    </h2>
                                    <div 
                                        className={`accordion-collapse collapse ${openAccordion === 2 ? 'show' : ''}`}
                                    >
                                        <div className="accordion-body">
                                            <ol>
                                                <li>
                                                    Mampu menjadi wadah dalam menampung aspirasi mahasiswa Teknik Sipil Abulyatama Aceh.
                                                </li>
                                                <li>
                                                    Meningkatkan sumber daya mahasiswa yang aktif, kreatif dibidang akademik maupun non akademik
                                                </li>
                                                <li>
                                                    Meningkatkan kualitas akademik dan keterampilan mahasiswa melalui program pelatihan dan workshop berkala
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
                    <img src="asset/img/Struktur Himatesya.png" alt="Struktur Organisasi Fakultas Teknik" className="org-maha-image" />
                    {/* <!-- Ganti URL gambar di atas dengan path gambar struktur organisasi Anda --> */}
                </div>
            </section>
        </HomeLayout>
    );
}
