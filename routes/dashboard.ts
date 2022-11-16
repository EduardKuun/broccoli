import { Router as ExpressRouter } from 'express';
import StockItem from '../models/Product';

const router = ExpressRouter();

router.get('/', async (req, res) => {
	try {
		const payload = {
			stockItemCount: await StockItem.count(),
		};

		res.status(200).json(payload);
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
});

export default router;
