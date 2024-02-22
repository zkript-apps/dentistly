import { ChevronDown, Info } from "lucide-react";

const TaxID = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-1/2">
        <div className="font-semibold text-lg">Tax ID</div>
        <div className="text-sm pb-4 pt-3">
          Enter this information if you are a tax-exempt organization. Only
          supported countries are shown.
        </div>
        <div className="pb-4">
          <div className="font-semibold text-xs pb-2">Issuing country</div>
          <button className="flex text-left items-center border p-2 rounded-md text-gray-400 border-gray-200 w-full text-sm">
            <span className="flex-grow">Select an option</span>
            <div>
              <ChevronDown color="black" size={20} />
            </div>
          </button>
        </div>
        <div className="pb-4">
          <div className="font-semibold text-xs pt-3 pb-2">
            Legal Company Name
          </div>
          <button className="flex items-center border p-2 border-gray-200 w-full text-sm cursor-not-allowed text-gray-400">
            Enter your legal company name
          </button>

          <div className="text-xs text-gray-500">
            This is the name registered under your tax ID.
          </div>
        </div>
        <div className="pb-4">
          <div className="flex items-center">
            <div className="flex items-center font-semibold text-xs pt-3 pb-2">
              Tax ID
              <span className="pl-1 h-full">
                <Info size={14} strokeWidth={3} />
              </span>
            </div>
          </div>
          <div className="flex items-center border p-2 border-gray-200 w-full text-sm cursor-not-allowed text-gray-400">
            Enter your tax ID
          </div>
          <div className="text-xs text-gray-500">
            This will appear on your invoice.
          </div>
        </div>
      </div>
    </div>
  );
};
export default TaxID;
