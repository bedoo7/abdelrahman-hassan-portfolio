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
		date: "Nov 2025 – Present", // لو هتخليها Jan 2025 – Present عدّل هنا
		title: "Freelance Front-End Developer",
		subtitle: "Remote · Egypt",
		points: [
			"Built responsive web apps using React, TypeScript, and MUI",
			"Integrated public APIs and improved UI performance",
			"Worked with clients to deliver functional UI solutions",
			"Learning Node.js / Express fundamentals to grow full-stack skills",
		],
		icon: faBriefcase,
	},
	{
		type: "work",
		date: "Jan 2025 – Nov 2025",
		title: "Frontend Developer",
		subtitle: "Kay Technology · Full-time · Saudi Arabia (Remote)",
		points: [
			"Implemented UI features and maintained existing modules",
			"Collaborated with team to deliver stable releases",
			"Fixed UI bugs and improved responsiveness across devices",
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
		date: "Sep 2020 – Sep 2024",
		title: "Bachelor of Information Systems",
		subtitle: "Faculty of Computer & Information – KSU · Kafr Elsheykh, Egypt",
		points: ["GPA: 3.3/4 (Very Good With Honor)"],
		icon: faGraduationCap,
	},
];

const iconBg = (type: string) => {
	if (type === "education") return "#0f766e";
	if (type === "project") return "#1d4ed8";
	return "#5000ca"; // work
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
