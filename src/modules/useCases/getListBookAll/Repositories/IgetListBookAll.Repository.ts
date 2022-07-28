import { ListType } from '../../../../types/list';

export interface IgetListBookAllRepository {
    getListAll(): Promise<ListType[]>
}
