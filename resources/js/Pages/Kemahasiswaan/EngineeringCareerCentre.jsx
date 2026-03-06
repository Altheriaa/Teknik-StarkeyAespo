import HomeLayout from '../../Layouts/HomeLayout';
import { Link, usePage } from '@inertiajs/react';

export default function EngineeringCareerCentre({}) {
    const { flash } = usePage().props;

    return (
        <HomeLayout header="Engineering Career Centre">
            <section className="hero">
                <div className="container-hero text-center">
                    <h1 className="display-4 fw-bold">Engineering Career Center (ECC)
                    </h1>
                </div>
            </section>

            {/* <!-- Main Content -->
            <!-- Header Section --> */}
            <section className="my-5 mt-5">
                <div className="container">
                    <div className="row">
                        {/* {{-- deskripsi singkat --}} */}
                        <div className="desc-singkat col-md-6">
                            {/* <!-- Judul Kecil --> */}
                            <h3 className="si-small-title text-left">Profilee Career Center</h3>

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
