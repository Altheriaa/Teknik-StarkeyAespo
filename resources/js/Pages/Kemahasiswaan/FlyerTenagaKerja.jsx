import HomeLayout from '../../Layouts/HomeLayout';
import { usePage, Link } from '@inertiajs/react';
import React, { useState } from 'react';

export default function FlyerTenagaKerja({ flyers }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedFlyer, setSelectedFlyer] = useState(null);

    const handleShowModal = (flyer) => {
        setSelectedFlyer(flyer);
        setShowModal(true);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setTimeout(() => setSelectedFlyer(null), 300);
        document.body.style.overflow = 'auto';
    };

    return (
        <HomeLayout header="Flyer Penerimaan Tenaga Kerja">
            <div className="container py-5 mt-4">
                <div className="text-center mb-5">
                    <h1 className="fw-bold" style={{ color: '#1B263B', textTransform: 'uppercase', letterSpacing: '1px' }}>Flyer Penerimaan Tenaga Kerja</h1>
                    <div className="d-flex justify-content-center mb-3">
                        <div style={{ width: '50px', height: '3px', backgroundColor: '#FFC107' }}></div>
                    </div>
                    <p className="text-muted">Menyajikan informasi terbaru tentang peluang karir dari mitra industri kami</p>
                </div>

                {/* Grid Flyers */}
                <div className="row justify-content-center">
                    {flyers.data.length > 0 ? flyers.data.map((flyer, index) => (
                        <div className="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch" key={index}>
                            <div 
                                className="card border-0 shadow-sm w-100 h-100 card-hover" 
                                style={{ 
                                    borderRadius: '12px', 
                                    overflow: 'hidden', 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
                                }}
                                onClick={() => handleShowModal(flyer)}
                                title="Klik untuk melihat detail"
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.classList.replace('shadow-sm', 'shadow');
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.classList.replace('shadow', 'shadow-sm');
                                }}
                            >
                                <div className="position-relative w-100">
                                    <img 
                                        src={`/storage/${flyer.gambar}`} 
                                        className="card-img-top" 
                                        alt={flyer.judul} 
                                        style={{ width: '100%', height: '320px', objectFit: 'cover', objectPosition: 'top' }} 
                                    />
                                </div>
                                <div className="card-body d-flex flex-column text-start p-4 bg-white">
                                    <h5 className="card-title fw-bold" style={{ fontSize: '1.05rem', color: '#1B263B', lineHeight: '1.4' }}>{flyer.judul}</h5>
                                    <p className="card-text text-muted mb-4 mt-2" style={{ 
                                        fontSize: '0.85rem', 
                                        display: '-webkit-box', 
                                        WebkitLineClamp: 3, 
                                        WebkitBoxOrient: 'vertical', 
                                        overflow: 'hidden',
                                        flexGrow: 1,
                                        lineHeight: '1.6'
                                    }}>
                                        {flyer.deskripsi.replace(/(<([^>]+)>)/gi, "").substring(0, 100)}...
                                    </p>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className="col-12 text-center py-5">
                            <p className="text-muted" style={{ fontSize: '1.1rem' }}>Belum ada informasi rekrutmen saat ini.</p>
                        </div>
                    )}
                </div>

                <div className="d-flex justify-content-center mt-4">
                    <nav className="mt-4">
                        <ul className="pagination justify-content-center">
                            {flyers.links.map((link, i) => (
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

            {/* Modal for Details */}
            {showModal && selectedFlyer && (
                <>
                    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1050, overflowY: 'auto' }}>
                        {/* 1. UBAH modal-lg MENJADI modal-xl AGAR LEBIH LEBAR */}
                        <div className="modal-dialog modal-dialog-centered modal-xl"> 
                            <div className="modal-content overflow-hidden shadow-lg" style={{ borderRadius: '15px', border: 'none' }}>
                                
                                {/* Tombol Close */}
                                <button 
                                    type="button" 
                                    className="btn-close bg-white rounded-circle shadow p-2" 
                                    onClick={handleCloseModal} 
                                    style={{ position: 'absolute', top: '15px', right: '15px', zIndex: 20, opacity: 0.9 }}
                                ></button>

                                <div className="modal-body p-0">
                                    {/* 2. UBAH TINGGI MENJADI 85vh DAN BAGI KOLOM 50/50 (col-md-6) */}
                                    <div className="d-flex flex-column flex-md-row" style={{ minHeight: '600px', height: '85vh' }}>
                                        
                                        {/* SISI KIRI: GAMBAR (LEBIH LEBAR - col-md-6) */}
                                        <div className="col-md-6 p-0 bg-dark d-flex align-items-center justify-content-center border-end">
                                            <img 
                                                src={`/storage/${selectedFlyer.gambar}`} 
                                                alt={selectedFlyer.judul} 
                                                style={{ 
                                                    width: '100%', 
                                                    height: '100%', 
                                                    objectFit: 'contain', 
                                                    backgroundColor: '#111',
                                                    cursor: 'zoom-in' 
                                                }} 
                                                onClick={() => window.open(`/storage/${selectedFlyer.gambar}`, '_blank')}
                                                title="Klik untuk memperbesar di tab baru"
                                            />
                                        </div>

                                        {/* SISI KANAN: TEKS (col-md-6) */}
                                        <div className="col-md-6 p-4 p-md-5 bg-white overflow-auto">
                                            <div className="mt-2">
                                                <h2 className="fw-bold mb-3" style={{ color: '#1B263B', lineHeight: '1.2' }}>
                                                    {selectedFlyer.judul}
                                                </h2>
                                                <div className="mb-4" style={{ width: '60px', height: '4px', backgroundColor: '#FFC107' }}></div>
                                                
                                                <div 
                                                    className="rich-text-description"
                                                    style={{ 
                                                        color: '#333', 
                                                        fontSize: '1rem', 
                                                        textAlign: 'left',
                                                        lineHeight: '1.7' 
                                                    }}
                                                    dangerouslySetInnerHTML={{ __html: selectedFlyer.deskripsi }}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </HomeLayout>
    );
}
