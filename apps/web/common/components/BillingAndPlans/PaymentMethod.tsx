const PaymentMethod = () => {
	return (
		<div className="flex justify-center w-full ">
			<div className="flex flex-col justify-center w-1/2">
				<div className="font-semibold text-lg">Billing Plans</div>
				<div className="font-semibold text-lg pt-4 pb-4">
					Payment Method for your Team: Personal
				</div>
				<div>
					<button className="underline text-blue-500">
						Add a payment method
					</button>{" "}
					so you can purchase premium images and vectors for ₱50 a piece.
				</div>
				<div className="pt-4">
					Canva credits
					<div className="pt-1">You have 0 Canva credits.</div>
				</div>
			</div>

			
		</div>
	);
};
export default PaymentMethod;
