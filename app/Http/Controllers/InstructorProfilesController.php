<?php

namespace App\Http\Controllers;

use App\Models\Enrollment;
use App\Models\Review;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\support\Str;

class InstructorProfilesController extends Controller
{
    /**
     * Profile show
     */
    public function instructor_profile_show() {
        $user = Auth::user();
        $enrollmentsCount = Enrollment::count();
        $studentsCount = User::where('role_id', '2')->count();


        // Month wise student joined statistics
        $monthWiseJoinedStudentsCount = User::select(
            DB::raw("(COUNT(*)) as count"),
            DB::raw("MONTHNAME(created_at) as month")
        )
        ->whereYear('created_at', date('Y'))
        ->groupBy('month')
        ->get()
        ->toArray();

        $userJoinedData = [];
        foreach($monthWiseJoinedStudentsCount as $item) {
            $userJoinedData['label'][] = $item['month'];
            $userJoinedData['data'][] = $item['count'];
        }

        $userJoinedData = json_encode($userJoinedData);


        // Month wise student enroll statistics
        $monthWiseEnrollmentCount = Enrollment::select(
            DB::raw("(COUNT(*)) as count"),
            DB::raw("MONTHNAME(created_at) as month")
        )
        ->whereYear('created_at', date('Y'))
        ->groupBy('month')
        ->get()
        ->toArray();

        $enrollmentData = [];
        foreach($monthWiseEnrollmentCount as $item) {
            $enrollmentData['label'][] = $item['month'];
            $enrollmentData['data'][] = $item['count'];
        }
        $enrollmentData = json_encode($enrollmentData);

        return view('profile.instructor-profile', compact('user', 'enrollmentsCount', 'studentsCount', 'userJoinedData', 'enrollmentData'));
    }


    // Profile Edit
    public function instructor_profile_edit() {
        $user = Auth::user();
        $enrollmentsCount = Enrollment::count();
        $studentsCount = User::where('role_id', '2')->count();
        return view('profile.instructor-profile-edit', compact('user', 'enrollmentsCount', 'studentsCount'));
    }

    // Profile Update 
    public function instructor_profile_update(Request $request) {
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
        session()->flash('user_action_msg', 'Profile Updated');
        return back();
    }



    // Courses View
    public function instructor_profile_courses() {
        $user = Auth::user();
        $enrollmentsCount = Enrollment::count();
        $studentsCount = User::where('role_id', '2')->count();
        $courses = $user->courses()->paginate(8);

        return view('profile.instructor-profile-courses', compact('user', 'enrollmentsCount', 'studentsCount', 'courses'));
    }


    // Reviews view
    public function instructor_profile_reviews() {
        $user = Auth::user();
        $enrollmentsCount = Enrollment::count();
        $studentsCount = User::where('role_id', '2')->count();
        $reviews = Review::paginate(5);

        return view('profile.instructor-profile-reviews', compact('user', 'enrollmentsCount', 'studentsCount', 'reviews'));
    }


    // Delete Review
    public function delete_review(Request $request) {
        $review = Review::findOrFail($request->input('review_id'));

        $result = $review->delete();
        if ($result == true) {
            return 1;
        } else {
            return 0;
        }

        return 0;
    }

}
