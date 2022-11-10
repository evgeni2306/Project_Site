<?php
declare(strict_types=1);

namespace App\Http\Controllers\Interview;

use App\Files\curl_get;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class GetTechnologiesController extends Controller
{
    use curl_get;

    public function create($id):\Inertia\Response
    {
        $technologies = $this->getTechnologiesForInterview($id);
        if (!is_string($technologies)) {
            dd($technologies);//<-эту строчку убрать  расскоментировать нижнюю и указать путь к странице
            //                return Inertia::render('Auth/Register/register', ['technologies' => $technologies]);
        }
        //тут ничего не трогать
        dd($technologies);
//                return Inertia::render('Auth/Register/register', ['errorMessage'=>$spheres]);

    }
    public function getTechnologiesForInterview($id)
    {
        $directions = $this->curlGet('interview/new/sphere/direction',"=$id");
        if ($directions[0] == 200) {
            foreach ($directions[1] as $direction) {
                $direction->url = "interviewProfession";
            }
            return $directions[1];
        }
        return $directions[1]->message;
    }
}