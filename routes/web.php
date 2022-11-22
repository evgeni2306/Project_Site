<?php

use App\Http\Controllers\Authentication\RegistrationController;
use App\Http\Controllers\Authentication\AuthorizationController;
use App\Http\Controllers\Interview\GetSpheresController;
use App\Http\Controllers\Interview\GetDirectionsController;
use App\Http\Controllers\Interview\AnswerTaskController;
use App\Http\Controllers\Interview\GetTechnologiesController;
use App\Http\Controllers\Interview\GetProfessionsController;
use App\Http\Controllers\Interview\PreviewPageController;
use App\Http\Controllers\Interview\InterviewStartController;
use App\Http\Controllers\Interview\GetNextQuestionController;
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
    Route::get('interview/new/sphere/direction/technology/profession={idd}', [PreviewPageController::class, 'create'])->name('interviewPreview');
    Route::get('interview/start={idd}', [InterviewStartController::class, 'startInterview'])->name('interviewStart');
    Route::get('interview/question', [GetNextQuestionController::class, 'nextQuestion'])->name('interviewQuestion');
    Route::get('interview/question/answer={answer}', [AnswerTaskController::class,'answerTask'])->name('interviewAnswerTask');
});

Route::get('/logout', function () {
    session_destroy();
    return redirect(\route('login'));
});
