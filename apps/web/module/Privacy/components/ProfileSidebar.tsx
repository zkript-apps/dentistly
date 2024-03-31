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
import { Button } from "../../../common/components/ui/Button";

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
          <div className="flex flex-col pt-4 w-full items-left">
            <Link to="/Account">
              <Button variant="primary" className="mb-2 pl-2">
                <CircleUserRoundIcon strokeWidth={1.25} />
                <div className="pl-2">Your account</div>
              </Button>
            </Link>

            <Button variant="primary" className="mb-2 pl-2">
              <LockKeyhole strokeWidth={1.25} />
              <div className="pl-2">Login & security</div>
            </Button>

            <Button variant="primary" className="mb-2 pl-2">
              <Mail strokeWidth={1.25} />
              <div className="pl-2">Message Preferences</div>
            </Button>

            <Link to="/Privacy">
              <Button variant="primary" className="mb-2 pl-2">
                <LockKeyhole strokeWidth={1.25} />

                <div className="pl-2">Privacy Settings</div>
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col p-5 border-b h-auto w-full justify-center items-left">
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
              <Button variant="primary" className="mb-2 pl-2">
                <Users strokeWidth={1.25} />
                <div className="pl-2">People</div>
              </Button>
            </Link>

            <Link to="/Billing">
              <Button variant="primary" className="mb-2 pl-2">
                <CreditCard strokeWidth={1.25} />
                <div className="pl-2">Billing & Plans</div>
              </Button>
            </Link>
            <Button variant="primary" className="mb-2 pl-2">
              <ShoppingCart strokeWidth={1.25} />
              <div className="pl-2">Purchase History</div>
            </Button>
            <Button variant="primary" className="mb-2 pl-2">
              <Globe strokeWidth={1.25} />
              <div className="pl-2">Domains</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileSidebar;
