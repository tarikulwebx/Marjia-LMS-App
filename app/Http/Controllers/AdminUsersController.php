<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdminUsersRequest;
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
        //
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
        //
        $roles = Role::pluck('name', 'id')->all();
        return view('admin.users.create', compact('roles'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AdminUsersRequest $request)
    {

        $inputs = $request->all();
        $inputs['password'] = bcrypt($request->password);

        if ($photo_file = $request->file('photo')) {
            $name_rename = time().str_replace('-', ' ', $photo_file->getClientOriginalName());
            $photo_file->move('images/profile', $name_rename);
            $inputs['photo'] = $name_rename;
        }


        $user = User::create($inputs);
        $user->roles()->attach($inputs['user_role']);
        session()->flash('user_action_msg', 'User "'.$inputs['first_name']. ' ' . $inputs['last_name'] .'" Created Successfully');
        return redirect()->route('users.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //

        $user = User::findOrFail($id);
        return view('admin.users.show', compact('user'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $user = User::findOrFail($id);
        $roles = Role::pluck('name', 'id')->all();
        return view('admin.users.edit', compact('user', 'roles'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $request->validate([
            'first_name'    => 'required|string|max:255',
            'last_name'     => 'required|string|max:255',
            'user_role'     => 'required',
            'is_active'     => 'required',
            'photo' => 'mimes:png,jpg',
        ]);

        $user = User::findOrFail($id);
        $inputs = $request->all();
        if ($photo_file = $request->file('photo')) {
            $name_rename = time().'-'.Str::lower(str_replace(' ', '-', $photo_file->getClientOriginalName()));
            // Delete old photo if exists
            if($user->photo) {
                $old_photo = $user->photo;
                unlink(public_path() . '/images/profile/' . $old_photo);
            }
            // Upload Photo
            $photo_file->move('images/profile', $name_rename);
            $inputs['photo'] = $name_rename;
        }
        $user->update($inputs);
        $user->roles()->sync($inputs['user_role']);
        session()->flash('user_action_msg', 'User Details Updated Successfully');
        return back();
    }

    /**
     * Update User Email & Password
     */
    public function updatePassword(Request $request, $id)
    {
        $request->validate([
            'password'  => 'required|min:8|required_with:password_confirmation|same:password_confirmation',
            'password_confirmation' => 'required|min:8',
        ]);

        $user = User::findOrFail($id);
        $inputs = $request->all();
        $inputs['password'] = bcrypt($inputs['password']);
        $user->update($inputs);
        session()->flash('user_action_msg', 'Password Updated Successfully');
        return back();
       
    }

    public function updateEmail(Request $request, $id)
    {
        $request->validate([
            'email' => 'required|string|email|max:255|unique:users',
        ]);
        $input = $request->all();
        $user = User::findOrFail($id);
        $user->update($input);
        session()->flash('user_action_msg', 'Email Changed Successfully');
        return back();
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
        $user = User::findOrFail($id);
        if($user->photo) {
            $photo = $user->photo;
            unlink(public_path() . '/images/profile/' . $photo);
        }
        $user->delete();
        session()->flash('user_action_msg', 'Account Deleted Successfully');
        return redirect()->route('users.index');
    }
}
