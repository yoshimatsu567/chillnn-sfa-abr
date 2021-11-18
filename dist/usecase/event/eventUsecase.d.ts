import { RepositoryContainer, ModelFactory } from '../../entities';
import { EventModel } from '../../entities/models/modules/eventModel';
export declare class EventUsecase {
    private repositoryContainer;
    private modelFactory;
    constructor(repositoryContainer: RepositoryContainer, //
    modelFactory: ModelFactory);
    fetchAllEvent(): Promise<EventModel[]>;
    fetchEventByEventID(eventID: string): Promise<EventModel | null>;
    createNewEvent(): EventModel;
}
