import Social from "../components/Social";
import Button from "../components/Button";
import Stack from "../components/Stack";

function Home() {
	return (
		<main className="container mx-auto pt-20 px-6">
			<div className="text-slate-100 font-inter">
				<h1 className="text-5xl md:text-7xl font-bold">Hi I&apos;m Alan Crisanto</h1>
				<p className="text-1xl md:text-2xl text-slate-300 pt-2">A Freelance UI Designer & Web Developer</p>
				<div className="flex gap-7 items-center mt-3">
					<Social />
					<div className="flex gap-3 items-center text-lg">
						<span className="relative flex h-3 w-3">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500"></span>
						</span>
						<p>Available for work</p>
					</div>
				</div>
				<div className="mt-20 text-md md:text-xl">
					<Button text="View My Work" link="/projects" />
				</div>
			</div>
			<div className="mt-20">
				<h3 className="text-slate-100 text-3xl font-bold mb-10">My Stack</h3>
				<div className=" pt-4 pb-16">
					<Stack />
				</div>
			</div>
		</main>
	);
}

export default Home;
