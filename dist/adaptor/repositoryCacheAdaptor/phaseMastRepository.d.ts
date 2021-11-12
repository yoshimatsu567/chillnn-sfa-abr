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
    fetchPhaseDataByClientID(clientID: Scalars['ID']): Promise<PhaseMast[]>;
    fetchPhasesByEditedUserID(editedUserID: Scalars['ID']): Promise<PhaseMast[]>;
    fetchAllPhase(): Promise<PhaseMast[]>;
    fetchAllPhaseTitle(): Promise<PhaseMast[]>;
    private addCacheEach;
    private addCacheBulk;
    private updateCacheEach;
    private updateAllPhaseCacheBulk;
    private updateAllPhaseTitleCacheBulk;
    private fetchPhasesByClient;
    private fetchPhasesByEditedUser;
    private fetchCachePhaseAll;
}
