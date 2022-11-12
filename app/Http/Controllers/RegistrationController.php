<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Files\curl_post;

class RegistrationController extends Controller
{
    use curl_post;

    public function create($errorMessage = null): \Inertia\Response
    {
        return Inertia::render('Auth/Register/register', ['errorMessage' => $errorMessage]);
    }

    public function store(Request $request): \Inertia\Response
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'login' => 'required|string|max:255',
            'password' => 'required|string',
        ]);

        $url = 'registration';
        $data = $this->curlPost($url, $request->all());
        if ($data[0] != 200) {
            return $this->create($errorMessage = $data[1]->message);
        }
        $_SESSION["auth"] = true;
        $_SESSION["authKey"] = $data[1]->key;

    }
}
