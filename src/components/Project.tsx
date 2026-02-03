import React from "react";
import majales from "../assets/images/majales.png";
import docs from "../assets/images/docs.png";
import "../assets/styles/Project.scss";

function Project() {
	return (
		<div className="projects-container" id="projects">
			<h1>Projects</h1>

			<div className="projects-grid">
				{/* Majales */}
				<div className="project">
					<a href="https://saudibods.com/" target="_blank" rel="noreferrer">
						<img
							src={majales}
							className="zoom"
							alt="Majales project"
							width="100%"
						/>
					</a>

					<a href="https://saudibods.com/" target="_blank" rel="noreferrer">
						<h2>Majales</h2>
					</a>

					<p>
						A governance platform that provides board members with trusted data,
						tools, and bilingual access (Arabic/English) to support effective
						decision-making.
					</p>
				</div>

				{/* Docs Retrieved */}
				<div className="project">
					<a
						href="https://dev.docsretrieved.ca/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src={docs}
							className="zoom"
							alt="Docs Retrieved project"
							width="100%"
						/>
					</a>

					<a
						href="https://dev.docsretrieved.ca/"
						target="_blank"
						rel="noreferrer"
					>
						<h2>Docs Retrieved</h2>
					</a>

					<p>
						A secure and fast platform for managing, transferring, and
						retrieving documents.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Project;
