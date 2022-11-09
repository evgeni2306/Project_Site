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
            return Inertia::render('Interview/InterviewSpheres/interviewSpheres', ['spheres' => $spheres]);
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
