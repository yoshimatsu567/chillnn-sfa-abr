import { threadId } from 'worker_threads';
import { RepositoryContainer, ModelFactory } from '../../entities';
import { PhaseModel } from '../../entities/models/modules/phaseModel';
import { Scalars } from '../../entities/type';
import { compareNumAsc, compareNumDesc } from '../../util/modules/Comparator';

export class PhaseUsecase {
    constructor(
        private repositoryContainer: RepositoryContainer, //
        private modelFactory: ModelFactory,
    ) {}

    async fetchAllPhase(): Promise<PhaseModel[]> {
        const phases = this.repositoryContainer.phaseMastRepository.fetchAllPhase();
        return (await phases).map((phase) => this.modelFactory.PhaseModel(phase, { isNew: false })).sort((a, b) => compareNumAsc(a.phaseNumber, b.phaseNumber));
    }

    async fetchPhaseDataByClientID(clientID: string): Promise<PhaseModel[]> {
        const phases = this.repositoryContainer.phaseMastRepository.fetchPhaseDataByClientID(clientID);
        return (await phases).map((phase) => this.modelFactory.PhaseModel(phase, { isNew: false }));
    }

    async createNewPhaseTitle(): Promise<PhaseModel> {
        return this.modelFactory.PhaseModel(PhaseModel.getPhaseTitleBlanc(), { isNew: true });
    }

    async createNewPhaseData(clientID: Scalars['ID']): Promise<PhaseModel> {
        return this.modelFactory.PhaseModel(PhaseModel.getPhaseDataBlanc(clientID), { isNew: true });
    }
}
