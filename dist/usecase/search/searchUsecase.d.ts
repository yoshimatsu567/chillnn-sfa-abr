import { FetchClientsByPhaseInput, ModelFactory, RepositoryContainer } from '../..';
import { ClientModel } from '../../entities/models/modules/clientModel';
export declare class SearchUsecase {
    private repositoryContainer;
    private modelFactory;
    constructor(repositoryContainer: RepositoryContainer, //
    modelFactory: ModelFactory);
    fetchClientsModelByContentSearch(phaseContent: FetchClientsByPhaseInput): Promise<ClientModel[]>;
}
