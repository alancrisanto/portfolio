import { IoIosMenu } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import ButtonCv from "./ButtonCv";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
	let links = [
		{ name: "Home", link: "/" },
		{ name: "About", link: "/about" },
		{ name: "Projects", link: "/projects" },
		{ name: "Certificates", link: "/certificates" },
		{ name: "Contact", link: "/contact" },
	];

	const [open, setOpen] = useState(false);
	return (
		<nav className="md:flex md:justify-between md:items-center  p-4">
			<div className="max-w-32">
				<Link to="/">
					<img src="/logo.png" alt="logo alan crisanto" />
				</Link>
			</div>
			<div
				className="menu text-slate-100 text-3xl absolute top-6 right-2 cursor-pointer md:hidden"
				onClick={() => setOpen(!open)}
			>
				{open ? <IoIosCloseCircleOutline /> : <IoIosMenu />}
			</div>
			<ul
				className={`md:flex gap-4 justify-between items-center transition-all duration-1000 ease-in ${
					open ? "block" : "hidden"
				}`}
			>
				{links.map((link, i) => (
					<li key={i} className="text-lg my-3 md:my-0">
						<NavLink to={link.link} className="text-slate-100 cursor-pointer py-1 px-2 hover:bg-slate-500">
							{link.name}
						</NavLink>
					</li>
				))}
				<ButtonCv />
			</ul>
		</nav>
	);
}

export default Navbar;
