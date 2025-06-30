import { Badge } from "../components/badge";
import { SocialPill } from "../components/SocialPill";
import { Experience } from "../components/Experience";
import { SectionContainer } from "../components/SectionContainer";
import { Projects } from "../components/Projects";
import { About } from "../components/About";
import LinkedInIcon from "../components/icons/LinkedIn";
import GitHubIcon from "../components/icons/GitHub";
import MailIcon from "../components/icons/Mail";
import Briefcase from "../components/icons/Briefcase";
import CodeIcon from "../components/icons/Code";
import CheckIcon from "../components/icons/Check";

export function Home() {
	return (
		<main className="px-4">
			<SectionContainer
				id="top"
				className="pt-44 pb-32"
			>
				<div className="flex gap-4 mb-4">
					<img
						className="rounded-full w-16 h-16"
						src="assets/image.png"
						alt="lluan photo"
					/>
					<a
						href="https://linkedin.com/in/isaac-hernandez-gonzalez-b22664231"
						className="flex items-center transition md:justify-center md:hover:scale-105"
						target="_blank"
					>
						<Badge>Disponible para trabajar</Badge>
					</a>
				</div>

				<h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
					Hola, soy Isaac Hernandez
				</h1>
				<h2 className="text-xl lg:text-2xl text-wrap max-w-[700px]">
					<span>+1 año de experiencia</span>.{" "}
					<span className="text-yellow-200/90">
						Desarrollador Web Full Stack
					</span>
					. Comprometido con el aprendizaje continuo y la mejora
					constante.
				</h2>
				<nav className="flex gap-4 mt-8 flex-wrap">
					<SocialPill href="https://linkedin.com/in/isaac-hernandez-gonzalez-b22664231">
						<LinkedInIcon className="size-4 md:size-6" />
						LinkedIn
					</SocialPill>
					<SocialPill href="https://github.com/Lluan12">
						<GitHubIcon className="size-4 md:size-6" />
						GitHub
					</SocialPill>
					<SocialPill href="mailto:lluancethglez@gmail.com">
						<MailIcon className="size-4 md:size-6" />
						lluancethglez@gmail.com
					</SocialPill>
				</nav>
			</SectionContainer>

			<SectionContainer
				id="about"
				className="py-20"
			>
				<h2 className="text-3xl font-semibold mb-6 flex gap-x-3 items-center">
					<CheckIcon className="size-7 gap-x-2" />
					Sobre mí
				</h2>
				<About />
			</SectionContainer>

			<SectionContainer id="experience">
				<h2 className="text-3xl font-semibold mb-6 flex gap-x-3 items-center">
					<Briefcase className="size-7 gap-x-2" />
					Experiencia
				</h2>
				<Experience />
			</SectionContainer>

			<SectionContainer
				id="projects"
				className="py-20"
			>
				<h2 className="text-3xl font-semibold mb-6 flex gap-x-3 items-center">
					<CodeIcon className="size-7 gap-x-2" />
					Proyectos
				</h2>
				<Projects />
			</SectionContainer>
		</main>
	);
}
