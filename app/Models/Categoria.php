<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre',
        'slug',
        'descripcion',

    ];
    protected $guarded = [];
    public $timestamps = false;

    public function empresas()
    {
        return $this->hasMany(Empresa::class);
    }
}
