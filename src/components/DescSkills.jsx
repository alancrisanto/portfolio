import React from "react";

function DescSkills() {
	return (
		<div className="flex flex-wrap gap-12 justify-center">
			<div className="flex flex-col gap-3 items-center w-52">
				<img className="max-w-32" src="assets/computer.svg" alt="" />
				<h3 className=" text-2xl font-semibold">Responsive</h3>
				<p className="text-center">My layouts will work on any device, big or small.</p>
			</div>
			<div className="flex flex-col gap-3 items-center w-52">
				<img className="max-w-32" src="assets/rocket.svg" alt="" />
				<h3 className=" text-2xl font-semibold">Intuitive</h3>
				<p className="text-center">Strong preference for easy to use, intuitive UX/UI.</p>
			</div>
			<div className="flex flex-col gap-3 items-center w-52">
				<img className="max-w-32" src="assets/light.svg" alt="" />
				<h3 className=" text-2xl font-semibold">Dynamic</h3>
				<p className="text-center">Websites don't have to be static, I love making pages come to life.</p>
			</div>
		</div>
	);
}

export default DescSkills;
