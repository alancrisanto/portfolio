import React from "react";
import ImageGallery from "../components/Image_Gallery";

function Projects() {
	return (
		<div className="text-slate-100">
			<h2 className="text-5xl font-semibold text-center py-16">Projects</h2>
			<div className="px-2">
				<ImageGallery />
			</div>
		</div>
	);
}

export default Projects;
