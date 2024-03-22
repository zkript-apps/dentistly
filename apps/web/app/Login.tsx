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

    return (
        <div className="flex flex-col justify-center max-w-sm w-full bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {session ? (
                <>
                    <h2 className="flex justify-center text-2xl font-bold mb-4">
                        {/* Hello! {session.user.name} */}
                    </h2>
                    <button
                        onClick={handleSignOut}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Sign Out of Google
                    </button>
                    <UserCard user={session?.user} />
                </>
            ) : (
                <>
                    <h2 className="flex justify-center text-2xl font-bold mb-4">
                        Welcome
                    </h2>
                    <button
                        onClick={() => signIn("google", { callbackUrl: "/session/google" })}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Sign In with Google
                    </button>
                </>
            )}
        </div>
    );
}