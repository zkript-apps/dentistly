import React from "react";
import CompanyNameInput from "./CompanyNameInput";
import BillingContactInput from "./BillingContactInput";
import BillingAddressTextarea from "./BillingAddressTextArea";

const TeamBillingInfo = () => {
	return (
		<div className="flex flex-col justify-center">
			<div className="font-semibold text-lg pt-4 pb-4">
				Team billing information for Personal
			</div>
			<CompanyNameInput />
			<BillingAddressTextarea />
			<BillingContactInput />
		</div>
	);
};

export default TeamBillingInfo;
