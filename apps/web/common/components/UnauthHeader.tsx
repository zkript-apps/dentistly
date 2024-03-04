"use client";
import { Settings, CircleUser, Menu, Bell } from "lucide-react";
import React from "react";
import useIsSideNavOpen from "../helpers/useIsSideNavOpen";
import { Button } from "./ui/Button";

export default function UnauthHeader() {
	const { setIsOpen } = useIsSideNavOpen();

	return (
		<div>
			<header className="bg-white border border-b shadow-sm pt-1 pb-1 ">
				<nav
					className="mx-auto flex w-full m-0 items-center justify-between"
					aria-label="Global"
				>
					{/* left part */}
					<div className="flex pb-5 pt-5 pl-5 items-center">
						<Button variant="primary" size="icon" onClick={() => setIsOpen()}>
							<Menu strokeWidth={1.25} />
						</Button>
						<div className="flex lg:flex-1 font-bold pl-5">
							<Button variant="default"> Dentistly </Button>
						</div>
					</div>

					{/* right part */}
					<div className="flex justify-evenly w-auto items-center pr-5">
						<Button variant="primary" size="icon" className="settings p-2">
							<Settings strokeWidth={1.25} />
						</Button>
						<Button variant="primary" size="icon" className="p-2 ml-2">
							<Bell strokeWidth={1.25} />
						</Button>
						<div className="outside-border ml-2 mr-2 border border-dotted p-0.25 rounded-md border-gray-700">
							<Button
								variant="secondary"
								className="border-2 pb-2 pt-2 pl-3 pr-3 rounded-md bg-blue-600 text-white hover:bg-blue-800"
							>
								Create Organization
							</Button>
						</div>
						<Button variant="primary" size="icon" className="user-settings p-2">
							<CircleUser strokeWidth={1.25} />
						</Button>
					</div>
				</nav>
			</header>
		</div>
	);
}
