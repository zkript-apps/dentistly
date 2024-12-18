import { Button } from "@/common/components/shadcn/ui/button";
import { Crown } from "lucide-react";

const TeamSubscriptions = () => {
  return (
    <div>
      <div className="font-semibold text-lg pt-4 pb-4">
        Subscriptions for your team: Personal
      </div>
      <div className="border p-4 rounded-md">
        <div className="font-semibold text-lg">Canva Free</div>
        <div className="pt-4 pb-4 text-sm">Free forever</div>
        <Button
          variant="default"
          className="flex items-center justify-center -text-black font-medium text-sm h-10 rounded-md bg-gray-100 hover:bg-gray-200 w-full"
        >
          {" "}
          <Crown color="gold" size={12}></Crown>Try Canva Pro
        </Button>
      </div>
    </div>
  );
};
export default TeamSubscriptions;
