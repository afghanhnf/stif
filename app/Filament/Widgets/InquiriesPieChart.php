<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;
use App\Models\ContactSubmission;
use App\Models\ContactMessage;
use App\Models\NewsletterSubscriber;

class InquiriesPieChart extends ChartWidget
{
    protected ?string $heading = 'Inquiries & Subscriptions Breakdown';
    protected static ?int $sort = 4;

    protected function getData(): array
    {
        return [
            'datasets' => [
                [
                    'label' => 'Count',
                    'data' => [
                        ContactSubmission::count(),
                        ContactMessage::count(),
                        NewsletterSubscriber::count(),
                    ],
                    'backgroundColor' => [
                        '#4F5331', // Dark Olive
                        '#7B8F47', // Light Olive
                        '#D3DEAB', // Pale Green
                    ],
                ],
            ],
            'labels' => ['Project Submissions', 'Contact Messages', 'Newsletter Subs'],
        ];
    }

    protected function getType(): string
    {
        return 'doughnut';
    }
}
