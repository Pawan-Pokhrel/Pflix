import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Pages/About";
import Contact, { contactData } from "./Pages/Contact";
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";
import AppLayout from "./Components/Layout/AppLayout";
import ErrorPage from "./Pages/ErrorPage";
import "./App.css";
import getApiData from "./API/GetApiData";
import { useEffect, useState } from "react";
import MovieDetails from "./Components/UI/MovieDetails";
import getMovieDetails from "./API/GetMovieDetails";

const App = () => {
	const initialSearch =
		JSON.parse(localStorage.getItem("movieSearch")) || "batman";

	const [search, setSearch] = useState(initialSearch);

	const API = `https://www.omdbapi.com/?apikey=${
		import.meta.env.VITE_API_KEY
	}&s=${search}&page=1`;

	useEffect(() => {
		localStorage.setItem("movieSearch", JSON.stringify(search));
	}, [search]);

	const router = createBrowserRouter([
		{
			path: "/",
			element: <AppLayout setSearch={setSearch} />,
			errorElement: <ErrorPage />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/about",
					element: <About />,
				},
				{
					path: "/movie",
					element: <Movie />,
					loader: () => getApiData(API),
				},
				{
					path: "/movie/:movieID",
					element: <MovieDetails />,
					loader: getMovieDetails,
				},
				{
					path: "/contact",
					element: <Contact />,
					action: contactData,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
};

export default App;
