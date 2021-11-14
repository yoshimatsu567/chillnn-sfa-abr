import { compareNumAsc, compareNumDesc, compareStrDesc, FetchClientsByPhaseInput, ModelFactory, RepositoryContainer, Scalars } from '../..';
import { ClientModel } from '../../entities/models/modules/clientModel';
import { UserModel } from '../../entities/models/modules/userModel';

export class SearchUsecase {
    constructor(
        private repositoryContainer: RepositoryContainer, //
        private modelFactory: ModelFactory,
    ) {}

    // async fetchClientsModelByContentSearch(phaseContent: FetchClientsByPhaseInput): Promise<ClientModel[]> {
    //     const clients = await this.repositoryContainer.clientMastRepository.fetchClientsByContentSearch(phaseContent);
    //     return clients.map((client) => this.modelFactory.ClientModel(client, { isNew: false })).sort((a, b) => compareNumAsc(a.createdAt, b.createdAt));
    //     // if (typeof phaseContent === 'string') {
    //     //     return clients.map((client) => this.modelFactory.ClientModel(client, { isNew: false })).sort((a, b) => compareNumAsc(a.phaseStatus, b.phaseStatus));
    //     // } else {
    //     //     return clients.map((client) => this.modelFactory.ClientModel(client, { isNew: false })).sort((a, b) => compareNumAsc(a.phaseStatus, b.phaseStatus));
    //     // }
    // }
}
