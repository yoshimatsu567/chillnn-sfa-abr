import { EventMast, EVENT_STATUS } from '../..';
import { BaseModel } from './_baseModel';
export declare class EventModel extends BaseModel<EventMast> {
    static getEventBlanc(): {
        eventID: string;
        eventNumberStatus: number;
        eventDetail: string;
        eventStatus: EVENT_STATUS;
        eventCountNumber: number;
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
    get eventStatus(): EVENT_STATUS;
    set eventStatus(input: EVENT_STATUS);
    get eventNumberStatus(): number;
    set eventNumberStatus(input: number);
    get eventCountNumber(): number;
    set eventCountNumber(input: number);
    get eventMemo(): string;
    set eventMemo(input: string);
    get eventTerm(): string;
    set eventTerm(input: string);
    get eventDate(): string;
    set eventDate(input: string);
    get isRegisterable(): boolean;
    register(): Promise<void>;
    fetchAllEvent(): Promise<EventModel[]>;
}
