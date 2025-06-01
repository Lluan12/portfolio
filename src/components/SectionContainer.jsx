export function SectionContainer({ children, className, id }) {
	return (
		<section
			id={id}
			className={`w-full mx-auto lg:w-[800px] ${className}`}>
			{children}
		</section>
	);
}
