import { RepositoryContainer, ModelFactory } from '../../entities';
import { PhaseModel } from '../../entities/models/modules/phaseModel';
import { Scalars } from '../../entities/type';
export declare class PhaseUsecase {
    private repositoryContainer;
    private modelFactory;
    constructor(repositoryContainer: RepositoryContainer, //
    modelFactory: ModelFactory);
    fetchAllPhase(): Promise<PhaseModel[]>;
    createNewPhaseTitle(): Promise<PhaseModel>;
    createNewPhaseData(clientID: Scalars['ID']): Promise<PhaseModel>;
}
