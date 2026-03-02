import HomeLayout from '../../../Layouts/HomeLayout';
import { Link, usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Sejarah({ sejarah }) {
    const { flash } = usePage().props;

    useEffect(() => {
        const timelineItems = document.querySelectorAll('.timeline-row')

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show')
                } else {
                    entry.target.classList.remove('show')
                }
            })
        })

        timelineItems.forEach(item => observer.observe(item))

        // cleanup (WAJIB di React)
        return () => observer.disconnect()

    }, [])

    return (
        <HomeLayout header="Sejarah">
            <section className="hero">
                    <div className="container-hero text-center">
                        <h1 className="display-4 fw-bold fade-in">Sejarah Fakultas Teknik</h1>
                        <p className="lead fade-in">Universitas Abulyatama</p>
                    </div>
            </section>

            {/* <!--Sejarah Section--> */}
            <section className="my-5 mb-1">
                    <div className="sejarah-container">
                        <p className="text-justify small-text">Pembukaan  Fakultas Teknik di lingkungan Universitas Abulyatama didasarkan kepada adanya peningkatan kebutuhan masyarakat untuk memperoleh kesempatan mengikuti pendidikan pada jenjang pendidikan tinggi. Peningkatan jumlah lulusan SMA maupun SMK menuntut adanya wadah penyaluran lulusan pada jenjang lebih tinggi. Permintaan lulusan Sekolah Lanjutan Tingkat Atas kepada rekayasa konstruksi dan teknologi yang sangat tinggi.</p>
                    </div>
                    <h2 className="text-center py-1 mt-1"><b>Timeline</b></h2>
                
                    <div className="container-timeline">
                        <div className="timeline">
                            <div className="timeline-row">
                            <div className="timeline-time">
                                1984<small>10 September</small>
                            </div>
                            <div className="timeline-content">
                                <i className="icon-attachment"></i>
                                <h4> Pendirian Fakultas Teknik</h4>
                                <p>
                                    Fakultas Teknik Universitas Abulyatama didirikan dengan Program Studi Teknik Sipil dan Teknik Mesin, berdasarkan SK Koordinator Kopertis Wilayah I No. 200/SK/Kop.I/84.</p>
                            </div>
                        </div>

                        <div className="timeline-row">
                            <div className="timeline-time">
                                1985<small>1 Oktober</small>
                            </div>
                            <div className="timeline-content">
                                <i className="icon-code"></i>
                                <h4>Akreditasi Pertama Prodi Teknik Sipil</h4>
                                <p>
                        SK Izin Operasional diterbitkan untuk Program Studi Teknik Sipil dan Teknik Mesin (No. 0415/0/1985)</p>
                            </div>
                        </div>

                        <div className="timeline-row">
                            <div className="timeline-time">
                                2009<small>12 September</small>
                            </div>
                            <div className="timeline-content">
                                <i className="icon-turned_in_not"></i>
                                <h4>Akreditasi Pertama Prodi Teknik Mesin</h4>
                                <p>Program Studi Teknik Mesin pertama kali diakreditasi dengan peringkat C (SK BAN-PT No. 028/BAN-PT/Ak-XII/S1/IX/2009).
                        </p>
                            </div>
                        </div>

                        <div className="timeline-row">
                            <div className="timeline-time">
                                2015
                            </div>
                            <div className="timeline-content">
                                <i className="icon-directions"></i>
                                <h4>Akreditasi Kedua Prodi Teknik Mesin dan Teknik Mesin</h4>
                                <p>Teknik Mesin kembali diakreditasi dengan peringkat C (SK BAN-PT No. 530/SK/BAN-PT/Akred/S/VI/2015). Teknik Sipil diakreditasi dengan peringkat B (SK BAN-PT No. 1011/SK/BAN PT/Akred/S/IX/2015).</p>
                            </div>
                        </div>

                        <div className="timeline-row">
                            <div className="timeline-time">
                                2019<small>2 Mei</small>
                            </div>
                            <div className="timeline-content">
                                <i className="icon-change_history"></i>
                                <h4>Bergabungnya <br/>Prodi Sistem Informasi</h4>
                                <p className="no-margin">Program Studi Sistem Informasi bergabung dengan Fakultas Teknik setelah merger STMIK Abulyatama, berdasarkan SK No. 325/KPT/I/2019.</p>
                            </div>
                        </div>

                        <div className="timeline-row">
                            <div className="timeline-time">
                                8:00 AM<small>Dec 18</small>
                            </div>
                            <div className="timeline-content">
                                <i className="icon-code"></i>
                                <h4>Akreditasi Prodi Sistem Informasi</h4>
                                <p>
                                Program Studi Sistem Informasi diakreditasi dengan akreditasi Baik (SK BAN-PT No. 7758/BAN-PT/Ak.KP/S/IX/2009)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </HomeLayout>
    );
}
