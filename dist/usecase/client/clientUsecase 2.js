"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUsecase = void 0;
const clientModel_1 = require("../../entities/models/modules/clientModel");
const Comparator_1 = require("../../util/modules/Comparator");
class ClientUsecase {
    constructor(repositoryContainer, //
    modelFactory) {
        this.repositoryContainer = repositoryContainer;
        this.modelFactory = modelFactory;
    }
    async fetchAllClient() {
        const clients = this.repositoryContainer.clientMastRepository.fetchAllClient();
        return (await clients).map((client) => this.modelFactory.ClientModel(client, { isNew: false })).sort((a, b) => Comparator_1.compareNumDesc(a.createdAt, b.createdAt));
    }
    async register(input) {
        await this.repositoryContainer.clientMastRepository.addClient(input);
    }
    createNewClient() {
        return this.modelFactory.ClientModel(clientModel_1.ClientModel.getBlanc(), { isNew: true });
    }
    // async fetchClientsByPhaseStatus(phaseStatus: string): Promise<ClientModel[]> {
    //     const clients = await this.repositoryContainer.clientMastRepository.fetchClientsByPhaseStatus(phaseStatus);
    //     return clients.map((client) => this.modelFactory.ClientModel(client, { isNew: false })).sort((a, b) => compareNumDesc(a.createdAt, b.createdAt));
    // }
    async fetchClientByClientID(clientID) {
        return this.repositoryContainer.clientMastRepository.fetchClientByClientID(clientID);
    }
    async fetchClientsByPhaseNumber(phaseNumber) {
        const clients = await this.repositoryContainer.clientMastRepository.fetchClientsByPhaseNumberStatus(phaseNumber);
        return clients.map((client) => this.modelFactory.ClientModel(client, { isNew: false })).sort((a, b) => Comparator_1.compareNumDesc(a.createdAt, b.createdAt));
    }
    async fetchClientsByPhaseDetail(phaseDetail) {
        const clients = await this.repositoryContainer.clientMastRepository.fetchClientsByPhaseDetailStatus(phaseDetail);
        return clients.map((client) => this.modelFactory.ClientModel(client, { isNew: false })).sort((a, b) => Comparator_1.compareNumDesc(a.createdAt, b.createdAt));
    }
}
exports.ClientUsecase = ClientUsecase;
