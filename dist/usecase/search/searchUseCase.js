"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchUsecase = void 0;
const __1 = require("../..");
class SearchUsecase {
    constructor(repositoryContainer, //
    modelFactory) {
        this.repositoryContainer = repositoryContainer;
        this.modelFactory = modelFactory;
    }
    async fetchClientsModelByContentSearch(phaseContent) {
        const clients = await this.repositoryContainer.clientMastRepository.fetchClientsByContentSearch(phaseContent);
        return clients.map((client) => this.modelFactory.ClientModel(client, { isNew: false })).sort((a, b) => __1.compareNumAsc(a.phaseStatus, b.phaseStatus));
        // if (typeof phaseContent === 'string') {
        //     return clients.map((client) => this.modelFactory.ClientModel(client, { isNew: false })).sort((a, b) => compareNumAsc(a.phaseStatus, b.phaseStatus));
        // } else {
        //     return clients.map((client) => this.modelFactory.ClientModel(client, { isNew: false })).sort((a, b) => compareNumAsc(a.phaseStatus, b.phaseStatus));
        // }
    }
}
exports.SearchUsecase = SearchUsecase;
