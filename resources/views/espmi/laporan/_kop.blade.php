<table class="kop">
    <tr>
        <td style="width: 24mm; text-align: left;">
            @if (!empty($logo) && file_exists($logo))
                <img src="{{ $logo }}" style="height: 21mm;" alt="Logo">
            @endif
        </td>
        <td class="c">
            <div class="judul">
                {{ $judul }}<br>
                {{ $siklusJudul }}<br>
                {{ $cfg['lembaga'] }}<br>
                {{ $cfg['universitas'] }}
            </div>
            <div class="alamat">{{ $cfg['alamat'] }}</div>
        </td>
        <td style="width: 24mm;"></td>
    </tr>
</table>
<div class="garis"></div>
<div class="program">{{ $cfg['program_kerja'] }}</div>