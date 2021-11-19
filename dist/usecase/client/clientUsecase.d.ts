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
    deleteClient(clientID: string): Promise<ClientMast>;
    fetchClientByClientID(clientID: string): Promise<ClientModel | null>;
    fetchClientsByPhaseNumberStatus(phaseNumber: number): Promise<ClientModel[]>;
    fetchClientsByPhaseDetailStatus(phaseDetail: string): Promise<ClientModel[] | null>;
}
