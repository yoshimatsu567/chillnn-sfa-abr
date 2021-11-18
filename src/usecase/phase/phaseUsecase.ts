import { threadId } from 'worker_threads';
import { RepositoryContainer, ModelFactory } from '../../entities';
import { PhaseModel } from '../../entities/models/modules/phaseModel';
import { PhaseMast, Scalars } from '../../entities/type';
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

        async fetchPhaseByPhaseID(phaseID: string): Promise<PhaseModel | null> {
                const phase = await this.repositoryContainer.phaseMastRepository.fetchPhaseByPhaseID(phaseID);
                if (typeof phase !== null && phase) {
                        return this.modelFactory.PhaseModel(phase, { isNew: false });
                } else {
                        return null;
                }
        }

        async fetchPhaseDataByClientID(clientID: string): Promise<PhaseModel[]> {
                const phases = this.repositoryContainer.phaseMastRepository.fetchPhaseDataByClientID(clientID);
                return (await phases).map((phase) => this.modelFactory.PhaseModel(phase, { isNew: false }));
        }

        async fetchPhaseDataByClientIDAndPhaseDetail(clientID: string, phaseDetail: string): Promise<PhaseModel | null> {
                const phase = await this.repositoryContainer.phaseMastRepository.fetchPhaseDataByClientIDAndPhaseDetail(clientID, phaseDetail);
                if (typeof phase !== null && phase) {
                        return this.modelFactory.PhaseModel(phase, { isNew: false });
                } else {
                        return null;
                }
        }

        async createNewPhaseTitle(): Promise<PhaseModel> {
                return this.modelFactory.PhaseModel(PhaseModel.getPhaseTitleBlanc(), { isNew: true });
        }

        async createNewPhaseData(clientID: Scalars['ID']): Promise<PhaseModel> {
                return this.modelFactory.PhaseModel(PhaseModel.getPhaseDataBlanc(clientID), { isNew: true });
        }
}
