"use client";
import React from "react";
import TeamPaymentMethod from "./components/TeamPaymentMethod";
import TeamSubscriptions from "./components/TeamSubscriptions";
import TeamBillingInfo from "./components/TeamBillingInfo";
import TaxID from "./components/TaxID";
import Team from "./components/Team";

const BillingPlans = () => {
  return (
    <div className="w-2/4">
      <div className="pb-4">
        <TeamPaymentMethod />
      </div>
      <div className="pt-4 pb-4">
        <TeamSubscriptions />
      </div>
      <div className="pt-4 pb-4">
        <TeamBillingInfo />
      </div>
      <div className="pt-4 pb-4">
        <TaxID />
      </div>
      <div className="pt-4 pb-4">
        <Team />
      </div>
    </div>
  );
};

export default BillingPlans;
