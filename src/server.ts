import 'dotenv/config';
import express from 'express';
import { routerBook } from './routes';

const app = express();

app.use(routerBook);
app.listen(process.env.PORT, () => console.log(`Server listening on ${process.env.PORT}`));
