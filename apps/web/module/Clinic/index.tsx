import { Button } from "@/common/components/shadcn/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/common/components/shadcn/ui/card";
import { Input } from "@/common/components/shadcn/ui/input";
import { Label } from "@/common/components/shadcn/ui/label";
import { Link } from "lucide-react";

export const Clinic = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-xl">Add Clinic</CardTitle>
                    <CardDescription>
                        Enter your Clinic information
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4" action="#" method="POST">
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label id="clinicName">Clinic Name</Label>
                                <Input id="clinicName" type="text" placeholder="" />
                            </div>
                            <div className="grid gap-2">
                                <Label id="clinicName">Clinic Name</Label>
                                <Input id="clinicName" type="text" placeholder="" />
                            </div>
                            <div className="grid gap-2">
                                <Label id="email">Email</Label>
                                <Input id="email" type="email" placeholder="" />
                            </div>
                            <div className="grid gap-2">
                                <Label id="password">Password</Label>
                                <Input id="password" type="password" />
                            </div>
                            <Button type="submit" className="w-full">
                                Create an account
                            </Button>
                            <Button className="w-full">Sign up with Google</Button>
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

export default Clinic;
