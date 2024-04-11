import AuthGuard from "@/common/components/AuthGuard";
import Dashboard from "@/module/Dashboard";

const DashboardPage = async () => {
  return (
    <AuthGuard>
      <Dashboard />
    </AuthGuard>
  );
};

export default DashboardPage;
