"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhaseUsecase = void 0;
const phaseModel_1 = require("../../entities/models/modules/phaseModel");
const Comparator_1 = require("../../util/modules/Comparator");
// 必要なのか検討段階
class PhaseUsecase {
    constructor(repositoryContainer, //
    modelFactory) {
        this.repositoryContainer = repositoryContainer;
        this.modelFactory = modelFactory;
    }
    async fetchAllPhase() {
        const phases = this.repositoryContainer.phaseMastRepository.fetchAllPhase();
        return (await phases).map((phase) => this.modelFactory.PhaseModel(phase, { isNew: false })).sort((a, b) => Comparator_1.compareNumDesc(a.createdAt, b.createdAt));
    }
    async fetchAllPhaseTitle() {
        const phases = this.repositoryContainer.phaseMastRepository.fetchAllPhaseTitle();
        return (await phases).map((phase) => this.modelFactory.PhaseModel(phase, { isNew: false }));
    }
    async fetchPhaseDataByClientID(clientID) {
        const phases = this.repositoryContainer.phaseMastRepository.fetchPhaseDataByClientID(clientID);
        return (await phases).map((phase) => this.modelFactory.PhaseModel(phase, { isNew: false }));
    }
    async createNewPhaseTitle() {
        return this.modelFactory.PhaseModel(phaseModel_1.PhaseModel.getPhaseTitleBlanc(), { isNew: true });
    }
    async createNewPhaseData(clientID) {
        return this.modelFactory.PhaseModel(phaseModel_1.PhaseModel.getPhaseDataBlanc(clientID), { isNew: true });
    }
}
exports.PhaseUsecase = PhaseUsecase;
