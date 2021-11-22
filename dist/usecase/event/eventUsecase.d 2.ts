import { RepositoryContainer, ModelFactory } from '../../entities';
import { EventModel } from '../../entities/models/modules/eventModel';
import { EventMast } from '../../entities/type';
export declare class EventUsecase {
    private repositoryContainer;
    private modelFactory;
    constructor(repositoryContainer: RepositoryContainer, //
    modelFactory: ModelFactory);
    fetchAllEvent(): Promise<EventModel[]>;
    fetchEventByEventID(eventID: string): Promise<EventModel | null>;
    fetchEventsByClientID(clientID: string): Promise<EventModel[] | null>;
    createNewEvent(): EventModel;
    deleteEvent(eventID: string): Promise<EventMast>;
}
