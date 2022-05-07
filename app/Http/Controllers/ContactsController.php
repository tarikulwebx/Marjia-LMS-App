<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactsController extends Controller
{
    public function show_contact_page() {
        return view('contact_us');
    }

    // Store
    public function store_contact_message(Request $request) {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email',
            'message' => 'required',
        ]);

        $inputs = $request->all();
        $inputs['ip'] = $request->ip();

        Contact::create($inputs);
        session()->flash('contact_submit_msg', 'Your contact message submitted successfully. Website admin will read your message. Thank you ❤️');
        return redirect()->back();
    }
}
