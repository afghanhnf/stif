<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ContactSubmission extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'email', 'phone', 'company',
        'project_title', 'project_description',
        'sector', 'ticket_size_requested',
        'locale', 'status', 'admin_notes',
    ];

    protected $casts = [
        'created_at' => 'datetime',
    ];

    public function scopeNew($query)
    {
        return $query->where('status', 'new');
    }

    public function isNew(): bool
    {
        return $this->status === 'new';
    }
}
