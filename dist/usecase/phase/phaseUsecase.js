"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhaseUsecase = void 0;
const phaseModel_1 = require("../../entities/models/modules/phaseModel");
const Comparator_1 = require("../../util/modules/Comparator");
class PhaseUsecase {
    constructor(repositoryContainer, //
    modelFactory) {
        this.repositoryContainer = repositoryContainer;
        this.modelFactory = modelFactory;
    }
    async fetchAllPhase() {
        const phases = this.repositoryContainer.phaseMastRepository.fetchAllPhase();
        return (await phases).map((phase) => this.modelFactory.PhaseModel(phase, { isNew: false })).sort((a, b) => Comparator_1.compareNumAsc(a.phaseNumber, b.phaseNumber));
    }
    async fetchPhaseByPhaseID(phaseID) {
        const phase = await this.repositoryContainer.phaseMastRepository.fetchPhaseByPhaseID(phaseID);
        if (typeof phase !== null && phase) {
            return this.modelFactory.PhaseModel(phase, { isNew: false });
        }
        else {
            return null;
        }
    }
    async fetchPhaseDataByClientID(clientID) {
        const phases = this.repositoryContainer.phaseMastRepository.fetchPhaseDataByClientID(clientID);
        return (await phases).map((phase) => this.modelFactory.PhaseModel(phase, { isNew: false }));
    }
    async fetchPhaseDataByClientIDAndPhaseDetail(clientID, phaseDetail) {
        const phase = await this.repositoryContainer.phaseMastRepository.fetchPhaseDataByClientIDAndPhaseDetail(clientID, phaseDetail);
        if (typeof phase !== null && phase) {
            return this.modelFactory.PhaseModel(phase, { isNew: false });
        }
        else {
            return null;
        }
    }
    async createNewPhaseTitle() {
        return this.modelFactory.PhaseModel(phaseModel_1.PhaseModel.getPhaseTitleBlanc(), { isNew: true });
    }
    async createNewPhaseData(clientID) {
        return this.modelFactory.PhaseModel(phaseModel_1.PhaseModel.getPhaseDataBlanc(clientID), { isNew: true });
    }
}
exports.PhaseUsecase = PhaseUsecase;
