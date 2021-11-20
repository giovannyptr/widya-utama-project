import { Link, useHistory } from "react-router-dom"
import { alertSuccess } from "../apis/swal";

export default function SideBar() {
	const history = useHistory();

	const logout = (e) => {
		e.preventDefault();
		localStorage.removeItem("access_token");
		history.push("/login");
		alertSuccess("See you later!");
	};
	return (
		<nav id="sidebar" className="col-2 px-3">
			<h3 className="my-4 text-center">Widya Technical Test</h3>
			<hr className="mb-4" />
			<Link to="/">
				<button className="btn btn-primary w-100 mb-3">Products</button>
			</Link>
			<Link to="/add-product">
				<button className="btn btn-primary w-100 mb-3">Add Product</button>
			</Link>
			<Link to="/users">
				<button className="btn btn-primary w-100 mb-3">Users</button>
			</Link>
			<Link to="/add-user">
				<button className="btn btn-primary w-100 mb-3">Add User</button>
			</Link>
			<button className="btn btn-dark w-100 mb-3" onClick={logout}>
				Logout
			</button>
		</nav>
	);
}