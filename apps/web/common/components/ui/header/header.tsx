import { ChevronDown, Bell, Menu } from "lucide-react";
import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../shadcn/ui/select";
import { Button } from "../../shadcn/ui/button";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

export function Header() {
  return (
    <header className="flex h-14 items-center justify-between  px-4 md:px-6">
      <div className="flex items-center space-x-4">
        <Link href="/" className="hidden items-center space-x-4 md:flex">
          <div className="h-5 w-5">
            <svg height="20" viewBox="0 0 76 65" fill="none">
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="black" />
            </svg>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="h-5 w-5 rounded-full bg-[#7C3AED]" />
            {/* <Select defaultValue="carlzbackup">
              <SelectTrigger className="h-auto w-auto border-0 bg-transparent p-0 text-sm font-normal hover:bg-transparent [&>span]:flex [&>span]:items-center [&>span]:space-x-2">
                <SelectValue>
                  <span className="line-clamp-1">CarlzBackup's projects</span>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="carlzbackup">
                  CarlzBackup's projects
                </SelectItem>
              </SelectContent>
            </Select> */}
            <span className="line-clamp-1">CarlzBackup's projects</span>
          </div>
          <div className="hidden items-center space-x-2 md:flex">
            <span className="rounded-full  bg-neutral-200 px-2 py-0.5 text-xs">
              Hobby
            </span>
            <div className="px-1 py-2 hover:bg-neutral-100 rounded-md cursor-pointer">
              <ChevronUpDownIcon className="h-4 w-4 text-neutral-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <nav className="hidden items-center space-x-4 md:flex ">
          <Button
            variant="ghost"
            size="sm"
            className="text-sm font-normal border hover:bg-neutral-100"
          >
            Feedback
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-sm font-normal hover:bg-neutral-100"
          >
            Changelog
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-sm font-normal hover:bg-neutral-100"
          >
            Help
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-sm font-normal hover:bg-neutral-100"
          >
            Docs
          </Button>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative border h-8 w-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-neutral-100">
            <Bell className="h-5 w-5" />
            <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-blue-600" />
          </div>

          <div className="hidden h-8 w-8 rounded-full bg-[#7C3AED] md:block cursor-pointer" />
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
