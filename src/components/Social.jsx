import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Social() {
	return (
		<div className="flex gap-3 items-center text-2xl">
			<Link
				className="hover:text-green-400"
				to="https://github.com/alancrisanto"
				target="_blank"
				rel="noopener noreferer"
			>
				<FaGithub />
			</Link>
			<Link
				className="hover:text-green-400"
				to="https://www.linkedin.com/in/alancrisanto/"
				target="_blank"
				rel="noopener noreferer"
			>
				<FaLinkedin />
			</Link>
		</div>
	);
}

export default Social;
