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
import { IUserForgotPassword } from "@/common/types";
import { useForm } from "react-hook-form";

export function ForgotPassword() {
	const { handleSubmit, register } = useForm<IUserForgotPassword>();
	const onSubmit = async (data: IUserForgotPassword) => {
		try {
			console.log(data);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div className="flex justify-center items-center h-screen w-full">
			<Card className="mx-auto w-1/3">
				<CardHeader>
					<CardTitle className="text-2xl text-center">
						Forgot Password
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit(onSubmit)} action="#" method="POST">
						<div className="grid gap-4">
							<div className="grid gap-2">
								<Label htmlFor="email">Email *</Label>
								<Input
									id="email"
									type="email"
									placeholder="you@example.com"
									required
									{...register("email", { required: true })}
								/>
								<CardDescription>
									Please enter your email in the box above. We will send you
									link to access further instructions.
								</CardDescription>
							</div>
							<Button type="submit" className="w-full">
								Submit
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
