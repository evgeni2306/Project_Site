<?php

namespace App\Http\Controllers\Interview;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Files\curl_get;

class GetSpheresController extends Controller
{
    use curl_get;

    public function create(): \Inertia\Response
    {
        $spheres = $this->getSpheresForInterview();
        if (!is_string($spheres)) {
            dd($spheres);
            //                return Inertia::render('Auth/Register/register', ['spheres' => $spheres]);
        }
        dd($spheres);
//                return Inertia::render('Auth/Register/register', ['errorMessage'=>$spheres]);

    }

    public function getSpheresForInterview(): array|string
    {
        $spheres = $this->curlGet('interview/new');
        if ($spheres[0] == 200) {
            foreach ($spheres[1] as $sphere) {
                $sphere->url = "direction";
            }
            return $spheres[1];
        }
        return $spheres[1]->message;

    }
}
