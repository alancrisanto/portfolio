import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
	{
		id: 1,
		category: "python",
		image: "/certificates/responsive_design_freecodecamp.webp?height=300&width=400",
		alt: "Responsive design across devices",
		title: "Infographic Design Python 01",
		link: "https://www.example.com/project3",
	},
	{
		id: 2,
		category: "react",
		image: "/certificates/responsive_design_freecodecamp.webp?height=300&width=400",
		alt: "Various food dishes",
		title: "Infographic React 02",
		link: "https://www.example.com/project3",
	},
	{
		id: 3,
		category: "react",
		image: "/certificates/responsive_design_freecodecamp.webp?height=300&width=400",
		alt: "Circular infographic",
		title: "Infographic react 03",
		link: "https://www.example.com/project3",
	},
	{
		id: 4,
		category: "javascript",
		image: "/certificates/responsive_design_freecodecamp.webp?height=300&width=400",
		alt: "Purple-themed landing page",
		title: "Infographic JS 04",
		link: "https://www.example.com/project3",
	},
	{
		id: 5,
		category: "python",
		image: "/certificates/responsive_design_freecodecamp.webp?height=300&width=400",
		alt: "Numerical counter over cityscape",
		title: "Infographic Python 05",
		link: "https://www.example.com/project3",
	},
	{
		id: 6,
		category: "react",
		image: "/certificates/responsive_design_freecodecamp.webp?height=300&width=400",
		alt: "Teal mobile app screens",
		title: "Infographic React 06",
		link: "https://www.example.com/project3",
	},
	{
		id: 7,
		category: "javascript",
		image: "/certificates/responsive_design_freecodecamp.webp?height=300&width=400",
		alt: "Data visualizations on devices",
		title: "Infographic JS 07",
		link: "https://www.example.com/project3",
	},
	{
		id: 8,
		category: "python",
		image: "/certificates/responsive_design_freecodecamp.webp?height=300&width=400",
		alt: "Dashboard interface",
		title: "Infographic Python 08",
		link: "https://www.example.com/project3",
	},
	{
		id: 9,
		category: "react",
		image: "/certificates/responsive_design_freecodecamp.webp?height=300&width=400",
		alt: "Person with text overlay",
		title: "Infographic React 09",
		link: "https://www.example.com/project3",
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
							className="aspect-square relative overflow-hidden rounded-lg shadow-md group"
						>
							<div className="w-full h-full relative overflow-hidden">
								<img
									src={project.image}
									alt={project.alt}
									className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
								/>
								{/* Hover Overlay */}
								<div className="absolute inset-0 bg-white flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
									<div className="text-center">
										<h2 className="text-xl font-bold mb-2">{project.title}</h2>
										<a
											href={project.link}
											className="text-blue-500 underline"
											target="_blank"
											rel="noopener noreferrer"
										>
											View Project
										</a>
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
