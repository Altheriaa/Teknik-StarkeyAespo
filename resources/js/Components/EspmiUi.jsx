import React, { useEffect, useState } from 'react';

// Warna kategori capaian, urutan sama dengan config('espmi.kategori'):
// Sangat Memenuhi, Memenuhi, Memerlukan Perbaikan, Belum Memenuhi
export const KAT_HEX = ['#198754', '#0d6efd', '#e0a800', '#dc3545'];
export const KAT_CLS = ['bg-success', 'bg-primary', 'bg-warning text-dark', 'bg-danger'];
export const katHex = (idx) => (idx == null ? '#6c757d' : KAT_HEX[idx] ?? '#6c757d');
export const katCls = (idx) => (idx == null ? 'bg-secondary' : KAT_CLS[idx] ?? 'bg-secondary');

// Indeks kategori dari persentase; null bila belum ada penilaian sama sekali
export const katIdx = (pct, kategori, terisi = 1) => {
    if (!terisi) return null;
    const i = kategori.findIndex((k) => pct >= k.min);
    return i < 0 ? null : i;
};

// true setelah render pertama, dipakai untuk memicu animasi masuk
export function useMounted() {
    const [m, setM] = useState(false);
    useEffect(() => {
        const t = requestAnimationFrame(() => setM(true));
        return () => cancelAnimationFrame(t);
    }, []);
    return m;
}

export function ProgressRing({ value = 0, size = 120, stroke = 10, color = '#198754', children }) {
    const mounted = useMounted();
    const r = (size - stroke) / 2;
    const c = 2 * Math.PI * r;
    const pct = Math.max(0, Math.min(100, value));
    return (
        <div className="esp-ring" style={{ width: size, height: size }}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e9ecef" strokeWidth={stroke} />
                <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke}
                    strokeLinecap="round" strokeDasharray={c}
                    strokeDashoffset={mounted ? c * (1 - pct / 100) : c}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                    style={{ transition: 'stroke-dashoffset .9s ease, stroke .3s' }} />
            </svg>
            <div className="esp-ring-label">{children}</div>
        </div>
    );
}

export const UI_STYLES = `
@keyframes espFade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
.esp-fade { animation: espFade .45s ease both; }
.esp-card { background: #fff; border: 1px solid #e6e9ec; border-radius: 1rem; box-shadow: 0 2px 12px rgba(16,24,40,.06); }
.esp-ring { position: relative; display: inline-block; flex: 0 0 auto; }
.esp-ring-label { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1.15; }
.esp-chip { border: 1px solid #d9dee3; background: #fff; border-radius: 999px; padding: .3rem .85rem; font-size: .85rem; font-weight: 500; color: #444; display: inline-flex; align-items: center; gap: .45rem; transition: all .15s; }
.esp-chip:hover { border-color: var(--c, #0b6b3a); color: var(--c, #0b6b3a); transform: translateY(-1px); }
.esp-chip.on { background: var(--c, #0b6b3a); border-color: var(--c, #0b6b3a); color: #fff; }
.esp-chip b { font-weight: 700; }
.esp-chip .dot { width: .6rem; height: .6rem; border-radius: 50%; background: var(--c, #0b6b3a); }
.esp-chip.on .dot { background: #fff; }
.esp-pre { white-space: pre-line; }
.esp-progress { height: 6px; border-radius: 999px; background: #e9ecef; overflow: hidden; }
.esp-progress > span { display: block; height: 100%; border-radius: 999px; transition: width .8s ease; }
`;