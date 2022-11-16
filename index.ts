import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import config from './config';
import productsRoutes from './routes/products';
import dashboardRoutes from './routes/dashboard';

const app: Express = express();
const port = config.port;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));

mongoose
	.connect(config.mongoURI)
	.then(() => console.log('MongoDb connected!'))
	.catch((err) => console.log(err));

app.use('/api/dashboard', dashboardRoutes);
app.use('/api/products', productsRoutes);

app.get('/', (req: Request, res: Response) => {
	res.send('Express + TypeScript Server');
});

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
