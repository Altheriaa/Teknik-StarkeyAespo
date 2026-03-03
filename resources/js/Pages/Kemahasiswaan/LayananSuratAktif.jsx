import HomeLayout from '../../Layouts/HomeLayout';
import { Link, usePage } from '@inertiajs/react';

export default function LayananSuratAktif({}) {
    const { flash } = usePage().props;

    return (
        <HomeLayout header="Layanan Surat Aktif">
            <section className="hero">
                <div className="container-hero text-center">
                    <h1 className="display-4 fw-bold fade-in">Layanan Surat Aktif</h1>
                    <p className="lead fade-in">Universitas Abulyatama</p>
                </div>
            </section>

            {/* <!-- Content --> */}
            <section className="sectionTujuanTracerStudy mt-4">
                <div className="container">
                    <h2>Permohonan Surat Aktif Kuliah</h2>
                    <div className="tracer-study row mt-5">
                        <div className="md-6">
                            <div className="row">
                                <div style={{ textAlign: 'justify' }}>
                                    <p> Surat Keterangan Aktif Kuliah atau disebut Surat Keterangan Mahasiswa Aktif 
                                        bisa diajukan oleh mahasiswa yang berstatus “Aktif” pada saat mengajukan surat. 
                                        Surat ini tidak bisa digunakan untuk mengganti status mahasiswa menjadi “Aktif”.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Call-to-Action Button --> */}
                    <a href="https://forms.gle/https://docs.google.com/forms/d/e/1FAIpQLScs0ll4OzYLyqgZRC_uA0G5kYtbApLg2IPtlcg9OkaLrGuXMA/viewform" className="btn ctaButtonTracerStudy">Mulai Layanan</a>
                </div>
            </section>
        </HomeLayout>
    );
}
