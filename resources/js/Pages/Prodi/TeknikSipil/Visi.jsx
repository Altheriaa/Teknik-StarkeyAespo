import HomeLayout from '../../../Layouts/HomeLayout';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function VisiTeknikSipil({ }) {
    const { flash } = usePage().props;
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <HomeLayout header="Visi & Misi Teknik Sipil">
            <section className="hero-prodi">
                <div className="container">
                    <div className="row align-items-center">
                        {/* <!-- Left Column: Program Info --> */}
                        <div className="col-lg-6 text-lg-start text-center mb-5 mb-lg-0">
                            <span
                                className="badge rounded-pill bg-white bg-opacity-10 text-uppercase letter-spacing-2 mb-3 px-3 py-2 border border-white border-opacity-25"
                                style={{ letterSpacing: "2px", fontSize: "0.75rem "}}>profil prodi</span>

                            <h1 className="display-3 fw-bold mb-4 fade-in" style={{ fontFamily: 'Poppins, sans-serif' }}>Program
                                Studi<br/>Teknik Sipil</h1>

                            <p className="lead mb-5 opacity-75 fade-in">Menciptakan Lulusan Berkualitas di Bidang Teknik Sipil.</p>
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
                                        TEKNIK SIPIL</p>

                                    <hr className="opacity-25 mx-auto my-4" style={{ width: "50px", borderTop: "2px solid white" }} />

                                    <p className="fst-italic opacity-75 small mb-4 lh-lg">
                                        "Kami berkomitmen mencetak lulusan yang tidak hanya ahli teknis, tetapi juga memiliki
                                        integritas dan visi kepemimpinan."
                                    </p>

                                    {/* <div className="d-flex justify-content-center gap-3">
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
                                    </div> */}
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
                            <h2 className="si-section-title py-1 mb-4">Program Studi Teknik Sipil</h2>
                            <p className="si-text">Program Studi Teknik Sipil Universitas Abulyatama merupakan Program Studi Teknik Sipil 
                                swasta pertama di Aceh dengan lulusan berkualitas yang sudah berkiprah di tingkat daerah maupun nasional. 
                                Tujuan Program Studi Teknik Sipil Universitas adalah menghasilkan lulusan yang unggul di bidang rekayasa konstruksi.
                            </p>
                            <p className="si-text">Kurikulum yang diterapkan kepada mahasiswa dirancang untuk menghasilkan engineer yang handal di bidang 
                                rekayasa struktur, teknologi material, sumber daya air, transportasi, geoteknik dan manajemen konstruksi. Para lulusan 
                                diharapkan mampu bekerja di bidang perancangan gedung, jalan, jembatan, irigasi, pelabuhan dan berbagai fasilitas publik 
                                lainnya. Kami berkomitmen untuk menciptakan lulusan yang handal di bidang rekayasa konstruksi, material, dan mampu beradaptasi dengan perkembangan teknologi.</p>
                        </div>

                        <div className="col-md-6">
                            {/* <!-- Slideshow Section --> */}
                            <hr className="si-border-gray" />
                            <div className="container-akred">
                                <img src="/asset/akred/Sertif Akred Sipil.jpg" className="img-akred" alt="Foto Departemen 1" />
                                <div className="overlay-akred">
                                    <div className="button-akred">
                                        <Link href="/asset/akred/Sertif Akred SI.jpg" download> Download </Link>
                                    </div>
                                </div>
                            </div>
                            <small className="text-center d-block mt-4 fw-bold">Sertifikat Akreditasi Program Studi Teknik Sipil</small>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="si-vision-mission-section">
                <h2 className="si-visimisi text-center mb-3 mt-4" style={{ color: '#f9f3d9' }}>Visi & Misi Program Studi Teknik Sipil</h2>
            </section>
            <div className="container si-vision-mission-container mb-5">
                <div className="row">
                    {/* <!-- Vision Section --> */}
                    <div className="col-md-6">
                        <h2 className="text-center si-section-title si-border-title py-4">Visi</h2>
                        <p className="si-vision-text mt-4">Menjadi Program Studi yang unggul di bidang rekayasa infrastruktur 
                            dan bahan konstruksi berwawasan global pada tahun 2035.</p>
                    </div>
                    {/* <!-- Mission Section --> */}
                    <div className="col-md-6">
                        <h2 className="text-center si-section-title si-border-title py-4">Misi</h2>
                        <ul className="list-unstyled si-tujuan-list mt-4" style={{ color: '#f9f3d9', textAlign: 'justify' }}>
                            <li className="si-tujuan-item">
                                <i className='bx bx-check-circle tujuan-icon'></i>
                                Menyelenggarakan pendidikan teknik sipil yang berkualitas.
                            </li>
                            <li className="si-tujuan-item">
                                <i className='bx bx-check-circle tujuan-icon'></i>
                                Melaksanakan pengembangan ilmu teknik sipil melalui kegiatan penelitian di bidang 
                                rekayasa infrastruktur dan bahan konstruksi.
                            </li>
                            <li className="si-tujuan-item">
                                <i className='bx bx-check-circle tujuan-icon'></i>
                                Menerapkan ilmu teknik sipil melalui kegiatan pengabdian pada masyarakat sesuai 
                                kebutuhan masyarakat.
                            </li>
                            <li className="si-tujuan-item">
                                <i className='bx bx-check-circle tujuan-icon'></i>
                                Meningkatkan kualitas lulusan yang unggul dan berwawasan global
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
                                    Menghasilkan lulusan yang unggul, berwawasan global dan menguasai seluruh proses perencanaan, pelaksanaan, 
                                    pengawasan di bidang rekayasa infrastruktur dan bahan konstruksi.
                                </li>
                                <li>
                                    Menghasilkan lulusan yang berbudi pekerti luhur dan berdedikasi terhadap profesi ketekniksipilan.
                                </li>
                                <li>
                                    Menghasilkan penelitian dan pengabdian masyarakat di bidang rekayasa infrastruktur dan bahan konstruksi.
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
                                                Kualitas Pendidikan Teknik Sipil Yang Unggul
                                            </button>
                                        </h2>
                                        <div className={`accordion-collapse collapse ${openAccordion === 1 ? 'show' : ''}`}>
                                            <div className="accordion-body">
                                                <ol>
                                                    <li>
                                                        Mengelola kurikulum yang terintegrasi dengan kebutuhan industri.
                                                    </li>
                                                    <li>
                                                        Meningkatkan mutu proses pembelajaran.
                                                    </li>
                                                    <li>
                                                        Meningkatkan kualitas dosen melalui pelatihan, publikasi, dan kolaborasi riset.
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
                                                Penelitian dan Pengembangan Ilmu Teknik Sipil
                                            </button>
                                        </h2>
                                        <div className={`accordion-collapse collapse ${openAccordion === 2 ? 'show' : ''}`}>
                                            <div className="accordion-body">
                                                <ol>
                                                    <li>
                                                        Melaksanakan penelitian unggulan yang relevan dengan kebutuhan infrastruktur 
                                                        nasional dan global.
                                                    </li>
                                                    <li>Meningkatkan jumlah hibah penelitian, kolaborasi riset lintas institusi, dan publikasi
                                                         ilmiah berkualitas</li>
                                                    <li>
                                                        Menghasilkan karya inovatif berupa paten, prototype, atau model analitis untuk rekayasa bahan bangunan.
                                                    </li>
                                                    <li>
                                                        Menyediakan fasilitas riset yang mendukung ekosistem penelitian (laboratorium bahan bangunan, uji material, simula-simulasi).
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
                                                Pengabdian Kepada Masyarakat yang Relevan
                                            </button>
                                        </h2>
                                        <div className={`accordion-collapse collapse ${openAccordion === 3 ? 'show' : ''}`}>
                                            <div className="accordion-body">
                                                <ol>
                                                    <li>
                                                        Menyusun program-program pengabdian yang berorientasi kebutuhan nyata masyarakat.
                                                    </li>
                                                    <li>
                                                        Meningkatkan dampak pengabdian melalui kemitraan dengan pemerintah daerah, industri, dan masyarakat
                                                    </li>
                                                    <li>
                                                        Mengukur dampak pengabdian dengan indikator capaian manfaat dan kepuasan mitra masyarakat.
                                                    </li>
                                                    <li>
                                                        Menghasilkan rekomendasi kebijakan teknis berbasis hasil pengabdian untuk skala wilayah.
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button 
                                                className={`accordion-button ${openAccordion !== 4 ? 'collapsed' : ''}`} 
                                                type="button"
                                                onClick={() => toggleAccordion(4)}
                                            >
                                                Pengembangan Sumber Daya Manusia yang Berwawasan Global.
                                            </button>
                                        </h2>
                                        <div className={`accordion-collapse collapse ${openAccordion === 4 ? 'show' : ''}`}>
                                            <div className="accordion-body">
                                                <ol>
                                                    <li>
                                                        Membangun jejaring internasional dengan institusi teknik sipil terkemuka untuk pengembangan program pembelajaran atau kolaborasi riset.
                                                    </li>
                                                    <li>
                                                        Menanamkan nilai-nilai etika profesi dan tanggung jawab sosial pada kurikulum dan kegiatan kemahasiswaan.
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
