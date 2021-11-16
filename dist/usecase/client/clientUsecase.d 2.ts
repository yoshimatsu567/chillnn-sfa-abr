import { RepositoryContainer, ModelFactory, ClientMast } from '../../entities';
import { ClientModel } from '../../entities/models/modules/clientModel';
export declare class ClientUsecase {
    private repositoryContainer;
    private modelFactory;
    constructor(repositoryContainer: RepositoryContainer, //
    modelFactory: ModelFactory);
    fetchAllClient(): Promise<ClientModel[]>;
    register(input: ClientModel): Promise<void>;
    createNewClient(): ClientModel;
    fetchClientByClientID(clientID: string): Promise<ClientMast | null>;
    fetchClientsByPhaseNumber(phaseNumber: number): Promise<ClientModel[]>;
    fetchClientsByPhaseDetail(phaseDetail: string): Promise<ClientModel[]>;
}
