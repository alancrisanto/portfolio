import { useState, useEffect } from "react";
import ProjectsGallery from "../components/ProjectsGallery";
import { supabase } from "../supabase/client"; // Asegúrate de que tu archivo supabase/client esté bien configurado

function Projects() {
	const [projects, setProjects] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProjects = async () => {
			const { data, error } = await supabase.from("projects").select();
			if (error) {
				setError("Error fetching projects");
				console.error(error);
			} else {
				setProjects(data || []);
			}
		};

		fetchProjects();
	}, []);

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<div className="text-slate-100">
			<h2 className="text-5xl font-semibold text-center py-16">Projects</h2>
			<div className="px-2">
				<ProjectsGallery projects={projects} />
			</div>
		</div>
	);
}

export default Projects;
