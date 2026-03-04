<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;
use App\Models\Visitor;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class VisitorChart extends ChartWidget
{
    protected static ?int $sort = 2;
    protected ?string $heading = 'Grafik Pengunjung Tahun Ini';

    protected function getData(): array
    {
        // Get visits grouped by month for the current year
        $visitors = Visitor::select(
            DB::raw('count(id) as counts'),
            DB::raw('MONTH(created_at) as month')
        )
        ->whereYear('created_at', date('Y'))
        ->groupBy('month')
        ->orderBy('month')
        ->get();

        $data = [];
        $labels = [];
        
        $monthNames = [
            1 => 'Jan', 2 => 'Feb', 3 => 'Mar', 4 => 'Apr', 5 => 'May', 6 => 'Jun',
            7 => 'Jul', 8 => 'Aug', 9 => 'Sep', 10 => 'Oct', 11 => 'Nov', 12 => 'Dec'
        ];

        // Initialize all months with 0
        for ($i = 1; $i <= 12; $i++) {
            $data[$i] = 0;
            $labels[] = $monthNames[$i];
        }

        // Populate actual data
        foreach ($visitors as $visitor) {
            $data[$visitor->month] = $visitor->counts;
        }

        return [
            'datasets' => [
                [
                    'label' => 'Total Pengunjung',
                    'data' => array_values($data),
                    'fill' => 'start',
                    'borderColor' => '#012d04',
                    'backgroundColor' => 'rgba(1, 45, 4, 0.1)',
                ],
            ],
            'labels' => $labels,
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}
