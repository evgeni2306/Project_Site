<?php

namespace App\Http\Controllers\Interview;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
class GetDirectionsController extends Controller
{
    public function create($id){
        dd("Вы отправили id - ".$id);
    }
//    public function getDirectionsForInterview($id)
//    {
//
//    }
}
