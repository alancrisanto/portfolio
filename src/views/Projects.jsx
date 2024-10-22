import { useState, useEffect } from "react";
import ProjectsGallery from "../components/ProjectsGallery";
import { supabase } from "../supabase/client";
import styles from "./loader.module.css";

function Projects() {
	const [projects, setProjects] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProjects = async () => {
			const { data, error } = await supabase.from("projects").select();
			if (error) {
				setError("Error fetching projects");
				console.error(error);
			} else {
				setProjects(data || []);
			}
			setLoading(false);
		};

		fetchProjects();
	}, []);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="terminal-loader border border-gray-800 bg-gray-900 text-green-500 font-mono text-base p-6 w-60 mx-auto shadow-lg rounded relative overflow-hidden box-border">
					<div className="terminal-header absolute top-0 left-0 right-0 h-8 bg-gray-800 rounded-t p-1 box-border">
						<div className="terminal-title float-left leading-6 text-gray-300">Status</div>
						<div className="terminal-controls float-right">
							<div className="control inline-block w-2.5 h-2.5 mx-1 rounded-full bg-gray-600 control-close"></div>
							<div className="control inline-block w-2.5 h-2.5 mx-1 rounded-full bg-yellow-500 control-minimize"></div>
							<div className="control inline-block w-2.5 h-2.5 mx-1 rounded-full bg-green-500 control-maximize"></div>
						</div>
					</div>
					<div className={styles.text}>Loading...</div>
				</div>
			</div>
		);
	}

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
