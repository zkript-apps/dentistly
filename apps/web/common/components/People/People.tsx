"use client";
import { useState } from "react";

import {
  ChevronDown,
  LayoutGrid,
  List,
  Plus,
  SquareUser,
  UserCircle,
} from "lucide-react";
import Image from "next/image";

const People = () => {
  const [showListContent, setShowListContent] = useState(true);

  const handleListButtonClick = () => {
    setShowListContent(!showListContent);
  };
  return (
    <div className="flex justify-center w-full">
      <div className="w-1/2">
        <div className="flex h-10 items-center p-4">
          <div className="flex-1 font-semibold text-lg">People (1)</div>
          <button
            onClick={handleListButtonClick}
            className="hover:bg-gray-200 p-1 rounded"
          >
            {showListContent ? (
              <LayoutGrid size={20} strokeWidth={1.5} />
            ) : (
              <List size={20} strokeWidth={1.5} />
            )}
          </button>
        </div>
        <div className="main-container flex items-center bg-blue-100 p-4 rounded-lg ml-2 mr-2">
          <div className="flex-1">
            <div className="font-semibold text-lg p-2">
              Bring in the people you design with
            </div>
            <div className="text-sm p-2">
              Try <span className="font-medium">Canva for Teams</span>, it's
              free for 30 days!
            </div>
            <ul className="list-disc list-inside text-sm p-2">
              <li> Premium features for whole team</li>
              <li>
                Ideate, create, review, and publish - all from one platform
              </li>
              <li> Stay on brand across everyone's designs</li>
            </ul>
            <button className="w-36 h-10 ml-2 mt-2 rounded-md bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600">
              Create a team
            </button>
          </div>
          <div>
            <Image
              src="https://static.canva.com/web/images/4d67c87dcff26c10aacd422dbe0ac026.svg"
              alt="Canva"
              width={150}
              height={150}
            />
          </div>
        </div>

        {/* Disappear when list icon is clicked */}
        {showListContent ? (
          <div>
            {/* Your list content */}
            <div className="grid grid-cols-3 text-sm ml-2 pt-4 mb-4">
              <div className="col-span-1 font-medium">Name</div>
              <div className="col-span-1 font-medium">Email</div>
              <div className="col-span-1 font-medium">Team Role</div>
            </div>
            <div className="grid grid-cols-3 text-sm ml-2 h-14 border-t border-b border-gray-200 mb-4">
              <div className="flex col-span-1 items-center">
                <span className="pr-2">
                  <UserCircle />
                </span>
                Name
              </div>
              <div className="flex col-span-1 items-center">
                jp.madrigal07@gmail.com
              </div>
              <div className="flex items-center col-span-1">Owner</div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center ml-2 mr-2 w-44">
            <div>
              <SquareUser size={200} strokeWidth={1.25} />
            </div>
            <div className="font-medium">Name</div>
            <button className="flex w-24 items-center cursor-not-allowed text-left pt-2">
              <div className="flex-1 text-sm">Owner</div>
              <div>
                <ChevronDown size={15} />
              </div>
            </button>
          </div>
        )}

        <button className="flex items-center pt-2">
          <span className="hover:bg-gray-200 rounded-full p-2">
            <Plus />
          </span>
          <div className="font-medium text-sm">Invite people</div>
        </button>
      </div>
    </div>
  );
};

export default People;
