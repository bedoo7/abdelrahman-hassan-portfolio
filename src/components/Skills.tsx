import React from "react";
import Chip from "@mui/material/Chip";
import "../assets/styles/Skills.scss";

const skills = [
	"React",
	"Node.js",
	"Express.js",
	"TypeScript",
	"MongoDB",
	"Git",
	"GitHub",
	"Material UI",
	"RESTful APIs",
	"JWT Authentication",
	"Responsive Web Design",
	"API Integration",
	"Scrum",
	"AI-Assisted Development",
];

function Skills() {
	return (
		<div className="container" id="skills">
			<div className="skills-container">
				<h1>Skills</h1>
				<p className="skills-subtitle">
					Technologies and tools I work with to build modern, scalable applications.
				</p>
			<div className="flex-chips" style={{ marginTop: 12 }}>
				{skills.map((skill, index) => (
					<Chip key={index} className="chip" label={skill} />
				))}
			</div>
			</div>
		</div>
	);
}

export default Skills;
