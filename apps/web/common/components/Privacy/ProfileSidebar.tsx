"use client";
import {
  CircleUserRoundIcon,
  CreditCard,
  Globe,
  LockKeyhole,
  Mail,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const ProfileSidebar = () => {
  return (
    <div>
      {/* Main Sidebar Container */}
      <div className="w-72 h-screen">
        <div className="flex flex-col p-5 h-auto w-auto border-b justify-center items-left">
          {/* Profile Settings Sidebar */}
          <div className="flex items-center">
            <CircleUserRoundIcon size={40} strokeWidth={1.25} />
            <div className="pl-3">
              <div className="font-semibold">John Patrick Madrigal</div>
              <div className="text-gray-500">jp.madrigal.07@gmail.com</div>
            </div>
          </div>

          {/* Sidebar Buttons */}
          <div className="flex flex-col pt-4 items-left justify-center">
            <Link to="/Account">
              <button className="flex hover:bg-gray-100 mb-2 pl-2 items-center w-full  rounded h-10 active:font-semibold active:bg-gray-200">
                <CircleUserRoundIcon strokeWidth={1.25} />
                <div className="pl-2">Your account</div>
              </button>
            </Link>

            <button className="flex hover:bg-gray-100 mb-2 pl-2 w-full items-center rounded h-10 active:font-semibold active:bg-gray-200">
              <LockKeyhole strokeWidth={1.25} />
              <div className="pl-2">Login & security</div>
            </button>

            <button className="flex hover:bg-gray-100 mb-2 pl-2 items-center w-full rounded h-10 active:font-semibold active:bg-gray-200">
              <Mail strokeWidth={1.25} />
              <div className="pl-2">Message Preferences</div>
            </button>

            <Link to="/Privacy">
              <button className="flex hover:bg-gray-100 mb-2 pl-2 items-center  w-full rounded h-10 active:font-semibold active:bg-gray-200">
                <LockKeyhole strokeWidth={1.25} />
                <div className="pl-2">Privacy Settings</div>
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col p-5 border-b h-auto w-auto justify-center items-left">
          {/* Profile Settings Sidebar */}
          <div className="flex items-center">
            <CircleUserRoundIcon size={40} strokeWidth={1.25} />
            <div className="pl-3">
              <div className="font-semibold">Personal</div>
            </div>
          </div>

          {/* Sidebar Buttons */}
          <div className="flex flex-col pt-4 items-left justify-center">
            <Link to="/People">
              <button className="flex hover:bg-gray-100 mb-2 pl-2 items-center w-full  rounded h-10 active:font-semibold active:bg-gray-200">
                <Users strokeWidth={1.25} />
                <div className="pl-2">People</div>
              </button>
            </Link>

            <Link to="/Billing">
              <button className="flex hover:bg-gray-100 mb-2 pl-2 items-center rounded h-10 active:font-semibold active:bg-gray-200">
                <CreditCard strokeWidth={1.25} />
                <div className="pl-2">Billing & Plans</div>
              </button>
            </Link>
            <button className="flex hover:bg-gray-100 mb-2 pl-2 items-center rounded h-10 active:font-semibold active:bg-gray-200">
              <ShoppingCart strokeWidth={1.25} />
              <div className="pl-2">Purchase History</div>
            </button>
            <button className="flex hover:bg-gray-100 mb-2 pl-2 items-center rounded h-10 active:font-semibold active:bg-gray-200">
              <Globe strokeWidth={1.25} />
              <div className="pl-2">Domains</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileSidebar;
