<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Course;
use App\Models\Enrollment;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class AdminDashboardController extends Controller
{
    /**
     * Show the Admin Dashboard
     */
    public function index()
    {
        $total_courses = Course::count();
        $total_users = User::count();
        $total_enrolls = Enrollment::count();
        $unread_contact_count = Contact::where('read', '=', '0')->count();

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
        foreach ($monthWiseJoinedStudentsCount as $item) {
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
        foreach ($monthWiseEnrollmentCount as $item) {
            $enrollmentData['label'][] = $item['month'];
            $enrollmentData['data'][] = $item['count'];
        }
        $enrollmentData = json_encode($enrollmentData);

        return view('admin.index', compact('total_courses', 'total_users', 'total_enrolls', 'unread_contact_count','userJoinedData', 'enrollmentData'));
    }
}
