import HomeLayout from '../../../Layouts/HomeLayout';
import { Link, usePage } from '@inertiajs/react';

export default function KalenderAkademik({}) {
    const { flash } = usePage().props;

    return (
        <HomeLayout header="Kalender Akademik">
            <section className="hero">
                    <div className="container-hero text-center">
                        <h1 className="display-4 fw-bold fade-in">Kalender Akademik Fakultas Teknik</h1>
                        <p className="lead fade-in">Universitas Abulyatama</p>
                    </div>
            </section>

            {/* <!--Struktur Organisasi Section--> */}
            <section className="kalender-akademik-section">
                {/* @foreach ( $KalenderAkademiks as $KalenderAkademik ) */}
                <div className="container-kalender-akademik text-center">
                    {/* <!-- Gambar Struktur Organisasi --> */}
                    <img src="" alt="Kalender Akademik Genap" className="org-image-kalender" />
                    {/* <!-- Download Button --> */}
                    <div className="mt-3">
                        <a href="" download className="btn btn-custom">
                            <i className="bi bi-download"></i> Download 
                        </a>
                    </div>
                </div>
                {/* @endforeach */}

                <div className="roster-container">
                    <h2>Roster Akademik</h2>
                    {/* @foreach ( $RosterAkademiks as $RosterAkademik) */}
                        <div className="roster-card">
                            <h3>Teknik Sipil</h3>
                            <iframe 
                                src="" 
                                width="100%" 
                                height="600px" 
                                style={{ border: "none" }}>
                            </iframe>
                            <div className="mt-2 text-center">
                                <a href="" download className="btn btn-custom">
                                    <i className="bi bi-download"></i> Download 
                                </a>
                            </div>
                        </div>

                        <div className="roster-card">
                            <h3>Teknik Mesin</h3>
                            <iframe 
                                src="" 
                                width="100%" 
                                height="600px" 
                                style={{ border: "none" }}>
                            </iframe>
                            <div className="mt-2 text-center">
                                <a href="" download className="btn btn-custom">
                                    <i className="bi bi-download"></i> Download 
                                </a>
                            </div>
                        </div>

                        <div className="roster-card">
                            <h3>Sistem Informasi</h3>
                            <iframe 
                                src="" 
                                width="100%" 
                                height="600px" 
                                style={{ border: "none" }}>
                            </iframe>
                            <div className="mt-2 text-center">
                                <a href="" download className="btn btn-custom">
                                    <i className="bi bi-download"></i> Download 
                                </a>
                            </div>
                        </div>
                    {/* @endforeach */}
                </div>
            </section>

        </HomeLayout>
    );
}
