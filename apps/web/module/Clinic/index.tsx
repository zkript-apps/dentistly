"use client";
import { Button } from "@/common/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/common/components/shadcn/ui/card";
import { Input } from "@/common/components/shadcn/ui/input";
import { Label } from "@/common/components/shadcn/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/common/components/shadcn/ui/select";
import { PlusCircleIcon } from "lucide-react";
import { useState } from "react";

export const Clinic = () => {
  const [scheduleCount, setScheduleCount] = useState(1);
  const handleAddScheduleCount = () => {
    setScheduleCount((prev) => prev + 1);
    console.log(scheduleCount);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="mx-auto max-w-xl">
        <CardHeader>
          <CardTitle className="text-xl">Add Clinic</CardTitle>
          <CardDescription>Enter your Clinic information</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" action="#" method="POST">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label id="clinicName">Clinic Name</Label>
                <Input id="clinicName" type="text" placeholder="" />
              </div>
              <div className="grid gap-2">
                <Label>Address</Label>
                <Input id="clinicAddress" type="text" placeholder="" />
              </div>

              
              <Label>Dayoff:</Label>

              {Array.from({ length: scheduleCount }).map((_, index) => (
                <div className="flex gap-2 items-center" key={index}>
                  <div>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Monday" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monday">Monday</SelectItem>
                        <SelectItem value="tuesday">Tuesday</SelectItem>
                        <SelectItem value="wednesday">Wednesday</SelectItem>
                        <SelectItem value="thursday">Thursday</SelectItem>
                        <SelectItem value="friday">Friday</SelectItem>
                        <SelectItem value="saturday">Saturday</SelectItem>
                        <SelectItem value="sunday">Sunday</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <div className="flex gap-1">
                      <Input
                        id="timeFrom"
                        type="text"
                        placeholder="From"
                        className="max-w-[80px]"
                        required
                      />
                      <Select>
                        <SelectTrigger className="w-[70px]">
                          <SelectValue placeholder="AM" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="am">AM</SelectItem>
                          <SelectItem value="pm">PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="flex gap-1">
                      <Input
                        id="timeFrom"
                        type="text"
                        placeholder="To"
                        className="max-w-[80px]"
                        required
                      />
                      <Select>
                        <SelectTrigger className="w-[70px]">
                          <SelectValue placeholder="PM" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="am">AM</SelectItem>
                          <SelectItem value="pm">PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <PlusCircleIcon
                    className="self-end cursor-pointer pb-2"
                    size={30}
                    onClick={handleAddScheduleCount}
                    type="button"
                  />
                </div>
              ))}
              <Button type="submit" className="w-full">
                Save
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Clinic;
