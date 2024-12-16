"use client";

import { Button } from "@/common/components/shadcn/ui/button";
import { Input } from "@/common/components/shadcn/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/common/components/shadcn/ui/select";
import { ClinicCard } from "@/module/Dashboard/components/clinic-card";
import Link from "next/link";
import React, { useState, useMemo } from "react";

interface Clinic {
  clinicName: string;
  address: string;
  dayOff: Array<{ day: string; timeRanges: string }>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

interface DashboardClientProps {
  initialClinics: Clinic[];
}

export function DashboardClient({ initialClinics }: DashboardClientProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClinics = useMemo(() => {
    return initialClinics.filter(
      (clinic) =>
        clinic.clinicName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        clinic.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [initialClinics, searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="flex gap-5 items-center mb-6">
        <div className="flex items-center space-x-2 flex-grow">
          <div className="relative flex-1">
            <Input
              placeholder="Search Clinic..."
              className="pl-8 pr-16"
              value={searchTerm}
              onChange={handleSearchChange}
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
          <Button asChild>
            <Link href="/dashboard/clinic/add">New Clinic</Link>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredClinics.map((clinic, index) => (
          <React.Fragment key={index}>
            <ClinicCard
              organizationName={clinic.clinicName}
              Address={clinic.address}
              dayOff={clinic.dayOff}
              createdAt={clinic.createdAt}
              updatedAt={clinic.updatedAt}
            />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
