import HomeLayout from '../../Layouts/HomeLayout';
import { Link, usePage } from '@inertiajs/react';
import React, { useState } from 'react';

export default function EngineeringCareerCentre({ flyers = [] }) {
    const { flash } = usePage().props;

    const [showModal, setShowModal] = useState(false);
    const [selectedFlyer, setSelectedFlyer] = useState(null);

    const handleShowModal = (flyer) => {
        setSelectedFlyer(flyer);
        setShowModal(true);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setTimeout(() => setSelectedFlyer(null), 300);
        document.body.style.overflow = 'auto';
    };

    return (
        <HomeLayout header="Engineering Career Centre">
            <section className="hero">
                <div className="container-hero text-center">
                    <h1 className="display-4 fw-bold">Engineering Career Center (ECC)
                    </h1>
                </div>
            </section>

            {/* <!-- Informasi Rekrutmen Tenaga Kerja Section --> */}
            <section className="sectionTujuanTracerStudy text-center py-5 mt-4" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container mt-2">
                    <h2 className="fw-bold" style={{ color: '#1B263B', textTransform: 'uppercase', letterSpacing: '1px' }}>Flyer Penerimaan Tenaga Kerja</h2>
                    <div className="d-flex justify-content-center mb-3">
                        <div style={{ width: '50px', height: '3px', backgroundColor: '#FFC107' }}></div>
                    </div>
                    <p className="text-muted mb-5">Temukan peluang karir terbaru dari mitra industri kami</p>

                    <div className="row justify-content-center">
                        {flyers.length > 0 ? flyers.map((flyer, index) => (
                            <div className="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch" key={index}>
                                <div 
                                    className="card border-0 shadow-sm w-100 h-100 card-hover" 
                                    style={{ 
                                        borderRadius: '12px', 
                                        overflow: 'hidden', 
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        cursor: 'pointer',
                                        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
                                    }}
                                    onClick={() => handleShowModal(flyer)}
                                    title="Klik untuk melihat detail"
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.classList.replace('shadow-sm', 'shadow');
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.classList.replace('shadow', 'shadow-sm');
                                    }}
                                >
                                    <div className="position-relative w-100">
                                        <img 
                                            src={`/storage/${flyer.gambar}`} 
                                            className="card-img-top" 
                                            alt={flyer.judul} 
                                            style={{ width: '100%', height: '320px', objectFit: 'cover', objectPosition: 'top' }} 
                                        />
                                    </div>
                                    <div className="card-body d-flex flex-column text-start p-4 bg-white">
                                        <h5 className="card-title fw-bold" style={{ fontSize: '1.05rem', color: '#1B263B', lineHeight: '1.4' }}>{flyer.judul}</h5>
                                        <p className="card-text text-muted mb-4 mt-2" style={{ 
                                            fontSize: '0.85rem', 
                                            display: '-webkit-box', 
                                            WebkitLineClamp: 3, 
                                            WebkitBoxOrient: 'vertical', 
                                            overflow: 'hidden',
                                            flexGrow: 1,
                                            lineHeight: '1.6'
                                        }}>
                                            {flyer.deskripsi.replace(/(<([^>]+)>)/gi, "").substring(0, 100)}...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <div className="col-12 py-5">
                                <p className="text-muted" style={{ fontSize: '1.1rem' }}>Belum ada informasi rekrutmen saat ini.</p>
                            </div>
                        )}
                    </div>

                    {flyers.length > 0 && (
                        <div className="mt-5 mb-3">
                            <Link href="/flyer-ketenaga-kerja" className="text-success fw-bold text-decoration-none" style={{ fontSize: '1rem', color: '#1E7E34' }}>
                                Lihat Semua Lowongan &rarr;
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* Modal for Details */}
            {showModal && selectedFlyer && (
                <>
                    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1050, overflowY: 'auto' }}>
                        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                            <div className="modal-content overflow-hidden shadow-lg" style={{ borderRadius: '15px', border: 'none' }}>
                                <div className="modal-header border-0 p-0" style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 10 }}>
                                    <button type="button" className="btn-close bg-white rounded-circle shadow-sm p-2" onClick={handleCloseModal} aria-label="Close" style={{ opacity: 0.9 }}></button>
                                </div>
                                <div className="modal-body p-0 d-flex flex-column flex-md-row">
                                    <div className="col-md-5 bg-light d-flex align-items-center justify-content-center p-0" style={{ minHeight: '300px' }}>
                                        <img 
                                            src={`/storage/${selectedFlyer.gambar}`} 
                                            alt={selectedFlyer.judul} 
                                            className="img-fluid" 
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', maxHeight: '100vh' }} 
                                        />
                                    </div>
                                    <div className="col-md-7 p-4 p-md-5 d-flex flex-column" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                                        <div className="mt-3 mt-md-0">
                                            <h3 className="fw-bold mb-3" style={{ color: '#1B263B', lineHeight: '1.3' }}>{selectedFlyer.judul}</h3>
                                            <div className="mb-4" style={{ width: '50px', height: '3px', backgroundColor: '#FFC107' }}></div>
                                            <p className="text-muted" style={{ whiteSpace: 'pre-wrap', lineHeight: '1.8', fontSize: '0.95rem' }}>
                                                {selectedFlyer.deskripsi.replace(/(<([^>]+)>)/gi, "").substring(0, 100)}...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* <!-- Main Content -->
            <!-- Header Section --> */}
            <section className="my-5 mt-5">
                <div className="container">
                    <div className="row">
                        {/* {{-- deskripsi singkat --}} */}
                        <div className="desc-singkat col-md-6">
                            {/* <!-- Judul Kecil --> */}
                            <h3 className="si-small-title text-left">Profile Career Center</h3>

                            {/* <!-- Deskripsi Departemen --> */}
                            <h2 className="si-section-title py-1 mb-4">Fakultas Teknik Universitas Abulyatama
                            </h2>
                            <p className="si-text">Profil Engineering Career Center (ECC)
                                Engineering Career Center (ECC) merupakan unit kerja di bawah Fakultas Teknik Universitas Abulyatama
                                yang berfokus pada pengembangan karir mahasiswa teknik dalam menghadapi tantangan kebutuhan tenaga
                                kerja di dunia usaha dan dunia industri (DUDI). ECC hadir sebagai jembatan antara kampus dan
                                industri, dengan tujuan utama meningkatkan daya saing lulusan Fakultas Teknik UNAYA agar siap
                                berkontribusi secara profesional di berbagai sektor strategis.
                            </p>
                            <p className="si-text">
                                •⁠ ⁠Informasi Karir Teknik: Menyediakan akses informasi terkini mengenai peluang kerja, magang, dan
                                riset di bidang keteknikan.
                            </p>
                            <p className="si-text">
                                •⁠ ⁠Bimbingan & Konsultasi Karir: Membantu mahasiswa merancang jalur karir sesuai minat dan
                                kompetensi teknis yang dimiliki.
                            </p>
                            <p className="si-text">
                                •⁠ ⁠Workshop & Seminar Industri: Menyelenggarakan pelatihan, seminar, dan kuliah tamu bersama
                                praktisi industri untuk memperkuat keterampilan teknis dan soft skills.
                            </p>
                            <p className="si-text">
                                •⁠ ⁠Sumber Daya Online Karir: Menyediakan platform digital untuk pencarian lowongan kerja,
                                pengembangan CV, dan simulasi wawancara.
                            </p>
                            <p className="si-text">
                                •⁠ ⁠Jaringan & Mentoring Profesional: Memfasilitasi hubungan dengan alumni, praktisi, dan perusahaan
                                mitra untuk mentoring serta peluang kerja nyata.
                            </p>

                        </div>

                        {/* <!-- gambar gedung teknik --> */}
                        <div className="col-md-6">
                            {/* <!-- Slideshow Section --> */}
                            <hr className="si-border-gray" />
                            <div className="container-eec">
                                <img src="/asset/Gedung Teknik.jpeg" className="img-eec" alt="Foto Gedung" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Tujuan Tracer Study Section --> */}
            <section className="sectionTujuanTracerStudy">
                <div className="container">
                    <h2>Tujuan dan Visi Misi Engineering Career Center Teknik Unaya</h2>

                    {/* <!-- Tujuan Tracer Study List --> */}
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="listTujuanTracerStudy">
                                <strong style={{ fontWeight: 600, color: '#012d04' }}>Tujuan</strong>
                                <p className="mt-2 text-start" style={{ fontSize: '15px' }}><strong>Dengan hadirnya ECC, Fakultas Teknik
                                        Universitas Abulyatama
                                        berkomitmen
                                        untuk:
                                    </strong></p>
                                <li className="mt-2"><strong>⁠Memperkuat</strong> employability mahasiswa melalui pelatihan berbasis
                                    kompetensi.
                                </li>
                                <li><strong>Meningkatkan</strong> keterhubungan lulusan dengan kebutuhan DUDI.
                                </li>
                                <li><strong>Mengurangi kesenjangan</strong> antara keterampilan akademik dan tuntutan dunia kerja.
                                </li>
                                <li><strong>Mendorong kontribusi</strong> nyata lulusan teknik dalam pembangunan nasional dan
                                    global.
                                </li>
                                <p className="mt-2 text-start" style={{ fontSize: '15px' }}><strong>ECC bukan hanya pusat layanan karir,
                                        tetapi juga mitra strategis mahasiswa dalam menyiapkan diri menghadapi era industri yang
                                        dinamis dan kompetitif.
                                    </strong></p>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="listTujuanTracerStudy">
                                <strong style={{ fontWeight: 600, color: '#012d04' }}>Visi</strong>
                                <p className="mt-2">Menjadi pusat lembaga karir dan kewirausahaan yang inovatif, unggul
                                    dan
                                    berwawasan global serta mempersiapkan lulusan Fakultas Teknik yang menguasai teknologi, berdaya
                                    saing tinggi di dunia kerja, dan berkontribusi nyata dalam pembangunan nasional maupun
                                    internasional</p>
                            </ul>
                            <ul className="listTujuanTracerStudy">
                                <strong style={{ fontWeight: 600, color: '#012d04' }}>Misi</strong>
                                <li className="mt-2">
                                    Menyelenggarakan layanan karir yang inovatif dan unggul
                                </li>
                                <li>
                                    Mengembangkan jejaring strategis dengan dunia usaha dan dunia industri (DUDI)
                                </li>
                                <li>
                                    Mendorong penguatan kompetensi teknis dan soft skills mahasiswa
                                </li>
                                <li>
                                    Mengurangi kesenjangan antara dunia akademik dan dunia kerja dengan merancang program yang
                                    relevan, aplikatif, dan berkelanjutan sesuai tuntutan era industri 4.0 dan society 5.0
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </HomeLayout>
    );
}
