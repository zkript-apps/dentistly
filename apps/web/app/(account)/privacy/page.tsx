import AuthGuard from "@/common/components/AuthGuard";
import Privacy from "@/module/Privacy";

const PrivacyPage = async () => {
  return (
    <AuthGuard>
      <Privacy />
    </AuthGuard>
  );
};

export default PrivacyPage;
