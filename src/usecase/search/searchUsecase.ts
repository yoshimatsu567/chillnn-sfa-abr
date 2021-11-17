import { compareNumAsc, compareNumDesc, compareStrDesc, FetchClientsByPhaseInput, ModelFactory, RepositoryContainer, Scalars } from '../..';
import { ClientModel } from '../../entities/models/modules/clientModel';
import { UserModel } from '../../entities/models/modules/userModel';

export class SearchUsecase {
        constructor(
                private repositoryContainer: RepositoryContainer, //
                private modelFactory: ModelFactory,
        ) {}
}
