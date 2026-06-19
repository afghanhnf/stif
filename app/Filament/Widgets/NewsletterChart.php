<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;
use App\Models\NewsletterSubscriber;
use Carbon\Carbon;

class NewsletterChart extends ChartWidget
{
    protected ?string $heading = 'Newsletter Subscribers (Last 6 Months)';
    protected static ?int $sort = 5;

    protected function getData(): array
    {
        $data = [];
        $months = [];

        for ($i = 5; $i >= 0; $i--) {
            $date = Carbon::now()->subMonths($i);
            $months[] = $date->format('M');
            $data[] = NewsletterSubscriber::whereMonth('created_at', $date->month)
                ->whereYear('created_at', $date->year)
                ->count();
        }

        return [
            'datasets' => [
                [
                    'label' => 'New Subscribers',
                    'data' => $data,
                    'backgroundColor' => '#8D9F63',
                    'borderColor' => '#4F5331',
                    'fill' => false,
                ],
            ],
            'labels' => $months,
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}
