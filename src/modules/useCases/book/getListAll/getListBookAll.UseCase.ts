import { IgetListBookAllRepository } from './Repositories/IgetListBookAll.Repository';

export class GetListBookAllUseCase {
  constructor(private getListBookRepository: IgetListBookAllRepository) {}

  async execute() {
    const resultListAll = await this.getListBookRepository.getListAll();

    return resultListAll;
  }
}
