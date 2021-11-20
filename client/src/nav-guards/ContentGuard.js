import { Route, Switch } from "react-router-dom";

export default function ContentGuard({ children, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				localStorage.getItem("access_token") ? (
					children
				) : (
					<Switch
						to={{
							pathname: "/login",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}