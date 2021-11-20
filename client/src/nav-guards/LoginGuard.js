import { Route, Switch } from "react-router-dom";

export default function LoginGuard({ children, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				localStorage.getItem("access_token") ? (
					<Switch
						to={{
							pathname: "/",
							state: { from: location },
						}}
					/>
				) : (
					children
				)
			}
		/>
	);
}