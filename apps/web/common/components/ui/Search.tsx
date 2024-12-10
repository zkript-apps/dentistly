import React from "react";
import { Input } from "../shadcn/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/common/components/shadcn/ui/select";
import { Menu } from "lucide-react";

const Search = () => {
  return (
    <div className="grid grid-cols-[1fr_150px_150px] gap-1.5">
      <div className="relative flex-1 ">
        <Input placeholder="Filter..." className="pl-10 pr-16" />
        <svg
          className="absolute left-2.5 top-2.5 h-5 w-5 text-muted-foreground"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="All Team Roles" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="relative">
          <div className="absolute">
            <Menu size={15} />
          </div>
          <div className="pl-5">
            <SelectValue placeholder="Date" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Search;
