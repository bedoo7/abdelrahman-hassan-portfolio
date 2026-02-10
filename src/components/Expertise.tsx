import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const experiences = [
	{
		icon: faLaptopCode,
		title: "Freelance Front-End Developer",
		company: "Freelance",
		period: "Nov 2025 – Present",
		location: "Remote",
		description:
			"Building modern, responsive user interfaces and reusable components for web apps, focusing on clean UI, performance, and maintainable code.",

		tech: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "MUI", "Git"],
	},
	{
		icon: faBriefcase,
		title: "Frontend Developer",
		company: "Kay Technology · Full-time",
		period: "Jan 2025 – Nov 2025 (11 mos)",
		location: "Saudi Arabia · Remote",
		description:
			"Worked on production front-end features, collaborating with the team to deliver stable releases and enhance user experience.",

		tech: [
			"React",
			"TypeScript",
			"JavaScript",
			"REST APIs",
			"Git",
			"GitHub",
			"CI/CD",
		],
	},
];

function Expertise() {
	return (
		<div className="container" id="expertise">
			<div className="skills-container">
				<h1>Experience</h1>

				<div className="skills-grid">
					{experiences.map((exp, idx) => (
						<div className="skill" key={idx}>
							<FontAwesomeIcon icon={exp.icon} size="3x" />

							<h3>{exp.title}</h3>

							<p style={{ marginTop: 6, marginBottom: 10, opacity: 0.9 }}>
								<strong>{exp.company}</strong>
								<br />
								{exp.period} • {exp.location}
							</p>

							<p>{exp.description}</p>

							<div className="flex-chips" style={{ marginTop: 12 }}>
								<span className="chip-title">Tech stack:</span>
								{exp.tech.map((label, index) => (
									<Chip key={index} className="chip" label={label} />
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Expertise;
