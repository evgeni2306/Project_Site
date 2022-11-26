<?php
declare(strict_types=1);

namespace App\Http\Controllers\Interview;

use App\Files\UnderSpheresInterface;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Files\curl_get;

class GetDirectionsController extends Controller implements UnderSpheresInterface
{
    use curl_get;

    public function createPage(int $id): \Inertia\Response
    {
        $directions = $this->getData($id);
        if (!is_string($directions)) {
            return Inertia::render('Interview/InterviewDirections/interviewDirections', ['directions' => $directions]);
        }
        //тут ничего не трогать
        dd('проблема с загрузкой направлений');
//                return Inertia::render('Auth/Register/register', ['errorMessage'=>$spheres]);

    }

    public function getData(int $id): string|array
    {
        $directions = $this->curlGet('interview/new/sphere', "=$id");
        if ($directions[0] == 200) {
            foreach ($directions[1] as $direction) {
                $direction->url = "interviewTechnology";
            }
            return $directions[1];
        }
        return $directions[1]->message;
    }
}
