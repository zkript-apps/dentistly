"use client";
import { Settings, CircleUser, Menu, Bell } from "lucide-react";
import React from "react";
import useIsSideNavOpen from "../helpers/useIsSideNavOpen";

export default function UnauthHeader() {

  const {setIsOpen} = useIsSideNavOpen()
  
  return (
    <div>
    <header className="bg-white border border-b shadow-sm pt-1 pb-1 ">
      <nav
        className="mx-auto flex w-full m-0 items-center justify-between"
        aria-label="Global"
      >
        {/* left part */}
        <div className="flex pb-5 pt-5 pl-5 items-center">
          <button onClick={() => setIsOpen()}>
            <Menu strokeWidth={1.25} />
          </button>
          <div className="flex lg:flex-1 font-bold pl-5">
          <a href="#" className="">
            Dentistly
          </a>
        </div>
        </div>
      

        {/* right part */}
        <div className="flex justify-evenly w-auto items-center pr-5">
          <div className="settings p-2">
            <Settings strokeWidth={1.25} />
          </div>
          <div className="notif p-2">
            <Bell strokeWidth={1.25} />
          </div>
          <div className="outside-border ml-2 mr-2 border border-dotted p-0.25 rounded-md border-gray-700">
            <div className="create-btn  border-2 pb-2 pt-2 pl-3 pr-3 rounded-md bg-purple-600 text-white">
              Create Organization
            </div>
          </div>
          <div className="user-settings p-2">
            <CircleUser strokeWidth={1.25} />
          </div>
        </div>
      </nav>

    </header></div>
   
   
  );
}
