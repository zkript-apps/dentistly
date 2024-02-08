"use client";
import { Settings, CircleUser, Menu, Bell } from "lucide-react";

export default function UnauthHeader() {
	return (
		<header className="bg-white border border-b shadow-sm pt-1 pb-1">
			<nav
				className="mx-auto flex w-full m-0 items-center justify-evenly lg:px-8"
				aria-label="Global"
			>
				{/* left part */}
				<div className="p-5">
					<Menu strokeWidth={1.25} />
				</div>
				<div className="flex lg:flex-1 font-bold">
					<a href="#" className="">
						Dentistly
					</a>
				</div>

				{/* right part */}
				<div className="flex justify-evenly w-auto items-center">
					<div className="settings p-2">
						<Settings strokeWidth={1.25} />
					</div>
					<div className="notif p-2">
						<Bell strokeWidth={1.25} />
					</div>
					<div className="outside-border ml-2 mr-2 border border-dotted p-0.25 rounded-md border-gray-700">
						<div className="create-btn  border-2 pb-2 pt-2 pl-3 pr-3 rounded-md bg-purple-600 text-white">
							Create Organization
						</div>
					</div>
					<div className="user-settings p-2">
						<CircleUser strokeWidth={1.25} />
					</div>
				</div>
			</nav>
		</header>
	);
}