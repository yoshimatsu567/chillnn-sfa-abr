import { ModelFactory, RepositoryContainer } from '../..';
import { ClientModel } from '../../entities/models/modules/clientModel';
export declare class SearchUseCase {
    private repositoryContainer;
    private modelFactory;
    constructor(repositoryContainer: RepositoryContainer, //
    modelFactory: ModelFactory);
    fetchClientsModelByContentSearch(phaseContent: string | number): Promise<ClientModel[]>;
}