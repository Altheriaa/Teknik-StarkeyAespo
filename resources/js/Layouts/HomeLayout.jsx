import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function HomeLayout({ children }) {

    const [mobileOpen, setMobileOpen] = useState(false)
    const [activeMenu, setActiveMenu] = useState("main")

    const showMenu = (menu) => {
        setActiveMenu(menu)
    }

    return (
        <>
            {/* NAVBAR */}
            <div className="navbar-container">
                <nav>
                    <div className="logo-nav">
                        <Link href="/">
                            <img src="/asset/img/logoFTUNAYA.svg" alt="Logo FT UNAYA" />
                        </Link>
                    </div>

                    <ul className="menu-nav">
                        <li><Link href="/">Home</Link></li>
                        <li><a href="#">Profile</a>
                            <ul className="submenu_dropdown-nav">
                                <li><Link href="/sejarah" className="no-border-hover">Sejarah</Link></li>
                                <li><Link href="/visi-misi" className="no-border-hover">Visi & Misi</Link></li>
                                <li><Link href="/struktur-organisasi" className="no-border-hover">Struktur Organisasi</Link></li>
                                <li><Link href="/kalender-akademik" className="no-border-hover">Kalender Akademik</Link></li>
                                <li><Link href="/roadmap" className="no-border-hover">Roadmap</Link></li>
                            </ul>
                        </li>
                        <li><a href="#">Berita</a></li>
                        <li><a href="#">Program Studi</a>
                            <ul className="submenu_dropdown-nav">
                                <li><a href="#" className="no-border-hover">Sistem Informasi</a>
                                    <ul className="dropdown-nav">
                                        <li><a href="#" className="no-border-hover">Visi</a></li>
                                        <li><a href="#" className="no-border-hover">Dosen</a></li>
                                        <li><a href="#" className="no-border-hover">Kurikulum</a></li>
                                    </ul>
                                </li>
                                <li><a href="#" className="no-border-hover">Teknik Sipil</a>
                                    <ul className="dropdown-nav">
                                        <li><a href="#" className="no-border-hover">Visi</a></li>
                                        <li><a href="#" className="no-border-hover">Dosen</a></li>
                                        <li><a href="#" className="no-border-hover">Kurikulum</a></li>
                                    </ul>
                                </li>
                                <li><a href="#" className="no-border-hover">Teknik Mesin</a>
                                    <ul className="dropdown-nav">
                                        <li><a href="#" className="no-border-hover">Visi</a></li>
                                        <li><a href="#" className="no-border-hover">Dosen</a></li>
                                        <li><a href="#" className="no-border-hover">Kurikulum</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#">Pendidikan</a>
                            <ul className="submenu_dropdown-nav">
                                <li><a href="#" className="no-border-hover">Laboratorium</a></li>
                                <li><a href="#" className="no-border-hover">Beasiswa</a></li>
                                <li><a href="#" className="no-border-hover">Perpustakaan</a></li>
                                <li><a href="#" className="no-border-hover">Jurnal</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Kemahasiswaan</a>
                            <ul className="submenu_dropdown-nav">
                                <li><a href="#" className="no-border-hover">Layanan Komunikasi Orang Tua/Wali
                                        Mahasiswa</a></li>
                                <li><a href="#" className="no-border-hover">Layanan Permohonan Surat
                                        Aktif Kuliah</a></li>
                                <li><a href="#" className="no-border-hover">Organisasi Mahasiswa</a>
                                    <ul className="dropdown-nav">
                                        <li><a href="#" className="no-border-hover">BEM</a></li>
                                        <li><a href="#" className="no-border-hover">Himasi</a></li>
                                        <li><a href="#" className="no-border-hover">Himatesya</a></li>
                                        <li><a href="#" className="no-border-hover">HMM</a></li>
                                    </ul>
                                </li>
                                <li><a href="#" className="no-border-hover">Tracer Study</a></li>
                                <li><a href="#" className="no-border-hover">Engineering Career
                                        Centre</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Award</a>
                            <ul className="submenu_dropdown-nav">
                                <li><a href="#" className="no-border-hover">Penghargaan Dosen</a></li>
                                <li><a href="#" className="no-border-hover">Penghargaan Mahasiswa</a>
                                </li>
                                <li><a href="#" className="no-border-hover">Tingkat Kesiapan <br/>
                                        Teknologi</a></li>
                            </ul>
                        </li>
                        <li><a href="{{ route('kerjasama') }}">Kerjasama</a></li>
                        <li><a href="#">Download</a>
                            <ul className="submenu_dropdown-nav">
                                <li><a href="#" className="no-border-hover">Kegiatan Akademik</a></li>
                                <li><a href="#" className="no-border-hover">E-Magazine</a></li>
                                <li><a href="#" className="no-border-hover">Pengurusan Surat</a></li>
                                <li><a href="#" className="no-border-hover">Dokumen</a></li>
                                <li><a href="https://drive.google.com/drive/folders/1KO-dTlJQt9lWJoVkNn_BFNZO062cjPwX?usp=sharing"
                                        className="no-border-hover">Video Intro / Outro Teknik</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Quality Assurance</a>
                            <ul className="submenu_dropdown-nav">
                                <li><a href="#" className="no-border-hover">SOP</a></li>
                                <li><a href="#" className="no-border-hover">Survey</a></li>
                                <li><a href="#" className="no-border-hover">Dokumen AMI</a></li>
                                <li><a href="#" className="no-border-hover">Dokumen Monev</a></li>
                            </ul>
                        </li>
                    </ul>

                    <div className="hamburger" onClick={() => {
                        setMobileOpen(true)
                        setActiveMenu("main")
                    }}>
                        ☰
                    </div>
                </nav>
            </div>

            {/* MOBILE MENU */}
            <div className={`mobile-menu ${mobileOpen ? 'active' : ''}`}>

                <div className="mobile-close" onClick={() => setMobileOpen(false)}>
                    ✕
                </div>

                <div className="menu-wrapper-nav">
                    {activeMenu === "main" && (
                        <ul className="menu-slide main-menu">
                            <li><Link href="/">Home</Link></li>
                            <li onClick={() => showMenu("profile")}>Profile</li>
                            <li><a href="#">Berita</a></li>
                            <li onClick={() => showMenu("program_studi")}>Program Studi</li>
                            <li onClick={() => showMenu("pendidikan")}>Pendidikan</li>
                            <li onClick={() => showMenu("kemahasiswaan")}>Kemahasiswaan</li>
                            <li onClick={() => showMenu("award")}>Award</li>
                            <li><a href="{{ route('kerjasama') }}">Kerjasama</a></li>
                            <li onClick={() => showMenu("download")}>Download</li>
                            <li onClick={() => showMenu("quality_assurance")}>Quality Assurance</li>
                        </ul>
                    )}

                    {activeMenu === "profile" && (
                        <ul className="menu-slide">
                            <li onClick={() => showMenu("main")}>← Back</li>
                            <li><Link href="/sejarah">Sejarah</Link></li>
                            <li><Link href="/visi-misi">Visi & Misi</Link></li>
                            <li><Link href="/struktur-organisasi">Struktur Organisasi</Link></li>
                            <li><Link href="/kalender-akademik">Kalender Akademik</Link></li>
                            <li><Link href="/roadmap">Roadmap</Link></li>
                        </ul>
                    )}

                    {activeMenu === "program_studi" && (
                        <ul className="menu-slide">
                            <li onClick={() => showMenu("main")}>← Back</li>
                            <li onClick={() => showMenu("prodi_si")}>Sistem Informasi</li>
                            <li onClick={() => showMenu("prodi_ts")}>Teknik Sipil</li>
                            <li onClick={() => showMenu("prodi_tm")}>Teknik Mesin</li>
                        </ul>
                    )}

                    {activeMenu === "prodi_si" && (
                        <ul className="menu-slide">
                            <li onClick={() => showMenu("program_studi")}>← Back</li>
                            <li><a href="#">Visi</a></li>
                            <li><a href="#">Dosen</a></li>
                            <li><a href="#">Kurikulum</a></li>
                        </ul>
                    )}

                    {activeMenu === "prodi_ts" && (
                        <ul className="menu-slide">
                            <li onClick={() => showMenu("program_studi")}>← Back</li>
                            <li><a href="#">Visi</a></li>
                            <li><a href="#">Dosen</a></li>
                            <li><a href="#">Kurikulum</a></li>
                        </ul>
                    )}

                    {activeMenu === "prodi_tm" && (
                        <ul className="menu-slide">
                            <li onClick={() => showMenu("program_studi")}>← Back</li>
                            <li><a href="#">Visi</a></li>
                            <li><a href="#">Dosen</a></li>
                            <li><a href="#">Kurikulum</a></li>
                        </ul>
                    )}

                    {activeMenu === "pendidikan" && (
                        <ul className="menu-slide">
                            <li onClick={() => showMenu("main")}>← Back</li>
                            <li><a href="#">Laboratorium</a></li>
                            <li><a href="#">Beasiswa</a></li>
                            <li><a href="#">Perpustakaan</a></li>
                            <li><a href="#">Jurnal</a></li>
                        </ul>
                    )}

                    {activeMenu === "kemahasiswaan" && (
                        <ul className="menu-slide">
                            <li onClick={() => showMenu("main")}>← Back</li>
                            <li><a href="#">Layanan Komunikasi Orang Tua/Wali Mahasiswa</a></li>
                            <li><a href="#">Layanan Permohonan Surat Aktif Kuliah</a></li>
                            <li onClick={() => showMenu("organisasi_mahasiswa")}>Organisasi Mahasiswa</li>
                            <li><a href="#">Tracer Study</a></li>
                            <li><a href="#">Engineering Career Centre</a></li>
                        </ul>
                    )}

                    {activeMenu === "organisasi_mahasiswa" && (
                        <ul className="menu-slide">
                            <li onClick={() => showMenu("kemahasiswaan")}>← Back</li>
                            <li><a href="#">BEM</a></li>
                            <li><a href="#">Himasi</a></li>
                            <li><a href="#">Himatesya</a></li>
                            <li><a href="#">HMM</a></li>
                        </ul>
                    )}

                    {activeMenu === "award" && (
                        <ul className="menu-slide">
                            <li onClick={() => showMenu("main")}>← Back</li>
                            <li><a href="#">Penghargaan Dosen</a></li>
                            <li><a href="#">Penghargaan Mahasiswa</a></li>
                            <li><a href="#">Tingkat Kesiapan Teknologi</a></li>
                        </ul>
                    )}

                    {activeMenu === "download" && (
                        <ul className="menu-slide">
                            <li onClick={() => showMenu("main")}>← Back</li>
                            <li><a href="#">Kegiatan Akademik</a></li>
                            <li><a href="#">E-Magazine</a></li>
                            <li><a href="#">Pengurusan Surat</a></li>
                            <li><a href="#">Dokumen</a></li>
                            <li><a href="https://drive.google.com/drive/folders/1KO-dTlJQt9lWJoVkNn_BFNZO062cjPwX?usp=sharing">Video Intro / Outro Teknik</a></li>
                        </ul>
                    )}

                    {activeMenu === "quality_assurance" && (
                        <ul className="menu-slide">
                            <li onClick={() => showMenu("main")}>← Back</li>
                            <li><a href="#">SOP</a></li>
                            <li><a href="#">Survey</a></li>
                            <li><a href="#">Dokumen AMI</a></li>
                            <li><a href="#">Dokumen Monev</a></li>
                        </ul>
                    )}
                </div>
                

            </div>

            {/* START CONTENT */}
            {children}
            {/* END CONTENT */}

            {/* FOOTER */}
            <footer className="bg-footer text-center text-dark">
                {/* Grid container */}
                <div className="container-fluid p-4">
                    <section className="section-footer mt-3">
                        {/*Grid row*/}
                        <div className="row row-footer">
                            {/*Grid column: Maps*/}
                            <div className="footer-column">
                                <h5 className="text-uppercase"></h5>
                                <ul className=" list-unstyled mb-0">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d714.4644732899995!2d95.38735275865595!3d5.532465662357192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30404801ed1d3b5b%3A0xeb3c355519d3d29d!2sUniversitas%20Abulyatama!5e0!3m2!1sid!2sid!4v1728061035078!5m2!1sid!2sid"
                                            width="100%" height="200" style={{border:0}} allowFullScreen="" loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </ul>
                            </div>

                            {/*Grid column: Kampus Abulyatama*/}
                            <div className="footer-column">
                                <h5 className="text-uppercase fw-bold mb-4">Kampus Abulyatama</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <p>Jl. Blang Bintang Lama NO, KM, RW, 5, Lampoh Keude, Kec. Kuta Baro
                                            Kab. Aceh Besar, Aceh 24415
                                        </p>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-phone"></i><span className="ms-2">+ 62 813-6002-4335</span>
                                    </li>
                                    <li className="mt-2">
                                        <i className="fa-solid fa-envelope"></i><span className="ms-2">
                                            fakultas_teknik@abulyatama.ac.id</span>
                                    </li>
                                    <section className="mt-4">
                                        {/* <!-- Facebook --> */}
                                        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"><i
                                                className="fab fa-facebook-f"></i></a>

                                        {/* <!-- Instagram --> */}
                                        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"><i
                                                className="fab fa-instagram"></i></a>
                                    </section>
                                </ul>
                            </div>
                            {/*Grid column: Logo*/}
                            <div className="footer-column">
                                <ul className="list-unstyled mb-0">
                                    <img src="/asset/img/unayaaaa.png" alt="Logo Universitas Abulyatama" className="img-footer" />
                                </ul>
                            </div>
                        </div>
                        {/*Grid row*/}
                    </section>
                    {/* <!-- Section: Links --> */}
                </div>
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> */}
                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
                    © 2024 Copyright:
                    <a className="text-reset fw-bold" href="#">Universitas Abulyatama, All Right Reserved</a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </>
    )
}
