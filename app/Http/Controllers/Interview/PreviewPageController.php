<?php
declare(strict_types=1);

namespace App\Http\Controllers\Interview;

use App\Files\curl_get;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PreviewPageController extends Controller
{
    use curl_get;

    public function create(int $profId): \Inertia\Response
    {

        $previewPageInfo = $this->getInformationForPreview($profId);
        if (!is_string($previewPageInfo)) {
            dd($previewPageInfo);//<-эту строчку убрать  расскоментировать нижнюю и указать путь к странице
            //                return Inertia::render('Auth/Register/register', ['technologies' => $technologies]);
        }
        //тут ничего не трогать
        dd($previewPageInfo);
//                return Inertia::render('Auth/Register/register', ['errorMessage'=>$spheres]);

    }

    public function getInformationForPreview($profId)
    {
        $previewPageInfo = $this->curlGet('interview/new/sphere/direction/technology/profession', "=$profId");
        if ($previewPageInfo[0] == 200) {
            return $previewPageInfo[1];
        }
        return $previewPageInfo[1]->message;
    }
}
