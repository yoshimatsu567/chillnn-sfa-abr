import { RepositoryContainer, ModelFactory } from '../../entities';
import { PhaseModel } from '../../entities/models/modules/phaseModel';
import { PHASE_STATUS, Scalars } from '../../entities/type';
export declare class PhaseUseCase {
    private repositoryContainer;
    private modelFactory;
    constructor(repositoryContainer: RepositoryContainer, //
    modelFactory: ModelFactory);
    fetchAllPhase(): Promise<PhaseModel[]>;
    createNewPhaseTitle(phaseStatus: PHASE_STATUS): Promise<PhaseModel>;
    createNewPhaseData(clientID: Scalars['ID'], phaseStatus: PHASE_STATUS): Promise<PhaseModel>;
}
