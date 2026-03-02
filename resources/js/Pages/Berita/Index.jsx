import HomeLayout from '../../Layouts/HomeLayout';
import { usePage, Link } from '@inertiajs/react';

export default function Berita({ beritas }) {
    
    return (
        <HomeLayout header="Berita">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h1 className="fw-bold">Berita Fakultas Teknik</h1>
                    <p className="text-muted">Menyajikan informasi terbaru tentang peristiwa, berita terkini, dan artikel-artikel
                        jurnalistik seputar FT-Unaya</p>
                </div>

                {/* Grid Berita */}
                <div className="row g-4">
                    {beritas.data.map((berita) => (
                        <div className="col-md-6 col-lg-4" key={berita.id}>
                            <Link href={`/berita/${berita.slug}`} className="text-decoration-none">
                                <div className="card news-card">
                                    <img src={`/storage/${berita.image_news}`} className="card-img-top"
                                        alt={berita.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{berita.title}</h5>
                                        {/* You can parse HTML description here, or just text */}
                                        <p className="card-text text-truncate">{berita.description.replace(/(<([^>]+)>)/gi, "").substring(0, 100)}...</p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between align-items-center">
                                        <div>
                                            <small className="text-muted d-block"><i className="fas fa-eye"></i> Dilihat 
                                                {' '}{berita.views} Kali
                                            </small>
                                        </div>
                                        <span className="badge bg-gradient-primary-to-secondary text-white">
                                            {new Date(berita.date).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <nav className="mt-4">
                        <ul className="pagination justify-content-center">
                            {beritas.links.map((link, i) => (
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
        </HomeLayout>
    );
}
