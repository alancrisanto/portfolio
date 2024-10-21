import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ButtonSmall from "./ButtonSmall";

const projects = [
	{
		id: 1,
		category: "python",
		image: "/projects/recipes-rag.webp",
		alt: "",
		title: "Recipe Generator RAG",
		link: "https://huggingface.co/spaces/acrisvall/recipes-generator",
	},
	{
		id: 2,
		category: "node",
		image: "/projects/node-api.webp",
		alt: "node js api landing image",
		title: "NodeJs API",
		link: "https://project2-mqo5.onrender.com/",
	},
	{
		id: 3,
		category: "node",
		image: "/projects/star-wars.webp",
		alt: "Landing API",
		title: "Start Wars CRUD",
		link: "https://start-wars-quotes-crud.onrender.com/",
	},
	{
		id: 4,
		category: "javascript",
		image: "/projects/recipes-finder.webp",
		alt: "image of recipes landing page",
		title: "Landing Recipes",
		link: "https://alancrisanto.github.io/Recipes-finder/",
	},
	{
		id: 5,
		category: "javascript",
		image: "/projects/weather-preston.webp",
		alt: "weather app image",
		title: "Weather App",
		link: "https://alancrisanto.github.io/lesson-10/preston-10.html",
	},
	{
		id: 6,
		category: "javascript",
		image: "/projects/freecodecamp-form.webp",
		alt: "image of form",
		title: "Form",
		link: "https://codepen.io/alancrisanto/full/vYegqep",
	},

	{
		id: 7,
		category: "react",
		image: "/projects/search-bar.webp",
		alt: "Search Bar image",
		title: "Search Bar",
		link: "https://alancrisanto.github.io/react-search-bar/",
	},
	{
		id: 8,
		category: "react",
		image: "/projects/next-dashboard.webp",
		alt: "Dashboard interface",
		title: "Dashboard",
		link: "https://next-dashboard-d05y6budn-alancrisanto.vercel.app/dashboard",
	},
];

function ImageGallery() {
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
									src={project.image}
									alt={project.alt}
									className="w-full h-full transition-transform duration-300 group-hover:scale-110"
								/>
								{/* Hover Overlay */}
								<div className="absolute inset-0 bg-slate-800 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
									<div className="text-center">
										<h2 className="text-xl font-bold mb-6">{project.title}</h2>
										<ButtonSmall text="View Project" link={project.link} />
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

export default ImageGallery;
