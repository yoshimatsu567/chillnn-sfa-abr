import { RepositoryContainer, ModelFactory } from '../../entities';
import { PhaseModel } from '../../entities/models/modules/phaseModel';
import { PhaseMast, PHASE_STATUS, Scalars } from '../../entities/type';
import { compareNumDesc } from '../../util/modules/Comparator';

// 必要なのか検討段階
export class PhaseUseCase {
    constructor(
        private repositoryContainer: RepositoryContainer, //
        private modelFactory: ModelFactory,
    ) {}

    async fetchAllPhase(): Promise<PhaseModel[]> {
        const phases = this.repositoryContainer.phaseMastRepository.fetchAllPhase();
        return (await phases).map((phase) => this.modelFactory.PhaseModel(phase, { isNew: false })).sort((a, b) => compareNumDesc(a.createdAt, b.createdAt));
    }

    async createNewPhaseTitle(clientID: Scalars['ID'], phaseStatus: PHASE_STATUS): Promise<PhaseModel> {
        return this.modelFactory.PhaseModel(PhaseModel.getPhaseTitleBlanc(clientID, phaseStatus), { isNew: true });
    }

    async createNewPhaseData(clientID: Scalars['ID'], phaseStatus: PHASE_STATUS): Promise<PhaseModel> {
        return this.modelFactory.PhaseModel(PhaseModel.getPhaseDataBlanc(clientID, phaseStatus), { isNew: true });
    }
}
