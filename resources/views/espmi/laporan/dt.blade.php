<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="utf-8">
    <title>DT AMI {{ $prodi }} {{ $siklusJudul }}</title>
    @include('espmi.laporan._style')
</head>
<body>
    <div class="hal"></div>

    @include('espmi.laporan._kop', ['judul' => 'DAFTAR TEMUAN (DT) AUDIT MUTU INTERNAL (AMI)'])

    {{-- A. Identitas Auditee --}}
    <div class="bagian">A. Identitas Auditee</div>
    <table class="grid">
        <tr>
            <td class="c" style="width: 5%;">1</td>
            <td style="width: 22%;">Fakultas</td>
            <td>{{ $fakultas }}</td>
        </tr>
        <tr>
            <td class="c">2</td>
            <td>Auditee (Nama Prodi)</td>
            <td>{{ $prodi }}</td>
        </tr>
        <tr>
            <td class="c">3</td>
            <td>Nama Dekan</td>
            <td>{{ $dekan }}</td>
        </tr>
        <tr>
            <td class="c">4</td>
            <td>Nama Ka. Prodi</td>
            <td>{{ $kaprodi }}</td>
        </tr>
        <tr>
            <td class="c">5</td>
            <td>Nama DTPS</td>
            <td>
                @forelse ($dtps as $nama)
                    {{ $loop->iteration }}. {{ $nama }}<br>
                @empty
                    -
                @endforelse
            </td>
        </tr>
        <tr>
            <td class="c">6</td>
            <td>Tim Auditor</td>
            <td>
                @forelse ($auditor as $nama)
                    {{ $loop->iteration }}. {{ $nama }}<br>
                @empty
                    -
                @endforelse
            </td>
        </tr>
        <tr>
            <td class="c">7</td>
            <td>Tanggal Audit</td>
            <td>{{ $tanggalAudit }}</td>
        </tr>
        <tr>
            <td class="c">8</td>
            <td>Distribusi</td>
            <td>
                <table class="noborder">
                    @foreach ($cfg['distribusi'] as $baris2)
                        <tr>
                            @foreach ($baris2 as $unit)
                                <td style="width: 50%;">{{ $unit }}</td>
                            @endforeach
                        </tr>
                    @endforeach
                </table>
            </td>
        </tr>
    </table>

    {{-- Daftar temuan --}}
    <div class="bagian" style="margin-top: 12px;">DAFTAR TEMUAN</div>
    <table class="grid">
        <thead>
            <tr>
                <th rowspan="2" style="width: 4%;">No</th>
                <th colspan="3">Referensi (Butir Mutu)</th>
                <th rowspan="2" style="width: 40%;">Uraian Temuan</th>
                <th rowspan="2" style="width: 7%;">Skor Temuan</th>
                <th rowspan="2" style="width: 10%;">Kategori* (KTB/KTS/OB)</th>
                <th rowspan="2" style="width: 10%;">Unit Penanggung Jawab</th>
            </tr>
            <tr>
                <th style="width: 7%;">Indikator Standar</th>
                <th style="width: 9%;">Indikator Renstra UNAYA</th>
                <th style="width: 9%;">Indikator Renstra LPPM</th>
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
                    <td class="c">{{ $r['skor'] }}</td>
                    <td class="c">{{ $r['kategori'] }}</td>
                    <td class="c">{{ $r['unit'] }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
    @if ($belumDinilai > 0)
        <p class="catatan">Catatan: {{ $belumDinilai }} dari {{ $kesimpulan['jumlah'] }} indikator belum dinilai.</p>
    @endif

    {{-- Kesimpulan Hasil Temuan --}}
    <div class="nowrap-block">
        <div class="bagian" style="margin-top: 14px;">Kesimpulan Hasil Temuan</div>
        <table class="grid">
            <thead>
                <tr>
                    <th style="width: 5%;">No</th>
                    <th style="width: 9%;">No Standar</th>
                    <th>Nama Standar</th>
                    <th style="width: 11%;">Jumlah Indikator</th>
                    <th style="width: 9%;">Skor Maks</th>
                    <th style="width: 12%;">Skor Hasil Visitasi</th>
                    <th style="width: 10%;">% Capaian</th>
                    <th style="width: 15%;">Kategori</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($rekap as $r)
                    <tr>
                        <td class="c">{{ $r['no'] }}</td>
                        <td class="c">{{ $r['kode'] }}</td>
                        <td>{{ $r['nama'] }}</td>
                        <td class="c">{{ $r['jumlah'] }}</td>
                        <td class="c">{{ $r['maks'] }}</td>
                        <td class="c">{{ $r['skor'] }}</td>
                        <td class="c">{{ $r['persen'] }}</td>
                        <td class="c">{{ $r['kategori'] }}</td>
                    </tr>
                @endforeach
                <tr class="b">
                    <td class="c" colspan="3">KESIMPULAN</td>
                    <td class="c">{{ $kesimpulan['jumlah'] }}</td>
                    <td class="c">{{ $kesimpulan['maks'] }}</td>
                    <td class="c">{{ $kesimpulan['skor'] }}</td>
                    <td class="c">{{ $kesimpulan['persen'] }}</td>
                    <td class="c">{{ $kesimpulan['kategori'] }}</td>
                </tr>
            </tbody>
        </table>
    </div>

    @include('espmi.laporan._persetujuan')

    {{-- Keterangan persentase --}}
    <div class="nowrap-block" style="margin-top: 12px;">
        <table class="grid" style="width: 45%;">
            <tr>
                <th style="width: 30%;">Persentase</th>
                <th>Kategori</th>
            </tr>
            @foreach ($legenda as $l)
                <tr>
                    <td class="c">{{ $l['rentang'] }}</td>
                    <td>{{ $l['label'] }}</td>
                </tr>
            @endforeach
        </table>
    </div>
</body>
</html>