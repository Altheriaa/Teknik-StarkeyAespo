import React, { useMemo, useState } from 'react';
import HomeLayout from '../../Layouts/HomeLayout';
import { Link, router } from '@inertiajs/react';
import { ProgressRing, UI_STYLES, katCls, katHex, useMounted } from '../../Components/EspmiUi';

const BULAN = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const fmtTanggal = (iso) => {
    if (!iso) return '-';
    const [y, m, d] = iso.split('-');
    return `${parseInt(d, 10)} ${BULAN[parseInt(m, 10) - 1]} ${y}`;
};
const judul = (nama) => nama.replace(/^Standar\s+/i, '');
const DTPS_RINGKAS = 5;

const styles = `
${UI_STYLES}
.rk-info { display: flex; gap: .85rem; align-items: flex-start; padding: 1rem 1.15rem; height: 100%; }
.rk-info .ic { width: 38px; height: 38px; border-radius: 10px; background: #e7f3ec; color: #0b6b3a; display: flex; align-items: center; justify-content: center; flex: 0 0 auto; }
.rk-info .lb { font-size: .75rem; text-transform: uppercase; letter-spacing: .04em; color: #6c757d; }
.rk-info .vl { font-weight: 600; }
.rk-seg { display: inline-flex; background: #eef0f2; border-radius: 999px; padding: 3px; }
.rk-seg button { border: 0; background: transparent; border-radius: 999px; padding: .25rem .8rem; font-size: .82rem; color: #444; }
.rk-seg button.on { background: #fff; color: #0b6b3a; font-weight: 700; box-shadow: 0 1px 4px rgba(0,0,0,.12); }
.rk-bar-row { display: grid; grid-template-columns: minmax(150px, 280px) 1fr 64px; gap: .9rem; align-items: center; width: 100%; border: 0; background: transparent; text-align: left; padding: .45rem .6rem; border-radius: .6rem; transition: background .12s; }
.rk-bar-row:hover { background: #f3f8f5; }
.rk-bar-name { font-size: .9rem; line-height: 1.25; }
.rk-bar-name .kd { display: inline-block; min-width: 1.9rem; text-align: center; background: #0b3d1f; color: #fff; border-radius: 6px; font-size: .75rem; font-weight: 700; padding: .05rem .35rem; margin-right: .45rem; }
.rk-track { position: relative; height: 16px; background: #eceff1; border-radius: 999px; overflow: hidden; }
.rk-track > .fill { position: absolute; inset: 0 auto 0 0; border-radius: 999px; transition: width .9s cubic-bezier(.2,.8,.2,1); }
.rk-track > .tick { position: absolute; top: 0; bottom: 0; width: 1px; background: rgba(0,0,0,.28); }
.rk-val { text-align: right; font-weight: 700; font-variant-numeric: tabular-nums; }
.rk-table thead th { background: #0b3d1f; color: #fff; text-align: center; vertical-align: middle; font-size: .8rem; border: 0; }
.rk-table tfoot td { font-weight: 700; background: #eef0f2; }
.rk-row { cursor: pointer; transition: background .12s; }
.rk-row:hover { background: #f3f8f5; }
.rk-print-title { display: none; }
@media (max-width: 767px) { .rk-bar-row { grid-template-columns: 1fr 52px; } .rk-bar-row .rk-track { grid-column: 1 / -1; order: 3; } }
@media print {
    nav, header, footer, .hero, .no-print { display: none !important; }
    .rk-print-title { display: block; text-align: center; margin-bottom: 1rem; }
    .esp-card { box-shadow: none; }
    .rk-table thead th { background: #fff !important; color: #000 !important; border: 1px solid #000; }
    .badge { border: 1px solid #000; color: #000 !important; background: #fff !important; }
    .rk-row { cursor: default; }
    * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
}
`;

function Info({ icon, label, children }) {
    return (
        <div className="esp-card rk-info">
            <div className="ic"><i className={`fa-solid ${icon}`}></i></div>
            <div>
                <div className="lb">{label}</div>
                <div className="vl">{children}</div>
            </div>
        </div>
    );
}

function Daftar({ items }) {
    if (!items || items.length === 0) return <span className="text-muted fw-normal">-</span>;
    return <ol className="mb-0 ps-3 fw-normal">{items.map((n, i) => <li key={i}>{n}</li>)}</ol>;
}

export default function Rekap({ prodi, prodiList, siklus, siklusList, identitas, baris, kesimpulan, legenda }) {
    const mounted = useMounted();
    const [urut, setUrut] = useState('no'); // no | rendah | tinggi
    const [semuaDtps, setSemuaDtps] = useState(false);

    const enc = encodeURIComponent;
    const changeFilter = (next) => router.get('/e-spmi/rekap', { prodi, siklus, ...next }, { preserveScroll: true });
    const siklusLabel = siklusList.find((s) => s.value === siklus)?.label ?? siklus;
    const kembaliHref = `/e-spmi?prodi=${enc(prodi)}&siklus=${enc(siklus)}`;
    const bukaStandar = (kode) => router.visit(`${kembaliHref}&standar=${enc(kode)}`);
    const laporanHref = (jenis, unduh = false) =>
        `/e-spmi/laporan/${jenis}?prodi=${enc(prodi)}&siklus=${enc(siklus)}${unduh ? '&unduh=1' : ''}`;

    const urutan = useMemo(() => {
        const a = [...baris];
        if (urut === 'rendah') a.sort((x, y) => x.persen - y.persen);
        if (urut === 'tinggi') a.sort((x, y) => y.persen - x.persen);
        return a;
    }, [baris, urut]);

    // Standar terbaik & terendah (hanya yang sudah ada penilaian)
    const dinilai = baris.filter((b) => b.terisi > 0);
    const terbaik = dinilai.length ? dinilai.reduce((a, b) => (b.persen > a.persen ? b : a)) : null;
    const terendah = dinilai.length ? dinilai.reduce((a, b) => (b.persen < a.persen ? b : a)) : null;

    const belumLengkap = kesimpulan.terisi < kesimpulan.jumlah;
    const dtps = identitas.dtps || [];
    const dtpsTampil = semuaDtps ? dtps : dtps.slice(0, DTPS_RINGKAS);

    return (
        <HomeLayout header="Rekap e-SPMI">
            <style>{styles}</style>

            <section className="hero">
                <div className="container-hero text-center">
                    <h1 className="display-4 fw-bold fade-in">Rekap e-SPMI</h1>
                    <p className="lead fade-in">Hasil Audit Mutu Internal · Universitas Abulyatama</p>
                </div>
            </section>

            <section className="download-content py-5">
                <div className="container">
                    <div className="no-print d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
                        <h4 className="mb-0">Rekap Hasil Audit Program Studi</h4>
                        <div className="d-flex flex-wrap align-items-center gap-3">
                            <div className="d-flex align-items-center gap-2">
                                <label htmlFor="prodi" className="mb-0 fw-semibold">Program Studi</label>
                                <select id="prodi" className="form-select" style={{ minWidth: '200px' }} value={prodi}
                                    onChange={(e) => changeFilter({ prodi: e.target.value })}>
                                    {prodiList.map((p) => <option key={p} value={p}>{p}</option>)}
                                </select>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <label htmlFor="siklus" className="mb-0 fw-semibold">Siklus</label>
                                <select id="siklus" className="form-select" value={siklus}
                                    onChange={(e) => changeFilter({ siklus: e.target.value })}>
                                    {siklusList.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
                                </select>
                            </div>
                            <Link href={kembaliHref} className="btn btn-outline-secondary">
                                <i className="fa-solid fa-arrow-left me-2"></i>Monitoring
                            </Link>
                            {[['dt', 'DT'], ['ptk', 'PTK']].map(([jenis, label]) => (
                                <div key={jenis} className="btn-group">
                                    <a href={laporanHref(jenis)} target="_blank" rel="noopener noreferrer" className="btn btn-outline-success">
                                        <i className="fa-solid fa-file-pdf me-2"></i>{label}
                                    </a>
                                    <a href={laporanHref(jenis, true)} className="btn btn-outline-success" title={`Unduh ${label} (PDF)`}>
                                        <i className="fa-solid fa-download"></i>
                                    </a>
                                </div>
                            ))}
                            <button type="button" className="btn btn-success" onClick={() => window.print()}>
                                <i className="fa-solid fa-print me-2"></i>Cetak
                            </button>
                        </div>
                    </div>

                    <div className="rk-print-title">
                        <h5 className="mb-0">Rekapan Hasil Visitasi Lapangan AMI</h5>
                        <div>{siklusLabel}</div>
                    </div>

                    {/* Ringkasan utama */}
                    <div className="esp-card p-4 mb-4 esp-fade">
                        <div className="d-flex flex-wrap align-items-center gap-4">
                            <ProgressRing value={kesimpulan.persen} size={150} stroke={12} color={katHex(kesimpulan.kategori.idx)}>
                                <div className="display-6 fw-bold">{kesimpulan.persen.toFixed(1)}%</div>
                                <div className="small text-muted">capaian total</div>
                            </ProgressRing>
                            <div className="flex-grow-1" style={{ minWidth: '260px' }}>
                                <div className="text-muted small">{prodi} · {siklusLabel}</div>
                                <div className="h4 mb-2">
                                    <span className={`badge ${katCls(kesimpulan.kategori.idx)}`}>{kesimpulan.kategori.label}</span>
                                </div>
                                <div className="d-flex flex-wrap gap-4">
                                    <div><div className="fs-4 fw-bold">{kesimpulan.skor}<span className="text-muted fs-6"> / {kesimpulan.maks}</span></div><div className="small text-muted">Skor hasil visitasi</div></div>
                                    <div><div className="fs-4 fw-bold">{kesimpulan.terisi}<span className="text-muted fs-6"> / {kesimpulan.jumlah}</span></div><div className="small text-muted">Indikator dinilai</div></div>
                                    <div><div className="fs-4 fw-bold">{baris.length}</div><div className="small text-muted">Standar</div></div>
                                </div>
                                {(terbaik || terendah) && (
                                    <div className="small mt-3 no-print">
                                        {terbaik && <>Tertinggi: <button type="button" className="btn btn-link p-0 align-baseline" onClick={() => bukaStandar(terbaik.kode)}>Standar {terbaik.kode}</button> ({terbaik.persen.toFixed(1)}%)</>}
                                        {terbaik && terendah && <span className="mx-2 text-muted">·</span>}
                                        {terendah && <>Terendah: <button type="button" className="btn btn-link p-0 align-baseline" onClick={() => bukaStandar(terendah.kode)}>Standar {terendah.kode}</button> ({terendah.persen.toFixed(1)}%)</>}
                                    </div>
                                )}
                            </div>
                        </div>
                        {belumLengkap && (
                            <div className="alert alert-info mt-3 mb-0 no-print">
                                <i className="fa-solid fa-circle-info me-2"></i>
                                Penilaian belum lengkap. Indikator yang belum dinilai dihitung 0, sehingga persentase dan kategori masih dapat berubah.
                            </div>
                        )}
                    </div>

                    {/* A. Identitas Auditee */}
                    <h5 className="mb-3">A. Identitas Auditee</h5>
                    {!identitas.terisi && (
                        <div className="alert alert-warning no-print">
                            Identitas auditee untuk <strong>{prodi}</strong> ({siklusLabel}) belum diisi.
                            Admin dapat mengisinya di panel admin, menu e-SPMI → Identitas Audit.
                        </div>
                    )}
                    <div className="row g-3 mb-5">
                        <div className="col-md-4"><Info icon="fa-building-columns" label="Fakultas">{identitas.fakultas}</Info></div>
                        <div className="col-md-4"><Info icon="fa-graduation-cap" label="Auditee (Prodi)">{identitas.prodi}</Info></div>
                        <div className="col-md-4"><Info icon="fa-calendar-days" label="Tanggal Audit">{fmtTanggal(identitas.tanggal_audit)}</Info></div>
                        <div className="col-md-6"><Info icon="fa-user-tie" label="Dekan">{identitas.dekan || '-'}</Info></div>
                        <div className="col-md-6"><Info icon="fa-user" label="Ka. Prodi">{identitas.kaprodi || '-'}</Info></div>
                        <div className="col-md-6">
                            <Info icon="fa-users" label={`DTPS (${dtps.length})`}>
                                <Daftar items={dtpsTampil} />
                                {dtps.length > DTPS_RINGKAS && (
                                    <button type="button" className="btn btn-link btn-sm p-0 mt-1 no-print" onClick={() => setSemuaDtps(!semuaDtps)}>
                                        {semuaDtps ? 'Ringkas' : `Lihat semua (${dtps.length})`}
                                    </button>
                                )}
                            </Info>
                        </div>
                        <div className="col-md-6"><Info icon="fa-clipboard-check" label="Tim Auditor"><Daftar items={identitas.tim_auditor} /></Info></div>
                    </div>

                    {/* B. Rekapan */}
                    <h5 className="mb-3">B. Rekapan Hasil Visitasi Lapangan AMI {siklusLabel}</h5>

                    <div className="esp-card p-3 p-md-4 mb-4">
                        <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
                            <div className="fw-semibold">Capaian per Standar <span className="text-muted fw-normal small">· klik untuk membuka standar</span></div>
                            <div className="rk-seg no-print" role="group" aria-label="Urutkan">
                                {[['no', 'Nomor'], ['rendah', 'Terendah'], ['tinggi', 'Tertinggi']].map(([k, l]) => (
                                    <button key={k} type="button" className={urut === k ? 'on' : ''} onClick={() => setUrut(k)}>{l}</button>
                                ))}
                            </div>
                        </div>
                        {baris.length === 0 && <div className="text-center text-muted py-3">Belum ada data standar.</div>}
                        {urutan.map((b) => (
                            <button key={b.kode} type="button" className="rk-bar-row" onClick={() => bukaStandar(b.kode)}
                                title={`${b.skor}/${b.maks} · ${b.terisi}/${b.jumlah} indikator dinilai · ${b.kategori.label}`}>
                                <span className="rk-bar-name"><span className="kd">{b.kode}</span>{judul(b.nama)}</span>
                                <span className="rk-track">
                                    <span className="fill" style={{ width: mounted ? `${Math.min(100, b.persen)}%` : '0%', background: katHex(b.kategori.idx) }}></span>
                                    {[60, 75, 85].map((t) => <span key={t} className="tick" style={{ left: `${t}%` }}></span>)}
                                </span>
                                <span className="rk-val">{b.persen.toFixed(1)}%</span>
                            </button>
                        ))}
                        <div className="d-flex flex-wrap gap-3 small text-muted mt-3 ps-2">
                            {legenda.map((l) => (
                                <span key={l.idx}><i className="fa-solid fa-circle me-1" style={{ color: katHex(l.idx) }}></i>{l.label} ({l.rentang})</span>
                            ))}
                            <span className="ms-auto">Garis tipis: batas 60 · 75 · 85</span>
                        </div>
                    </div>

                    <div className="esp-card overflow-hidden">
                        <div className="table-responsive">
                            <table className="table align-middle mb-0 rk-table">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>No Standar</th>
                                        <th className="text-start">Nama Standar</th>
                                        <th>Jumlah Indikator</th>
                                        <th>Skor Maks</th>
                                        <th>Skor Hasil Visitasi</th>
                                        <th>% Capaian</th>
                                        <th>Kategori</th>
                                        <th>Terisi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {urutan.map((b) => (
                                        <tr key={b.kode} className="rk-row" onClick={() => bukaStandar(b.kode)}>
                                            <td className="text-center">{b.no}</td>
                                            <td className="text-center">{b.kode}</td>
                                            <td>{b.nama}</td>
                                            <td className="text-center">{b.jumlah}</td>
                                            <td className="text-center">{b.maks}</td>
                                            <td className="text-center fw-semibold">{b.skor}</td>
                                            <td className="text-center">{b.persen.toFixed(2)}</td>
                                            <td className="text-center"><span className={`badge rounded-pill ${katCls(b.kategori.idx)}`}>{b.kategori.label}</span></td>
                                            <td className={`text-center ${b.lengkap ? '' : 'text-muted'}`}>{b.terisi}/{b.jumlah}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                {baris.length > 0 && (
                                    <tfoot>
                                        <tr>
                                            <td colSpan={3} className="text-center">KESIMPULAN</td>
                                            <td className="text-center">{kesimpulan.jumlah}</td>
                                            <td className="text-center">{kesimpulan.maks}</td>
                                            <td className="text-center">{kesimpulan.skor}</td>
                                            <td className="text-center">{kesimpulan.persen.toFixed(2)}</td>
                                            <td className="text-center"><span className={`badge rounded-pill ${katCls(kesimpulan.kategori.idx)}`}>{kesimpulan.kategori.label}</span></td>
                                            <td className="text-center">{kesimpulan.terisi}/{kesimpulan.jumlah}</td>
                                        </tr>
                                    </tfoot>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </HomeLayout>
    );
}