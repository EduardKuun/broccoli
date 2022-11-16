import { Schema, model } from 'mongoose';

interface IProduct {
	name: string;
	quantity: number;
	code?: string;
	condition: 'New' | 'Used';
}

const productSchema = new Schema<IProduct>({
	name: { type: String, required: true },
	quantity: { type: Number, required: true },
	code: { type: String },
	condition: { type: String, required: true },
});

const Product = model<IProduct>('Product', productSchema);

export default Product;
