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
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { addClinic } from "@/common/libs/auth/addclinic";
import { toast } from "sonner";

import { off } from "process";
import { supabase } from "@/common/libs/supabase-client";
import { T_ClinicRegister, Z_dayOffs } from "@repo/contract";

type Dayoff = {
  day: string;
  fromTime: string;
  toTime: string;
  [key: string]: string; // Index signature for dynamic access
};

export const AddClinic = () => {
  const [dayoffs, setDayoffs] = useState<Dayoff[]>([
    {
      day: "Monday",
      fromTime: "",
      toTime: "",
    },
  ]);
  const handleAddScheduleCount = () => {
    const addData = {
      day: "Monday",
      fromTime: "",
      toTime: "",
    };
    setDayoffs((prev) => [...prev, addData]);
  };

  const handleMinusScheduleCount = () => {
    setDayoffs((prev) => prev.slice(0, -1));
  };

  const handleDayoffUpdate = (
    index: number,
    field: keyof Dayoff,
    value: string,
    period?: string
  ) => {
    setDayoffs((prev) => {
      const newDayoffs = [...prev];
      const dayoff = newDayoffs[index];
      if (dayoff) {
        if (field === "fromTime" || field === "toTime") {
          dayoff[field] = value ? `${value} ${period}` : "";
        } else {
          dayoff[field] = value;
        }
      }
      return newDayoffs;
    });
  };

  const onSubmit = async (data: T_ClinicRegister) => {
    try {
      const organizationId = 86;

      const validatedDayoffs = Z_dayOffs.array().parse(dayoffs);
      const response = await addClinic(
        organizationId,
        data.clinicName.toLowerCase(),
        data.address as string,
        validatedDayoffs
      );

      if (response.success) {
        // Handle successful insertion (e.g., display success message, redirect)
        console.log("Clinic added successfully!");
      } else {
        toast.error(response.message); // Display error message
      }
    } catch (error) {
      console.error("Error adding clinic:", error);
      toast.error(
        "An error occurred while adding the clinic. Please try again later."
      );
    }
  };

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    const {
      data: { session },
    } = await supabase.auth.getSession();
    console.log(session);

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    // Convert form data to T_ClinicRegister
    const data: T_ClinicRegister = {
      clinicName: formData.get("clinicName")?.toString() || "",
      address: formData.get("address")?.toString() || undefined,
      dayOffs: dayoffs, // Using the current state for dayoffs
      createdAt: undefined,
      updatedAt: undefined,
      deletedAt: undefined,
    };

    // Call the actual onSubmit function
    onSubmit(data);
  };

  return (
    <div className="flex justify-center items-center flex-grow">
      <Card className="mx-auto max-w-xl">
        <CardHeader>
          <CardTitle className="text-xl">Add Clinic</CardTitle>
          <CardDescription>Enter your Clinic information</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label>Clinic Name</Label>
                <Input
                  id="clinicName"
                  name="clinicName"
                  type="text"
                  placeholder=""
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label>Address</Label>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  placeholder=""
                  required
                />
              </div>

              <Label>Dayoff:</Label>

              {dayoffs.map((dayoff, index) => (
                <div className="flex gap-2 items-center" key={index}>
                  <div>
                    <Select
                      onValueChange={(value) =>
                        handleDayoffUpdate(index, "day", value)
                      }
                    >
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
                        id={`timeFrom-${index}`}
                        type="text"
                        placeholder="From"
                        className="max-w-[80px]"
                        required
                        value={dayoff.fromTime.split(" ")[0]}
                        onChange={(e) =>
                          handleDayoffUpdate(
                            index,
                            "fromTime",
                            e.target.value,
                            dayoff.fromTime.split(" ")[1] || "AM"
                          )
                        }
                      />
                      <Select
                        onValueChange={(value) =>
                          handleDayoffUpdate(
                            index,
                            "fromTime",
                            dayoff.fromTime.split(" ")[0] || "",
                            value
                          )
                        }
                      >
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
                        id={`timeTo-${index}`}
                        type="text"
                        placeholder="To"
                        className="max-w-[80px]"
                        required
                        value={dayoff.toTime.split(" ")[0]}
                        onChange={(e) =>
                          handleDayoffUpdate(
                            index,
                            "toTime",
                            e.target.value,
                            dayoff.toTime.split(" ")[1] || "PM"
                          )
                        }
                      />
                      <Select
                        onValueChange={(value) =>
                          handleDayoffUpdate(
                            index,
                            "toTime",
                            dayoff.toTime.split(" ")[0] || "",
                            value
                          )
                        }
                      >
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

                  <MinusCircleIcon
                    className="self-end cursor-pointer pb-2"
                    size={30}
                    onClick={handleMinusScheduleCount}
                    type="button"
                  />
                </div>
              ))}
              <Button
                type="submit"
                className="w-full"
                onClick={handleAddScheduleCount}
              >
                Add Dayoff
              </Button>
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

export default AddClinic;
