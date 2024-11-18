// BillingAddressTextarea.js
import { Label } from "@/common/components/shadcn/ui/label";
import { Textarea } from "@/common/components/shadcn/ui/textarea";
import React from "react";

const BillingAddressTextArea = () => {
  return (
    <div className="pt-4">
      <div className="grid w-full items-center gap-1.5">
        <Label className="text-xs font-semibold" htmlFor="email">
          Billing Address
        </Label>
        <Textarea
          className="flex h-32 resize-none align-top justify-start w-full self-start border box-border pl-2 pt-2 border-gray-300 rounded text-gray-900 placeholder-gray-400 leading-tight focus:border-blue-300 focus:border-opacity-0 sm:text-sm sm:leading-6"
          id="name"
          placeholder="Enter your company address"
        />
      </div>
    </div>
  );
};

export default BillingAddressTextArea;
