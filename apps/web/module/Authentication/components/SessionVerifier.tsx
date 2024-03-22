"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import useVerifySignIn from "@/common/hooks/useVerifySignIn";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { Spinner } from "@/common/components/ui/Spinner";

const SessionVerifier = () => {
	const router = useRouter();
	const params = useParams();
	const searchParams = useSearchParams();
	const redirectTo = searchParams?.get("redirect_to");
	const { data: session } = useSession();
	const { data } = useVerifySignIn();
	if (!session || (session && data && data?.item)) {
		router.push(redirectTo ?? "/");
	} else if (session && data?.error) {
		// Adding id 1 to prevent duplicate toast
		toast.error(data.message as string, { id: "1", duration: 5000 });
		signOut({ redirect: false });
		router.push("/login");
	} else if (
		session &&
		data &&
		!data.error &&
		data.action?.type === "SOCIAL_REGISTER" &&
		data.action?.description === params?.type
	) {
		router.push(`/create-account/${params?.type}`);
	}
	return <Spinner middle />;
};

export default SessionVerifier;
