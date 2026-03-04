<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Survey;

class SurveyController extends Controller
{
    public function index(Request $request) {

        $search = $request->input('search');

        // urutkan terbaru dan filter berdasarkan search query
        $Surveys = Survey::when($search, function ($query, $search) {
                return $query->where('jenis_survey', 'like', "%{$search}%")
                             ->orWhere('link', 'like', "%{$search}%")
                             ->orWhere('date', 'like', "%{$search}%");
            })
            ->orderBy('date', 'desc')
            ->paginate(10)
            ->withQueryString();

        return inertia('QualityAssurance/Survey', [
            'Surveys' => $Surveys,
            'filters' => $request->only('search')
        ]);
    }
}
