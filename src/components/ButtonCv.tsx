import React from "react";

function ButtonCv() {
	return (
		<div>
			<a
				className=" bg-green-600 hover:bg-green-400 py-1 px-3 rounded-md text-slate-100 inline-block"
				href="/AlanCV_2024.pdf"
				download
			>
				Download Cv
			</a>
		</div>
	);
}

export default ButtonCv;
