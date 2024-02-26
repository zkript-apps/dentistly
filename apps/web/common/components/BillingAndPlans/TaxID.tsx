import React from "react";
import { Info } from "lucide-react";
import IssuingCountrySelect from "./IssuingCountrySelect";
import LegalCompanyNameInput from "./LegalCompanyNameInput";

const TaxID = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-1/2">
        <div className="font-semibold text-lg">Tax ID</div>
        <div className="text-sm pb-4 pt-3">
          Enter this information if you are a tax-exempt organization. Only
          supported countries are shown.
        </div>
        <IssuingCountrySelect />
        <LegalCompanyNameInput />
        <div className="pb-4">
          <div className="flex items-center font-semibold text-xs pt-3 pb-2">
            Tax ID
            <div className="pl-1">
              <Info size={14} strokeWidth={3} />
            </div>{" "}
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
