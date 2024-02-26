// IssuingCountrySelect.js
import React from "react";
import { ChevronDown } from "lucide-react";

const IssuingCountrySelect = () => {
  return (
    <div className="pb-4">
      <div className="font-semibold text-xs pb-2">Issuing country</div>
      <button className="flex text-left items-center border p-2 rounded-md text-gray-400 border-gray-200 w-full text-sm">
        <span className="flex-grow">Select an option</span>
        <div>
          <ChevronDown color="black" size={20} />
        </div>
      </button>
    </div>
  );
};

export default IssuingCountrySelect;
