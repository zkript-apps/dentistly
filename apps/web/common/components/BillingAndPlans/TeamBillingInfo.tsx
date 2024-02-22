import { Trash2 } from "lucide-react";

const TeamBillingInfo = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="w-1/3">
        <div className="font-semibold text-lg pt-4 pb-4">
          Team billing information for Personal
        </div>

        {/* Company Name */}
        <div>
          <div className="font-semibold text-xs">Company Name</div>

          <div className="flex pt-2">
            <div className="w-full">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full box-border border-gray-300 rounded border py-1.5 text-gray-900 placeholder-gray-400 focus:border-blue-300 focus:border-opacity-0  sm:text-sm sm:leading-6"
                placeholder="Enter your company name"
              />
            </div>
          </div>

          <div className="text-xs text-gray-500">
            This will appear on your invoice
          </div>
        </div>

        {/* Billing Address */}
        <div className="pt-4">
          <div className="font-semibold text-xs">Billing Address</div>

          <div className="flex pt-2">
            <div className="w-full">
              <textarea
                name="name"
                id="name"
                className="flex h-32 resize-none w-full self-start border border-gray-300 rounded text-gray-900 placeholder-gray-400 text-left leading-tight focus:border-blue-300 focus:border-opacity-0 sm:text-sm sm:leading-6"
                placeholder="Enter your company address"
              />
            </div>
          </div>
        </div>

        {/* Billing contacts */}
        <div className="pt-4">
          <div className="font-semibold text-xs pb-2">Billing contacts</div>
          <div className="text-sm">
            All billing-related emails will be sent to your email address and
            these billing contacts
          </div>

          <div className="flex flex-col pt-2">
            <div className="flex w-full items-center">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full box-border border-gray-300 rounded border py-1.5 text-gray-900 placeholder-gray-400 focus:border-blue-300 focus:border-opacity-0  sm:text-sm sm:leading-6"
                placeholder="Enter an email address"
              />
              <button className="pl-2 pr-2">
                <Trash2 size={25} strokeWidth={1.5} />
              </button>
            </div>

            <div>
              <button className="flex items-center text-sm text-gray-700 hover:text-black font-medium">
                <div className="pt-2">+ Add new billing contact</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamBillingInfo;
