import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/Home.css";

const Home = () => {
	return (
		<>
			<section className="hero">
				<div className="container flex flex-col items-center justify-center gap-12">
					<div className="text-content w-full md:w-1/2 text-center">
						<h1 className="text-5xl font-bold text-white mb-4 animate__animated animate__fadeIn animate__delay-1s">
							Welcome to <span className="text-red-600">P</span>
							flix
						</h1>
						<p className="text-xl text-white mb-6 animate__animated animate__fadeIn animate__delay-1.5s">
							Your go-to place for endless entertainment.
						</p>
						<div className="flex gap-6 animate__animated animate__fadeIn animate__delay-2s">
							<NavLink
								to="/movie"
								className="bg-red-600 text-white py-3 px-8 rounded-lg shadow-2xl hover:bg-red-700 transition duration-300"
							>
								Explore Movies
							</NavLink>
							<NavLink
								to="/contact"
								className="bg-white text-indigo-600 py-3 px-8 rounded-lg shadow-2xl hover:bg-gray-100 transition duration-300"
							>
								Contact Us
							</NavLink>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
