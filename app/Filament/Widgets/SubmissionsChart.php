<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;
use App\Models\ContactSubmission;
use Carbon\Carbon;

class SubmissionsChart extends ChartWidget
{
    protected ?string $heading = 'Contact Submissions (Last 6 Months)';
    protected static ?int $sort = 2;

    protected function getData(): array
    {
        $data = [];
        $months = [];

        for ($i = 5; $i >= 0; $i--) {
            $date = Carbon::now()->subMonths($i);
            $months[] = $date->format('M');
            $data[] = ContactSubmission::whereMonth('created_at', $date->month)
                ->whereYear('created_at', $date->year)
                ->count();
        }

        return [
            'datasets' => [
                [
                    'label' => 'Submissions',
                    'data' => $data,
                    'backgroundColor' => '#6B6D0F',
                ],
            ],
            'labels' => $months,
        ];
    }

    protected function getType(): string
    {
        return 'bar';
    }
}
