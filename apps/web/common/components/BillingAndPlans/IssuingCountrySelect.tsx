

// IssuingCountrySelect.js
import React from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";

const IssuingCountrySelect = () => {
  return (
    <div className="pb-4">
      <div className="font-semibold text-xs pb-2">Issuing country</div>
      <Button
        variant="default"
        className="flex text-left text-gray-500 items-center border p-2 w-full"
      >
        <span className="flex-grow">Select an option</span>
        <div>
          <ChevronDown color="black" size={20} />
        </div>
      </Button>
    </div>
  );
};

export default IssuingCountrySelect;
