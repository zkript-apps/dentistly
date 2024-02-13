"use client";
import {
  Home,
  ChevronRight,
  CircleUserRound,
  Dot,
  UserRound,
  Sparkles,
  Folders,
  Grip,
  LayoutPanelLeftIcon,
  Crown,
  Trash2,
  Group,
  Building2,
} from "lucide-react";
import useIsSideNavOpen from "../helpers/useIsSideNavOpen";

const Sidebar = () => {
    
  const {isOpen} = useIsSideNavOpen()
  
  return (
    // main container
    <div className= {`bg-slate-100 h-screen  p-4 w-[17.5rem] relative z-40 ${!isOpen ? "hidden lg:block" : "block lg:hidden"}`}>
      <div className="w-full flex flex-col h-full box-border">
        {/* Profile section */}
        <div className="flex h-16 shrink-0 items-center">
          <div>
            <CircleUserRound size={35} strokeWidth={1} />
          </div>
          <div className="text-sm font-semibold p-2"> 
            Personal
            <div className="flex text-xs font-normal justify-center items-center">
              Free <Dot size={20} strokeWidth={2} /> <UserRound size={15} /> 1
            </div>
          </div>
        </div>
        <button className=" bg-gray-200 rounded items-center justify-center w-full flex p-2 mt-4 mb-4">
          <Crown color={"gold"} size={15} />
          <div className="ml-2 text-sm font-semibold">Try Canva Pro</div>
        </button>

        {/* Sidebar Menu */}
        <div className="flex pb-5">
          <div className="flex-none">
            <Home strokeWidth={1.25} />
          </div>
          <div className="flex-1 pl-4">Home</div>
          <div className="flex-none">
            <ChevronRight strokeWidth={1.25} />
          </div>
        </div>

        <div className="flex pb-5">
          <div className="flex-none">
            <Sparkles color={"blue"} strokeWidth={1.25} />
          </div>
          <div className="flex-1 pl-4 text-blue-700">Magic Studio</div>
          <div className="flex justify-center items-center flex-none border-1 bg-blue-700 text-white rounded text-xs h-5 w-8">
            New
          </div>
        </div>

        <div className="flex pb-5">
          <div className="flex-none">
            <Folders strokeWidth={1.25} />
          </div>
          <div className="flex-1 pl-4">Projects</div>
          <div className="flex-none">
            <ChevronRight strokeWidth={1.25} />
          </div>
        </div>

        <div className="flex pb-5">
          <div className="flex-none">
            <LayoutPanelLeftIcon strokeWidth={1.25} />
          </div>
          <div className="flex-1 pl-4">Templates</div>
          <div className="flex-none">
            <ChevronRight strokeWidth={1.25} />
          </div>
        </div>

        <div className="flex pb-5 flex-row items-center justify-center">
          <div className="flex-none">
            <Building2 strokeWidth={1.25} />
          </div>
          <div className="flex flex-1 pl-4 justify-start items-center">
            Brands
            <div className="rounded-full bg-yellow-300 p-1 ml-2">
              <Crown size={15} color="white" />
            </div>
          </div>
          <div className="flex">
            <ChevronRight strokeWidth={1.25} />
          </div>
        </div>

        <div className="flex pb-5">
          <div className="flex-none">
            <Grip strokeWidth={1.25} />
          </div>
          <div className="flex-1 pl-4">Apps</div>
          <div className="flex-none">
            <ChevronRight strokeWidth={1.25} />
          </div>
        </div>

        {/* Bottom Part Settings */}
        <div className="flex flex-col justify-end h-full w-full text-sm font-medium">
          <div className="flex pb-4 shadow-sm items-center">
            <Group strokeWidth={1.25} />
            <div className="pl-2">Create A Team</div>
          </div>
          <div className="flex pt-4 items-center">
            <Trash2 strokeWidth={1.25} />
            <div className="pl-2" aria-hidden="true">
              Trash
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Sidebar;
