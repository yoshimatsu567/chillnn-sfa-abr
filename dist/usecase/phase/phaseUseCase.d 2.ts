import { RepositoryContainer, ModelFactory } from '../../entities';
import { PhaseModel } from '../../entities/models/modules/phaseModel';
import { PhaseMast } from '../../entities/type';
export declare class PhaseUseCase {
    private repositoryContainer;
    private modelFactory;
    constructor(repositoryContainer: RepositoryContainer, //
    modelFactory: ModelFactory);
    fetchAllPhase(): Promise<PhaseMast[]>;
    createNewPhase(): PhaseModel;
}
