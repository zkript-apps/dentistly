"use client";
import { Button } from "@/common/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/common/components/shadcn/ui/card";
import { Input } from "@/common/components/shadcn/ui/input";
import { Label } from "@/common/components/shadcn/ui/label";
import { IUserNewPassword } from "@/common/types";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AlertCircle } from "lucide-react";

export function NewPassword() {
  const { handleSubmit, register } = useForm<IUserNewPassword>();
  const [toastMessage, setToastMessage] = useState<string>("");

  const onSubmit = async (data: IUserNewPassword) => {
    try {
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }

    try {
      if (data.newPassword === data.confirmPassword) {
        setToastMessage("Password reset successful");
      } else {
        setToastMessage("Passwords do not match");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST">
      <div className="flex h-screen w-full justify-center items-center">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Reset Password
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="newPassword">Enter New Password</Label>
              <Input
                id="newPassword"
                type="password"
                {...register("newPassword", { required: true })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                {...register("confirmPassword", { required: true })}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="default" className="w-full" type="submit">
              Submit
            </Button>
          </CardFooter>
        </Card>
      </div>
      {toastMessage && (
        <div className="flex fixed justify-between top-4 w-auto  right-4 bg-gray-800 text-white px-4 py-2 rounded">
          <div className="pr-4">
            <AlertCircle />
          </div>
          {toastMessage}
        </div>
      )}
    </form>
  );
}
