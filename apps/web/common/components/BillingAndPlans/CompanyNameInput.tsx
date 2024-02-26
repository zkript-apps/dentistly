// CompanyNameInput.js
import React from "react";

const CompanyNameInput = () => {
	return (
		<div>
			<div className="font-semibold text-xs">Company Name</div>
			<div className="flex pt-2">
				<div className="w-full">
					<input
						type="text"
						name="name"
						id="name"
						className="block w-full box-border border-gray-300 rounded border py-1.5 text-gray-900 placeholder-gray-400 focus:border-blue-300 focus:border-opacity-0  sm:text-sm sm:leading-6"
						placeholder="Enter your company name"
					/>
				</div>
			</div>
			<div className="text-xs text-gray-500">
				This will appear on your invoice
			</div>
		</div>
	);
};

export default CompanyNameInput;
