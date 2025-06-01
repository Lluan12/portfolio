export function ExperienceItem({ title, description, date }) {
	return (
		<>
			<div className="absolute size-3 bg-yellow-200 rounded-full mt-1.5 -start-1.5 border border-yellow-200/90 "></div>
			<h3 className="text-lg font-semibold text-yellow-200">{title}</h3>
			<time className="mb-4 text-sm font-normal leading-none text-sky-200/80">
				{date}
			</time>
			<p className="mb-1 text-base font-normal dark:text-gray-200">
				{description}
			</p>
		</>
	);
}
