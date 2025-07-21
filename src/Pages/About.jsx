import React from "react";
import "./CSS/About.css";

const About = () => {
	return (
		<section className="about-section">
			<div className="about-container">
				<div className="about-content">
					<h1 className="about-title">
						About <span className="text-red-600">P</span>
						<span className="text-white">flix</span>
					</h1>
					<p className="about-description">
						At Pflix, we redefine entertainment by offering a rich
						library of movies and TV shows, crafted to satisfy
						diverse tastes and preferences. From timeless classics
						to the latest blockbusters, Pflix is your gateway to a
						world of cinematic magic.
					</p>
					<p className="about-description">
						Our commitment is to deliver an exceptional viewing
						experience with high-quality streaming, personalized
						recommendations, and a user-friendly platform. Whether
						you're a movie buff or a casual viewer, Pflix is your
						trusted companion for endless entertainment.
					</p>
				</div>
				<div className="about-image">
					<img
						src={
							"https://images.samsung.com/is/image/samsung/assets/uk/tvs/smart-tv/smart-hub-and-apps/SmartHub_MO_720x720.png?$720_N_PNG$"
						}
						alt="About Us"
						className="about-img"
					/>
				</div>
			</div>

			<div className="developer-section">
				<h2 className="developer-title">Meet the Developer</h2>
				<div className="developer-content">
					<p className="developer-info">
						<strong>Name:</strong> Pawan Pokhrel
					</p>
					<p className="developer-info">
						<strong>Email:</strong> pawanpokhrel1111@gmail.com
					</p>
					<p className="developer-info">
						<strong>Contact:</strong> +977 9746478675
					</p>
					<p className="developer-bio">
						Passionate about building seamless digital experiences,
						Pawan Pokhrel brings innovation and dedication to every
						project. Pflix is a testament to his expertise in
						creating intuitive, engaging platforms that users love.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
