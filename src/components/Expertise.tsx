import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const experiences = [
	{
		icon: faLaptopCode,
		title: "Software Developer",
		company: "DocsRetrieved · Full-time",
		period: "Feb 2026 – Present",
		location: "Remote",
		description:
			"Lead the end-to-end design, architecture, and development of modern full-stack web applications using industry-standard technologies. Engineer scalable back-end services, secure authentication systems, and high-performance RESTful APIs capable of supporting production workloads. Build intuitive, responsive user experiences while maintaining clean architecture, reusable codebases, and long-term maintainability. Drive technical decisions, optimize application performance, troubleshoot complex issues, and deliver reliable software solutions aligned with business goals.",

		tech: ["React", "Node.js", "Express.js", "TypeScript", "MongoDB", "JWT Authentication", "REST APIs", "Git"],
	},
	{
		icon: faBriefcase,
		title: "Software Engineer",
		company: "Kay Technology · Full-time",
		period: "Jan 2025 – Feb 2026 (1 yr)",
		location: "Saudi Arabia · Remote",
		description:
			"Contributed to the engineering of enterprise-grade web applications, delivering production-ready features in a fast-paced Agile environment. Designed scalable application modules, integrated backend services, and improved maintainability through clean software engineering practices. Collaborated closely with product managers, designers, and engineers to transform business requirements into reliable software solutions. Participated throughout the software development lifecycle, including architecture discussions, implementation, optimization, debugging, testing, and release delivery.",

		tech: ["React", "TypeScript", "JavaScript", "REST APIs", "Git", "GitHub", "CI/CD"],
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
