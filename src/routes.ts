import { Router } from 'express';

import multer from 'multer';

import { getListBookAllControllerIndex } from './modules/useCases/book/getListAll';
import { InsertCSVBookController } from './modules/useCases/book/insert/InsertCSVBookController';

const multerConfig = multer();

const routerBook = Router();

routerBook.post('/insertBooks', multerConfig.single('file'), InsertCSVBookController);

routerBook.get('/getListBookAll', (request, response) => getListBookAllControllerIndex.handle(request, response));

export { routerBook };
