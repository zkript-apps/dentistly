"use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDown, UserCircle } from "lucide-react";
import { Button } from "../ui/Button";

const Settings = () => {
	function classNames(...classes: string[]) {
		return classes.filter(Boolean).join(" ");
	}

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
						className="flex-none ml-5 w-36 h-10 p-2 font-semibold"
					>
						Upload photo
					</Button>
				</div>

				<div className="mt-5 border-gray-200 border-b-2 pt-4 pb-4">
					<div className="font-semibold">Name</div>

					<div className="flex pt-2">
						<div className="w-full">
							<input
								type="text"
								name="name"
								id="name"
								className="block w-full border-gray-300 rounded border-2 py-1.5 text-gray-900 placeholder-gray-400 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6"
								placeholder="Ex. John Patrick Madrigal"
							/>
						</div>
						<div className="flex ml-4">
							<Button
								variant="default"
								className=" mr-2 w-24 h-10 p-2 font-semibold"
							>
								Cancel
							</Button>
							<Button
								variant="secondary"
								className=" w-24 h-10 p-2 font-semibold "
							>
								Save
							</Button>
						</div>
					</div>
				</div>

				<div className="mt-5 border-gray-200 border-b-2 pt-4 pb-4">
					<div className="font-semibold">Email address</div>
					<div className="flex pt-2 justify-center items-center">
						<div className="w-full">jp.madrigal07@gmail.com</div>

						<Button
							variant="default"
							className="ml-5 h-10 w-20 p-2 font-semibold"
						>
							Edit
						</Button>
					</div>
				</div>

				<div className="mt-5 border-gray-200 border-b-2 pt-4 pb-4">
					<div className="font-semibold pb-2">
						What will you be using Canva for?
					</div>

					<Menu as="div" className="w-1/2 relative inline-block text-left">
						<div>
							<Menu.Button className="inline-flex w-full bg-white px-3 py-2 border-gray-300 rounded border-2 text-gray-900 hover:bg-gray-200 justify-between items-center">
								<span>Small business</span>
								<ChevronDown className="h-5 w-5" />
							</Menu.Button>
						</div>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="absolute w-full bottom-0 z-10 mb-12 overflow-y-scroll rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
								<div className="py-1">
									<Menu.Item>
										{({ active }) => (
											<Button
												variant="default"
												className={classNames(
													active ? "bg-gray-100 text-black" : "text-black",
													"block px-4 py-2 text-sm w-full text-left"
												)}
											>
												Large Company
											</Button>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<Button
												variant="default"
												className={classNames(
													active ? "bg-gray-100 text-black" : "text-black",
													"block px-4 py-2 text-sm w-full text-left"
												)}
											>
												Student
											</Button>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<Button
												variant="default"
												className={classNames(
													active ? "bg-gray-100 text-black" : "text-black",
													"block px-4 py-2 text-sm w-full text-left"
												)}
											>
												Personal
											</Button>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<Button
												variant="default"
												className={classNames(
													active ? "bg-gray-100 text-black" : "text-black",
													"block px-4 py-2 text-sm w-full text-left"
												)}
											>
												Teacher
											</Button>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>

				{/* Language */}
				<div className="mt-5 border-gray-200 border-b-2 pt-4 pb-4">
					<div className="font-semibold pb-2">Language</div>

					<Menu as="div" className="w-1/2 relative inline-block text-left">
						<div>
							<Menu.Button className="inline-flex w-full bg-white px-3 py-2 border-gray-300 rounded border-2 text-gray-900  hover:bg-gray-200 justify-between items-center">
								<span>English (US)</span>
								<ChevronDown className="h-5 w-5" />
							</Menu.Button>
						</div>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="absolute w-full bottom-0 z-10 mb-12 overflow-y-scroll rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
								<div className="py-1">
									<Menu.Item>
										{({ active }) => (
											<Button
												variant="default"
												className={classNames(
													active ? "bg-gray-100 text-black" : "text-black",
													"block px-4 py-2 text-sm w-full text-left"
												)}
											>
												Arabic
											</Button>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<Button
												variant="default"
												className={classNames(
													active ? "bg-gray-100 text-black" : "text-black",
													"block px-4 py-2 text-sm w-full text-left"
												)}
											>
												Tagalog
											</Button>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<Button
												variant="default"
												className={classNames(
													active ? "bg-gray-100 text-black" : "text-black",
													"block px-4 py-2 text-sm w-full text-left"
												)}
											>
												Malay
											</Button>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<Button
												variant="default"
												className={classNames(
													active ? "bg-gray-100 text-black" : "text-black",
													"block px-4 py-2 text-sm w-full text-left"
												)}
											>
												Mandarin
											</Button>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<Button
												variant="default"
												className={classNames(
													active ? "bg-gray-100 text-black" : "text-black",
													"block px-4 py-2 text-sm w-full text-left"
												)}
											>
												Greek
											</Button>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			</div>
		</div>
	);
};

export default Settings;
