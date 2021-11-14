import { RepositoryContainer, ModelFactory } from '../../entities';
import { ClientModel } from '../../entities/models/modules/clientModel';
import { compareNumDesc } from '../../util/modules/Comparator';

export class ClientUsecase {
    constructor(
        private repositoryContainer: RepositoryContainer, //
        private modelFactory: ModelFactory,
    ) {}

    async fetchAllClient(): Promise<ClientModel[]> {
        const clients = this.repositoryContainer.clientMastRepository.fetchAllClient();
        return (await clients).map((client) => this.modelFactory.ClientModel(client, { isNew: false })).sort((a, b) => compareNumDesc(a.createdAt, b.createdAt));
    }

    async register(input: ClientModel) {
        await this.repositoryContainer.clientMastRepository.addClient(input);
    }

    createNewClient(): ClientModel {
        return this.modelFactory.ClientModel(ClientModel.getBlanc(), { isNew: true });
    }

    // async fetchClientsByPhaseStatus(phaseStatus: string): Promise<ClientModel[]> {
    //     const clients = await this.repositoryContainer.clientMastRepository.fetchClientsByPhaseStatus(phaseStatus);
    //     return clients.map((client) => this.modelFactory.ClientModel(client, { isNew: false })).sort((a, b) => compareNumDesc(a.createdAt, b.createdAt));
    // }

    async fetchClientsByPhaseNumber(phaseNumber: number): Promise<ClientModel[]> {
        const clients = await this.repositoryContainer.clientMastRepository.fetchClientsByPhaseNumberStatus(phaseNumber);
        return clients.map((client) => this.modelFactory.ClientModel(client, { isNew: false })).sort((a, b) => compareNumDesc(a.createdAt, b.createdAt));
    }

    async fetchClientsByPhaseDetail(phaseDetail: string): Promise<ClientModel[]> {
        const clients = await this.repositoryContainer.clientMastRepository.fetchClientsByPhaseDetailStatus(phaseDetail);
        return clients.map((client) => this.modelFactory.ClientModel(client, { isNew: false })).sort((a, b) => compareNumDesc(a.createdAt, b.createdAt));
    }
}
