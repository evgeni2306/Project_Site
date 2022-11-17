<?php
declare(strict_types=1);

namespace App\Http\Controllers\Interview;

use App\Files\curl_get;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class GetTechnologiesController extends Controller
{
    use curl_get;

    public function create($id): \Inertia\Response
    {
        $technologies = $this->getTechnologiesForInterview($id);
        if (!is_string($technologies)) {
            return Inertia::render('Interview/InterviewTechnologies/interviewTechnologies', ['technologies' => $technologies]);
        }
        //тут ничего не трогать
        dd('проблема с загрузкой технологий');
//                return Inertia::render('Auth/Register/register', ['errorMessage'=>$spheres]);

    }

    public function getTechnologiesForInterview($id): string|array
    {
        $url = 'interview/new/sphere/direction';
        $directions = $this->curlGet($url, "=$id");
        if ($directions[0] == 200) {
            foreach ($directions[1] as $direction) {
                $direction->url = "interviewProfession";
            }
            return $directions[1];
        }
        return $directions[1]->message;
    }
}
