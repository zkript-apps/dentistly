import { UserCircle } from "lucide-react";

const name = () => {
	return (
		<div className="flex items-center border-b-2 border-gray-200 pt-4 pb-4">
			<UserCircle size={90} strokeWidth={1.25} color="gold" />
			<div className="flex flex-1 flex-col justify-center">
				<div className="pl-3 pb-3 font-semibold">Upload your profile photo</div>
				<div className="pl-3">
					This helps your teammates recognize you in Canva.
				</div>
				<div></div>
			</div>
			<button className="flex-none ml-5 w-36 h-10 p-2 rounded bg-gray-200 font-semibold">
				Upload photo
			</button>
		</div>
	);
};
export default name;
