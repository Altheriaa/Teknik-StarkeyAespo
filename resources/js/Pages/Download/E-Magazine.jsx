import HomeLayout from '../../Layouts/HomeLayout';
import { Link, usePage } from '@inertiajs/react';

export default function EMagazine({}) {
    const { flash } = usePage().props;

    return (
        <HomeLayout header="E-Magazine">
            <section className="hero">
                <div className="container-hero text-center">
                    <h1 className="display-4 fw-bold fade-in">E-Magazine</h1>
                    <p className="lead fade-in">Universitas Abulyatama</p>
                </div>
            </section>

            {/* <!-- Content --> */}
            <div className="container mt-5 mb-5 py-5">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12">
                        <div className="card shadow-lg border-0 rounded-4 overflow-hidden" style={{ backgroundColor: '#f9f9f9' }}>
                            <div className="row g-0">
                                {/* <!-- Left: Flipbook iframe --> */}
                                <div className="col-md-8">
                                    <div style={{ width: '100%', height: '100%', minHeight: '600px' }}>
                                        <iframe 
                                            src="https://online.fliphtml5.com/zkolw/mehb/" 
                                            width="100%" 
                                            height="100%" 
                                            style={{ minHeight: '600px', border: 'none' }}
                                            allowFullScreen>
                                        </iframe>
                                    </div>
                                </div>
                                
                                {/* <!-- Right: Magazine Details --> */}
                                <div className="col-md-4 d-flex flex-column justify-content-center p-5 bg-white">
                                    <div className="mb-4">
                                        <span className="badge rounded-pill px-3 py-2 mb-3 shadow-sm" style={{ backgroundColor: '#012d04', color: '#ffd700', fontWeight: 'bold', letterSpacing: '1px' }}>
                                            Rilis Terbaru
                                        </span>
                                        <h2 className="fw-bold mb-3" style={{ fontFamily: '"Crimson Text", serif', color: '#333', lineHeight: '1.3' }}>
                                            Riset dan Industri : Sinergi Akademisi dan Praktisi
                                        </h2>
                                        <hr style={{ width: '50px', border: '2px solid #012d04', opacity: 1 }} className="mb-4" />
                                        
                                        <div className="d-flex flex-column gap-2 text-muted mb-4">
                                            <div className="d-flex align-items-center">
                                                <i className="fas fa-book-open me-3" style={{ color: '#012d04', width: '20px' }}></i>
                                                <span className="fw-medium">Volume 1, Nomor 1</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <i className="far fa-calendar-alt me-3" style={{ color: '#012d04', width: '20px' }}></i>
                                                <span className="fw-medium">Januari 2025</span>
                                            </div>
                                        </div>
                                        
                                        <p className="text-secondary small mb-5" style={{ lineHeight: '1.6', textAlign: 'justify' }}>
                                            E-Magazine Fakultas Teknik Universitas Abulyatama edisi ini memuat 
                                            tulisan-tulisan inspiratif, penelitian terbaru, serta inovasi di bidang 
                                            keteknikan dari kolaborasi unggulan mahasiswa, dosen, dan praktisi industri.
                                        </p>
                                    </div>
                                    
                                    <div className="mt-auto">
                                        <a 
                                            href="https://online.fliphtml5.com/zkolw/mehb/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="btn w-100 rounded-pill fw-bold py-2 shadow-sm d-flex justify-content-center align-items-center gap-2"
                                            style={{ backgroundColor: '#ffffff', color: '#012d04', border: '2px solid #012d04', transition: 'all 0.3s ease' }}
                                            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#012d04'; e.currentTarget.style.color = '#ffffff'; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#012d04'; }}
                                        >
                                            <i className="fas fa-external-link-alt"></i> Baca Layar Penuh
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </HomeLayout>
    );
}
