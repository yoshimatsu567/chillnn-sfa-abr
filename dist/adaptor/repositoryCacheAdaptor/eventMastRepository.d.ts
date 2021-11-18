import { EventMast, Scalars } from '../..';
import { IEventMastRepository } from '../../entities/repositories/modules/eventMastRepository';
export declare class EventRepositoryCacheAdaptor implements IEventMastRepository {
    private repository;
    private clientCache;
    private eventCache;
    private eventAllCache;
    private eventEachCache;
    constructor(repository: IEventMastRepository);
    addEvent(input: EventMast): Promise<EventMast>;
    updateEvent(input: EventMast): Promise<EventMast>;
    deleteEvent(eventID: string): Promise<EventMast>;
    fetchEventByEventID(eventID: string): Promise<EventMast | null>;
    fetchEventsByClientID(clientID: Scalars['ID']): Promise<EventMast[]>;
    fetchEventsByEditedUserID(editedUserID: Scalars['ID']): Promise<EventMast[]>;
    fetchAllEvent(): Promise<EventMast[]>;
    private addCacheEach;
    private addCacheBulk;
    private updateCacheEach;
    private updateCacheBulk;
    private fetchEvent;
    private fetchEventsByClient;
    private fetchEventsByEditedUser;
    private fetchCacheEventAll;
}
