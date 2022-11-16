import { Schema, model } from 'mongoose';

interface IStockItem {
	name: string;
}

const stockItemSchema = new Schema<IStockItem>({
	name: { type: String, required: true },
});

const StockItem = model<IStockItem>('StockItem', stockItemSchema);

export default StockItem;
