import AuthGuard from "@/common/components/AuthGuard";
import Login from "./Login";

const DefaultPage = async () => {
	return (
		<AuthGuard>
			<Login />
		</AuthGuard>
	);
};

export default DefaultPage;
