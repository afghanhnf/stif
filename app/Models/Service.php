<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Service extends Model
{
    use HasFactory, HasSlug;

    protected $fillable = [
        'slug', 'name_en', 'name_id',
        'subtitle_en', 'subtitle_id',
        'description_en', 'description_id',
        'content_en', 'content_id',
        'icon', 'order', 'is_published',
    ];

    protected $casts = [
        'is_published' => 'boolean',
    ];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name_en')
            ->saveSlugsTo('slug');
    }

    public function getName(string $locale = 'en'): string
    {
        return $this->{"name_{$locale}"} ?? $this->name_en;
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
