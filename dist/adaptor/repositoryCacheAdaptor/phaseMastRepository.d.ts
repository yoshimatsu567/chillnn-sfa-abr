import { PhaseMast, Scalars } from '../..';
import { IPhaseMastRepository } from '../../entities/repositories/modules/phaseMastRepository';
export declare class PhaseRepositoryCacheAdaptor implements IPhaseMastRepository {
    private repository;
    private clientCache;
    private phaseCache;
    private phaseAllCache;
    private phaseEachCache;
    constructor(repository: IPhaseMastRepository);
    addPhase(input: PhaseMast): Promise<PhaseMast>;
    updatePhase(input: PhaseMast): Promise<PhaseMast>;
    deletePhase(phaseID: string): Promise<PhaseMast>;
    fetchPhaseByPhaseID(phaseID: string): Promise<PhaseMast | null>;
    fetchPhaseDataByClientID(clientID: Scalars['ID']): Promise<PhaseMast[]>;
    fetchPhaseDataByClientIDAndPhaseDetail(clientID: Scalars['ID'], phaseDetail: Scalars['String']): Promise<PhaseMast | null>;
    fetchPhaseDataByEditedUserID(editedUserID: Scalars['ID']): Promise<PhaseMast[]>;
    fetchAllPhase(): Promise<PhaseMast[]>;
    private addCacheEach;
    private addCacheBulk;
    private updateCacheEach;
    private fetchPhase;
    private updateAllPhaseCacheBulk;
    private updateAllPhaseTitleCacheBulk;
    private fetchPhasesByClient;
    private fetchPhasesByEditedUser;
    private fetchCachePhaseAll;
}
