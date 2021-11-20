
import {
	SET_PRODUCT,
	SET_PRODUCTS,
	SET_USERS,
} from "./actionTypes";

export function login(payload) {
	return () => {
		return new Promise((resolve, reject) => {
			fetch(`http://localhost:3000/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			})
				.then((result) => {
					if (result.ok) {
						resolve(result.json());
					}
					return result.json();
				})
				.then((result) => {
					reject(result);
				})
				.catch((err) => {
					reject(err);
				});
		});
	};
}

export function register(payload) {
	return () => {
		return new Promise((resolve, reject) => {
			fetch(`http://localhost:3000/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					access_token: localStorage.getItem("access_token"),
				},
				body: JSON.stringify(payload),
			})
				.then((result) => {
					if (result.ok) {
						resolve(result.json());
					}
					return result.json();
				})
				.then((result) => {
					reject(result);
				})
				.catch((err) => {
					reject(err);
				});
		});
	};
}

export function setUsers(payload) {
	return {
		type: SET_USERS,
		payload: payload,
	};
}

export function getUsers() {
	return (dispatch) => {
		fetch(`http://localhost:3000/users`, {
			headers: { access_token: localStorage.getItem("access_token") },
		})
			.then((result) => {
				return result.json();
			})
			.then((result) => {
				dispatch(setUsers(result));
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

export function setProducts(payload) {
	return {
		type: SET_PRODUCTS,
		payload: payload,
	};
}

export function getProducts() {
	return (dispatch) => {
		fetch(`http://localhost:3000/products`, {
			headers: {
				access_token: localStorage.getItem("access_token"),
			},
		})
			.then((result) => {
				return result.json();
			})
			.then((result) => {
				dispatch(setProducts(result));
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

export function addProduct(payload) {
	return () => {
		return new Promise((resolve, reject) => {
			fetch(`http://localhost:3000/products`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					access_token: localStorage.getItem("access_token"),
				},
				body: JSON.stringify(payload),
			})
				.then((result) => {
					if (result.ok) {
						resolve(result.json());
					}
					return result.json();
				})
				.then((result) => {
					reject(result);
				})
				.catch((err) => {
					reject(err);
				});
		});
	};
}

export function editProduct(payload, id) {
	return () => {
		return new Promise((resolve, reject) => {
			fetch(`http://localhost:3000/products/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					access_token: localStorage.getItem("access_token"),
				},
				body: JSON.stringify(payload),
			})
				.then((result) => {
					if (result.ok) {
						resolve(result.json());
					}
					return result.json();
				})
				.then((result) => {
					reject(result);
				})
				.catch((err) => {
					reject(err);
				});
		});
	};
}

export function deleteProduct(id) {
	return (dispatch, getState) => {
		return new Promise((resolve, reject) => {
			fetch(`http://localhost:3000/products/${id}`, {
				method: "DELETE",
				headers: { access_token: localStorage.getItem("access_token") },
			})
				.then((result) => {
					if (result.ok) {
						const updateProducts = getState().productReducer.products.filter(
							(el) => el.id !== Number(id)
						);
						dispatch(setProducts(updateProducts));
						resolve(result.json());
					}
					return result.json();
				})
				.then((result) => {
					reject(result);
				})
				.catch((err) => {
					console.log(err);
					reject(err);
				});
		});
	};
}

export function setProduct(payload) {
	return {
		type: SET_PRODUCT,
		payload: payload,
	};
}

export function getProduct(id) {
	return () => {
		return new Promise((resolve, reject) => {
			fetch(`http://localhost:3000/products/${id}`)
				.then((result) => {
					if (result.ok) {
						resolve(result.json());
					} else {
						return result.json();
					}
				})
				.then((result) => {
					reject(result);
				})
				.catch((err) => {
					console.log(err);
				});
		});
	};
}
