"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import useLogin from "./hooks/useLogin";
import Link from "next/link";
import { toast } from "sonner"; // Assuming `sonner` has a `toast` function for displaying messages
import { IUserLogin } from "@/common/types";
import { Button } from "@/common/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/common/components/shadcn/ui/card";
import { Input } from "@/common/components/shadcn/ui/input";
import { Label } from "@/common/components/shadcn/ui/label";

const Login = () => {
  const router = useRouter();
  const { mutate: loginUser, isPending: isLoginPending } = useLogin();
  const { register, handleSubmit } = useForm<IUserLogin>();

  const onSubmit = async (formData: IUserLogin) => {
    try {
      const callBackReq = {
        onSuccess: (data: any) => {
          if (!data.error && !isLoginPending) {
            if (data.action?.data.action.link) {
              router.push(data.action.link);
            }
          } else {
            toast.error(String(data.message));
          }
        },
        onError: (err: any) => {
          toast.error(String(err));
        },
      };

      loginUser(formData, callBackReq);
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      action="#"
      method="POST"
    >
      <div className="flex justify-center items-center h-screen">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("email")}
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input {...register("password")} type="password" required />
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-col w-full items-center">
              <Button variant="default" className="w-full" type="submit">
                Sign in
              </Button>
              <div className="border w-auto text-center text-sm m-4">
                Don&apos;t have an account?{" "}
                <Link href="/create-account" className="underline">
                  Sign up
                </Link>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </form>
  );
};

export default Login;
