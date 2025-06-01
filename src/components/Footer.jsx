export function Footer() {
	return (
		<footer className="ropacity-80 m-4 min-[375px]:pl-4 md:pl-0 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center">
			<div className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4">
				<span className="text-sm text-yellow-200/90 sm:text-center">
					© 2025{" "}
					<a
						href=""
						className="hover:underline"
					>
						Isaac Hernandez
					</a>
				</span>
				<ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white/90 sm:mt-0">
					<li>
						<a
							href="#about"
							className="hover:underline me-4 md:me-6"
						>
							Sobre mi
						</a>
					</li>
					<li>
						<a
							href="mailto:lluancethglez@gmail.com"
							className="hover:underline"
						>
							Contacto
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
