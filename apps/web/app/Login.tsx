"use client";
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react";
import { UserCard } from "./userCard";

export default function Login() {
	return (
		<SessionProvider>
			<div className="flex justify-center items-center h-screen">
				<LoginForm />
			</div>
		</SessionProvider>
	);
}

function LoginForm() {
	const { data: session } = useSession();

	const handleSignOut = () => {
		signOut();
	};

	return <div></div>;
}
