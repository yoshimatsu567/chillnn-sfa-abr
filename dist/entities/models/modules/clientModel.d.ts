import { ClientMast } from '../../type';
import { EventModel } from './eventModel';
import { PhaseModel } from './phaseModel';
import { BaseModel } from './_baseModel';
export declare class ClientModel extends BaseModel<ClientMast> {
    static getBlanc(): ClientMast;
    get clientID(): string;
    get createdAt(): number;
    get updatedAt(): number;
    get chargeUserID(): string;
    set chargeUserID(input: string);
    get prefecture(): string;
    set prefecture(input: string);
    get homePagePotential(): string;
    set homePagePotential(input: string);
    get clientEmail(): string;
    set clientEmail(input: string);
    get clientPhoneNumber(): string;
    set clientPhoneNumber(input: string);
    get phaseStatus(): number;
    set phaseStatus(input: number);
    get appointmentStatus(): string;
    set appointmentStatus(input: string);
    get pastStatus(): string;
    set pastStatus(input: string);
    get newStatus(): string;
    set newStatus(input: string);
    get companyName(): string;
    set companyName(input: string);
    get accommodationName(): string;
    set accommodationName(input: string);
    get expectedSalesAmount(): string;
    set expectedSalesAmount(input: string);
    get clientUserName(): string;
    set clientUserName(input: string);
    get requiredTime(): string;
    set requiredTime(input: string);
    get isRegisterable(): boolean;
    register(): Promise<void>;
    createNewEvent(): EventModel;
    createNewPhaseData(): Promise<PhaseModel>;
    createNewPhaseTitle(): Promise<PhaseModel>;
}
