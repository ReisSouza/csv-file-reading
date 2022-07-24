import 'dotenv/config';
import express from 'express';
import { router } from './routes';

const app = express();

app.use(router);
app.listen(process.env.PORT, () => console.log(`Server listening on ${process.env.PORT}`));
