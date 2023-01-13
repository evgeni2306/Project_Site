<?php
declare(strict_types=1);

namespace App\Http\Controllers\KnowledgeBase;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Files\curl_post;

class GetQuestionsController extends Controller
{
    use curl_post;

    public function getQuestionsForKnowledgeBase(int $profId)
    {
        $questions = $this->getData($_SESSION["authKey"], $profId);
        if (!is_string($questions)) {
            return $questions;
        }
        dd('проблема с загрузкой списка профессий для базы знаний');
    }

    public function getData(string $authKey, int $profId)
    {

        $url = 'knowledgebase/professions/questions';
        $array = ["authKey" => $authKey, "profId" => $profId];
        $questions = $this->curlPost($url, $array);
        if ($questions[0] == 200) {

            return $questions[1];
        }
        return $questions[1]->message;
    }
}
