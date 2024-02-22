"use client"
import React, { useState } from "react";

const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
	return (
		<div className="modal">
			<div className="modal-content">
				<span className="close" onClick={onClose}>
					&times;
				</span>
				<p>This is a modal!</p>
			</div>
		</div>
	);
};

const ButtonToModal: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div>
			<button onClick={openModal}>Open Modal</button>
			{isModalOpen && <Modal onClose={closeModal} />}
		</div>
	);
};

export default ButtonToModal;
