import AuthGuard from "@/common/components/AuthGuard";
import People from "@/module/People";

const PeoplePage = async () => {
  return (
    <AuthGuard>
      <People />
    </AuthGuard>
  );
};

export default PeoplePage;
