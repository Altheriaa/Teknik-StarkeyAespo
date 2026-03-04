<?php

namespace App\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use App\Models\Visitor;
use App\Models\Berita;
use App\Models\Pengumuman;
use App\Models\DosenSipil;
use App\Models\DosenMesin;
use App\Models\DosenSi;
use App\Models\Dokumen;
use App\Models\Sop;
use App\Models\PengurusanSurat;

class StatsOverview extends BaseWidget
{
    protected static ?int $sort = 1;

    protected function getStats(): array
    {
        $totalVisitor = Visitor::count();
        $totalKonten = Berita::count() + Pengumuman::count();
        $totalDosen = DosenSipil::count() + DosenMesin::count() + DosenSi::count();
        $totalDokumen = Dokumen::count() + Sop::count() + PengurusanSurat::count();

        return [
            Stat::make('Total Pengunjung', $totalVisitor)
                ->description('Pengunjung website bulan ini')
                ->descriptionIcon('heroicon-m-users')
                ->color('success'),
                
            Stat::make('Total Konten', $totalKonten)
                ->description('Berita & Pengumuman dipublikasi')
                ->descriptionIcon('heroicon-m-document-text')
                ->color('primary'),
                
            Stat::make('Total Dosen Aktif', $totalDosen)
                ->description('Tersebar di 3 program studi')
                ->descriptionIcon('heroicon-m-academic-cap')
                ->color('warning'),
                
            Stat::make('Konten Unduhan', $totalDokumen)
                ->description('Dokumen, SOP, dan Surat')
                ->descriptionIcon('heroicon-m-arrow-down-tray')
                ->color('success'),
        ];
    }
}
