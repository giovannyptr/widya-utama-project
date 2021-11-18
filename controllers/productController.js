const { Product } = require("../models");

class productController {
    
	static async getProducts(req, res, next) {
		try {
			
			const result = await Product.findAll();

			res.status(200).json(result)

		} catch (err) {
			console.log(err);
			next(err);
		}
	}


	static async detailProduct(req, res, next) {
		try {

			const id = Number(req.params.id);

			const result = await Product.findOne({
				where: { id: id || null },
			});

			if (!result) {
				throw { title: "not found" };
			}

			res.status(200).json(result)

		} catch (err) {
			next(err);
		}
	}

	static async addProduct(req, res, next) {
		console.log('add=', req.body);

		try {
			const { name, description } = req.body;

			const result = await Product.create({name, description})

			res.status(201).json(result)

		} catch (err) {
			console.log(err);
			next(err)

		}
	}

	static async editProduct(req, res, next) {
		try {
			const id = Number(req.params.id)

			const { name, description } = req.body

			const target = await Product.findOne({ where: { id: id || null } });

			if (!target) {
				throw { title: "not found" };
			}

			await Product.update(
				{
					name,
					description
				},
				{
					where: { id: id || null },
				}
			);

			res.status(200).json({ message: `Product with id ${id} has been updated!` })

		} catch (err) {
			next(err);
		}
	}

	static async deleteProduct(req, res, next) {
		console.log("delete");

		try {
			const id = Number(req.params.id);

			const target = await Product.findOne({ where: { id: id || null } });

			if (!target) {
				throw { title: "not found" };
			}
			await Product.destroy({ where: { id }})


			res.status(200).json({ message: `Product with id ${id} has been deleted!` })

		} catch (err) {
			next(err);
            await t.rollback()
		}
	}
}

module.exports = productController;