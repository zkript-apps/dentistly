"use client";
import Link from "next/link";
import { Button } from "@/common/components/shadcn/ui/button";
import { toast } from "sonner";
import { T_UserRegister } from "@repo/contract";
import { useForm } from "react-hook-form";
import useRegister from "./hooks/useRegister";
import { signUp, supabase } from "@/lib/supabaseClient";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/common/components/shadcn/ui/card";
import { Input } from "@/common/components/shadcn/ui/input";
import { Label } from "@/common/components/shadcn/ui/label";
import { useRouter } from "next/navigation";
import { supabase } from "@/common/libs/supabase-client";
import { registerUser } from "@/common/libs/auth/register";

const Register = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<T_UserRegister>();
  // const { mutate } = useRegister();
  const onSubmit = async (data: T_UserRegister) => {
    try {
      registerUser(
        data.organization,
        data.firstName,
        data.lastName,
        data.email,
        data.password as string
      ).then((res) => {
        console.log(res);
      });
      //   const { user: userData } = await signUp(data.email, data.password, {
      //     first_name: data.firstName,
      //     last_name: data.lastName,
      //   });

      //   // router.push("/");
      //  const { data: user, error } = await supabase.auth.getUser();
      //  if (error) {
      //    console.error("User not authenticated:", error);
      //  } else {
      //    console.log("Authenticated user:", user.user.id);
      //  }

      //  if(user){
      //    const { data: orgData, error: orgError } = await supabase
      //      .from("Organization")
      //      .insert([
      //        {
      //          clinicName: "Org",
      //          address: "asd", // You might want to add this field to your form
      //          dayOff: "asd", // You might want to add this field to your form
      //          id: user?.user?.id,
      //        },
      //      ])
      //      .select();
      //    console.log(orgData);
      //    console.log(orgError);
      //  }

      const callBackReq = {
        onSuccess: (data: any) => {
          if (!data.error) {
            if (data.action && data.action.link) {
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
      // mutate(data, callBackReq);
    } catch (error) {
      toast.error('An error occurred');
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            action="#"
            method="POST"
          >
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="organization">Organization Name</Label>
                <Input
                  id="organization"
                  type="organization"
                  {...register("organization", { required: true })}
                  placeholder=""
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="firstName"
                    {...register("firstName", { required: true })}
                    placeholder=""
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    id="lastName"
                    {...register("lastName", { required: true })}
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", { required: true })}
                  placeholder=""
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  {...register("password", { required: true })}
                  type="password"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Create an account
              </Button>
              <Button variant="outline" className="w-full">
                Sign up with Google
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="#" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
