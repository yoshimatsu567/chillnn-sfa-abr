import { ModelFactory, RepositoryContainer, Scalars } from '../..';
import { ClientModel } from '../../entities/models/modules/clientModel';
export declare class SearchUsecase {
    private repositoryContainer;
    private modelFactory;
    constructor(repositoryContainer: RepositoryContainer, //
    modelFactory: ModelFactory);
    fetchClientsModelByContentSearch(phaseContent: Scalars['ID'] | Scalars['String']): Promise<ClientModel[]>;
}
