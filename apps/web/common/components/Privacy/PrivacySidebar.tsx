import {
  CircleUserRoundIcon,
  Globe,
  LockKeyhole,
  Mail,
  ShoppingCart,
  Users,
  Wallet,
} from "lucide-react";

const PrivacySidebar = () => {
  return (
    <div>
      {/* Main Sidebar Container */}
      <div className="w-1/5 h-screen border-r-2 border-gray-200">
        <div className="flex flex-col p-5 h-auto w-auto border-2 justify-center items-left">
          {/* Profile Settings Sidebar */}
          <div className="flex items-center">
            <CircleUserRoundIcon size={50} strokeWidth={1.25} />
            <div className="pl-3">
              <div className="font-semibold">John Patrick Madrigal</div>
              <div className="text-gray-500">jp.madrigal.07@gmail.com</div>
            </div>
          </div>

          {/* Sidebar Buttons */}
          <div className="flex flex-col  pt-3 items-left justify-center">
            <button className="flex">
              <CircleUserRoundIcon strokeWidth={1.25} />
              <div className="pl-2 pb-3">Your account</div>
            </button>
            <button className="flex">
              <LockKeyhole strokeWidth={1.25} />
              <div className="pl-2 pb-3">Login & security</div>
            </button>
            <button className="flex">
              <Mail strokeWidth={1.25} />
              <div className="pl-2 pb-3">Message Preferences</div>
            </button>
            <button className="flex">
              <LockKeyhole strokeWidth={1.25} />
              <div className="pl-2 pb-3">Privacy Settings</div>
            </button>
          </div>
        </div>
        <div className="flex flex-col p-5 h-auto w-auto border-2 justify-center items-left">
          <div className="flex items-center">
            <CircleUserRoundIcon size={50} strokeWidth={1.25} />
            <div className="pl-3">
              <div className="font-semibold">Personal</div>
            </div>
          </div>

          {/* Sidebar Buttons */}
          <div className="flex flex-col  pt-3 items-left justify-center">
            <button className="flex">
              <Users strokeWidth={1.25} />
              <div className="pl-2 pb-3">People </div>
            </button>
            <button className="flex">
              <Wallet strokeWidth={1.25} />
              <div className="pl-2 pb-3">Billing Plans</div>
            </button>
            <button className="flex">
              <ShoppingCart strokeWidth={1.25} />
              <div className="pl-2 pb-3">Purchase History</div>
            </button>
            <button className="flex">
              <Globe strokeWidth={1.25} />
              <div className="pl-2 pb-3">Domains</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PrivacySidebar;
