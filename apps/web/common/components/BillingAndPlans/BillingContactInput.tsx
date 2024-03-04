// BillingContactInput.js
import React from "react";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/Button";

const BillingContactInput = () => {
	return (
		<div className="pt-4">
			<div className="font-semibold text-xs pb-2">Billing contacts</div>
			<div className="text-sm">
				All billing-related emails will be sent to your email address and these
				billing contacts
			</div>
			<div className="flex flex-col pt-2">
				<div className="flex w-full items-center">
					<input
						type="text"
						name="name"
						id="name"
						className="block w-full box-border border-gray-300 rounded border py-1.5 text-gray-900 placeholder-gray-400 focus:border-blue-300 focus:border-opacity-0  sm:text-sm sm:leading-6"
						placeholder="Enter an email address"
					/>
					<Button variant="ghost" className="pl-2 pr-2 hover:text-red-500">
						<Trash2 size={25} strokeWidth={1.5} />
					</Button>
				</div>
				<div>
					<Button variant="ghost" className="flex items-center pl-0 text-sm ">
						<div className="pt-2">+ Add new billing contact</div>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default BillingContactInput;
