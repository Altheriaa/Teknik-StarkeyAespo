import HomeLayout from '../../../Layouts/HomeLayout';
import { Link, usePage } from '@inertiajs/react';

export default function StrukturOrganisasi({}) {
    const { flash } = usePage().props;

    return (
        <HomeLayout header="Struktur Organisasi">
            <section className="hero">
                    <div className="container-hero text-center">
                        <h1 className="display-4 fw-bold fade-in">Struktur Organisasi Fakultas Teknik</h1>
                        <p className="lead fade-in">Universitas Abulyatama</p>
                    </div>
            </section>

            {/* <!--Struktur Organisasi Section--> */}
            <section className="struktur-section">
                    <div className="container-organisasi text-center">
                        <img src="asset/img/Struktur Organisasi Teknik.jpeg" alt="Struktur Organisasi Fakultas Teknik" class="org-image" />
                    </div>
            </section>
        </HomeLayout>
    );
}
