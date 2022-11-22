<?php

declare(strict_types=1);

namespace App\Http\Controllers\Interview;

use App\Files\curl_post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class GetNextQuestionController extends Controller
{
    use curl_post;

    public function nextQuestion()
    {
        $question = $this->getNextQuestion($_SESSION["interviewId"], $_SESSION["authKey"]);
        if (!is_string($question)) {
            if ($question != null) {
                $_SESSION["taskId"]=$question->taskId;
                dd($question);//<-эту строчку убрать  расскоментировать нижнюю и указать путь к странице
                //                return Inertia::render('Auth/Register/register', ['question' => $question]);

            }
            dd('вопросы кончились');//тут будет переход на страницу с результатами
        }
        dd('problem');
    }

    public function getNextQuestion(int $interviewId, string $authKey): null|string|\stdClass
    {
        $array = ["authKey" => $authKey, "interviewId" => $interviewId];
        $url = "interview/question";
        $data = $this->curlPost($url, $array);
        if ($data[0] == 200) {
            return $data[1];
        }
        if ($data[0] == 204) {
            return null;
        }
        return 'problem';
    }
}
