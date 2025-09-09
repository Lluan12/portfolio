import AngularIcon from "../components/icons/Angular";
import TailwindIcon from "../components/icons/Tailwind";
import FirebaseIcon from "../components/icons/Firebase";
import ExpressIcon from "../components/icons/Expressjs";
import TypescriptIcon from "../components/icons/TypeScript";
import MongoDBIcon from "../components/icons/Mongo";
import DartIcon from "../components/icons/Dart";
import FlutterIcon from "../components/icons/Flutter";
import ReactIcon from "../components/icons/React";

const TAGS = {
	ANGULAR: {
		name: "Angular",
		class: "bg-[#dd0031]/30 from-blue-500 to-purple-500 text-white",
		icon: AngularIcon,
	},
	TAILWIND: {
		name: "Tailwind",
		class: "bg-[#003159] text-white",
		icon: TailwindIcon,
	},
	FIREBASE: {
		name: "Firebase",
		class: "bg-[#dd2c00]/30 text-white",
		icon: FirebaseIcon,
	},
	EXPREES: {
		name: "Express",
		class: "bg-gray-900/80",
		icon: ExpressIcon,
	},
	TYPESCRIPT: {
		name: "TypeScript",
		class: "bg-blue-900/40",
		icon: TypescriptIcon,
	},
	MONGODB: {
		name: "MongoDB",
		class: "bg-[#001e2b]",
		icon: MongoDBIcon,
	},
	DART: {
		name: "Dart",
		class: "bg-[#001e2b]",
		icon: DartIcon,
	},
	FLUTTER: {
		name: "Flutter",
		class: "bg-[#001e2b]",
		icon: FlutterIcon,
	},
	REACT: {
		name: "React",
		class: "bg-[#001e2b]",
		icon: ReactIcon,
	},
};

const PROJECTS = [
	{
		id: 1,
		title: "Book Note",
		description:
			"Aplicación web con finalidad para crear, editar y almacenar notas. Se empleo un sistema de login utilizando firebase, se creo una API con express para manejar el guardado de las notas utilizando mongodb.",
		link: "",
		frontGithub: "https://github.com/Lluan12/book-note",
		backendGithub: "https://github.com/Lluan12/api-book-note",
		image: "/assets/book-note.webp",
		tags: [
			TAGS.ANGULAR,
			TAGS.TAILWIND,
			TAGS.FIREBASE,
			TAGS.EXPREES,
			TAGS.TYPESCRIPT,
			TAGS.MONGODB,
		],
	},
	{
		id: 2,
		title: "STH - Soluciones Topograficas Hernandez",
		description:
			"Aplicación web informativo de los servicios ofrecidos por un ingniero civil especializado en topografia. Se empleo un sistema de login utilizando la autenticacion por medio de JWT para permitir de manera dinamica el acceso al sisema y poder dar registro de los proyectos trabajados por medio de express para la creación de la lógica.",
		link: "https://sth-hernandez-topografia.web.app/home",
		frontGithub:
			"https://github.com/Lluan12/soluciones-topograficas-hernandez",
		backendGithub: "https://github.com/Lluan12/api-sth",
		image: "/assets/sth.webp",
		tags: [
			TAGS.ANGULAR,
			TAGS.TAILWIND,
			TAGS.EXPREES,
			TAGS.TYPESCRIPT,
			TAGS.MONGODB,
		],
	},
	{
		id: 3,
		title: "AppGallery",
		description:
			"Aplicacion movil de registro y manejo de eventos. Se utilizo firebase para la implementacion de login, y almacenamiento de los datos",
		link: "",
		frontGithub: "https://github.com/PaulOchoa952/appGallery_01",
		backendGithub: "",
		image: "/assets/appGallery.webp",
		tags: [TAGS.DART, TAGS.FLUTTER, TAGS.FIREBASE],
	},
	{
		id: 4,
		title: "Prueba Tecnica JR React",
		description:
			"Pequeña prueba tecnica desarrollado en React junto con la libreria MUI para la utilizacion de components. Ademas de un diseño sencillo con responsive",
		link: "https://prueba-seven-sigma.vercel.app/",
		frontGithub: "",
		backendGithub: "",
		image: "/assets/react-app.webp",
		tags: [TAGS.REACT, TAGS.TAILWIND],
	},
	{
		id: 5,
		title: "Gifs App",
		description:
			"Sitio de Gifs el cual permite realizar busquedas o ver los que se encuentran en tendencia. Se utilizo una API externa para la recuperacion de los Gifs, se implemento un historial de busqueda y persistencia de los datos ya buscados utilizando Storage.",
		link: "https://gifs-app-orcin.vercel.app/dashboard/trending",
		frontGithub: "https://github.com/Lluan12/gifs-app",
		backendGithub: "",
		image: "/assets/appgifs.webp",
		tags: [TAGS.ANGULAR, TAGS.TAILWIND],
	},
];

export function Projects() {
	return (
		<div className="flex flex-col gap-y-16">
			{PROJECTS.map(
				({
					id,
					title,
					description,
					tags,
					image,
					link,
					frontGithub,
					backendGithub,
				}) => {
					return (
						<article
							key={id}
							className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"
						>
							<div className="w-full md:w-1/2 my-auto">
								<div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
									<img
										alt={title}
										className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
										src={image}
									/>
								</div>
							</div>

							<div className="w-full md:w-1/2 md:max-w-lg mt-4 md:mt-0">
								<h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
									{title}
								</h3>
								<div className="flex flex-wrap mt-2">
									<ul className="flex flex-row flex-wrap mb-2 gap-x-2 gap-y-4">
										{tags.map((tag) => {
											return (
												<li key={tag.name}>
													<span
														className={`flex gap-x-2 rounded-full text-xs py-1 px-2 ${tag.class}`}
													>
														<tag.icon className="size-4" />
														{tag.name}
													</span>
												</li>
											);
										})}
									</ul>
									<div className="mt-2 text-gray-700 dark:text-gray-400">
										{description}
									</div>
									<footer className="flex items-end justify-start mt-4 gap-x-4">
										{frontGithub != "" ? (
											<a
												target="_blank"
												href={frontGithub}
												role="link"
												className="inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition dark:text-white dark:bg-gray-800 border dark:border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-2 active:bg-black"
											>
												<svg
													className="size-6"
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													strokeWidth="2"
													stroke="currentColor"
													fill="none"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<path
														stroke="none"
														d="M0 0h24v24H0z"
														fill="none"
													></path>
													<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
												</svg>
												{backendGithub == ""
													? "GitHub"
													: "Front"}
											</a>
										) : (
											""
										)}

										{backendGithub != "" ? (
											<a
												target="_blank"
												href={backendGithub}
												role="link"
												className="inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition dark:text-white dark:bg-gray-800 border dark:border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-2 active:bg-black"
											>
												<svg
													className="size-6"
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													strokeWidth="2"
													stroke="currentColor"
													fill="none"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<path
														stroke="none"
														d="M0 0h24v24H0z"
														fill="none"
													></path>
													<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
												</svg>
												Back
											</a>
										) : (
											""
										)}

										{link != "" ? (
											<a
												target="_blank"
												href={link}
												role="link"
												className="inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition dark:text-white dark:bg-gray-800 border dark:border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-2 active:bg-black"
											>
												<svg
													className="size-4"
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
													<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
												</svg>
												Preview
											</a>
										) : (
											""
										)}
									</footer>
								</div>
							</div>
						</article>
					);
				}
			)}
		</div>
	);
}
