// BillingAddressTextarea.js
import React from "react";

const BillingAddressTextarea = () => {
  return (
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
  );
};

export default BillingAddressTextarea;
