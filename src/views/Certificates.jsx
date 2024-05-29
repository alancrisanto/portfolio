function Certificates() {
	return (
		<div className="grid  md:grid-cols-3 gap-4 px-6 py-16">
			<div className="grid gap-4">
				<div>
					<img className="h-auto max-w-full rounded-lg" src="byui_web_computer_programming.jpg" alt="byu certificate" />
				</div>
				<div>
					<img
						className=" h-auto max-w-full rounded-lg"
						src="Python_full_honors_Coursera.jpg"
						alt="ptyhon university of michigan certificate"
					/>
				</div>
				<div>
					<img
						className="h-auto max-w-full rounded-lg"
						src="responsive_design_freecodecamp.png"
						alt="freecodecamp responsive design certificate"
					/>
				</div>
			</div>
			<div className="grid gap-4">
				<div>
					<img className="h-auto max-w-full rounded-lg" src="byui_web_development.jpg" alt="byu certificate" />
				</div>
				<div>
					<img
						className="h-auto max-w-full rounded-lg"
						src="IBM_07_Data_Analysis_Python_Coursera.jpg"
						alt="ibm python analysis certificate"
					/>
				</div>
				<div>
					<img className="h-auto max-w-full rounded-lg" src="mongoDB_certificate.png" alt="mongodb certificate" />
				</div>
			</div>
			<div className="grid gap-4">
				<div>
					<img className="h-auto max-w-full rounded-lg" src="EF_SET Certificate.jpg" alt="efset english certificate" />
				</div>

				<div>
					<img
						className="h-auto max-w-full rounded-lg"
						src="Scrum_Basic_Certificate.jpg"
						alt="scrum basics certificate"
					/>
				</div>
				<div>
					<img
						className="h-auto max-w-full rounded-lg"
						src="tecsup_full_stack.jpg"
						alt="tecsup full stack certificate"
					/>
				</div>
			</div>
		</div>
	);
}

export default Certificates;
