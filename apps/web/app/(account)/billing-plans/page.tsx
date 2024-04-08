import AuthGuard from "@/common/components/AuthGuard";
import BillingPlans from "@/module/BillingPlans";

const BillingPlansPage = async () => {
  return (
    <AuthGuard>
      <BillingPlans />;
    </AuthGuard>
  );
};

export default BillingPlansPage;
