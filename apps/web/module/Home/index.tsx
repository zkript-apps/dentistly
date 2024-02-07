"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import google_logo from "@/common/assets/google-logo.png";
import Image from "next/image";
import { useForm } from "react-hook-form";

const ModuleHome = () => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <div className="mt-[4.3rem] pt-11 font-sans ">
        <label
          htmlFor="email"
          className="font-sans font-light text-[2.6rem] my-11 text-center block leading-6 text-gray-900"
        >
          Log in to your account
        </label>
        <label
          htmlFor="email"
          className=" mt-11 text-[15px] text-center block text-sm font-medium leading-6 text-gray-900"
        >
          Enter your work email address
        </label>
        <div className="flex mt-1 justify-center">
          <input
            {...register("email")}
            type="email"
            name="email"
            id="email"
            className="font-sans w-[22.7rem] h-10 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#66afe9] sm:text-sm sm:leading-6"
            placeholder="Example@company.com"
            required
          />
        </div>
        <div className="flex justify-center items-center font-sans">
          <button
            type="submit"
            className="items-center flex w-[22.7rem] h-[3rem] text-[1.2rem] font-light mt-4 justify-center rounded-md bg-[#0073ea] text-sm text-white shadow-sm hover:bg-[#0060b9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <p className="mx-3 text-[1.2rem] justify-center flex font-normal font-sans">
              Next
            </p>{" "}
            <ArrowRight className="h-5" />
          </button>
        </div>

        <div className="mt-3 inline-flex items-center justify-center w-full">
          <hr className="w-[33.5rem] h-px my-8 bg-gray-300 border-[1px] border-gray-300"></hr>
          <span className="absolute px-3 font-light text-gray-900 -translate-x-1/2 bg-white left-1/2 text-[1rem]">
            Or Sign in with
          </span>
        </div>

        <div className="mt-5 justify-center flex">
          <button
            type="button"
            className="items-center gap-x-2 justify-center flex rounded-md w-[7rem] h-11 bg-white px-2.5 py-5.5 text-sm  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <Image
              className="h-4 w-4"
              src={google_logo}
              width={500}
              height={500}
              alt="logo"
            />
            <p className="">Google</p>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ModuleHome;
