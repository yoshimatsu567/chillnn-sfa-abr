import { EventMast, Scalars } from '../..';

export interface IEventMastRepository {
        addEvent(input: EventMast): Promise<EventMast>;
        updateEvent(input: EventMast): Promise<EventMast>;
        deleteEvent(eventID: Scalars['ID']): Promise<EventMast>;
        fetchEventsByClientID(clientID: Scalars['ID']): Promise<EventMast[]>;
        fetchEventsByEditedUserID(editedUserID: Scalars['ID']): Promise<EventMast[]>;
        fetchAllEvent(): Promise<EventMast[]>;
}
