function Contact() {
	return (
		<div className="bg-gray-900 text-white px-8 py-10 flex items-center justify-center">
			<div className="w-full max-w-6xl flex flex-col md:flex-row gap-12">
				<div className="flex-1 space-y-8">
					<h1 className="text-4xl md:text-5xl font-bold leading-tight">Let&apos;s start a project together</h1>
					<form className="space-y-6">
						<div>
							<label htmlFor="name" className="block text-sm font-medium mb-2">
								What&apos;s your name?
							</label>
							<input
								id="name"
								placeholder="John Doe"
								className="bg-transparent border-b border-gray-700 rounded-none px-0 text-lg placeholder-gray-600 w-full"
							/>
						</div>
						<div>
							<label htmlFor="email" className="block text-sm font-medium mb-2">
								What&apos;s your email?
							</label>
							<input
								id="email"
								type="email"
								placeholder="john@doe.com"
								className="bg-transparent border-b border-gray-700 rounded-none px-0 text-lg placeholder-gray-600 w-full"
							/>
						</div>
						<div>
							<label htmlFor="message" className="block text-sm font-medium mb-2">
								Tell us about your project
							</label>
							<textarea
								id="message"
								placeholder="I'm looking to..."
								className="bg-transparent border-b border-gray-700 rounded-none px-0 text-lg placeholder-gray-600 resize-none w-full"
								rows={4}
							></textarea>
						</div>
						<button className="mt-6 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg inline-flex items-center">
							Send Message
							<svg
								className="ml-2 h-4 w-4"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
							</svg>
						</button>
					</form>
				</div>
				<div className="flex-1 space-y-8">
					<div>
						<div>
							<h5 className="text-gray-400">Contact Details</h5>
							<h2 className="text-xl font-semibold">Alan Crisanto</h2>
							<p>Web Developer</p>
						</div>
					</div>
					<div className="text-sm">
						<p>alanvcrisanto@gmail.com</p>
						<p>+51 942 100 816</p>
						<div className="mt-4 pt-4 border-t border-gray-700">
							<p>Location: Lima, Peru</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
