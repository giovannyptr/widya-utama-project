import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
	addProduct,
	editProduct,
	getProduct,
	setProduct,
} from "../store/actions";
import { alertError, alertSuccess } from "../apis/swal";

export default function ProductForm({ page }) {
	const history = useHistory();
	const dispatch = useDispatch();
	const { product } = useSelector((state) => state.productReducer);

	let payload = {
		id: product?.id || "",
		name: "",
		description: "",
		createdAt: "",
		updatedAt: "",
	};

	const [input, setInput] = useState(payload);
	
	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;

		setInput({
			...input,
			[name]: value,
		});
	};

	const { id } = useParams();

	useEffect(() => {

		if (page === "Edit Product") {
			dispatch(getProduct(id))
				.then((result) => {
					dispatch(setProduct(result));
				})
				.catch((err) => {
					alertError(err.message);
					history.push("/");
				});
		}
	}, [dispatch, page, id]);

	useEffect(() => {
		if (page === "Edit Product") {
			setInput({ ...input, ...product });
		} else if (page === "Add Product") {
			setInput(payload);
		}
	}, [product, page]);

	const handleSubmit = (event) => {
		event.preventDefault();

		if (page === "Add Product") {
			const payload = input;

			dispatch(addProduct(payload))
				.then((result) => {
					history.push("/");
					alertSuccess(`Created new item with id ${result.id}`);
				})
				.catch((err) => {
					const message = err.message;
					alertError(message);
				});
		} else if (page === "Edit Product") {
			const payload = input;

			dispatch(editProduct(payload, id))
				.then((result) => {
					alertSuccess(result.message);
					history.push("/");
				})
				.catch((err) => {
					let message = err.message.join(", ");
					alertError(message);
				});
		}
	};

	return (
		<div id="ProductForm" className="col-10 px-5">
			<h3 className="my-4">{page}</h3>
			<hr className="mb-4" />
			<div className="d-flex justify-content-center ">
				<div className="card p-5 w-50 mb-5">
					<form onSubmit={handleSubmit}>
						<strong>Product Name</strong>
						<input
							type="text"
							name="name"
							className="form-control mt-1 mb-3"
							onChange={handleChange}
							value={input.name}
							required
						/>

						<strong>Description</strong>
						<textarea
							name="description"
							cols="20"
							rows="10"
							className="form-control mt-1 mb-3"
							onChange={handleChange}
							value={input.description}
							required></textarea>

						<input
							type="submit"
							value={page}
							className="btn btn-primary mt-4 form-control"
						/>
						<Link to="/" className="btn btn-secondary mt-3 form-control">
							Back
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
}
