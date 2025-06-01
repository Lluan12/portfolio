export function About() {
	return (
		<article className="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row">
			<div className="text-pretty order-2">
				<p className="mb-4">
					Me llamo Isaac. tengo 24 años y soy de Nayarit.
					Termine mis estudios como{" "}
					<strong className="text-yellow-100">
						Ingniero en Sistemas Computacionales
					</strong>
					. Me gusta participar en los proyectos como rol de programador FullStack, para ofrecer aplicaciones web completas, desde la interfaz hasta la lógica de negocio.
				</p>
				<p>
					Me destaco por mi responsabilidad, conocimientos y trabajo en equipo busco integrarme a un equipo de desarrollo donde pueda{" "}
					<strong className="text-yellow-100">
						continuar aprendiendo, aportar valor desde el primer día y crecer profesionalmente dentro del mundo tecnológico.
					</strong>
				</p>
			</div>
			<img
				width="200"
				height="200"
				src="/assets/perfil.jpg"
				alt="Isaac Hernandez"
				className="order-1 object-cover object-top w-64 h-full p-1 -rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20"
			/>
		</article>
	);
}
