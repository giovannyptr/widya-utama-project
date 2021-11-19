const errorHandler = (err, req, res, next) => {
	let message;

	switch (err.name) {
		case "SequelizeValidationError":
			message = err.errors.map((el) => el.message);
			res.status(400).json({ message })
			break;

		case "SequelizeUniqueConstraintError":
			message = err.errors.map((el) => el.message);
			res.status(400).json({ message })
			break;

		case "unauthorized":
			message = "Invalid email/password";
			res.status(401).json({ message });
			break;

		case "invalid token":
			message = "Please login first";
			res.status(401).json({ message });
			break;

		case "authErr":
			message = "Token unauthorized";
			res.status(401).json({ message });
			break;

		case "JsonWebTokenError":
			message = "Invalid token";
			res.status(401).json({ message });
			break;

		case "not found":
			message = "Product not found";
			res.status(404).json({ message });
			break;

		default:
			console.log(err);
			res.status(500).json({ message: "Internal Server Error" });
			break;
	}
};

module.exports = errorHandler;