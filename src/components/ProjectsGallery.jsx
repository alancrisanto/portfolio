import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ButtonSmall from "./ButtonSmall";

function ProjectsGallery({ projects }) {
	console.log("project", projects);
	const [activeTab, setActiveTab] = useState("all");
	const filteredProjects = projects.filter((project) => activeTab === "all" || project.category === activeTab);

	return (
		<div className="container mx-auto p-4">
			<div className="w-full">
				<div className="mb-8 flex gap-4 items-center justify-evenly">
					<div
						onClick={() => setActiveTab("all")}
						className={`${
							activeTab === "all" ? "bg-green-600 text-white px-4" : "text-gray-200"
						} cursor-pointer text-xs md:text-xl`}
					>
						ALL
					</div>
					<div
						onClick={() => setActiveTab("python")}
						className={`${
							activeTab === "python" ? "bg-green-600 text-white px-4" : "text-gray-200"
						} cursor-pointer text-xs md:text-xl`}
					>
						PYTHON
					</div>
					<div
						onClick={() => setActiveTab("react")}
						className={`${
							activeTab === "react" ? "bg-green-600 text-white px-4" : "text-gray-200"
						} cursor-pointer text-xs md:text-xl`}
					>
						REACT/NEXT
					</div>
					<div
						onClick={() => setActiveTab("node")}
						className={`${
							activeTab === "node" ? "bg-green-600 text-white px-4" : "text-gray-200"
						} cursor-pointer text-xs md:text-xl`}
					>
						NODE
					</div>
					<div
						onClick={() => setActiveTab("javascript")}
						className={`${
							activeTab === "javascript" ? "bg-green-600 text-white px-4" : "text-gray-200"
						} cursor-pointer text-xs md:text-xl`}
					>
						JAVASCRIPT
					</div>
				</div>
			</div>
			<motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4" layout>
				<AnimatePresence>
					{filteredProjects.map((project) => (
						<motion.div
							key={project.id}
							layout
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5 }}
							className="relative overflow-hidden rounded-lg shadow-md group"
						>
							<div className="w-full h-full relative overflow-hidden">
								<img
									src={project.image_url}
									alt={project.title}
									className="w-full h-full transition-transform duration-300 group-hover:scale-110"
								/>
								{/* Hover Overlay */}
								<div className="absolute inset-0 bg-slate-800 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
									<div className="text-center">
										<h2 className="text-xl font-bold mb-6">{project.title}</h2>
										<ButtonSmall text="View Project" link={project.project_url} />
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</AnimatePresence>
			</motion.div>
		</div>
	);
}

export default ProjectsGallery;
