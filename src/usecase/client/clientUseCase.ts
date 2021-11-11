import { RepositoryContainer, ModelFactory } from '../../entities';
import { ClientModel } from '../../entities/models/modules/clientModel';
import { compareNumDesc } from '../../util/modules/Comparator';

export class ClientUseCase {
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
}
