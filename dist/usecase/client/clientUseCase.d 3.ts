import { RepositoryContainer, ModelFactory } from '../../entities';
import { ClientModel } from '../../entities/models/modules/clientModel';
import { ClientMast } from '../../entities/type';
export declare class ClientUseCase {
    private repositoryContainer;
    private modelFactory;
    constructor(repositoryContainer: RepositoryContainer, //
    modelFactory: ModelFactory);
    fetchAllClient(): Promise<ClientMast[]>;
    register(input: ClientModel): Promise<void>;
    createNewClient(): ClientModel;
}
