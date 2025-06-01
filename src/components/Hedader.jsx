import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export function Header() {
	const location = useLocation();
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const id = location.hash.replace("#", "");
		if (id) {
			const element = document.getElementById(id);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}

		const handleScroll = () => {
			const isScrolled = window.scrollY > 0;
			setScrolled(isScrolled);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [location]);


	return (
		<header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
			<nav className={`flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center ${scrolled ? "bg-gray-900": "bg-none"}`}>
				<NavLink
					className={`relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500`}
					to="#top"
				>
					Inicio
				</NavLink>
				<NavLink
					className={`relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500`}
					to="#about"
				>
					Sobre mi
				</NavLink>
				<NavLink
					className={`relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500`}
					to="#experience"
				>
					Experiencia
				</NavLink>
				<NavLink
					className={`relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500`}
					to="#projects"
				>
					Proyectos
				</NavLink>
				<NavLink
					className={`relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500`}
					to="mailto:lluancethglez"
				>
					Contacto
				</NavLink>
			</nav>
		</header>
	);
}
