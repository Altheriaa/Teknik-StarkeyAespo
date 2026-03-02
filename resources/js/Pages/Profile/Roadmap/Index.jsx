import HomeLayout from '../../../Layouts/HomeLayout';
import { Link, usePage } from '@inertiajs/react';

export default function Roadmap({}) {
    const { flash } = usePage().props;

    return (
        <HomeLayout header="Roadmap">
            <section className="hero">
                    <div className="container-hero text-center">
                        <h1 className="display-4 fw-bold fade-in">Roadmap Fakultas Teknik</h1>
                        <p className="lead fade-in">Universitas Abulyatama</p>
                    </div>
            </section>

            {/* <!--Struktur Organisasi Section--> */}
            <section className="struktur-section">
                <div className="container-organisasi text-center">
                    <img src="asset/img/Roadmap Fakultas Teknik.jpeg" className="org-image" />
                </div>
            </section>
            <section className="kalender-akademik-section">
                <div className="roster-container">
                    <h2>Roadmap</h2>
                    <div className="roster-card">
                        <iframe
                            src="/asset/Roadmap-FT-UNAYA- 2022-2026.pdf"
                            width="100%"
                            height="600"
                            style={{ border: "none" }}
                        />
                        <div className="mt-2 text-center">
                            <a href="/asset/Roadmap-FT-UNAYA- 2022-2026.pdf" download className="btn btn-custom">
                                <i className="bi bi-download"></i> Download 
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </HomeLayout>
    );
}
