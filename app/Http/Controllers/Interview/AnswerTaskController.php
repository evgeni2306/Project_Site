<?php
declare(strict_types=1);

namespace App\Http\Controllers\Interview;

use App\Files\curl_post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Files\curl_get;

class AnswerTaskController extends Controller
{
    use curl_post;

    public function answerTask(string $answer): string
    {
        if ($answer != "true" and $answer != "false") {
            dd("ответ неккоретный");
//            return redirect(route('interviewQuestion'));
        }
        $x = $this->sendAnswer($answer);
        if (is_numeric($x)) {
            return "ok";
        }
        dd('Что-то с сервером');
//        return redirect(route('interviewQuestion'));
    }

    public function sendAnswer(string $answer): int|string
    {
        $url = 'interview/question/answer';
        $array = ["authKey" => $_SESSION["authKey"], "taskId" => $_SESSION["taskId"], "answer" => filter_var($answer, FILTER_VALIDATE_BOOLEAN)];
        $sendAnswer = $this->curlPost($url, $array);
        if ($sendAnswer[0] == 200) {
            return $sendAnswer[1];
        }
        return $sendAnswer[1]->message;
    }
}
