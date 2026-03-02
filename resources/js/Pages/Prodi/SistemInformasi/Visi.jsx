import HomeLayout from '../../../Layouts/HomeLayout';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function VisiSistemInformasi({ }) {
    const { flash } = usePage().props;
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <HomeLayout header="Visi & Misi Sistem Informasi">
            <section className="hero-prodi">
                <div className="container">
                    <div className="row align-items-center">
                        {/* <!-- Left Column: Program Info --> */}
                        <div className="col-lg-6 text-lg-start text-center mb-5 mb-lg-0">
                            <span
                                className="badge rounded-pill bg-white bg-opacity-10 text-uppercase letter-spacing-2 mb-3 px-3 py-2 border border-white border-opacity-25"
                                style={{ letterSpacing: "2px", fontSize: "0.75rem "}}>profil prodi</span>

                            <h1 className="display-3 fw-bold mb-4 fade-in" style={{ fontFamily: 'Poppins, sans-serif' }}>Program
                                Studi<br/>Sistem Informasi</h1>

                            <p className="lead mb-5 opacity-75 fade-in">Menciptakan Lulusan Berkualitas di Bidang Teknologi Informasi
                                dengan kurikulum berbasis industri dan riset.</p>
                        </div>

                        {/* <!-- Right Column: Kaprodi Card --> */}
                        <div className="col-lg-5 offset-lg-1">
                            <div className="kaprodi-card position-relative p-5 rounded-4 text-center fade-in">
                                <div className="kaprodi-img-wrapper">
                                    {/* <!-- Use the image found in assets --> */}
                                    <img src=""
                                        alt="" />
                                </div>

                                <div className="mt-4 pt-3">
                                    <h4 className="fw-bold mb-1"></h4>
                                    <p className="small text-uppercase opacity-75 mb-4" style={{ letterSpacing: "1px" }}>KETUA PROGRAM STUDI
                                        SISTEM INFORMASI</p>

                                    <hr className="opacity-25 mx-auto my-4" style={{ width: "50px", borderTop: "2px solid white" }} />

                                    <p className="fst-italic opacity-75 small mb-4 lh-lg">
                                        "Kami berkomitmen mencetak lulusan yang tidak hanya ahli teknis, tetapi juga memiliki
                                        integritas dan visi kepemimpinan."
                                    </p>

                                    <div className="d-flex justify-content-center gap-3">
                                        <Link href="#"
                                            className="btn btn-sm btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                                            style={{ width: "40px", height: "40px", borderColor: "rgba(255,255,255,0.2)" }}><i
                                                className='bx bx-envelope'></i></Link>
                                        <Link href="#"
                                            className="btn btn-sm btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                                            style={{ width: "40px", height: "40px", borderColor: "rgba(255,255,255,0.2)" }}><i
                                                className='bx bxs-graduation'></i></Link>
                                        <Link href="#"
                                            className="btn btn-sm btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                                            style={{ width: "40px", height: "40px", borderColor: "rgba(255,255,255,0.2)" }}><i
                                                className='bx bx-share-alt'></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Main Content Section (Deskripsi Departemen) --> */}
            <section className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="desc-singkat col-md-6">
                            {/* <!-- Judul Kecil --> */}
                            <h3 className="si-small-title text-left">Deskripsi Singkat</h3>

                            {/* <!-- Deskripsi Departemen --> */}
                            <h2 className="si-section-title py-1 mb-4">Program Studi Sistem Informasi</h2>
                            <p className="si-text">Program Studi Sarjana Sistem Informasi merupakan salah satu Program Studi
                                dilingkungan Universitas Abulyatama yang berada Fakultas Teknik, Program ini memberikan
                                kesempatan kepada para lulusan SMA atau sederajat yang terbaik untuk mendapatkan
                                pendidikan dan keahlian di bidang sistem informasi pada tingkat sarjana. Program ini
                                dirancang untuk memenuhi kebutuhan terhadap tenaga-tenaga yang terampil dan profesional
                                di bidang sistem informasi/teknologi informasi.
                            </p>
                            <p className="si-text">Program Studi Sistem Informasi mengajarkan landasan ilmu pengetahuan dan
                                penerapan Teknologi Informasi dalam suatu organisasi. Terkait hal tersebut, kurikulum
                                Program Studi Sistem Informasi menekankan keseimbangan antara kemampuan manajemen dan
                                bisnis serta rekayasa informasi dan teknologi informasi. Selama perkuliahan,
                                mahasiswa akan dibekali dengan berbagai kompetensi di bidang tersebut agar mereka mampu
                                memberikan solusi yang optimal terkait dengan Sistem Informasi/Teknologi Informasi yang
                                dibutuhkan oleh organisasi.</p>
                        </div>

                        <div className="col-md-6">
                            {/* <!-- Slideshow Section --> */}
                            <hr className="si-border-gray" />
                            <div className="container-akred">
                                <img src="/asset/akred/Sertif Akred SI.jpg" className="img-akred" alt="Foto Departemen 1" />
                                <div className="overlay-akred">
                                    <div className="button-akred">
                                        <Link href="/asset/akred/Sertif Akred SI.jpg" download> Download </Link>
                                    </div>
                                </div>
                            </div>
                            <small className="text-center d-block mt-4 fw-bold">Sertifikat Akreditasi Program Studi Sistem
                                Informasi</small>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="si-vision-mission-section">
                <h2 className="si-visimisi text-center mb-3 mt-4" style={{ color: '#f9f3d9' }}>Visi & Misi Program Studi Sistem
                    Informasi</h2>
            </section>
            <div className="container si-vision-mission-container mb-5">
                <div className="row">
                    {/* <!-- Vision Section --> */}
                    <div className="col-md-6">
                        <h2 className="text-center si-section-title si-border-title py-4">Visi</h2>
                        <p className="si-vision-text mt-4">Menjadi program studi yang unggul di bidang transformasi dan inovasi digital
                            pada tahun 2035 berbasis manajemen organisasi dan kewirausahaan yang berwawasan global</p>
                    </div>
                    {/* <!-- Mission Section --> */}
                    <div className="col-md-6">
                        <h2 className="text-center si-section-title si-border-title py-4">Misi</h2>
                        <ul className="list-unstyled si-tujuan-list mt-4" style={{ color: '#f9f3d9', textAlign: 'justify' }}>
                            <li className="si-tujuan-item">
                                <i className='bx bx-check-circle tujuan-icon'></i>
                                Menyelenggarakan program studi yang memiliki standar mutu dalam hal tata
                                kelola organisasi untuk mendukung proses pengembangan keilmuan.
                            </li>
                            <li className="si-tujuan-item">
                                <i className='bx bx-check-circle tujuan-icon'></i>
                                Meningkatkan kualitas dan profesionalisme dosen dalam menjalankan tridarma
                                perguruan tinggi secara berkesinambungan.
                            </li>
                            <li className="si-tujuan-item">
                                <i className='bx bx-check-circle tujuan-icon'></i>
                                Membangun jaringan kerjasama dengan pemerintah, swasta atau dunia usaha dalam
                                pemanfaatan dan pengembangan sistem informasi.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="feedback-section">
                <div className="container">
                    <h1 className="border-title text-center mb-5"><b>Tujuan & Sasaran</b></h1>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <h2 className="text-center mb-4"><b>Tujuan</b></h2>
                            <ul className="tujuan-list">
                                <li>
                                    Menghasilkan lulusan dengan pengetahuan dan kemampuan teknis dalam bidang sistem informasi,
                                    khususnya terkait transformasi dan inovasi digital, analisis, serta pengolahan dan visualisasi
                                    data.
                                </li>
                                <li>
                                    Menghasilkan lulusan yang memiliki kemampuan dalam pemanfaatan teknologi atau sistem informasi
                                    untuk meningkatkan
                                    proses bisnis dan nilai tambah bagi organisasi, bisnis atau kewirausahaan.
                                </li>
                                <li>
                                    Menghasilkan lulusan yang mampu menganalisis, membangun dan mengembangkan aplikasi sistem
                                    informasi demi menyelesaikan
                                    suatu permasalahan dalam organisasi, dunia usaha atau masyarakat.
                                </li>
                                <li>
                                    Menghasilkan lulusan yang memiliki etika profesional, ketajaman analisis, kreatif dan
                                    komunikatif serta berkontribusi
                                    dalam pemanfaatan sistem informasi untuk pemberdayaan masyarakat.
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h2 className="text-center mb-4"><b>Sasaran Strategis</b></h2>
                            <ul className="tujuan-list mb-5">
                            </ul>

                            <div className="container mt-5 mb-5">
                                <div className="accordion teknik-accordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button 
                                                className={`accordion-button ${openAccordion !== 1 ? 'collapsed' : ''}`} 
                                                type="button"
                                                onClick={() => toggleAccordion(1)}
                                            >
                                                Sasaran pengembangan integrasi model sistem dan inovasi proses
                                            </button>
                                        </h2>
                                        <div className={`accordion-collapse collapse ${openAccordion === 1 ? 'show' : ''}`}>
                                            <div className="accordion-body">
                                                <p>
                                                    Lulusan memiliki kemampuan memahami, menerapkan dan mengintegrasikan
                                                    model sistem, menggunakan metode dan berbagai teknik peningkatan bisnis
                                                    proses yang mendatangkan suatu nilai untuk organisasi.
                                                </p>
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
                                                Sasaran bidang pemanfaatan sistem komputasi dan TI untuk techno-entrepreneurship
                                            </button>
                                        </h2>
                                        <div className={`accordion-collapse collapse ${openAccordion === 2 ? 'show' : ''}`}>
                                            <div className="accordion-body">
                                                <p>
                                                    Lulusan memiliki kemampuan dalam menggunakan metode, sistem komputasi atau
                                                    pemikiran logis untuk melakukan transformasi, inovasi digital, dengan
                                                    pengembangan
                                                    aplikasi, perancangan infrstruktur atau arsitektur TI untuk kebutuhan
                                                    organisasi,
                                                    bisnis atau techo-preuneurship secara mandiri, kreatif dan inovatif.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button 
                                                className={`accordion-button ${openAccordion !== 3 ? 'collapsed' : ''}`} 
                                                type="button"
                                                onClick={() => toggleAccordion(3)}
                                            >
                                                Sasaran penguatan kompetensi manajemen risiko dan pengambilan keputusan berbasis TI
                                            </button>
                                        </h2>
                                        <div className={`accordion-collapse collapse ${openAccordion === 3 ? 'show' : ''}`}>
                                            <div className="accordion-body">
                                                <p>
                                                    Lulusan memiliki kemampuan analisis, pengolahan, penyajian data, serta dapat
                                                    mengidentifikasi aspek keamanan informasi, pengelolaan risiko terkait manajemen
                                                    sistem atau teknologi informasi untuk kebutuhan pengambilan keputusan.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end accordion */}
                    </div>
                </div>
            </div> 
    {/* <!-- end main content --> */}
        </HomeLayout>
   
    );
}
