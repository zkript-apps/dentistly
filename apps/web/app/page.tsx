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
import { handleLogin } from "./actions";
import { Button } from "@/common/components/shadcn/ui/button";
import Link from "next/link";
import { cookies } from "next/headers";
import ErrorMessage from "./components/error-message";

export default async function LoginPage() {
  const cookieStore = cookies();
  const errorMessage = cookieStore.get("loginError")?.value || "Unknown error";
  return (
    <div className="flex flex-col w-full">
    <form
      action={handleLogin}
      className="space-y-4"
    >
      <div className="flex justify-center items-center h-screen">
        <ErrorMessage message={errorMessage} />
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to Login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
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
              <Input
                id="password"
                name="password"
                type="password"
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit">
              Sign in
            </Button>
          </CardFooter>
        </Card>
      </div>
    </form>
    </div>
  );
};
