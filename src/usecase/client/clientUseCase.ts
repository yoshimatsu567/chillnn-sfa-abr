import { RepositoryContainer, ModelFactory } from '../../entities';
import { ClientModel } from '../../entities/models/modules/clientModel';
import { ClientMast } from '../../entities/type';
import { compareNumDesc } from '../../util/modules/Comparator';

export class ClientUseCase {
    constructor(
        private repositoryContainer: RepositoryContainer, //
        private modelFactory: ModelFactory,
    ) {}

    async fetchAllClient(): Promise<ClientMast[]> {
        const clients = this.repositoryContainer.clientMastRepository.fetchAllClient();
        return (await clients).map((client) => client).sort((a, b) => compareNumDesc(a.createdAt, b.createdAt));
    }

    async register(input: ClientModel) {
        await this.repositoryContainer.clientMastRepository.addClient(input);
    }

    async createNewClient(): Promise<ClientModel> {
        const me = await this.repositoryContainer.userMastRepository.fetchMyUserMast();
        return this.modelFactory.ClientModel(ClientModel.getBlanc(), { isNew: true, currentUserID: me.userID });
    }
}
