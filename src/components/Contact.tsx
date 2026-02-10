import React, { useMemo } from "react";
import "../assets/styles/Contact.scss";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";

function Contact() {
	const YOUR_EMAIL = "abdelrahmanhassan3190@gmail.com";
	const YOUR_PHONE = "(+20)1205992601";
	const YOUR_LOCATION = "Alexandria, Egypt";

	const LINKEDIN_URL = "https://www.linkedin.com/in/abdelrahman7assan/";
	const GITHUB_URL = "https://github.com/bedoo7";
	const WHATSAPP_NUMBER = "201205992601";

	const mailtoHref = useMemo(() => {
		const subject = "Portfolio Inquiry";
		const body = [
			"Hi Abdelrahman,",
			"",
			"I’m reaching out regarding your portfolio.",
			"",
			"Thanks!",
		].join("\n");

		return `mailto:${YOUR_EMAIL}?subject=${encodeURIComponent(
			subject,
		)}&body=${encodeURIComponent(body)}`;
	}, [YOUR_EMAIL]);

	return (
		<section id="contact" className="contact-section">
			<div className="items-container">
				<div className="contact-header">
					<h1>Contact</h1>
				</div>

				<div className="contact-card">
					<div className="contact-card-top">
						<div>
							<h2>Let’s connect</h2>
							<p className="muted">
								Fastest way to reach me: Email or LinkedIn.
							</p>
						</div>
					</div>

					<div className="info-grid">
						<div className="info-row">
							<EmailOutlinedIcon fontSize="small" />
							<span>{YOUR_EMAIL}</span>
						</div>

						<div className="info-row">
							<PhoneIphoneOutlinedIcon fontSize="small" />
							<span>{YOUR_PHONE}</span>
						</div>

						<div className="info-row">
							<LocationOnOutlinedIcon fontSize="small" />
							<span>{YOUR_LOCATION}</span>
						</div>
					</div>

					<div className="quick-links">
						<a className="pill" href={mailtoHref}>
							<EmailOutlinedIcon fontSize="small" /> Email
						</a>

						<a
							className="pill"
							href={LINKEDIN_URL}
							target="_blank"
							rel="noreferrer"
						>
							<LinkedInIcon fontSize="small" /> LinkedIn
						</a>

						<a
							className="pill"
							href={GITHUB_URL}
							target="_blank"
							rel="noreferrer"
						>
							<GitHubIcon fontSize="small" /> GitHub
						</a>

						<a
							className="pill"
							href={`https://wa.me/${WHATSAPP_NUMBER}`}
							target="_blank"
							rel="noreferrer"
						>
							<WhatsAppIcon fontSize="small" /> WhatsApp
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
