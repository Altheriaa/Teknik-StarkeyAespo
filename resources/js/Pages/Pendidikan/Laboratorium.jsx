import HomeLayout from '../../Layouts/HomeLayout';
import { Link, usePage } from '@inertiajs/react';

export default function Laboratorium({}) {
    const { flash } = usePage().props;

    return (
        <HomeLayout header="Laboratorium">
            <section className="hero">
                <div>
                    <h1 className="display-4 fw-bold">Laboratorium Fakultas</h1>
                    <p className="lead">Temukan Inspirasi, Inovasi, dan Wawasan baru di Laboratorium Fakultas Ultra Modern Kami</p>
                </div>
            </section>

            <div className="container-lab mt-3">
                <section className="fasilitas-body" id="fasilitas">
                    <h2 className="mb-4 lab-section-title">Fasilitas Laboratorium</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 shadow lab-card">
                                <img src="asset/img/lab-si-2.jpg" className="card-img-top" alt="Lab Sistem Informasi" />
                                <div className="card-body">
                                    <h5 className="card-title">Laboratorium Sistem Informasi</h5>
                                    <p className="card-text">Pusat pengembangan dan penelitian teknologi informasi terkini.</p>
                                    <a href="#lab-si" className="btn btn-primary lab-btn-custom">Lihat Detail <i
                                            className="fas fa-arrow-right"></i> </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 shadow lab-card">
                                <img src="asset/img/lab-mesin-1.jpg" className="card-img-top" alt="Lab Teknik Mesin" />
                                <div className="card-body">
                                    <h5 className="card-title">Laboratorium Teknik Mesin</h5>
                                    <p className="card-text">Fasilitas lengkap untuk eksperimen dan penelitian mekanika.</p>
                                    <Link href="#lab-mesin" className="btn btn-primary lab-btn-custom">Lihat Detail <i
                                            className="fas fa-arrow-right"></i> </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 shadow lab-card">
                                <img src="asset/img/lab-sipil-1.jpg" className="card-img-top" alt="Lab Teknik Sipil" />
                                <div className="card-body">
                                    <h5 className="card-title">Laboratorium Teknik Sipil</h5>
                                    <p className="card-text">Peralatan modern untuk pengujian material dan struktur.</p>
                                    <Link href="#lab-sipil" className="btn btn-primary lab-btn-custom">Lihat Detail <i
                                            className="fas fa-arrow-right"></i> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="lab-si" className="lab-section">
                    <h2 className="mb-4 lab-section-title">Laboratorium Sistem Informasi</h2>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="lab-image-wrapper">
                                <img src="asset/img/lab-si-1.jpg" className="img-fluid" alt="Lab Sistem Informasi" />
                            </div>
                            <p className="mt-3 text-muted">Ruang server dengan perangkat keras canggih untuk mendukung penelitian di
                                bidang sistem informasi.</p>
                        </div>
                        <div className="col-md-6">
                            <h3 className="mb-3">Fasilitas:</h3>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><i className="fas fa-desktop lab-list-icon me-2"></i> PC</li>
                                <li className="list-group-item"><i className="fas fa-snowflake lab-list-icon me-2"></i> AC</li>
                                <li className="list-group-item"><i className="fas fa-video lab-list-icon me-2"></i> Infokus </li>
                                <li className="list-group-item"><i className="fas fa-print lab-list-icon me-2"></i> Printer </li>
                                <li className="list-group-item"><i className="fas fa-usb lab-list-icon me-2"></i> Hub </li>
                                <li className="list-group-item"><i className="fas fa-network-wired lab-list-icon me-2"></i> Router </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="lab-mesin" className="lab-section">
                    <h2 className="mb-4 lab-section-title">Laboratorium Teknik Mesin</h2>
                    <div className="row align-items-center">
                        <div className="col-md-6 ">
                            <div className="lab-image-wrapper">
                                <img src="asset/img/lab-mesin-2.jpg" className="img-fluid" alt="Lab Teknik Mesin" />
                            </div>
                            <p className="mt-3 text-muted">Bengkel mesin modern dengan berbagai peralatan untuk eksperimen dan
                                penelitian di bidang teknik mesin.</p>
                        </div>
                        <div className="col-md-6 order-md-1">
                            <h3 className="mb-3">Fasilitas:</h3>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><i className="fas fa-flask lab-list-icon me-2"></i> Roket Stove</li>
                                <li className="list-group-item"><i className="fas fa-blender lab-list-icon me-2"></i> Ball Mil </li>
                                <li className="list-group-item"><i className="fas fa-fire lab-list-icon me-2"></i> Uji Pembakaran Material
                                </li>
                                <li className="list-group-item"><i className="fas fa-balance-scale lab-list-icon me-2"></i> Mesin Uji Tekan
                                    dan Lentur </li>
                                <li className="list-group-item"><i className="fas fa-leaf lab-list-icon me-2"></i> Reaktor Biomassa </li>
                                <li className="list-group-item"><i className="fas fa-recycle lab-list-icon me-2"></i> Mesin Pencacah dan
                                    Peleleh Plastik </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="lab-sipil" className="lab-section mt-3">
                    <h2 className="mb-4 lab-section-title">Laboratorium Teknik Sipil</h2>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="lab-image-wrapper">
                                <img src="asset/img/lab-sipil-2.jpg" className="img-fluid" alt="Lab Teknik Sipil" />
                                <img src="asset/img/lab-sipil-3.jpg" className="img-fluid" alt="Lab Teknik Sipil" />
                            </div>
                            <p className="mt-3 text-muted">Laboratorium lengkap untuk pengujian material konstruksi dan analisis
                                struktur bangunan.</p>
                        </div>
                        <div className="col-md-6">
                            <h3 className="mb-3">Fasilitas:</h3>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><i className="fas fa-filter lab-list-icon me-2"></i> Sondir </li>
                                <li className="list-group-item"><i className="fas fa-ruler lab-list-icon me-2"></i> Digital Mortar
                                    Compression Machine </li>
                                <li className="list-group-item"><i className="fas fa-tachometer-alt lab-list-icon me-2"></i> Compressive
                                    Strength of Hydraulic Cement </li>
                                <li className="list-group-item"><i className="fas fa-hourglass-start lab-list-icon me-2"></i> Time of
                                    Setting of Hydraulic Sement by Vicat</li>
                                <li className="list-group-item"><i className="fas fa-balance-scale lab-list-icon me-2"></i> Point Load Test
                                    Aparatus </li>
                                <li className="list-group-item"><i className="fas fa-weight-hanging lab-list-icon me-2"></i> Dutch Cone
                                    Penetrometer 2.5 Ton Capacity</li>
                                <li className="list-group-item"><i className="fas fa-water lab-list-icon me-2"></i> Liquid Limit Test Set
                                </li>
                                <li className="list-group-item"><i className="fas fa-cube lab-list-icon me-2"></i> Vertical Cylinder Capping
                                    Set </li>
                                <li className="list-group-item"><i className="fas fa-sliders-h lab-list-icon me-2"></i> Slump Test Set </li>
                                <li className="list-group-item"><i className="fas fa-blender lab-list-icon me-2"></i> Laboratory Concrete
                                    Mixer </li>
                                <li className="list-group-item"><i className="fas fa-cube lab-list-icon me-2"></i> Concrete Cylinder Mould
                                </li>
                                <li className="list-group-item"><i className="fas fa-cube lab-list-icon me-2"></i> Concrete Cube Mould</li>
                                <li className="list-group-item"><i className="fas fa-balance-scale lab-list-icon me-2"></i> Triaxial UU Test
                                </li>
                                <li className="list-group-item"><i className="fas fa-clipboard-check lab-list-icon me-2"></i> Consolidation
                                    Test Set </li>
                                <li className="list-group-item"><i className="fas fa-water lab-list-icon me-2"></i> Moisture Content Test
                                </li>
                                <li className="list-group-item"><i className="fas fa-tint lab-list-icon me-2"></i> Hydrometer Analysis Test
                                </li>
                                <li className="list-group-item"><i className="fas fa-weight-hanging lab-list-icon me-2"></i> Bulk Density
                                    Test </li>
                                <li className="list-group-item"><i className="fas fa-thermometer-half lab-list-icon me-2"></i> Comprehensive
                                    Thermdynamics </li>
                                <li className="list-group-item"><i className="fas fa-compass lab-list-icon me-2"></i> Theodilite </li>
                                <li className="list-group-item"><i className="fas fa-filter lab-list-icon me-2"></i> Sieve Analisis </li>
                                <li className="list-group-item"><i className="fas fa-blender lab-list-icon me-2"></i> Ball Mil</li>
                                <li className="list-group-item"><i className="fas fa-compass lab-list-icon me-2"></i> Alat Dynamic Cone
                                    Penetrometer</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </HomeLayout>
    );
}
