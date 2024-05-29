import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

function Stack() {
	return (
		<div className="flex flex-wrap gap-4 justify-center md:justify-between 2xl:justify-evenly text-3xl text-slate-100">
			<FaHtml5 />
			<FaCss3Alt />
			<IoLogoJavascript />
			<FaPython />
			<FaReact />
			<FaNodeJs />
			<SiTailwindcss />
			<FaGitAlt />
			<TbBrandNextjs />
			<SiMysql />
			<SiMongodb />
		</div>
	);
}

export default Stack;
