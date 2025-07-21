import { NavLink } from "react-router-dom";

const Card = ({ movie }) => {
	const { Title, Poster, imdbID } = movie;
	return (
		<div
			className="main-container min-w-fit max-w-fit flex flex-col justify-center items-center shadow-2xl
        shadow-slate-600 hover:scale-105 transform transition duration-250"
		>
			<div className="poster-container">
				<img
					src={Poster}
					alt={Title}
					className="poster h-96"
				/>
			</div>
			<div className="ticket-container">
				<div className="ticket-content text-center">
					<NavLink to={`/movie/${imdbID}`}>
						<button className="ticket-buy-btn bg-red-600 text-white p-3 rounded-lg my-3">
							Watch Now
						</button>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Card;
