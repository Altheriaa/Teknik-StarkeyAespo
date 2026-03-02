import HomeLayout from '../../../Layouts/HomeLayout';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function DosenSistemInformasi({ DosenSis }) {
    const { flash } = usePage().props;

    return (
        <HomeLayout header="Dosen Sistem Informasi">
            <section className="hero">
                <div className="container-hero text-center">
                    <h1 className="display-4 fw-bold fade-in">Dosen Pengajar</h1>
                    <p className="lead fade-in">Sistem Informasi</p>
                </div>
            </section>

            <div className="container-lecture">
                <div className="row g-4">
                    {/* <!-- Card 1 --> */}
                    {DosenSis.map((dosen) => (
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="card-lecture">
                                <div className="card-header">
                                    <img src={`/storage/${dosen.gambar_dosen}`} />
                                    <h5 className="lecturer-name mt-3">{dosen.nama_dosen}</h5>
                                    <p className="lecturer-position">{dosen.posisi_dosen}</p>
                                    <p className="lecturer-position">{dosen.jabatan_dosen}</p>
                                </div>
                                <div className="card-body">
                                    <p className="nidn">NUPTK: {dosen.nuptk}</p>
                                </div>
                                <div className="card-info">
                                    <h6>Riwayat Pendidikan</h6>
                                    <p>Riwayat Pendidikan</p>
                                    <p>(Universitas)</p>
                                    <a href="{dosen.link_publikasi}" target="_blank">
                                        <button className="btn-publications">Lihat Publikasi</button>
                                    </a>
                                    <div className="button-info">
                                        <Link href="#" className="kinerja-btn">Kinerja <i className="fas fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))};
                </div>
            </div>
        </HomeLayout>
    );
}
