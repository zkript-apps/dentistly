"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

const CanvaAIUsage = () => {
	const [enabled, setEnabled] = useState(false);
	return (
		<div className="flex w-full justify-center items-center">
			{/* Card */}
			<div className="card flex border-2 w-1/2 p-5 border-gray-200 mt-4 rounded">
				<div className="flex flex-col">
					<div className="pb-2 font-semibold">
						Your general usage and activity helps Canva build better AI features
						unless you turn this off
					</div>
					<div className="pb-2">
						Your general usage and activity on Canva can contribute to the
						ongoing development of better AI features. Unless you turn this off,
						Canva and our trusted third-party partners may use general
						information with strict controls and policies in place.
					</div>
					<div className="pb-2">
						General information includes color and font preferences, search
						queries, and prompts that provide instructions or commands. For
						example, we can analyze common requests made to Magic Edit in order
						to improve it for popular use cases. Importantly, this does not
						include analyzing the content itself, such as the photos you edit.
					</div>
					<div>You can change this setting at any time.</div>
				</div>
				<div className="flex items-start h-full ml-2">
					<div className="flex items-center">
						{/* Text displayed on the left side of the toggle */}
						<span className="mr-2 font-semibold">{enabled ? "On" : "Off"}</span>
						{/* Toggle button */}
						<Switch
							checked={enabled}
							onChange={setEnabled}
							className={classNames(
								enabled ? "bg-indigo-600" : "bg-gray-200",
								"relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
							)}
						>
							<span className="sr-only">Use setting</span>
							<span
								className={classNames(
									enabled ? "translate-x-5" : "translate-x-0",
									"pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
								)}
							>
								<span
									className={classNames(
										enabled
											? "opacity-0 duration-100 ease-out"
											: "opacity-100 duration-200 ease-in",
										"absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
									)}
									aria-hidden="true"
								>
									{/* Icon for the X */}
									<svg
										className="h-3 w-3 text-gray-400"
										fill="none"
										viewBox="0 0 12 12"
									>
										<path
											d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
								<span
									className={classNames(
										enabled
											? "opacity-100 duration-200 ease-in"
											: "opacity-0 duration-100 ease-out",
										"absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
									)}
									aria-hidden="true"
								>
									{/* Icon for the check mark */}
									<svg
										className="h-3 w-3 text-indigo-600"
										fill="currentColor"
										viewBox="0 0 12 12"
									>
										<path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
									</svg>
								</span>
							</span>
						</Switch>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CanvaAIUsage;
