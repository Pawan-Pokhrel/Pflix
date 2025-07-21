import { useLoaderData } from "react-router-dom";
import Card from "../Components/UI/Card";
import "./CSS/Movie.css";

const Movie = () => {
	const apiData = useLoaderData();
	return (
		<ul className="movie-container">
			{apiData &&
				apiData.Search.map((currElem) => {
					return (
						<li
							key={currElem.imdbID}
							className="hero-container"
						>
							<Card movie={currElem} />
						</li>
					);
				})}
		</ul>
	);
};

export default Movie;
