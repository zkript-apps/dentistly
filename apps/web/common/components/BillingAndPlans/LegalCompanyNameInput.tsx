// LegalCompanyNameInput.js
import React from "react";

const LegalCompanyNameInput = () => {
  return (
    <div className="pb-4">
      <div className="font-semibold text-xs pt-3 pb-2">Legal Company Name</div>
      <button className="flex items-center border p-2 border-gray-200 w-full text-sm cursor-not-allowed text-gray-400">
        Enter your legal company name
      </button>
      <div className="text-xs text-gray-500">
        This is the name registered under your tax ID.
      </div>
    </div>
  );
};

export default LegalCompanyNameInput;
