import React, { useState, useEffect, useRef } from 'react';
import HomeLayout from '../../Layouts/HomeLayout';
import { Link, usePage, router } from '@inertiajs/react';

export default function PenghargaanMahasiswa({ PenghargaanMahasiswas, filters }) {
    const { flash } = usePage().props;
    const [searchTerm, setSearchTerm] = useState(filters?.search || '');
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        const delayDebounceFn = setTimeout(() => {
            router.get('/penghargaan-mahasiswa', { search: searchTerm }, {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            });
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]);

    const handleSearch = (e) => {
        e.preventDefault();
    };

    return (
        <HomeLayout header="Penghargaan Mahasiswa">
            <section className="hero">
                <div className="container-hero text-center">
                    <h1 className="display-4 fw-bold fade-in">Penghargaan Mahasiswa</h1>
                    <p className="lead fade-in">Universitas Abulyatama</p>
                </div>
            </section>

            {/* <!-- Content --> */}
            <div className="award-container">
                <div className="award-card">
                    <div className="award-card-title">
                        <h3 className="award-title">
                            Prestasi Mahasiswa
                        </h3>
                    </div>
                    {/* <!-- Search Box --> */}
                    <form onSubmit={handleSearch}>
                        <div className="download-search-wrapper mb-4 d-flex justify-content-end">
                            <div className="download-search-box">
                                <div className="input-group" style={{width: '300px'}}>
                                    <input type="text" name="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                                        className="form-control download-search-input" id="downloadSearchInput" placeholder="Cari"/>
                                </div>
                            </div>
                        </div>
                    </form>
                    {/* <!-- end searchbox --> */}
                    <table className="award-table table-hover">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Profil</th>
                                <th>Prestasi</th>
                                <th>Tingkat</th>
                                <th>Tahun</th>
                            </tr>
                        </thead>
                        <tbody className="table-penghargaan">
                            {PenghargaanMahasiswas.data.map((PenghargaanMahasiswa, index) => (
                                <tr key={index}>

                                    <td className="text-center">
                                        {PenghargaanMahasiswas.from + index}
                                    </td>
                                    <td>
                                        <div className="profile-container">
                                            <img src={`/storage/${PenghargaanMahasiswa.gambar_person}`} alt="Mahasiswa Image"
                                                className="profile-image" />
                                            <div className="profile-name">{PenghargaanMahasiswa.person}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <a href={PenghargaanMahasiswa.link}>{PenghargaanMahasiswa.prestasi}</a>
                                    </td>
                                    <td>{PenghargaanMahasiswa.tingkat}</td>
                                    <td>{PenghargaanMahasiswa.tahun}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-center mt-4">
                        <nav className="mt-4">
                            <ul className="pagination justify-content-center">
                                {PenghargaanMahasiswas.links.map((link, i) => (
                                    <li
                                        key={i}
                                        className={`page-item 
                                            ${link.active ? 'active' : ''} 
                                            ${!link.url ? 'disabled' : ''}`}
                                    >
                                        <Link
                                            href={link.url || '#'}
                                            className="page-link"
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                            preserveScroll
                                        />
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    
                </div>
            </div>
        </HomeLayout>
    );
}
