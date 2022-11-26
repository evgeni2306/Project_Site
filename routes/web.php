<?php

use App\Http\Controllers\Authentication\RegistrationController;
use App\Http\Controllers\Authentication\AuthorizationController;
use App\Http\Controllers\Interview\GetSpheresController;
use App\Http\Controllers\Interview\GetDirectionsController;
use App\Http\Controllers\Interview\AnswerTaskController;
use App\Http\Controllers\Interview\GetResultsController;
use App\Http\Controllers\Interview\InterviewTemplateController;
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

    Route::get('/interview/new', [GetSpheresController::class, 'createPage'])->name('interviewSphere');
    Route::get('/interview/new/sphere={idd}', [GetDirectionsController::class, 'createPage'])->name('interviewDirection');
    Route::get('interview/new/sphere/direction={idd}', [GetTechnologiesController::class, 'createPage'])->name('interviewTechnology');
    Route::get('interview/new/sphere/direction/technology={idd}', [GetProfessionsController::class, 'createPage'])->name('interviewProfession');
    Route::get('interview/new/sphere/direction/technology/profession={idd}', [PreviewPageController::class, 'createPage'])->name('interviewPreview');
    Route::get('interview/start={idd}', [InterviewStartController::class, 'startInterview'])->name('interviewStart');
    Route::get('interview/templates', [InterviewTemplateController::class, 'createPage'])->name('interviewTemplates');
    Route::get('interview/question', [GetNextQuestionController::class, 'createPage'])->name('interviewQuestion');
    Route::get('interview/question/answer={answer}', [AnswerTaskController::class,'answerTask'])->name('interviewAnswerTask');
    Route::get('/interview/results', [GetResultsController::class, 'create']);
});

Route::get('/logout', function () {
    session_destroy();
    return redirect(\route('login'));
});
