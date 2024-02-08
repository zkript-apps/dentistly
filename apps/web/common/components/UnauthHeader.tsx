"use client";
import { useState } from "react";

const navigation = [
	{ name: "Product", href: "#" },
	{ name: "Features", href: "#" },
	{ name: "Marketplace", href: "#" },
	{ name: "Company", href: "#" },
];

export default function UnauthHeader() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-white">
			<nav
				className="mx-auto flex w-full m-0 pl-3 pt-4 items-center justify-between lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1 font-bold">
					<a href="#" className="">
						Dentistly
					</a>
				</div>
			</nav>
		</header>
	);
}
