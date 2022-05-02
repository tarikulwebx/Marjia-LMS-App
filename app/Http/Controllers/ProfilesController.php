<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\support\Str;

class ProfilesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $user = Auth::user();
        return view('profile.student-profile', compact('user'));
    }

    public function reviews()
    {
        $user = Auth::user();
        $reviews = $user->reviews()->orderBy('id', 'desc')->paginate(4);
        return view('profile.student-profile-reviews', compact('user', 'reviews'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit()
    {
        $user = Auth::user();
        return view('profile.student-profile-edit', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'photo' => 'mimes:png,jpg|max:300',
            'first_name'    => 'required|string|max:255',
            'last_name'    => 'required|string|max:255',
        ]);

        $inputs = $request->all();

        if ($photo_file = $request->file('photo')) {
            $name_rename = time() . '-' . Str::lower(str_replace(' ', '-', $photo_file->getClientOriginalName()));
            // Delete old photo if exists
            if($user->photo) {
                $old_photo = $user->photo;
                unlink(public_path() . '/images/profile/' . $old_photo);
            }
            // Upload photo
            $photo_file->move('images/profile', $name_rename);
            $inputs['photo'] =  $name_rename;
        }

        $user->update($inputs);
        session()->flash('user_action_msg', 'User Details Updated Successfully');
        return back();
    }


    // Reset Course reads
    public function reset_course_read($course_id) {
        $course = Course::findOrFail($course_id);

        $result = false;
        foreach ($course->lessons as $lesson) {
            foreach ($lesson->reads as $read) {
                if ($read['user_id'] == Auth::user()->id) {
                    $read->delete();
                    $result = true;
                }
            }
        }

        if ($result ==true) {
            return 1;
        } else {
            return 0;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


    public function delete(){
        $user = Auth::user();
        return view('profile.student-profile-delete', compact('user'));
    }


    public function delete_confirm() {
        $user = Auth::user();

        if($user->photo) {
            $photo = $user->photo;
            unlink(public_path() . '/images/profile/' . $photo);
        }
        $result = $user->delete();
        if ($result == true) {
            return 1;
        } else {
            return 0;
        }
    }
}
