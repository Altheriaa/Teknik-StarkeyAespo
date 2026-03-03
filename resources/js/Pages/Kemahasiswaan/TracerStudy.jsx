import HomeLayout from '../../Layouts/HomeLayout';
import { Link, usePage } from '@inertiajs/react';

export default function TracerStudy({}) {
    const { flash } = usePage().props;

    return (
        <HomeLayout header="Tracer Study">
            <section className="heroTracerStudy" style={{backgroundImage: 'url(asset/img/tracerstudy.png)'}}></section>
            {/* <!-- Main Content -->
            <!-- Header Section --> */}
            <header className="headerTracerStudy">
                <div className="container">
                    <p>Tracer Study adalah instrumen penting untuk meningkatkan kualitas dan relevansi pendidikan tinggi dalam
                        mempersiapkan lulusan yang kompeten dan siap menghadapi tantangan dunia kerja.</p>
                </div>
            </header>

            {/* <!-- Tujuan Tracer Study Section --> */}
            <section className="sectionTujuanTracerStudy">
                <div className="container">
                    <h2>Tujuan Tracer Study</h2>

                    {/* <!-- Tujuan Tracer Study List --> */}
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="listTujuanTracerStudy">
                                <li><strong>Evaluasi Hasil Pendidikan:</strong> Menyediakan informasi yang digunakan untuk
                                    mengevaluasi hasil pendidikan tinggi, sehingga lembaga pendidikan dapat melakukan perbaikan dan
                                    penyempurnaan dalam proses dan sistem pendidikan yang diterapkan.</li>
                                <li><strong>Penjaminan Kualitas:</strong> Memberikan data yang bermanfaat untuk menjamin kualitas
                                    pendidikan tinggi, dengan mempertimbangkan umpan balik dari alumni tentang relevansi dan
                                    efektivitas pembelajaran yang diterima.</li>
                                <li><strong>Hubungan dengan Dunia Kerja:</strong> Menganalisis hubungan antara pendidikan tinggi dan
                                    dunia kerja profesional, serta menilai kesiapan lulusan dalam memasuki pasar kerja.</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="listTujuanTracerStudy">
                                <li><strong>Informasi untuk Pemangku Kepentingan:</strong> Menjadi sumber informasi penting bagi
                                    pemangku kepentingan dalam pengambilan keputusan terkait pengembangan dan peningkatan kualitas
                                    pendidikan tinggi.</li>
                                <li><strong>Perbaikan Sistem Pendidikan:</strong> Menggunakan umpan balik dari alumni untuk
                                    perbaikan sistem dan pengelolaan pendidikan, yang selanjutnya dapat diintegrasikan dalam
                                    kebijakan pendidikan tinggi.</li>
                                <li><strong>Pengembangan Kompetensi Lulusan:</strong> Mengidentifikasi dan memahami karakteristik,
                                    pengetahuan, kemampuan, dan kompetensi alumni agar lembaga pendidikan dapat mengembangkan
                                    kurikulum yang relevan dengan kebutuhan industri dan dunia kerja.</li>
                                <li><strong>Peningkatan Pengajaran dan Pembelajaran:</strong> Menentukan pola pengajaran dan
                                    pembelajaran yang lebih baik berdasarkan pengalaman dan masukan dari alumni, untuk menciptakan
                                    proses pendidikan yang lebih efektif dan sesuai.</li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- Call-to-Action Button --> */}
                    <a href="https://docs.google.com/forms/d/1UpuNIdwRWiUEcLUBqCTL5Heuby1080ikzoehr97WV-M/edit"
                        className="btn ctaButtonTracerStudy">Mulai Tracer Study</a>
                </div>
            </section>
        </HomeLayout>
    );
}
