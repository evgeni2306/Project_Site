<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Files\curl_post;

class AuthorizationController extends Controller
{
    use curl_post;

    public function create($errorMessage = null): \Inertia\Response
    {
        return Inertia::render('Auth/Login/login', ['errorMessage' => $errorMessage]);
    }

    public function store(Request $request): \Inertia\Response|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
    {
        $request->validate([
            'login' => 'required|string',
            'password' => 'required|string',
        ]);
        $url = 'login';
        $data = $this->curlPost($url, $request->all());
        if ($data[0] != 200) {
            return $this->create($errorMessage = $data[1]->message);
        }
        $_SESSION["auth"] = true;
        $_SESSION["authKey"] = $data[1]->key;
        return redirect(\route('interviewSphere'));
    }


}
