<?php

declare(strict_types=1);

namespace App\Http\Controllers\Interview;

use App\Files\curl_post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class GetNextQuestionController extends Controller
{
    use curl_post;

    public function createPage(): \Inertia\Response|\Illuminate\Http\RedirectResponse
    {
        $question = $this->getNextQuestion($_SESSION["interviewId"], $_SESSION["authKey"]);
        if (!is_string($question)) {
            if ($question != null) {
                $question->profName=$_SESSION['profName'];
                dd($question);
                $_SESSION["taskId"] = $question->taskId;
                return Inertia::render('Interview/InterviewQuestion/interviewQuestion', ['question' => $question]);

            }
            return redirect(route('interviewResults'));
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
