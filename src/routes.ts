/* eslint-disable no-unsafe-optional-chaining */
import { Router, Request, Response } from 'express';
import { Readable } from 'stream';
import readLine from 'readline';
import multer from 'multer';

import { ListType } from './types/list';
import { client } from './database/client';

const multerConfig = multer();

const router = Router();

router.post('/list-books', multerConfig.single('file'), async (request:Request, response:Response) => {
  const { file } = request;
  if (file) {
    const { buffer } = file;

    try {
      const readableFile = new Readable();
      readableFile.push(buffer);
      readableFile.push(null);

      const listBookLine = readLine.createInterface({ input: readableFile });

      const list :ListType[] = [];

      for await (const line of listBookLine) {
        const listSplit = line.split(';');
        list.push({
          title: listSplit[0] || '',
          isbn: listSplit[1] || '',
          author: listSplit[2] || '',
          category: listSplit[3] || '',
          value: Number(listSplit[4]?.split(' ')[1]?.replace(',', '.')) || 0,
        });
      }

      const listWithoutHeader = list.slice(6, -1);

      for await (const {
        author, isbn, category, value, title,
      } of listWithoutHeader) {
        await client.products.create({
          data: {
            author,
            isbn,
            category,
            value,
            title,
          },
        });
      }
      return response.status(200).json({ listWithoutHeader });
    } catch (err) {
      return response.json(err);
    }
  }
  return response.status(417).send({ message: '' });
});

export { router };
