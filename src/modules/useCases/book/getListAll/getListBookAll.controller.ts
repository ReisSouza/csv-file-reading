import { Request, Response } from 'express';
import { GetListBookAllUseCase } from './getListBookAll.UseCase';

export class GetListBookAllController {
  constructor(private getListBook: GetListBookAllUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const ListBookAll = await this.getListBook.execute();

    return response.status(200).json({ ListBookAll });
  }
}
