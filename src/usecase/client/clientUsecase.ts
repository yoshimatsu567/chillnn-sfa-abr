import { RepositoryContainer, ModelFactory, ClientMast } from '../../entities';
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

        async deleteClient(clientID: string) {
                const deleteClient = await this.repositoryContainer.clientMastRepository.fetchClientByClientID(clientID);
                if (deleteClient) {
                        deleteClient.deletedAt = new Date().getTime();
                }
                return deleteClient;
                // const deleteClient = await this.repositoryContainer.clientMastRepository.deleteClient(clientID);
                // return deleteClient;
        }

        async fetchClientByClientID(clientID: string): Promise<ClientModel | null> {
                const client = await this.repositoryContainer.clientMastRepository.fetchClientByClientID(clientID);
                if (typeof client !== null && client) {
                        return this.modelFactory.ClientModel(client, { isNew: false });
                } else {
                        return null;
                }
        }

        async fetchClientsByPhaseDetailStatus(phaseDetail: string): Promise<ClientModel[] | null> {
                const clients = await this.repositoryContainer.clientMastRepository.fetchClientsByPhaseDetailStatus(phaseDetail);
                if (!clients) return null;
                if (clients.length !== 0) {
                        return clients.map((client) => this.modelFactory.ClientModel(client, { isNew: false })).sort((a, b) => compareNumDesc(a.createdAt, b.createdAt));
                } else {
                        return null;
                }
        }
}
