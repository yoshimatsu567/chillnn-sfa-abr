import { PhaseMast, Scalars } from '../..';

export interface IPhaseMastRepository {
    addPhase(input: PhaseMast): Promise<PhaseMast>;
    updatePhase(input: PhaseMast): Promise<PhaseMast>;
    fetchPhasesByClientID(clientID: Scalars['ID']): Promise<PhaseMast[]>;
    fetchPhasesByEditedUserID(editedUserID: Scalars['ID']): Promise<PhaseMast[]>;
    fetchAllPhase(): Promise<PhaseMast[]>;
    fetchAllPhaseTitle(): Promise<PhaseMast[]>;
}
