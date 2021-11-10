import { compareNumAsc, compareNumDesc, compareStrDesc, ModelFactory, RepositoryContainer } from '../..';
import { ClientModel } from '../../entities/models/modules/clientModel';
import { UserModel } from '../../entities/models/modules/userModel';

export class SearchUseCase {
    constructor(
        private repositoryContainer: RepositoryContainer, //
        private modelFactory: ModelFactory,
    ) {}

    async fetchClientsModelByContentSearch(phaseContent: string | number): Promise<ClientModel[]> {
        const clients = await this.repositoryContainer.clientMastRepository.fetchClientsByContentSearch(phaseContent);
        return clients.map((client) => this.modelFactory.ClientModel(client, { isNew: false })).sort((a, b) => compareNumAsc(a.phaseStatus, b.phaseStatus));
        // if (typeof phaseContent === 'string') {
        //     return clients.map((client) => this.modelFactory.ClientModel(client, { isNew: false })).sort((a, b) => compareNumAsc(a.phaseStatus, b.phaseStatus));
        // } else {
        //     return clients.map((client) => this.modelFactory.ClientModel(client, { isNew: false })).sort((a, b) => compareNumAsc(a.phaseStatus, b.phaseStatus));
        // }
    }
}
