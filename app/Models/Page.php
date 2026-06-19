<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Page extends Model
{
    use HasFactory, HasSlug;

    protected $fillable = [
        'slug', 'title_en', 'title_id',
        'meta_description_en', 'meta_description_id',
        'hero_headline_en', 'hero_headline_id',
        'hero_subheadline_en', 'hero_subheadline_id',
        'content_en', 'content_id',
        'is_published',
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

    public function getContent(string $locale = 'en'): ?string
    {
        return $this->{"content_{$locale}"} ?? $this->content_en;
    }

    public function scopePublished($query)
    {
        return $query->where('is_published', true);
    }
}
