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
import { T_ClinicRegister } from "/Zkript/dentistly/packages/contract/src/Clinic/type";
import { addClinic } from "@/common/libs/auth/addclinic";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Z_dayOffs } from "/Zkript/dentistly/packages/contract/src/Clinic/zod";
import { off } from "process";
import { supabase } from "@/common/libs/supabase-client";

export const Clinic = () => {
  const [scheduleCount, setScheduleCount] = useState(1);
  const [dayoffs, setDayoffs] = useState([
    {
      day: "Monday",
      fromTime: "07:00 AM",
      toTime: "05:00 PM",
    },
  ]);
  const handleAddScheduleCount = () => {
    const addData = {
      day: "Monday",
      fromTime: "",
      toTime: "",
    };
    setDayoffs((prev) => [...prev, addData]);
    setScheduleCount((prev) => prev + 1);
  };

  const handleMinusScheduleCount = () => {
    setDayoffs((prev) => prev.slice(0, -1));
  };

  const router = useRouter();

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

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
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
    <div className="flex justify-center items-center h-screen">
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
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder={dayoff.day} />
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

export default Clinic;
