<?php

declare(strict_types=1);

namespace App\Http\Controllers\Interview;

use App\Files\curl_post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Files\curl_get;

class GetResultsController extends Controller
{
    use curl_post;

    public function createPage()
    {
        $results = $this->getResults($_SESSION["authKey"]);
        if (!is_string($results)) {
            dd($results);//-<это удалить, нижнее раскоментить и указать путь
            // return Inertia::render('Interview/InterviewProfessions/interviewProfessions', ['results' => $results]);
        }
        dd('проблема с загрузкой результатов');
    }

    public function getResults(string $authKey): \stdClass|string
    {
        $url = 'interview/results';
        $array = ["authKey" => $authKey, "interviewId" => $_SESSION["interviewId"]];
        $getResults = $this->curlPost($url, $array);
        if ($getResults[0] == 200) {
            return $getResults[1];
        }
        return $getResults[1]->message;
    }
}
