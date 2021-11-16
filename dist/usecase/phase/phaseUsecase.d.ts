import { RepositoryContainer, ModelFactory } from '../../entities';
import { PhaseModel } from '../../entities/models/modules/phaseModel';
import { Scalars } from '../../entities/type';
export declare class PhaseUsecase {
    private repositoryContainer;
    private modelFactory;
    constructor(repositoryContainer: RepositoryContainer, //
    modelFactory: ModelFactory);
    fetchAllPhase(): Promise<PhaseModel[]>;
    fetchPhaseDataByClientID(clientID: string): Promise<PhaseModel[]>;
    fetchPhaseDataByClientIDAndPhaseDetail(clientID: string, phaseDetail: string): Promise<PhaseModel | null>;
    createNewPhaseTitle(): Promise<PhaseModel>;
    createNewPhaseData(clientID: Scalars['ID']): Promise<PhaseModel>;
}
