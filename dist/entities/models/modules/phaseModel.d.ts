import { PhaseMast, PHASE_STATUS, Scalars } from '../..';
import { BaseModel } from './_baseModel';
export declare class PhaseModel extends BaseModel<PhaseMast> {
    static getPhaseTitleBlanc(): {
        phaseID: string;
        phaseNumber: number;
        phaseDetail: string;
        phaseStatus: PHASE_STATUS;
        createdAt: number;
        updatedAt: number;
    };
    static getPhaseDataBlanc(clientID: Scalars['ID']): {
        phaseID: string;
        phaseNumber: number;
        phaseDetail: string;
        clientID: string;
        phaseStatus: PHASE_STATUS;
        createdAt: number;
        updatedAt: number;
    };
    get phaseID(): string;
    get createdAt(): number;
    get updatedAt(): number;
    get clientID(): string;
    set clientID(input: string);
    get editedUserID(): string;
    set editedUserID(input: string);
    get phaseDetail(): string;
    set phaseDetail(input: string);
    get phaseStatus(): PHASE_STATUS;
    set phaseStatus(input: PHASE_STATUS);
    get phaseTerm(): string;
    set phaseTerm(input: string);
    get phaseDate(): string;
    set phaseDate(input: string);
    get phaseNumber(): number;
    set phaseNumber(input: number);
    register(): Promise<void>;
}
