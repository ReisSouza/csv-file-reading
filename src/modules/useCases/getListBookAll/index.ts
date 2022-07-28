import { GetListBookAllRepository } from './Repositories/getListBookAll.Repository';
import { GetListBookAllController } from './getListBookAll.controller';
import { GetListBookAllUseCase } from './getListBookAll.UseCase';

const getListBookAllRepository = new GetListBookAllRepository();
const getListBookAllUseCase = new GetListBookAllUseCase(getListBookAllRepository);
const getListBookAllControllerIndex = new GetListBookAllController(getListBookAllUseCase);

export { getListBookAllControllerIndex };
