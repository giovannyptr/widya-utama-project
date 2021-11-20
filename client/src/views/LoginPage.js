import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { alertError, alertSuccess } from "../apis/swal";
import { login } from "../store/actions";

export default function LoginPage() {
	const history = useHistory();
	const dispatch = useDispatch();

	const [input, setInput] = useState({
		email: "",
		password: "",
	});

	const handleInput = (e) => {
		const value = e.target.value;
		const name = e.target.name;

		setInput({
			...input,
			[name]: value,
		});
	};

	const submitLogin = (e) => {
		e.preventDefault();
		const payload = {
			email: input.email,
			password: input.password,
		};
		dispatch(login(payload))
			.then((result) => {
				localStorage.setItem("access_token", result.access_token);
				history.push("/");
				alertSuccess("Welcome!");
			})
			.catch((err) => {
				let message = err.message;
				alertError(message);
			});
	};

	return (
		<section
			id="LoginPage"
			className="d-flex flex-row justify-content-center align-items-center">
			<div className="card p-5">
				<form onSubmit={submitLogin}>
					<h1 className="mb-4">Login</h1>
					<span className="mb-1">E-mail</span>
					<input
						type="email"
						name="email"
						className="form-control mb-3"
						value={input.email}
						onChange={handleInput}
						required
					/>
					<span className="mb-1">Password</span>
					<input
						type="password"
						name="password"
						className="form-control mb-3"
						value={input.password}
						onChange={handleInput}
						required
					/>
					<input
						type="submit"
						value="Log In"
						className="form-control btn btn-dark mt-4"
					/>
				</form>
			</div>
		</section>
	);
}