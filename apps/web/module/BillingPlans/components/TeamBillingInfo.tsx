import React from "react";
import CompanyNameInput from "./CompanyNameInput";
import BillingContactInput from "./BillingContactInput";
import BillingAddressTextarea from "./BillingAddressTextArea";

const TeamBillingInfo = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="w-1/3">
        <div className="font-semibold text-lg pt-4 pb-4">
          Team billing information for Personal
        </div>
        <CompanyNameInput />
        <BillingAddressTextarea />
        <BillingContactInput />
      </div>
    </div>
  );
};

export default TeamBillingInfo;
