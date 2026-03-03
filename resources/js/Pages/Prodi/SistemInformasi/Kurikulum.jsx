import React from 'react';
import { Link } from '@inertiajs/react';
import HomeLayout from '../../../Layouts/HomeLayout';

export default function KurikulumSistemInformasi({ kurikulumSis , groupedKurikulum , sksPerSemester , totalSks , buku }) {

    return (    
        <HomeLayout header="Kurikulum Sistem Informasi">
            <section className="hero">
                <div className="container-hero text-center">
                    <h1 className="display-4 fw-bold fade-in">Kurikulum</h1>
                    <p className="lead fade-in">Sistem Informasi</p>
                </div>
            </section>

            <h1 className="kurikulum-h1">Akademik S-1 Sistem Informasi</h1>

            {/* <!-- Menampilkan Kurikulum --> */}
            <div className="kurikulum-card">
                {/* @if ($buku) */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
                        <Link href={buku.file}
                            className="btn"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '10px 24px',
                                fontWeight: '600',
                                borderRadius: '8px',
                                background: '#012d04',
                                color: '#fff',
                                boxShadow: '0 2px 8px rgba(1,45,4,0.08)',
                                border: 'none',
                                transition: 'background 0.2s, box-shadow 0.2s',
                                textDecoration: 'none'
                            }}
                            onMouseOver="this.style.background='#025c0a'; this.style.boxShadow='0 4px 16px rgba(1,45,4,0.15)'"
                            onMouseOut="this.style.background='#012d04'; this.style.boxShadow='0 2px 8px rgba(1,45,4,0.08)'"
                            target="_blank">
                            <i className="fas fa-file-download" style={{ fontSize: '1.2em' }}></i>
                            <span>Download Buku Kurikulum Sistem Informasi</span>
                        </Link>
                    </div>       
                {/* @endif */}
                <div className="kurikulum-table-wrapper">
                    <table className="kurikulum-table">
                        <thead>
                            <tr>
                                <th>SEMESTER</th>
                                <th>KODE MK</th>
                                <th>MATA KULIAH</th>
                                <th>SKS</th>
                                <th>TEORI</th>
                                <th>PRAKTEK</th>
                                <th>KATEGORI MK</th>
                                <th>RPS</th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* Iterate over object entries created by groupedKurikulum */}
                        {Object.entries(groupedKurikulum).map(([semester, kurikulumList]) => (
                            <React.Fragment key={semester}>
                                {Object.values(kurikulumList).map((kurikulumSi, index) => (
                                    <tr key={`${semester}-${index}`}>
                                        <td>{kurikulumSi.semester}</td>
                                        <td>{kurikulumSi.kode_mk}</td>
                                        <td>{kurikulumSi.mata_kuliah}</td>
                                        <td>{kurikulumSi.sks}</td>
                                        <td>{kurikulumSi.teori}</td>
                                        <td>{kurikulumSi.praktek}</td>
                                        <td>{kurikulumSi.kategori}</td>
                                        <td>
                                            {kurikulumSi.rps ? (
                                                <a href={kurikulumSi.rps} target="_blank" rel="noreferrer" className="btn">
                                                    <i className="fas fa-download"></i> Download
                                                </a>
                                            ) : (
                                                <span className="text-muted">Tidak ada</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                {/* <!-- Menampilkan Total SKS per Semester --> */}
                                <tr className="total-row">
                                    <td colSpan="3"><strong>Total SKS Semester {semester}</strong></td>
                                    <td><strong>{sksPerSemester[semester]}</strong></td>
                                    <td colSpan="4"></td>
                                </tr>
                            </React.Fragment>
                        ))}

                        {/* <!-- Menampilkan Total SKS Keseluruhan --> */}
                        <tr className="total-row">
                            <td colSpan="3"><strong>Total SKS Keseluruhan</strong></td>
                            <td><strong>{totalSks}</strong></td>
                            <td colSpan="4"></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </HomeLayout>
    );
}
