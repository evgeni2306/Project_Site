<?php

namespace App\Http\Controllers\Interview;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Files\curl_get;

class GetDirectionsController extends Controller
{
    use curl_get;

    public function create($id)
    {
        $directions = $this->getDirectionsForInterview($id);
        if (!is_string($directions)) {
            dd($directions);
            //                return Inertia::render('Auth/Register/register', ['spheres' => $spheres]);
        }
        dd($directions);
//                return Inertia::render('Auth/Register/register', ['errorMessage'=>$spheres]);

    }
    public function getDirectionsForInterview($id)
    {
        $directions = $this->curlGet('interview/new/sphere','=1');
        if ($directions[0] == 200) {
            foreach ($directions[1] as $direction) {
                $direction->url = "technology";
            }
            return $directions[1];
        }
        return $directions[1]->message;
    }
}
