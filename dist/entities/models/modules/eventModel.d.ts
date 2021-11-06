import { EventMast, Scalars } from '../..';
import { BaseModel } from './_baseModel';
export declare class EventModel extends BaseModel<EventMast> {
    static getEventBlanc(clientID: Scalars['ID'], editedUserID: Scalars['ID']): {
        eventID: string;
        clientID: string;
        editedUserID: string;
        eventNumber: number;
        eventDetail: string;
        eventStatus: string;
        createdAt: number;
        updatedAt: number;
    };
    get eventID(): string;
    get createdAt(): number;
    get updatedAt(): number;
    get editedUserID(): string;
    set editedUserID(input: string);
    get eventDetail(): string;
    set eventDetail(input: string);
    get eventStatus(): string;
    set phaseStatus(input: string);
    get eventMemo(): string;
    set eventMemo(input: string);
    get eventTerm(): string;
    set eventTerm(input: string);
    get eventDate(): string;
    set eventDate(input: string);
    get eventNumber(): number;
    set eventNumber(input: number);
    get isRegisterable(): boolean;
    register(): Promise<void>;
    fetchAllEvent(): Promise<EventModel[]>;
}
