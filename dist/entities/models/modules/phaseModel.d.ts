import { PhaseMast } from '../..';
import { BaseModel } from './_baseModel';
export declare class PhaseModel extends BaseModel<PhaseMast> {
    static getPhaseBlanc(): {
        phaseID: string;
        phaseNumber: number;
        phaseDetail: string;
        createdAt: number;
        updatedAt: number;
    };
    get phaseID(): string;
    get clientID(): import("../..").Maybe<string> | undefined;
    get createdAt(): number;
    get updatedAt(): number;
    get editedUserID(): string;
    set editedUserID(input: string);
    get phaseDetail(): string;
    set phaseDetail(input: string);
    get phaseStatus(): string;
    set phaseStatus(input: string);
    get phaseTerm(): string;
    set phaseTerm(input: string);
    get phaseDate(): string;
    set phaseDate(input: string);
    get phaseNumber(): number;
    set phaseNumber(input: number);
    register(): Promise<void>;
}
