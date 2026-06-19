<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Article extends Model
{
    use HasFactory, HasSlug;

    protected $fillable = [
        'slug', 'title_en', 'title_id',
        'excerpt_en', 'excerpt_id',
        'content_en', 'content_id',
        'author', 'category', 'featured_image',
        'read_time_minutes', 'is_published', 'published_at',
    ];

    protected $casts = [
        'is_published' => 'boolean',
        'published_at' => 'datetime',
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

    public function getExcerpt(string $locale = 'en'): ?string
    {
        return $this->{"excerpt_{$locale}"} ?? $this->excerpt_en;
    }

    public function scopePublished($query)
    {
        return $query->where('is_published', true)
            ->whereNotNull('published_at')
            ->orderByDesc('published_at');
    }
}
