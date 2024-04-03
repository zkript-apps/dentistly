import { Button } from "@/common/components/shadcn/ui/button";

const Team = () => {
	return (
		<div>
			<div className="font-semibold text-lg pb-4">Team</div>
			<Button variant="ghost" className="font-semibold text-sm ">
				Create a new team
			</Button>
		</div>
	);
};
export default Team;
