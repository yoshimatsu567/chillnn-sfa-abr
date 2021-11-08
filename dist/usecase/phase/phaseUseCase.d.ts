import { RepositoryContainer, ModelFactory } from '../../entities';
import { PhaseModel } from '../../entities/models/modules/phaseModel';
export declare class PhaseUseCase {
    private repositoryContainer;
    private modelFactory;
    constructor(repositoryContainer: RepositoryContainer, //
    modelFactory: ModelFactory);
    fetchAllPhase(): Promise<PhaseModel[]>;
    createNewPhase(): PhaseModel;
}
