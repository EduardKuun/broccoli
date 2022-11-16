import { Router as ExpressRouter } from 'express';
import Product from '../models/Product';

const router = ExpressRouter();

router.get('/', async (req, res) => {
	try {
		const products = await Product.find();
		if (!products) {
			throw new Error('No products');
		}
		res.status(200).json(products);
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
});

router.post('/', async (req, res) => {
	const { name, quantity, code, condition } = req.body;
	const newProduct = new Product({ name, quantity, code, condition });

	try {
		const product = await newProduct.save();
		if (!product) {
			throw new Error('Could not create product');
		}
		res.status(200).json(product);
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
});

router.delete('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const product = Product.findById(id);
		if (!product) {
			throw new Error('No transaction found');
		}
		const removed = await product.remove();
		if (!removed) {
			throw new Error('Could not delete product');
		}
		res.status(200).json({ id });
	} catch (error: any) {
		res.status(404).json({ message: error.message });
	}
});

router.post('/batchDelete', async (req, res) => {
	const { ids } = req.body;
	try {
		await Product.deleteMany({ _id: { $in: ids } });
		res.send('Record deleted');
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
});

export default router;
