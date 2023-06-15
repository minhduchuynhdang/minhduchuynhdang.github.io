type DotButtonProps = {
	selected: boolean;
	onClick: () => void;
};

export const DotButton = ({ selected, onClick }: DotButtonProps) => {
	return (
		<button
			className={'embla__dot m-0 h-3 w-3 cursor-pointer rounded-full border-2 border-solid border-black p-0 outline-0'.concat(
				selected ? ' bg-white' : ''
			)}
			type='button'
			onClick={onClick}
			aria-label='Chuyển Slide'
		/>
	);
};
