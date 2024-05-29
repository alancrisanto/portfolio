import { useState } from "react";
import Social from "../components/Social";
import { FaRegCopy, FaCheck } from "react-icons/fa";
import Button from "../components/Button";
import DescSkills from "../components/DescSkills";

function About() {
	const [copied, setCopied] = useState(false);

	const copyToClipboad = async () => {
		setCopied(true);
		await navigator.clipboard.writeText("alanvcrisanto@gmail.com");

		setTimeout(() => {
			setCopied(false);
		}, 800);
	};

	return (
		<main className="container mx-auto pt-20 px-6">
			<div className="max-w-[860px] mx-auto text-slate-100">
				{/* Div Photo and Info */}
				<div className="md:flex gap-4">
					{/* Photo */}
					<div className="">
						<img
							className="mx-auto max-w-36 rounded-bl-xl rounded-tr-xl"
							src="alan_cris.webp"
							alt="alan crisanto photo"
						/>
					</div>
					{/* Description Info */}
					<div className="pt-9 md:pt-0">
						<h2 className="text-4xl font-semibold">Hi There! I&apos;m Alan Crisanto</h2>
						<p className="pt-4 text-lg">
							I am a talented Freelance. I design websites, logos, banners, and everything related to design and
							inspiration. I&apos;m majoring Software development at Brigham Young University Idaho. I have serious
							passion for UI effects
						</p>
						<p className="text-green-500 font-semibold text-2xl pb-4">Let&apos;s make something special.</p>
						<Social />
					</div>
				</div>

				{/* Personal Info */}
				<div className="pt-9 md:grid grid-cols-[1.85fr_2fr] gap-16">
					{/* Info */}
					<div>
						<h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
						<p className="text-lg">
							<span className="font-semibold">Residence:</span> Peru
						</p>
						<p className="text-lg">
							<span className="font-semibold">Phone:</span> +51 984-984-088
						</p>
						<div className="flex gap-3 items-center">
							<p className="text-lg">
								<span className="font-semibold">Email:</span> alanvcrisanto@gmail.com
							</p>
							{copied ? (
								<FaCheck className="text-green-600" />
							) : (
								<FaRegCopy onClick={copyToClipboad} className="cursor-pointer" />
							)}
						</div>
					</div>
					{/* Languages */}
					<div className="pt-9 md:pt-0">
						<h3 className="text-2xl font-semibold mb-4">Languages</h3>
						<div className="grid grid-cols-[0.75fr_1fr] md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.35fr_1fr] items-center">
							<p className="text-lg font-semibold">Spanish:</p>
							<img src="/dots_1.svg" alt="consecutives green dots" />
						</div>
						<div className="grid grid-cols-[0.75fr_1fr] md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.35fr_1fr] items-center">
							<p className="text-lg font-semibold">English:</p>
							<img src="/dots_2.svg" alt="consecutive green and grey dots" />
						</div>
						<div className="grid grid-cols-[0.75fr_1fr] md:grid-cols-[0.5fr_1fr] lg:grid-cols-[0.35fr_1fr] items-center">
							<p className="text-lg font-semibold">Portuguese:</p>
							<img src="/dots_3.svg" alt="consecutive green and grey dots" />
						</div>
					</div>
				</div>

				{/* Professional Skilss */}
				<div className="pt-9 md:grid grid-cols-[1.85fr_2fr] gap-16">
					{/* Skills */}
					<div>
						<h3 className="text-2xl font-semibold mb-4">Professional Skills</h3>
						<div className="pb-1 w-11/12">
							<div className="flex justify-between">
								<p>HTML</p>
								<p>80%</p>
							</div>
							<progress className="w-full h-1" id="file" value="80" max="100"></progress>
						</div>
						<div className="pb-1 w-11/12">
							<div className="flex justify-between">
								<p>CSS</p>
								<p>75%</p>
							</div>
							<progress className="w-full h-1" id="file" value="75" max="100"></progress>
						</div>
						<div className="pb-1 w-11/12">
							<div className="flex justify-between">
								<p>JavaScript</p>
								<p>60%</p>
							</div>
							<progress className="w-full h-1" id="file" value="60" max="100"></progress>
						</div>
						<div className="pb-1 w-11/12">
							<div className="flex justify-between">
								<p>Ptyhon</p>
								<p>45%</p>
							</div>
							<progress className="w-full h-1" id="file" value="45" max="100"></progress>
						</div>
					</div>
					{/* Soft Skills */}
					<div className="pt-9 md:pt-0">
						<h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
						<div className="flex gap-4 items-center pb-2">
							<FaCheck className="text-green-600" />
							<p>Problem Solving</p>
						</div>
						<div className="flex gap-4 items-center pb-2">
							<FaCheck className="text-green-600" />
							<p>Team Work</p>
						</div>
						<div className="flex gap-4 items-center pb-2">
							<FaCheck className="text-green-600" />
							<p>Self Motivated</p>
						</div>
						<div className="flex gap-4 items-center pb-2">
							<FaCheck className="text-green-600" />
							<p>Creative Thinking</p>
						</div>
					</div>
				</div>

				<div className="pt-16 text-center">
					<Button text="My Certifications" link="/certificates" />
				</div>

				<div className="py-16">
					<DescSkills />
				</div>
			</div>
		</main>
	);
}

export default About;
