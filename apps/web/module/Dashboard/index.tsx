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

import { Switch } from "@/common/components/shadcn/ui/switch";
import { AlertCircle, Copy } from "lucide-react";

const Dashboard = () => {
  const clinics = [
    {
      clinicName: "Harmony Dental Center",
      address: "456 Smile Street, Los Angeles",
      dayOff: [
        { day: "Saturday", timeRanges: "09:00 AM - 05:00 PM" },
        { day: "Sunday", timeRanges: "Closed" },
      ],
      createdAt: new Date("2023-11-15T09:00:00Z"),
      updatedAt: new Date("2024-02-20T14:45:00Z"),
      deletedAt: null,
    },
    {
      clinicName: "Pinnacle Health Clinic",
      address: "789 Peak Road, Denver",
      dayOff: [{ day: "Sunday", timeRanges: "Closed" }],
      createdAt: new Date("2022-08-25T11:30:00Z"),
      updatedAt: new Date("2024-05-15T10:00:00Z"),
      deletedAt: null,
    },
    {
      clinicName: "Carewell Family Clinic",
      address: "321 Kindness Blvd, New York",
      dayOff: [{ day: "Friday", timeRanges: "10:00 AM - 03:00 PM" }],
      createdAt: new Date("2021-04-12T16:00:00Z"),
      updatedAt: new Date("2024-07-10T18:20:00Z"),
      deletedAt: null,
    },
    {
      clinicName: "Green Valley Clinic",
      address: "654 Forest Lane, Seattle",
      dayOff: [
        { day: "Sunday", timeRanges: "Closed" },
        { day: "Monday", timeRanges: "09:00 AM - 12:00 PM" },
      ],
      createdAt: new Date("2020-10-03T07:45:00Z"),
      updatedAt: new Date("2024-01-12T09:15:00Z"),
      deletedAt: new Date("2024-06-01T08:00:00Z"),
    },
    {
      clinicName: "Bright Eyes Vision Center",
      address: "987 Clarity Drive, Miami",
      dayOff: [{ day: "Saturday", timeRanges: "09:00 AM - 05:00 PM" }],
      createdAt: new Date("2019-03-18T13:00:00Z"),
      updatedAt: new Date("2024-09-05T12:30:00Z"),
      deletedAt: null,
    },
  ];

  return (
    <div className="p-6">
      <div className="flex gap-5 items-center  mb-6">
        <div className="flex items-center space-x-2 flex-grow ">
          <div className="relative flex-1 ">
            <Input placeholder="Search Clinic..." className="pl-8 pr-16" />
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
        {clinics.map((clinic, index) => (
          <React.Fragment key={index}>
            <ProjectCard
              organizationName={clinic.clinicName}
              Address={clinic.address}
              dayOff={clinic.dayOff}
              createdAt={clinic.createdAt}
              updatedAt={clinic.updatedAt}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
