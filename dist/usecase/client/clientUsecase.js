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
    async deleteClient(clientID) {
        const deleteClient = await this.repositoryContainer.clientMastRepository.fetchClientByClientID(clientID);
        if (deleteClient) {
            deleteClient.deletedAt = new Date().getTime();
        }
        return deleteClient;
        // const deleteClient = await this.repositoryContainer.clientMastRepository.deleteClient(clientID);
        // return deleteClient;
    }
    async fetchClientByClientID(clientID) {
        const client = await this.repositoryContainer.clientMastRepository.fetchClientByClientID(clientID);
        if (typeof client !== null && client) {
            return this.modelFactory.ClientModel(client, { isNew: false });
        }
        else {
            return null;
        }
    }
    async fetchClientsByPhaseDetailStatus(phaseDetail) {
        const clients = await this.repositoryContainer.clientMastRepository.fetchClientsByPhaseDetailStatus(phaseDetail);
        if (!clients)
            return null;
        if (clients.length !== 0) {
            return clients.map((client) => this.modelFactory.ClientModel(client, { isNew: false })).sort((a, b) => Comparator_1.compareNumDesc(a.createdAt, b.createdAt));
        }
        else {
            return null;
        }
    }
}
exports.ClientUsecase = ClientUsecase;
