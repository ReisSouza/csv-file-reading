import { ListType } from '../../insert/InsertCSVBookUseCase';

export interface IgetListBookAllRepository {
    getListAll(): Promise<ListType[]>
}
