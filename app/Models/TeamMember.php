<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TeamMember extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'title_en', 'title_id',
        'bio_en', 'bio_id',
        'photo', 'linkedin_url',
        'order', 'is_published',
    ];

    protected $casts = [
        'is_published' => 'boolean',
    ];

    public function getTitle(string $locale = 'en'): string
    {
        return $this->{"title_{$locale}"} ?? $this->title_en;
    }

    public function getBio(string $locale = 'en'): ?string
    {
        return $this->{"bio_{$locale}"} ?? $this->bio_en;
    }

    public function scopePublished($query)
    {
        return $query->where('is_published', true)->orderBy('order');
    }
}
