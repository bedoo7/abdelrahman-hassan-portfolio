import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBriefcase,
	faGraduationCap,
	faCode,
} from "@fortawesome/free-solid-svg-icons";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

const timelineItems = [
	{
		type: "work",
		date: "Feb 2026 – Present",
		title: "Software Developer",
		subtitle: "DocsRetrieved · Full-time · Remote",
		points: [
			"Lead the end-to-end design, architecture, and development of modern full-stack web applications using industry-standard technologies",
			"Engineer scalable back-end services, secure authentication systems, and high-performance RESTful APIs capable of supporting production workloads",
			"Build intuitive, responsive user experiences while maintaining clean architecture, reusable codebases, and long-term maintainability",
			"Drive technical decisions, optimize application performance, troubleshoot complex issues, and deliver reliable software solutions aligned with business goals",
		],
		icon: faBriefcase,
	},
	{
		type: "work",
		date: "Jan 2025 – Feb 2026",
		title: "Software Engineer",
		subtitle: "Kay Technology · Full-time · Saudi Arabia (Remote)",
		points: [
			"Contributed to the engineering of enterprise-grade web applications, delivering production-ready features in a fast-paced Agile environment",
			"Designed scalable application modules, integrated backend services, and improved maintainability through clean software engineering practices",
			"Collaborated closely with product managers, designers, and engineers to transform business requirements into reliable software solutions",
			"Participated throughout the software development lifecycle, including architecture discussions, implementation, optimization, debugging, testing, and release delivery",
		],
		icon: faBriefcase,
	},
	{
		type: "project",
		date: "Mar 2025 – Present",
		title: "Docs Retrieved",
		subtitle: "Project",
		points: [
			"A secure and fast platform for managing, transferring, and retrieving documents",
		],
		icon: faCode,
	},
	{
		type: "project",
		date: "Jan 2025 – Oct 2025",
		title: "Majales",
		subtitle: "Project · Saudi Arabia",
		points: [
			"A governance platform with bilingual access (Arabic/English) to support decision-making",
		],
		icon: faCode,
	},
	{
		type: "education",
		date: "2020 – 2024",
		title: "B.Sc. in Computer Science",
		subtitle: "Kafrelsheikh University · Very Good with Honors",
		points: [],
		icon: faGraduationCap,
	},
];

const iconBg = (type: string) => {
	if (type === "education") return "#0f766e";
	if (type === "project") return "#1d4ed8";
	return "#5000ca";
};

function Timeline() {
	return (
		<div id="history">
			<div className="items-container">
				<h1>Timeline</h1>

				<VerticalTimeline>
					{timelineItems.map((item, idx) => (
						<VerticalTimelineElement
							key={idx}
							className={`vertical-timeline-element--${item.type}`}
							contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
							contentArrowStyle={{ borderRight: "7px solid white" }}
							date={item.date}
							iconStyle={{ background: iconBg(item.type), color: "#fff" }}
							icon={<FontAwesomeIcon icon={item.icon} />}
						>
							<h3 className="vertical-timeline-element-title">{item.title}</h3>
							<h4 className="vertical-timeline-element-subtitle">
								{item.subtitle}
							</h4>

							<ul style={{ marginTop: 10, paddingLeft: 18 }}>
								{item.points.map((p, i) => (
									<li key={i} style={{ marginBottom: 6 }}>
										{p}
									</li>
								))}
							</ul>
						</VerticalTimelineElement>
					))}
				</VerticalTimeline>
			</div>
		</div>
	);
}

export default Timeline;
