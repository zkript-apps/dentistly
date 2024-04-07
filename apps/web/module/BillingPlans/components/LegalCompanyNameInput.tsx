// LegalCompanyNameInput.js
import { Input } from "@/common/components/shadcn/ui/input";
import React from "react";

const LegalCompanyNameInput = () => {
  return (
    <div className="pb-4">
      <div className="font-semibold text-xs pt-3 pb-2">Legal Company Name</div>
      <Input
        disabled
        type="name"
        placeholder="Enter your legal company name"
        className="flex items-center border box-border pl-2 border-gray-200 w-full text-sm text-gray-500"
      ></Input>
      <div className="text-xs text-gray-500">
        This is the name registered under your tax ID.
      </div>
    </div>
  );
};

export default LegalCompanyNameInput;
