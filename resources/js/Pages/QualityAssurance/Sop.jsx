import React, { useState, useEffect, useRef } from 'react';
import HomeLayout from '../../Layouts/HomeLayout';
import { Link, usePage, router } from '@inertiajs/react';

export default function Sop({ Sops, filters }) {
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
            router.get('/sop', { search: searchTerm }, {
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
        <HomeLayout header="Sop">
            <section className="hero">
                <div className="container-hero text-center">
                    <h1 className="display-4 fw-bold fade-in">Standar Operasional Prosedur</h1>
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
                                    <th className="download-col-name">NAMA</th>
                                    <th className="download-col-date">TANGGAL DIKELUARKAN</th>
                                    <th className="download-col-action">AKSI</th>
                                </tr>
                            </thead>
                            <tbody className="download-table-body">
                                {Sops.data.map((Sop, index) => (
                                    <tr key={index}>
                                        <td className="text-center">
                                            {Sops.from + index}
                                        </td>
                                        <td>{Sop.nama_file}</td>
                                        <td className='text-center'>{Sop.date}</td>
                                        <td className="text-center"><a href={Sop.link} target='_blank'
                                                className='btn-primary btn-sm text-decoration-underline'><i className='fas fa-download'></i> Download</a></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination Button */}
                    <div className="d-flex justify-content-center mt-4">
                        <nav className="mt-4">
                            <ul className="pagination justify-content-center">
                                {Sops.links.map((link, i) => (
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
