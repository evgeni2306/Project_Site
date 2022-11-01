<?php

namespace App\Http\Controllers\Interview;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class GetSpheresController extends Controller
{
    public function create()
    {
        $spheres = $this->getSpheresForInterview();
                return Inertia::render('Auth/Register/register', ['spheres' => $spheres]);
//        return Inertia::render('Auth/Register/register', ['spheres' => $spheres]);
        //Вместо  Auth/Register/register указать путь к странице
    }

    public function getSpheresForInterview()
    {
        return [new class {
            public $url;
            public $name;

            public function __construct()
            {
                $this->url = "direction";
                $this->id = "1";
                $this->name = 'Web';
            }
        }, new class {
            public $url;
            public $name;

            public function __construct()
            {
                $this->url = "direction";
                $this->id = "2";
                $this->name = 'Mobile';
            }
        }];

    }
}
