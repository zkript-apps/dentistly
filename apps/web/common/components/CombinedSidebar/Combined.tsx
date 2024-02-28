"use client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "../Settings/Settings";
import BillingPlansPage from "../BillingAndPlans/BillingPlansPage";
import People from "../People/People";
import PrivacyPage from "../Privacy/PrivacyPage";
import ProfileSidebar from "../Privacy/ProfileSidebar";

const Combined = () => {
	return (
		<BrowserRouter>
			<div className="flex w-full">
				<ProfileSidebar />
				<div className="content w-1/2">
					<Routes>
						<Route path="/" element={<Settings />} />
						<Route path="/Account" element={<Settings />} />
						<Route path="/Privacy" element={<PrivacyPage />} />
						<Route path="/Billing" element={<BillingPlansPage />} />
						<Route path="/People" element={<People />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
};
export default Combined;
