<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;

class TrafficChart extends ChartWidget
{
    protected ?string $heading = 'Website Traffic (Mock - Last 7 Days)';
    protected static ?int $sort = 3;

    protected function getData(): array
    {
        $data = [];
        $labels = [];

        for ($i = 6; $i >= 0; $i--) {
            $date = \Carbon\Carbon::now()->subDays($i);
            $labels[] = $date->format('D'); // Mon, Tue, etc
            $data[] = \App\Models\PageVisit::whereDate('created_at', $date->toDateString())->count();
        }

        return [
            'datasets' => [
                [
                    'label' => 'Page Views',
                    'data' => $data,
                    'borderColor' => '#4F5331',
                    'backgroundColor' => 'rgba(79, 83, 49, 0.15)',
                    'fill' => true,
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
