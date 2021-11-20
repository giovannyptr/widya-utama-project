import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { alertError, alertSuccess } from "../apis/swal";
import { register } from "../store/actions";

export default function AddUser() {
	const dispatch = useDispatch();
	const history = useHistory();

	const [input, setInput] = useState({
		name: "",
		email: "",
		password: "",
		gender: "",
	});

	const handleInput = (e) => {
		const value = e.target.value;
		const name = e.target.name;

		setInput({
			...input,
			[name]: value,
		});
	};

	const handleRegister = (e) => {
		e.preventDefault();
		const payload = input;

		dispatch(register(payload))
			.then((result) => {
				alertSuccess(
					`User ${result.email} has been added with id ${result.id}`
				);
				history.push("/users");
			})
			.catch((err) => {
				let message = err.message;
				alertError(message);
			});
	};

	return (
		<div className="col-10 px-5" id="Register">
			<h3 className="my-4">Add User</h3>
			<hr className="mb-4" />
			<div className="d-flex justify-content-center">
				<div className="card p-5 w-50 mb-5">
					<form onSubmit={handleRegister}>
						<strong>E-mail</strong>
						<input
							type="email"
							name="email"
							className="form-control mt-1 mb-3"
							value={input.email}
							onChange={handleInput}
						/>

						<strong>Password</strong>
						<input
							type="password"
							name="password"
							className="form-control mt-1 mb-3"
							value={input.password}
							onChange={handleInput}
						/>

						<strong>Name</strong>
						<input
							type="text"
							name="name"
							className="form-control mt-1 mb-3"
							value={input.name}
							onChange={handleInput}
						/>

						<strong>Gender</strong>
						<input
							name="gender"
							className="form-control mt-1 mb-3"
							value={input.gender}
							onChange={handleInput}
						/>

						<input
							type="submit"
							value="Register"
							className="btn btn-primary mt-4"
						/>
					</form>
				</div>
			</div>
		</div>
	);
}