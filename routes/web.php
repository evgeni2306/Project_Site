<?php

use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\AuthorizationController;
use App\Http\Controllers\Interview\GetSpheresController;
use App\Http\Controllers\Interview\GetDirectionsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::middleware('guest')->group(function () {

    Route::get('register', [RegistrationController::class, 'create']);
    Route::post('register', [RegistrationController::class, 'store'])->name('register');

    Route::get('login', [AuthorizationController::class, 'create']);
    Route::post('login', [AuthorizationController::class, 'store'])->name('login');

});
Route::get('interview/new', [GetSpheresController::class, 'create'])->name('sphere');
Route::get('interview/new/sphere={idd}', [GetDirectionsController::class, 'create'])->name('direction');
//Route::get('interview/new/sphere/direction={idd}', [GetDirectionsController::class, 'create'])->name('technology');
//Route::get('interview/new/sphere/direction/technology={idd}', [GetDirectionsController::class, 'create'])->name('profession');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

