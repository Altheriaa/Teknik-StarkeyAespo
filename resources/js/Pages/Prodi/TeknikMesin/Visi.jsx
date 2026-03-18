import HomeLayout from '../../../Layouts/HomeLayout';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function VisiTeknikMesin({ Kaprodi }) {
    const { flash } = usePage().props;
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <HomeLayout header="Visi & Misi Teknik Mesin">
            <section className="hero-prodi">
                <div className="container">
                    <div className="row align-items-center">
                        {/* <!-- Left Column: Program Info --> */}
                        <div className="col-lg-6 text-lg-start text-center mb-5 mb-lg-0">
                            <span
                                className="badge rounded-pill bg-white bg-opacity-10 text-uppercase letter-spacing-2 mb-3 px-3 py-2 border border-white border-opacity-25"
                                style={{ letterSpacing: "2px", fontSize: "0.75rem "}}>profil prodi</span>

                            <h1 className="display-3 fw-bold mb-4 fade-in" style={{ fontFamily: 'Poppins, sans-serif' }}>Program
                                Studi<br/>Teknik Mesin</h1>

                            <p className="lead mb-5 opacity-75 fade-in">Menciptakan Lulusan Berkualitas di Bidang Teknik Mesin.</p>
                        </div>

                        {/* <!-- Right Column: Kaprodi Card --> */}
                        <div className="col-lg-5 offset-lg-1">
                            <div className="kaprodi-card position-relative p-5 rounded-4 text-center fade-in">
                                <div className="kaprodi-img-wrapper">
                                    {/* <!-- Use the image found in assets --> */}
                                    <img src={`/storage/${Kaprodi.gambar_dosen}`}
                                        alt="" />
                                </div>

                                <div className="mt-4 pt-3">
                                    <h4 className="fw-bold mb-1">{Kaprodi.nama_dosen}</h4>
                                    <p className="small text-uppercase opacity-75 mb-4" style={{ letterSpacing: "1px" }}>KETUA PROGRAM STUDI
                                        Teknik Mesin</p>

                                    <hr className="opacity-25 mx-auto my-4" style={{ width: "50px", borderTop: "2px solid white" }} />

                                    <p className="fst-italic opacity-75 small mb-4 lh-lg">
                                        "Kami berkomitmen mencetak lulusan yang tidak hanya ahli teknis, tetapi juga memiliki
                                        integritas dan visi kepemimpinan."
                                    </p>
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
                            <h2 className="si-section-title py-1 mb-4">Program Studi Teknik Mesin</h2>
                            <p className="si-text">Program Studi Teknik Mesin Universitas Abulyatama merupakan salah satu bidang keilmuan yang mempelajari konversi 
                                energi, material dan pengecoran, manufaktur, desain dan analisis, dan memelihara sebuah sistem mekanik. Bertujuan menghasilkan lulusan 
                                yang berkompeten di bidang Mekanika, Teknik Material, Kinematika, Termodinamika, dan Energi. Program Studi Teknik Mesin Universitas Abulyatama 
                                menawarkan mata kuliah yang berfokus pada mata kuliah Proses Manufaktur, Koversi Energi, Proses Produksi dan Metalurgi. Dengan tenaga pengajar yang 
                                berprofesional yang berbasis pada penelitian, pratikum dan praktek lapangan, dan punya komitmen untuk mempersiapkan lulusan yang mampu menghadapi 
                                tantangan didunia kerja, baik dunia industry maupun teknologi yang terus berkembang.
                            </p>
                            <p className="si-text">Program Studi Teknik Mesin Universitas Abulyatama mempunyai fasilitas fasilitas laboratorium yang lengkap sebagai pendukung kegiatan 
                                belajar dan mengajar. Prgoram studi Teknik mesin juga memiliki mitra yang mendukung untuk kegiatan belajar mengajar pratiku dan kerja lapangan, termasuk 
                                pelaksanaan merdekan belajar kampus merdeka (MBKM).</p>
                        </div>

                        <div className="col-md-6">
                            {/* <!-- Slideshow Section --> */}
                            <hr className="si-border-gray" />
                            <div className="container-akred">
                                <img src="/asset/akred/FT-Mesin.jpg" className="img-akred" alt="Foto Departemen 1" />
                                <div className="overlay-akred">
                                    <div className="button-akred">
                                        <a href="/asset/akred/FT-Mesin.jpg" download> Download </a>
                                    </div>
                                </div>
                            </div>
                            <small className="text-center d-block mt-4 fw-bold">Sertifikat Akreditasi Program Studi Teknik Mesin</small>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="si-vision-mission-section">
                <h2 className="si-visimisi text-center mb-3 mt-4" style={{ color: '#f9f3d9' }}>Visi & Misi Program Studi Teknik Mesin</h2>
            </section>
            <div className="container si-vision-mission-container mb-5">
                <div className="row">
                    {/* <!-- Vision Section --> */}
                    <div className="col-md-6">
                        <h2 className="text-center si-section-title si-border-title py-4">Visi</h2>
                        <p className="si-vision-text mt-4">Pada Tahun 2035 menjadi Program Studi yang unggul dalam pengembangan teknologi tepat guna yang inovatif, 
                            islami serta berwawasan global.</p>
                    </div>
                    {/* <!-- Mission Section --> */}
                    <div className="col-md-6">
                        <h2 className="text-center si-section-title si-border-title py-4">Misi</h2>
                        <ul className="list-unstyled si-tujuan-list mt-4" style={{ color: '#f9f3d9', textAlign: 'justify' }}>
                            <li className="si-tujuan-item">
                                <i className='bx bx-check-circle tujuan-icon'></i>
                                Melaksanakan Tri Dharma perguruan tinggi secara berkelanjutan serta mengembangkan atmosfir akademik yang 
                                dinamis dan kondusif bagi civitas akademika yang mampu bersaing dan beretika.
                            </li>
                            <li className="si-tujuan-item">
                                <i className='bx bx-check-circle tujuan-icon'></i>
                                Melaksanakan sistem manajemen administrasi dan proses pembelajaran secara efektif dan efisien serta peningkatan mutu, 
                                sarana dan prasarana untuk mendukung proses pembelajaran.
                            </li>
                            <li className="si-tujuan-item">
                                <i className='bx bx-check-circle tujuan-icon'></i>
                                Peningkatan karya penelitian dan pengabdian kepada masyarakat dalam bidang teknik mesin yang berkualitas dan dipublikasikan 
                                pada tingkat nasional maupun international.
                            </li>
                            <li className="si-tujuan-item">
                                <i className='bx bx-check-circle tujuan-icon'></i>
                                Menjalin kerjasama yang saling menguntungkan dan bersinergi dengan instansi pemerintah (daerah dan pusat) dunia industri, dunia pendidikan (dalam dan luar negeri) dan asosiasi profesional.
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
                                    Menciptakan lulusan Teknik Mesin yang berkualitas dan berdaya saing tinggi.
                                </li>
                                <li>
                                    Menghasilkan karya penelitian dan pengabdian kepada masyarakat dalam bidang teknik mesin yang 
                                    berkualitas dan dipublikasikan pada tingkat nasional maupun international.
                                </li>
                                <li>
                                    Menciptakan organisasi dan tata kelola institusi yang efektif, efisien dan produktif.
                                </li>
                                <li>
                                    Terbentuknya kerjasama denga berbagai pihak yang mendukung pada peningkatan ketersediaan sumber 
                                    daya internal dan peningkatan kompetensi lulusan.
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
                                                Sasaran Bidang Pendidikan dan Pengajaran
                                            </button>
                                        </h2>
                                        <div className={`accordion-collapse collapse ${openAccordion === 1 ? 'show' : ''}`}>
                                            <div className="accordion-body">
                                                <ol>
                                                    <li>
                                                        Meningkatkan kualifikasi dan kompetensi dosen dan tenaga kependidikan (tendik), 
                                                        serta memberikan dukungan untuk pengembangan profesional secara berkelanjutan.
                                                    </li>
                                                </ol>
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
                                                Sasaran Bidang Penelitian dan Pengajaran
                                            </button>
                                        </h2>
                                        <div className={`accordion-collapse collapse ${openAccordion === 2 ? 'show' : ''}`}>
                                            <div className="accordion-body">
                                                <ol>
                                                    <li>
                                                        Mengembangkan dan memperbarui fasilitas pembelajaran, penelitian, dan pengabdian masyarakat guna mendukung 
                                                        pencapaian visi, misi, tujuan, dan sasaran.
                                                    </li>
                                                    <li>
                                                        Membangun kerja sama yang erat dengan industri untuk memastikan relevansi kurikulum dengan kebutuhan pasar kerja, 
                                                        serta berkontribusi pada solusi permasalahan masyarakat melalui program pengabdian.
                                                    </li>
                                                </ol>
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
                                                Sasaran Bidang Sumber Daya Manusia
                                            </button>
                                        </h2>
                                        <div className={`accordion-collapse collapse ${openAccordion === 3 ? 'show' : ''}`}>
                                            <div className="accordion-body">
                                                <ol>
                                                    <li>
                                                        Menerapkan sistem penjaminan mutu yang ketat untuk memastikan kualitas dan relevansi program pendidikan, 
                                                        serta mengevaluasi capaian visi, misi, dan tujuan secara berkala.
                                                    </li>
                                                    <li>
                                                        Mendorong kegiatan penelitian dan inovasi yang berorientasi pada masalah-masalah global, dengan menggalang 
                                                        kerja sama nasional dan internasional.
                                                    </li>
                                                </ol>
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
