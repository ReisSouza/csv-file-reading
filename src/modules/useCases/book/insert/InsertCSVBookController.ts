import { Response, Request } from 'express';
import { InsertCSVBookUseCase } from './InsertCSVBookUseCase';

export const InsertCSVBookController = async (request:Request, response:Response) => {
  const { file } = request;

  await InsertCSVBookUseCase({ file });

  return response.status(200).json({ message: 'Inserted successfully' });
};
