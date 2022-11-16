<?php
declare(strict_types=1);
namespace App\Http\Controllers\Interview;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Files\curl_get;

class GetDirectionsController extends Controller
{
    use curl_get;

    public function create($id):\Inertia\Response
    {
        $directions = $this->getDirectionsForInterview($id);
        if (!is_string($directions)) {
            return Inertia::render('Interview/InterviewDirections/interviewDirections', ['directions' => $directions]);
        }
        //тут ничего не трогать
        dd($directions);
//                return Inertia::render('Auth/Register/register', ['errorMessage'=>$spheres]);

    }
    public function getDirectionsForInterview($id)
    {
        $directions = $this->curlGet('interview/new/sphere',"=$id");
        if ($directions[0] == 200) {
            foreach ($directions[1] as $direction) {
                $direction->url = "interviewTechnology";
            }
            return $directions[1];
        }
        return $directions[1]->message;
    }
}
