import { PhaseMast, Scalars } from '../..';

export interface IPhaseMastRepository {
        addPhase(input: PhaseMast): Promise<PhaseMast>;
        updatePhase(input: PhaseMast): Promise<PhaseMast>;
        deletePhase(phaseID: Scalars['ID']): Promise<PhaseMast>;
        fetchPhaseByPhaseID(phaseID: Scalars['ID']): Promise<PhaseMast | null>;
        fetchPhaseDataByClientID(clientID: Scalars['ID']): Promise<PhaseMast[]>;
        fetchPhaseDataByEditedUserID(editedUserID: Scalars['ID']): Promise<PhaseMast[]>;
        fetchPhaseDataByClientIDAndPhaseDetail(clientID: Scalars['ID'], phaseStatus: Scalars['String']): Promise<PhaseMast | null>;
        fetchAllPhase(): Promise<PhaseMast[]>;
}
