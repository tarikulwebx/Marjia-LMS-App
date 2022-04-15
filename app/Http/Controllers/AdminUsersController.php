<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\support\Str;

class AdminUsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return view('admin.users.index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $roles = Role::pluck('name', 'id')->all();
        return view('admin.users.create', compact('roles'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'photo' => 'mimes:png,jpg',
            'first_name'    => 'required|string|max:255',
            'last_name'     => 'required|string|max:255',
            'email'         => 'required|string|email|max:255|unique:users',
            'password'      => 'required|string|min:8|max:255|required_with:password_confirmation|same:password_confirmation',
            'password_confirmation' => 'required|min:8',
            'role_id'     => 'required',
            'is_active'     => 'required',
        ]); 

        $inputs = $request->all();
        $inputs['password'] = bcrypt($inputs['password']);

        if ($photo_file = $request->file('photo')) {
            $name_rename = time() . '-' . Str::lower(str_replace(' ', '-', $photo_file->getClientOriginalName()));
            $photo_file->move('images/profile', $name_rename);
            $inputs['photo'] =  $name_rename;
        }

        User::create($inputs);
        session()->flash('user_action_msg', 'User "'.$inputs['first_name']. ' ' . $inputs['last_name'] .'" Created Successfully');
        return redirect()->route('users.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $user = User::findBySlugOrFail($slug);
        return view('admin.users.show', compact('user'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function edit($slug)
    {
        $user = User::findBySlugOrFail($slug);
        $roles = Role::pluck('name', 'id')->all();
        return view('admin.users.edit', compact('user', 'roles'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $slug)
    {
        $request->validate([
            'photo' => 'mimes:png,jpg',
            'first_name'    => 'required|string|max:255',
            'last_name'    => 'required|string|max:255',
            'role_id'     => 'required',
            'is_active'     => 'required',
        ]);

        $user = User::findBySlugOrFail($slug);
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


    /**
     * Update User Email & Password
     * @param Request $request
     * @param string $slug
     * @return Response
     */
    public function updatePassword(Request $request, $slug)
    {
        $request->validate([
            'password'  => 'required|min:8|required_with:password_confirmation|same:password_confirmation',
            'password_confirmation' => 'required|min:8',
        ]);
        $user = User::findBySlugOrFail($slug);
        $inputs = $request->all();
        $inputs['password'] = bcrypt($inputs['password']);
        $user->update($inputs);
        session()->flash('user_action_msg', 'Password Updated Successfully');
        return back();
    }

    public function updateEmail(Request $request, $slug)
    {
        $request->validate([
            'email' => 'required|string|email|max:255|unique:users',
        ]);
        $input = $request->all();
        $user = User::findBySlugOrFail($slug);
        $user->update($input);
        session()->flash('user_action_msg', 'Email Updated Successfully');
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $slug
     * @return \Illuminate\Http\Response
     */
    public function destroy($slug)
    {
        $user = User::findBySlugOrFail($slug);
        if($user->photo) {
            $photo = $user->photo;
            unlink(public_path() . '/images/profile/' . $photo);
        }
        $user->delete();
        session()->flash('user_action_msg', 'Account Deleted Successfully');
        return redirect()->route('users.index');
    }
}
