<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="utf-8">
    <title>PTK AMI {{ $prodi }} {{ $siklusJudul }}</title>
    @include('espmi.laporan._style')
</head>
<body>
    <div class="hal"></div>

    @include('espmi.laporan._kop', ['judul' => 'PERMINTAAN TINDAKAN KOREKSI (PTK) AUDIT MUTU INTERNAL (AMI)'])

    {{-- Kotak identitas PTK --}}
    <table class="grid">
        <tr>
            <td style="width: 55%; padding: 0;">
                <table class="noborder" style="width: 100%;">
                    <tr>
                        <td style="width: 24%;">Unit Kerja Auditi</td>
                        <td style="width: 3%;">:</td>
                        <td>{{ $prodi }}</td>
                    </tr>
                    <tr>
                        <td>Ruang Lingkup</td>
                        <td>:</td>
                        <td>{{ $cfg['ruang_lingkup'] }}</td>
                    </tr>
                    <tr>
                        <td>Kriteria</td>
                        <td>:</td>
                        <td>{{ $cfg['kriteria'] }}</td>
                    </tr>
                </table>
            </td>
            <td style="padding: 0;">
                <table class="noborder" style="width: 100%;">
                    <tr>
                        <td style="width: 26%;">Disusun Oleh</td>
                        <td style="width: 3%;">:</td>
                        <td>Ketua Auditor<br>{{ $ketuaAuditor }}</td>
                    </tr>
                    <tr>
                        <td>Tanggal</td>
                        <td>:</td>
                        <td>{{ $tanggalAudit }}</td>
                    </tr>
                    <tr>
                        <td style="height: 9mm;">Paraf</td>
                        <td>:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Diperiksa Oleh</td>
                        <td>:</td>
                        <td>Ketua Bidang Audit Mutu Internal<br>{{ $cfg['ketua_bidang_ami'] }}</td>
                    </tr>
                    <tr>
                        <td>Tanggal</td>
                        <td>:</td>
                        <td>{{ $tanggalAudit }}</td>
                    </tr>
                    <tr>
                        <td style="height: 9mm;">Paraf</td>
                        <td>:</td>
                        <td></td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

    {{-- Permasalahan --}}
    <div class="bagian" style="margin-top: 12px;">PERMASALAHAN</div>
    <table class="grid">
        <thead>
            <tr>
                <th rowspan="2" style="width: 3.5%;">No</th>
                <th colspan="3">Referensi (Butir Mutu)</th>
                <th rowspan="2" style="width: 25%;">Permasalahan</th>
                <th rowspan="2" style="width: 19%;">Penyebab</th>
                <th rowspan="2" style="width: 19%;">Tindakan Pencegahan</th>
                <th rowspan="2" style="width: 9%;">Realisasi<br>(Tanggal/Bulan/<br>Tahun)</th>
                <th rowspan="2" style="width: 8%;">Unit Penanggung Jawab</th>
            </tr>
            <tr>
                <th style="width: 5%;">Indikator Standar</th>
                <th style="width: 6%;">Indikator Renstra UNAYA</th>
                <th style="width: 6%;">Indikator Renstra LPPM</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($baris as $r)
                <tr>
                    <td class="c">{{ $r['no'] }}</td>
                    <td class="c">{{ $r['kode'] }}</td>
                    <td class="c">{{ $r['renstra_unaya'] }}</td>
                    <td class="c">{{ $r['renstra_lppm'] }}</td>
                    <td>{!! nl2br(e($r['uraian'])) !!}</td>
                    <td>{!! nl2br(e($r['penyebab'])) !!}</td>
                    <td>{!! nl2br(e($r['tindakan'])) !!}</td>
                    <td class="c">{{ $r['realisasi'] }}</td>
                    <td class="c">{{ $r['unit'] }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
    @if ($belumDinilai > 0)
        <p class="catatan">Catatan: {{ $belumDinilai }} dari {{ $kesimpulan['jumlah'] }} indikator belum dinilai.</p>
    @endif

    @include('espmi.laporan._persetujuan')
</body>
</html>