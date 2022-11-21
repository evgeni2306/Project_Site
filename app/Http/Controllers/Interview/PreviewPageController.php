<?php
declare(strict_types=1);

namespace App\Http\Controllers\Interview;

use App\Files\curl_get;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class PreviewPageController extends Controller
{
    use curl_get;

    public function create(int $profId): \Inertia\Response
    {

        $previewPageInfo = $this->getInformationForPreview($profId);
        if (!is_string($previewPageInfo)) {
            return Inertia::render('Interview/InterviewPreview/interviewPreview', ['previewPageInfo' => $previewPageInfo]);
        }
        //тут ничего не трогать
        dd('проблема с preview');
//                return Inertia::render('Auth/Register/register', ['errorMessage'=>$spheres]);

    }

    public function getInformationForPreview($profId):string|\stdClass
    {
        $previewPageInfo = $this->curlGet('interview/new/sphere/direction/technology/profession', "=$profId");
        if ($previewPageInfo[0] == 200) {
            return $previewPageInfo[1];
        }
        return $previewPageInfo[1]->message;
    }
}
