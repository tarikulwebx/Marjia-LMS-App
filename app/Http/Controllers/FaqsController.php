<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use Illuminate\Http\Request;

class FaqsController extends Controller
{
    public function all_faqs() {
        $faqs = Faq::paginate(12);
        return view('faqs',compact('faqs'));
    }
}
