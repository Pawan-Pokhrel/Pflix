import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-brand">
					<h2 className="footer-title">
						<span className="text-red-600">P</span>flix
					</h2>
					<p className="footer-desc">
						Your one-stop platform for premium movies, series, and
						more.
					</p>
				</div>
				<div className="footer-links">
					<h3>Quick Links</h3>
					<ul>
						<li>
							<NavLink
								to="/"
								className="footer-link"
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about"
								className="footer-link"
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/movie"
								className="footer-link"
							>
								Movies
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/contact"
								className="footer-link"
							>
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
				<div className="footer-social">
					<h3>Follow Us</h3>
					<div className="social-icons">
						<NavLink
							to="https://www.facebook.com/pawan.pokhrel.589"
							className="social-link"
							target="_blank"
						>
							<BsFacebook />
						</NavLink>
						<NavLink
							to="https://www.instagram.com/pawan_pokhrel__/"
							className="social-link"
							target="_blank"
						>
							<BsInstagram />
						</NavLink>
						<NavLink
							to="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrgDCMkQXZVGvZpNHpQpbJqzThWJWQkrrTxrWQCBKqndbFQxFwPQlBLxtvSZdCkKQhhGDq"
							className="social-link"
							target="_blank"
						>
							<SiGmail />
						</NavLink>
						<NavLink
							to="https://www.youtube.com/@pawanpokhrel8164"
							className="social-link"
							target="_blank"
						>
							<BsYoutube />
						</NavLink>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<p>&copy; 2024 Pflix. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
