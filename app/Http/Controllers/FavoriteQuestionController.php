<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\Files\curl_post;

class FavoriteQuestionController extends Controller
{
    use curl_post;

    public function addFavorite(int $id)
    {
        $data = ["authKey" => $_SESSION["authKey"], "questionId" => $id];
        $url = 'question/favorite/add';
        $send = $this->sendRequest($url, $data);
        if (is_numeric($send)) {
            return $send;
        }
        dd('Что-то с сервером');
    }

    public function deleteFavorite(int $id)
    {
        $data = ["authKey" => $_SESSION["authKey"], "favoriteId" => $id];
        $url = 'question/favorite/delete';
        $send = $this->sendRequest($url, $data);
        if (is_numeric($send)) {
            return 1;
        }
        dd('Что-то с сервером');
    }

    public function sendRequest(string $url, array $data): int|string
    {
        $sendAnswer = $this->curlPost($url, $data);
        if ($sendAnswer[0] == 200) {
            return $sendAnswer[1];
        }
        return $sendAnswer[1]->message;
    }
}
