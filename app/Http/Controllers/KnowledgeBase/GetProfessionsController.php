<?php
declare(strict_types=1);

namespace App\Http\Controllers\KnowledgeBase;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Files\curl_post;
use Inertia\Inertia;

class GetProfessionsController extends Controller
{
    use curl_post;

    public function getProfessionsForKnowledgeBase(): \Inertia\Response
    {
        $professions = $this->getData($_SESSION["authKey"]);
        if (!is_string($professions)) {
            dd($professions);//<- это убрать, нижнее раскоментить и указать путь
            //return Inertia::render('Interview/InterviewGetResults/interviewGetResults', ['professions' => $professions]);
        }
        dd('проблема с загрузкой списка профессий для базы знаний');
    }

    public function getData(string $authKey): array|string
    {

        $url = 'knowledgebase/professions';
        $array = ["authKey" => $authKey];
        $professions = $this->curlPost($url, $array);
        if ($professions[0] == 200) {

            return $professions[1];
        }
        return $professions[1]->message;
    }
}
