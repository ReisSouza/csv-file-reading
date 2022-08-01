import { Readable } from 'stream';
import readLine from 'readline';
import { client } from '../../../../database/client';

export type ListType = {
    title: string;
    isbn: string;
    author: string;
    category: string;
    value: number;
};

export interface IUseCase {
    file: any
}

export const InsertCSVBookUseCase = async ({ file }:IUseCase) => {
  if (!file) {
    throw new Error('Insert one file format CSV');
  }
  const { buffer } = file;
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
};
