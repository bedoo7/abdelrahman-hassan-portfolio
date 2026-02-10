import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

function Main() {
	return (
		<div className="container">
			<div className="about-section">
				<div className="image-wrapper">
					<img src={require("../assets/images/profile.png")} alt="Avatar" />
				</div>
				<div className="content">
					<div className="social_icons">
						<a
							href="https://github.com/bedoo7"
							target="_blank"
							rel="noreferrer"
						>
							<GitHubIcon />
						</a>
						<a
							href="https://www.linkedin.com/in/abdelrahman7assan/"
							target="_blank"
							rel="noreferrer"
						>
							<LinkedInIcon />
						</a>
					</div>
					<h1>Abdelrahman Hassan</h1>
					<p>Frontend Developer</p>

					<div className="mobile_social_icons">
						<a
							href="https://github.com/bedoo7"
							target="_blank"
							rel="noreferrer"
						>
							<GitHubIcon />
						</a>
						<a
							href="https://www.linkedin.com/in/abdelrahman7assan/"
							target="_blank"
							rel="noreferrer"
						>
							<LinkedInIcon />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
