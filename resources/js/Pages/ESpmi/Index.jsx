import React, { useState, useEffect } from 'react';
import HomeLayout from '../../Layouts/HomeLayout';
import { router, useForm, Link } from '@inertiajs/react';
import { ProgressRing, UI_STYLES, katCls, katHex, katIdx } from '../../Components/EspmiUi';

// Warna badge Status Isian menurut skor Kesimpulan Verifikasi
const SKOR_BADGE = { 4: 'bg-success', 3: 'bg-primary', 2: 'bg-warning text-dark', 1: 'bg-danger' };
const SKOR_HEX = { 4: '#198754', 3: '#0d6efd', 2: '#e0a800', 1: '#dc3545' };

const styles = `
${UI_STYLES}
.esp-tabbar { position: sticky; bottom: 0; z-index: 1000; display: flex; overflow-x: auto; background: #eef0f2; border: 1px solid #c6cbd0; border-bottom: 0; border-radius: .75rem .75rem 0 0; box-shadow: 0 -4px 14px rgba(0,0,0,.10); }
.esp-tab { flex: 0 0 auto; min-width: 66px; border: 0; border-right: 1px solid #d3d7db; background: transparent; padding: .5rem .9rem .45rem; color: #333; display: flex; flex-direction: column; align-items: center; gap: .3rem; transition: background .15s; }
.esp-tab:hover { background: #e2e6ea; }
.esp-tab.active { background: #fff; color: #0b6b3a; font-weight: 700; box-shadow: inset 0 3px 0 #0b6b3a; }
.esp-tab-code { font-size: 1rem; line-height: 1; }
.esp-tab-bar { width: 100%; height: 4px; border-radius: 4px; background: #d8dde2; overflow: hidden; }
.esp-tab-bar > span { display: block; height: 100%; transition: width .5s ease; }
.esp-tab-rekap { margin-left: auto; justify-content: center; flex-direction: row; gap: .4rem; text-decoration: none; color: #0b6b3a; font-weight: 700; border-left: 1px solid #c6cbd0; border-right: 0; padding: .5rem 1.1rem; }
.esp-tab-rekap:hover { color: #0b6b3a; background: #e2e6ea; }
.esp-table thead th { background: #0b3d1f; color: #fff; font-size: .78rem; letter-spacing: .04em; border: 0; }
.esp-table tbody tr { transition: background .12s; }
.esp-table tbody tr:hover { background: #f3f8f5; }
.esp-skor { width: 34px; height: 34px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: 700; color: #fff; background: #adb5bd; }
.esp-search { position: relative; min-width: 240px; }
.esp-search i { position: absolute; left: .8rem; top: 50%; transform: translateY(-50%); color: #8a949e; font-size: .85rem; }
.esp-search input { padding-left: 2.1rem; border-radius: 999px; }
.esp-guide { background: #f6f8f9; border: 1px solid #e3e7ea; border-radius: .5rem; padding: .75rem 1rem; }
.esp-guide dt { font-size: .75rem; text-transform: uppercase; letter-spacing: .03em; color: #6c757d; margin-top: .6rem; }
.esp-guide dt:first-child { margin-top: 0; }
.esp-guide dd { margin-bottom: 0; font-size: .9rem; }
`;

// Hanya izinkan link http/https agar tidak ada "javascript:" dari data
const safeUrl = (url) => (url && /^https?:\/\//i.test(url) ? url : null);
const judulStandar = (s) => `Standar ${s.kode}. ${s.nama.replace(/^Standar\s+/i, '')}`;
const potong = (t, n = 140) => (t && t.length > n ? `${t.slice(0, n).trimEnd()}…` : t);

const fmtTanggal = (iso) => {
    if (!iso) return '-';
    const [y, m, d] = iso.split('-');
    const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    return `${parseInt(d, 10)} ${bulan[parseInt(m, 10) - 1]} ${y}`;
};

function Panduan({ indikator }) {
    const baris = [
        ['Indikator Renstra UNAYA', indikator.renstra_unaya],
        ['Indikator Renstra LPPM', indikator.renstra_lppm],
        ['Acuan', indikator.acuan],
        ['Sumber Data', indikator.sumber_data],
        ['Verifikasi Indikator', indikator.verifikasi],
    ].filter(([, v]) => v && v !== '-');

    return (
        <dl className="esp-guide mb-0">
            {baris.map(([label, val]) => (
                <React.Fragment key={label}>
                    <dt>{label}</dt>
                    <dd className="esp-pre">{val}</dd>
                </React.Fragment>
            ))}
        </dl>
    );
}

function ValidasiModal({ indikator, standar, prodi, siklus, kesimpulan, canAudit, canFill, onClose }) {
    const isian = indikator.isian;
    const { data, setData, post, processing, errors, transform } = useForm({
        program_studi: prodi,
        siklus,
        hasil_verifikasi: isian?.hasil_verifikasi ?? '',
        penyebab: isian?.penyebab ?? '',
        tindakan_pencegahan: isian?.tindakan_pencegahan ?? '',
        skor: isian?.skor ?? '',
        realisasi: isian?.realisasi ?? '',
        // Bukti dari Ka. Prodi
        link: isian?.link ?? '',
        deskripsi: isian?.deskripsi ?? '',
        file: null,
        hapus_file: false,
    });

    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onClose]);

    const submit = (e) => {
        e.preventDefault();

        if (canFill) {
            // Ka. Prodi: hanya bukti. Prodi tidak dikirim; server memakai prodi dari akun.
            transform((d) => ({
                siklus: d.siklus,
                link: d.link,
                deskripsi: d.deskripsi,
                hapus_file: d.hapus_file ? 1 : 0,
                ...(d.file ? { file: d.file } : {}),
            }));
            post(`/e-spmi/indikator/${indikator.id}/bukti`, {
                forceFormData: true,
                preserveScroll: true,
                preserveState: true,
                onSuccess: onClose,
            });
            return;
        }

        // Auditor/Admin: hanya kolom penilaian
        transform((d) => ({
            program_studi: d.program_studi,
            siklus: d.siklus,
            hasil_verifikasi: d.hasil_verifikasi,
            penyebab: d.penyebab,
            tindakan_pencegahan: d.tindakan_pencegahan,
            skor: d.skor,
            realisasi: d.realisasi,
        }));
        post(`/e-spmi/indikator/${indikator.id}`, {
            preserveScroll: true,
            preserveState: true,
            onSuccess: onClose,
        });
    };

    const kosongkan = () =>
        setData({ ...data, hasil_verifikasi: '', penyebab: '', tindakan_pencegahan: '', skor: '', realisasi: '' });

    const link = safeUrl(isian?.link);
    const berkas = isian?.file_url ? { url: isian.file_url, nama: isian.file_nama } : null;
    const pilih = kesimpulan.find((k) => String(k.skor) === String(data.skor));
    const tampilKesimpulan = kesimpulan.find((k) => String(k.skor) === String(isian?.skor));

    // Fungsi biasa (bukan komponen) agar kotak teks tidak dibuat ulang tiap ketikan
    const renderField = (label, name, rows = 3) => (
        <div className="mb-3">
            <label htmlFor={name} className="form-label fw-semibold">{label}</label>
            {canAudit ? (
                <>
                    <textarea id={name} rows={rows} maxLength={5000}
                        className={`form-control ${errors[name] ? 'is-invalid' : ''}`}
                        value={data[name]} onChange={(e) => setData(name, e.target.value)} />
                    {errors[name] && <div className="invalid-feedback">{errors[name]}</div>}
                </>
            ) : (
                <div className="esp-pre">{isian?.[name] || '-'}</div>
            )}
        </div>
    );

    return (
        <>
            <div className="modal-backdrop fade show" style={{ zIndex: 100000 }} onClick={onClose}></div>
            <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ zIndex: 100001 }} onClick={onClose}>
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable esp-fade" onClick={(e) => e.stopPropagation()}>
                    <form className="modal-content border-0 shadow-lg" style={{ borderRadius: '1rem' }} onSubmit={submit} noValidate>
                        <div className="modal-header">
                            <div>
                                <h5 className="modal-title mb-1">
                                    {canAudit ? 'Validasi Data' : canFill ? 'Isi Bukti' : 'Detail'} · Indikator {indikator.kode}
                                </h5>
                                <div className="small text-muted">{judulStandar(standar)} · {prodi}</div>
                            </div>
                            <button type="button" className="btn-close" aria-label="Tutup" onClick={onClose}></button>
                        </div>

                        <div className="modal-body">
                            <p className="fw-semibold mb-3">{indikator.capaian}</p>

                            <div className="mb-4">
                                <div className="small fw-bold text-uppercase text-muted mb-2">Panduan Instrumen</div>
                                <Panduan indikator={indikator} />
                            </div>

                            <div className="mb-4">
                                <div className="small fw-bold text-uppercase text-muted mb-2">Bukti dari Program Studi</div>
                                {canFill ? (
                                    <>
                                        <div className="mb-3">
                                            <label htmlFor="link" className="form-label fw-semibold">Data Dukung (Link)</label>
                                            <input id="link" type="url" maxLength={255} placeholder="https://..."
                                                className={`form-control ${errors.link ? 'is-invalid' : ''}`}
                                                value={data.link} onChange={(e) => setData('link', e.target.value)} />
                                            {errors.link && <div className="invalid-feedback">{errors.link}</div>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="file" className="form-label fw-semibold">Atau Unggah Berkas</label>
                                            {berkas && !data.hapus_file && (
                                                <div className="small mb-2">
                                                    Berkas saat ini:{' '}
                                                    <a href={berkas.url}><i className="fa-solid fa-file-arrow-down me-1"></i>{berkas.nama || 'Unduh'}</a>
                                                    {' '}· memilih berkas baru akan menggantikannya
                                                </div>
                                            )}
                                            <input id="file" type="file"
                                                accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png,.zip"
                                                className={`form-control ${errors.file ? 'is-invalid' : ''}`}
                                                onChange={(e) => setData('file', e.target.files?.[0] ?? null)} />
                                            {errors.file && <div className="invalid-feedback">{errors.file}</div>}
                                            <div className="form-text">PDF, Word, Excel, PowerPoint, JPG/PNG, atau ZIP. Maksimal 10 MB.</div>
                                            {berkas && (
                                                <div className="form-check mt-2">
                                                    <input id="hapus_file" type="checkbox" className="form-check-input"
                                                        checked={data.hapus_file} onChange={(e) => setData('hapus_file', e.target.checked)} />
                                                    <label htmlFor="hapus_file" className="form-check-label text-danger">Hapus berkas ini</label>
                                                </div>
                                            )}
                                        </div>
                                        <div className="mb-1">
                                            <label htmlFor="deskripsi" className="form-label fw-semibold">Deskripsi / Catatan</label>
                                            <textarea id="deskripsi" rows={4} maxLength={5000}
                                                className={`form-control ${errors.deskripsi ? 'is-invalid' : ''}`}
                                                value={data.deskripsi} onChange={(e) => setData('deskripsi', e.target.value)} />
                                            {errors.deskripsi && <div className="invalid-feedback">{errors.deskripsi}</div>}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="mb-1">
                                            <strong>Data dukung: </strong>
                                            {link ? <a href={link} target="_blank" rel="noopener noreferrer">{potong(link, 70)}</a> : '-'}
                                        </div>
                                        {berkas && (
                                            <div className="mb-1">
                                                <strong>Berkas: </strong>
                                                <a href={berkas.url}><i className="fa-solid fa-file-arrow-down me-1"></i>{berkas.nama || 'Unduh'}</a>
                                            </div>
                                        )}
                                        <div className="esp-pre"><strong>Deskripsi: </strong>{isian?.deskripsi || '-'}</div>
                                    </>
                                )}
                            </div>

                            <div className="small fw-bold text-uppercase text-muted mb-2">Hasil Audit</div>
                            {renderField('Hasil Verifikasi', 'hasil_verifikasi', 4)}
                            {renderField('Penyebab', 'penyebab')}
                            {renderField('Tindakan Pencegahan', 'tindakan_pencegahan')}

                            <div className="row g-3">
                                <div className="col-md-7">
                                    <label htmlFor="skor" className="form-label fw-semibold">Kesimpulan Verifikasi</label>
                                    {canAudit ? (
                                        <>
                                            <select id="skor" className={`form-select ${errors.skor ? 'is-invalid' : ''}`}
                                                value={String(data.skor ?? '')} onChange={(e) => setData('skor', e.target.value)}>
                                                <option value="">-- Pilih --</option>
                                                {kesimpulan.map((k) => <option key={k.skor} value={String(k.skor)}>{k.label}</option>)}
                                            </select>
                                            {errors.skor && <div className="invalid-feedback">{errors.skor}</div>}
                                            <div className="small mt-1">
                                                Skor: <strong>{pilih ? pilih.skor : '-'}</strong>
                                                {pilih && <> · Status: <span className={`badge ${SKOR_BADGE[pilih.skor]}`}>{pilih.status}</span></>}
                                            </div>
                                        </>
                                    ) : (
                                        <div>{tampilKesimpulan?.label || '-'}</div>
                                    )}
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="realisasi" className="form-label fw-semibold">Realisasi (Tanggal)</label>
                                    {canAudit ? (
                                        <>
                                            <input id="realisasi" type="date" className={`form-control ${errors.realisasi ? 'is-invalid' : ''}`}
                                                value={data.realisasi || ''} onChange={(e) => setData('realisasi', e.target.value)} />
                                            {errors.realisasi && <div className="invalid-feedback">{errors.realisasi}</div>}
                                        </>
                                    ) : (
                                        <div>{fmtTanggal(isian?.realisasi)}</div>
                                    )}
                                </div>
                            </div>

                            {isian?.penilai && (
                                <div className="small text-muted mt-3">
                                    Terakhir dinilai oleh {isian.penilai}{isian.dinilai_pada ? `, ${isian.dinilai_pada}` : ''}
                                </div>
                            )}
                            {(errors.program_studi || errors.siklus) && (
                                <div className="text-danger small mt-2">{errors.program_studi || errors.siklus}</div>
                            )}
                        </div>

                        <div className="modal-footer justify-content-between">
                            <div>
                                {canAudit && (
                                    <button type="button" className="btn btn-link text-danger p-0" onClick={kosongkan}>
                                        Kosongkan penilaian
                                    </button>
                                )}
                            </div>
                            <div className="d-flex gap-2">
                                <button type="button" className="btn btn-outline-secondary" onClick={onClose}>
                                    {canAudit || canFill ? 'Batal' : 'Tutup'}
                                </button>
                                {(canAudit || canFill) && (
                                    <button type="submit" className="btn btn-success" disabled={processing}>
                                        {processing ? 'Menyimpan...' : 'Simpan'}
                                    </button>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default function Index(props) {
    return <EspmiPage key={`${props.prodi}|${props.siklus}`} {...props} />;
}

function EspmiPage({ standars, prodi, prodiList, siklus, siklusList, skorMax, kesimpulan, kategori, canAudit, canFill, prodiTerkunci }) {
    // Standar awal bisa dipilih lewat ?standar=KODE (dipakai tautan dari halaman Rekap)
    const [activeId, setActiveId] = useState(() => {
        const kode = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('standar') : null;
        return standars.find((s) => String(s.kode) === kode)?.id ?? standars[0]?.id ?? null;
    });
    const [editing, setEditing] = useState(null); // { indikator, standar }
    const [filter, setFilter] = useState('all');  // all | none | <skor>
    const [cari, setCari] = useState('');

    const changeFilter = (next) => router.get('/e-spmi', { prodi, siklus, ...next }, { preserveScroll: true });
    const rekapHref = `/e-spmi/rekap?prodi=${encodeURIComponent(prodi)}&siklus=${encodeURIComponent(siklus)}`;
    const siklusLabel = siklusList.find((s) => s.value === siklus)?.label ?? siklus;

    const aktifIdx = Math.max(0, standars.findIndex((s) => s.id === activeId));
    const aktif = standars[aktifIdx];

    const statusDari = (isian) => {
        const k = kesimpulan.find((x) => String(x.skor) === String(isian?.skor ?? ''));
        return k ? { text: k.status, cls: SKOR_BADGE[k.skor] } : { text: 'Belum Dinilai', cls: 'bg-secondary' };
    };

    // Statistik satu kumpulan indikator
    const statDari = (indikators) => {
        const n = indikators.length;
        const terisi = indikators.filter((i) => i.isian?.skor != null).length;
        const total = indikators.reduce((a, i) => a + (Number(i.isian?.skor) || 0), 0);
        const bukti = indikators.filter((i) => i.isian && (i.isian.link || i.isian.file_nama || i.isian.deskripsi)).length;
        const max = n * skorMax;
        const pct = max ? (total / max) * 100 : 0;
        return { n, terisi, bukti, total, max, pct, idx: katIdx(pct, kategori, terisi) };
    };

    const semuaIndikator = standars.flatMap((s) => s.indikators);
    const statSemua = statDari(semuaIndikator);
    const statAktif = aktif ? statDari(aktif.indikators) : null;
    const katLabel = (idx) => (idx == null ? 'Belum Dinilai' : kategori[idx]?.label ?? '-');

    // Chip filter status (hitungan untuk seluruh standar prodi ini)
    const hitung = (fn) => semuaIndikator.filter(fn).length;
    const chips = [
        { key: 'all', label: 'Semua', count: semuaIndikator.length, color: '#0b6b3a' },
        ...kesimpulan.map((k) => ({
            key: String(k.skor), label: k.status, color: SKOR_HEX[k.skor],
            count: hitung((i) => String(i.isian?.skor ?? '') === String(k.skor)),
        })),
        { key: 'none', label: 'Belum Dinilai', color: '#6c757d', count: hitung((i) => i.isian?.skor == null) },
    ];

    const cocok = (i) => {
        const sk = String(i.isian?.skor ?? '');
        const okStatus = filter === 'all' || (filter === 'none' ? sk === '' : sk === filter);
        const q = cari.trim().toLowerCase();
        const okCari = !q || i.kode.toLowerCase().includes(q)
            || (i.capaian || '').toLowerCase().includes(q)
            || (i.isian?.deskripsi || '').toLowerCase().includes(q);
        return okStatus && okCari;
    };
    const barisTampil = aktif ? aktif.indikators.filter(cocok) : [];
    const resetFilter = () => { setFilter('all'); setCari(''); };

    const pindah = (arah) => {
        const t = standars[aktifIdx + arah];
        if (t) setActiveId(t.id);
    };

    return (
        <HomeLayout header="e-SPMI">
            <style>{styles}</style>

            <section className="hero">
                <div className="container-hero text-center">
                    <h1 className="display-4 fw-bold fade-in">e-SPMI</h1>
                    <p className="lead fade-in">Audit Mutu Internal · Universitas Abulyatama</p>
                </div>
            </section>

            <section className="download-content py-5">
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
                        <h4 className="mb-0">Monitoring Isian Form Mutu Program Studi</h4>
                        <div className="d-flex flex-wrap align-items-center gap-3">
                            <div className="d-flex align-items-center gap-2">
                                <label htmlFor="prodi" className="mb-0 fw-semibold">Program Studi</label>
                                <select id="prodi" className="form-select" style={{ minWidth: '200px' }} value={prodi}
                                    disabled={prodiTerkunci}
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
                            <Link href={rekapHref} className="btn btn-success">
                                <i className="fa-solid fa-chart-column me-2"></i>Lihat Rekap
                            </Link>
                        </div>
                    </div>

                    {/* Ringkasan + filter status */}
                    <div className="esp-card p-4 mb-4 esp-fade">
                        <div className="d-flex flex-wrap align-items-center gap-4">
                            <ProgressRing value={statSemua.pct} size={132} color={katHex(statSemua.idx)}>
                                <div className="fs-3 fw-bold">{statSemua.pct.toFixed(1)}%</div>
                                <div className="small text-muted">capaian</div>
                            </ProgressRing>
                            <div className="flex-grow-1" style={{ minWidth: '260px' }}>
                                <div className="text-muted small">{prodi} · {siklusLabel}</div>
                                <div className="h5 mb-2">
                                    Skor {statSemua.total}/{statSemua.max}{' '}
                                    <span className={`badge ${katCls(statSemua.idx)} ms-1`}>{katLabel(statSemua.idx)}</span>
                                </div>
                                <div className="esp-progress mb-1" title="Indikator yang sudah dinilai">
                                    <span style={{ width: `${statSemua.n ? (statSemua.terisi / statSemua.n) * 100 : 0}%`, background: '#0b6b3a' }}></span>
                                </div>
                                <div className="small text-muted mb-2">{statSemua.terisi} dari {statSemua.n} indikator sudah dinilai</div>
                                <div className="esp-progress mb-1" title="Indikator yang sudah diisi bukti oleh program studi">
                                    <span style={{ width: `${statSemua.n ? (statSemua.bukti / statSemua.n) * 100 : 0}%`, background: '#0d6efd' }}></span>
                                </div>
                                <div className="small text-muted mb-3">{statSemua.bukti} dari {statSemua.n} indikator sudah diisi bukti (link/berkas/deskripsi)</div>
                                <div className="d-flex flex-wrap gap-2">
                                    {chips.map((c) => (
                                        <button key={c.key} type="button" style={{ '--c': c.color }}
                                            className={`esp-chip ${filter === c.key ? 'on' : ''}`}
                                            onClick={() => setFilter(filter === c.key ? 'all' : c.key)}>
                                            <span className="dot"></span>{c.label} <b>{c.count}</b>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {canFill && (
                        <div className="alert alert-info">
                            Anda masuk sebagai <strong>Ka. Prodi {prodi}</strong>. Anda dapat mengisi{' '}
                            <strong>Data Dukung (link atau berkas)</strong> dan <strong>Deskripsi</strong> untuk program studi Anda,
                            serta memantau perkembangan penilaian. Penilaian dilakukan oleh Auditor.
                        </div>
                    )}
                    {!canAudit && !canFill && (
                        <div className="alert alert-info">
                            Akun Anda hanya dapat <strong>melihat</strong> data e-SPMI. Penilaian hanya dapat
                            dilakukan oleh akun dengan hak akses Auditor.
                        </div>
                    )}

                    {standars.length === 0 && (
                        <div className="alert alert-secondary text-center">Belum ada data e-SPMI.</div>
                    )}

                    {aktif && (
                        <div className="mb-4 esp-fade" key={aktif.id}>
                            <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-2">
                                <div className="d-flex align-items-center gap-2">
                                    <button type="button" className="btn btn-sm btn-outline-secondary rounded-circle" title="Standar sebelumnya"
                                        disabled={aktifIdx === 0} onClick={() => pindah(-1)}>
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </button>
                                    <h5 className="mb-0">{judulStandar(aktif)}</h5>
                                    <button type="button" className="btn btn-sm btn-outline-secondary rounded-circle" title="Standar berikutnya"
                                        disabled={aktifIdx === standars.length - 1} onClick={() => pindah(1)}>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </button>
                                </div>
                                <div className="esp-search">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                    <input type="search" className="form-control" placeholder="Cari indikator…"
                                        value={cari} onChange={(e) => setCari(e.target.value)} />
                                </div>
                            </div>

                            <div className="small mb-2">
                                Skor <strong>{statAktif.total}/{statAktif.max}</strong> · Capaian{' '}
                                <strong>{statAktif.pct.toFixed(1)}%</strong>{' '}
                                <span className={`badge ${katCls(statAktif.idx)}`}>{katLabel(statAktif.idx)}</span>
                                <span className="text-muted ms-2">· {statAktif.terisi}/{statAktif.n} dinilai · {statAktif.bukti}/{statAktif.n} bukti terisi</span>
                            </div>
                            <div className="esp-progress mb-3">
                                <span style={{ width: `${statAktif.pct}%`, background: katHex(statAktif.idx) }}></span>
                            </div>

                            <div className="esp-card overflow-hidden">
                                <div className="download-table-wrapper table-responsive">
                                    <table className="download-table esp-table table align-middle mb-0">
                                        <thead>
                                            <tr>
                                                <th className="text-center">INDEX</th>
                                                <th>DOKUMEN PENDUKUNG</th>
                                                <th className="text-center">SKOR</th>
                                                <th className="text-center">DATA DUKUNG</th>
                                                <th>DESKRIPSI</th>
                                                <th className="text-center">STATUS ISIAN</th>
                                                <th className="text-center">AKSI</th>
                                            </tr>
                                        </thead>
                                        <tbody className="download-table-body">
                                            {aktif.indikators.length === 0 && (
                                                <tr><td colSpan={7} className="text-center text-muted py-4">Belum ada indikator pada standar ini.</td></tr>
                                            )}
                                            {aktif.indikators.length > 0 && barisTampil.length === 0 && (
                                                <tr>
                                                    <td colSpan={7} className="text-center text-muted py-4">
                                                        Tidak ada indikator yang cocok dengan filter.{' '}
                                                        <button type="button" className="btn btn-link p-0 align-baseline" onClick={resetFilter}>Reset filter</button>
                                                    </td>
                                                </tr>
                                            )}
                                            {barisTampil.map((ind) => {
                                                const isian = ind.isian;
                                                const link = safeUrl(isian?.link);
                                                const status = statusDari(isian);
                                                const sudahDinilai = isian?.skor != null;
                                                return (
                                                    <tr key={ind.id}>
                                                        <td className="text-center fw-semibold">{ind.kode}</td>
                                                        <td>{ind.capaian}</td>
                                                        <td className="text-center">
                                                            <span className="esp-skor" style={sudahDinilai ? { background: SKOR_HEX[isian.skor] } : undefined}>
                                                                {isian?.skor ?? '-'}
                                                            </span>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="d-flex flex-column align-items-center gap-1">
                                                                {link && (
                                                                    <a href={link} target="_blank" rel="noopener noreferrer"
                                                                        className="btn btn-sm btn-outline-info" title={link}>
                                                                        <i className="fa-solid fa-link me-1"></i>Link
                                                                    </a>
                                                                )}
                                                                {isian?.file_url && (
                                                                    <a href={isian.file_url} className="btn btn-sm btn-outline-secondary"
                                                                        title={isian.file_nama || 'Unduh berkas'}>
                                                                        <i className="fa-solid fa-file-arrow-down me-1"></i>Berkas
                                                                    </a>
                                                                )}
                                                                {!link && !isian?.file_url && <span className="text-muted">-</span>}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="esp-pre">{isian?.deskripsi || '-'}</div>
                                                            {isian?.hasil_verifikasi && (
                                                                <div className="small text-muted mt-1">
                                                                    <i className="fa-solid fa-comment-dots me-1"></i>
                                                                    Hasil verifikasi: {potong(isian.hasil_verifikasi)}
                                                                </div>
                                                            )}
                                                        </td>
                                                        <td className="text-center">
                                                            <span className={`badge rounded-pill ${status.cls}`}>{status.text}</span>
                                                            {isian?.penilai && sudahDinilai && (
                                                                <div className="small text-muted mt-1">
                                                                    oleh {isian.penilai}
                                                                    {isian.dinilai_pada && <><br />{isian.dinilai_pada}</>}
                                                                </div>
                                                            )}
                                                        </td>
                                                        <td className="text-center">
                                                            <button type="button"
                                                                className={`btn btn-sm ${canAudit || canFill ? 'btn-primary' : 'btn-outline-primary'}`}
                                                                onClick={() => setEditing({ indikator: ind, standar: aktif })}>
                                                                {canFill
                                                                    ? (isian && (isian.link || isian.file_nama || isian.deskripsi) ? 'Ubah Bukti' : 'Isi Bukti')
                                                                    : !canAudit ? 'Lihat Detail' : sudahDinilai ? 'Ubah Nilai' : 'Validasi Data'}
                                                            </button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                        <tfoot>
                                            <tr className="table-light fw-bold">
                                                <td colSpan={2} className="text-end">Total Skor</td>
                                                <td className="text-center">{statAktif.total}</td>
                                                <td colSpan={4}></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Tab sheet ala Excel: tiap tab menampilkan progres penilaian standarnya */}
                {standars.length > 0 && (
                    <div className="container">
                        <div className="esp-tabbar" role="tablist" aria-label="Pilih standar">
                            {standars.map((s) => {
                                const st = statDari(s.indikators);
                                return (
                                    <button key={s.id} type="button" role="tab"
                                        aria-selected={aktif?.id === s.id}
                                        title={`${judulStandar(s)} · ${st.terisi}/${st.n} dinilai · ${st.pct.toFixed(1)}%`}
                                        className={`esp-tab ${aktif?.id === s.id ? 'active' : ''}`}
                                        onClick={() => setActiveId(s.id)}>
                                        <span className="esp-tab-code">{s.kode}</span>
                                        <span className="esp-tab-bar">
                                            <span style={{ width: `${st.n ? (st.terisi / st.n) * 100 : 0}%`, background: katHex(st.idx) }}></span>
                                        </span>
                                    </button>
                                );
                            })}
                            <Link href={rekapHref} className="esp-tab esp-tab-rekap" title="Rekap hasil audit (HASIL AL)">
                                <i className="fa-solid fa-chart-column"></i>Rekap
                            </Link>
                        </div>
                    </div>
                )}
            </section>

            {editing && (
                <ValidasiModal
                    key={editing.indikator.id}
                    indikator={editing.indikator}
                    standar={editing.standar}
                    prodi={prodi}
                    siklus={siklus}
                    kesimpulan={kesimpulan}
                    canAudit={canAudit}
                    canFill={canFill}
                    onClose={() => setEditing(null)}
                />
            )}
        </HomeLayout>
    );
}