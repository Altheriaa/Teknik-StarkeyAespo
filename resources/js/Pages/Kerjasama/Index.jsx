import React, { useState, useEffect, useRef } from 'react';
import HomeLayout from '../../Layouts/HomeLayout';
import { Link, usePage, router } from '@inertiajs/react';

export default function Kerjasama({ Kerjasamas, filters }) {
    const { flash } = usePage().props;

    // Logic Search Pagination
    const [searchTerm, setSearchTerm] = useState(filters?.search || '');
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        const delayDebounceFn = setTimeout(() => {
            router.get('/kerjasama', { search: searchTerm }, {
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
        <HomeLayout header="Kerjasama">
            <section className="hero">
                <div className="container-hero text-center">
                    <h1 className="display-4 fw-bold fade-in">Kerja Sama Fakultas Teknik</h1>
                    <p className="lead fade-in">Universitas Abulyatama</p>
                </div>
            </section>

            {/* <!-- Content --> */}
            <section className="download-content py-5">
                <div className="container">
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
                    {/* <!-- Table --> */}
                    <div className="download-table-wrapper table-responsive">
                        <table className="download-table table table-hover" id="sop-download-table">
                            <thead className="download-table-header table-dark">
                                <tr>
                                    <th className="download-col-no">NO</th>
                                    <th className="download-col-name">KERJASAMA</th>
                                    <th className="download-col-date">LINGKUP KERJASAMA</th>
                                    <th className="download-col-action">JENIS DOKUMEN</th>
                                    <th className="download-col-action">TANGGAL</th>
                                    <th className="download-col-date">STATUS</th>
                                    <th className="download-col-action">AKSI</th>
                                </tr>
                            </thead>
                            <tbody className="download-table-body">
                                {Kerjasamas.data.map((Kerjasama, index) => (
                                    <tr key={index}>
                                        <td className="text-center">
                                            {Kerjasamas.from + index}
                                        </td>
                                        <td>{Kerjasama.nama_kerjasama}</td>
                                        <td className="text-start">{Kerjasama.lingkup_kerjasama}</td>
                                        <td className="text-center">{Kerjasama.jenis_dokumen}</td>
                                        <td className="text-center">{Kerjasama.tanggal}</td>
                                        <td className="text-center">{Kerjasama.status_kerjasama}</td>
                                        <td className="text-center"><a href={Kerjasama.link} target='_blank'
                                                className='btn-primary btn-sm text-decoration-underline'><i className='fas fa-download'></i> Download</a></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <nav className="mt-4">
                            <ul className="pagination justify-content-center">
                                {Kerjasamas.links.map((link, i) => (
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
            </section>
        </HomeLayout>
    );
}
