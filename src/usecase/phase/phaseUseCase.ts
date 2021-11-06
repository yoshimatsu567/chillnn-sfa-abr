import { RepositoryContainer, ModelFactory } from '../../entities';
import { PhaseModel } from '../../entities/models/modules/phaseModel';
import { PhaseMast } from '../../entities/type';
import { compareNumDesc } from '../../util/modules/Comparator';

export class PhaseUseCase {
    constructor(
        private repositoryContainer: RepositoryContainer, //
        private modelFactory: ModelFactory,
    ) {}

    async fetchAllPhase(): Promise<PhaseMast[]> {
        const phases = this.repositoryContainer.phaseMastRepository.fetchAllPhase();
        return (await phases).map((phase) => phase).sort((a, b) => compareNumDesc(a.createdAt, b.createdAt));
    }

    createNewPhase(): PhaseModel {
        return this.modelFactory.PhaseModel(PhaseModel.getPhaseBlanc(), { isNew: true });
    }
}
