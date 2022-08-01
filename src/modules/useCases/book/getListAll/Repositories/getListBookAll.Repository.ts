import { client } from '../../../../../database/client';
import { ListType } from '../../insert/InsertCSVBookUseCase';
import { IgetListBookAllRepository } from './IgetListBookAll.Repository';

export class GetListBookAllRepository implements IgetListBookAllRepository {
  async getListAll(): Promise<ListType[]> {
    const resultList = await client.products.findMany();

    return resultList;
  }
}
