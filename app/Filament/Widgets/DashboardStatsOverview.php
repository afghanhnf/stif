<?php

namespace App\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use App\Models\ContactSubmission;
use App\Models\Article;
use App\Models\Portfolio;

class DashboardStatsOverview extends BaseWidget
{
    protected static ?int $sort = 1;

    protected function getStats(): array
    {
        $currentVisits = \App\Models\PageVisit::where('created_at', '>=', \Carbon\Carbon::now()->subDays(30))->count();
        $previousVisits = \App\Models\PageVisit::whereBetween('created_at', [\Carbon\Carbon::now()->subDays(60), \Carbon\Carbon::now()->subDays(30)])->count();
        
        $increase = 0;
        if ($previousVisits > 0) {
            $increase = round((($currentVisits - $previousVisits) / $previousVisits) * 100);
        } else if ($currentVisits > 0) {
            $increase = 100;
        }

        $trendDesc = $increase >= 0 ? "{$increase}% increase" : abs($increase) . "% decrease";
        $trendIcon = $increase >= 0 ? 'heroicon-m-arrow-trending-up' : 'heroicon-m-arrow-trending-down';
        $trendColor = $increase >= 0 ? 'success' : 'danger';

        // Get 7-day sparkline
        $sparkline = [];
        for ($i = 6; $i >= 0; $i--) {
            $sparkline[] = \App\Models\PageVisit::whereDate('created_at', \Carbon\Carbon::now()->subDays($i)->toDateString())->count();
        }

        return [
            Stat::make('Website Traffic (30 Days)', number_format($currentVisits))
                ->description($trendDesc . ' from last month')
                ->descriptionIcon($trendIcon)
                ->color($trendColor)
                ->chart($sparkline),
            Stat::make('Newsletter Subscribers', \App\Models\NewsletterSubscriber::count())
                ->description('Active subscriptions')
                ->descriptionIcon('heroicon-m-users'),
            Stat::make('Total Inquiries', ContactSubmission::count() + \App\Models\ContactMessage::count())
                ->description('Project Submissions & Messages')
                ->descriptionIcon('heroicon-m-envelope'),
        ];
    }
}
