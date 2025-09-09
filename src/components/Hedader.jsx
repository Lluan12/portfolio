export function Header() {
	return (
		<header className="fixed sm:top-0 sm:z-10 flex items-center justify-center w-full mx-auto mt-2">
			<nav className="bg-white border-gray-200 rounded-full px-6 py-2.5 dark:bg-slate-950">
				<div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">
					<div className="justify-between items-center w-auto lg:order-1">
						<ul className="flex font-medium space-x-8 mt-0 text-sm md:text-lg">
							<li>
								<a
									href="#"
									className="text-slate-100"
									aria-current="page"
								>
									Incio
								</a>
							</li>
							<li>
								<a
									className="hover:text-slate-100 text-slate-100/80"
									href="#about"
								>
									Sobre mi
								</a>
							</li>
							<li>
								<a
									href="#experience"
									className="hover:text-slate-100 text-slate-100/80"
								>
									Experiencia
								</a>
							</li>
							<li>
								<a
									href="#projects"
									className="hover:text-slate-100 text-slate-100/80"
								>
									Proyectos
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
