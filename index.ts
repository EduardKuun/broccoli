import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import config from './config';

const app: Express = express();
const port = config.port;

mongoose
	.connect(config.mongoURI)
	.then(() => console.log('MongoDb connected!'))
	.catch((err) => console.log(err));

app.get('/', (req: Request, res: Response) => {
	res.send('Express + TypeScript Server');
});

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
