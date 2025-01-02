"use server";
import { supabase } from "@/common/libs/supabase-client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Z_Login } from "./schemas";

export async function handleLogin(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // const validate = Z_Login.safeParse({ email, password });

  // if (!validate.success) {
  //   cookies().set("loginError", "Invalid email or password", {
  //     path: "/",
  //     maxAge: 5,
  //   });
  //   redirect("/");
  // }

  // const { data, error } = await supabase.auth.signInWithPassword(validate.data);

  // if (error) {
  //   cookies().set("loginError", error.message, {
  //     path: "/",
  //     maxAge: 5,
  //   });
  //   redirect("/");
  // }

  // if (data?.session) {
  //   // Save the access token as a cookie
  //   cookies().set("accessToken", data.session.access_token, {
  //     path: "/",
  //     httpOnly: true,
  //     secure: process.env.NODE_ENV === "production",
  //   });

  //   // Save the refresh token as a cookie (if needed)
  //   cookies().set("refreshToken", data.session.refresh_token, {
  //     path: "/",
  //     httpOnly: true,
  //     secure: process.env.NODE_ENV === "production",
  //   });
  // }

  // Redirect to the dashboard after login
  redirect("/billing-plans");
}
