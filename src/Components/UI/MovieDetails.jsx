import { NavLink, useLoaderData } from "react-router-dom";

const MovieDetails = () => {
	const movieData = useLoaderData();
	console.log(movieData);

	const { Actors, Poster, Title, Type, Year, Plot, BoxOffice } = movieData;

	return (
		<li className="hero-container hero-movie-container">
			<div className="main-container bg-white shadow-2xl rounded-lg p-6 max-w-4xl w-full mx-auto">
				<div className="poster-container flex justify-center">
					<NavLink to="#">
						<img
							src={Poster}
							alt={Title}
							className="poster w-full max-w-sm rounded-lg shadow-lg"
						/>
					</NavLink>
				</div>

				<div className="ticket-container mt-6 text-center">
					<div className="ticket-content">
						<h4 className="ticket-movie-title text-3xl font-bold mb-4">
							{Title}
						</h4>
						<p className="ticket-current-price text-gray-600 italic mb-4">
							{Plot}
						</p>
						<div className="text-left space-y-2">
							<p>
								<span className="font-semibold">Year: </span>
								{Year}
							</p>
							<p>
								<span className="font-semibold">Type: </span>
								{Type}
							</p>
							<p>
								<span className="font-semibold">Actors: </span>
								{Actors}
							</p>
							<p>
								<span className="font-semibold">
									Box Office:{" "}
								</span>
								{BoxOffice || "N/A"}
							</p>
						</div>

						<NavLink
							to="#"
							className="inline-block mt-6"
						>
							<button className="ticket-buy-btn bg-red-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-red-700 transition">
								Watch Now
							</button>
						</NavLink>
					</div>
				</div>
			</div>
		</li>
	);
};

export default MovieDetails;
