<?php
declare(strict_types=1);

namespace App\Http\Controllers\Interview;

use App\Files\curl_get;
use App\Files\UnderSpheresInterface;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class GetProfessionsController extends Controller implements UnderSpheresInterface
{
    use curl_get;

    public function createPage(int $id): \Inertia\Response
    {
        $professions = $this->getData($id);
        if (!is_string($professions)) {
            return Inertia::render('Interview/InterviewProfessions/interviewProfessions', ['professions' => $professions]);
        }
        //тут ничего не трогать
        dd('проблема с загрузкой профессий');
//                return Inertia::render('Auth/Register/register', ['errorMessage'=>$spheres]);

    }

    public function getData(int $id): string|array
    {
        $url = 'interview/new/sphere/direction/technology';
        $directions = $this->curlGet($url, "=$id");
        if ($directions[0] == 200) {
            foreach ($directions[1] as $direction) {
                $direction->url = "interviewPreview";
            }
            return $directions[1];
        }
        return $directions[1]->message;
    }
}
