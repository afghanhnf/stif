<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Portfolio extends Model
{
    use HasFactory, HasSlug;

    protected $fillable = [
        'slug', 'title_en', 'title_id',
        'description_en', 'description_id',
        'content_en', 'content_id',
        'akad_type', 'sector', 'ticket_size',
        'return_rate', 'tenor', 'thumbnail',
        'is_published', 'order',
    ];

    protected $casts = [
        'is_published' => 'boolean',
    ];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title_en')
            ->saveSlugsTo('slug');
    }

    public function getTitle(string $locale = 'en'): string
    {
        return $this->{"title_{$locale}"} ?? $this->title_en;
    }

    public function getDescription(string $locale = 'en'): ?string
    {
        return $this->{"description_{$locale}"} ?? $this->description_en;
    }

    public function scopePublished($query)
    {
        return $query->where('is_published', true)->orderBy('order');
    }
}
