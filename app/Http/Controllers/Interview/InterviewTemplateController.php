<?php

declare(strict_types=1);

namespace App\Http\Controllers\Interview;

use App\Files\curl_post;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class InterviewTemplateController extends Controller
{
    use curl_post;

    public function createPage(): \Inertia\Response
    {
        $templates = $this->getData($_SESSION["authKey"]);
        if (!is_string($templates)) {
            return Inertia::render('Interview/InterviewTemplate/interviewTemplate', ['templates' => $templates]);
        }
        dd('Проблема с получением шаблонов');
    }

    public function getData(string $authKey)
    {
        $url = 'interview/templates';
        $array = ["authKey" => $authKey];
        $templates = $this->curlPost($url, $array);
        if ($templates[0] == 200) {
            foreach ($templates[1] as $template) {
                $template->url = "interviewPreview";
            }
            return $templates[1];
        }
        return $templates[1]->message;
    }
}
