import { RepositoryContainer, ModelFactory } from '../../entities';
import { ClientModel } from '../../entities/models/modules/clientModel';
export declare class ClientUsecase {
    private repositoryContainer;
    private modelFactory;
    constructor(repositoryContainer: RepositoryContainer, //
    modelFactory: ModelFactory);
    fetchAllClient(): Promise<ClientModel[]>;
    register(input: ClientModel): Promise<void>;
    createNewClient(): ClientModel;
    fetchClientsByPhaseNumber(phaseNumber: number): Promise<ClientModel[]>;
    fetchClientsByPhaseDetail(phaseDetail: string): Promise<ClientModel[]>;
}
