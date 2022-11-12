<?php
declare(strict_types=1);

namespace App\Http\Controllers\Interview;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Files\curl_get;

class GetSpheresController extends Controller
{
    use curl_get;

    public function create(): \Inertia\Response
    {
//        if (!isset($_SESSION["auth"])) {
//            return redirect(route('login'));
//        }
        $spheres = $this->getSpheresForInterview();
        if (!is_string($spheres)) {
            return Inertia::render('Interview/InterviewSpheres/interviewSpheres', ['spheres' => $spheres]);
        }
        //тут ничего не трогать
        dd('Ошибка, что-то поломалось(пока на это не обращать внимание)');
//                return Inertia::render('Auth/Register/register', ['errorMessage'=>$spheres]);

    }

    public function getSpheresForInterview(): array|string
    {
        $spheres = $this->curlGet('interview/new');
        if ($spheres[0] == 200) {
            foreach ($spheres[1] as $sphere) {
                $sphere->url = "interviewDirection";
            }
            return $spheres[1];
        }
        return $spheres[1]->message;

    }
}
