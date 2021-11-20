import SideBar from "../components/SideBar";
import ProductPage from "../views/ProductPage";
import UserTable from "../views/UserTable";
import ProductForm from "../views/ProductForm";
import AddUser from "../views/AddUser";

export default function HomePage({ page }) {
	let rendered;

	switch (page) {
		case "ProductPage":
			rendered = <ProductPage></ProductPage>;
			break;

		case "AddProduct":
			rendered = <ProductForm page="Add Product"></ProductForm>;
			break;

		case "EditProduct":
			rendered = <ProductForm page="Edit Product"></ProductForm>;
			break;

		case "UserTable":
			rendered = <UserTable></UserTable>;
			break;

		case "AddUser":
			rendered = <AddUser></AddUser>;
			break;

		default:
			break;
	}

	return (
		<section id="HomePage" className="d-flex justify-content-center">
			<div className="wrapper">
				<div className="row">
					<SideBar></SideBar>
					{rendered}
				</div>
			</div>
		</section>
	);
}