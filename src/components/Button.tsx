import React from "react";
import { Link } from "react-router-dom";

function Button({ text, link }) {
	return (
		<div>
			<Link
				className="inline-block font-bold bg-green-600 hover:bg-green-500 proportional-nums py-3 px-4 rounded-full border border-slate-100 text-slate-100 shadow-lg shadow-green-500/50 tracking-widest"
				to={link}
			>
				{text}
			</Link>
		</div>
	);
}

export default Button;
