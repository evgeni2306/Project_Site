<?php
declare(strict_types=1);

namespace App\Http\Controllers\Interview;

use App\Files\curl_get;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class GetProfessionsController extends Controller
{
    use curl_get;

    public function create($id): \Inertia\Response
    {
        $professions = $this->getProfessionsForInterview($id);
        if (!is_string($professions)) {
            dd($professions);//<-эту строчку убрать  расскоментировать нижнюю и указать путь к странице
            //                return Inertia::render('Auth/Register/register', ['professions' => $professions]);
        }
        //тут ничего не трогать
        dd($professions);
//                return Inertia::render('Auth/Register/register', ['errorMessage'=>$spheres]);

    }

    public function getProfessionsForInterview($id)
    {
        $directions = $this->curlGet('interview/new/sphere/direction/technology', "=$id");
        if ($directions[0] == 200) {
            foreach ($directions[1] as $direction) {
                $direction->url = "пока что пусто";
            }
            return $directions[1];
        }
        return $directions[1]->message;
    }
}
