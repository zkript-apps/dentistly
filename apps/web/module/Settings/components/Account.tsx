"use client";
import * as React from "react";

import { UserCircle } from "lucide-react";
import { Search } from "react-feather";
import { Input } from "@/common/components/shadcn/ui/input";
import { Label } from "@/common/components/shadcn/ui/label";
import { Button } from "@/common/components/shadcn/ui/button";
import { useEffect, useRef, useState } from "react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/common/components/shadcn/ui/select";

const languages = [
	{ label: "English", value: "en" },
	{ label: "French", value: "fr" },
	{ label: "German", value: "de" },
	{ label: "Spanish", value: "es" },
	{ label: "Portuguese", value: "pt" },
	{ label: "Russian", value: "ru" },
	{ label: "Japanese", value: "ja" },
	{ label: "Korean", value: "ko" },
	{ label: "Chinese", value: "zh" },
	{ label: "Arabic", value: "ar" },
	{ label: "Bengali", value: "bn" },
	{ label: "Dutch", value: "nl" },
	{ label: "Filipino", value: "fil" },
	{ label: "Greek", value: "el" },
	{ label: "Hindi", value: "hi" },
	{ label: "Italian", value: "it" },
	{ label: "Malay", value: "ms" },
	{ label: "Polish", value: "pl" },
	{ label: "Swedish", value: "sv" },
	{ label: "Thai", value: "th" },
	{ label: "Turkish", value: "tr" },
	{ label: "Ukrainian", value: "uk" },
	{ label: "Vietnamese", value: "vi" },
	{ label: "Indonesian", value: "id" },
	{ label: "Finnish", value: "fi" },
	{ label: "Czech", value: "cs" },
	{ label: "Danish", value: "da" },
	{ label: "Norwegian", value: "no" },
	{ label: "Romanian", value: "ro" },
	{ label: "Hungarian", value: "hu" },
	{ label: "Hebrew", value: "he" },
	{ label: "Persian", value: "fa" },
	{ label: "Serbian", value: "sr" },
	{ label: "Slovak", value: "sk" },
	{ label: "Croatian", value: "hr" },
	{ label: "Bulgarian", value: "bg" },
	{ label: "Lithuanian", value: "lt" },
	{ label: "Slovenian", value: "sl" },
	{ label: "Latvian", value: "lv" },
	{ label: "Estonian", value: "et" },
	{ label: "Swahili", value: "sw" },
	{ label: "Icelandic", value: "is" },
	{ label: "Georgian", value: "ka" },
	{ label: "Armenian", value: "hy" },
	{ label: "Macedonian", value: "mk" },
	{ label: "Albanian", value: "sq" },
	{ label: "Urdu", value: "ur" },
	{ label: "Amharic", value: "am" },
	{ label: "Tamil", value: "ta" },
	{ label: "Telugu", value: "te" },
	{ label: "Kannada", value: "kn" },
	{ label: "Malayalam", value: "ml" },
	{ label: "Gujarati", value: "gu" },
	{ label: "Odia", value: "or" },
	{ label: "Punjabi", value: "pa" },
	{ label: "Marathi", value: "mr" },
	{ label: "Assamese", value: "as" },
	{ label: "Nepali", value: "ne" },
	{ label: "Sinhala", value: "si" },
	{ label: "Burmese", value: "my" },
	{ label: "Khmer", value: "km" },
	{ label: "Lao", value: "lo" },
];

const Account = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredOptions, setFilteredOptions] = useState(languages);
	const inputRef = useRef(null);

	const handleInputChange = (e) => {
		const query = e.target.value;
		setSearchQuery(query);

		if (query === "") {
			setFilteredOptions(languages);
		} else {
			const filtered = languages.filter((language) =>
				language.label.toLowerCase().includes(query.toLowerCase())
			);
			setFilteredOptions(
				filtered.length > 0
					? filtered
					: [{ label: "No options found", value: "no_option_found" }]
			);
		}
	};

	useEffect(() => {
		if (inputRef.current) {
			setTimeout(() => {
				inputRef.current.focus();
			}, 0);
		}
	}, [filteredOptions]);

	return (
		<div className="flex flex-col h-auto w-4/5 justify-center items-left text-left pt-4">
			<div>
				<div className="text-lg font-semibold pb-5">Your account</div>
				<div className="flex items-center border-b-2 border-gray-200 pt-4 pb-4">
					<UserCircle size={90} strokeWidth={1.25} color="gold" />
					<div className="flex flex-1 flex-col justify-center">
						<div className="pl-3 pb-3 font-semibold">
							Upload your profile photo
						</div>
						<div className="pl-3">
							This helps your teammates recognize you in Canva.
						</div>
						<div></div>
					</div>
					<Button
						variant="default"
						className="flex-none ml-5 w-36 h-10 p-2 font-semibold bg-gray-200 text-black"
					>
						Upload photo
					</Button>
				</div>

				<div className="mt-5 border-gray-200 border-b-2 pt-4 pb-4">
					<Label htmlFor="email" className="font-semibold">
						Name
					</Label>
					<div className="flex items-center">
						<div className="items-center flex-col w-full">
							<div className="w-full">
								<Input
									type="email"
									id="email"
									placeholder="Ex. John Patrick Madrigal"
								/>
							</div>
						</div>
						<div className="flex ml-4">
							<Button
								variant="default"
								className=" mr-2 w-24 h-10 p-2 font-semibold  bg-gray-200 text-black"
							>
								Cancel
							</Button>
							<Button
								variant="secondary"
								className=" w-24 h-10 p-2 font-semibold bg-blue-600 text-white"
							>
								Save
							</Button>
						</div>
					</div>
				</div>

				<div className="mt-5 border-gray-200 border-b-2 pt-4 pb-4">
					<div className="font-semibold text-sm">Email address</div>
					<div className="flex pt-2 justify-center items-center">
						<div className="w-full text-sm ">jp.madrigal07@gmail.com</div>

						<Button
							variant="default"
							className="ml-5 h-10 w-20 p-2 font-semibold bg-gray-200 text-black "
						>
							Edit
						</Button>
					</div>
				</div>

				<div className="mt-5 border-gray-200 border-b-2 pt-4 pb-4">
					<div className="font-semibold pb-2 text-sm">
						What will you be using Canva for?
					</div>

					<Select>
						<SelectTrigger className="w-1/2">
							<SelectValue placeholder="Select an option" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value="smb">Small Business</SelectItem>
								<SelectItem value="student">Student</SelectItem>
								<SelectItem value="teacher">Teacher</SelectItem>
								<SelectItem value="lc">Large Company</SelectItem>
								<SelectItem value="charity">Non profit or charity</SelectItem>
								<SelectItem value="Personal">Personal</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				{/* Language */}
				<div className="mt-5 border-gray-200 border-b-2 pt-4 pb-4">
					<div className="font-semibold pb-2 text-sm">Language</div>
					<Select>
						<SelectTrigger className="w-1/2">
							<SelectValue placeholder="Select an option" />
						</SelectTrigger>
						<SelectContent className="relative">
							<div className="fixed top-0 left-0 right-0 z-10 bg-white flex items-center pl-3 pr-2 py-2">
								<Search size={18} className="text-gray-500" />{" "}
								{/* Search icon */}
								<Input
									type="text"
									placeholder="Search..."
									className="w-full ml-2"
									value={searchQuery}
									onChange={handleInputChange}
									ref={inputRef} // Reference to the input element
								/>
							</div>
							<div className="mt-12">
								<SelectGroup>
									{filteredOptions.length > 0 ? (
										filteredOptions.map((framework) => (
											<SelectItem key={framework.value} value={framework.value}>
												{framework.label}
											</SelectItem>
										))
									) : (
										<div className="text-gray-500">No option found</div>
									)}
								</SelectGroup>
							</div>
						</SelectContent>
					</Select>
				</div>
			</div>
		</div>
	);
};

export default Account;
