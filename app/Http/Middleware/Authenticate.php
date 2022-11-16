<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Middleware;

class Authenticate extends  Middleware
{

    public function handle(Request $request, Closure $next)
    {
        if (!isset($_SESSION["auth"])) {
            return redirect(route('login'));
        }


        return $next($request);
    }
}
