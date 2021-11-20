import "./App.css";
import "./views/LoginPage";
import LoginPage from "./views/LoginPage";
import HomePage from "./views/HomePage";

import { Switch } from "react-router-dom";
import ContentGuard from "./nav-guards/ContentGuard";
import LoginGuard from "./nav-guards/LoginGuard";

function App() {
	return (
		<div>
			<Switch>
				<LoginGuard path="/login">
					<LoginPage></LoginPage>
				</LoginGuard>
				<ContentGuard path="/add-product">
					<HomePage page="AddProduct"></HomePage>
				</ContentGuard>
				<ContentGuard path="/edit-product/:id">
					<HomePage page="EditProduct"></HomePage>
				</ContentGuard>
				<ContentGuard path="/users">
					<HomePage page="UserTable"></HomePage>
				</ContentGuard>
				<ContentGuard path="/add-user">
					<HomePage page="AddUser"></HomePage>
				</ContentGuard>
				<ContentGuard path="/">
					<HomePage page="ProductPage"></HomePage>
				</ContentGuard>
			</Switch>
		</div>
	);
}

export default App;

