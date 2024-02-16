/* eslint-disable @next/next/no-img-element */
"use client";

import useAddUser from "@/common/hooks/User/useAddUser";
import { IUser } from "@/common/types";
import { useForm } from "react-hook-form";

export default function Register() {
  const { register, handleSubmit, watch } = useForm<any>();
              
const { mutate } = useAddUser();
const onSubmit = async (data: IUser) => {
  const newUser = {
    clinicId: data.clinicId,
    username: data.username,
    email: data.email,
    password: data.password,
    role: data.role,
  };

  try {
    await mutate(newUser);
  } catch (error) {
    console.error('Error adding user:', error);
  }
};

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-8 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <form
               onSubmit={handleSubmit(onSubmit)}         

            className="space-y-4"
            action="#"
            method="POST"
          >
            <div>
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                  className="mx-auto h-10 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=500"
                  alt="Your Company"
                />
                <h2 className="mt-5 mb-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Create Account
                </h2>
              </div>

              <label
                htmlFor="clinic"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Clinic
              </label>
              <div className="mt-1">
                <input
                  {...register("clinicId")}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
           
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  {...register("email")}
                  type="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  {...register("username")}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
              </div>
              <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
              Role
              </label>
              <div className="mt-1">
              <select 
                {...register("role",{required:true})} 
                name="role"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6">
             
              <option value="First" label="Test1"></option>
              <option value="Second" label="Test2"></option>
              </select>
              </div>
              </div>
                <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  {...register("password")}
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  {...register("confirmPassword", {
                    required: true,
                    validate: (val: string) => {
                      if (watch("password") != val) {
                        return "The password confirmation does not match";
                      }
                    },
                  })}
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex items-center justify-between"></div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>

        <p className="mt-9 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-blue-500 hover:text-blue-400"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
