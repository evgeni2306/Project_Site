<?php
declare(strict_types=1);

namespace App\Http\Controllers\Interview;

use App\Files\curl_post;
use App\Http\Controllers\Controller;

class InterviewStartController extends Controller
{
    use curl_post;

    public function startInterview(int $profId): \Illuminate\Http\RedirectResponse
    {
//        dd(123);
        $interviewId = $this->createInterview($profId, $_SESSION["authKey"]);
        if (!is_string($interviewId)) {

            $_SESSION["professionId"] = $profId;
            $_SESSION["interviewId"] = $interviewId;
            return redirect(route('interviewQuestion'));
        }
        dd("проблема с interviewId");
    }

    public function createInterview(int $profId, string $authKey): int|string
    {
        $array = ["authKey" => $authKey, "profId" => $profId];
        $url = "interview/start";
        $data = $this->curlPost($url, $array);
        if ($data[0] == 200) {
            return $data[1]->interviewId;
        }
        return 'problem';
    }
}
