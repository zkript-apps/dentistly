import { Button } from "@/common/components/shadcn/ui/button";
import { Input } from "@/common/components/shadcn/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/common/components/shadcn/ui/select";
import { ProjectCard } from "@/common/components/ui/header/project-card";
import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="flex gap-5 items-center  mb-6">
        <div className="flex items-center space-x-2 flex-grow ">
          <div className="relative flex-1 ">
            <Input
              placeholder="Search Repositories and Projects..."
              className="pl-8 pr-16"
            />
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
        </div>

        <div className="flex items-center space-x-4">
          <Select defaultValue="activity">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by activity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="activity">Sort by activity</SelectItem>
              <SelectItem value="name">Sort by name</SelectItem>
              <SelectItem value="updated">Sort by last updated</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex items-center gap-2 border rounded-md">
            <Button variant="ghost" size="icon" className="shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 3h12M2 8h12M2 13h12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </Button>
            <Button variant="ghost" size="icon" className="shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M12.667 2H3.333C2.597 2 2 2.597 2 3.333v9.334C2 13.403 2.597 14 3.333 14h9.334c.736 0 1.333-.597 1.333-1.333V3.333C14 2.597 13.403 2 12.667 2zM2 7h12M7 2v12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
          <Button>Add New...</Button>
        </div>
      </div>
      <div className="grid grid-cols-3  gap-4">
        <ProjectCard
          name="animepulse"
          url="animepulse-xi.vercel.app"
          repository="animepulse"
          repoOwner="CodeCarlz"
          lastCommit={{
            message: "change the overlay top position to 44",
            timestamp: "33d",
            branch: "main",
          }}
        />
        <ProjectCard
          name="code-carlz"
          url="code-carlz.vercel.app"
          repository="CodeCarlz"
          repoOwner="CodeCarlz"
          lastCommit={{
            message: "change projectUrl",
            timestamp: "39d",
            branch: "main",
          }}
        />
        <ProjectCard
          name="code-carlz1"
          url="code-carlz1.vercel.app"
          repository="CodeCarlz"
          repoOwner="CodeCarlz"
          lastCommit={{
            message: "change projectUrl",
            timestamp: "44d",
            branch: "main",
          }}
        />
        <ProjectCard
          name="animepulse-backend"
          url="animepulse-backend-mauve.vercel.app"
          repository="animepulse-backend"
          repoOwner="CodeCarlz"
          lastCommit={{
            message: "Initial commit Created from https://vercel.com/new",
            timestamp: "275d",
            branch: "main",
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
