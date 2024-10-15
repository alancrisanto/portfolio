"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
	{
		id: 1,
		category: "all",
		image: "/certificates/responsive_design_freecodecamp.webp?height=300&width=400",
		alt: "Responsive design across devices",
	},
	{
		id: 2,
		category: "ruby",
		image: "/certificates/responsive_design_freecodecamp.webp?height=300&width=400",
		alt: "Various food dishes",
	},
	{
		id: 3,
		category: "react",
		image: "/certificates/responsive_design_freecodecamp.webp?height=300&width=400",
		alt: "Circular infographic",
	},
	{
		id: 4,
		category: "javascript",
		image: "/certificates/responsive_design_freecodecamp.webp?height=300&width=400",
		alt: "Purple-themed landing page",
	},
	{
		id: 5,
		category: "ruby",
		image: "/certificates/responsive_design_freecodecamp.webp?height=300&width=400",
		alt: "Numerical counter over cityscape",
	},
	{
		id: 6,
		category: "react",
		image: "/certificates/responsive_design_freecodecamp.webp?height=300&width=400",
		alt: "Teal mobile app screens",
	},
	{
		id: 7,
		category: "javascript",
		image: "/certificates/responsive_design_freecodecamp.webp?height=300&width=400",
		alt: "Data visualizations on devices",
	},
	{
		id: 8,
		category: "ruby",
		image: "/certificates/responsive_design_freecodecamp.webp?height=300&width=400",
		alt: "Dashboard interface",
	},
	{
		id: 9,
		category: "react",
		image: "/certificates/responsive_design_freecodecamp.webp?height=300&width=400",
		alt: "Person with text overlay",
	},
];

function ImageGallery() {
	const [activeTab, setActiveTab] = useState("all");

	const filteredProjects = projects.filter((project) => activeTab === "all" || project.category === activeTab);

	return (
		<div className="container mx-auto p-4">
			<div className="w-full">
				<div className="mb-8 flex gap-4 items-center justify-evenly">
					{/* Updated to use onClick for each tab */}
					<div
						onClick={() => setActiveTab("all")}
						className={`${
							activeTab === "all" ? "bg-green-600 text-white px-4" : "text-gray-200"
						} cursor-pointer text-xs md:text-xl`}
					>
						ALL
					</div>
					<div
						onClick={() => setActiveTab("ruby")}
						className={`${
							activeTab === "ruby" ? "bg-green-600 text-white px-4" : "text-gray-200"
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
							className="aspect-square relative overflow-hidden rounded-lg shadow-md"
						>
							<div className="w-full h-full relative overflow-hidden">
								<img
									src={project.image}
									alt={project.alt}
									className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
								/>
							</div>
						</motion.div>
					))}
				</AnimatePresence>
			</motion.div>
		</div>
	);
}

export default ImageGallery;
