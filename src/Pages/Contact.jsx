import React from "react";
import "./CSS/Contact.css";
import { Form } from "react-router-dom";

export const contactData = async ({ request }) => {
	try {
		const response = await request.formData();
		const data = Object.fromEntries(response);
		console.log(data);
		return null;
	} catch (error) {
		console.log(error);
	}
};

const Contact = () => {
	return (
		<>
			<section className="section-contact">
				<div className="container">
					<h2 className="section-common--heading">Contact Us</h2>
					<p className="section-common--subheading">
						Get in touch with us. We are forever here to help you.
					</p>
				</div>

				<div className="grid grid-two-cols">
					<div className="contact-content">
						<Form method="POST">
							<fieldset className="contact-form-fieldset">
								<legend className="sr-only">
									Contact Form
								</legend>
								<div className="grid grid-two-cols mb-3">
									<label htmlFor="username">Full Name</label>
									<input
										type="text"
										name="username"
										id="username"
										required
										autoComplete="off"
										placeholder="Enter your full name."
									/>
								</div>

								<div className="mb-3">
									<label htmlFor="email">Email address</label>
									<input
										type="email"
										name="email"
										id="email"
										required
										autoComplete="off"
										placeholder="pawan@example.com"
									/>
								</div>

								<div className="mb-3">
									<label htmlFor="message">Message</label>
									<textarea
										name="message"
										id="message"
										cols={30}
										rows={10}
										placeholder="We are forever here to help you."
									></textarea>
								</div>

								<div className="mb-3">
									<button
										type="submit"
										className="submit-btn bg-red-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-red-700 transition"
									>
										Send Message
									</button>
								</div>
							</fieldset>
						</Form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
