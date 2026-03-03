import React, { useState, useEffect, useRef } from 'react';
import HomeLayout from '../../Layouts/HomeLayout';
import { Link, usePage, router } from '@inertiajs/react';

export default function KesiapanTeknologi({ KesiapanTeknologis, filters }) {
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
            router.get('/kesiapan-teknologi', { search: searchTerm }, {
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
                    <h1 className="display-4 fw-bold fade-in">Tingkat Kesiapan Teknologi</h1>
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
                                    <th className="download-col-name">PRODUK INOVASI TEKNOLOGI</th>
                                    <th className="download-col-date">DESKRIPSI</th>
                                    <th className="download-col-action">NILAI TKT</th>
                                    <th className="download-col-date">TANGGAL</th>
                                    <th className="download-col-action">AKSI</th>
                                </tr>
                            </thead>
                            <tbody className="download-table-body">
                                {KesiapanTeknologis.data.map((KesiapanTeknologi, index) => (
                                    <tr key={index}>
                                        <td className="text-center">
                                            {KesiapanTeknologis.from + index}
                                        </td>
                                        <td>{KesiapanTeknologi.produk_inovasi}</td>
                                        <td className="text-start">{KesiapanTeknologi.deskripsi}</td>
                                        <td className="text-center">{KesiapanTeknologi.nilai_tkt}</td>
                                        <td className="text-center">{KesiapanTeknologi.tanggal}</td>
                                        <td className="text-center"><a href={KesiapanTeknologi.link} target='_blank'
                                                className='btn-primary btn-sm text-decoration-underline'><i className='fas fa-download'></i> Download</a></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <nav className="mt-4">
                            <ul className="pagination justify-content-center">
                                {KesiapanTeknologis.links.map((link, i) => (
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
