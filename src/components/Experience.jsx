import { ExperienceItem } from "../components/ExperienceItem";

const EXPERIENCE = [
	{
		date: "Marzo 2024 - Septiembre 2024",
		title: "Desarrollador FullStack - Instituto Tecnológico de Tepic",
		description:
			"Desarrollé un módulo funciona para la plataforma de MiTec, utilizado por estudiantes y docentes del Instituto Tecnológico de Tepic para gestionar sesiones de asesoría académica.",
		link: "",
	},
];

export function Experience() {
	return (
		<>
			<ol className="relative border-s border-gray-200 ml-3 ">
				{EXPERIENCE.map((item, index) => {
					return (
						<li
							className="mb-10 ms-4"
							key={index}
						>
							<ExperienceItem {...item} />
						</li>
					);
				})}
			</ol>
		</>
	);
}
