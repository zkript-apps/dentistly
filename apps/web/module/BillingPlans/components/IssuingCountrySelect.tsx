// IssuingCountrySelect.js
import React from "react";
import {
	ChevronDownIcon,
	Cloud,
	CreditCard,
	Keyboard,
	LifeBuoy,
	LogOut,
	Mail,
	MessageSquare,
	Plus,
	PlusCircle,
	Settings,
	User,
	UserPlus,
	Users,
} from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/common/components/shadcn/ui/dropdown-menu";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/common/components/shadcn/ui/button";

const IssuingCountrySelect = () => {
	return (
		<div className="w-full pb-4">
			<div className="font-semibold text-xs pb-2">Issuing country</div>

			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<div className="flex">
						<div className="flex-none w-full">
							<Button
								variant="outline"
								className="w-full font-normal text-gray-400 justify-between" // Adjusted justify property
							>
								<span>Select an option</span> {/* Added a span for the text */}
								<div className="flex items-center">
									{" "}
									<ChevronDownIcon />
								</div>
							</Button>
						</div>
					</div>
				</DropdownMenuTrigger>
				<div className="flex w-full bg-white">
					<DropdownMenuContent>
						<DropdownMenuSeparator />
						<DropdownMenuGroup className="w-full z-20">
							<div className="w-full">
								<DropdownMenuItem className="w-full flex items-center">
									<User className="w-full h-4" />
									<span>Profile</span>
								</DropdownMenuItem>
							</div>
							<DropdownMenuItem className="w-full flex items-center">
								<CreditCard className="mr-2 h-4" />
								<span>Billing</span>
								<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem className="w-full flex items-center">
								<Settings className="mr-2 h-4" />
								<span>Settings</span>
								<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem className="w-full flex items-center">
								<Keyboard className="mr-2 h-4" />
								<span>Keyboard shortcuts</span>
								<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem className="w-full flex items-center">
								<Users className="mr-2 h-4" />
								<span>Team</span>
							</DropdownMenuItem>
							<DropdownMenuSub>
								<DropdownMenuSubTrigger>
									<UserPlus className="mr-2 h-4" />
									<span>Invite users</span>
								</DropdownMenuSubTrigger>
								<DropdownMenuPortal>
									<DropdownMenuSubContent>
										<DropdownMenuItem className="w-full flex items-center">
											<Mail className="mr-2 h-4" />
											<span>Email</span>
										</DropdownMenuItem>
										<DropdownMenuItem className="w-full flex items-center">
											<MessageSquare className="mr-2 h-4" />
											<span>Message</span>
										</DropdownMenuItem>
										<DropdownMenuSeparator />
										<DropdownMenuItem className="w-full flex items-center">
											<PlusCircle className="mr-2 h-4" />
											<span>More...</span>
										</DropdownMenuItem>
									</DropdownMenuSubContent>
								</DropdownMenuPortal>
							</DropdownMenuSub>
							<DropdownMenuItem className="w-full flex items-center">
								<Plus className="mr-2 h-4" />
								<span>New Team</span>
								<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="w-full flex items-center"></DropdownMenuItem>
						<DropdownMenuItem className="w-full flex items-center">
							<LifeBuoy className="mr-2 h-4" />
							<span>Support</span>
						</DropdownMenuItem>
						<DropdownMenuItem className="w-full flex items-center" disabled>
							<Cloud className="mr-2 h-4" />
							<span>API</span>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="w-full flex items-center">
							<LogOut className="mr-2 h-4" />
							<span>Log out</span>
							<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</div>
			</DropdownMenu>
		</div>
	);
};

export default IssuingCountrySelect;
