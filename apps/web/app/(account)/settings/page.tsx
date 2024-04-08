import AuthGuard from "@/common/components/AuthGuard";
import Settings from "@/module/Settings";

const SettingsPage = async () => {
	return (
		<AuthGuard>
			<Settings />
		</AuthGuard>
	);
};

export default SettingsPage;
