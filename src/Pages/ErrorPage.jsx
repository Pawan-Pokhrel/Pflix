import { NavLink, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	const navigate = useNavigate();
	const handleGoBack = () => {
		navigate(-1);
	};
	console.log(error);
	return (
		<section className="error-section">
			<div
				id="error-text"
				className="flex flex-col justify-center items-center"
			>
				<figure>
					<img
						src="https://cdn.dribbble.com/users/718859/screenshots/3267029/jisunpark_404-error.gif"
						alt="404! Not found!"
						className="size-max"
					/>
				</figure>
				<div className="text-center">
					<p className="p-a">
						The page you were looking for could not be found.
					</p>
				</div>
				<NavLink to="/">
					<p className="text-red-400">Go back to homepage.</p>
				</NavLink>
				<button
					className="bg-red-400 text-white px-4 py-2 rounded-md"
					onClick={handleGoBack}
				>
					Go back
				</button>
			</div>
		</section>
	);
};

export default ErrorPage;
