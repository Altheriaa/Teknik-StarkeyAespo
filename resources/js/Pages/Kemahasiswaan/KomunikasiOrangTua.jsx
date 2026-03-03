import HomeLayout from '../../Layouts/HomeLayout';
import { Link, usePage } from '@inertiajs/react';

export default function LayananKomunikasiOrangTua({}) {
    const { flash } = usePage().props;

    return (
        <HomeLayout header="Layanan Komunikasi Orang Tua">
            <section className="hero">
                <div className="container-hero text-center">
                    <h1 className="display-4 fw-bold fade-in">Layanan Komunikasi Orang Tua/Wali</h1>
                    <p className="lead fade-in">Universitas Abulyatama</p>
                </div>
            </section>

            {/* <!-- Content --> */}
            <section className="sectionTujuanTracerStudy mt-4">
                <div className="container">
                    <h2>Layanan Komunikasi</h2>
                    <div className="tracer-study row mt-5">
                        <div className="md-6">
                            <div className="row">
                                <div style={{ textAlign: 'justify' }}>
                                    <p> Selamat datang di halaman resmi layanan komunikasi Orang Tua/Wali Fakultas Teknik
                                        Universitas Abulyatama (FT-UNAYA).
                                        Kami di FT UNAYA percaya bahwa peran aktif orang tua dan wali sangat penting dalam mendukung
                                        perkembangan akademik anak-anak kita.
                                        Untuk itu, kami telah menyediakan ruang untuk orang tua/wali yang anaknya mengalami
                                        permasalahan studi atau lainnya untuk dapat mengetahui
                                        secara lebih jelas persoalan yang dialami anaknya di kampus. Untuk itu bapak/ibu dapat
                                        mengisi formulir yang disediakan. Komunikasi yang lebih
                                        baik akan dapat kita jalankan setelah ini. Kami berharap inisiatif ini dapat memperkuat
                                        kerjasama antara Fakultas dan keluarga dalam mendukung
                                        perjalanan pendidikan mahasiswa FT-UNAYA.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Call-to-Action Button --> */}
                    <a href="https://forms.gle/X6NGizEYGRLuUFiZA" className="btn ctaButtonTracerStudy">Mulai Layanan</a>
                </div>
            </section>
        </HomeLayout>
    );
}
