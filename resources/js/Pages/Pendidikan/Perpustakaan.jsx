import HomeLayout from '../../Layouts/HomeLayout';
import { Link, usePage } from '@inertiajs/react';

export default function Perpustakaan({}) {
    const { flash } = usePage().props;

    return (
        <HomeLayout header="Perpustakaan">
            <section class="hero">
                <div>
                    <h1 class="display-4 fw-bold">Perpustakaan</h1>
                    <p class="lead"> Inspirasi, Inovasi, dan Wawasan baru di Perpustakaan</p>
                </div>
            </section>

            <section className="explore-section" id="telusuri">
                <div className="container-perpus">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <h4 className="perpus-section-title">Kunjungi Perpustakaan</h4>
                            <p className="text-explore mt-3">Akses koleksi lengkap dan layanan perpustakaan</p>
                            <Link href="http://slims.abulyatama.ac.id/" className="btn perpus-btn-custom btn-lg mb-5 mt-2"
                                target="_blank">Kunjungi</Link>
                        </div>
                        <div className="col-md-4 text-center">
                            <Link href="#koleksi" className="text-decoration-none">
                                <div className="explore-card">
                                    <div className="icon-box">
                                        <i className="fas fa-book fa-3x"></i>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Koleksi Buku</h5>
                                        <p className="card-text">Jelajahi berbagai koleksi buku teknik dan referensi akademik.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4 text-center">
                            <Link href="#Layanan" className="text-decoration-none">
                                <div className="explore-card">
                                    <div className="icon-box">
                                        <i className="fas fa-user-friends fa-3x"></i>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Layanan & Bantuan</h5>
                                        <p className="card-text">Dapatkan bantuan dari pustakawan dan gunakan fasilitas perpustakaan.
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- KOLEKSI --> */}
            <section className="section-koleksi" id="koleksi">
                <div className="container-perpus">
                    <h2 className="text-center perpus-section-title">Koleksi Terkini</h2>
                    <div className="content-perpus row">
                        <div className="col-md-4">
                            <div className="card perpus-card h-100">
                                <img src="asset/img/buku1.jpg" className="perpus-card-img-top" alt="Buku 1" />
                                <div className="card-body-perpus">
                                    <h5 className="perpus-card-title">Revolusi AI dalam Pendidikan</h5>
                                    <p className="card-text">Eksplorasi mendalam tentang bagaimana AI mengubah lanskap pendidikan
                                        global.</p>
                                    <Link href="http://slims.abulyatama.ac.id/" className="btn perpus-btn-custom btn-sm">Pinjam
                                        Sekarang</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card perpus-card-1 h-100">
                                <img src="asset/img/buku2.jpg" className="perpus-card-img-top" alt="Buku 2"/>
                                <div className="card-body-perpus">
                                    <h5 className="perpus-card-title">Fisika Kuantum untuk Masa Depan</h5>
                                    <p className="card-text">Panduan komprehensif tentang aplikasi fisika kuantum dalam teknologi
                                        modern.</p>
                                    <Link href="http://slims.abulyatama.ac.id/" className="btn perpus-btn-custom btn-sm">Pinjam
                                        Sekarang</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card perpus-card-2 h-100">
                                <img src="asset/img/buku3.jpg" className="perpus-card-img-top" alt="Buku 3" />
                                <div className="card-body-perpus">
                                    <h5 className="perpus-card-title">Bioteknologi: Merancang Kehidupan</h5>
                                    <p className="card-text">Eksplorasi etika dan inovasi dalam rekayasa genetika dan bioteknologi.</p>
                                    <Link href="http://slims.abulyatama.ac.id/" className="btn perpus-btn-custom btn-sm">Pinjam
                                        Sekarang</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Layanan */}
            <section className="layanan-section mb-4" id="Layanan">
                <div className="container-layanan-perpus">
                    <h2 className="text-center perpus-section-title">Layanan Kami</h2>
                    <div className="content-perpus row g-5">
                        <div className="col-md-4">
                            <div className="text-center">
                                <i className="fas fa-user-check perpus-service-icon"></i>
                                <h4>Absen Digital</h4>
                                <p>Solusi modern untuk absensi yang efisien dan akurat menggunakan teknologi digital.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="text-center">
                                <i className="fas fa-snowflake perpus-service-icon"></i>
                                <h4>AC</h4>
                                <p>Ruang yang nyaman dengan pendingin udara untuk pengalaman belajar yang optimal.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="text-center">
                                <i className="fas fa-table perpus-service-icon"></i>
                                <h4>Meja Meeting</h4>
                                <p>Fasilitas meja meeting untuk diskusi dan kolaborasi yang produktif.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </HomeLayout>
    );
}
