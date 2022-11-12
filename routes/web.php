<?php

use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\AuthorizationController;
use App\Http\Controllers\Interview\GetSpheresController;
use App\Http\Controllers\Interview\GetDirectionsController;
use App\Http\Controllers\Interview\GetTechnologiesController;
use App\Http\Controllers\Interview\GetProfessionsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

session_start();
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

//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//});
Route::middleware('guest')->group(function () {

    Route::get('registration', [RegistrationController::class, 'create']);
    Route::post('registration', [RegistrationController::class, 'store'])->name('registration');

    Route::get('login', [AuthorizationController::class, 'create']);
    Route::post('login', [AuthorizationController::class, 'store'])->name('login');

});

Route::middleware('auth')->group(function () {

    Route::get('/interview/new', [GetSpheresController::class, 'create'])->name('interviewSphere');
    Route::get('/interview/new/sphere={idd}', [GetDirectionsController::class, 'create'])->name('interviewDirection');
    Route::get('interview/new/sphere/direction={idd}', [GetTechnologiesController::class, 'create'])->name('interviewTechnology');
    Route::get('interview/new/sphere/direction/technology={idd}', [GetProfessionsController::class, 'create'])->name('interviewProfession');

});

Route::get('/logout', function () {
    session_destroy();
    return redirect(\route('login'));
});
