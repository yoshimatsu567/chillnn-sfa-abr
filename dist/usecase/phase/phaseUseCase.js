"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhaseUseCase = void 0;
const Comparator_1 = require("../../util/modules/Comparator");
// 必要なのか検討段階
class PhaseUseCase {
    constructor(repositoryContainer, //
    modelFactory) {
        this.repositoryContainer = repositoryContainer;
        this.modelFactory = modelFactory;
    }
    async fetchAllPhase() {
        const phases = this.repositoryContainer.phaseMastRepository.fetchAllPhase();
        return (await phases).map((phase) => this.modelFactory.PhaseModel(phase, { isNew: false })).sort((a, b) => Comparator_1.compareNumDesc(a.createdAt, b.createdAt));
    }
}
exports.PhaseUseCase = PhaseUseCase;
