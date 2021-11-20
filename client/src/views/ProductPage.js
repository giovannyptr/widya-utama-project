import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../store/actions";
import { alertError, alertSuccess } from "../apis/swal";

export default function ProductPage() {
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.productReducer);

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	const handleDelete = (e) => {
		e.preventDefault();
		const id = e.target.name
		console.log('delete id=', id);
		dispatch(deleteProduct(id))
			.then((result) => {
				alertSuccess(result.message);
			})
			.catch((err) => {
				alertError(err.message);
			});
	};

	if (products[0]) {
		return (
			<div className="col-10 px-5" id="ProductPage">
				<h3 className="my-4">Products</h3>
				<hr className="mb-4" />
				<table className="w-100">
					<thead>
						<tr>
							<th className="p-3 pt-0">ID</th>
							<th className="p-3 pt-0">Name</th>
							<th className="p-3 pt-0">Description</th>
							<th className="p-3 pt-0">Actions</th>
						</tr>
					</thead>
					<tbody>
						{products.map((el) => {
							return (
								<tr key={el.id}>
									<td className="p-3">{el.id}</td>
									<td className="p-3 w-25">{el.name}</td>
									<td className="p-3">{el.description}</td>
									<td className="p-3">
										<Link to={"/edit-product/" + el.id}>
											<button className="btn btn-warning">Update</button>
										</Link>
										<button
											className="btn btn-danger mx-3"
											name={el.id}
											onClick={handleDelete}>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	} else {
		return (
			<div className="col-10 px-5" id="ProductPage">
				<h3 className="my-4">Products</h3>
				<hr className="mb-4" />
				<table className="w-100">
					<thead>
						<tr>
							<th className="p-3 pt-0">ID</th>
							<th className="p-3 pt-0">Name</th>
							<th className="p-3 pt-0">Description</th>
							<th className="p-3 pt-0">Actions</th>
						</tr>
					</thead>
					<tbody></tbody>
				</table>
			</div>
		);
	}
}