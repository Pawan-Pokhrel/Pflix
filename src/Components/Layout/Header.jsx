import { NavLink, useNavigate } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { useState } from "react";


const Header = ({ setSearch }) => {
	const [search1, setSearch1] = useState();
	const navigate = useNavigate();

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (search1.trim()) {
			handleSearch();
		}
	};

	const handleSearch = () => {
		setSearch(search1);
		setSearch1("");
		setTimeout(() => {
			navigate("/movie");
		}, 10);
		console.log("Navigated.");
	};

	return (
		<>
			<header className="section-navbar">
				<section className="top_txt">
					<div className="head-container">
						<div className="head_txt">
							<p>Get Pflix Membership, 30-day return or refund guarantee.</p>
						</div>
						<div className="sign_in_up">
							<NavLink to="">SIGN IN</NavLink>
							<NavLink to="">SIGN UP</NavLink>
						</div>
					</div>
				</section>

				<div className="container">
					<div className="navbar-brand">
						<NavLink to="/">
							<p>
								<span className="text-red-600">P</span>flix
							</p>
						</NavLink>
					</div>

					<nav className="navbar">
						<ul>
							<li className="nav-item">
								<form
									action=""
									className="flex flex-row gap-2"
									onSubmit={(e) => handleFormSubmit(e)}
								>
									<LuSearch
										className="size-7 cursor-pointer"
										onClick={() => handleSearch()}
									/>
									<input
										type="text"
										name="searchbar"
										id="search"
										className="search-bar text-black"
										value={search1}
										onChange={(e) => {
											setSearch1(e.target.value);
										}}
										placeholder="Search your movie"
									/>
									<button
										type="submit"
										style={{ display: "none" }}
									/>
								</form>
							</li>
							<li className="nav-item">
								<NavLink
									to="/"
									className="nav-link"
								>
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to="about"
									className="nav-link"
								>
									About
								</NavLink>
							</li>
							<li>
								<NavLink
									to="movie"
									className="nav-link"
								>
									Movies
								</NavLink>
							</li>
							<li>
								<NavLink
									to="contact"
									className="nav-link"
								>
									Contact
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
