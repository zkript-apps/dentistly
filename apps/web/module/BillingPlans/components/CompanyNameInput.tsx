// CompanyNameInput.js
import { Input } from "@/common/components/shadcn/ui/input";
import { Label } from "@/common/components/shadcn/ui/label";
Label;
import React from "react";

const CompanyNameInput = () => {
	return (
		<div>
			<div className="grid w-full items-center gap-1.5">
				<Label className="text-xs font-semibold" htmlFor="email">
					Company Name
				</Label>
				<Input
					className="w-full"
					type="name"
					id="name"
					placeholder="Enter your company name"
				/>
			</div>
			<div className="text-xs text-gray-500">
				This will appear on your invoice
			</div>
		</div>
	);
};

export default CompanyNameInput;
