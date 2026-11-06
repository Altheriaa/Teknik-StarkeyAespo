{{-- TEMPAT PERSETUJUAN (Pimpinan Auditi, Ketua Auditor) + DI REVIEW OLEH (Ketua LPjM) --}}
<div class="nowrap-block">
    <div class="bagian">TEMPAT PERSETUJUAN</div>
    <table class="grid">
        <tr>
            <th style="width: 12%;">Pimpinan Auditi</th>
            <th style="width: 20%;">Nama Lengkap</th>
            <th style="width: 18%;">Tanda Tangan</th>
            <th style="width: 12%;">Ketua Auditor</th>
            <th style="width: 20%;">Nama Lengkap</th>
            <th style="width: 18%;">Tanda Tangan</th>
        </tr>
        <tr>
            <td></td>
            <td style="height: 20mm; vertical-align: bottom;" class="c">{{ $kaprodi }}</td>
            <td></td>
            <td></td>
            <td style="vertical-align: bottom;" class="c">{{ $ketuaAuditor }}</td>
            <td></td>
        </tr>
    </table>

    <div class="bagian" style="margin-top: 8px;">DI REVIEW OLEH:</div>
    <table class="grid" style="width: 50%;">
        <tr>
            <th style="width: 24%;">Ketua LPjM</th>
            <th style="width: 40%;">Nama Lengkap</th>
            <th style="width: 36%;">Tanda Tangan</th>
        </tr>
        <tr>
            <td></td>
            <td style="height: 20mm; vertical-align: bottom;" class="c">{{ $cfg['ketua_lpjm'] }}</td>
            <td></td>
        </tr>
    </table>
</div>