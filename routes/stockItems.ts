import { Router as ExpressRouter } from 'express';
import StockItem from '../models/StockItem';

const router = ExpressRouter();

router.get('/', async (req, res) => {
	try {
		const stockItems = await StockItem.find();
		if (!stockItems) {
			throw new Error('No stock items');
		}
		res.status(200).json(stockItems);
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
});

router.post('/', async (req, res) => {
	const { name } = req.body;
	const newStockItem = new StockItem({ name });

	try {
		const stockItem = await newStockItem.save();
		if (!stockItem) {
			throw new Error('Could not create stock item');
		}
		res.status(200).json(stockItem);
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
});

router.delete('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const stockItem = StockItem.findById(id);
		if (!stockItem) {
			throw new Error('No transaction found');
		}
		const removed = await stockItem.remove();
		if (!removed) {
			throw new Error('Could not delete stock item');
		}
		res.status(200).json({ id });
	} catch (error: any) {
		res.status(404).json({ message: error.message });
	}
});

export default router;
