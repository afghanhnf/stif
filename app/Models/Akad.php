<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Akad extends Model
{
    use HasFactory, HasSlug;

    protected $fillable = [
        'number', 'slug', 'arabic_name', 'latin_name',
        'name_en', 'name_id',
        'subtitle_en', 'subtitle_id',
        'definition_en', 'definition_id',
        'jurisprudence_en', 'jurisprudence_id',
        'scheme_en', 'scheme_id',
        'example_en', 'example_id',
        'sponsor_benefits_en', 'sponsor_benefits_id',
        'is_published', 'order',
    ];

    protected $casts = [
        'is_published' => 'boolean',
        'number' => 'integer',
    ];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('latin_name')
            ->saveSlugsTo('slug');
    }

    public function getName(string $locale = 'en'): string
    {
        return $this->{"name_{$locale}"} ?? $this->name_en;
    }

    public function getDefinition(string $locale = 'en'): ?string
    {
        return $this->{"definition_{$locale}"} ?? $this->definition_en;
    }

    public function getExample(string $locale = 'en'): ?string
    {
        return $this->{"example_{$locale}"} ?? $this->example_en;
    }

    public function scopePublished($query)
    {
        return $query->where('is_published', true)->orderBy('number');
    }
}
