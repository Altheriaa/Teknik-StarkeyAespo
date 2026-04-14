import HomeLayout from '../../../Layouts/HomeLayout';
import { Link, usePage } from '@inertiajs/react';
import React from 'react';

export default function KalenderAkademik({ KalenderAkademiks, RosterAkademiks }) {
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
                {KalenderAkademiks.map((kalender) => (
                        <div className="container-kalender-akademik text-center">
                            {/* <!-- Gambar Kalender Genap --> */}
                            <img src={`/storage/${kalender.image}`} alt="Kalender Akademik Genap" className="org-image-kalender" />
                            {/* <!-- Download Button --> */}
                            <div className="mt-3">
                                <a href={`/storage/${kalender.image}`} download className="btn btn-custom">
                                    <i className="bi bi-download"></i> Download 
                                </a>
                            </div>
                        </div>
                ))}

                <div className="roster-container">
                    <h2>Roster Akademik</h2>
                    {RosterAkademiks.map((roster, index) => (
                        <React.Fragment key={index}>.
                            <div className="roster-card">
                                <h3>Teknik Sipil</h3>
                                <iframe 
                                    src={`/storage/${roster.roster_sipil}`}
                                    width="100%" 
                                    height="600px" 
                                    style={{ border: "none" }}>
                                </iframe>
                                <div className="mt-2 text-center">
                                    <a href={`/storage/${roster.roster_sipil}`} download className="btn btn-custom">
                                        <i className="bi bi-download"></i> Download 
                                    </a>
                                </div>
                            </div>

                            <div className="roster-card">
                                <h3>Teknik Mesin</h3>
                                <iframe 
                                    src={`/storage/${roster.roster_mesin}`}
                                    width="100%" 
                                    height="600px" 
                                    style={{ border: "none" }}>
                                </iframe>
                                <div className="mt-2 text-center">
                                    <a href={`/storage/${roster.roster_mesin}`} download className="btn btn-custom">
                                        <i className="bi bi-download"></i> Download 
                                    </a>
                                </div>
                            </div>

                            <div className="roster-card">
                                <h3>Sistem Informasi</h3>
                                <iframe 
                                    src={`/storage/${roster.roster_sistem_informasi}`}
                                    width="100%" 
                                    height="600px" 
                                    style={{ border: "none" }}>
                                </iframe>
                                <div className="mt-2 text-center">
                                    <a href={`/storage/${roster.roster_sistem_informasi}`} download className="btn btn-custom">
                                        <i className="bi bi-download"></i> Download 
                                    </a>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </section>
        </HomeLayout>
    );
}
