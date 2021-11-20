import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/actions";

export default function UserTable() {
	const dispatch = useDispatch();
	const { users } = useSelector((state) => state.userReducer);

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	if (users[0]) {
		return (
			<div className="col-10 px-5" id="UserTable">
				<h3 className="my-4">Users</h3>
				<hr className="mb-4" />
				<table className="w-100">
					<thead>
						<tr>
							<th className="p-3 pt-0">ID</th>
							<th className="p-3 pt-0">Name</th>
							<th className="p-3 pt-0">E-mail</th>
							<th className="p-3 pt-0">Gender</th>
						</tr>
					</thead>
					<tbody>
						{users.map((el) => {
							return (
								<tr key={el.id}>
									<td className="p-3">{el.id}</td>
									<td className="p-3">{el.name}</td>
									<td className="p-3">{el.email}</td>
									<td className="p-3">{el.gender}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	} else {
		return <div className="col-10 px-5"></div>;
	}
}