import React from "react";
import { Info } from "lucide-react";
import LegalCompanyNameInput from "./LegalCompanyNameInput";
import { Input } from "@/common/components/shadcn/ui/input";
import { ComboboxDemo } from "./IssuingCountrySelect";

const TaxID = () => {
	return (
		<div className="flex flex-col justify-center w-full">
			<div className="font-semibold text-lg">Tax ID</div>
			<div className="text-sm pb-4 pt-3">
				Enter this information if you are a tax-exempt organization. Only
				supported countries are shown.
			</div>
			<ComboboxDemo />
			<LegalCompanyNameInput />
			<div className="pb-4">
				<div className="flex items-center font-semibold text-xs pt-3 pb-2">
					Tax ID
					<div className="pl-1">
						<Info size={14} strokeWidth={3} />
					</div>{" "}
				</div>
				<Input
					disabled
					type="name"
					placeholder="Enter your tax ID"
					className="flex items-center border p-2 border-gray-200 w-full text-sm text-gray-500"
				></Input>

				<div className="text-xs text-gray-500">
					This will appear on your invoice.
				</div>
			</div>
		</div>
	);
};

export default TaxID;
